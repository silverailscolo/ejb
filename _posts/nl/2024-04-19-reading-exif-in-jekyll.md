---
layout: post
lang: nl
page-id: exiftools
title: Importeer EXIF tags in Jekyll met exiftools
date: 2024-04-19
tags:
  - computers
  - web
categories:
  - software
---

Terwijl ik deze site migreer naar Jekyll / GitHub-pagina's, integreer ik informatie die tot nu toe apart (en verborgen) was. Dat vereist wat scripting, met minimale herinvoering van spullen.

Een belangrijk voorbeeld zijn mijn foto's, die ik vroeger beheerde in [Extensis Portfolio](https://www.extensis.com/portfolio), en later als aparte bestanden op een lokale HD.

Het zou fijn zijn om bij elke foto die ik aan de site toevoeg een bijschrift te kunnen toevoegen, en omdat ik me herinner dat ik vroeger trefwoorden en bijschriften voor veel afbeeldingen in de afbeeldingsbestanden als EXIF-tags heb gezet, probeer ik nu die velden uit de afbeeldingen te lezen en ze toe te passen als bijschriften in de lightGallery-diavoorstellingen, zoals <a href='{{ "/assets/art_gallery/sketches/" | relative_url }}'>hier</a>.

Er zijn veel (verouderde) tools beschikbaar om EXIF-tags te extraheren, maar Portfolio gebruikte andere velden...
Na EXIF kwamen IPTC-tags, gebruikt voor GPS-lat/long-data, titel, enzovoort. IPTC wordt slechts slecht ondersteund door ruby-tools. En toevallig zijn mijn afbeeldingsbijschriften in zogenaamde XMP-tags, waarvoor slechts een paar tools ondersteuning bieden.

Om het ingewikkelder te maken, stellen moderne beeldbeheertools zoals Adobe [Lightroom](https://www.adobe.com/nl/products/photoshop-lightroom.html) en [DigiKam](https://www.digikam.org/) je in staat labels in XMP in te voeren en die strings respectievelijk naar EXIF te kopiëren. (hoewel XMP langere strings toestaat, en EXIF alleen afdrukbare ASCII-tekens toestaat, dus wat moeten we met de ü en Ø ?)

Vandaag ontdekte ik een tool genaamd [exiftool](https://exiftool.org/), die me eindelijk toegang geeft tot mijn geliefde beeldbijschriften. Vanuit Jekyll kun je het gebruiken via de [exiftool gem](https://rubygems.org/gems/exiftool/versions/1.2.5).
Na wat gepruts kan ik nu alle tekstvelden die in een afbeeldingsbestand zijn opgeslagen weergeven en deze automatisch kopiëren naar de html-code van een van mijn webgalerijen.
Exiftool Docs waarschuwt dat de drie tagtypes overlappen, tenzij je vraagt om '-all' tags. Als we ons richten op het bijschrift en de copyrightvelden, zijn dit de specifieke tagnamen die je moet ophalen:

| Type | Caption veldnaam   | Copyright veldnaam | Keuze |
| ---- | ------------------ | ------------------ | ----- |
| EXIF | user_comment       | copyright          |       |
| IPTC | "caption-abstract" | copyright_notice   | <--   |
| XMP  | description        | rights             |       |

In Ruby code wordt dit:

```
require 'exiftool'
...
exiftoolbatch = Exiftool.new(Dir["#{Dir.pwd + '/' + dir}/*.*"]) # we are in original_dir
...
exif =  exiftoolbatch.result_for(fullpath)
...
capt = exif[:"caption-abstract"]
copy = exif[:copyright]
```
