---
page-id: dcc
layout: page
permalink: /trains/dcc/
title: DCC
lang: nl
description: Digital Command Control
nav: false
---

<img src='{{ "/assets/img/trains2/dcclogo.gif" | relative_url }}' alt="DCC logo" style="float: right;">

<h4>Wat is Digital Command Control?</h4>
Vanaf het voorjaar van 2004 ben ik overgestapt op Digtrax DCC met een Zephyr-commandostation. In de jaren '90' begonnen Märklin en Lenz met DCC, maar dat was te duur voor mij. Ik heb wel een elektronische bezettingsdetector gebouwd (werkt als een droom sinds 2006, aangesloten op de ingangen van een <a href="#locoio">LocoIO</a>, trouwens) en heb alle handleidingen gelezen, maar nooit hardware gekocht. De regelmatige DCC-samenvattingen in Model Railroader hielden me op de hoogte van de laatste ontwikkelingen, en later maakte het internet dit nog makkelijker. Dus bestelde ik in 2004 een DCC-starter pakket in de VS.

## Digitrax Zephyr

Wat mij aantrok in <a href="https://www.digitrax.com">Digitrax</a> waren de prijs van de starterset en de elegantie van het LocoNet-netwerksysteem, dat alle signaleringsapparaten verbond. Lenz had ook een interface tussen DCC en een computer, maar na de eerste editie voor Macintosh kwamen er geen updates en ben ik daar mee gestopt.

## JMRI

<a href="https://www.jmri.org"><img src='{{ "/assets/img/trains2/logo-jmri.gif" | relative_url }}' alt='JMRI'></a>

In 2003 ontdekte ik dat <a href="https://www.jmri.org">JMRI</a> is ontwikkeld als platformonafhankelijke, op Java gebaseerde software voor het aansturen van een DCC-layout. Tussen JMRI – dat ik heb getest op Mac OS 9.2 – en ™LocoNet was er iets genaamd LocoBuffer, dat je zelf kon bouwen volgens het ontwerp van J. Jabour. Net toen mijn Zephyr-systeem per post arriveerde, verdween de website van LocoBuffer van het web. Na uitgebreid bladeren en lezen hoorde ik dat een bedrijf een commerciële opvolger had ontwikkeld, genaamd de LocoBuffer-II. Toen ik hen een e-mail stuurde met de vraag naar de voorwaarden van de verzending naar het buitenland, kreeg ik te horen dat de Europese distributeur Rob Heikens was, die slechts 60 kilometer verderop woonde. Net voor de zomervakantie van 2004 bestelde ik deze hardware-interface, sleepte een computer naar de derde verdieping en startte JMRI op:
Alles werkte perfect en het was beangstigend om een motor te zien starten en stoppen zonder de layoutbediening fysiek aan te raken.

Het signaalgebruik wordt sinds de winter van 2013 ook verzorgd door <a href="https://www.jmri.org/help/en/html/tools/signaling/index.shtml">JMRI Signal Masts</a>, met een Digitrax SE8c-bord en Signal Mast Base kits, gekleed als <a href="../tips/index.html#dwarf">Rio Grande seinen</a> met hun kenmerkende Darth Vader-kappen.

<figure><img src='{{ "/assets/img/trains2/DSCF2960_signal.jpg" | relative_url }}' alt='Customized Digitrax Signal Base Mast for Rio Grande' class='img-fluid'>
<figcaption class="kleiner">Verbouwde RG Mast (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">still image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

Panelen langs de indeling zijn verbonden met JMRI en tonen de bezetting van blokken, wisselposities en ontvangen invoer om deze te wijzigen (<a href="tips.html#panel">meer over JMRI PanelPro</a>).

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/110-1082_IMG.jpg" | relative_url }}' alt='CTC in Silverton Tower' class='img-fluid'>
<figcaption class="kleiner">The Silverton bedieningspaneel (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure>
<img src='{{ "/assets/img/trains2/IMG_3536_D_SNGRR_panel.jpg" | relative_url }}' alt='Fysieke bediening op de D&S RR' class='img-fluid'>
<figcaption class="kleiner">Fysieke bediening op de D&amp;S RR (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption>
</figure>
</div>
</div>

## Wiring

Ik heb een gemengde DCC/conventionele DC-bedrading geprobeerd. in de hoop de schakelaars via LocoNet te beheren terwijl de motoren op een DCC- of reguliere DC-gasklep draaien. Het gaf me wat tijd om een decoder in de engines te plaatsen die genoeg ruimte hebben voor een decoder.

Maar na tien jaar ben ik overgestapt op volledige DCC, want het laten draaien van één systeem is al ontmoedigend genoeg.

Zelfs de Atlas (Tomix) baanreinigingsauto - met stofzuiger! - had ruimte voor een TCS-decoder en een knipperend licht bovenop.

<figure><img src='{{ "/assets/img/trains2/S2400212-kl.jpg" | relative_url }}' alt='Feeder bus, viewed from beneath the layout' class='img-fluid'>
<figcaption>Feeder bus under the layout (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

Hoewel het bedrading niet zo eenvoudig maakt als DCC kan zijn, besloot ik 7 buskabels over de hele baan te leggen:

<ol>
<li>permanent DCC - for driving stationary decoders</li>
<li>switched DCC/DC/off - for feeders to the tracks, with a switch on the panel for every one of 4 districts</li>
<li>a common return wire for wires 1-2</li>
<li>6 Volts DC - for electronic circuits and non-DCC occupancy detectors</li>
<li>12 Volts auxiliary power - for all devices except DS54 stationary decoders (see <a href="#wiring-ds54">note</a>)</li>
<li>23 Volts capacitive discharge current - for hitting those Peco switch motors and double turnouts</li>
<li>a common return wire for wires 4-6</li>
</ol>

Ik gebruikte standaard bedrading voor huis (2,5 mm 2/AWG 12) voor de bus. Het is goedkoop en voorkomt spanningsval langs de lengte van de Pike, die misschien klein is vergeleken met de gemiddelde Amerikaanse N-schaal indeling, maar groot genoeg om nog eens 10 jaar te bouwen en van te genieten.

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">
Lees ook mijn <a href="../tips/">Model Railroad How To's</a>.</div>

## Externe DCC-links

- <a id="wiring-ds54" href="https://www.jmri.org/help/en/html/hardware/loconet/DigitraxPower.shtml">Wiring the Digitrax DS54</a>, zorg ervoor dat je het apart houdt van de andere LocoNet-apparaten (lees waarom in deze uitstekende bijdrage van Bob Jacobson, bekend van JMRI)
- <a id="locoio" href="https://locohdl.synology.me">LocoIO van Hans Deloof</a>
