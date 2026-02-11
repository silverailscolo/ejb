---
page-id: traintips
layout: page
permalink: /trains/tips/
lang: en-us
title: Modeling Tips
description: Learned the hard way
nav: false
toc:
  sidebar: left
---

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2><a id="installdecoder">How to install a DCC decoder</a></h2>

Coming up

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Build a RLW K-27 kit</h2>

<a href='{{ "/blog/2017/assembling-kit-rlw-k27/" | relative_url }}'>See this blog post</a>.

<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/IMG_6524.jpg" | relative_url }}' alt='K-27 with primer coat' class='img-fluid'>
<figcaption class="kleiner">K-27 with primer coat (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Afbeelding</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>How to make a Digitrax dwarf signal</h2>

[See this blog post]({{ "/blog/2019/rio_grande_signal/" | relative_url }}).

<figure><img src='{{ "/assets/img/trains2/d_and_s/signals_in_Farmington.jpg" | relative_url }}' alt='Signal Mast in operation' class='img-fluid'>
<figcaption class="kleiner">Signal Mast in operation (
<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">Image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Build a housing for the Digitrax DS52 stationary decoder</h2>

The Digitrax DS52 stationary decoder consists of a PCB with a connector. After programming, it seemed wise to put it inside a decent enclosure to reduce dust and accidental damage.

[See this blog post]({{ "/blog/2012/ds52-housing/" | relative_url }}).

<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/IMG_0503-lo.jpg" | relative_url }}' alt='Now that is neat' class='img-fluid'>
<figcaption class="kleiner">A DS52 enclosed (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Build an add-on logic inverter daughterboard for an HDL LocoIO</h2>

<figure><img src='{{ "/assets/img/trains2/d_and_s/LocoIO_inverter_assembly.jpg" | relative_url }}' alt='LocoIO daughterboard' class='img-fluid'></figure>

To reduce the number of outputs required to connect a switch panel to LocoNet, I designed a small PCB with 4 CMOS 4011 IC's. Every output pin on J10/J11 is inverted to a second LED on the panel.

<a href='{{ "/blog/2015/locoio-inverter/" | relative_url }}'>See this blog post</a>.

</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Virtual and Real Train Control Panels</h2>

My digital control panel was built using Panel Editor and is displayed on a compact LCD monitor.
My physical control panels on the layout fascia sport the same graphic style.

See <a href='{{ "/blog/2012/control-panel/" | relative_url }}'>this blog post</a>.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/DSRR_Panel_Screen.png" | relative_url }}' alt="DSRR screenshot w/icons" class='img-fluid'>
<figcaption class="kleiner">The completed panel in JMRI (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/IMG_3536_D_SNGRR_panel.jpg" | relative_url }}' alt="DSRR physical panel" class='img-fluid'>
<figcaption class="kleiner">One of the Control Panels on the layout (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">photo</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> as <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption></figure>
</div>
</div>

</div><!-- end of last card -->

Back to <a href="../layout/">Trains/Layout</a>

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
              {{ read_time }} min read &nbsp; &middot; &nbsp;
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
