---
page-id: smart-home
layout: page
lang: en-us
permalink: /house/smart/
title: Smart Home
nav: false
toc:
  sidebar: left
---

We started simple to automate the house: a couple of Ikea lights, two motorized shutters
Several years on, it was time to connect these different systems and add more smartness.

<figure><img src='{{ "/assets/img/house/smart/home-assistant-logo.svg" | relative_url }}' alt="Home Assistant logo" class='img-fluid'></figure>

I set up a Raspberry Pi 4 running [hassos](https://www.home-assistant.io/) OS to manage the connected systems in our current home.
It consumes just 4W, so that saves a lot compared to running it on a desktop (iMac 24/7 with Oracle VirtualBox would consume 36 W = 308 kWh/year).

[HomeAssistant](https://www.home-assistant.io/) (HA) allows manual and automated operation of different smart lights, blinds etc. all in one place with all smartness running locally without relying on cloud services.

Standard supported integrations I use:

- [Ikea Tradfri](https://www.home-assistant.io/integrations/tradfri/) lighting, smart sockets and blinds
- [Tuya Smart](https://www.home-assistant.io/integrations/tuya/) Zigbee (also for OEM like Lidl)
- [PowerView](https://www.home-assistant.io/integrations/hunterdouglas_powerview/) Hunter Douglas/Luxaflex curtains & blinds
- SolarEdge PV panel convertor
- [Tado](https://www.home-assistant.io/integrations/tado/) smart thermostats
- Siemens/Bosch Home Connect (washing machine alerts)
- MyUplink, the current protocol for our Nibe F1255 heat pump

HA Community Plug-ins allow additional systems to tie in via HACS (Home Assistant Community Store) and even by adding custom repositories from GitHub in HACS, e.g.

- myenergi (Zappi EV charger and energy monitor)
- Gardena garden sprinkler timers
- Casambi Bluetooth (not using the Casambi API/server/gateway)

HomeAssistant supports so called Add-Ons that provide extra functions on the Pi4 server. I use:

- File Editor (to edit config files in the iOS app, or remotely via)
- Advanced SSH & Web Terminal
- Mosquito Broker (for MQTT messaging on the local Wi-Fi network)
- Samba NAS (to access a shared folder on the RPi)
- InfluxDB (to collect long term energy statistics)

MQTT is used to connect independent devices to HomeAssistant, for instance:

- [nibepi](https://github.com/anerdins/nibepi) to control our Nibe F1255 heat pump over Modbus, running on a separate Raspberry PiZero
- [Custom AGA Display]({{ "/blog/2024/smartovendisplay/" | relative_url }})

## Energy Monitoring

By combining the utility meter readings with the SolarEdge PV generation and [myenergi](https://www.myenergi.com) Zappi EV charger figures, I am able to separate the EV charging from the electricity consumed in the house. And by adding two extra CT clamps in the main switch board I got a grip on our bigger electric appliances, such as the electric stove.

<figure><img src='{{ "/assets/img/house/smart/ha_energydistr.png" | relative_url }}' alt="Home Assistant Energy Dashboard" class='img-fluid'><figcaption class="kleiner">HA Energy Dashboard (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">still image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption>
</figure>

## Custom tools

I coded some extra hardware to customise exactly what I was looking for. Using MicroPython and ESPHome this is in fact not too difficult. I encourage you to try this out instead of making do with all the closed-source hardware.

<div class="card mx-auto mb-3 p-3" style="max-width: 95%;">

<h3 id="oven">Smart Oven Display</h3>

<p>I happened to forget shutting down the stove a couple of times, as there is no indicator light or buzzer on the AGA Cooker. That meant 1-2 kWh lost in space! To fix this, I connected a Raspberry Pico microcontroller with a 1.3" OLED screen to HomeAssistant via MQTT/Wi-Fi. As soon as the sensor in the main switch board signals that the stove is on, it sends an MQTT message which wakes up  my ovenside display, showing which hub or oven is on. A timer starts preheating timing of either a cooking hub (15 mins) or one of the ovens (60 mins). After the set period we receive an alert on our phone telling us "Oven is Ready". And after 2 hours, I am reminded if I still mean to have the stove on. Energy spill contained!</p>

<figure><img src='{{ "/assets/img/house/smart/aga/agadisplay_IMG9388.jpg" | relative_url }}' alt="AGA display in use" class='img-fluid'><figcaption class="kleiner">The finished display</figcaption></figure>

<p>See <a href='{{ "/blog/2024/smartovendisplay/" | relative_url }}'>this blog post</a> for details.</p>
</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 95%;">

<h3 id="fan">Smart Fan</h3>

<p>In an energy efficient house air exchange must be managed, and excessive ventilation would lead to either too hot or too cold rooms. Relying only on natural ventilation proved not to fuction, either for lack of pressure/wind or excessive noise from traffic waking us up at night.<br>

Using the CO<sub>2</sub> sensor already in place to drive the fan speed, I programmed a small ESP32 Atom Lite controller to extract just the required amount of air from our bedroom, using a variable speed fan mounted outside the room.</p>

<figure><img src='{{ "/assets/img/house/smart/whisper/whisper_complete.jpg" | relative_url }}' alt="Fan in use" class='img-fluid'><figcaption class="kleiner">Smart fan install</figcaption></figure>

<p>See <a href='{{ "/blog/2024/whisper-smart-fan/" | relative_url }}'>this blog post</a> for details.</p>
</div>

When you shop for a new gadget, take note of the supported protocol, for example HomeKit, Zigbee/Tuya, Matter or Thread. I would not recommend OEM or private protocols als you might end up with a dedicated bridge for each. And they are always on, consuming a couple of Watts.
