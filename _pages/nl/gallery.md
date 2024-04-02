---
id: gallery
layout: page
title: collecties
permalink: /gallery/
lang: nl
nav: true
nav_order: 4
support: [gallery]
---

<p>Galerij: <a href="avenue2.html">Avenue2</a></p>
<p>Galerij: <a href="astyle.html">A-stijl</a></p>
<p>Galerij: <a href="beercaps.html">Bierdoppen</a></p>
<p>Galerij: <a href="our_cars.html">Onze auto's</a></p>

<p>Al mijn <a href="{{ site.baseurl }}/books/">Boeken</a></p>

<p>Hieronder staan 2 galerijen. De eerste toont eenvoudige toepassing.
In de tweede zijn meerdere fotogalerijen in één blok gecombineerd om meer complexe structuren 
te maken en betere verhalen te vertellen.</p>

{% assign count = 0 %}
{% assign align = "left" %}
{% for gallery in site.data.galleries.overview %}
{% if count == 0 %}<div class="row">{% endif %}

  <div class="half-width gallery-preview {{ align }}">
    <h1>{{ gallery.title }}</h1>
    <a href="/gallery/{{ gallery.directory }}.html">
      <img alt="{{ gallery.title }}" src="{{ '/assets/img-noresample/' | relative_url }}{% if gallery.picture_path %}{{ gallery.picture_path }}{% else %}{{ gallery.directory }}{% endif %}/{{ gallery.preview.thumbnail }}" />
    </a>
  </div>
{% if count == 1 %}</div>{% endif %}
{% assign count = count | plus: 1 %}
{% assign align = "right" %}
{% if count >= 2 %}
{% assign align = "left" %}
{% assign count = 0 %}
{% endif %}
{% endfor %}

{% if count != 1 %}

</div>
{% endif %}
