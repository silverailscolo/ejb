---
layout: post
lang: nl
page-id: ramses
# title: Cleanup duplicate media files in multi-language Jekyll _site
title: Script om dubbele media in polyglot Jekyll _site op te ruimen
date: "2026-03-20"
tags:
  - web
categories:
  - computers
  - bash
---

Als ik deze twee-talige website [www.ebroerse.nl](/), die is gebaseerd op Jekyll al-folio, dan worden alle afbeeldingen voor elke taal in een map gekopieerd. Dat kun je vermijden door met _relatie_ URL's de afbeeldingen te plaatsen, en onderstaand script te runnen _nadat_ he de site hebt gegenereerd. Het script eindigt op Mac door het FTP-programma te starten, zodat je alles kunt uploaden naar je host.

## Adaptive IMG tags met relatieve paden

Om het plaatje `voorbeeld.jpeg` uit de map `/assets/img/` in een markdown page te plaatsen, plak je het pad in deze tag (let op de enkele en dubbele rechte quotes, en op de / aan het begin van het pad):

`<img src='{{ "/assets/img/voorbeeld.jpeg" | relative_url }}' alt="voorbeeld">`

In elke taal wordt het plaatje opgehaald uit de gedeelde `img` map van de default-taal.
Als je een CSS-stijl `img-fluid` hebt voor aanpassing van het plaatje aan het schermformaat, dan gebruik je:

`<figure><img src='{{ "/assets/img/voorbeeld.jpeg" | relative_url }}' alt="voorbeeld" class='img-fluid'><figcaption>Example</figcaption></figure>`

## Het bash shell script

Kopieer het volgende script naar de root van je Jekyll-repo en start het handmatig nadat `jekyll build` is afgelopen.

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
open -a "Transmit"  # pas aan voor je favoriete FTP app
```
