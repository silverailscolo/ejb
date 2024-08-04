---
layout: post
lang: nl
page-id: whisper-fan
title: Bouw zelf een slimme Whisper Gold Line besturing
date: 2024-08-03
tags:
  - smart-home
categories:
  - software
  - hardware
---

Voor een frisse lucht in onze slaapkamer hadden we een decentrale WTW-unit, maar die maakte te veel lawaai om bij in slaap te vallen...<br>
Omdat we toch graag wat frisser slapen, is WTW hier ook niet zo nuttig. Dus ik heb een lijn-ventilator gemonteerd die met een ESP32 automatisch harder gaat afzuigen als de CO<sub>2</sub> te hoog wordt. Dit is mijn oplossing:

<figure><img src='{{ "/assets/img/house/smart/whisper/whisper_complete.jpg" | relative_url }}' alt="De complete ventilator in gebruik" class='img-fluid'><figcaption class="kleiner">De complete ventilator</figcaption></figure>

### Benodigde hardware

- Buisventilator Ø125mm traploos verstelbare snelheid EC-motor, bijv. de [Whisper Gold Line EC](https://www.ventilatieshop.com/buisventilatoren/whisper-buisventilator/whisper-gold-line-buisventilator-diameter-100mm-125mm-ec-motor-wgle/). Je hebt de 10V handregelaar niet nodig, maar vast wel wat stalen buizen en koppelstukken.
- [M5 Stack Atom Lite](https://shop.m5stack.com/products/atom-lite-esp32-development-kit). Dit is een compacte 25x25mm SOC met een ingebouwde RGB-led en drukknop. Ik kocht hem [hier](https://www.tinytronics.nl/nl/development-boards/microcontroller-boards/met-wi-fi/m5stack-atom-lite-esp32-development-board)
- USB-A naar USB-C kabel
- [HomeAssistant](https://www.home-assistant.io) met [ESPHome integratie](https://esphome.io/guides/getting_started_hassio) IDE
- Automatiseringen op de Atom Lite (ESP32), ingesteld met ESPHome, die reageren op
- CO<sub>2</sub>-sensor met integratie in HomeAssistant, bijv. [Netatmo Healthy Home Coach](https://shop.netatmo.com/nl-nl/aircare/home-coach/homecoach) (kan via HomeAssistant met de ook [HomeKit Bridge](https://www.home-assistant.io/integrations/homekit) ook nog in Apple HomeKit verschijnen, maar andersom kan niet)

### CO<sub>2</sub> meten

Plaats de CO<sub>2</sub> meter in de slaapkamer en installeer in HomeAssistant de [HomeKit Controller](https://www.home-assistant.io/integrations/homekit_controller) integratie om de metingen in HomeAssistant te tonen.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/ha_netamo_homekit.png" | relative_url }}' alt="Integratie in HomeAssistant" class='img-fluid'><figcaption class="kleiner">Integratie in HomeAssistant</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/ha_co2_sensor.png" | relative_url }}' alt="CO2-meting in HomeAssistant" class='img-fluid'><figcaption class="kleiner">CO<sub>2</sub>-meting in HomeAssistant</figcaption></figure>
</div>
</div>

### Ventilator aansluiten

Monteer de ventilator, -kanalen en demper buiten je slaapkamer. Ik heb ze in een kast in een aanpalende logeerkamer ingebouwd, die ook wordt afgezogen.

Naast de 230V contactdoos voor de Whisper Gold Line ventilator heb je een wcd voor de USB-adapter die de M5 Stack Atom voedt nodig.

Bij de ventilator wordt een aansluitkastje geleverd, waarin zowel de 230V voeding als 4 besturingsdraadjes uitkomen:

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/whisper_wiring.jpg" | relative_url }}' alt="Whisper aansluitschema" class='img-fluid'><figcaption class="kleiner">Whisper aansluitschema uit handleiding</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/whisper_wires.jpg" | relative_url }}' alt="Whisper aansluitingen" class='img-fluid'><figcaption class="kleiner">Whisper aansluitingen</figcaption></figure>
</div>
</div>

### M5 Atom Lite aansluiten

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/atom_lite_wires.jpg" | relative_url }}' alt="Connector achter de Atom Lite" class='img-fluid'><figcaption class="kleiner">WhConnector achter de Atom Lite</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/atom_lite_installed.jpg" | relative_url }}' alt="Atom Lite ESP32 controller gemonteerd voor de kast" class='img-fluid'><figcaption class="kleiner">Atom Lite ESP32 controller gemonteerd voor de kast</figcaption></figure>
</div>
</div>

Na installatie geeft de kleur van de Lite de CO<sub>2</sub>-waarde weer (groen < 500, rood > 800). De helderheid van de led geeft de snelheid van de ventilator aan, hoe sneller hoe feller.

### Code

Download de [yaml code]({{ "/assets/yaml/whisper/esphome_m5atomlite-whisper.yaml" | relative_url }}) en installeer die op de M5Stack Atom Lite (ESP32) via de HomeAssistant ESPHome IDE. Als je de Atom Lite voor het eerst gebruikt, ga dan eerst in Chrome naar [ESPhome Web](https://web.esphome.io/?dashboard_wizard), sluit via de USB-kabel de Atom aan op je computer, klik op Connect en dan op je USB-poort.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/ha_netamo_homekit.png" | relative_url }}' alt="In ESPhome Web select Connect" class='img-fluid'><figcaption class="kleiner">In ESPhome Web select Connect</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/esphome-port.png" | relative_url }}' alt="Select the port on your PC" class='img-fluid'><figcaption class="kleiner">Select the port on your PC</figcaption></figure>
</div>
</div>

### Home Assistant instellingen

Voeg in HomeAssistant in configuration.yaml (of een apart dashboard.yaml bestand) deze [code](assets/yaml/whisper/homeassistant_whisper_dashboard.yaml) toe.

Aanpassen voor jouw situatie, bijv.

- Jouw CO<sub>2</sub>-sensor
- De naam van je ventilator-sensors en -switches

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/whisper_ha_dashboard.jpg" | relative_url }}' alt="HA Dashboard Whisper ventilator" class='img-fluid'><figcaption class="kleiner">Dashboard Whisper ventilator in HomeAssistant</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/HA-whisper-speed-graph.png" | relative_url }}' alt="Snelheid van de ventilator reageert op CO2-meting" class='img-fluid'><figcaption class="kleiner">Snelheid van de ventilator reageert op CO<sub>2</sub>-meting</figcaption></figure>
</div>
</div>

Veel gezonde slaap gewenst!
