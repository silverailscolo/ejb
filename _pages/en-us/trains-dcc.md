---
page-id: dcc
layout: page
permalink: /trains/dcc/
title: DCC
description: Digital Command Control
lang: en-us
nav: false
toc:
  sidebar: left
---

<img src='{{ "/assets/img/trains2/dcclogo.gif" | relative_url }}' alt="DCC logo" style="float: right;">

<h4>What is Digital Command Control?</h4>
Starting in the spring of 2004, I have switched to Digtrax DCC with a Zephyr command station. 10 Years ago, M&auml;rklin and Lenz started with DCC, but it was too expensive for me. I did build an electronic occupancy detector (works like a dream as of 2006, connected to the inputs of a <a href="#locoio">LocoIO</a>, by the way) and read all the manuals, but never bought any hardware. The regular DCC summaries in Model Railroader kept me informed on the latest developments, and later on the internet made this even easier. So in 2004 I ordered a DCC-stater pack from the USA.

## Digitrax Zephyr

What attracted me in <a href="https://www.digitrax.com">Digitrax</a> were the price of the starter set and the elegance of the LocoNet network system, that connected all signaling devices. Lenz also had an interface between DCC and a computer, but after the first edition for Macintosh there was no follow up and I gave up on that too.

## JMRI

<a href="https://www.jmri.org"><img src='{{ "/assets/img/trains2/logo-jmri.gif" | relative_url }}' alt='JMRI'></a>

In 2003 I learned that <a href="https://www.jmri.org">JMRI</a> was developed as platform independent, Java based software for controlling a DCC layout. Between JMRI - which I tested on Mac OS 9.2 - and &trade;LocoNet, there was a thing called <a href="https://www.jmri.org/help/en/html/hardware/loconet/LocoBufferII.shtml">LocoBuffer</a>, that you could build yourself following the design by J. Jabour. Just as my Zephyr system arrived in the mail, the website on LocoBuffer disappeared from the web. After extensive browsing and reading, I learned that a company had develeoped a commercial follow up, christened the LocoBuffer-II. When I sent them an email asking for the conditions of overseas shipment, I was told that the European distributor was Rob Heikens, living just 60 kilometers away. Just before the summer holidays of 2004 I ordered this hardware interface, dragged one computer to the third floor and started up JMRI: It all worked perfectly and it was frightening to see an engine start and stop without physically touching the layout controls.

Signaling is also handled by <a href="https://www.jmri.org/help/en/html/tools/signaling/index.shtml">JMRI Signal Masts</a> since Winter 2013, with a Digitrax SE8c board and Signal Mast Base kits, dressed like <a href="../tips/index.html#dwarf">Rio Grande signals</a> with their distinct <em>Darth Vader</em> hoods.

<figure><img src='{{ "/assets/img/trains2/DSCF2960_signal.jpg" | relative_url }}' alt='Customized Digitrax Signal Base Mast for Rio Grande' class='img-fluid'>
<figcaption class="kleiner">Customized RG Mast (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">still image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

Panels along the layout are connected to JMRI and show occupancy of blocks, turnout positions as well as receive input to change them (<a href="tips.html#panel">more on JMRI PanelPro</a>).

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/110-1082_IMG.jpg" | relative_url }}' alt='CTC in Silverton Tower' class='img-fluid'>
<figcaption class="kleiner">The Silverton control panel (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure>
<img src='{{ "/assets/img/trains2/IMG_3536_D_SNGRR_panel.jpg" | relative_url }}' alt='Hardware panels on the D&S RR' class='img-fluid'>
<figcaption class="kleiner">Hardware panels on the D&amp;S RR (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption>
</figure>
</div>
</div>

## Wiring

I tried a mixed DCC/conventional DC wiring scheme. hoping to manage the switches via LocoNet whilst running the engines on either a DCC or regular DC throttle. It gave me some time to put a decoder in the engines that have enough room for one. But 10 years in I changed to full DCC as keeping one system running already is daunting enough. Even the Atlas (Tomix) track cleaning car - with vacuum cleaner! - had room for a TCS decoder, and a flashing light on top.

<figure><img src='{{ "/assets/img/trains2/S2400212-kl.jpg" | relative_url }}' alt='Feeder bus, viewed from beneath the layout' class='img-fluid'>
<figcaption>Feeder bus under the layout (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

Although it doesn't make wiring as simple as DCC can be, I decided to run 7 bus wires around the whole layout:

<ol>
<li>permanent DCC - for driving stationary decoders</li>
<li>switched DCC/DC/off - for feeders to the tracks, with a switch on the panel for every one of 4 districts</li>
<li>a common return wire for wires 1-2</li>
<li>6 Volts DC - for electronic circuits and non-DCC occupancy detectors</li>
<li>12 Volts auxiliary power - for all devices except DS54 stationary decoders (see <a href="#wiring-ds54">note</a>)</li>
<li>23 Volts capacitive discharge current - for hitting those Peco switch motors and double turnouts</li>
<li>a common return wire for wires 4-6</li>
</ol>
I used standard home wiring (2,5 mm<sup>2</sup>/AWG 12) for the bus. It's cheap and prevents voltage drop along the length of the pike, which may be tiny compared the the average american N scale layout, but is big enough to spend another 10 years on building and enjoying.

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">
Go to my <a href="../tips/">Model Railroad How To's</a> next.</div>

## Third Party DCC Links

- <a id="wiring-ds54" href="https://www.jmri.org/help/en/html/hardware/loconet/DigitraxPower.shtml">Wiring the Digitrax DS54</a>, be sure to keep it apart from the other loconet devices (read why in this excellent contribution by Bob Jacobson of JMRI fame)
- <a id="locoio" href="https://locohdl.synology.me">LocoIO by Hans Deloof</a>
