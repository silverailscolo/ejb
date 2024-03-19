---
page_id: traintips
layout: page
permalink: /trains/tips
title: Modeling Tips
description: Learned the hard way
nav: false
---

See the <a href="https://ebroerse.nl/trains/#proto">old site</a>

<h2>Index</h2>

<div class="normal-nc"><a href="#installdecoder">Install a decoder</a> | <a href="#buildk27">Build K-27 kit</a> | <a href="#dwarf">Rio Grande signal</a> | <a href="#DS52housing">DS52 housing</a> | <a href="#panel">Physical control panel</a></div>

<h3><a id="installdecoder">How to install a DCC decoder</a></h3>
<p>Coming up</p>

<h3><a id="buildk27">Build a RLW K-27 kit</a></h3>
See  <a href="https://www.ebroerse.nl/blog/archieven/195">blog post</a>
<div class="w3-row">
<div class="w3-col s12 m6">
<figure><a href="/assets/img/trains/IMG_6524.jpg"><img src='images/IMG_6524.jpg' alt='K-27' class='w3-image'></a>
<figcaption class="kleiner">K-27 <a href="https://www.ebroerse.nl/blog/archieven/195">under construction</a> (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="w3-col s12 m6">
<figure><img src='images/K27_image1.jpg' alt='Wheel disk sketch' class='w3-image'>
<figcaption class="kleiner">How the K-27wheels attach (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

<h2><a id="dwarf">How to make a Digitrax dwarf signal</a></h2>

<p>Using the Digitrax base mast as, well, the base we add the typical hood from styrene.</p>

<figure><img src='images/DSCF2960_signal.jpg' alt='Digitrax Base Mast' class='w3-image'>
<figcaption class="kleiner">Customized Digitrax Base Mast (
<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

<h2><a id="DS52housing">Build a housing for a DS52</a></h2>

<p>The Digitrax DS52 stationary decoder consists of a PCB with a connector. After programming, it seemed wise to put it inside a decent enclosure to reduce dust and accidental damage. At <a href="https://www.conrad.nl">Conrad</a> I ordered a 53,5 x 45 x 23 mm StrapuBox, item 522600-89. Pictured below are the modifications to get the decoder inside. Put a label on the front with the decoder ID (I use DS52-X) plus the DCC adresses of both outputs and attach to the layout with 2 screws.</p>

<figure><a href='images/IMG_0502-lo.jpg'><img src='images/IMG_0503-lo.jpg' alt='Now that is neat' class='w3-image'></a>
<figcaption class="kleiner">A DS52 enclosed (click on image to view the instructions)</figcaption></figure>

<h3><a id="invertor">Build an add-on logic invertor daughterboard for an HDL LocoIO</a></h3>

<figure><a href="/assets/img/trains/DSCF0229_half.jpg"><img src='images/DSCF0229_th.jpg' alt='LocoIO daughterboard, click for larger image' class='w3-image'></a></figure>

<p>To reduce the number of outputs required to connect a switch panel to Loconet, I designed a small PCB with 4 CMOS 4011 IC's. Every output pin on J10/J11 is inverted to a second LED on the panel, simply because I don't have switch feedback and if a switch isn't thrown, it's supposed to be closed. Built using a 18x15 hole piece of Euro-PCB experimenting board.</p>

<div class="w3-card w3-teal">Back to <a href="index.html">Railroading</a></div>

<h2><a id="panel">JMRI Panel</a></h2>

<p>My digital control panel was built using Panel Editor and is displayed on a compact LCD monitor by <a href="https://www.jmri.org/help/en/html/apps/PanelPro/index.shtml">JMRI PanelPro 2.4.1</a> on OSX 10.4.6, the last version supported by my MacMini hardware/Java combo.<br>
The graphics match a generic (US-built) Entrance-Exit (NX) CTC machine, in use from 1950 until the mid nineties. However, most turnouts are operated with an Individual Function Switch (IFS); see the <a href="https://en.wikipedia.org/wiki/Signalling_control">Signaling Wiki</a>.</p>

<figure><img src="/assets/img/trains/nx-tableau_eindhoven.jpg" alt="NX-panel Eindhoven, NL" class='w3-image'>
<figcaption class="kleiner">The NX CTC machine in Eindhoven, The Netherlands (photo &copy; <a href="https://www.nicospilt.com/index_seinhuizen.htm">Nico Spilt</a>)</figcaption></figure>

<p>I started by drawing a compact track schematic in 4 pt white lines on a black background. At the switches I erased the connecting lines to enable the JMRI small track schematic icons to display the turnout positions. Tunnels are drawn in a medium grey. I edited some JMRI turnout icons to apply at 45 degree lines, as free rotation was not yet in JMRI at the time. Locations, Block boundaries and numbers were added to help in the orientation of the dispatcher.</p>

<div class="w3-row">
<div class="w3-col s12 m6">
<figure><img src="/assets/img/trains/DSRR%20Panel%20Background.png" alt="DSRR background" class='w3-image'>
<figcaption class="kleiner">The background image, prepared in Illustrator (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="w3-col s12 m6">
<figure><img src="/assets/img/trains/DSRR%20Panel%20Screen.png" alt="DSRR screenshot w/icons" class='w3-image'>
<figcaption class="kleiner">The completed panel in JMRI (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

<p>In JMRI PanelPro icons from the Small LED schematics group were added to show track occupancy and Medium LED icons to display and control the current state of lighting etc. JMRI Routes are used to control the yard ladders. Turnouts in hidden trackage are monitored using Infrared detectors, also shown on the panel, supported bij audio signals produced by JMRI.<br>
Some years later, signals were added on the layout as well as to the panel. All the logic to show the correct <em>Aspects</em> is controlled as <a href="https://www.jmri.org/help/en/html/tools/signaling/SignalMastLogic.shtml">Signal Mast Logic</a> following a customized <a href="https://www.jmri.org/xml/signals/RG-1965/index.shtml">Rio Grande 1965 Rule Book</a> signal definition.</p>

<p>My physical control panels on the layout fascia sport the same graphic style, be it black on yellow to match the carpet:</p>
<figure><img src="/assets/img/trains/IMG_3536_D_SNGRR%20panel.jpg" alt="DSRR physical panel" class='w3-image'>
<figcaption class="kleiner">One of the Control Panels on the layout (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">photo</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

<div class="w3-card w3-teal">Back to <a href="trains-layout.html">Railroading</a></div>
