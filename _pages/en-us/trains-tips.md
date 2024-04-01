---
page_id: traintips
layout: page
permalink: /trains/tips
title: Modeling Tips
description: Learned the hard way
lang: en-us
nav: false
toc:
  sidebar: left
---

# <a id="installdecoder">How to install a DCC decoder</a>

<p>Coming up</p>

# <a id="buildk27">Build a RLW K-27 kit</a>

See <a href="/blog/2017/assembling-the-rlw-nn3-k-27-kit/">this blog post</a>

<div class="w3-row">
<div class="w3-col s12 m6">
<figure><img src='{{ "/assets/img/trains2/IMG_6524.jpg" | relative_url }}' alt='K-27' class='w3-image'>
<figcaption class="kleiner">K-27 <a href="https://www.ebroerse.nl/blog/archieven/195">under construction</a> (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="w3-col s12 m6">
<figure><img src='{{ "/assets/img/trains2/K27_image1.jpg" | relative_url }}' alt='Wheel disk sketch' class='w3-image'>
<figcaption class="kleiner">How the K-27wheels attach (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

# <a id="dwarf">How to make a Digitrax dwarf signal</a>

<p>Using the Digitrax base mast as, well, the base we add the typical hood from styrene.</p>

<figure><img src='{{ "/assets/img/trains2/DSCF2960_signal.jpg" | relative_url }}' alt='Digitrax Base Mast' class='w3-image'>
<figcaption class="kleiner">Customized Digitrax Base Mast (
<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

# <a id="DS52housing">Build a housing for a DS52</a>

<p>The Digitrax DS52 stationary decoder consists of a PCB with a connector. After programming, it seemed wise to put it inside a decent enclosure to reduce dust and accidental damage. At <a href="https://www.conrad.nl">Conrad</a> I ordered a 53,5 x 45 x 23 mm StrapuBox, item 522600-89. Pictured below are the modifications to get the decoder inside. Put a label on the front with the decoder ID (I use DS52-X) plus the DCC adresses of both outputs and attach to the layout with 2 screws.</p>

<figure><a href='{{ "/assets/img/trains2/IMG_0502-lo.jpg" | relative_url }}'><img src='{{ "/assets/img/trains2/IMG_0503-lo.jpg" | relative_url }}' alt='Now that is neat' class='w3-image'></a>
<figcaption class="kleiner">A DS52 enclosed (click on image to view the instructions)</figcaption></figure>

# <a id="invertor">Build an add-on logic invertor daughterboard for an HDL LocoIO</a>

<figure><img src='{{ "/assets/img/trains2/DSCF0229_half.jpg" | relative_url }}' alt='LocoIO daughterboard, click for larger image' class='w3-image'></figure>

<p>To reduce the number of outputs required to connect a switch panel to Loconet, I designed a small PCB with 4 CMOS 4011 IC's. Every output pin on J10/J11 is inverted to a second LED on the panel, simply because I don't have switch feedback and if a switch isn't thrown, it's supposed to be closed. Built using a 18x15 hole piece of Euro-PCB experimenting board.</p>

# <a id="panel">JMRI Panel</a>

<p>My digital control panel was built using Panel Editor and is displayed on a compact LCD monitor by <a href="https://www.jmri.org/help/en/html/apps/PanelPro/index.shtml">JMRI PanelPro 2.4.1</a> on OSX 10.4.6, the last version supported by my MacMini hardware/Java combo.<br>
The graphics match a generic (US-built) Entrance-Exit (NX) CTC machine, in use from 1950 until the mid-nineties. However, most turnouts are operated with an Individual Function Switch (IFS); see the <a href="https://en.wikipedia.org/wiki/Signalling_control">Signaling Wiki</a>.</p>

<figure><img src='{{ "/assets/img/trains2/nx-tableau_eindhoven.jpg" | relative_url }}' alt="NX-panel Eindhoven, NL" class='w3-image'>
<figcaption class="kleiner">The NX CTC machine in Eindhoven, The Netherlands (photo &copy; <a href="https://www.nicospilt.com/index_seinhuizen.htm">Nico Spilt</a>)</figcaption></figure>

<p>I started by drawing a compact track schematic in 4 pt white lines on a black background. At the switches I erased the connecting lines to enable the JMRI small track schematic icons to display the turnout positions. Tunnels are drawn in a medium grey. I edited some JMRI turnout icons to apply at 45 degree lines, as free rotation was not yet in JMRI at the time. Locations, Block boundaries and numbers were added to help in the orientation of the dispatcher.</p>

<div class="w3-row">
<div class="w3-col s12 m6">
<figure><img src='{{ "/assets/img/trains2/DSRR%20Panel%20Background.png" | relative_url }}' alt="DSRR background" class='w3-image'>
<figcaption class="kleiner">The background image, prepared in Illustrator (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="w3-col s12 m6">
<figure><img src='{{ "/assets/img/trains2/DSRR%20Panel%20Screen.png" | relative_url }}' alt="DSRR screenshot w/icons" class='w3-image'>
<figcaption class="kleiner">The completed panel in JMRI (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

<p>In JMRI PanelPro icons from the Small LED schematics group were added to show track occupancy and Medium LED icons to display and control the current state of lighting etc. JMRI Routes are used to control the yard ladders. Turnouts in hidden trackage are monitored using Infrared detectors, also shown on the panel, supported bij audio signals produced by JMRI.<br>
Some years later, signals were added on the layout as well as to the panel. All the logic to show the correct <em>Aspects</em> is controlled as <a href="https://www.jmri.org/help/en/html/tools/signaling/SignalMastLogic.shtml">Signal Mast Logic</a> following a customized <a href="https://www.jmri.org/xml/signals/RG-1965/index.shtml">Rio Grande 1965 Rule Book</a> signal definition.</p>

<p>My physical control panels on the layout fascia sport the same graphic style, be it black on yellow to match the carpet:</p>
<figure><img src='{{ "/assets/img/trains2/IMG_3536_D_SNGRR%20panel.jpg" | relative_url }}' alt="DSRR physical panel" class='w3-image'>
<figcaption class="kleiner">One of the Control Panels on the layout (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">photo</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

<div class="w3-card w3-teal">Back to <a href="layout.html">Railroading</a></div>

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
</div>
</div>
</a>
</div>
</div>
</div>
