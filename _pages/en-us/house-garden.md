---
page_id: garden
layout: page
permalink: /house/garden
title: Our garden
nav: false
support: [gallery]
---

About our garden

Includes js popup

<h2>Options for using lightGallery docs tagging</h2>
A manual LightGallery directly on the page:

  <div id="thegallery">
    <a href="/assets/img-noresample/astyle/VS-2012-5900-thumbnail.jpg"
data-lg-size="150-500" data-sub-html="Photo 1 by EJB" >
        <img alt="img1" src="/assets/img-noresample/astyle/VS-2012-5900-thumbnail.jpg" />
    </a>
    <a href="/assets/img-noresample/astyle/VS-2012-5930-thumbnail.jpg"
data-lg-size="150-500" data-sub-html="Photo 2 by EJB" >
        <img alt="img2" src="/assets/img-noresample/astyle/VS-2012-5930-thumbnail.jpg" />
    </a>
</div>

<script>
  lightGallery(document.getElementById("thegallery"), {
    speed: 500,
    plugins: [lgZoom, lgThumbnail],
    thumbnails: true,
    thumbWidth: 60,
    thumbHeight: "40px",
    thumbMargin: 4,
  });
</script>
<!-- end of manual lg block -->

<h2>Inline opieters</h2>
As an inline include
{% include gallery_layout.liquid gallery=site.data.galleries.astyle %}

<h2>Using lightgallery_tag.rb</h2>
{% gallery %}
  /assets/img-noresample/astyle/VS-2012-5900-thumbnail.jpg
  /assets/img-noresample/astyle/VS-2012-5930-thumbnail.jpg
{% endgallery %}
<!-- lightgallery_tag.rb auto thumbs -->

<h2>Or simply so (by Jimmy Xiao)</h2>
{% include album.html albumname="astyle" %}
