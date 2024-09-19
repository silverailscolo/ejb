---
layout: post
lang: en-us
page_id: exiftools
title: Reading EXIF tags in Jekyll with exiftools
date: 2024-04-19
tags:
  - computers
categories:
  - software
---

As I am migrating this site to Jekyll / GitHub pages, I am integrating data that was separate (and under the hood) up to now.
That requires a bit of scripting, with minimal re-entry of stuff.

An important example are my pictures, that I once managed in [Extensis Portfolio](https://www.extensis.com/portfolio), and later as separate files on a local HD.

It would be noce to let you read a caption with each photo that I add to the site, and as I remembered that I once put keywords and captions for many images into the image files as EXIF tags, I now try to read those fields from the images and apply them as captions in the lightGallery slide shows, like <a href='{{ "/assets/art_gallery/sketches/" | relative_url }}'>here</a>.

A lot of (old) tools are available to extract the EXIF tags, but Portfolio used other fields...
After EXIF came IPTC tags, used for GPS lat/long data, title etc. IPTC is sparsely supported bij ruby tools.
And as it happens, my image captions are in so called XMP tags, for which just a few tools provide support.

To make things more complicated, modern image management tools like Adobe [Lightroom](https://www.adobe.com/nl/products/photoshop-lightroom.html) and [DigiKam](https://www.digikam.org/) allow you to enter labels in XMP and copy those strings to EXIF respectively. (although XMP allows for longer strings, and EXIF only allows for printable ASCII character, so where do the ü and Ø go in the process?)

Today I discovered a tool called [exiftool](https://exiftool.org/), that finally will give me access to my cherished image captions. From inside Jekyll you can use it through the [exiftool gem](https://rubygems.org/gems/exiftool/versions/1.2.5).
After a bit of fiddling, I am now able to display all text fields stored in a picture file, and automatically copy it to the html code for one of my web galleries.
Exiftool Docs warn that the three tag types overlap, unless you ask for `-all` tags. If we focus on the caption and the copyright fields, these are the specific tag names to fetch:

| Type | Caption field name | Copyright field name | Used |
| ---- | ------------------ | -------------------- | ---- |
| EXIF | user_comment       | copyright            |      |
| IPTC | "caption-abstract" | copyright_notice     | <--  |
| XMP  | description        | rights               |      |

In Ruby code that makes for:

```
require 'exiftool'
...
exiftoolbatch = Exiftool.new(Dir["#{Dir.pwd + '/' + dir}/*.*"]) # we are in original_dir
...
exif =  exiftoolbatch.result_for(fullpath)
...
capt = exif[:"caption-abstract"]
copy = exif[:copyright]
```
