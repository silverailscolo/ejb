#!/usr/bin/env python
# SPDX-FileCopyrightText: 2024 EJ Broerse
# SPDX-FileCopyrightText: 2020 Olivier Pieters
#
# SPDX-License-Identifier: BSD-3-Clause

# Importer for Bookpedia export xml file.
# Read xml file and create a .csv file of titles
# Egbert, adapted from books_creator.py

import csv
from os.path import isfile, join
import plistlib
# from datetime import date, time, datetime


def rename_keys(d, keys):
    return dict([(keys.get(k, k), v) for k, v in d.items()])

# configuration
bookpediaExportFileToRead = "egbertbooks.xml"

# set correct path
path = join("../_data/", bookpediaExportFileToRead)

# see https://github.com/python/cpython/blob/3.12/Lib/plistlib.py
with open(path, 'rb') as f:
    pl = plistlib.load(f, fmt=None, dict_type=dict)
    # print(pl["101"])

booklist = {}

for bookId in pl:
    if bookId == "Version":
        continue # skip the record in the xml file called "Version"
    # print("id == " + bookId + " ==")
    bookDict = pl[bookId]
    # Filter only used keys
    filter_fields = ["title"]
    # drop "url" because there are too many errors in GH-BrokenLinks and too commercial
    dict_result = {key: bookDict[key] for key in bookDict if key in filter_fields}

    book_elements = {}

    for key in dict_result:
        book_elements[key] = dict_result[key]

    coverFile = bookId + ".jpg"  # cover image of book
    # add manual content
    if isfile("../assets/img/bookcovers/" + coverFile):
        book_elements['cover'] = coverFile
    else:
        continue # skip the record if no cover page
    booklist[bookId] = book_elements

# print(booklist)

# write to output file
output_file = "../_books/cover_list.csv"
print('Writing CSV data to file...')
with open(output_file, 'w', newline='') as csvfile:
    spamwriter = csv.writer(csvfile, delimiter=',', quoting=csv.QUOTE_MINIMAL)
    # spamwriter.writerow(['Spam'] * 5 + ['Baked Beans'])
    # see https://docs.python.org/3/library/csv.html
    print(f"len(booklist) = {len(booklist)}")

    spamwriter.writerow(["SourceFile"] + ["ImageDescription"])

    for book in booklist:
        # print(book, 'corresponds to', booklist[book]["cover"], booklist[book]["title"][:40])
        spamwriter.writerow([booklist[book]["cover"]] + [booklist[book]["title"][:40]])

print('Ready')
