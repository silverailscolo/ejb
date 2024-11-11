# SPDX-FileCopyrightText: Copyright (C) 2021 Andrea Carriero, 2024 EJ Broerse
#
# SPDX-License-Identifier: MIT

# https://andreacarriero.com/2018/05/21/encrypted-and-password-protected-pages-on-jekyll
# A custom plugin for Jekyll to create AES256 CBC encrypted pages that can be decrypted on-the-fly in the browser with a password.

require 'base64'
require 'digest'
require 'openssl'
require 'fileutils'

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

            #if (to_protect.data['lang'] == site.active_lang) # EBR only for file language, redundant after if in ProtectedPageGenerator?
            markdown_content = to_protect.content
            markdown_converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
            html_content = markdown_converter.convert(markdown_content)

            self.process(@name)
            self.read_yaml(File.join(base, '_layouts'), 'protected.html')
            self.data['title'] = to_protect.data['title']
            self.data['lang'] = to_protect.data['lang'] # EBR for polyglot
            self.data['page_id'] = to_protect.data['page_id'] # EBR for polyglot
            self.data['permalink'] = to_protect.data['permalink'] # EBR for polyglot
            self.data['layout'] = to_protect.data['protected'] # EBR for polyglot

            content_digest = Digest::SHA1.new
            content_digest.update(to_protect.data.to_s + to_protect.content)
            content_hash = content_digest.hexdigest

            Jekyll.logger.info "Generating protected blocks for #{self.data['title']}, lang #{site.active_lang}" # EBR
            # protected_cache_path = File.join(Dir.pwd, '_protected-cache')
            protected_cache_path = File.join(Dir.pwd, '_protected-cache', site.active_lang) # EBR
            page_cache_path = File.join(protected_cache_path, to_protect.basename_without_ext)
            hash_path = File.join(page_cache_path, 'hash')
            payload_path = File.join(page_cache_path, 'payload')
            protected_path = File.join(Dir.pwd, '_protected-pages', site.active_lang) # EBR
            markdown_path = File.join(protected_path, (to_protect.basename_without_ext + '.md')) # EBR

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
                encrypted_content = self.aes256_encrypt(to_protect.data['password'], html_content)
                payload_file = File.new(payload_path, "w")
                payload_file.puts(encrypted_content)
                payload_file.close
                self.data['protected_content'] = encrypted_content
            end

            # create new markdown file. EBR for polyglot

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
            if (self.data['page_id'] != nil)
              p.puts "page_id: #{self.data['page_id']}"
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
            p.puts ""
            p.puts "Autogenerated by Jekyll" # debug
            p.close

            #else
            #    Jekyll.logger.info "Skipping protected page #{to_protect.data['title']}"
            #end
        end
    end

    class ProtectedPageGenerator < Generator
        def generate(site)
            Jekyll.logger.info "Starting page generation for lang #{site.active_lang}" # EBR
            dir = 'protected'

            protected_pages_names = []

            site.collections['protected'].docs.each do |plain_page|
                protected_page_path = File.join(dir, plain_page.basename_without_ext) # EBR no lang subfolder here

                if (plain_page.data['lang'] == site.active_lang)
                    # EBR only process for page language, polyglot will create fallback copies
                    protected_page = ProtectedPage.new(site, site.source, protected_page_path, plain_page)
                    site.pages << protected_page

                    protected_pages_names << plain_page.basename_without_ext # hash folder
                    # protected_pages_names << (plain_page.basename_without_ext + '.md') # used to generate protected gh_pages
                end
            end

            # protected_cache_path = File.join(Dir.pwd, '_protected-cache')
            protected_cache_path = File.join(Dir.pwd, '_protected-cache', site.active_lang) # EBR
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
