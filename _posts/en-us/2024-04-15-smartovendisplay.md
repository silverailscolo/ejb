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

![The finished display in use]({{ "/assets/img/house/smart/agadisplay_IMG9388.jpg" | relative_url }})

### Hardware items needed

- Raspberry Pico W
- 1.3" Pico OLED display
- USB-A to USB-C cable
- Thonny IDE for MicroPython to program the piZero
- HomeAssistant providing energy use via MQTT messages
- Automations in HomeAssistant responding to
- Current sensing input for your stove to HomeAssistant, eg. myenergi harvi (2 CT clamps minimum on 3 Phase install)

### Code

Download the [micropython code]({{ "/assets/python/ovendisplay-main.py" | relative_url }})

Add MQTT topics in HomeAssistant configuration.yaml:

<code>
{% raw %}
mqtt_statestream:
base_topic: homeassistant
publish_attributes: false
publish_timestamps: false
include:
# entities:
#   - input_boolean.aga_warming_oven
#   - input_boolean.aga_boiling_plate
#   - input_boolean.aga_simmer_plate
#   - input_boolean.aga_baking_oven
#   - input_boolean.aga_roasting_oven
#   - input_boolean.aga_grill
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
</code>
More on MQTT for AGA sensors from PicoW micropython [here](https://github.com/agners/micropython-ha-mqtt-device)

Add ON/OFF Automations for each element of your stove, for example to signal Baking Oven was turned ON:
<code>
alias: AGA Baking Oven AAN
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
{% endraw %}
</code>

Adapt for your use case, eg.
- MQTT messages format
- Connection names and trigger currents of your stove elements (look at sensor.ct2_ above)

In HomeAssistant, add binary input_boolean sesnors for each item on your stove, for example:
alias: AGA zet CT2 uit
<code>
{% raw %}
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
{% endraw %}
</code>

Because of the way [myenergi harvi](https://www.myenergi.com/product/harvi/) functions, a bit more tweaking was required to reset the current sensors to 0 when no PV is being generated.

If you need those details, open an issue on this site.
