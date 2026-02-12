---
layout: post
lang: en-us
page-id: control_panel
title: "Build a Control Panel"
date: "2012-10-02"
categories:
  - "trains"
  - "how-to"
tags:
  - "electronics"
---

### JMRI Panel

My digital control panel was built using Panel Editor and is displayed on a compact LCD monitor by <a href="https://www.jmri.org/help/en/html/apps/PanelPro/index.shtml">JMRI PanelPro 2.4.1</a> on OSX 10.4.6, the last version supported by my MacMini hardware/Java combo.<br>
The graphics match a generic (US-built) Entrance-Exit (NX) CTC machine, in use from 1950 until the mid-nineties. However, most turnouts are operated with an Individual Function Switch (IFS); see the <a href="https://en.wikipedia.org/wiki/Signalling_control">Signaling Wiki</a>.

<figure><img src='{{ "/assets/img/trains2/nx-tableau_eindhoven.jpg" | relative_url }}' alt="NX-panel Eindhoven, NL" class='img-fluid'>
<figcaption class="kleiner">The NX CTC machine in Eindhoven, The Netherlands (photo &copy; <a href="https://www.nicospilt.com/index_seinhuizen.htm">Nico Spilt</a>)</figcaption></figure>

I started by drawing a compact track schematic in 4 pt white lines on a black background. At the switches I erased the connecting lines to enable the JMRI small track schematic icons to display the turnout positions. Tunnels are drawn in a medium grey. I edited some JMRI turnout icons to apply at 45 degree lines, as free rotation was not yet in JMRI at the time. Locations, Block boundaries and numbers were added to help in the orientation of the dispatcher.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/DSRR_Panel_Background.png" | relative_url }}' alt="DSRR background" class='img-fluid'>
<figcaption class="kleiner">The background image, prepared in Illustrator (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/DSRR_Panel_Screen.png" | relative_url }}' alt="DSRR screenshot w/icons" class='img-fluid'>
<figcaption class="kleiner">The completed panel in JMRI (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

In JMRI PanelPro icons from the Small LED schematics group were added to show track occupancy and Medium LED icons to display and control the current state of lighting etc. JMRI Routes are used to control the yard ladders. Turnouts in hidden trackage are monitored using Infrared detectors, also shown on the panel, supported bij audio signals produced by JMRI.<br>
Some years later, signals were added on the layout as well as to the panel. All the logic to show the correct <em>Aspects</em> is controlled as <a href="https://www.jmri.org/help/en/html/tools/signaling/SignalMastLogic.shtml">Signal Mast Logic</a> following a customized <a href="https://www.jmri.org/xml/signals/RG-1965/index.shtml">Rio Grande 1965 Rule Book</a> signal definition.

## Physical panels

My control panels on the layout fascia sport the same graphic style, be it black on yellow to match the carpet:

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/IMG_3536_D_SNGRR_panel.jpg" | relative_url }}' alt="DSRR physical panel" class='img-fluid'>
<figcaption class="kleiner">One of the Control Panels on the layout (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">photo</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/d_and_s/panels_rear_DSCF1846.jpg" | relative_url }}' alt="Rear side of Control Panels" class='img-fluid'>
<figcaption class="kleiner">Rear side of Control Panels with wiring to LEDs and switches (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">photo</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>
