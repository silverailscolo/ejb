# SPDX-FileCopyrightText: 2024 Olivier Pieters <https://olivierpieters.be>
#
# SPDX-License-Identifier: BSD-3-Clause
#!/usr/bin/env python

# install imagesize: pip install imagesize pyyaml # DONE egbert 10-03-2024 on iMac
# added xmp tags to output, user input for gallery

__author__ = 'Olivier Pieters'
__author_email__ = 'me@olivierpieters.be'
__license__ = 'BSD-3-Clause'

import yaml
import imagesize
from os import listdir, rename
from os.path import isfile, join
from exiftool import ExifToolHelper

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
        rename(join(path, f), join(path, newf))
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
_keywords = ""
_rights = "CC BY-NC-SA 4.0"
title = ""
caption = ""
creator = _creator
keywords = ""
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

with ExifToolHelper() as eth:

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
            if originals[pic][originals[pic].rfind('.')+1:] in ['jpg', 'jpeg', 'png']:
                print("File: " + join(path, originals[pic]))

                file = join(path, originals[pic])
                metadata = eth.get_metadata(file)
                for dict in metadata:
                    for k, v in dict.items():
                        print(f"pair {k} = {v}")
                        if "xmp:title" in k.lower() and v != '': # and title == "":
                            title = v
                            print(f"{file}: {k} = {v}; title = {title}")
                        elif "iptc:headline" in k.lower() and v != '': # and title == "":
                            title = v
                            print(f"{file}: {k} = {v}; title = {title}")
                        elif "title" in k.lower() and v != '': # and title == "":
                            title = v
                            print(f"{file}: {k} = {v}; title = {title}")
                        # else:
                        #     title = _title
                        print(f"after dict: title = {title}")

                        if "caption" in k.lower() and v != '': # and caption == "":
                            caption = v
                            print(f"{file}: {k} = {v}; caption = {caption}")
                        elif "xmp:description" in k.lower() and v != '': # and caption == "":
                            caption = v
                            print(f"{file}: {k} = {v}; caption = {caption}")
                        elif "usercomment" in k.lower() and v != '': # and caption == "":
                            caption = v
                            print(f"{file}: {k} = {v}; caption = {caption}")
                        elif "exif:imagedescription" in k.lower() and v != '': # and caption == "":
                            caption = v
                            print(f"{file}: {k} = {v}; caption = {caption}")
                        elif "file:comment" in k.lower() and v != '': # and caption == "":
                            caption = v
                            print(f"{file}: {k} = {v}; caption = {caption}")
                        # else:
                        #     caption = _caption
                        print(f"after dict: caption = {caption}")

                        if "xmp:tagsList" in k.lower() and v != '': # and keywords == "":
                            # can be a list or just 1 item (string)
                            keywords = v
                            if isinstance(keywords, list):
                                keywords = '-'.join(map(str, keywords))
                            print(f"{file}: {k} = {v}; keywords = {keywords}")
                        elif "iptc:keywords" in k.lower() and v != '': # and keywords == "":
                            keywords = v
                            if isinstance(keywords, list):
                                keywords = '-'.join(map(str, keywords))
                            print(f"{file}: {k} = {v}; keywords = {keywords}")
                        # else:
                        #     keywords = _creator
                        if "rights" in k.lower() and v != '': # and rights == "":
                            rights = v
                        elif "iptc:copyrightnotice" in k.lower() and v != '': # and rights == "":
                            rights = v
                        elif "exif:copyright" in k.lower() and v != '': # and rights == "":
                            rights = v
                        else:
                            rights = _rights
                        print(f"after dict: rights = {rights}")
                        # example results from exiftool:
                        # pair EXIF:Copyright = 1988 EJ Broerse CC-BY-NC 4.0
                        # pair IPTC:Caption-Abstract = Thesis design for RUW Head Office, model, eye level view

                # create new entry
                print("New entry. title = " + str(title) + " caption = " + str(caption))
                old_gallery.append({ "filename": pic, "sizes": new_gallery[pic], "thumbnail": thumbs[pic], "original": originals[pic],
                                  "title": str(title), "caption": str(caption) + ' ' + keywords + '<br>' + rights })

        # reset vars
        title = ""
        caption = ""
        creator = ""
        keywords = ""
        rights = ""
        # print("vars reset. title = " + title)

    # end of ExifToolHelper

# check if path existing
if "picture_path" not in input_gallery:
    input_gallery["picture_path"] = image_path

# write to output file
print('Writing YAML data to file...')
with open(output_file, 'w') as f:
    f.write( yaml.dump(input_gallery, default_flow_style=False) )
