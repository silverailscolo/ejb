---
layout: post
lang: nl
page-id: translation
title: Vertaal-dilemmas
date: "2018-03-19"
categories:
  - treinen
  - computers
tags:
  - jmri
  - taal
---

Ik ben blij te zien dat gebruikers actief discussiëren over hoe JMRI misschien hun manier van gebruik op hun layout beter kan ondersteunen. Als een van de mensen die de afgelopen jaren aan JMRI-lokalisatie hebben gewerkt, mag ik een paar punten aan deze thread toevoegen om teleurstelling te voorkomen en de bijbehorende dilemma's te delen? Het uitwisselen van ideeën in onze gemeenschap kan JMRI verbeteren. We zullen zeker verschillende meningen over dit onderwerp hebben. Laten we beloven de inspanningen van anderen niet te vernietigen en let op het beleid omtrent taal dat bedrijven als Apple en Microsoft hanteren.

We hebben het over een paar verschillende woordenboeken. Om het te verduidelijken, laten we het volgende onderscheiden:

1. De taal die in de JMRI-interface wordt gebruikt (menu's, dialoogtekst, enz.).
2. De plek die wordt getoond: termen als Wisselposities Afbuigend-Recht, Signaalaspecten, enzovoort.
3. De taal die wordt gebruikt voor JMRI Help-schermen die verschijnen wanneer je het Help-> Venster-Helpmenu kiest, of wanneer je in een webbrowser als de jmri.org helppagina's bekijkt.

Laten we een voorbeeld bestuderen:

Je bent een Franstalige Canadees die een Nederlandse layout modelleert.

Je computer staat ingesteld om menu's in het Frans weer te geven, Imprimer for Afdrukken, enzovoort. Dat geldt ook voor JMRI, de Wissels-tabel heet Aiguillages (in het Tabellen-menu).

Wat betreft het prototype, zou je willen dat het signaal "Stoppen voor het sein" als Aspekt-naam toont, niet "Arrêter" of het Amerikaanse "Stop". Zolang er geen Franse vertaling aan de JMRI Prorail-signaaldefinities wordt toegevoegd, werkt dat prima, maar zodra er een wordt toegevoegd, zal het verschijnen en de enige manier om dat te voorkomen is om heel JMRI naar Nederlands te schakelen. Niet erg praktisch, want het modelleren van een paar felgele treinen vereist dat je een volledige taal leert om het Print-menu te vinden.

Toch heb je als Frans spreker het geluk dat er JMRI Help-schermen in het Frans beschikbaar zijn. Maar ze noemen het land dat je modelleert niet, alleen de Franse namen voor de menu-opties.

**Noten**

1: Voor mij lijkt het het meest elegant om dat identiek te stellen aan de rest van de computer waarop het draait. Dus print... wordt Print genoemd... (of 'Druk af...' in het Nederlands). Als iemand (jij?) de tijd heeft genomen om vertalingen te geven, kan elke gebruiker dit activeren zoals beschreven. Probeer Japans (maar wees voorzichtig en gebruik een nieuw profiel, want zelfs de taalkeuzes worden in het Japans weergegeven!) Advertentie
2: Je zou kunnen stellen dat iets als de Entry-Exit (NX) Warrant deel uitmaakt van een Brits-Engelse locatie, net zoals een Dispatcher typerend is voor Amerikaanse spoorwegen en mogelijk wel of niet vertaald wordt naar bijv. een Britse of Europese syniniem.
3: Alles wordt opgeslagen in ongeveer 2.800 bestanden (80 MB per taal). Het zou fantastisch lijken om deze hulp in je gekozen taal te zien, maar dat is veel werk en werd alleen gedaan voor Engels (de standaard) en Frans. Deze twee synchroon houden is behoorlijk lastig!

- Er is slechts één instelling om uit te kiezen binnen JMRI in JMRI Voorkeuren > Weergave. In Java wordt hiervoor een van de ISO-gestandaardiseerde - 2-letter taalafkortingen toegepast, bijvoorbeeld: \_en./\_fr. om alle Swing (interface) strings die zijn geschreven om internationalisering (kortweg I18N) te ondersteunen, het \_mylanguage.properties-bestand te laten gebruiken - als het bestaat.
- Als er een properties-bestand met jouw afkorting niet wordt gevonden, gebruikt Java/JMRI de standaardset, waarmee we hebben afgesproken om Amerikaanse Engelse tekst weer te geven.
- Momenteel werkt dezelfde truc niet voor de JMRI Helppagina's. De hele set moet gekopieerd worden, inclusief alle afbeeldingen, want die bevatten ook menu's enzovoort in een bepaalde taal.
- Je kunt veel van je eigen Operations-dingen zoals plaatsen en treinnamen "lokaliseren", maar woorden zoals Conductor en Return-When-Empty volgen je Locale-instelling (indien beschikbaar).

Het enige wat ik hoop te hebben aangetoond is dat er geen simpele truc is om iedereen tevreden te stellen, en dat er vaak een onverwachte consequentie aan kan zitten.
