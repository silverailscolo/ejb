---
layout: post
lang: nl
page-id: dcc-decoder
title: Bouw een DCC decoder in een Arnold N-loc
date: 2013-01-03
categories:
  - treinen
  - how-to
tags:
  - dcc
---

Door N-schaal DC-locs om te bouwen naar DCC, kun je ze op je DCC-layout laten rijden. In deze post laat ik zien hoe ik een TCS Z2 DCC-decoder ingebouwd heb in mijn [N-schaal Arnold SW-1500 Calf](/rollingstock/UP_SW1500_1870/). Deze methode kun je ook op andere modellen toepassen, diesel en stoom.

<div class="col-sm">
<figure><img src='{{ "/assets/img/rostercovers/UP_SW1500_1870.jpg" | relative_url }}' alt="SW1500 klaar voor DCC" class='img-fluid'><figcaption class="kleiner">SW1500 klaar voor DCC</figcaption></figure>
</div>

## Benodigdheden

- Een [TCS Z2 2-functie DCC decoder](https://www.tcsdcc.com/product-page/z2) in compact formaat
- Kapton insuleertape
- Dunne, flexibele draadjes, rood en zwart, elk 50mm/2" lang
- Klein 10W soldererbout en harskernsoldeer

## De loc openen

- Verwijder de behuizing van het frame door de brandstoftank tegen elkaar te knijpen (let op, lipjes breken makkelijk af)
- Verwijder de kap van het frame (looppad) door de voorkant naar binnen te drukken (okk hierbij: voorzichtig wiebelen voordat je trekt, want het lipje kan afbreken)
- Verwijder de draaistellen, de stroomopname-print en de DC-motor met wormwielen van verenstaal

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2985.jpg" | relative_url }}' alt="Motor verwijderd" class='img-fluid'><figcaption class="kleiner">Motor verwijderd</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2984.jpg" | relative_url }}' alt="Draden gesoldeerd op de elektrische print" class='img-fluid'><figcaption class="kleiner">Draden gesoldeerd op de elektrische print</figcaption></figure>
</div>
</div>

## Ruimte maken voor de decoder

- Markeer de bovenkant van het frame richting het hoge uiteinde van de motor, zoals op de foto.
- Nadat de motor uit het frame is gehaald, gebruik je een ijzerzaag en vijl om het gemarkeerde deel van het gegoten metalen frame te verwijderen.

## Bedrading aanpassen

- Isoleer de binnenkant van de koperen clips op de printplaat met een stukje dunne Kapton-tape.
- In plaats van dat de PCB-clips direct de DC-motor voeden, solderen we stukjes dun rode en zwarte draad aan de messing clips.
- Plak de decoder vast op zijn nieuwe positie bovenop het frame.
- Kort de grijze en oranje draden van de decoder en soldeer ze direct aan de koperen pads van de motor.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2981.jpg" | relative_url }}' alt="Kap en wielstellen verwijderd" class='img-fluid'><figcaption class="kleiner">Kap en wielstellen verwijderd</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2986.jpg" | relative_url }}' alt="Decoder op z'n plek getaped, voer de draadjes omhoog door het frame" class='img-fluid'><figcaption class="kleiner">Decoder op z'n plek getaped, voer de draadjes omhoog door het frame</figcaption></figure>
</div>
</div>

## Afronden

- Zet de draaistellen, motor en pickup-PCB weer in elkaar, terwijl de rode en zwarte draden langs de motor omhoog worden geleid
- Korte de rode en zwarte draadjes in en soldeer ze aan die van de decoder, vouw ze naar voren naast de decoder.
- Als voorste koplamp plaats je een LED in serie met een 500 Ohm, 1/4 W weerstand in de uitsparing, en soldeer je aan de blauwe (+) en witte (-) decoderdraden.
- Controleer alle bedrading, controleer op kortsluitingen en polariteit.
- Test de locomotief op een stuk DCC-gestuurd spoor. Controleer de rijsnelheid, motorgeluid, zet de koplamp aan/uit.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2983.jpg" | relative_url }}' alt="Frame met gemarkeerd wat weg moet" class='img-fluid'><figcaption class="kleiner">Frame met gemarkeerd wat weg moet</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2987.jpg" | relative_url }}' alt="Decoder op z'n plek, soldeer koplamp en de rode/zwarte draden" class='img-fluid'><figcaption class="kleiner">Decoder op z'n plek, soldeer koplamp en de rode/zwarte draden</figcaption></figure>
</div>
</div>

## More

- De complete TCS Z2-handleiding staat [hier](https://www.tcsdcc.com/product-page/z2)
- TCS biedt een “GOOF-PROOF” Garantie, dus ga aan de slag en bouw ook jouw locs om naar DCC.
