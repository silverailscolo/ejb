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

## Home Assistant

I set up a Raspberry Pi 4 running [hassos](https://www.home-assistant.io/) OS to manage the connected systems in our current home.
It consumes just 4W, so that saves a lot compared to running in on a desktop (iMac 24/7 with Oracle VirtualBox consumed 36 W = 312 kW/year).

![Home Assistant logo]({{ "/assets/img/house/smart/home-assistant-logo.svg" | relative_url }})

HomeAssistant allows manual and automated operation of different smart blinds, lights etc. all in one place.

Standard supported integrations I use:

- Ikea Tradfri lighting
- Tuya Zigbee (also for OEM like Lidl)
- Hunter Douglas/Luxaflex curtains & blinds
- SolarEdge PV panel convertor
- Tado smart thermostats
- Siemens/Bosch Home Connect (washing machine alerts)

Community Plug-ins allow additional systems to tie in via HACS (Home Assistant Community Store) and even by adding custom repositories in HACS, e.g.

- NIBE Uplink (our heat pump)
- myenergi (Zappi EV charger and energy monitor)
- Gardena garden sprinkler timers
- Casambi Bluetooth (not using the Casambi API/server/gateway)

HomeAssistant supports a couple of so called Add-Ons that provide extra functions on the server. I use:

- Mosquito Broker (for MQTT messaging on the local Wi-Fi network)
- Samba NAS
- InfluxDB (to collect long term energy statistics)
- File editor (to edit config files in the iOS app, or remotely via)
- Advanced SSH & Web Terminal

## Energy Monitoring

By combining the utility meter readings with the SolarEdge PV generation and [myenergi](https://www.myenergi.com) zappi charger figures, I am able to separate the EV charging from the electricity consumed in the house. And by adding two extra CT clamps in the main switch board I got a grip on the bigger electric appliances we have, such as the electric stove.

![Home Assistant logo]({{ "/assets/img/house/smart/ha_energydistr.png" | relative_url }})

## Custom tools

### Smart Oven Display {#oven}

I happened to forget shutting down the stove a couple of times, as there is no indicator light or buzzer on the thing. That meant 1-2 kWh lost in space! To fix this, I connected a Raspberry Pico microcontroller with a 1.3" OLED screen to HomeAssistant via MQTT/Wi-Fi. As soon as the sensor in the main switch board signals that the stove is on, it sends an MQTT message which wakes up by my ovenside display, showing which hb or oven is on. A timer is started to automate preheating timing of either a cooking hub (15 mins) or one of the ovens (60 mins). After the set period my wife and I each receive an alert on our phone telling us "The Oven is Ready". And after 2 hours, I am reminded if I still mean to have the stove on.<br>
See [this blog post]({{ "/blog/2024/smartovendisplay" | relative_url }}) for more details.
