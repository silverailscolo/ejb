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
# Egbert switched exifr gem to exiftools
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

module Jekyll
  class ExifTag < Liquid::Tag
    $copyright = "© 1995-2024 EJ Broerse CC-BY-NC-SA 4.0"

    def initialize(tag_name, params, token)
      super
      @args = self.split_params(params)
    end

    def render(context)
      sources = Array.new()
      if context.registers[:site].config['exiftag'] and context.registers[:site].config['exiftag']['sources']
        sources.unshift(*context.registers[:site].config['exiftag']['sources'])
      end

      # first param is the exif tag
      tag = @args[0]

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
      exif = Exiftool.new("#{file_name}")
      # copied from art-gallery, TODO exiftool per directory? EBR
      if exif != nil

        if (tag == "gps?")
          return exif[:"gps"] != nil
        end

        if (tag == "copyright-cascade")
          copy = exif[:"CopyrightNotice"] == nil ? exif[:"copyright"] : exif[:"CopyrightNotice"]
          if copy == nil
            copy = $copyright
          end
          return copy.force_encoding("UTF-8")
        end

        if (tag == "caption-cascade")
          answer = exif[:"description"] # XMP Caption field
          if answer == nil
            answer = exif[:"caption-abstract"] # IPTC Caption field
            if answer == nil
              answer = exif[:"UserComment"] # in use for trains2 images
              if answer == nil
                answer = exif[:"Image_Description"] # EXIF
                if answer == nil
                  answer = exif[:"Comment"] # EXIF
                end
              end
            end
          end
        else
          tags = tag.split('.')
          answer = ""
          for t in tags
            answer += exif[:"#{t}"].to_s
            # allows to request multiple tags in one query, separated by "."
          end
        end

        if answer != nil and answer != ""
          answer.gsub(/"/, "") # strip quotes from answer to protect html
          # puts "EXIFtool fetched tag #{tag} for image #{img}: #{answer}"
          return answer.force_encoding("UTF-8")
        else
          # If no caption defined, add a trimmed filename to help with SEO
          return File.basename(img, File.extname(img)).gsub("_", " ")
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
