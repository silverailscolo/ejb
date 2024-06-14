#!/usr/bin/env python
# SPDX-FileCopyrightText: 2024 EJ Broerse
# SPDX-FileCopyrightText: 2020 Olivier Pieters
#
# SPDX-License-Identifier: BSD-3-Clause

# Importer for Bookpedia export xml file.
# Read xml file and create a .md file for each record
# Egbert, adapted from opieters gallery_creator

import yaml
from os.path import isfile, join
import plistlib
# from datetime import date, time, datetime


def rename_keys(d, keys):
    return dict([(keys.get(k, k), v) for k, v in d.items()])


# configuration
#createLanguage = 'en-us'
createLanguage = input("Create index for language (ISO code ie nl): ")
if createLanguage == "":
    print('No language provided')
    exit()

bookpediaExportFileToRead = "noegbertbooks.xml"

# set correct path
path = join("../_data/", bookpediaExportFileToRead)

# see https://github.com/python/cpython/blob/3.12/Lib/plistlib.py
with open(path, 'rb') as f:
    pl = plistlib.load(f, fmt=None, dict_type=dict)
    # print(pl["101"])

for bookId in pl:
    if bookId == "Version":
        continue # skip the record in the xml file called "Version"
    summary = ""
    year = 0
    print("id == " + bookId + " ==")
    bookDict = pl[bookId]
    # Filter only used keys
    filter_fields = ["title", "author", "summary", "lastRead", "isbn"]
    # drop "url" because there are too many errors in GH-BrokenLinks and too commercial
    dict_result = {key: bookDict[key] for key in bookDict if key in filter_fields}

    # rename keys for template
    #
    # published: true > manually add to array
    # layout: review > manually add to array
    # date: 2018-01-01 12:34:56 +0700 < from lastRead
    # cover: "2018-01-01-book-cover.jpg" < manually add from bookId.jpg
    # olid: OL12345678 # if no image (Open Library ID)
    # isbn: 978-1-234-56789-0
    # title: "A great book"
    # author: A great author
    # year: 2018
    #
    # summary > use as main body text below ---
    translation = {'lastRead': 'date'}
    dict_translated = rename_keys(dict_result, translation)

    yaml_elements = {}
    for key in dict_translated:
        if key == 'summary':
            summary = dict_translated[key]
        else:
            yaml_elements[key] = dict_translated[key]
            if key == 'date':
                year = dict_translated[key].year

    # try to load YAML data
    output_file = "../_books/" + createLanguage + "/" + bookId + ".md"  # id key of book, TODO date?
    coverFile = bookId + ".jpg"  # cover image of book

    #print('Writing YAML data to file...')
    #if not isfile(output_file):
    # add manual content
    # yaml_elements['published'] = 'true'
    yaml_elements['layout'] = 'review'
    yaml_elements['lang'] = createLanguage
    yaml_elements['year'] = year
    if isfile("../assets/img/bookcovers/" + coverFile):
        yaml_elements['cover'] = coverFile
    #print(yaml_elements)
    # write to output file
    print('Writing YAML data to book file...')
    with open(output_file, 'w') as f:
        f.write(yaml.dump(yaml_elements, default_flow_style=False, explicit_start=True))
        # write summary as second block in same file
        f.write("---\n")
        f.write(summary + "\n")
print('Ready')
