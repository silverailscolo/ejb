---
layout: post
lang: nl
page-id: jekyll-fa
title: Inline fa icons op Jekyll
date: "2026-06-25"
categories:
  - computers
  - how-to
tags:
  - jekyll
  - css
  - web
---

Het thema van deze site gebruikt in de navigatiebalk een icoontje voor de licht/donker schermmodus. Dat zijn symbolen uit het Font Awesome web font.
Het is leuk om op elke pagina in de tekst ook symbolen te gebruiken, bijvoorbeeld voor een handleiding.

Om het slotje in een regel te zetten, gebruik je deze code in een paragraph:

```html
{% raw %}
<p>Een tekstregel met een symbool <i class="fa-solid fa-unlock"></i></p>
{% endraw %}
```

Dus alles wordt met CSS (Cascading Style Sheets) geregeld. Dat ziet er dan zo uit:

<p>Een tekstregel met een symbool <i class="fa-solid fa-unlock"></i></p>

- In het Jekyll al-folio thema is alleen de stijl `fa-solid` beschikbaar (free pack).
- Om een symbool te kiezen, vervang je `fa-unlock` door een andere naam uit [deze lijst](https://fontawesome.com).
- Om de kleur aan te passen voeg je het `style="color:` element in.
- Om de grootte van het symbool (t.o.v. je normale tekstgrootte) aan te passen voeg je de class `fa-2xl` toe.
- Op fontawesome.com kune je hiermee experimenteren en de tag kopiëren.

```html
{% raw %}
<p>Een tekstregel met een groot rood symbool <i class="fa-solid fa-lock fa-2xl" style="color: rgb(255, 0, 0);"></i></p>
{% endraw %}
```

<p>Een tekstregel met een groot rood symbool <i class="fa-solid fa-lock fa-2xl" style="color: rgb(255, 0, 0);"></i></p>
