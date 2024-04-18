# Title: LightGallery Tag for Jekyll
# Authors: Alex Bevilacqua <alex@alexbevi.com>
# Description: incorporate the LightGallery inline JavaScript gallery
#
# Adaption of "Photos tag for Jekyll" by Devin Weaver, and the derived
# "Gallery Tag for Jekyll" by Kevin Brown.
#
# Installation:
#
# {% gallery_includes %}
#
# This macro should be added to the `<HEAD>` of your template(s)
# in order to load the libraries and stylesheets needed by LightGallery
#
# Usage:
#
# {% gallery %}
#   photo1.jpg
#   /path/to/photos/photo2.jpg
# {% endgallery %}
#
module Jekyll
  require 'exif'
  $tag = 'image_description'

  class PhotosUtil
    def initialize(context)
      @context = context
    end

    def path_for(filename)
      filename = filename.strip
      prefix = (@context.environments.first['site']['baseurl'] unless filename =~ /^(?:\/|http)/i) || ""
      "#{prefix}#{filename}"
    end
  end

  class LightGalleryScriptIncludePatch < Liquid::Tag
    def render(context)
      # https://cdnjs.com/libraries/lightgallery
      return <<-eof
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/lightgallery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/plugins/zoom/lg-zoom.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/plugins/thumbnail/lg-thumbnail.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/plugins/fullscreen/lg-fullscreen.umd.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/plugins/autoplay/lg-autoplay.min.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lightgallery-bundle.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lg-transitions.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lg-zoom.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lg-thumbnail.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lg-autoplay.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lg-fullscreen.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>

<style>
  .inline-gallery-container {
    width: 100%;
    height: 0;
    padding-bottom: 65%;
  }
</style>
      eof
    end
  end

  class LightGalleryTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      # No initializing needed
      super
    end

    def render(context)
      # Convert the entire content array into one large string
      lines = super
      # split the text by newlines
      lines = lines.split("\n")

      p = PhotosUtil.new(context)

      gallery = "<div id='inline-gallery-container' class='inline-gallery-container'></div>"
      gallery << "<script>"
      gallery << "const lgContainer = document.getElementById('inline-gallery-container');"
      gallery << "const inlineGallery = lightGallery(lgContainer, {"
      gallery << "    container: lgContainer,"
      gallery << "    plugins: [lgZoom, lgThumbnail, lgAutoplay, lgFullscreen],"
      gallery << "    dynamic: true,"
      gallery << "    hash: false,"
      gallery << "    closable: false,"
      gallery << "    showMaximizeIcon: true,"
      gallery << "    appendSubHtmlTo: '.lg-item',"
      gallery << "    slideDelay: 100,"
      gallery << "    speed: 500,"
      gallery << "    thumbnails: true,"
      gallery << "    thumbWidth: 60,"
      gallery << "    thumbHeight: '40px',"
      gallery << "    thumbMargin: 4,"
      gallery << "    dynamicEl: [ "
      lines.each_with_index do |line, i|
        next if line.empty?
        filename, title = line.split(":")
        if title == nil
          begin
            exif = Exif::Data.new(File.open(p.path_for(filename)))
          rescue StandardError => e
            # puts "No EXIF header in file #{filename}: #{e}"
          end
          if exif != nil
            tag = $tag
            answer = tag.split('.').inject(exif) do |exif,tag|
              exif.send(tag)
            end
          end
          if answer != nil
            title = answer
          else
            title = filename
          end
        else
          title.strip
        end
        gallery << "{ src: '#{p.path_for(filename)}', thumb: '#{p.path_for(filename)}', subHtml: '#{title}' },"
      end
      gallery << "], thumbWidth: 60, thumbHeight: \"40px\", thumbMargin: 4 });"
      gallery << "inlineGallery.openGallery();"
      gallery << "</script>"
      gallery
    end
  end
end

Liquid::Template.register_tag('gallery', Jekyll::LightGalleryTag)
Liquid::Template.register_tag('gallery_includes', Jekyll::LightGalleryScriptIncludePatch)
