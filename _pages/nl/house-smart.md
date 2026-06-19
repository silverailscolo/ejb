---
page-id: smart-home
layout: page
lang: nl
permalink: /house/smart/
title: Slim Huis
nav: false
toc:
  sidebar: left
---

Huis-automatisering begon simpel bij ons: een paar Ikea lampen, 2 elektrisch bediende rolgordijnen.
Een paar jaar later was het tijd om de verschillende systemen op elkaar aan te sluiten en centraal _slim_ te bedienen.

<figure><img src='{{ "/assets/img/house/smart/home-assistant-logo.svg" | relative_url }}' alt="Home Assistant logo" class='img-fluid'></figure>

Ik heb een Raspberry Pi 4 met daarop [hassos](https://www.home-assistant.io/) OS geïnstalleerd om alles te bedienen.
De Pi4 verbruikt slechts 4W, veel minder dan dat je het op een Mac of PC draait (iMac 24/7 met Oracle VirtualBox verbruikt 36 W = 308 kWh/jaar).

[HomeAssistant](https://www.home-assistant.io/) (HA) is een open source programma waarmee je zowel met de hand als automatisch verschillende systemen kan bedienen, en ze aan elkaar koppelen, zonder dat je aan een merk, abonnement of cloud service vastzit.

## Apps en API's

Fabrikanten bieden soms een 'gratis' app om hun apparaat mee te bedienen. Dit werkt vaak via een cloud (server via internet): een privacy- en beveiligingsrisico, en afhankelijk van wat de fabrikant aan gegevens in de app laat zien.
Voorbeelden:

- Ikea Tradfri: **Ikea Smart** app + Tradfri hub
- Tuya Smart: **Tuya** app + Tuya bridge
- Nibe warmtepomp: **MyUplink** app + UTP
- Luxaflex shutters: **PowerView** app + bridge
- Casambi lampen (bluetooth): **Air** app + iPhone als BLE bridge
- Honeywell thermostaat, Itho ventilatie: **evohome** + RF bridge

Soms deelt een fabrikant de gegevens die de app gebruikt als een [API](https://nl.wikipedia.org/wiki/Application_programming_interface) (Application Programming Interface) waarop HA kan aanhaken. Zo niet, dan moet je uit de zichtbare gegevens zelf ontdekken wat ze betekenen en hoe je ze kan nabootsen. Maar als ze daarbij geavanceerde _encryptie_ toepassen is het onmogelijk om uit de zichtbare data af te leiden hoe een bepaald protocol is opgebouwd.

Standaard in HA ingebouwde integraties die ik gebruik:

- [Ikea Tradfri](https://www.home-assistant.io/integrations/tradfri/) verlichting, slimme stopcontacten en een rolgordijn
- [Tuya Smart](https://www.home-assistant.io/integrations/tuya/) Zigbee (ook voor OEM zoals Lidl)
- [PowerView](https://www.home-assistant.io/integrations/hunterdouglas_powerview/) Hunter Douglas/Luxaflex vouwgordijnen en up-down
- SolarEdge PV omvormer
- [Tado](https://www.home-assistant.io/integrations/tado/) slimme thermostaat en -knoppen
- Siemens/Bosch Home Connect (wasmachine meldingen)
- MyUplink, het web-protocol voor onze Nibe F1255 warmtepomp

Met HA Community Integrations kunnen gebruikers/ontwikkelaars zelf extra systemen in HA toevoegen. Je vindt ze op de "marktplaats" HACS (Home Assistant Community Store). Je kunt zelfs de `URL van GitHub-bronnen handmatig kopiëren als 'custom repositories' van GitHub in HACS, e.g.

- myenergi (Zappi EV laadpaal en energiemonitor)
- Gardena tuinsprinkler timers
- Casambi Bluetooth (werkt zonder Casambi API/server/gateway)

Als _open source_ software schrijven mensen zelf een Custom Integratie voor [HomeAssistant](https://www.home-assistant.io/) (HA). Ik heb een paar Custom Integrations in HA geïnstalleerd, zoals PowerView en Ikea Tradfri. Met het oog op veiligheid/privacy heeft het echter de voorkeur om HA direct aan een apparaat te koppelen en niet via de API die op de server van de fabrikant draait.

Voor onze [Nibe F1255](https://www.nibe.eu/nl-nl/producten/warmtepompen/water-water-warmtepompen/f1255-pc) warmtepomp bestaat er een Zweeds programma dat i.p.v. via de API aan de ModBus aansluiting wordt gekoppeld, en via wifi op een [PiZero](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/) microcontroller naar MQTT berichten stuurt en ontvangt.

## HA Apps

HomeAssistant ondersteunt ook zgn. Apps die extra functionaliteit op de Pi4 server bieden. Ik gebruik:

- File Editor (om configuratiebestanden aan te passen in de iOS HomeAssistant Companion app )
- Advanced SSH & Web Terminal
- Mosquito Broker (ontvangt en verstuurt MQTT berichten op het Wi-Fi netwerk)
- Samba NAS (voor toegang tot gedeelde mappen op de RPi)
- InfluxDB (om lange-termijngegevens over energieverbruik bij te houden)

Met MQTT sluit je onafhankelijke apparaten aan op HomeAssistant, zoals:

- [nibepi](https://github.com/anerdins/nibepi) om onze Nibe F1255 warmtepomp via Modbus te besturen. Dit draait op een aparte Raspberry PiZero
- [Custom AGA Display]({{ "/blog/2024/smartovendisplay/" | relative_url }})

Als je een nieuw gadget koopt, let dan goed op de ondersteunde protocollen, bijv. HomeKit, Zigbee/Tuya, Matter of Thread. Ik zou geen OEM of gesloten bedrijfsprotocollen aanraden want dan krijg je voor elk apparaat een hub/gateway kastje er bij. Die staan altijd aan, en verbruiken elk weer een paar Watt.

## Energiemonitoring

Door de gegevens over ons energieverbruik te combineren met die van opwekking en de [myenergi](https://www.myenergi.com) Zappi EV-laadpaal kan ik ons totale elektraverbruik splitsen en optimaliseren. Dankzij 2 extra CT-klemmen in de meterkast kreeg ik ook veel beter zicht op de grote elektrische apparaten zoals ons AGA-fornuis.

<figure><img src='{{ "/assets/img/house/smart/ha_energydistr.png" | relative_url }}' alt="Home Assistant Energy Dashboard" class='img-fluid'><figcaption class="kleiner">HA Energy Dashboard (<a prefix="dct: https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Image" property="dct:title" rel="dct:type">still image</a> &copy;<a prefix="cc: https://creativecommons.org/ns#" href="https://www.ebroerse.nl" property="cc:attributionName" rel="cc:attributionURL">EJB</a> under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA</a>)</figcaption>
</figure>

## Maatwerk oplossingen

Ik heb programma's geschreven voor microcontrollers om voor onze situatie precies zo te laten werken als we willen. Met MicroPython en ESPHome was dit vrij eenvoudig, want je kan tegenwoordig mooie modules kant-en-klaar bestellen voor € 10. Ik raad iedereen aan om dit ook te proberen, zowel voor de lol als om onafhankelijk van abonnementen en standaard producten te worden.

<div class="card mx-auto mb-3 p-3" style="max-width: 95%;">
<h3 id="oven">Slim Ovenpaneel</h3>

<p>Ik ben een paar keer vergeten om de elektrische oven uit te zetten, omdat er geen opvallend waarschuwingslampje op de AGA Cooker zit. Elke keer gooide ik zo 1-2 kWh weg! Ik heb het opgelost door een Raspberry PicoW microcontroller met een 1.3" OLED-schermpje aan HomeAssistant te koppelen via MQTT/Wi-Fi. Zodra de sensor in de meterkast ziet dat de AGA aan staat, maakt een MQTT bericht het schermpje op het aanrecht wakker, en toont grafische welke kookplaat of ovens aan staan. Een timer toont hoelang hij nog moet opwarmen (kookplaat = 15 min, Een oven duurt 60 min.). Na afloop - als ik al lang in de tuin loop - krijg ik op mijn telefoon de melding "Oven is opgewarmd". En als hij langer dan 2 uur aan staat krijg ik de vraag op dat ook de bedoeling is. Energieverspilling onder controle!</p>

<figure><img src='{{ "/assets/img/house/smart/aga/agadisplay_IMG9388.jpg" | relative_url }}' alt="AGA display in gebruik" class='img-fluid'><figcaption class="kleiner">Het schermpje naast het fornuis</figcaption></figure>

<p>Zie <a href='{{ "/blog/2024/smartovendisplay/" | relative_url }}'>dit draadje</a> voor details.</p>
</div>

<div class="card mx-auto mb-3 p-3" style="max-width: 95%;">
<h3 id="fan">Slimme ventilator</h3>

<p>Een energiezuinig huis vraagt om bewust regelen van de luchtverversing, want het tocht (gelukkig) niet. Te veel ventilatie maakt het huis 's zomers te warm en te koud (condens) in de winter. Vertrouwen op natuurlijke ventilatie blijkt niet te werken als het niet waait of als het verkeerslawaai je uit je slaap houdt.<br>

Met een slimme CO<sub>2</sub>-meter besturen we nu een energiezuinige EC-ventilator. Ik heb een kleine 25x25mm ESP32 Atom Lite controller geprogrammeerd om de CO<sub>2</sub>-waarde onder de 800 ppi te houden. De ventilator is ingebouwd in een kast buiten de slaapkamer, zodat je alleen de lucht hoort stromen - totdat je slaapt.</p>

<figure><img src='{{ "/assets/img/house/smart/whisper/whisper_complete.jpg" | relative_url }}' alt="Ventilator in de kast" class='img-fluid'><figcaption class="kleiner">Slimme ventilator in bedrijf</figcaption></figure>

<p>Zie <a href='{{ "/blog/2024/whisper-smart-fan/" | relative_url }}'>dit draadje</a> voor details.</p>
</div>
