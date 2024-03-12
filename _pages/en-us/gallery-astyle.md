---
layout: gallery
title: A Very Basic Example
permalink: /photography/astyle
support: [gallery]
nav: false
---

At the end of our wonderful three week road trip at the West Coast of the US, we
spent about four days in the wonderful city of San Francisco. The city's well
known for the Golden Gate Bridge and it's fog, but has so much more up its sleeve!

{% include gallery_layout.liquid gallery=site.data.galleries.astyle %}

<h2>TEST</h2>
A LightGallery directly on the page:

  <div id="thegallery">
    <a href="/assets/img-noresample/astyle/VS-2012-5900-thumbnail.jpg"
data-lg-size="150-500" data-sub-html="Photo by EJB" >
        <img alt="img1" src="/assets/img-noresample/astyle/VS-2012-5900-thumbnail.jpg" />
    </a>
    <a href="/assets/img-noresample/astyle/VS-2012-5930-thumbnail.jpg"
data-lg-size="150-500" data-sub-html="Photo by EJB" >
        <img alt="img2" src="/assets/img-noresample/astyle/VS-2012-5930-thumbnail.jpg" />
    </a>
</div>

<script>
  $(document).ready(function() {
    lightGallery(document.getElementById('thegallery'), {
      animateThumb: false,
      zoomFromOrigin: false,
      allowMediaOverlap: true,
      toggleThumb: true,
    });
  });
</script>
