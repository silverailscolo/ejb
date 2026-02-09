---
layout: post
lang: nl
page-id: ramsesesp
title: Zelfbouw ramses_esp dongel
date: "2026-02-06"
categories:
  - computers
  - smarthome
---

WTW-ventilators en de verwarmingsbesturing van Honeywell ["praten"](/blog/2025/ramses/) via radiosignalen op 868MHz met de thermostaat en de afstandsbediening.
Verschillende fabrikanten gebruiken hiervoor een controller (print) van [Airios](https://www.airios.eu/).

Als je deze apparaten in je huis wilt besturen vanuit HomeAssistant, heb je een speciale zender/ontvanger nodig (_transceiver_). Die kun je kant-en-klaar kopen, bijv. de [Indalotech ramses_esp](https://indalo-tech.onlineweb.shop/product/ramses-esp) ca. GBP 45 + porto, of je knutselt hem zelf van 3 onderdelen in elkaar.

In deze post leg ik uit hoe ik dat zelf heb gedaan.

## Hardware

Benodigde onderdelen:

- ESP32-S3-N16R8 WROOM-1 dev board met aangesoldeeerde pinnen €10-€15, bijv. [hier te koop](https://www.otronic.nl/nl/esp32-s3-n16r8-devkitc-16mb-flash-en-8mb-psram.html) en [hier](https://www.bitsandparts.nl/ESP32-S3-DevKitC-N16R8-Ontwikkelboard-WiFi-Buetooth-p1923998) (N16R8 betekent 8MB PSRAM en 16MB FLASH)
- CC1101 868 MHz transceiver: €5, ik bestelde de mijne [hier](https://www.bitsandparts.nl/RF-Transceiver-868MHz-CC1101-met-antenne-p1105676)
- 170-gaats [mini-breadboard](https://www.otronic.nl/nl/mini-breadboard-170-gaats-voor-prototyping-wit-zon.html) €1
- 6x Dupont [jumperkabeltjes male-male 10cm](https://www.otronic.nl/nl/dupont-jumper-kabels-40-stuks-male-male-10cm-draad.html) €1
- USB-adapter, bijv. een oude iPhone lader
- USB-C kabel, 10 cm lang

Totale kosten incl. 1x porto: ca. €25.

## Aansluitingen

### CC1101

Soldeer het spiraalvormige antennetje in het middelste oog aan de bovenkant op de CC1101-print.

Knip van 8 Dupont-kabeltjes aan 1 kant de stekertjes af, strip de snoertjes 3 mm en soldeer ze aan de 8 aansluitingen op de CC1101 print.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/CC1101-868mhz-radio-module-pinout.jpg" | relative_url }}' alt="CC1101 pinout" class='img-fluid'><figcaption class="kleiner">CC1101 pinout</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/IMG_6156_cc1101_ramses.jpg" | relative_url }}' alt="Aansluitingen CC1101" class='img-fluid'><figcaption class="kleiner">Aansluitingen CC1101</figcaption></figure>
</div>
</div>

### ESP32

Prik de ESP32 links van het midden in het mini-breadboard. De gaatjes op het breadboard zijn horizontaal (cijfer-rij) met elkaar verbonden. Dus als je naast een pin een Dupont kabeltje in het breadboard prikt, dan is die verbonden met die pin.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/ESP32-S3_DevKitC-1_pinlayout_v1.1.jpg" | relative_url }}' alt="ESP32_S3 pinout" class='img-fluid'><figcaption class="kleiner">ESP32_S3 pinout</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/IMG_6157_ramses_esp32_board.jpg" | relative_url }}' alt="ramses_esp aansluitingen" class='img-fluid'><figcaption class="kleiner">ramses_esp aansluitingen</figcaption></figure>
</div>
</div>

## Firmware

De "stick" heeft software nodig, die je er zelf vanaf een Mac of PC op kunt "flashen" met [esp-idf](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32/get-started/index.html). Download de laatste versie van [ramses_esp](https://github.com/IndaloTech/ramses_esp/releases) en de [instructies](https://github.com/IndaloTech/ramses_esp/wiki/Serial-Interface).

Ik heb de firmware code vanaf mijn iMac via USB-C op de ESP32 geflasht met het Terminal-programma esp-idf. Open een Terminal-venster in de map waarin ramses_esp is gedownload, en tik:

```shell
idf.py menuconfig
...
Loaded configuration '/Users/me/esp/ramses_esp/sdkconfig'
```

> Je moet deze aansluitingen in de `ramses_esp` build voor het flashen nog aanpassen, omdat de pinnen 35-37 die in de code van Indalotech staan ingesteld, op deze ESP32-S3 al in gebruik zijn voor het PSRAM. We wijzigen de andere pinnen zodat we ze allemaal dicht bij elkaar aan één kant van het board zitten.
> Dit pas je aan in het _esp-idf configmenu_ terminal-programma. Typ in de terminal `idf.py menuconfig`, ga met de pijljestoetsen omlaag naar _Component Config_ + Enter en ga dan naar _C1101 Configuration_ + Enter.
> Stel de GPIO pinnen in zoals hieronder afgebeeld:

| CC1101 | ESP32-S3-NR16RN8 | kleur  |
| ------ | ---------------- | ------ |
| VCC    | 3V3              | wit    |
| GND    | GND              | zwart  |
| MOSI   | 13               | bruin  |
| SCLK   | 12               | rood   |
| MISO   | 11               | oranje |
| GDO2   | 10               | geel   |
| GDO0   | 9                | groen  |
| CSN    | 8                | blauw  |

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/esp-idf-menuconfig.png" | relative_url }}' alt="esp-idf configmenu screen" class='img-fluid'><figcaption class="kleiner">esp-idf configmenu screen</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/ramses_esp-pinout-configmenu-new.png" | relative_url }}' alt="esp-idf configmenu cc1101 menu" class='img-fluid'><figcaption class="kleiner">esp-idf configmenu cc1101 menu</figcaption></figure>
</div>
</div>

### Via USB

Schrijf volgens de [instructies](https://github.com/IndaloTech/ramses_esp/wiki/Building-firmware) via een seriële terminal de WiFi-instellingen van je lokale netwerk op de ESP32.
Op macOS kan dit met het programma ['screen'](https://github.com/IndaloTech/ramses_esp/issues/8).

Als je de ramses_esp op de USB-poort van je HA-box aan gaat sluiten, ben je nu klaar. Stel de USB-poort in bij de Ramses RF configuratie > Seriële Poort. Herstart HA, en je zou berichtjes moeten zien langskomen in het System Logboek.

### Via MQTT

Als je de dongel niet naast je HA-box maar elders in huis, dichter bij je ventilatie, wilt plaatsen dan kan je via het MQTT-protocol de ontvangen Ramses-II berichten doorsturen naar Home Assistant. Kijk op de Ramses RF Wiki hoe je dat in de integratie in moet stellen.

Stel ook de MQTT-instellingen in zoals die aan Home Assistant is gekoppeld, bijv. met de Mosquitto App (vroeger: Add-On).

Stel tenslotte ook de [NTP](https://www.ntppool.org/nl/) (tijd-server) in, want anders hebben alle berichtjes een hele oude datum, en werkt Ramses RF niet.

## In gebruik nemen

Sluit tenslotte de ESP32 via een van beide USB-C aansluitingen aan op de 230V USB-adapter.

Succes met pakketjes ontvangen!
