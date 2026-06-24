---
layout: post
lang: nl
page-id: ramses
# title: Cleanup duplicate media files in multi-language Jekyll _site
title: Script om dubbele media in polyglot Jekyll _site op te ruimen
date: "2026-03-20"
categories:
  - computers
  - how-to
tags:
  - bash
  - jekyll
  - web
---

Als ik deze tweetalige website [www.ebroerse.nl](/), die is gebaseerd op het Jekyll al-folio thema met `polylot`, dan worden alle afbeeldingen _voor elke taal_ gekopieerd naar een extra map:

<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/jekyll-build-duplicates.png" | relative_url }}' alt="Jekyll build kopieert alle afbeeldingen naar elke taal" class='img-fluid'><figcaption class="kleiner">Jekyll build kopieert alle afbeeldingen naar elke taal</figcaption></figure>
</div>

Tijdens het genereren van de website is dat deels nodig, maar je hoeft niet alles naar de server te uploaden. Dat kun je oplossen door de afbeeldingen op de pagina te plaatsen met een _relative_url_ filter en onderstaand script te runnen _nadat_ je de site hebt gegenereerd.

Het script eindigt op Mac door het FTP-programma te starten, zodat je alles kunt uploaden naar je host.

## Responsieve IMG tag met relative_url pad

Om het plaatje `voorbeeld.jpeg` uit de map `/assets/img/` in een markdown page te plaatsen, plak je het pad in deze tag (let op de enkele en dubbele rechte quotes, en op de / aan het begin van het pad):

```html
{% raw %}
<img src='{{ "/assets/img/voorbeeld.jpeg" | relative_url }}' alt="voorbeeld" />
{% endraw %}
```

In elke taal wordt het plaatje opgehaald uit de gedeelde `img` map van de default-taal.

Als je een CSS-stijl `img-fluid` hebt voor aanpassing van het plaatje aan het schermformaat, dan gebruik je:

```html
{% raw %}
<figure>
  <img src='{{ "/assets/img/voorbeeld.jpeg" | relative_url }}' alt="voorbeeld" class="img-fluid" />
  <figcaption>Voorbeeld</figcaption>
</figure>
{% endraw %}
```

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

## Markup bonus tip

Om bovenstaand voorbeeld met de dubbele accolades op een webpagina te tonen, zet je de code in een `raw/endraw` blok (al kun je geen raw blocks nesten, dus ik moest spaties in de woorden zetten, maar je snapt het idee):

{% raw %}

```html
{% r a w %}
<img src='{{ "/assets/img/voorbeeld.jpeg" | relative_url }}' alt="voorbeeld" />
{% e n d r a w %}
```

{% endraw %}
