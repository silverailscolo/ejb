---
layout: post
lang: nl
page-id: smartovendisplay
title: Bouw zelf een AGA Display
date: 2024-04-25
tags:
  - smart-home
categories:
  - software
  - hardware
---

Zoals je [hier]({{ "/house/smart.html#oven" | relative_url }}) misschien hebt gelezen, wilde ik een herinnering/aanduiding maken voor ons AGA-keukenfornuis. Dit is mijn oplossing:

<figure><img src='{{ "/assets/img/house/smart/agadisplay_IMG9388.jpg" | relative_url }}' alt="Het complete display in gebruik" class='img-fluid'><figcaption class="kleiner">Het complete display</figcaption></figure>

### Benodigde hardware

- [Raspberry Pico W](https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html)
- [Waveshare 1.3" Pico OLED](https://www.waveshare.com/wiki/Pico-OLED-1.3) display
- USB-A naar USB-C cable
- [Thonny IDE](https://thonny.org) voor [MicroPython](https://micropython.org) om de picoW te programmeren
- [HomeAssistant](https://www.home-assistant.io) geabonneerd op [MQTT](https://mqtt.org) berichten
- Automatiseringen ingesteld in HomeAssistant die reageren op
- Stroomsensor-ingang voor je fornuis naar HomeAssistant, bijv. [myenergi harvi](https://www.myenergi.com/product/harvi/) (minimaal 2 CT-klemmen voor een 3-fase installatie)

### Stroom meten

Monteer in de meterkast of een andere veilig bereikbare plek CT-klemmen rond 2-3 aders naar de AGA. Ik heb compacte myenergi klemmen besteld.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/CT_clamps-IMG_9186.jpg" | relative_url }}' alt="CT2 klemmen in meterkast" class='img-fluid'><figcaption class="kleiner">CT2 klemmen in meterkast</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/harvi_inside-IMG_9183.jpg" | relative_url }}' alt="aansluiting in de harvi" class='img-fluid'><figcaption class="kleiner">CT2/3 aansluiting in de harvi</figcaption></figure>
</div>

Verbind de draden van de CT klemmen aan ongebruikte inputs op de harve. Ze verschijnen danals sensors in de Home Assistant myenergi integratie.

### Code

Download de [micropython code]({{ "/assets/python/ovendisplay-main.py" | relative_url }}) en installeer die op de PicoW via de applicatie Thonny.

### Home Assistant instellingen

Voeg in HomeAssistant in configuration.yaml definities toe voor input_number sensors;

<figure><img src='{{ "/assets/img/house/smart/ha_ct2_inputnumber.png" | relative_url }}' alt="HA Invoerscherm CT2 instellingen" class='img-fluid'><figcaption class="kleiner">HA Invoerscherm CT2 instellingen</figcaption></figure>

Voeg AAN/UIT-Automations toe voor elk element van je fornuis, bijvoorbeeld om aan te geven dat de Bakoven is ingeschakeld:

```
alias: AGA Baking Oven ON
description: ""
trigger:
- platform: numeric_state
  entity_id:
  - sensor.ct2_actueel_vermogen
    above: 820
    below: 960
    condition: []
    action:
- service: input_boolean.turn_on
  data: {}
  target:
  entity_id: input_boolean.aga_baking_oven
  mode: single
```

Voeg in HomeAssistant input_boolean (Aan/Uit) sensoren toe voor elk item op je fornuis, bijvoorbeeld:

```
alias: AGA turns OFF CT2
description: ""
trigger:
- platform: numeric_state
  entity_id:
  - input_number.ct2_actueel
    below: 1
    for:
    hours: 0
    minutes: 1
    seconds: 0
- platform: numeric_state
  entity_id:
  - sensor.ct2_ct3
    below: 1
    for:
    hours: 0
    minutes: 1
    seconds: 0
    condition: []
    action:
- service: input_boolean.turn_off
  data: {}
  target:
  entity_id:
  - input_boolean.aga_grill
  - input_boolean.aga_baking_oven
  - input_boolean.aga_roasting_oven
  mode: single
```

<figure><img src='{{ "/assets/img/house/smart/ha_bakingoven_input_setting.png" | relative_url }}' alt="HA Invoerscherm oven" class='img-fluid'><figcaption class="kleiner">HA Invoerscherm oven</figcaption></figure>

Voeg MQTT-onderwerpen toe in HomeAssistant `configuration.yaml`:

```
mqtt_statestream:
base_topic: homeassistant
publish_attributes: false
publish_timestamps: false
include:
  entities:
    - input_boolean.aga_warming_oven
    - input_boolean.aga_boiling_plate
    - input_boolean.aga_simmer_plate
    - input_boolean.aga_baking_oven
    - input_boolean.aga_roasting_oven
    - input_boolean.aga_grill
entity_globs:
  - input_boolean.aga_*

# MQTT subscribe to PicoW
mqtt:
sensor:
- name: "Timer A"
unique_id: "timer_a"
state_topic: "picow/timerA/running"
- name: "Timer B"
unique_id: "timer_b"
state_topic: "picow/timerB/running"
```

Meer over MQTT voor sensoren van PicoW micropython [hier](https://github.com/agners/micropython-ha-mqtt-device)

Aanpassen voor jouw situatie, bijv.

- MQTT berichten-formaat
- Verbindingsnamen en triggerstromen van de onderdelen van je fornuis (kijk naar sensor.ct2\_ hierboven)

Omdat de [myenergi harvi](https://www.myenergi.com/product/harvi/) wordt gevoed vanuit de CT-klemmen, is er iets meer tweaking nodig.

Om de stroomsensoren op nul te zetten als er geen PV- of AGA-stroom door de klemmen loopt, heb ik een timer van 2 minuten gemaakt die elke minuut wordt gereset als er een (niet-nul) meting van de myenergi-server binnenkomt in de Home Assistant myenergi-integratie. Als deze timer uiteindelijk afloopt, betekent dit dat noch de PV-panelen noch het fornuis stroom verbruiken, en een automatisering zet `input_number.ct2_actueel` en `input_number.ct3_actueel` terug naar 0.

Als u deze info nodig hebt, open dan een [Issue](https://github.com/silverailscolo/ejb/issues) op deze site.
