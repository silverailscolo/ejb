# -*- coding: utf-8 -*-
# A LiquidTag to read xml into YAML
#
# Usage:
# {% readxml [file] %}
#
# If the file is given, this is the file to get Exif Tags for, this can be alternatively defined in the YAML Front Matter as img: file
# Used for rollingstock collection..
#
# Configuration:
#
# Put this in your _config.yml
#
# readxml:
#  sources:
#    - assets/xml
#
# These paths are relative to your sites root. Don't add leading and trailing slashes.

require 'nokogiri'
require 'yaml'

module Jekyll
  module ReadXml # < Liquid::File
      file_name = '/assets.xml/roster.xml'
      # first param is the file name
      # file_name = @args[0]

      # try it and return empty string on failure
      begin
        # load from file
        xml = File.read(file_name)
        Nokogiri::XML(xml)
        puts object.to_xml(indent: 2) # debug
        ret = YAML.load(Hash.from_xml(xml).to_yaml)
        puts(ret)
        #return ret

      rescue StandardError => e  
        puts e.message 
        file_name
      end

  end
end

Liquid::Template.register_filter(Jekyll::ReadXml)
