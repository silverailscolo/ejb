#!/usr/bin/env python

# Importer for JMRI roster.xml files from folder /assets/xml/.
# Egbert, adapted from opieters gallery_creator
# Read xml file and create a .md file for each record.
# Picture for each loco should be in folder itemPicturePath, named same as rosterId, extension jpg

__author__ = 'Egbert Broerse'

import yaml
import xmltodict
from os.path import isfile, join
from datetime import datetime


def rename_keys(d, keys):
    # print("translating: ", d)
    result = dict([(keys.get(k, k), v) for k, v in d.items()])
    # print("translated: ", result)
    return result


# set preferences
jmriRosterFileToRead = "../_data/roster.xml"
itemPicturePath = "../assets/img/trains2/rostercovers/" # must contain "*covers" to make direct link from gallery to item folder
defaultLanguage = 'en-us'

# configuration
overwrite = input("Delete existing .md loco pages? (y/n) ")
if overwrite != "y":
    overwrite = "no"
pagesCreated = 0

# set correct path
path = join("../_data/", jmriRosterFileToRead)

with open(path, 'r') as f:
    xml = f.read()

python_dict = xmltodict.parse(xml)
# print(python_dict)

for locoDict in python_dict['roster-config']['roster']['locomotive']:
    comment = ""
    year = datetime.now().year

    # print(json.dumps(car, indent=4, sort_keys=True, default=str)) #default=json_serial)) #
    # from https://stackoverflow.com/questions/67745643/select-specific-keys-inside-a-json-using-python

    # Copy all keys
    # filter_fields = ["title", "author", "summary", "lastRead", "url", "isbn"]
    dict_result = locoDict # to filter: {key: key for key in locoDict if key in filter_fields}
    #
    # layout: train-item > manually add to array
    # roster-id: "RG H15-44 151"
    # fileName: RG_H15-44_151.xml
    # roadNumber: 2025
    # roadName: Rio Grande
    # mfg: Atlas
    # owner: ""
    # model: "52086"
    # dccAddress: 151
    # comment: "acquired november 2003"
    # decoder:
    # - model: "Four Function Dual Mode"
    # - family: "Four Function Dual Mode"
    # - comment: "factory installed"
    # year: 2003 < manually
    #
    # comment: > use as main body text below ---
    #
    # rename keys for template front matter
    translation = {'@id': 'roster-id', '@roadNumber': 'roadNumber', '@roadName': 'roadName', '@mfg': 'mfg',
                   '@dccAddress': 'dccAddress', '@model': 'model', '@family': 'family', '@comment': 'comment',
                   '@fileName': 'fileName', '@owner': 'owner'}
    dict_translated = rename_keys(dict_result, translation)

    yaml_elements = {}
    for key in dict_translated:
        if key == 'comment':
            comment = dict_translated[key]
        elif key == 'fileName':
            yaml_elements['fileName'] = dict_translated['fileName'].replace(".xml", "")
        elif key == 'decoder':
            decoderDict = dict_translated[key]
            yaml_elements[key] = rename_keys(decoderDict, translation)
        else:
            yaml_elements[key] = dict_translated[key]
            if key == 'date':
                year = dict_translated[key].year

    # try to load YAML data
    output_file = "../_rollingstock/" + defaultLanguage + "/" + yaml_elements['fileName'] + ".md" # xml of car, no language TODO date?
    pictureFile = yaml_elements['fileName'] + ".jpg"  # cover image of engine/car

    if overwrite == "y" or not isfile(output_file):
        # first add in manual content
        # yaml_elements['published'] = 'true'
        yaml_elements['layout'] = 'train-item'
        yaml_elements['lang'] = defaultLanguage
        yaml_elements['year'] = year
        if isfile(itemPicturePath + pictureFile):
            yaml_elements['picture'] = pictureFile
        # write to output file
        print('Writing YAML data to loco file', output_file)
        with open(output_file, 'w') as f:
            f.write(yaml.dump(yaml_elements, default_flow_style=False, explicit_start=True))
            # write comment as second block in same file
            f.write("---\n")
            f.write(comment + "\n")
        pagesCreated += 1
print(f"Ready. Created {pagesCreated} fresh loco pages.")
