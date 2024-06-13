---
page_id: playground
layout: page
permalink: /computers/playground
title: Software Playground
description: A place for experiments and demos
lang: en-us
nav: false
support: [gallery]
accordion:
  - title: this is item 1
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  - title: this is item 2
    content: Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
---

{% include accordion.html %}

## Galleries of images

An (automatic) <a href="{{ site.baseurl }}/assets/art_gallery/index.html">Art Gallery</a>.

## Inline gallery

Using the lightgallery_tag.rb plugin

{% gallery %}
{{ '/assets/img-noresample/avenue2/albertheijn201712_ft24263-250x192.jpeg' | relative_url }}
{{ '/assets/img-noresample/astyle/20140831202837-bd2786fa-240x180.jpg' | relative_url }}
{% endgallery %}
