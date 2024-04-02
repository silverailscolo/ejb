---
layout: post
lang: en-us
page-id: hypersite
title: "Hypersite stack"
date: "2024-03-22"
tags:
  - macintosh
  - hypercard
categories:
  - "software"
---

To archive an application that I created and ported over the years, here is the final readme of Hypersite.

<h1>Wat is HyperSite en hoe werkt het?</h1>

<p>HyperSite is een stack die helpt om je eigen website te onderhouden. Want een provider vinden en een paar html-pagina's samenstellen kan iedereen, maar het kost veel meer moeite om elke week "even" de nieuws-pagina plus de datum bij te werken enz.</p>

<p>Maar toch, als je je site niet bijhoudt, vinden je bezoekers er al snel niets meer aan en laten ze je site links liggen. Dat is zonde van de moeite, want met deze HyperCard stack is het eenvoudig om een redelijk complete site bij te houden.<br>
In 5 minuten even wat info aanvullen, een nieuwe achtergrond-afbeelding aan een pagina toevoegen en de zaak bekijken in je browser; het is zo gepiept.<br>
(Zie <a href="#beperkingen">Beperkingen</a> voor wat *niet* kan).</p>

<div class="normal-nc">
<a href="#principe">Principe</a> | <a href="#instructies">Instructies</a> | <a href="#historie">Ontstaansgeschiedenis</a> | <a href="#credits">Credits</a>
</div>

<h2 id="principe">Het principe</h2>
<p>Wat is HyperSite? Met deze stack kun je - binnen een vaste layout bestaande uit een 2-koloms tabel en een menu met links naar de andere pagina's - de inhoud van elke pagina bewerken, opmaken en als html-bestand opslaan. Bekijk een klein voorbeeld.</p>

<p>Voor elke pagina van je web-site is een aparte kaart, waarop je in 4 tekstvelden je eigen informatie in kunt voeren. Voor zover je de opmaak kunt be&iuml;nvloeden binnen de standaard HTML 3.2 zijn er via een serie buttons links onderaan het scherm een aantal gereedschappen beschikbaar. Ook om 'links' en 'ankers' aan te leggen zijn er knoppen.</p>

<p>Algemene informatie die voor elke pagina hetzelfde is, vul je in op de kaart 'Algemene instellingen'. Als je daarna op de button 'Maak HTML' klikt, wordt uit al die gegevens een compleet HTML-bestand gecre&euml;erd op de harde schijf. Via de button 'Upload..." kun je die bestanden vervolgens naar jouw provider versturen.<br>
Klik op de button 'Start' rechtsboven op dit scherm om verder te gaan...</p>

<p>Deze stack maakt gebruik van andere programma's, die op je computer moeten staan:</p>
<ul>
<li>een webbrowser, bijv. Internet Explorer of Netscape;</li>
<li>een FTP-programma, bijv. Transmit van <a href="https://www.panic.com">Panic</a>;</li>
<li>een grafisch programma om zelf afbeeldingen voor internet te kunnen maken, bijv. Macromedia Xres, Photoshop of Graphic Converter.</li>
</ul>

<h2  id="instructies">Instructies</h2>

<p>1. klik op button "Start" en vul dan minstens de volgende gegevens in:</p>
<ul>
<li>een naam voor elke pagina van je site, die dan als TAB's bovenaan verschijnen (gebruik alleen kleine letters en ook geen spaties);</li>
<li>een "lokaal pad", d.w.z. de plek op je harde schijf waar alle bestanden die bij je site horen (tijdelijk) worden opgeslagen. Vanwege de manier waarop HyperSite werkt, moet er in deze map een tweede map staan met de naam "Images". Daarin sla je alle afbeeldingen op, zodat de hoofdmap goed overzichtelijk blijft (met dank aan Claris HomePage);</li>
<li>je E-mail adres;</li>
<li>je internet-browser (via dialoogscherm aanwijzen waar hij op je computer staat);</li>
<li>een Fetch bookmark, dat de verbinding met jouw plek op de server legt;</li>
<li>een Applescript bestand dat de internetverbinding met je provider start, bijv. het script "PPP start" in de map "AppleScript Extra's".</li>
</ul>

<p>Niet verplicht:</p>
<ul>
<li>de naam van een .GIF afbeelding die op alle pagina's als titel komt, bijv. je logo;</li>
<li>de naam van een .GIF afbeelding die als 'bullet' voor elk van de 4 tekstblokken komt.</li>
</ul>

<p>2. Ga nu verder door links bovenaan op het eerste tabstrookje te klikken. Vul de Naam en de Titel voor deze pagina in, en evt. een achtergrondafbeelding of -kleur. Typ per pagina de informatie die je wilt tonen in de tekstvakken 1 t/m 4. Een veld mag ook leeg blijven.<br>
Minimale HTML-kennis die noodzakelijk is: Na elke regel een regeleinde &lt;BR&gt; of rond de alinea de aanduiding &lt;P&gt;...&lt;/P&gt; invoegen, anders loopt alles straks achter elkaar door. </p>

<p>3. Ken extra opmaak toe door stukjes te selecteren met de muis en dan op 1 van de 'buttons' in de 'toolbox' links onderaan te klikken. Voor verklaring en extra opties zie Toolbox.</p>

<p>4. Als er in je tekst 'speciale' tekens voorkomen, bijvoorbeeld "&uuml;" en "&eacute;", selecteer die dan en klik op de knop "ASCI to ISO" om er voor te zorgen dat deze tekens straks voor iedereen goed in beeld verschijnen. Als je zonder een selectie te maken op deze knop klikt, wordt alle tekst gecontroleerd, maar dat kost wel wat tijd.</p>

<p>5. Als je klaar bent met een pagina, klik je op de button "Maak HTML". Uit alle informatie in de stack wordt dan een HTML-bestand aangemaakt, de standaard-taal van het world wide web. Een tekstje verschijnt met de naam van het bestand, die hetzelfde is als de naam van je pagina + de extensie ".html".
Om alle pagina's in 1 keer als HTML-bestanden te exporteren, houd je de Option- toets ingedrukt, terwijl je op de button "Maak HTML" klikt.</p>

<p>6. Nadat de betreffende pagina(s) bewaard is, kun je op het scherm kiezen om de pagina al dan niet lokaaal te bekijken in je - eerder op de kaart Algemeen ingevulde - web-browser. Er dient wel genoeg geheugen vrij te zijn om de browser te openen.</p>

<p>7. Als alles OK is, is de laatste stap om je pagina + bijbehorende afbeeldingen naar je provider te "uploaden", d.w.z. van je harde schijf te kopi&euml;ren naar jouw stukje van de internet-server van je provider. Hiervoor gebruik je meestal een apart FTP- programma, bijvoorbeeld Transmit of Fetch. Transmit v 1.6 - een heel prettig programma - vind je op <a href="https://www.panic.com">https://www.panic.com</a>.</p>

<h4>De Toolbox</h4>

<p>De toolbox (gereedschapskist) van HyperSite bestaat uit een aantal buttons en pop-up menu's die in de rechthoek links onderaan elke kaart staan.
Aan de linkerkant staan alle opmaak-functies, bijv. om tekst vet te maken of cursief. Ook kun je de grootte van tekst aangeven en de kleur. Hiervoor moet je altijd eerst een tekstgedeelte selecteren, anders hoor je alleen een waarchuwingsgeluid.</p>

<p>Rechts staan buttons om hyperlinks aan te brengen. Een hyperlink is tekst waar je op kunt klikken om ergens ander heen te springen, bijv. een plek elders op jouw site ("anker", zie verderop) of een heel ander web-site (URL).
Een link  bestaat uit 2 delen, nl. het onderstreepte woord, dat in beeld komt, en het echte doel, veelal in de vorm van een URL-adres, bijv. "https://www.apple.com" (= Apple). Als je een stukje tekst selecteert voordat je op de button klikt, wordt dat stuk gebruikt als ondertreepte tekst, en hoef je alleen nog het doel aan te geven in het dialoogscherm.</p>

<p>Om op &eacute;&eacute;n van je eigen pagina's een plek te markeren als doel voeg je een anchor in, dat bestaat uit een speciale "tag" met een korte naam, die men overigens niet te zien krijgt in een browser. Alle ankers die je tot dan in je stack hebt aangebracht, verschijnen in een menu als je op de button met het ankertje klikt. Je kunt ze zo ergens anders als hyperlink invoegen.</p>

<p>Zet het invoegpunt op de juiste plek en klik op de button met het gezichtje om een bepaald soort afbeelding op je pagina in te voegen. Je kunt kiezen uit 3 soorten:</p>

<OL>
<li>GIF en JPEG-files kunnen direct in elke grafische browser getoond worden;</li>
<li>QuickTime zijn filmpjes, die iemand alleen kan bekijken als hij/zij  de QuickTime-plugin van Apple heeft geladen;</li>
<li>Shockwave zijn animaties (o.a. Macromedia Flash en  Director), waarvoor in Netscape ook een plug-in nodig is en in Internet Explorer zgn. ActiveX en JAVA technologie.</li></OL>

<h4><a id="beperkingen">Wat kan niet</a></h4>

<p>De volgende zaken zitten niet in HyperSite:</p>
<ul>
<li>afbeeldingen bewerken en omzetten naar .GIF formaat (gebruik Xres o.i.d.);</li>
<li>WYSIWYG opmaak zonder alle tags  te zien (wel preview  via browser);</li>
<li>externe links via pop-up menu aanbrengen (gebruik knip & plak);</li>
<li>een grafisch overzicht van alle pagina's en links (is wel mooi);</li></ul>

<p>Wat ooit wel komt:</p>
<ul>
<li>alignment opties (het menu werkt nog niet)</li>
<li>(gedeeltelijke) controle of alle links en afbeeldingen kloppen (ga voorlopig naar <a href="http://validator.w3.org/checklink">W3C Checklink</a> [getest 2/2/2010].</li>
</ul>

<h2 id="historie">Ontstaansgeschiedenis</h2>

<h4>Aanleiding</h4>
<p>Terwijl ik diverse HTML-editors probeerde, kreeg ik het idee dat ik voor mijn specifieke wensen beter een simpel en beperkt programma kon maken met HyperCard. Binnen 1 consistente opmaak kan ik me dan richten op de inhoud, terwijl deze stack alle bijzaken voor mij afhandelt: hyperlinks naar alle andere pagina's van mijn site, de datum van laatste wijziging aanpassen, in 1 keer alle pagina's een andere kleur of bullet geven etc. Tegelijk zou ik wat meer van HTML 3.2 leren...</p>

<p>Dit is het geworden, i.p.v. zo'n  4 pagina's voor mezelf dus al meer dan 6, en heel wat meer mogelijkheden dan ik in 1<SUp>e</SUp> instantie had gedacht.</p>

<h4>Versies</h4>

<p>0.6 Maart 1998 langzaam opgebouwd aan de hand van voorbeeld-code uit een commerci&euml;le HTML-editor.</p>
<p>Versie 0.7 deed eind mei '98 eindelijk wat ik ongeveer wilde, maar was nog niet zonder bugs. </p>
<p>Versie 0.8 van juli 1998 kende enkele verbeteringen (fout in &lt;TR&gt; tag opgelost, snelheid ASCII-conversie, correct werkened tabstrookjes bovenaan het scherm) en wat bijkomende wensen n.a.v. mijn eigen ervaring met het programma (alle pagina's in 1 x omzetten met optie-toets, tabellen aanmaken binnen een veld).</p>
<p>Versie 1.0 van oktober 1998 bevat extra opties, o.a. om wel of niet linksboven het menu te tonen (t.b.v. afwijkende opzet 1e pagina van een Site), om wel of niet rechtsboven een de vaste afbeelding + koptekst te tonen (idem). Voorts wat extra tools, o.a. HTML-commentaar. Verder nog wat kleine fouten en strikte HTML-regels opgelost.</p>
<p>Versie 1.1 en 1.2 (mei-juni '99) waren geleidelijke verbeteringen, o.a. om delen van de site in submappen op te slaan - bijv. "docs:" - en toch alle 'links' correct aan te maken.</p>
<p>Versie 1.3 (aug. '99) voegt de mogelijkheid toe om met JavaScript 'roll over' effecten onder je muis een navigatie-menu op te laten lichten ("hilite"). Dat is inmiddels standaard op het web, vandaar. Voor snelle sites kun je het op de pagina 'Algemeen' ook altijd uit zetten. <br>
Ook nieuw is de mogelijkheid om een deel van de site m.b.v. mappen op te splitsen, waarbij de verwijzingen naar algemene opmak en menu-koppelingen via het veld "base URL" worden aangevuld. Verder ondersteuning voor de "Language" Meta-Tag via een pop-up menu op de kaart "Algemeen" en een centrale Style Sheet (genaamd "hyperstyle.css") op dezelfde kaart om m.b.v. "Cascading Style Sheets" uit HTML 4.0 alle opmaak op 1 plek te regelen. Zie voor meer info een goed boek over dit onderwerp. <br>
Ook is de Tag voor het opnemen van Macromedia Flash afbeeldingen aaangepast conform de laatste informatie. DTD-versie in header: 'HTML 4.0 Transitional'.</p>
<p>Versie 1.5 van augustus 2000 voegt de mogelijkheid toe om in 1 keer alle achtergronden aan te passen. Ook enkele extra <em>tag's</em> aan de toolbox toegevoegd: DIV en JS = JavaScript.</p>
<p>Versie 1.6 van april 2001 lost enkele fouten op in het gebruik van grafische (.GIF) buttons, zodat onnodige foutmelingen niet optreden. Tevens onderkast HTML-tags invoegen conform XHTML 1.0 specificatie, bijv. &lt;br /&gt;. Ook is de afscherming van de eerste 2 schermen verbeterd; je kom er alleen als je expliciet op de knop <strong>?</strong> c.q. <strong>Algemeen</strong> klikt.</p>
<p>Versie 1.8 is geport naar LiveCode.</p>
<p>Versie 1.9 van 2018-2023 is HTML5 correct, en bevat een responsive layout.</p>

<h2 id="credits">Credits</h2>
<p>This stack is shareware.  Support the development of these helpful programs by paying your shareware fee.  Please pay Euro 25,- next time you see me. </p>

<p>You can register by sending an E-mail with your name, address and "hypersite" in the header to: info@ebroerse.nl. If you supply your E-mail address, I will send you any new upgrade of HyperSite when it is released.</p>

<p>All programming &copy; E.J. Broerse 04/1998 - 07/1998 - 09/1999 - 03/2000 - 04/2001 - 11/2002 - 02-2023 except
<i>PopUpMenu XCMD</i> &copy; Individual Software, Inc. 1988.</p>
