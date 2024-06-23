---
page_id: smart-home
layout: page
lang: en-us
permalink: /house/smart
title: Smart Home
nav: false
toc:
  sidebar: left
---

We started simple to automate the house: a few Ikea lights, 2 shutters 
Several years on, it was time to connect the different systems and add more smartness.

![Home Assistant logo]({{ "/assets/img/house/smart/home-assistant-logo.svg" | relative_url }})

I set up a Raspberry Pi 4 running [hassos](https://www.home-assistant.io/) OS to manage the connected systems in our current home.
It consumes just 4W, so that saves a lot compared to running in on a desktop (iMac 24/7 with Oracle VirtualBox consumed 36 W = 312 kW/year).

[HomeAssistant](https://www.home-assistant.io/) (HA) allows manual and automated operation of different smart blinds, lights etc. all in one place with all smartness running locally.

Standard supported integrations I use:

- [Ikea Tradfri](https://www.home-assistant.io/integrations/tradfri/) lighting, smart sockets and blinds
- [Tuya Smart](https://www.home-assistant.io/integrations/tuya/) Zigbee (also for OEM like Lidl)
- [PowerView](https://www.home-assistant.io/integrations/hunterdouglas_powerview/) Hunter Douglas/Luxaflex curtains & blinds
- SolarEdge PV panel convertor
- [Tado](https://www.home-assistant.io/integrations/tado/) smart thermostats
- Siemens/Bosch Home Connect (washing machine alerts)
- MyUplink, new protocol for our Nibe F1255 heat pump

HA Community Plug-ins allow additional systems to tie in via HACS (Home Assistant Community Store) and even by adding custom repositories from GitHub in HACS, e.g.

- NIBE Uplink (our heat pump)
- myenergi (Zappi EV charger and energy monitor)
- Gardena garden sprinkler timers
- Casambi Bluetooth (not using the Casambi API/server/gateway)

HomeAssistant supports so called Add-Ons that provide extra functions on the server. I use:

- File editor (to edit config files in the iOS app, or remotely via)
- Advanced SSH & Web Terminal
- Mosquito Broker (for MQTT messaging on the local Wi-Fi network)
- Samba NAS (to access a shared folder on the RPi)
- InfluxDB (to collect long term energy statistics)

## Energy Monitoring

By combining the utility meter readings with the SolarEdge PV generation and [myenergi](https://www.myenergi.com) Zappi EV charger figures, I am able to separate the EV charging from the electricity consumed in the house. And by adding two extra CT clamps in the main switch board I got a grip on our bigger electric appliances, such as the electric stove.

![Home Assistant logo]({{ "/assets/img/house/smart/ha_energydistr.png" | relative_url }})

## Custom tools

<div class="card mx-auto mb-3 p-3" style="max-width: 95%;">

### Smart Oven Display {#oven}

I happened to forget shutting down the stove a couple of times, as there is no indicator light or buzzer on the thing. That meant 1-2 kWh lost in space! To fix this, I connected a Raspberry Pico microcontroller with a 1.3" OLED screen to HomeAssistant via MQTT/Wi-Fi. As soon as the sensor in the main switch board signals that the stove is on, it sends an MQTT message which wakes up by my ovenside display, showing which hb or oven is on. A timer is started to automate preheating timing of either a cooking hub (15 mins) or one of the ovens (60 mins). After the set period my wife and I each receive an alert on our phone telling us "The Oven is Ready". And after 2 hours, I am reminded if I still mean to have the stove on.  
See [this blog post]({{ "/blog/2024/smartovendisplay" | relative_url }}) for more details.
</div>

When you shop for a new gatget, take note of the supported protocol, for example HomeKit, Zigbee/Tuya, Matter. I would not recommend OEM or provate protocols als you might end up with a dedicated bridge for each. And they are always on, comsuming a couple ow Watt.
