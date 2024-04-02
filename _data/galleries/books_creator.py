#!/usr/bin/env python

# read xml file and create a .md file for each record
# Egbert, adapted from opieters gallery_creator

__author__ = 'Egbert Broerse'

import json
#import yaml
from os.path import join
import plistlib
#from datetime import date, time, datetime

# def json_serial(obj):
#     """JSON serializer for objects not serializable by default json code"""
#     if isinstance(obj, (datetime, date)):
#         return obj.isoformat()
#     raise TypeError ("Type %s not serializable" % type(obj))

filename = "testbooks.xml"
# set correct path
path = join("../../assets/xml/", filename)

fileIn = open(path,"rb")
# plist = fileIn.read()

# see https://github.com/python/cpython/blob/3.12/Lib/plistlib.py
pl = plistlib.load(fileIn, fmt=None, dict_type=dict)
# print(pl["101"])
for bookId in pl:
    print("id == " + bookId + " ==")
    #print(pl[bookId])
    bookJson = json.dumps(pl[bookId], indent=4, sort_keys=True, default=str) #default=json_serial)) #
    print(bookJson)
    # from https://stackoverflow.com/questions/67745643/select-specific-keys-inside-a-json-using-python
    filter_fields = ["title", "author", "summary", "lastRead", "url"]
    dict_result = {key: bookJson[key] for key in bookJson if key in filter_fields}
    json_elements = []
    for key in dict_result:
      json_elements.append((key, bookId[key]))
    print(json_elements)

fileIn.close()
