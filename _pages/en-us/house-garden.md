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

<h2>TEST using lightGallery docs tagging</h2>
A LightGallery directly on the page:

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
  $(document).ready(function() {
    lightGallery(document.getElementById('thegallery'), {
      animateThumb: false,
      zoomFromOrigin: false,
      allowMediaOverlap: true,
      toggleThumb: true,
    });
  });
</script>

<h2>TEST using lightgallery_tag.rb</h2>
{% gallery %}
/assets/img-noresample/astyle/VS-2012-5900-thumbnail.jpg
/assets/img-noresample/astyle/VS-2012-5930-thumbnail.jpg
{% endgallery %}
</script>

<h2>Or simply so</h2>
{% include album.html albumname="astyle" %}
