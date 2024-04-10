---
page_id: history
layout: page
permalink: /house/history
title: History of our house
lang: en-us
nav: false
support: [gallery]
---

About the origin of our house(s)

## Options for using lightGallery docs tagging

A manual LightGallery directly on the page:

<div id="thegallery">
<a href="{{ '/assets/img/house/history/20210518130613-079c281a.jpg' | relative_url }}" 
data-sub-html="Photo 1 by EJB &copy; 2014" >
        <img alt="img1" data-sub-html="img1 title" src="{{ '/assets/img/house/history/20210518130613-079c281a-480.webp' | relative_url }}" />
</a>
<a href="{{ '/assets/img/house/history/20210518130614-d90a888e.jpg' | relative_url }}" 
data-sub-html="Photo 2 by EJB &copy; 2015" >
<img alt="img2" data-sub-html="img2 title" src="{{ '/assets/img/house/history/20210518130614-d90a888e-480.webp' | relative_url }}" />
    </a>
<a href="{{ '/assets/img/house/history/20210518130616-cc0b8b87.jpg' | relative_url }}" 
data-sub-html="Photo 2 by EJB &copy; 2015" >
<img alt="img2" data-sub-html="img2 title" src="{{ '/assets/img/house/history/20210518130616-cc0b8b87-480.webp' | relative_url }}" />
    </a>
</div>

<script>
  lightGallery(document.getElementById("thegallery"), {
    plugins: [lgThumbnail, lgZoom, lgAutoplay, lgFullscreen],
    speed: 500,
    thumbnails: true,
    thumbWidth: 60,
    thumbHeight: "40px",
    thumbMargin: 4,
    showMaximizeIcon: true,
    appendSubHtmlTo: '.lg-item',
  });
</script>
<!-- end of manual lg block -->

<h2>Using lightgallery_tag.rb</h2>

{% gallery %}
{{ "/assets/img/house/history/20210518130613-079c281a.jpg" | relative_url }}
{{ "/assets/img/house/history/20210518130614-d90a888e.jpg" | relative_url }}
{{ "/assets/img/house/history/20210518130616-cc0b8b87.jpg" | relative_url }}
{% endgallery %}

<!-- lightgallery_tag.rb auto thumbs -->
