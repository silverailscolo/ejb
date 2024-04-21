---
layout: post
lang: en-us
page-id: smartovendisplay
title: Build an AGA Cooker Display
date: 2024-04-15
tags:
  - smart-home
categories:
  - software
  - hardware
---

As you may have read [here]({{ "/house/smart.html#oven" | relative_url }}), I wanted to build a reminder/indication for our AGA kitchen stove.
This was my solution.

<figure><img src='{{ "/assets/img/house/smart/agadisplay_IMG9388.jpg" | relative_url }}' alt="The finished display in use" class='img-fluid'></figure>

### Hardware items needed

- [Raspberry Pico W](https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html)
- [Waveshare 1.3" Pico OLED](https://www.waveshare.com/wiki/Pico-OLED-1.3) display
- USB-A to USB-C cable
- [Thonny IDE](https://thonny.org) for [MicroPython](https://micropython.org) to program the piZero
- [HomeAssistant](https://www.home-assistant.io) providing energy use via [MQTT](https://mqtt.org) messages
- Automations set up in HomeAssistant responding to
- Current sensing input for your stove to HomeAssistant, eg. [myenergi harvi](https://www.myenergi.com/product/harvi/) (2 CT clamps minimum on 3 Phase install)

### Code

Download the [micropython code]({{ "/assets/python/ovendisplay-main.py" | relative_url }}).

Add MQTT topics in HomeAssistant configuration.yaml:

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

More on MQTT for AGA sensors from PicoW micropython [here](https://github.com/agners/micropython-ha-mqtt-device)

Add ON/OFF Automations for each element of your stove, for example to signal Baking Oven was turned ON:

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

Adapt for your use case, eg.
- MQTT messages format
- Connection names and trigger currents of your stove elements (look at sensor.ct2_ above)

In HomeAssistant, add binary input_boolean sensors for each item on your stove, for example:

``alias: AGA turns OFF CT2``

```
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

Because the [myenergi harvi](https://www.myenergi.com/product/harvi/) is powered from the CT clamps, a bit more tweaking is required.

To reset the current sensors to zero when no PV or AGA current is flowing through the clamps, I created a 2 Minute timer that is reset every minute as a (non-zero) measurement from the myenergi server arrives in Home Assistant myenergi integration. When this timer eventually runs out, it means neither the PV panels nor the stove is cunsuming any power, and an automation sets input_number.ct2_actueel and input_number.ct3_actueel to zero.

If you need those details, open an issue on this site.
