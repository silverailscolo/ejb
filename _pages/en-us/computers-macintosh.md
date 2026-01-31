---
page-id: mactips
layout: page
permalink: /computers/macintosh/
title: Mac tips
description: Lessons from my own wanderings
lang: en-us
nav: false
---

Hope this is of help. No guarantees, as usual.

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Photos app won't open</h2>

<img src='{{ "/assets/img/mac/photos-dock.png" | relative_url }}' alt="Photos app icon in Dock" style="float: right;">

When my Photos app on macOS 10.13.6 no longer opened on screen, I first used the standard
<a href="https://support.apple.com/en-us/HT204967">Apple Support advice</a> to hold down Command + Option (alt) while opening Photos.
That stopped at 5% and did not advance even after 24 hours.
So I tried to find the cause, but you don't have to even look inside the Photos database package contents.
After a couple of weeks I noticed this always happened after I switched the OS Language setting _without restarting_.

<img src='{{ "/assets/img/mac/Prefs-Language.png" | relative_url }}' alt="macOS System Settings > Language setting">

So here's the trick: do not ignore the "Restart Now or Later" dialog. After changing your Mac's display Language, <em>always</em> restart.
Then, open Photos and presto!

</div>
