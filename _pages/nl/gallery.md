---
id: gallery
layout: page
title: collecties
permalink: /gallery/
lang: nl
nav: true
nav_order: 3
support: [gallery]
---

Blader door deze verzamelingen:

<div class="row container mt-5">
  <div class="card card-item m-2 p-2 hoverable col-sm {{ align }}">
<h4 class="card-title text-lowercase">boeken</h4>
<a href="{{ site.baseurl }}/books/">
<img alt="alle treinen" src='{{ "/assets/img/bookcovers/4.jpg" | relative_url }}' class="img-fluid" />
</a>
(script voor BookPedia xml export)
  </div>
  <div class="card card-item m-2 p-2 hoverable col-sm {{ align }}">
<h4 class="card-title text-lowercase">modelmaterieel</h4>
<a href="{{ site.baseurl }}/rollingstock/">
<img alt="alle treinen" src='{{ "/assets/img/rostercovers/DRGW_2_8_0_516.jpg" | relative_url }}' class="img-fluid" />
</a>
(script voor JMRI Roster xml export)
</div>
  <div class="card card-item m-2 p-2 hoverable col-sm {{ align }}">
<h4 class="card-title text-lowercase">Banners</h4>
<a href="{{ site.baseurl }}/computers/playground">
<img alt="Home page images" src='{{ "/assets/img/banners/stripes-global.png" | relative_url }}' class="img-fluid" />
</a>
</div>
</div>

<!-- no link/copy of Art Gallery in en-us, since we experienced nested copies of en-us/en-us/thumbs etc -->

<!-- the following opieters method block is auto-generated by Jekyll from galleries/overview.yml -->

{% assign count = 0 %}
{% assign align = "left" %}

<div class="row container mt-5">
{% for gallery in site.data.galleries.overview %}
  <div class="card card-item m-2 p-2 hoverable col-sm {{ align }}">
    <h4 class="card-title text-lowercase">{{ gallery.title }}</h4>
    <a href="{{ gallery.directory }}.html">
      <img alt="{{ gallery.title }}" src="{{ site.baseurl }}/assets/img-noresample/{% if gallery.picture_path %}{{ gallery.picture_path }}{% else %}{{ gallery.directory }}{% endif %}/{{ gallery.preview.thumbnail }}" class="img-fluid" />
    </a>
  </div>
{% assign count = count | plus: 1 %}
{% assign align = "right" %}
{% if count >= 2 %}
{% assign align = "left" %}
{% endif %}
{% endfor %}
{% if count == 0 %}{{ site.data[site.active_lang].strings.galleries.no-gall }}{% endif %}
</div>
<!-- auto-generated up to here -->
