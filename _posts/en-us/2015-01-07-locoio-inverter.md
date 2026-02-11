---
layout: post
lang: en-us
page-id: locoio_inverter
title: "Build a LocoIO Inverter"
date: "2015-01-07"
categories:
  - "trains"
  - "how-to"
tags:
  - "electronics"
---

# Build an add-on logic inverter daughterboard for an HDL LocoIO

To reduce the number of outputs required to connect a switch panel to LocoNet, I designed a small PCB with 4 CMOS 4011 IC's. Every output pin on J10/J11 is inverted to a second LED on the panel, simply because I don't have switch feedback and if a switch isn't thrown, it's supposed to be closed.

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_inverter_assembly.jpg" | relative_url }}' alt='LocoIO daughterboard' class='img-fluid'></figure>

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_inverter_diagram.png" | relative_url }}' alt='Inverter schematic' class='img-fluid'>
<figcaption class="kleiner">Inverter schematic (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption>
</figure>

Components (for 8 outputs):

<div class="wide">
| Item   | Qty | Description                                                                                                                               |
|--------|-----|-------------------------------------------------------------------------------------------------------------------------------------------|
| J1     | 1   | Connector_PinSocket_2.54mm:PinSocket_1x09_P2.54mm                                                                               |
| J2, J3 | 2   | Connector_PinSocket_2.54mm:PinSocket_1x04_P2.54mm                                                                               |
| J4     | 1   | Connector_PinSocket_2.54mm:PinSocket_1x01_P2.54mm                                                                                |
| U1, U2 | 2   | Quad Nand 2 inputs, x4011 DIP-14 IC ([Datasheet](https://www.intersil.com/content/dam/Intersil/documents/cd40/cd4011bms-12bms-23bms.pdf)) |
</div>

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_Inverter_PCB.png" | relative_url }}' alt='Inverter PCB sketch' class='img-fluid'>
<figcaption class="kleiner">Inverter PCB sketch (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption>
</figure>

I built mine using a 18x15 hole piece of Euro-PCB experimenting board with pass-through pins for the original outputs, but you could have a PCB made using [KiCAD](https://www.kicad.org/) from [these KiCAD files](/ejb/assets/downloads/LocoIO_Invertor_KiCAD_files.zip).

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_inverter_pins.jpg" | relative_url }}' alt='Inverter PCB pins detail' class='img-fluid'>
<figcaption class="kleiner">Inverter PCB pins detail (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption>
</figure>
