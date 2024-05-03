---
layout: post
lang: nl
page-id: locobooster
title: "HDL LocoBooster installation issue fixed"
date: "2018-05-23"
categories:
  - "trains-treinen"
  - "how-to"
---

# Ervaring & Oplossing

Ik heb de [HDL LocoBooster](https://locohdl.synology.me) 3.8 gebouwd en aangesloten op mijn LocoNet.

## Probleem:

Mijn Command Station is een klassieke Digitrax Zephyr DCS50. Aan de 1e LocoNet aansluiting op de Zephyr zit alleen de LocoBooster (en aan de LocoBooster uitgang zitten de rails). Aan de 2e LocoNet uitgang van de Zephyr hangen mijn decoders en op RailA/Rail B zitten Digitrax DS54/64 wisseldecoders.

(4x gecheckt dat er nog ergens een aansluiting van de rails ook op de Zephyr Rail A/B aansluiting zit. Is een bestaande baan. Toch nog ergens verstopt 1 Rail A aansluiting naar de verkeerde bus.)

- Als ik de LocoNet kabel én de rails op de LocoBuffer aansluit, en op de Zephyr de baanspanning inschakel, gaan alle ledjes op de LocoBuffer zachter branden en er klinkt een zoemtoon uit de board.
- Als ik de Ground-draden uit de LocoNet kabel tussen de LocoBooster en Zephyr doorknip dan is het weg, maar schakelt het relais niet betrouwbaar volgens de Power-knop op de Zephyr. Moet in elk geval 1 x uit en 1 x aan.
- Een andere voeding maakt geen verschil.

Ik heb geen zware verbindingsdraad aangesloten tussen de Zephyr Ground (Common) aansluiting en de LocoBooster Ground.

![]({{ "/assets/img/blog/Zephyr-Rear-Panel.png" | relative_url }})

Lees wel hierover ("same reference level”) maar Hans Deloof vermeldt het niet. Dit bleek ook niet nodig.

Als ik de rails-aansluiting losschroef van de LocoBuffer en - alleen - de ground terminal even aantik, zie ik een vonk (en de LEDs gaan ook zachter branden + een 1 Hz zoemtoon met vage locatie).

Ik mat tussen de booster uitgang en de Zephyr Rail A een hoge weerstand van 15kOhm, maar niet 0. Dus: dat is de interne weerstand van de Zephyr

## Double-check your wiring!

Wat bleek: ik had ergens halverwege de baan de Zephyr Rail A busdraad op de Booster/Track A busdraad aangesloten (en omgekeerd). Dus de rail werd nu gevoed door beide boosters = problemen!

Toen dat hersteld was, deed de Booster het met een gewone LocoNet kabel prima. Totdat ik op de vrije uitgangen een schakelaar monteerde (en er op drukte)... Adres kwijt etc.

De LocoBooster heeft een verbinding tussen de LocoNet zijde en 1 pool van de booster externe voeding. Ik heb na een tijdje een andere booster met een zgn. H-bridge gemonteerd. Die heeft wel een scheiding naar LocoNet dus eindelijk weer rijden.

Pas een jaar later ontdekte ik na het verplaatsen van een Digitrax BD1 bezetmelder, dat die ook stroom laat lopen van de rails naar LocoNet (via de terugmelddecoder waar je de zwarte/rode sensordraadjes op aansluit). Toen ik de korte [handleiding](https://www.digitrax.com/media/apps/products/detection-signaling/bd1/documents/BD1%20Inst.pdf) las, snapte ik al niet hoe de BD1 bij bezetmelding de ingang naar +5V trekt als hij alleen met de massa van de SE8c is verbonden. De BD1 (en BD4 vermoed ik) is dus alleen te gebruiken in een 100% Digitrax systeem, met die "aarde"-draad tussen alle onderdelen.

Een derde kans misschien voor de LocoBooster waar dit stukje mee begon...
