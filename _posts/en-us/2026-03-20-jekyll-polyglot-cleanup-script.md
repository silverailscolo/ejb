---
layout: post
lang: en-us
page-id: ramses
title: Cleanup duplicate media files in multi-language Jekyll _site
date: "2026-03-20"
tags:
  - web
categories:
  - computers
  - bash
---

When I generate this bilingual Jekyll website [www.ebroerse.nl](/), which is based on the al-folio theme, _all_ the images get copied into folders for every language, a waste of resources.

You can avoid that by placing the images with with the _relative_url_ filter, and run the script you find below _after_ you have generated the site. The script ends on Mac by launching an FTP program so you can continue to upload everything to your hosting.

## Adaptive IMG tags met relatieve paden

To place the image `example.jpeg` from the folder `/assets/img/` in a markdown page, paste the path into the following tag (note the single and double straight quotes, and the / at the beginning of the path):

`<img src='{{ "/assets/img/example.jpeg" | relative_url }}' alt="example">`

For every language on your site, the image will be retrieved from the single shared `img` folder of the default language.

If you have a CSS-style `img-fluid` for adapting the image to the screen size, you will use:

`<figure><img src='{{ "/assets/img/example.jpeg" | relative_url }}' alt="example" class='img-fluid'><figcaption>Example</figcaption></figure>`

## The bash shell script

Copy this script to the root of your Jekyll repo, and run it manually after `jekyll build` finishes.

```bash
#!/bin/bash
# SPDX-FileCopyrightText: 2024-2026 EJ Broerse
#
# SPDX-License-Identifier: MIT

# Remove these non-default language (duplicate and unused) asset files - code by E Broerse, Licensed under under MIT
# Also run this script in the GitHub - Deploy workflow if you host on GitHub Pages.
rm -rf './_site/en-us/assets/downloads' './_site/en-us/assets/pdf' './_site/en-us/assets/python'
rm -rf './_site/en-us/assets/img'

# Launch the Transmit app
open -a "Transmit"  # change to your FTP app of choice
```
