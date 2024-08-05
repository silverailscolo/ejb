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
- Een [IRF520 MOSFET breakout](https://www.tinytronics.nl/nl/schakelaars/mosfet's/irf520-breakout-module) om het PWM-signaal van de Atom te versterken naar 10V voor de ventilator
- [HomeAssistant](https://www.home-assistant.io) met [ESPHome Add-on](https://esphome.io/guides/getting_started_hassio) IDE om de code op de Atom te installeren en de gegevens te bekijken
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
<figure><img src='{{ "/assets/img/house/smart/whisper/atom-lite-installed.jpg" | relative_url }}' alt="Atom Lite ESP32 controller gemonteerd voor de kast" class='img-fluid'><figcaption class="kleiner">Atom Lite ESP32 controller gemonteerd voor de kast</figcaption></figure>
</div>
</div>

Ik hab vanaf de ventilator 2x2 draadjes in een stuk netwerkkabel gebruikt om de Atom te voeden met 5V en de 2 contacten naar de fan aan te sluiten. Dat kan in 1 rij pinnetjes aan de achterzijde van de Atom, zie foto. GPIO25 (oranje) is de PWM-uitgang. GPIO21 is de toerenteller-puls vanaf de ventilator.

Na installatie geeft de kleur van de Lite de CO<sub>2</sub>-waarde weer (groen < 500, rood > 800). De helderheid van de led geeft de snelheid van de ventilator aan: hoe sneller hoe feller.

### Code voor Atom

Download de [yaml code]({{ "/assets/yaml/whisper/esphome_m5atomlite-whisper.yaml" | relative_url }}) en installeer die op de M5Stack Atom Lite (ESP32) via de HomeAssistant ESPHome IDE. Als je de Atom Lite voor het eerst gebruikt, ga dan eerst in Chrome naar [ESPhome Web](https://web.esphome.io/?dashboard_wizard), sluit via de USB-kabel de Atom aan op je computer, klik op Connect en dan op je USB-poort.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/esphome-connect.png" | relative_url }}' alt="In ESPhome Web select Connect" class='img-fluid'><figcaption class="kleiner">In ESPhome Web select Connect</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/esphome-port.png" | relative_url }}' alt="Select the port on your PC" class='img-fluid'><figcaption class="kleiner">Select the port on your PC</figcaption></figure>
</div>
</div>

De essentie van de ESP32 configuratie bestaat uit:

Basis-instellingen:
```
esphome:
  name: m5atomlite-whisper
  friendly_name: M5Atom Lite Whisper

globals:
  - id: speed_set_int
    type: int
    restore_value: yes
    initial_value: '4'
  - id: automatic_co2
    type: int
    restore_value: yes
    initial_value: '1'

esp32:
  board: m5stack-atom
  framework:
    type: arduino
```

Een speed_fan object aanmaken:
```
fan:
  - platform: speed
    id: whisper_fan
    name: "Slaapkamer Ventilator"
    output: whisper_fan_pwm
    speed_count: 10
    on_turn_on:
      # publish set speed
      - sensor.template.publish:
          id: whisper_speed_step
          state: !lambda 'return id(whisper_fan).speed;'
    on_turn_off:
      # publish set speed
      - sensor.template.publish:
          id: whisper_speed_step
          state: 0
      # set brightness
      - light.turn_off:
          id: led
    on_speed_set:
      # publish set speed
      - sensor.template.publish:
          id: whisper_speed_step
          state: !lambda 'return id(whisper_fan).speed;'
      # set brightness
      - lambda: |-
          // adjust brightness for any speed change
          auto call = id(led).make_call();
          call.set_state(true); // turn the light on if it was off
          auto n = 0.05 * id(speed_set_int);
          call.set_brightness(n);
          call.perform();
```

Een output aanmaken om de snelheid van de fan met PWM te sturen:
```
output:
  - platform: ledc
    # Fan PWM
    # Connect MOS-SIG to GPIO25, MOS-GND to GND; Whisper yellow to MOS V-, black to OUT-GND, red to OUT+10V
    id: whisper_fan_pwm
    pin:
      number: GPIO25
      inverted: true # MOS V+ did not work, V- did, so inverted PIN
    frequency: 10000Hz # lower if it whines
```

Een knop (switch) voor de automatische stand:
```
switch:
  - platform: template
    id: automatic
    name: Automatische regeling
    lambda: |-
      if (id(automatic_co2) == 1){
        return true;
      } else {
        return false;
      }
    turn_on_action:
      then:
      - fan.turn_on:
          id: whisper_fan
      - lambda: |-
          id(automatic_co2) = 1;
          // next block to match thresholds in sensor.co2_measurement block above
          ESP_LOGD("ATOM", "Whisper Auto ON, CO2: %d", id(co2_measurement).state);
          if (id(co2_measurement).state > 1300) {
            id(speed_set_int) = 8;
          } else if (id(co2_measurement).state > 800.0){
            id(speed_set_int) = 7;
          } else if (id(co2_measurement).state > 700.0){
            id(speed_set_int) = 6;
          } else if (id(co2_measurement).state > 600.0){
            id(speed_set_int) = 5;
          } else if (id(co2_measurement).state > 450.0){
            id(speed_set_int) = 4;
          } else if (id(co2_measurement).state > 350.0){
            id(speed_set_int) = 3;
          } else {
            id(speed_set_int) = 0;
          }
          id(whisper_fan).speed = id(speed_set_int);
    turn_off_action:
      then:
      - lambda: |-
          id(automatic_co2) = 0;
```

Een sensor om de gegevens van de CO<sub>2</sub>-sensor uit HomeAssistant naar de ESP32 kopiëren:
```
sensor:
  - platform: homeassistant
    id: co2_measurement # this is the ID for a new local sensor, and copies:
    entity_id: sensor.healthy_home_coach_netatmo_carbon_dioxide_sensor  # this points to the front end (Netatmo) entity
    unit_of_measurement: 'ppm'
    filters:
      - round: 0
    on_value_range: # next block to match thresholds in switch.automatic_co2 block below
      - above: 0
        below: 350.0
        then:
          - if:
              condition:
                lambda: return id(automatic_co2) == 1;
              then:
                fan.turn_off:
                  id: whisper_fan
          - light.turn_off:
              id: led
          #- logger.log: CO2 < 350 ppm
      - above: 350.1
        below: 450.0
        then:
          - if:
              condition:
                lambda: return id(automatic_co2) == 1;
              then:
                fan.turn_on:
                  id: whisper_fan
                  speed: 3
          - light.turn_on:
              id: led
              red: 0
              green: 100%
              blue: 0
          #- logger.log: 350 < CO2 < 450 ppm
      # ETC.
      - above: 1300.1
        then:
          - if:
              condition:
                lambda: return id(automatic_co2) == 1;
              then:
                fan.turn_on:
                  id: whisper_fan
                  speed: 8
          - light.turn_on:
              id: led
              red: 100%
              green: 0%
              blue: 50%
          #- logger.log: WARNING CO2 > 1300 ppm
```
Als de ventilator op Automatisch staat, checkt deze code de snelheid van de ventilator bij elke nieuwe CO<sub>2</sub>-meting uit de slaapkamer en past ook de kleur van de LED aan (van groen = schoon naar bruin = vuil).

Een sensor die als toerenteller informatie geeft over de werkelijke snelheid van de Whisper ventilator (3 pulsen per omwenteling, vandaar *0.33 filter):
```
sensor:
  - platform: pulse_counter # -meter too many data points
    # toerenteller Whisper witte draad
    name: Toerental
    id: whisper_toerental
    pin:
      number: GPIO21
      # inverted: true
      mode:
        input: true
        pullup: true
    unit_of_measurement: 't/min'
    state_class: measurement
    device_class: speed
    internal_filter: 5us
    update_interval: 10s
    filters:
      - multiply: 0.33 # (3 ticks per revolution as per Whisper Gold manual)
      - round: 0
```
### Home Assistant instellingen

Voeg in HomeAssistant in de Code-editor modus van een nieuw Dashboard deze [code](assets/yaml/whisper/homeassistant_whisper_dashboard.yaml) toe om een dashboard voor de bediening van je fan te maken.

Pas evt. de code aan voor jouw situatie, bijv.

- De exacte gegevens van jouw CO<sub>2</sub>-sensor
- De namen van je speed_fan, ventilator-sensors en -switches

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/whisper_ha_dashboard.jpg" | relative_url }}' alt="HA Dashboard Whisper ventilator" class='img-fluid'><figcaption class="kleiner">Dashboard Whisper ventilator in HomeAssistant</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/house/smart/whisper/HA-whisper-speed-graph.png" | relative_url }}' alt="Snelheid van de ventilator reageert op CO2-meting" class='img-fluid'><figcaption class="kleiner">Snelheid van de ventilator reageert op CO<sub>2</sub>-meting</figcaption></figure>
</div>
</div>

Veel gezonde slaap gewenst!
