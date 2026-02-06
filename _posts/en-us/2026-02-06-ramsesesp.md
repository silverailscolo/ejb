---
layout: post
lang: en-us
page-id: ramsesesp
title: DIY ramses_esp dongle
date: "2026-02-02"
categories:
  - computers
  - smart-home
---

Heat recovery fans and Honeywell's heating control appear to ["talk"](/blog/2025/ramses/) to the thermostat and remote control via radio signals at 868MHz. Several manufacturers use a controller (PCB) from [Airios](https://www.airios.eu/) from Eindhoven, NL.

If you want to control these devices in your home from HomeAssistant, you'll need a dedicated receiver. You can buy it ready-made, e.g. the [Indalotech ramses_esp](https://indalo-tech.onlineweb.shop/product/ramses-esp) approx. GBP 45 + postage, or you can assemble it yourself from 3 parts. In this post I explain how I did that.

## Hardware

Required parts:
- ESP32-S3-N16R8 WROOM-1 dev board €10-€15, for sale. [here](https://www.otronic.nl/nl/esp32-s3-n16r8-devkitc-16mb-flash-en-8mb-psram.html), and [here](https://www.bitsandparts.nl/ESP32-S3-DevKitC-N16R8-Ontwikkelboard-WiFi-Buetooth-p1923998) (N16R8 means 8MB PSRAM and 16MB FLASH)
- CC1101 868 MHz transceiver €5, I ordered mine [here](https://www.bitsandparts.nl/RF-Transceiver-868MHz-CC1101-met-antenne-p1105676)
- 170-hole [mini-breadboard](https://www.otronic.nl/nl/mini-breadboard-170-gaats-voor-prototyping-wit-zon.html) €1
- 6x Dupont [jumper cables male-male 10cm](https://www.otronic.nl/nl/dupont-jumper-kabels-40-stuks-male-male-10cm-draad.html) €1
- USB-adapter, e.g. an old iPhone charger.
- USB-C cable, 10 cm long

Total price incl. P&H: ca. €25.

## Connections

Solder the spiral antenna on the top of the CC1101 PCB. Cut off the plugs on 1 side of 8 Dupont cables, strip the cables and solder them to the 4 connections on the CC1101 PCB.

Stick the ESP32 onto the mini breadboard, slightly offset. The holes are interconnected horizontally (perpendicular to the row of pins), so if you plug a Dupont cable into the breadboard next to a pin, it is connected to that pin.

| CC1101 | ESP32-S3-NR16RN8 | color  |
|--------|------------------|--------|
| VCC    | 3V3              | white  |
| GND    | GND              | black  |
| MOSI   | 13               | brown  |
| SCLK   | 12               | red    |
| MISO   | 11               | orange |
| GDO2   | 10               | yellow |
| GDO0   | 9                | green  |
| CSN    | 8                | blue   |

> Note: I still have to check if you still need to adjust these connections in the ramses_esp code, in my note it says that the standard pins are already in use by the PRAM.

Connect the ESP32 to the 230V adapter via one of the two USB-C connections.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/IMG_6156_cc1101_ramses.jpg" | relative_url }}' alt="CC1101 Connections" class='img-fluid'><figcaption class="kleiner">CC1101 Connections</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/IMG_6157_ramses_esp32_board.jpg" | relative_url }}' alt="ramses_esp Connections" class='img-fluid'><figcaption class="kleiner">ramses_esp Connections</figcaption></figure>
</div>
</div>

## Firmware

The "stick" needs software, which you can "flash" to it yourself on a Mac or PC. Download the latest version [and instructions here](https://github.com/IndaloTech/ramses_esp/wiki/Serial-Interface).

I flashed the firmware code from my iMac via USB-C to the ESP32 with [AVRDUDE](https://github.com/avrdudes/avrdude) without any adjustments.

### Via USB
Write your WiFi settings on the ESP32 using a serial terminal according to the [instructions](https://github.com/IndaloTech/ramses_esp/issues/8). For example, you can do Over-The-Air (OTA) firmware updates.

If you're going to plug the ramses_esp into the USB port of your HA box, you're done now. Set the USB port in the Ramses RF configuration > Serial Port. Restart HA, and you should see messages in the System Log.

### Via MQTT
If you want to place the dongle closer to your ventilation instead of next to your HA box but elsewhere in the house, you can forward the received Ramses-II messages to HA via the MQTT protocol. Check the Ramses RF Wiki to see how to set that up in the integration.

Also set the MQTT settings as linked to Home Assistant, e.g. with the Moquitto App.

Finally, also set the [NTP](https://www.ntppool.org/nl/) (time server), because otherwise your messages will have a very old date, and Ramses RF will not work.

Good Luck catching those packets!
