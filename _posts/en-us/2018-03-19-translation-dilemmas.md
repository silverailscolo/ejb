---
layout: post
lang: en-us
page-id: translation
title: "Translation Dilemmas"
date: "2018-03-19"
categories:
  - "trains-treinen"
tags:
  - "jmri"
---

I'm glad to see users actively discussing how JMRI could perhaps better support their way of using it on their layout. As one of the people persons working on JMRI Localization in the last years, may I add a couple of points to this thread in order to prevent some disappointment and share the dilemmas involved?Exchanging ideas in our community can help improve JMRI. We will certainly hold different opinions on this subject. Let’s promise not to destroy other people’s efforts and take note of the policies regarding language that the likes of Apple and Microsoft adhere to.

We are talking about a couple of different dictionaries. To clarify, let’s distinguish:

1. The language used in the JMRI interface (menus, dialog text etc).

2. The Locale being modelled (or is that spelled ‘modeled’?): terms like Turnout positions Thrown-Closed, Signal Aspects etc.

3. The language used for JMRI Help screens that pop up when you choose the Help > Window Help menu, or view in a web browser as the jmri.org help pages.

Let’s study an example:

You are a French-speaking Canadian modelling a Dutch layout.

Your computer is set to display menus in French, Imprimer for Print etc. So is JMRI, the Turnout Table is called Aiguillages (in the Tableaux menu).

As for the prototype, you would want the signal to display “Stoppen voor het sein” as an Aspect name, not “Arrêter” or the US “Stop”. As long as no French translation is added to the JMRI Prorail signal definitions, that works fine, but as soon as one would be added, it will show up and the only way to prevent would be to switch all of JMRI to Dutch. Not very practical, as modelling a couple of bright yellow trains then requires you to learn a complete language in order to find the Print menu.

Still, as a French speaker you’re lucky to have JMRI Help screens available in French. But they won’t mention the country you model, just the French names for the menu options.

**Notes**

Ad 1: To me it seems most elegant to set that identical to the rest of the computer it's running on. So Print... is called Print... (or 'Druk af...' in Dutch). If somebody (you?) took the time to provide translations, any user can activate this as described. Try Japanese (but take care and use a new profile, as even the Language choices will display in Japanese!)

Ad 2: One could argue that something like the Entry-Exit (NX) Warrant is part of a British English locale, just like a Dispatcher is typical of US railroading and may or may not be translated to eg. a British or European replacement.

Ad 3: This is stored in some 2.800 files (80 MB for each language). It would seem fantastic to view this help in your chosen language, but that is a lot of work. and was only done for English (the default) and French. Keeping these two in sync is pretty hard!

- There is only one setting to choose from inside JMRI in JMRI Preferences > Display. In Java this applies one of - ISO standardised - 2-letter language abbreviations, eg. \_en./\_fr. to have all Swing (interface) strings that are written to support Internationalization (I18N in short) to use the \_mylanguage.properties file - is it exists.

- If a properties file with your abbreviation isn’t found, Java/JMRI wil use the default set, which we agreed on to display US English text.

- Currently, the same trick won’t work for the JMRI Help pages. The whole set has to be copied, including all images as they also will include menus etc. in some language.

- You can “localize” much of your own Operations stuff like places and train names, but words like Conductor and Return-When-Empty will follow your Locale setting (if available).

All I hope to have demonstrated is that there is no simple trick to make everyone happy, and there’s often an unexpected down side.
