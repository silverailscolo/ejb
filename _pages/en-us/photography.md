---
layout: page
title: Photography
permalink: /photography/
nav: true
support: [gallery]
---

<h1>{{ page.title }}</h1>

<p>Link to a gallery page: <a href="astyle.html">A-post</a></p>

<p>Below are two example galleries. The first gallery illustrates basic usage.
The second gallery illustrate how to include several image galleries into one
entry to create more complex structures and tell better stories.</p>

{% assign count = 0 %}
{% assign align = "left" %}
{% for gallery in site.data.galleries.overview %}
{% if count == 0 %}<div class="row">{% endif %}
  <div class="half-width gallery-preview {{ align }}">
    <h1>{{ gallery.title }}</h1>
    <a href="/photography/{{ gallery.directory }}.html">
      <img alt="{{ gallery.title }}" src="/assets/img-noresample/{% if gallery.picture_path %}{{ gallery.picture_path }}{% else %}{{ gallery.directory }}{% endif %}/{{ gallery.preview.thumbnail }}" />
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

