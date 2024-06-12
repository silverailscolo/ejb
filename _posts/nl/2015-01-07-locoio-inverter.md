---
layout: post
lang: nl
page-id: locoio_inverter
title: "Bouw een LocoIO Inverter"
date: "2015-01-07"
categories:
  - "trains"
  - "how-to"
tags:
  - "electronica"
---

# Bouw een logic inverter printje voor de HDL LocoIO

Om het aantal uitgangen dat nodig is om een schakelpaneel op Loconet aan te sluiten te verminderen, heb ik een kleine printplaat ontworpen met 4 CMOS 4011 IC's. Elke uitgangspin op J10/J11 is omgekeerd naar een tweede LED op het paneel, simpelweg omdat ik geen wissel-feedback heb en als de wissel omgezet wordt, neem ik aan dat hij in de andere stand staat. De groen en rode LED tonen dus dezelfde JMRI sensor, maar het staat netter op mijn paneel.

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_inverter_assembly.jpg" | relative_url }}' alt='LocoIO inprikprintje' class='img-fluid'></figure>

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_inverter_diagram.png" | relative_url }}' alt='Inverter schema' class='img-fluid'>
<figcaption class="kleiner">Inverter schema (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption>
</figure>

Onderdelen (voor 8 uitgangen):

<div class="wide">
| Item   | Aantal | Omschrijving                                                                                                                           |
|--------|--------|----------------------------------------------------------------------------------------------------------------------------------------|
| J1     | 1      | PinSocket_2.54mm_1x09_P2.54mm                                                                                       |
| J2, J3 | 2      | PinSocket_2.54mm_1x04_P2.54mm                                                                                       |
| J4     | 1      | PinSocket_2.54mm_1x01_P2.54mm                                                                                      |
| U1, U2 | 2      | Quad Nand 2 inputs, x4011 DIP-14 IC ([Datasheet](https://www.intersil.com/content/dam/Intersil/documents/cd40/cd4011bms-12bms-23bms.pdf)) |
</div>

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_Inverter_PCB.png" | relative_url }}' alt='Inverter PCB opzet' class='img-fluid'>
<figcaption class="kleiner">Inverter PCB opzet (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption>
</figure>

Ik heb mijn inverter op een Europrint van 18x15 gaatjes gebouwd met doorgaande pennetjes voor de originele uitgangen, maar je kan met het programma [KiCAD](https://www.kicad.org/) en [deze KiCAD files](/ejb/assets/downloads/LocoIO_Invertor_KiCAD_files.zip) zelf een netter printje ontwerpen en laten maken.

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_inverter_pins.jpg" | relative_url }}' alt='Detail Inverter pinnetjes' class='img-fluid'>
<figcaption class="kleiner">Detail Inverter pinnetjes (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption>
</figure>
