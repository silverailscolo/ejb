# SPDX-FileCopyrightText: 2024 ggreer
#
# SPDX-License-Identifier: MIT

# Jekyll art gallery generator plugin
# Distributed under MIT license with attribution
# sourced from https://github.com/ggreer/jekyll-gallery-generator
# updated EJ Broerse from using rmagick gem (unsupported, memory hog) to MiniMagick, added exiftool tag titles April 2024
# Note 1: img filenames are normalized/lowercase space > _ and larger images resized, so this plug-in may
# conflict with Generators that plainly copy files to _site/assets
# Note 2: polyglot will duplicate pages and assets to secondary language dirs, acceptable to make relative links work

require 'mini_magick'
require 'exiftool'
require 'exiftool_vendored'

$image_extensions = [".png", ".jpg", ".jpeg", ".gif"]

module Jekyll
  class GalleryFile < StaticFile
    def write(dest)
      return false
    end
  end

  class ReadYamlPage < Page
    def read_yaml(base, name)
      begin
        self.content = File.read(File.join(base.to_s, name.to_s))
        if content =~ /\A(---\s*\n.*?\n?)^((---|\.\.\.)\s*$\n?)/m
          self.content = $POSTMATCH
          self.data = SafeYAML.load($1)
        end
      rescue SyntaxError => e
        Jekyll.logger.warn "YAML Exception reading #{File.join(base, name)}: #{e.message}"
      rescue Exception => e
        Jekyll.logger.warn "Error reading file #{File.join(base, name)}: #{e.message}"
      end

      self.data ||= {}
    end
  end

  # main page linking all art_galleries together
  class GalleryIndex < ReadYamlPage
    def initialize(site, base, dir, galleries)
      @site = site
      @base = base
      @dir = dir.gsub(/^_/, "")
      @name = "index.html"
      # load gallery configs from the _data/art_gallery.yml file
      config = site.data["art_gallery"] || {}

      self.process(@name)
      gallery_index = File.join(base, "_layouts", "art_gallery_index.html")
      unless File.exist?(gallery_index)
        gallery_index = File.join(File.dirname(__FILE__), "art_gallery_index.html")
      end
      self.read_yaml(File.dirname(gallery_index), File.basename(gallery_index))
      self.data["title"] = config["title"] || "Photos"
      self.data["galleries"] = []

      begin
        sort_field = config["sort_field"] || "name"
        galleries.sort! {|a,b| a.data[sort_field] <=> b.data[sort_field]}
      rescue Exception => e
        puts "Error sorting galleries: #{e}"
        puts e.backtrace
      end
      if config["sort_reverse"]
        galleries.reverse!
      end

      site.data["galleries-sorted"]=[]
      galleries.each {|gallery|
        unless gallery.hidden
          self.data["galleries"].push(gallery.data)
          # site-wide data for use in liquid templates
          # available to liquid via site.data.art_gallery.galleries.[name].
          # subitems are manually defined in art_gallery.yml, and title, link, description, best_image etc and images array
          # inject additional auto-discovered data back into sitewide art_gallery object
          gallery_title = gallery.data["title"]
          if site.data["art_gallery"]["galleries"].has_key?(gallery_title)
            site.data["art_gallery"]["galleries"][gallery_title].merge!(gallery.data)
          else
            site.data["art_gallery"]["galleries"][gallery_title] = gallery.data
          end
          site.data["navigation"].push({"title"=> gallery.data["title"], "url"=> gallery.data["link"], "side"=> "left"})
          site.data["galleries-sorted"].push(gallery.data["title"])
          # sorted array to order the galleries hash on the Portfolio page, used where?
        end
      }
    end
  end

  # gallery page for each art_gallery
  class GalleryPage < ReadYamlPage
    attr_reader :hidden

    def initialize(site, base, dir, gallery_name)
      @site = site
      @base = base
      #source_dir=dir

      @dir = dir.gsub(/^_/, "").gsub(/[^0-9A-Za-z.\\\-\/]/, '_').downcase
      # destination dir, same as source without the leading underscore. web compatible
      FileUtils.mkdir_p(site.in_dest_dir(@dir), :mode => 0755)

      @name = "index.html"
      @images = []
      @hidden = false

      # load configs, set defaults
      config = site.data["art_gallery"] || {}
      symlink = config["symlink"] || false
      # downcase gallery names, technically duplicating them
      galleries = {}
      (config["galleries"] || {}).each_pair do |k,v|
          galleries.merge!({k.downcase => v})
        end
      gallery_config = galleries[gallery_name.downcase] || {}
      puts "Generating Art-Gallery '#{gallery_name}' for #{site.active_lang}"
      sort_field = config["sort_field"] || "name"
      self.process(@name)
      gallery_page = File.join(base, "_layouts/art_gallery_page.html")
      unless File.exist?(gallery_page)
        gallery_page = File.join(File.dirname(__FILE__), "art_gallery_page.html")
      end
      self.read_yaml(File.dirname(gallery_page), File.basename(gallery_page))
      self.data["gallery"] = gallery_name # aka folder name
      self.data["description"] = gallery_config["description"]  || "" #...HERE an error reading on github, runs OK locally
      # prettify gallery name if not set
      gallery_name = gallery_name.gsub("_", " ").gsub(/\w+/) {|word| word.capitalize}
      gallery_name = gallery_config["title"] || gallery_name
      self.data["title"] = gallery_name
      self.data["link"] = "/#{@dir}/"
      # thumbnail destination
      scale_method = gallery_config["scale_method"] || config["scale_method"] || "fit"
      # each art-gallery can have its own scale method, or use the global scale if defined
      @hidden = gallery_config["hidden"] || false
      # the gallery can alternatively be hidden by renaming it to start with a dot
      if @hidden
        self.data["sitemap"] = false
        return
      end
      if config["watermark"]
        # load watermark image
        puts "Watermark: " + File.join(base, "assets/img", config["watermark"])
        wm_img = ::MiniMagick::Image.open(File.join(base, "assets/img", config["watermark"]))
      end

        # process and copy images
      self.data["captions"] = {}
      date_times = {}

      # Start up exiftool just once to get all tags
      exiftoolBatch = Exiftool.new(Dir["#{File.join(Dir.pwd, dir)}/*.*"]) # we are in original_dir
      # exiftoolBatch == nil ? (puts "nil exiftool result") : (puts "nonnull exiftoolBatch")
      # puts exiftoolBatch.files_with_results

      Dir.foreach(dir) do |image|
        next if image.chars.first == "." # skip invisible files
        next unless image.downcase().end_with?(*$image_extensions) # skip non-image files

        image_path = File.join(dir, image) # source image short path
        # puts "Art-Gallery processing image: #{image_path} (1)" # not yet normalized

        # extract timestamp
        if sort_field == "timestamp"
          begin
            date_times[image] = 0
            date = File.mtime(image_path)
            # puts "Date found: #{date}" # 2024-04-09 10:59:53 +0200
            # puts "date_secs = #{date.to_i.to_s}"
            if date != nil
              date_times[image] = date.to_i
            end
          rescue Exception => e
            puts "Error getting date_time #{date_times[image].to_s} for #{image}: #{e}"
          end
        end
        # cleanup, watermark and copy the files
        # Strip out the non-ascii character and downcase the final file name
        dest_image = image.gsub(/[^0-9A-Za-z.\-]/, '_').downcase
        # NOTE: a second copy without downcase is put in the same place (error + dead link on linux)
        if site.active_lang == site.default_lang # EBR fix non-default polyglot lang messing up static_files
          dest_image_abs_path = site.in_dest_dir(File.join(@dir, dest_image))
          if File.file?(dest_image_abs_path) == false or File.mtime(image_path) > File.mtime(dest_image_abs_path)
            if config["strip_exif"] or config["watermark"] or config["size_limit"]
              # can't simply copy or symlink, need to pre-process the image
              begin
                source_img = ::MiniMagick::Image.open(image_path)
                if config["strip_exif"]
                  print "stripping EXIF..."
                  source_img.strip
                end
                if config["watermark"]
                  if [source_img.width, source_img.height].min < 600
                    print "too small to watermark"
                  else
                    print "watermarking"
                    source_img.composite(wm_img) do |c|
                      c.geometry "-20-20"
                      c.gravity "SouthEast"
                      c.compose "Over"
                    end
                  end
                end
                if config["size_limit"] and (source_img.width > config["size_limit"] || source_img.height > config["size_limit"])
                  source_img.resize config["size_limit"].to_s + "x" + config["size_limit"].to_s
                  # resize only if bigger than the limit
                end
                source_img.write dest_image_abs_path
                print "\n"
              rescue StandardError => e
                puts "Error reading image file #{image_path}: #{e}"
              end
            elsif symlink
              print "Symlinking #{image_path} to #{dest_image}..."
              link_src = site.in_source_dir(image_path)
              link_dest = dest_image_abs_path
              @site.static_files.delete_if { |sf|
                sf.relative_path == "/" + image_path
              }
              @site.static_files << GalleryFile.new(site, base, dir, image)
              if File.exist?(link_dest) or File.symlink?(link_dest)
                if not File.symlink?(link_dest)
                  puts "#{link_dest} exists but is not a symlink. Deleting."
                  File.delete(link_dest)
                elsif File.readlink(link_dest) != link_src
                  puts "#{link_dest} points to the wrong file. Deleting."
                  File.delete(link_dest)
                end
              end
              if not File.exist?(link_dest) and not File.symlink?(link_dest)
                File.symlink(link_src, link_dest)
              end
              print "\n"
            else
              puts "Copying #{image_path} to #{dest_image}..."
              FileUtils.cp(image_path, dest_image_abs_path)
            end
          end
        else
          puts "Art-Gallery skipping #{site.active_lang} image"
        end

        # Add file descriptions if defined
        if gallery_config.has_key?(image)
          self.data["captions"][dest_image] = gallery_config[image]
        else
          begin
            fullpath = Dir.pwd + "/" + image_path # using original file name, so non-normalized
            exif = exiftoolBatch.result_for(fullpath) # would be more efficient to start exiftool just once at start
          rescue StandardError => e
            # puts "No EXIF header in file #{fullpath}: #{e}"
          end
          if exif != nil
            # puts exif.to_hash
            capt = exif[:"description"] || "" # XMP Caption field
            # fall thru to: headline (IPTC), ImageDescription (EXIF)
            # Valid exiftag.exiftool tags:
            # EXIF: ImageDescription, UserComment; IPTC: headline, caption; XMP: Description, Comment;
            # All blocks: copyright (case insensitive)
            if capt == nil
              capt = exif[:"Caption"] || "" # XMP alt Caption field
            end
            if capt == nil
              capt = exif[:"headline"] || "" # IPTC Caption field
            end
            if capt == nil
              capt = exif[:"caption-abstract"] || "" # IPTC Caption field
            end
            if capt == nil
              capt = exif[:"Image_Description"] || "" # EXIF Caption field
            end
            if capt == nil
              capt = exif[:"User_Comment"] || "" # EXIF User Comment field
            end
            copy = exif[:"CopyrightNotice"] == nil ? exif[:"copyright"] : exif[:"CopyrightNotice"]
            answer = capt + ( copy == nil ? "" : ", " + copy)
          end
          if answer != nil and answer != ""
            answer_utf8 = answer.encode('UTF-8')  # ensure UTF8 encoding, cf. exiftag.rb
            # Jekyll.logger.info "Exiftag/exiftool fetched tag for image #{image_path}: #{answer_utf8}"
            self.data["captions"][dest_image] = answer_utf8
          else
            # If no caption defined, add a trimmed filename to help with SEO
            self.data["captions"][dest_image] = File.basename(image, File.extname(image)).gsub("_", " ")
          end
        end
        # remember the image
        @images.push(dest_image)
        if site.active_lang == site.default_lang
          @site.static_files << GalleryFile.new(site, base, @dir, dest_image) # EBR don't mark for other languages
          # make a thumbnail
          makeThumb(image_path, dest_image, config["thumbnail_size"]["x"] || 400, config["thumbnail_size"]["y"] || 400, scale_method)
        end
      end

      # sort pictures inside the art-gallery
      begin
        if sort_field == "timestamp"
          @images.sort! {|a,b|
            if date_times[a] == date_times[b]
              a <=> b # do the name if the timestamps match
            else
              date_times[a] <=> date_times[b]
            end
          }
        else
          @images.sort!
        end
        if gallery_config["sort_reverse"]
          @images.reverse!
        end
      rescue Exception => e
        puts "Error sorting images in art-gallery #{gallery_name}: #{e}"
        # puts e.backtrace
      end

      site.static_files = @site.static_files # EBR debug: cause or result?
      self.data["images"] = @images

      best_image = gallery_config["best_image"] || @images[0]
      best_image.gsub!(/[^0-9A-Za-z.\-]/, '_') # renormalize the name - important in case the best image name is specified via config
      best_image.downcase! # two step because mutating gsub returns nil that's unusable in a compound call
      self.data["best_image"] = best_image

      if site.active_lang == site.default_lang
        # generate best image thumb for the gallery front super-index page
        makeThumb(site.in_dest_dir(File.join(@dir, best_image)), "front_"+best_image, config["front_thumb_size"]["x"] || 400, config["front_thumb_size"]["y"] || 400, "crop")
        # generate best image thumb for the header of a gallery index page
        makeThumb(site.in_dest_dir(File.join(@dir, best_image)), "header_"+best_image, config["header_thumb_size"]["x"] || 0, config["header_thumb_size"]["y"] || 400, "crop")
        # used in the theme ERROR HERE RUBY3 UNDEFINED with ["fullwidth"]
      end

      # to make this work in Polyglot non-default language, skip thumb generation, use abs path to assets from root
      self.data["src_path"] = File.join("/", @dir, "/") # start from default language root to find assets
      self.data["header"] = "thumbs/header_"+best_image # used in the theme ERROR HERE RUBY3 UNDEFINED with ["fullwidth"]
      GC.start # garbage collection
    end

    def makeThumb(image_path, dest_image, thumb_x, thumb_y, scale_method)
      # create thumbnail if it is not there
      thumbs_dir = File.join(site.dest, @dir, "thumbs")
      thumb_path = File.join(thumbs_dir, dest_image)

      # create thumbnails
      FileUtils.mkdir_p(thumbs_dir, :mode => 0755)
      if File.file?(thumb_path) == false or File.mtime(image_path) > File.mtime(thumb_path)
        begin
          m_image = ::MiniMagick::Image.open(image_path)
          # m_image.auto_orient!
          thumbsize = thumb_x.to_s + "x" + thumb_y.to_s
          if scale_method == "crop"
            m_image.resize thumbsize
          elsif scale_method == "crop_bottom"
            image.combine_options do |c|
              c.gravity "North"
              c.resize thumbsize
            end
          elsif scale_method == "crop_right"
            image.combine_options do |c|
              c.gravity "West"
              c.resize thumbsize
            end
          elsif scale_method == "crop_left"
            image.combine_options do |c|
              c.gravity "East"
              c.resize thumbsize
            end
          elsif scale_method == "crop_top"
            image.combine_options do |c|
              c.gravity "South"
              c.resize thumbsize
            end
          else
            m_image.resize thumbsize
          end
          # strip EXIF from thumbnails. Some browsers, notably Safari on iOS, will try to rotate images according to the 'orientation' tag which is no longer valid in case of thumbnails
          m_image.strip
          m_image.write thumb_path
        rescue Exception => e
          puts "Error generating thumbnail for #{image_path}: #{e}"
          # puts e.backtrace
        end
      end
      # record the thumbnail
      @site.static_files << GalleryFile.new(@site, @base, thumbs_dir, dest_image) # EBR don't mark for other languages
    end
  end


  class Errorpage
    def initialize(error)
      @data = {}
      @data["title"] = "Error"
      @data["gallery"] = "Error"
      @data["gallery-best-image"] = "An error occurred while creating this gallery, #{error}"
      @data["link"] = "./."
      @name = "index.html"
      @images = []
      @hidden = false
      GC.start #  garbage collection
    end

    def hidden()
      return false
    end

    def data()
      return @data
    end
  end


  class GalleryGenerator < Generator
    safe true

    def generate(site)
      config = site.data["art_gallery"] || {}
      dir = config["source_dir"] || "_photos"
      galleries = []
      original_dir = Dir.getwd

      # generate individual art_galleries
      Dir.chdir(site.source)
      begin
        Dir.foreach(dir) do |gallery_dir|
          gallery_path = File.join(dir, gallery_dir)
          if File.directory?(gallery_path) and gallery_dir.chars.first != "." # skip art_galleries starting with a dot
            puts "Generator loop for path #{gallery_path} dir #{gallery_dir}"
            gallery = GalleryPage.new(site, site.source, gallery_path, gallery_dir)
            gallery.render(site.layouts, site.site_payload)
            gallery.write(site.dest)
            site.pages << gallery
            galleries << gallery
          end
        end
      rescue Exception => e
        puts "Error generating art_galleries: #{e}"
        puts e.backtrace
        galleries << Errorpage.new(e)
      end
      Dir.chdir(original_dir)

      # fix bug
      site.data["navigation"] = []

      # generate gallery index
      gallery_index = GalleryIndex.new(site, site.source, dir, galleries)
      gallery_index.render(site.layouts, site.site_payload)
      gallery_index.write(site.dest)

      site.pages << gallery_index
    end
  end
end
