#!/bin/bash
# SPDX-FileCopyrightText: 2024-2026 EJ Broerse
#
# SPDX-License-Identifier: MIT

# Remove these non-default language (duplicate and unused) asset files - code by E Broerse, Licensed under under MIT
# Also run this script in the GitHub - Deploy workflow if you host on GitHub Pages.
rm -rf './_site/en-us/assets/downloads' './_site/en-us/assets/pdf' './_site/en-us/assets/python'
rm -rf './_site/en-us/assets/img'
rm -rf './_site/protected'  # just in case

# Launch the Transmit app
open -a "Transmit"
