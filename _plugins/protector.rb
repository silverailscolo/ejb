# SPDX-FileCopyrightText: Copyright (C) 2021 Andrea Carriero, 2024-2025 EJ Broerse
#
# SPDX-License-Identifier: MIT

# https://andreacarriero.com/2018/05/21/encrypted-and-password-protected-pages-on-jekyll
# A custom plugin for Jekyll to create AES256 CBC encrypted pages that can be decrypted on-the-fly in the browser with a password.

require 'base64'
require 'digest'
require 'openssl'
# for base64-encoder
require 'open-uri'
require 'pathname'

module Jekyll
    class ProtectedPage < Page
        def aes256_encrypt(password, cleardata)
            digest = Digest::SHA256.new
            digest.update(password)
            key = digest.digest

            cipher = OpenSSL::Cipher::AES256.new(:CBC)
            cipher.encrypt
            cipher.key = key
            cipher.iv = iv = cipher.random_iv

            encrypted = cipher.update(cleardata) + cipher.final
            encoded_msg = Base64.encode64(encrypted).gsub(/\n/, '')
            encoded_iv = Base64.encode64(iv).gsub(/\n/, '')

            hmac = Base64.encode64(OpenSSL::HMAC.digest('sha256', key, encoded_msg)).strip

            "#{encoded_iv}|#{hmac}|#{encoded_msg}"
        end

        def initialize(site, base, dir, to_protect)
            @site = site
            @base = base
            @dir = dir
            @name = 'index.html'

            #if (to_protect.data['lang'] == site.active_lang) # only for file language, redundant after if in ProtectedPageGenerator?
            puts "processing liquid tags for " + to_protect.basename
            input = to_protect.content # preprocess liquid tags
            # if regenerate # sorry, can't tell at this point
            while true # jekyll-base64 tag
                paths_to_encode = /\{\% base64 .+ \%\}/.match(input) # a MatchData object, multiple arts?
                if paths_to_encode.nil?
                    break
                end
                # copied lines from jekyll-base64.rb plugin EBR 2024
                # Get base path of html template
                @pad = " " * 6
                @imgsrc = paths_to_encode.to_s[10..-4]
                basepath = Dir.pwd # @cs[:site].source
                puts "basepath: " + basepath + " imgsrc: " + @imgsrc
                # don't handle relative paths for simplicity
                @abspath = Pathname.new(File.join(basepath,  @imgsrc))
                if (@imgsrc.chars.first == "/") && File.exist?(@abspath)
                    # Open file in read mode
                    image = File.open(@abspath, "r")
                    # Get the content of the file as a string
                    imgstring = ""
                    image.each { |line| imgstring << line }
                    # Get image extension (e.g. ".png")
                    imageext = File.extname(@imgsrc).gsub(/(\.\w+).*/, '\1').downcase;
                    # Generate dataURI schema
                    @dataURI = "data:image/";
                    case imageext
                       when ".jpg"
                          @dataURI += "jpeg"
                       when ".svg"
                          @dataURI += "svg+xml"
                       else
                          # the MIME type is finally inferred from the file extension
                          @dataURI += imageext.gsub('.', '')
                    end
                    @dataURI += ";base64,"
                    # yay, we encode it
                    @dataURI += Base64.strict_encode64(imgstring)
                    puts "Encoded image " + @abspath.to_s
                    b64 = @dataURI
                else
                    puts "Failed to encode " + @abspath.to_s
                    b64 = "Image not found. Only use absolute path from site root"
                end
                input.sub!(paths_to_encode.to_s, b64) # first tag found
            end
            # TODO handle more tags?
            markdown_content = input
            # any liquid processing must be done before this point
            markdown_converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
            html_content = markdown_converter.convert(markdown_content)

            self.process(@name)
            self.read_yaml(File.join(base, '_layouts'), 'protected.html') # this way CSS etc inherited from default are gone
            self.data['title'] = to_protect.data['title']
            self.data['lang'] = to_protect.data['lang'] # for polyglot
            self.data['page-id'] = to_protect.data['page-id'] # for polyglot
            self.data['permalink'] = to_protect.data['permalink'] # for polyglot
            self.data['layout'] = to_protect.data['protected'] # for polyglot

            content_digest = Digest::SHA1.new
            content_digest.update(to_protect.data.to_s + to_protect.content)
            content_hash = content_digest.hexdigest

            Jekyll.logger.info "Generating protected blocks for #{self.data['title']}, lang #{site.active_lang}"
            protected_cache_path = File.join(Dir.pwd, '_protected-cache', site.active_lang)
            page_cache_path = File.join(protected_cache_path, to_protect.basename_without_ext)
            hash_path = File.join(page_cache_path, 'hash')
            payload_path = File.join(page_cache_path, 'payload')
            protected_path = File.join(Dir.pwd, '_protected-pages', site.active_lang)
            markdown_path = File.join(protected_path, (to_protect.basename_without_ext + '.md'))

            regenerate = false

            if File.exist?(hash_path) && File.exist?(payload_path)
                cached_hash = File.read(hash_path).strip
                cached_payload = File.read(payload_path).strip

                if cached_hash == content_hash
                    self.data['protected_content'] = cached_payload
                else
                    regenerate = true
                end
            end

            if !Dir.exist?(protected_cache_path)
                Dir.mkdir(protected_cache_path)
            end

            if !Dir.exist?(page_cache_path)
                Dir.mkdir(page_cache_path)
            end

            if !File.exist?(hash_path) || regenerate
                hash_file = File.new(hash_path, "w")
                hash_file.puts(content_hash)
                hash_file.close
            end

            if !File.exist?(payload_path) || regenerate
                # from here no liquid will be unpacked
                pwd = to_protect.data['password']
                if pwd.is_a? Integer # bugfix catch numeric password without quotes
                  pwd = pwd.to_s
                end
                encrypted_content = self.aes256_encrypt(pwd, html_content)
                payload_file = File.new(payload_path, "w")
                payload_file.puts(encrypted_content)
                payload_file.close
                self.data['protected_content'] = encrypted_content
            end

            # create new markdown file. for polyglot
            if !Dir.exist?(protected_path)
                Dir.mkdir(protected_path)
            end

            Jekyll.logger.info "Creating md page #{self.data['title']}"
            p = File.new(markdown_path, "w")
            p.puts "---"
            p.puts "title: #{self.data['title']}"
            if (self.data['lang'] != nil)
              p.puts "lang: #{self.data['lang']}"
            end
            if (self.data['page-id'] != nil)
              p.puts "page-id: #{self.data['page-id']}"
            end
            if (self.data['permalink'] != nil)
              p.puts "permalink: #{self.data['permalink']}"
            end
            if (self.data['layout'] != nil)
              p.puts "layout: #{self.data['layout']}"
            else
              p.puts "layout: protected"
            end
            p.puts "protectedContent: #{self.data['protected_content']}"
            p.puts "---"
            p.puts "" # newline required for prettier
            p.puts "Autogenerated by Jekyll" # debug
            p.close

            #else
            #    Jekyll.logger.info "Skipping protected page #{to_protect.data['title']}"
            #end
        end
    end

    class ProtectedPageGenerator < Generator
        def generate(site)
            Jekyll.logger.info "Starting page generation for lang #{site.active_lang}"
            dir = 'protected'

            protected_pages_names = []

            site.collections['protected'].docs.each do |plain_page|
                protected_page_path = File.join(dir, plain_page.basename_without_ext) # no lang subfolder here

                if (plain_page.data['lang'] == site.active_lang)
                    # only process for page language, polyglot will create fallback copies
                    protected_page = ProtectedPage.new(site, site.source, protected_page_path, plain_page)
                    site.pages << protected_page

                    protected_pages_names << plain_page.basename_without_ext # hash folder list
                    # protected_pages_names << (plain_page.basename_without_ext + '.md') # used to generate protected gh_pages
                end
            end

            # protected_cache_path = File.join(Dir.pwd, '_protected-cache')
            protected_cache_path = File.join(Dir.pwd, '_protected-cache', site.active_lang)
            if Dir.exist?(protected_cache_path)  # only run locally to protect unencoded originals, _protected-cache is in .gitignore
                Dir.foreach(protected_cache_path) do |cached_page|
                    next if cached_page == '.' or cached_page == '..'
                    # if !(protected_pages_names.include? cached_page)
                        # cleaning up old protected files in cache also removes newly created .md output, add another list?
                        #FileUtils.rm_rf(File.join(protected_cache_path, cached_page))
                    # end
                end
            end
        end
    end
end
