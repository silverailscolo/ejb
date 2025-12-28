---
page-id: traintips
layout: page
lang: nl
permalink: /trains/tips
title: Modelbouw Tips
description: Van eigen fouten geleerd
nav: false
toc:
  sidebar: left
---

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2><a id="installdecoder">Installeer een DCC-decoder</a></h2>

Binnenkort

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Bouw de RLW K-27 kit</h2>

Zie <a href='{{ "/blog/2017/assembling-kit-rlw-k27/" | relative_url }}'>deze blog post</a>.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/IMG_6524.jpg" | relative_url }}' alt='K-27 in de primer' class='img-fluid'>
<figcaption class="kleiner">K-27 in grijze primer (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/K27_image1.jpg" | relative_url }}' alt='Wielen montage schets' class='img-fluid'>
<figcaption class="kleiner">Zo monteer je de K-27 wielen (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Hoe maak je een Digitrax dwergsein</h2>

De Base Mast Kit (<a href='https://www.digitrax.com/tsd/KB619/digitrax-signal-mast-base-kit/'>Digitrax artikel SMBK</a>, N-schaal) vormt - inderdaad - de basis. We voegen er de typische Rio Grande kap van styreen aan toe.

Als je geen distant signal nodig hebt, zaag dan het bovenste seinhoofd af net boven de onderste (geheime tip: je kunt van dit restje een dwergsein maken door het stukje aan een koperen buis voor aarde te solderen + een draad voor elke LED).

Lees alles in <a href='{{ "/blog/2019/rio-grande-signal/" | relative_url }}'>deze blog post</a>.

<figure><img src='{{ "/assets/img/trains2/d_and_s/signals_in_Farmington.jpg" | relative_url }}' alt='Seinen in bedrijf' class='img-fluid'>
<figcaption class="kleiner">Seinen in bedrijf (
<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Bouw een behuizing voor de Digitrax DS52 wisseldecoder</h2>

De Digitrax DS52 wisseldecoder bestaat uit een printplaat met een connector. Na het programmeren leek het me verstandig om hem in een fatsoenlijke behuizing te plaatsen om stof en onopzettelijke schade te verminderen. Bij Conrad bestelde ik een 53,5 x 45 x 23 mm <a href="https://www.conrad.nl/nl/p/strapubox-a-515-521-universele-behuizing-abs-zwart-1-stuk-s-522600.html">StrapuBox item 522600</a>. Hieronder zijn de aanpassingen afgebeeld om de decoder erin te krijgen. Plak een label op de voorkant met de decoder ID (ik gebruik als code DS52-###) plus de DCC-adressen van beide uitgangen en bevestig alles met 2 schroefjes onder de baan.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/IMG_0503-lo.jpg" | relative_url }}' alt='Dat is netjes!' class='img-fluid'>
<figcaption class="kleiner">Ingepakte DS52 (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><a href='{{ "/assets/img/trains2/IMG_0502-lo.jpg" | relative_url }}'><img src='{{ "/assets/img/trains2/IMG_0502-lo.jpg" | relative_url }}' alt="Aanpassingen aan het doosje" class='img-fluid'></a>
<figcaption class="kleiner">Aanpassingen aan het doosje, klik om in te zoomen (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

# Bouw een logic inverter printje voor de HDL LocoIO

Om het aantal uitgangen dat nodig is om een schakelpaneel op Loconet aan te sluiten te verminderen, heb ik een kleine printplaat ontworpen met 4 CMOS 4011 IC's. Elke uitgangspin op J10/J11 is omgekeerd naar een tweede LED op het paneel, simpelweg omdat ik geen wissel-feedback heb en als de wissel omgezet wordt, neem ik aan dat hij in de andere stand staat. De groen en rode LED tonen dus dezelfde JMRI sensor, maar het staat netter op mijn paneel.

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_inverter_assembly.jpg" | relative_url }}' alt='LocoIO omkeerprintje' class='img-fluid'></figure>

Zie <a href='{{ "/blog/2015/2015-01-07-locoio-inverter/" | relative_url }}'>deze blog post</a> voor alle info.

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>JMRI Panel</h2>

Mijn digitale bedieningspaneel is gebouwd met behulp van Panel Editor en wordt weergegeven op een compact LCD-scherm door <a href="https://www.jmri.org/help/en/html/apps/PanelPro/index.shtml">JMRI PanelPro 2.4.1</a> op macOS 10.4.6, de laatste versie die wordt ondersteund door mijn MacMini hardware/Java combo. De vormgeving komt overeen met een gangbaar (in de VS gebouwde) Entrance-Exit (NX) CTC-machine, in gebruik van 1950 tot het midden van de jaren negentig. De meeste wissels werden echter bediend met een Individual Function Switch (IFS); zie de <a href="https://en.wikipedia.org/wiki/Signalling_control">Signaling Wiki</a>.

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

</div><!-- einde tegel -->

Terug naar <a href="layout.html">Treinen/Modelbaan</a>

<h2>How-to's</h2>

<div class="container featured-posts">
<div class="row row-cols-2">

{% for post in site.posts %}
{% assign cats = post.categories | jsonify %}
{% if cats contains "how-to" %}

  <div class="grid-item">
    <div class="card hoverable">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <div class="float-right">
              <i class="fa-solid fa-thumbtack fa-xs"></i>
            </div>
            <a href="{{ post.url | relative_url }}">
              <h3 class="card-title text-lowercase">{{ post.title }}</h3>
              <p class="card-text">{{ post.description }}</p>
            </a>
            {% if post.external_source == blank %}
              {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
            {% else %}
              {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
            {% endif %}
            {% assign year = post.date | date: "%Y" %}

            <p class="post-meta">
              {{ read_time }} min leestijd &nbsp; &middot; &nbsp;
              <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
                <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
            </p>
          </div><!-- end of card-body -->
        </div>
      </div>
    </div>

  </div>

{% endif %}
{% endfor %}

</div>
</div>
