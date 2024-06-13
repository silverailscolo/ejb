---
page_id: playground
layout: page
permalink: /computers/playground
title: Software Speeltuin
description: Plek voor experimenten en demo's
lang: nl
nav: false
support: [gallery]
accordion:
  - title: dit is item 1
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - title: dit is item 2
    content: Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
---

{% include accordion.html %}

## Gallerij van plaatjes

Een (automatische) <a href="{{ site.baseurl }}/assets/art_gallery/index.html">Art Gallery</a>.

## Inline

Met de lightgallery_tag.rb plugin

{% gallery %}
{{ '/assets/img-noresample/avenue2/albertheijn201712_ft24263-250x192.jpeg' | relative_url }}
{{ '/assets/img-noresample/astyle/20140831202837-bd2786fa-240x180.jpg' | relative_url }}
{% endgallery %}
