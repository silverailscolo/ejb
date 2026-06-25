---
layout: post
lang: en-us
page-id: jekyll-fa
title: Inline fa icons in Jekyll
date: "2026-06-25"
categories:
  - computers
  - how-to
tags:
  - jekyll
  - css
  - web
---

The theme of this site uses an icon for the light/dark screen mode in the navigation bar. These are symbols from the Font Awesome web font.
It would be nice to use symbols on every page in the text, for example for a manual.

To put the lock icon in a line, use this code in a paragraph:

```html
{% raw %}
<p>A line of text with a symbol <i class="fa-solid fa-unlock"></i></p>
{% endraw %}
```

So everything is handled using CSS (Cascading Style Sheets). It displays like this:

<p>A line of text with a symbol <i class="fa-solid fa-unlock"></i></p>

- In the Jekyll al-folio theme, only the style 'fa-solid' is available (free pack).
- To choose a symbol, replace 'fa-unlock' with another name from [this list](https://fontawesome.com).
- To change the color, you insert the `style="color:` element.
- To adjust the size of the symbol (relative to your normal text size), add the class 'fa-2xl'.
- On fontawesome.com, you can experiment with this and copy the tag.

```html
{% raw %}
<p>A line of text with a large red symbol <i class="fa-solid fa-lock fa-2xl" style="color: rgb(255, 0, 0);"></i></p>
{% endraw %}
```

<p>A line of text with a large red symbol <i class="fa-solid fa-lock fa-2xl" style="color: rgb(255, 0, 0);"></i></p>
