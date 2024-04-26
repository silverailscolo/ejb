# -*- coding: utf-8 -*-
# A LiquidTag to get Exif Tags using EXIF
# Original by: Beni Buess. Adapted Egbert Broerse April 2024
#
# Usage:
#
# {% exiftag tagname,[source],[file] %}
#
# Everything given as tagname is called on EXIFR::JPEG, so this could be model or f_number.to_f (see https://github.com/remvee/exifr)
# If you give a source, this source is used build the fullpath for the given file (you can also configure them in _config.yml, see below)
# If the file is given, this is the file to get Exif Tags for, this can be alternatively defined in the YAML Front Matter as img: file
# Used for Jimmy Xiao's Lightgallery shows.
# Egbert switched exifr gem to https://github.com/tonytonyjan/exif gem, requires libexif program
#
# Configuration:
#
# Put this in your _config.yml
#
# exiftag:
#  sources:
#    - photos
#    - photos/other_source
#
# These paths are relative to your sites root. Don't add leading and trailing slashes.
#
# Example tags (you can nest tags, putting . between each)

require 'exiftool'
require 'exiftool_vendored'
# require 'mini_magick'

module Jekyll
  class ExifTag < Liquid::Tag
    def initialize(tag_name, params, token)
      super
      @args = self.split_params(params)
      # puts "EXIFTAG def ========= "
    end

    def render(context)
      sources = Array.new()
      if context.registers[:site].config['exiftag'] and context.registers[:site].config['exiftag']['sources']
        sources.unshift(*context.registers[:site].config['exiftag']['sources'])
      end

      # first param is the exif tag
      tag = @args[0]
      # puts "EXIFTAG tag ========= " + tag

      # if a second parameter is passed, use it as a possible img source
      if @args.count > 1
        src = Liquid::Template.parse(@args[1]).render context
        sources.unshift(src)
      end

      # the image can be passed as the third parameter
      if @args.count > 2
        img = Liquid::Template.parse(@args[2]).render context
      # or be defined in the YAML Front Matter like img: <file>
      else
        img = context.environments.first["page"]["img"]
      end

      img = File.expand_path("../.." + img, __FILE__)
      # puts "EXIFTAG img ========= " + img
      # first check if the given img is already the path
      if File.exist?(img)
        file_name = img
      else
      # then start testing with the sources from _config.yml
        begin
          source = sources.shift
          file_name = File.join(context.registers[:site].config['source'], source, img)
        end until File.exist?(file_name) or sources.count == 0
      end

      # try it and return empty string on failure
      #begin
        # image = MiniMagick::Image.read(File.expand_path(input, __FILE__))
        # exif = image.exif

        #exif = Exif::Data.new(File.open(img)) # load from file
#         if (exif[:iptc] != nil)
#           puts "========= EXIFTAG===IPTC"
#           puts exif[:iptc]
#         end
      #rescue StandardError => e
        # puts e.message
        # file_name
      #end

      exif = Exiftool.new("#{file_name}")
      # copied from art-gallery EBR
      if exif != nil
        # puts exif.to_hash

#         answer = tag.split('.').inject(exif) do |exif,tag|
#           exif.send(tag)
#         end

        if (tag == "gps?")
          return exif[:"gps"] != nil
        end
        if (tag == "caption-cascade")
          answer = exif[:"description"] # XMP Caption field
          if answer == nil
           answer = exif[:"caption-abstract"] # IPTC Caption field
             if answer == nil
               answer = exif[:"comment"] # in use for trains2
               if answer == nil
                 answer = exif[:"ImageDescription"] # EXIF
               end
            end
          end
        else
          answer = exif[:"#{tag}"]
        end

        if answer != nil and answer != ""
          puts "EXIFtool fetched tag #{tag} for image #{img}: #{answer}"
          return answer.force_encoding("UTF-8")
        else
          # If no caption defined, add a trimmed filename to help with SEO
          return File.basename(img, File.extname(img)).gsub("_", " ")
          # puts "Added filename as caption"
        end
      else
        return "?"
      end
    end

    def split_params(params)
      params.split(",").map(&:strip)
    end
  end
end

Liquid::Template.register_tag('exiftag', Jekyll::ExifTag)
