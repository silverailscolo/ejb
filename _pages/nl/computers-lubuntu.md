---
page_id: lubuntu
layout: page
lang: nl
permalink: /computers/lubuntu
title: Lubuntu Tips
description: Lubuntu (Linux) tips
nav: false
---

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Een Belkin WiFi PCMCIA-kaart installeren op Lubuntu 14.04</h2>

Controleer de eigenschappen van je WiFi-kaart door Utilities > Xterminal te openen en te typen:
<pre>sudo lspci</pre>

De Belkin FSD7010 rev 03 kaart gebruikt de Broadcom BCM 4306 rev 03 hardware, PCI-ID: [14e4:4320]: gebruik open source B43 driver.
Zoek het Ubuntu stuurprogramma voor de chipset in je kaart op met behulp van deze tabel.
Om een Broadcom (Belkin) WiFi kaart te gebruiken (en afsluiten van je laptop mogelijk te maken, wat het automatisch geladen wl stuurprogramma blokkeert):
De (L)Ubuntu kernel in versie 8.04.x (Hardy Heron) en hoger biedt de b43 drivers, maar vanwege copyright beperkingen niet de eigen firmware die nodig is om de kaart te gebruiken. Om de benodigde firmware uit te pakken en b43-fwcutter te installeren, voer je de volgende commando's uit in een terminal (onder het bureaubladmenu System Tools > LXTerminal) en volg je de aanwijzingen:

<pre>sudo apt-get update</pre>
<pre>sudo apt-get install b43-fwcutter</pre>

Verwijder je wifi-kaart uit de sleuf en start de computer opnieuw op.

### Het standaard wl draadloze stuurprogramma verwijderen

[apt-get](https://help.ubuntu.com/community/AptGet/Howto) installeert een pakket, apt-get remove verwijdert een pakket (met --purge verwijdert het ook de configuraties). Ga naar Utilities > Xterminal en typ:
sudo apt-get remove --purge bcmwl-kernel-source

Het kan zijn dat je deze stap moet herhalen na een systeemupdate, omdat de standaard bcmwl-kernel module opnieuw geïnstalleerd wordt. Het heeft me maanden gekost om dat uit te zoeken.

Ga verder met het volgende commando:

<pre>sudo apt-get install linux-firmware-nonfree</pre>

gevolgd door

<pre>sudo -i nano /etc/modprobe.d/blacklist.conf</pre>

Indien aanwezig, verwijder of #-commentarieer de volgende regel in het bestand /etc/modprobe.d/blacklist.conf:
<pre># blacklist b43</pre>

Voorkom dat wl voor b43 wordt geladen door de kernelmodule bcmwl te verwijderen. Als deze in de weg blijft zitten, voeg dan de regel
<pre>blacklist wl</pre>

Sla je bewerkingen op door op Ctrl-O te drukken. Plaats je wifi-kaart in de sleuf.

### Het wifi-pictogram installeren

Ga naar bureaubladmenu->Voorkeuren->Standaardtoepassingen voor LXSessions. Navigeer naar Core Applications en dan naar Network GUI. Typ in

<pre>nm-applet</pre>

en druk op herladen.
Er is een bekende bug die 2 Network Manager iconen in de lade weergeeft. Maak je geen zorgen, dit is mijn eenvoudigste oplossing.

### B43-stuurprogramma activeren

Afhankelijk van de release kunnen de B43 (en andere) pakketten vaak eenvoudig worden geactiveerd via het bureaubladmenu > Voorkeuren > Extra stuurprogramma's (het meest rechtse tabblad: Extra stuurprogramma's).
Klik op B43, voer wachtwoord in.
Op onze Acer laptop was er geen speciale actie nodig om het stuurprogramma te activeren, maar je moet wel de
Wifi-hardwareschakelaar inschakelen, anders worden zowel de interne als de PCMCIA-kaart uitgeschakeld.

### Schakelen tussen stuurprogramma's

Als je kaart door meer dan één stuurprogramma wordt ondersteund, gebruik dan het modprobe commando om het juiste stuurprogramma te
selecteren. Laad eerst alle conflicterende stuurprogramma's uit (dit houdt ook in dat je het stuurprogramma dat je probeert
te installeren verwijdert). Ga naar Utilities > Xterminal en typ:
<pre>sudo modprobe -r b43 bcma</pre>
<pre>sudo modprobe -r brcmsmac bcma</pre>
<pre>sudo modprobe -r wl</pre>

Het kan zijn dat je je computer opnieuw moet opstarten (met Wireless uitgeschakeld en de Wifi kaart uit zijn).

Het kan zijn dat je de computer opnieuw moet opstarten (met Wireless uitgeschakeld en de Wifi-kaart uit de sleuf) om de WL-module te kunnen lossen met de laatste regel; in dat geval zal het systeem je vertellen "Cannot unload, wl is in use".
Laad vervolgens het B43 stuurprogramma door het commando in te voeren:
sudo modprobe b43

Ga naar Stuurprogramma's bijwerken > Extra stuurprogramma's en selecteer "Gebruik het apparaat niet" in plaats van
"Use Broadcom 802.11 Linux STA driver in bcmwl-kernel-source (non-free)"
(Gebruik Broadcom 802.11 Linux STA stuurprogramma in bcmwl-kernel-source (niet-vrij)).

Ga naar Netwerkverbindingen en verwijder alle oude Wifi-verbindingen.
Maak een nieuwe verbinding, vul je gegevens in, MAC van de netwerkkaart (= eth1).
Als je laptop ook een interne, ingebouwde draadloze kaart heeft, kies dan de juiste adapter en negeer de andere.

Hopelijk heb je hier iets aan.

Bron van deze instructies: [help.ubuntu.com](help.ubuntu.com) en [launchpad.net](launchpad.net).

</div>
