---
page_id: traintips
layout: page
permalink: /trains/tips
lang: en-us
title: Modeling Tips
description: Learned the hard way
nav: false
toc:
  sidebar: left
---

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2><a id="installdecoder">How to install a DCC decoder</a></h2>

<p>Coming up</p>

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Build a RLW K-27 kit</h2>

See <a href='{{ "/blog/2017/assembling-kit-rlw-k27/" | relative_url }}'>this blog post</a>.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/IMG_6524.jpg" | relative_url }}' alt='K-27 with primer coat' class='img-fluid'>
<figcaption class="kleiner">K-27 with primer coat (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/K27_image1.jpg" | relative_url }}' alt='Wheel disk sketch' class='img-fluid'>
<figcaption class="kleiner">How the K-27wheels attach (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>How to make a Digitrax dwarf signal</h2>

Using the Base Mast Kit ([Digitrax article SMBK](https://www.digitrax.com/tsd/KB619/digitrax-signal-mast-base-kit/), N scale) as - well - the base - we add the typical Rio Grande hood from styrene.

If desired, cut off the upper head just above the lower head (Secret tip: you can make a dwarf from this stump by soldering it to a copper tube for ground + a wire to each LED).

See [this blog post]({{ "/blog/2019/rio-grande-signal/" | relative_url }}).

<figure><img src='{{ "/assets/img/trains2/d_and_s/signals_in_Farmington.jpg" | relative_url }}' alt='Signal Mast in operation' class='img-fluid'>
<figcaption class="kleiner">Signal Mast in operation (
<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Build a housing for the Digitrax DS52 stationary decoder</h2>

The Digitrax DS52 stationary decoder consists of a PCB with a connector. After programming, it seemed wise to put it inside a decent enclosure to reduce dust and accidental damage. At <a href="https://www.conrad.nl">Conrad</a> I ordered a 53,5 x 45 x 23 mm <a href="https://www.conrad.nl/nl/p/strapubox-a-515-521-universele-behuizing-abs-zwart-1-stuk-s-522600.html">StrapuBox item 522600</a>. Pictured below are the modifications to get the decoder inside. Put a label on the front with the decoder ID (I use pattern DS52-###) plus the DCC adresses of both outputs and attach the case to the layout with 2 screws.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/IMG_0503-lo.jpg" | relative_url }}' alt='Now that is neat' class='img-fluid'>
<figcaption class="kleiner">A DS52 enclosed (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><a href='{{ "/assets/img/trains2/IMG_0502-lo.jpg" | relative_url }}'><img src='{{ "/assets/img/trains2/IMG_0502-lo.jpg" | relative_url }}' alt="Case modifications" class='img-fluid'></a>
<figcaption class="kleiner">Modifications to the casing, click to zoom in (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Build an add-on logic inverter daughterboard for an HDL LocoIO</h2>

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_inverter_assembly.jpg" | relative_url }}' alt='LocoIO daughterboard' class='img-fluid'></figure>

To reduce the number of outputs required to connect a switch panel to Loconet, I designed a small PCB with 4 CMOS 4011 IC's. Every output pin on J10/J11 is inverted to a second LED on the panel.

See [this blog post]({{ "_site/blog/2015/locoio-inverter/" | relative_url }}).

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>JMRI Panel</h2>

<p>My digital control panel was built using Panel Editor and is displayed on a compact LCD monitor by <a href="https://www.jmri.org/help/en/html/apps/PanelPro/index.shtml">JMRI PanelPro 2.4.1</a> on OSX 10.4.6, the last version supported by my MacMini hardware/Java combo.<br>
The graphics match a generic (US-built) Entrance-Exit (NX) CTC machine, in use from 1950 until the mid-nineties. However, most turnouts are operated with an Individual Function Switch (IFS); see the <a href="https://en.wikipedia.org/wiki/Signalling_control">Signaling Wiki</a>.</p>

<figure><img src='{{ "/assets/img/trains2/nx-tableau_eindhoven.jpg" | relative_url }}' alt="NX-panel Eindhoven, NL" class='img-fluid'>
<figcaption class="kleiner">The NX CTC machine in Eindhoven, The Netherlands (photo &copy; <a href="https://www.nicospilt.com/index_seinhuizen.htm">Nico Spilt</a>)</figcaption></figure>

<p>I started by drawing a compact track schematic in 4 pt white lines on a black background. At the switches I erased the connecting lines to enable the JMRI small track schematic icons to display the turnout positions. Tunnels are drawn in a medium grey. I edited some JMRI turnout icons to apply at 45 degree lines, as free rotation was not yet in JMRI at the time. Locations, Block boundaries and numbers were added to help in the orientation of the dispatcher.</p>

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/DSRR%20Panel%20Background.png" | relative_url }}' alt="DSRR background" class='img-fluid'>
<figcaption class="kleiner">The background image, prepared in Illustrator (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/DSRR%20Panel%20Screen.png" | relative_url }}' alt="DSRR screenshot w/icons" class='img-fluid'>
<figcaption class="kleiner">The completed panel in JMRI (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

<p>In JMRI PanelPro icons from the Small LED schematics group were added to show track occupancy and Medium LED icons to display and control the current state of lighting etc. JMRI Routes are used to control the yard ladders. Turnouts in hidden trackage are monitored using Infrared detectors, also shown on the panel, supported bij audio signals produced by JMRI.<br>
Some years later, signals were added on the layout as well as to the panel. All the logic to show the correct <em>Aspects</em> is controlled as <a href="https://www.jmri.org/help/en/html/tools/signaling/SignalMastLogic.shtml">Signal Mast Logic</a> following a customized <a href="https://www.jmri.org/xml/signals/RG-1965/index.shtml">Rio Grande 1965 Rule Book</a> signal definition.</p>

<p>My physical control panels on the layout fascia sport the same graphic style, be it black on yellow to match the carpet:</p>

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/IMG_3536_D_SNGRR%20panel.jpg" | relative_url }}' alt="DSRR physical panel" class='img-fluid'>
<figcaption class="kleiner">One of the Control Panels on the layout (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">photo</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/d_and_s/panels_rear_DSCF1846.jpg" | relative_url }}' alt="Rear side of Control Panels" class='img-fluid'>
<figcaption class="kleiner">Rear side of Control Panels with wiring to LEDs and switches (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">photo</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

</div>

Back to <a href="layout.html">Railroading</a>

<div class="container featured-posts">
<div class="row row-cols-2">

{% for post in site.posts %}
{% assign cats = post.categories | jsonify %}
{% if cats contains "how-to" %}

  <div class="card-item col">
    <a href="{{ post.url | relative_url }}">
    <div class="card hoverable">
      <div class="row g-0">
        <div class="col-md-12">
          <div class="card-body">
            <div class="float-right">
              <i class="fa-solid fa-thumbtack fa-xs"></i>
            </div>
            <h3 class="card-title text-lowercase">{{ post.title }}</h3>
            <p class="card-text">{{ post.description }}</p>
  
            {% if post.external_source == blank %}
              {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
            {% else %}
              {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
            {% endif %}
            {% assign year = post.date | date: "%Y" %}

            <p class="post-meta">
              {{ read_time }} min read &nbsp; &middot; &nbsp;
              <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
                <i class="fa-solid fa-calendar fa-sm"></i> {{ year }} </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </a>

  </div>

{% endif %}
{% endfor %}

</div>
</div>
