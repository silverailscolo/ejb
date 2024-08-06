---
page_id: smart-home
layout: page
lang: nl
permalink: /house/smart
title: Smart Huis
nav: false
toc:
  sidebar: left
---

Automatisering in ons huis begon simpel: een paar Ikea lampen, 2 elektrisch bediende rolgordijnen.
Een paar jaar later was het tijd om de verschillende systemen op elkaar aan te sluiten en centraal slim te bedienen.

![Home Assistant logo]({{ "/assets/img/house/smart/home-assistant-logo.svg" | relative_url }})

Ik heb een Raspberry Pi 4 met daarop [hassos](https://www.home-assistant.io/) OS geïnstalleerd om alles te bedienen.
De Pi verbruikt maar 4W, veel minder dan dat je het op een Mac of PC draait (iMac 24/7 with Oracle VirtualBox verbruikt 36 W = 312 kW/jaar).

[HomeAssistant](https://www.home-assistant.io/) (HA) is een open source programma waarmee je zowel met de hand als automatisch verschillende systemen kan bedienen, en ze aan elkaar koppelen, zonder dat je aan een merk, abonnement of cloud service vastzit.

Standaard integraties die ik gebruik:

- [Ikea Tradfri](https://www.home-assistant.io/integrations/tradfri/) verlichting, slimme stopcontacten en een rolgordijn
- [Tuya Smart](https://www.home-assistant.io/integrations/tuya/) Zigbee (ook voor OEM zoals Lidl)
- [PowerView](https://www.home-assistant.io/integrations/hunterdouglas_powerview/) Hunter Douglas/Luxaflex vouwgordijnen en up-down
- SolarEdge PV omvormer
- [Tado](https://www.home-assistant.io/integrations/tado/) slimme thermostaat en -knoppen
- Siemens/Bosch Home Connect (wasmachine meldingen)
- MyUplink, het huidige protocol voor onze Nibe F1255 warmtepomp

Met HA Community Plug-ins kunnen gebruikers/ontwikkelaars zelf extra systemen in HA toevoegen. Je vindt ze op de "marktplaats" HACS (Home Assistant Community Store) of je kan ze zelfs handmatig kopiëren als custom repositories van GitHub in HACS, e.g.

- myenergi (Zappi EV laadpaal en energiemonitor)
- Gardena tuinsprinkler timers
- Casambi Bluetooth (werkt zonder Casambi API/server/gateway)

HomeAssistant ondersteunt ook zgn. Add-Ons die extra functionaliteit op de Pi4 server bieden. Ik gebruik:

- File Editor (om configuratiebestandjes aan te passen in de iOS HomeAssistant Companion app )
- Advanced SSH & Web Terminal
- Mosquito Broker (ontvangt en verstuurt MQTT berichten op het Wi-Fi netwerk)
- Samba NAS (voor toegang tot gedeelde mappen op de RPi)
- InfluxDB (om lange-termijngegevens over energieverbruik bij te houden)

Met MQTT sluiten we onafhankelijke apparaten aan op HomeAssistant, zoals:
- [nibepi](https://github.com/anerdins/nibepi) (om onze Nibe F1255 warmtepomp via Modbus te besturen. Dit draait op een aparte Raspberry PiZero)
- 
## Energiemonitoring

Door de gegevens over ons energieverbruik te combineren met die van opwekking en de [myenergi](https://www.myenergi.com) Zappi EV-laadpaal kan ik ons totale elektraverbruik splitsen en optimaliseren. Dankzij 2 extra CT-klemmen in de meterkast kreeg ik ook veel beter zicht op de grote elektrische apparaten zoals ons AGA-fornuis.

![Home Assistant Energy Dashboard]({{ "/assets/img/house/smart/ha_energydistr.png" | relative_url }})

## Maatwerk oplossingen

Ik heb programma's geschreven voor microcontrollers om voor onze situatie precies zo te laten werken als we willen. Met MicroPython en ESPHome was dit vrij eenvoudig, want je kan tegenwoordig mooie modules kant-en-klaar bestellen voor € 10. Ik raad iedereen aan om dit ook te proberen, zowel voor de lol als om onafhankelijk van abonnementen en standaard producten te worden.

<div class="card mx-auto mb-3 p-3" style="max-width: 95%;">
<h3 id="oven">Slim Ovenpaneel</h3>

<p>Ik ben een paar keer vergeten om de elektrische oven uit te zetten, omdat er geen opvallend waarschuwingslampje op de AGA Cooker zit. Elke keer gooide ik zo 1-2 kWh weg! Ik heb het opgelost door een Raspberry PicoW microcontroller met een 1.3" OLED-schermpje aan HomeAssistant te koppelen via MQTT/Wi-Fi. Zodra de sensor in de meterkast ziet dat de AGA aan staat, maakt een MQTT bericht het schermpje op het aanrecht wakker, en toont grafische welke kookplaat of ovens aan staan. Een timer toont hoelang hij nog moet opwarmen (kookplaat = 15 min, Een oven duurt 60 min.). Na afloop - als ik al lang in de tuin loop - krijg ik op mijn telefoon de melding "Oven is opgewarmd". En als hij langer dan 2 uur aan staat krijg ik de vraag op dat ook de bedoeling is. Energieverspilling onder controle!</p>

<figure><img src='{{ "/assets/img/house/smart/aga/agadisplay_IMG9388.jpg" | relative_url }}' alt="AGA display in gebruik" class='img-fluid'><figcaption class="kleiner">Het schermpje naast het fornuis</figcaption></figure>

<p>Zie <a href='{{ "/blog/2024/smartovendisplay" | relative_url }}'>dit draadje</a> voor details.</p>
</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 95%;">
<h3 id="fan">Slimme ventilator</h3>

<p>Een energiezuinig huis vraagt om bewust regelen van de luchtverversing, want het tocht (gelukkig) niet. T veel ventilatie maakt het huis 's zomers te warm en te koud (condens) in de winter. Vertrouwen op natuurlijke ventilatie blijkt niet te werken als het niet waait of als het verkeerslawaai je uit je slaap houdt.<br>

Met een slimme CO<sub>2</sub>-meter besturen we nu een energiezuinige EC-ventilator. Ik heb een kleine 25x25mm ESP32 Atom Lite controller geprogrammeerd om de CO<sub>2</sub>-waarde onder de 800 ppi te houden. De ventilator is ingebouwd in een kast buiten de slaapkamer, zodat je alleen de lucht hoort stromen - totdat je slaapt.</p>

<figure><img src='{{ "/assets/img/house/smart/whisper/whisper_complete.jpg" | relative_url }}' alt="Ventilator in de kast" class='img-fluid'><figcaption class="kleiner">Slimme ventilator in bedrijf</figcaption></figure>

<p>Zie <a href='{{ "/blog/2024/whisper-fan" | relative_url }}'>dit draadje</a> voor details.</p>
</div>

Als je een nieuw gadget koopt, let dan goed op de ondersteunde protocollen, bijv. HomeKit, Zigbee/Tuya, Matter of Thread. Ik zou geen OEM of gesloten bedrijfsprotocollen aanraden want dan krijg je voor elk apparaat een hub/gateway kastje er bij. Die staan altijd aan, en verbruiken elk weer een paar Watt.
