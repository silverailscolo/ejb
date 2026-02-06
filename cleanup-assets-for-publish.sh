#!/bin/bash
# Remove these non-default (duplicate and unused) asset files - custom ejb, also in gh Deploy workflow
rm -rf './_site/en-us/assets/downloads' './_site/en-us/assets/img' './_site/en-us/assets/pdf' './_site/en-us/assets/python'

# Launch the Transmit app
open -a "Transmit"
