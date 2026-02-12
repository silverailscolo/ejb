---
layout: post
lang: nl
page-id: control_panel
title: "Bouw een Bedieningspaneel"
date: "2012-10-02"
categories:
  - "trains"
  - "how-to"
tags:
  - "electronica"
---

### JMRI Panel

Mijn digitale baanbedieningspaneel is gebouwd met behulp van Panel Editor en wordt weergegeven op een compact LCD-scherm door <a href="https://www.jmri.org/help/en/html/apps/PanelPro/index.shtml">JMRI PanelPro 2.4.1</a> op macOS 10.4.6, de laatste versie die wordt ondersteund door mijn MacMini hardware/Java combo. De vormgeving komt overeen met een gangbaar (in de VS gebouwde) Entrance-Exit (NX) CTC-machine, in gebruik van 1950 tot het midden van de jaren negentig. De meeste wissels werden echter bediend met een Individual Function Switch (IFS); zie de <a href="https://en.wikipedia.org/wiki/Signalling_control">Signaling Wiki</a>.

<figure><img src='{{ "/assets/img/trains2/nx-tableau_eindhoven.jpg" | relative_url }}' alt="NS Paneel Eindhoven" class='img-fluid'>
<figcaption class="kleiner">Het bedieningspaneel in Eindhoven (photo &copy; <a href="https://www.nicospilt.com/index_seinhuizen.htm">Nico Spilt</a>)</figcaption></figure>

Ik begon met het tekenen van een compact spoorschema in 4 punts witte lijnen op een zwarte achtergrond. Bij de wissels heb ik de verbindingslijnen gewist zodat de JMRI-pictogrammen voor kleine spoorschema's de wisselposities kunnen weergeven (je kan er ook zwarte cirkels op plakken in Indesign). Tunnels zijn getekend in een middengrijs. Ik heb een aantal JMRI-wisselpictogrammen bewerkt om toe te passen op lijnen die onder een hoek van 45 graden op de tekening staan, omdat vrije rotatie destijds nog niet in JMRI kon. Locaties, blokgrenzen en nummers werden toegevoegd om te helpen bij de oriëntatie.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/DSRR_Panel_Background.png" | relative_url }}' alt="DSRR Achtergrondafbeelding" class='img-fluid'>
<figcaption class="kleiner">Achtergrondafbeelding, getekend in Illustrator (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/DSRR_Panel_Screen.png" | relative_url }}' alt="DSRR screenshot w/icons in JMRI" class='img-fluid'>
<figcaption class="kleiner">Het voltooide paneel in JMRI (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

In JMRI PanelPro zijn pictogrammen uit de groep Kleine LED-schema's toegevoegd om de spoorbezetting weer te geven en Medium LED-pictogrammen om de huidige status van verlichting weer te geven en te regelen, enz. JMRI-routes worden gebruikt om de rangeerstraten te bedienen. Wissels in verborgen sporen worden bewaakt met behulp van infrarooddetectoren, ook weergegeven op het paneel, ondersteund door audiosignalen geproduceerd door JMRI.<br>
Een paar jaar later heb ik seinen toegevoegd op de modelbaan en op het paneel. Alle logica om de juiste aspecten weer te geven wordt beheerd als <a href="https://www.jmri.org/help/en/html/tools/signaling/SignalMastLogic.shtml">Signal Mast Logic</a> volgens een - iets versimpelde - <a href="https://www.jmri.org/xml/signals/RG-1965/index.shtml">Rio Grande 1965 Rule Book</a> seindefinitie die ik voor JMRI heb geprogrammeerd.

## Echte panelen

De fysieke bedieningspanelen op mijn baan hebben dezelfde grafische stijl, zij het zwart op geel om bij het tapijt te passen:

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/IMG_3536_D_SNGRR_panel.jpg" | relative_url }}' alt="Fysiek bedieningspaneel D&amp;SNG RR" class='img-fluid'>
<figcaption class="kleiner">Een van de bedieningspanelen op de D&amp;SNG RR (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">photo</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/d_and_s/panels_rear_DSCF1846.jpg" | relative_url }}' alt="Achterzijde van een paneel" class='img-fluid'>
<figcaption class="kleiner">Achterzijde van een paneel met bedrading van LEDs en drukknoppen (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">photo</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>
