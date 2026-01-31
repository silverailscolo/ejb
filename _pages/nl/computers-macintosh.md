---
page-id: mactips
layout: page
lang: nl
permalink: /computers/macintosh/
title: Mac tips
description: Wat ik leerde van mijn eigen omzwervingen in macOS
nav: false
---

Ik hoop dat dit helpt. Geen garanties, zoals gewoonlijk.

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Foto's app opent niet</h2>

<img src='{{ "/assets/img/mac/photos-dock.png" | relative_url }}' alt="Het Foto's symbool in het Dock" style="float: right;">

Toen mijn Foto's-app op macOS 10.13.6 niet meer op het scherm opende, gebruikte ik eerst het standaard
<a href="https://support.apple.com/en-us/HT204967">Apple Support-advies</a> om Command + Option (alt) ingedrukt te
houden terwijl ik Foto's opende. Dat stopte bij 5% en ging zelfs na 24 uur niet verder.

Dus ik probeerde de oorzaak te vinden, maar je hoeft niet eens in de inhoud van het Photos databasepakket te kijken.
Na een paar weken merkte ik dat dit altijd gebeurde nadat ik de taalinstelling van het besturingssysteem had
gewijzigd _zonder opnieuw op te starten_.
Dit is dus de truc: negeer het dialoogvenster "Nu of later opnieuw opstarten" niet.

<img src='{{ "/assets/img/mac/Prefs-Language.png" | relative_url }}' alt="macOS System Settings > Language setting">

Nadat je de schermtaal van je Mac hebt gewijzigd, _altijd_ opnieuw opstarten. Open vervolgens Foto's en presto!

</div>
