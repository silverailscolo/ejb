#!/usr/bin/env python

# install imagesize: pip install imagesize pyyaml # DONE egbert 10-03-2024 on iMac
# added xmp tags to output, user input for gallery

__author__ = 'Olivier Pieters'
__author_email__ = 'me@olivierpieters.be'
__license__ = 'BSD-3-Clause'

import yaml, imagesize
from libxmp import consts
from libxmp.utils import file_to_dict
from os import listdir, rename
from os.path import isfile, join

# configuration
galleryname = input("Naam van de gallery: ")
if galleryname == "":
    print('Gestopt na lege naam')
    exit()

extensions= ['jpg', 'jpeg', 'png', 'webp']
output_file = galleryname + ".yml"  # user input for gallery name, change for each gallery
input_file = output_file
image_path = input("Pad naar images in /img-noresample/ (Return voor " + galleryname + "): ")
if image_path == "":
    image_path = galleryname
image_path = galleryname # starting from path (next)

# set correct path
path = join("../../assets/img-noresample/", image_path) # opieters used "../../assets/photography/" # customized Egbert for iMac 2024

# extract image files
print('Collecting files...')
files = [f for f in listdir(path) if isfile(join(path, f))]
files = [f for f in files if f[f.rfind('.')+1:] in extensions ]

# rename image files
print('Renaming files...')
new_files = []
for f in files:
    if f[f.rfind('-')+1:f.rfind('.')] != 'thumbnail':
        newf = f[:f.rfind('-')] + "-%sx%s" % imagesize.get(join(path, f)) + f[f.rfind('.'):]
        rename(join(path, f),join(path, newf))
    else:
        newf = f
    new_files.append(newf)

files = new_files

# helper objects to store gallery data
new_gallery = {}
thumbs = {}
# default field values
dc = []
_title = "Photo"
_caption = "by"
_creator = "EJ Broerse"
_rights = "CC BY-NC-SA 4.0"
title = _title
caption = _caption
creator = _creator
rights = _rights

# group gallery data
print('Grouping files...')
for f in files:
    filename = f[:f.rfind('-')]
    if f[f.rfind('-')+1:f.rfind('.')] == "thumbnail":
        thumbs[filename] = f
    else:
        if filename in new_gallery:
            new_gallery[filename].append(f)
        else:
            new_gallery[filename] = [f]

# find largest image -> set as original
print('Searching for originals and missing thumbnails...')
originals = {}
for image_set in new_gallery:
    max_width, max_height = 1, 1 #imagesize.get(join(path, new_gallery[image_set][0]))
    min_width, min_height = 800, 800 #imagesize.get(join(path, new_gallery[image_set][0]))
    original = new_gallery[image_set][0]
    thumbnail = new_gallery[image_set][0]

    for image in new_gallery[image_set]:
        width, height = imagesize.get(join(path, image))
        if (width*height) > (max_width*max_height):
            original = image
            max_width = width
            max_height = height
        if (width*height) < (min_width*min_height):
            thumbnail = image
            min_width = width
            min_height = height

    # delete original from list to avoid double entries
    del new_gallery[image_set][new_gallery[image_set].index(original)]
    originals[image_set] = original
    # add thumbnail if not yet in dict (not removed since might still be useful)
    if image_set not in thumbs:
        thumbs[image_set] = thumbnail

# try to load YAML data
print('Checking existing YAML data...')
if isfile(input_file):
    with open(input_file, 'r') as file:
        input_gallery = yaml.safe_load(file) # TODO send PR to opieters @github
    #input_gallery = yaml.load(open(input_file, 'r')) # TypeError: load() missing 1 required positional argument: 'Loader'
else:
    # create empty dummy file
    input_gallery = {"pictures": []}

old_gallery = input_gallery['pictures']

# merge two data sets into one
print('Merging YAML data...')
for pic in new_gallery:
  found = False
  # try to find matching filename
  for i in old_gallery:
    if pic == i["filename"]:
      i["sizes"] = new_gallery[pic]
      # include thumbnail if present
      if pic in thumbs:
        i["thumbnail"] = thumbs[pic]
      found = True

  if not found:
    # extract xmp from original, only for jpeg
    # 'http://purl.org/dc/elements/1.1/': [
    #   ('dc:creator[1]', 'EJ Broerse', {...}),
    #   ('dc:description[1]', 'blauwe Golf', {...}),
    #   ('dc:title[1]', 'Volkswagen Golf Plus', {...}),
    if originals[pic][originals[pic].rfind('.')+1:] in ['jpg', 'jpeg']:
      #print("File: " + join(path, originals[pic]))

      xmp = file_to_dict( join(path, originals[pic]) )
      if consts.XMP_NS_DC in xmp:
        dc = xmp[consts.XMP_NS_DC]
        # a list of all Dublin Core properties in xmp; each element in the list is a tuple
      else:
        print("No XMP tag, file skipped")

      print("title = " + title)
      for dc_pair in dc:
        if "/?xml:lang" not in dc_pair[0]: # skip 'dc:title[1]/?xml:lang'
          # print("name: " + dc_pair[0] + " val: " + dc_pair[1] +"\n")
          if "dc:title" in dc_pair[0] and dc_pair[1] != '':
            title = dc_pair[1]
          else:
            title = _title
          if "dc:caption" in dc_pair[0] and dc_pair[1] != '':
            caption = dc_pair[1]
          else:
            caption = _caption
          if "dc:creator" in dc_pair[0] and dc_pair[1] != '':
            creator = dc_pair[1]
          else:
            creator = _creator
          if "dc:rights" in dc_pair[0] and dc_pair[1] != '':
            rights = dc_pair[1]
          else:
            rights = _rights

  # create new entry
  #print("New entry. title = " + title)
  old_gallery.append({ "filename": pic, "sizes": new_gallery[pic], "thumbnail": thumbs[pic], "original": originals[pic],
                      "title": title, "caption": caption + ' ' + creator + ' ' + rights })
  # reset vars
  title = _title
  caption = _caption
  creator = _creator
  rights = _rights
  #print("vars reset. title = " + title)

# check if path existing
if "picture_path" not in input_gallery:
  input_gallery["picture_path"] = image_path

# write to output file
print('Writing YAML data to file...')
with open(output_file, 'w') as f:
  f.write( yaml.dump(input_gallery, default_flow_style=False) )
