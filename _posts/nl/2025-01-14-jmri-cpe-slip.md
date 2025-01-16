---
layout: post
lang: nl
page-id: jmri-cpe-slip
title: Engelse wissel op een JMRI Control Panel
date: 2025-01-14
tags:
  - jmri
categories:
  - treinen
  - how-to
---

## Zo plaats je een engelse wissel op een JMRI-bedieningspaneel

Op mijn modelbaan verbindt een op afstand bediende engelse wissel de Ouray-keerlus met Silverton. Het weergeven van dit element op een Layout Editor-paneel of een klassiek JMRI Paneel is eenvoudig met een speciaal menu. Maar in de Control Panel Editor (CPE) kan zogenaamde Turnout Indicator-element dat de bezetting en routetoewijzing kan weergeven geen 3-weg wissels en engelse wissels plaatsen (zie [docs](www.jmri.org/help/en/package/jmri/jmrit/display/ControlPanelEditor.shtml)).

<figure><img src='{{ "/assets/img/trains2/jmri/jmri-le-slipedit-nl.png" | relative_url }}' alt="LE slip edit scherm" class='img-fluid'><figcaption class="kleiner">LE slip edit scherm</figcaption></figure>

Mijn engelse wissel LT2 werkt met maar twee standen, terwijl het LE-slip/3-weg gereedschap twee wisseladressen verwacht voor ten minste 3 standen. Op mijn baan poolt relais LT1 de DCC-railvoeding van de keerlus om zodat het DCC-signaal matcht op de blokgrens en kortsluiting wordt voorkomen. Aan de hand van deze 2 wisseladressen kunnen we een representatie maken op het CPE-paneel:

| LT1 (ompoolrelais, linker helft)	 | IT2 (rechter helft)	 | LT2 (2-stands engelse wissel) |
|-----------------------------------|----------------------|-------------------------------| 
| recht	                            | afbuigend	           | afbuigend                     |
| recht	                            | recht	               | recht                         |
| afbuigend	                        | afbuigend	           | recht                         |
| afbuigend	                        | recht	               | afbuigend                     |

<figure><img src='{{ "/assets/img/trains2/jmri/slip-logic-table.png" | relative_url }}' alt="Logische tabel LT1 + IT2 > LT2" class='img-fluid'><figcaption class="kleiner">Logische tabel LT1 + IT2 > LT2</figcaption></figure>

De engelse wissel wordt bediend via twee indicatie-wisselpictogrammen op het paneel. Een JMRI Logix controleert de status van beide en stelt LT2 in om overeen te komen met de logische tabel (Routes kunnen slechts één stuurwissel gebruiken, dus dan heb je een extra (stuur)sensor nodig om de tweede wissel te volgen). Zo ziet het bewerk-scherm van de Logix er uit, met 4 Voorwaarden:

<figure><img src='{{ "/assets/img/trains2/jmri/jmri-logix-edit.png" | relative_url }}' alt="Logix bewerkscherm" class='img-fluid'><figcaption class="kleiner">Logix bewerkscherm</figcaption></figure>

Het symbool voor de engelse wissel op het Control Panel bestaat uit 2 halve plaatjes, die elk zijn opgebouwd uit 4 x 4 .png afbeeldingen:
<figure><img src='{{ "/assets/img/trains2/jmri/slip-icon-set-nl.png" | relative_url }}' alt="Symbool plaatjesset" class='img-fluid'><figcaption class="kleiner">Symbool bewerkscherm met plaatjesset</figcaption></figure>

De afbeelding die we voor elke helft van het pictogram gebruiken, is gesneden uit een set normale indicator-wisselpictogrammen, waarbij de linkerkant 180 graden is gedraaid.<br>
Download een zip-bestand met de speciale pictogrammen die ik heb gemaakt [hier](/assets/downloads/jmriprefs-resources-slip.zip) en kopieer de inhoud ervan naar de map JMRI-preferences/resources/.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/jmri/cpe-slip-c.png" | relative_url }}' alt="Wisselsymbool toont de stand rechtdoor" class='img-fluid'><figcaption class="kleiner">Wisselsymbool stand rechtdoor</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/jmri/cpe-slip-t.png" | relative_url }}' alt="Wisselsymbool toont de stand afbuigend" class='img-fluid'><figcaption class="kleiner">Wisselsymbool stand afbuigend</figcaption></figure>
</div>
</div>

Het paneelbestand heb ik aangepast in een teksteditor, maar je kunt dit ook doen in de UI. Werk in een kopie van het paneel xml-bestand om fouten in JMRI te vermijden. Het goede nieuws was dat ik niet diep in de CPE Java-code hoefde te duiken en een klasse plus een tool moest programmeren. Veel plezier met vrachtbrieven rijden!

### Paneel xml fragment

```
<indicatorturnouticon x="352" y="93" level="7" forcecontroloff="false" hidden="no" positionable="true" showtooltip="true" editable="true" degrees="180" class="jmri.jmrit.display.configurexml.IndicatorTurnoutIconXml">
  <tooltip>OBlock "Sv Crossing"</tooltip>
  <turnout>IT2</turnout>
  <occupancyblock>OB:AUTO:0003</occupancyblock>
  <showTrainName>no</showTrainName>
  <iconmaps family="sliphalf-right">
    <OccupiedTrack>
      <BeanStateUnknown url="preference:resources/slip/unknown-sliphalf-yellow.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateUnknown>
      <TurnoutStateClosed url="preference:resources/slip/closed-sliphalf-yellow.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateClosed>
      <TurnoutStateThrown url="preference:resources/slip/thrown-sliphalf-yellow.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateThrown>
      <BeanStateInconsistent url="preference:resources/slip/error-sliphalf-yellow.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateInconsistent>
    </OccupiedTrack>
    <ClearTrack>
      <BeanStateUnknown url="preference:resources/slip/unknown-sliphalf-white.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateUnknown>
      <TurnoutStateClosed url="preference:resources/slip/closed-sliphalf-white.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateClosed>
      <TurnoutStateThrown url="preference:resources/slip/thrown-sliphalf-white.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateThrown>
      <BeanStateInconsistent url="preference:resources/slip/error-sliphalf-white.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateInconsistent>
    </ClearTrack>
    <AllocatedTrack>
      <BeanStateUnknown url="preference:resources/slip/unknown-sliphalf-green.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateUnknown>
      <TurnoutStateClosed url="preference:resources/slip/closed-sliphalf-green.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateClosed>
      <TurnoutStateThrown url="preference:resources/slip/thrown-sliphalf-green.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateThrown>
      <BeanStateInconsistent url="preference:resources/slip/error-sliphalf-green.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateInconsistent>
    </AllocatedTrack>
    <DontUseTrack>
      <BeanStateUnknown url="preference:resources/slip/unknown-sliphalf-gray.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateUnknown>
      <TurnoutStateClosed url="preference:resources/slip/closed-sliphalf-gray.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateClosed>
      <TurnoutStateThrown url="preference:resources/slip/thrown-sliphalf-gray.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateThrown>
      <BeanStateInconsistent url="preference:resources/slip/error-sliphalf-gray.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateInconsistent>
    </DontUseTrack>
    <PositionTrack>
      <BeanStateUnknown url="preference:resources/slip/unknown-sliphalf-blue.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateUnknown>
      <TurnoutStateClosed url="preference:resources/slip/closed-sliphalf-blue.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateClosed>
      <TurnoutStateThrown url="preference:resources/slip/thrown-sliphalf-blue.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateThrown>
      <BeanStateInconsistent url="preference:resources/slip/error-sliphalf-blue.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateInconsistent>
    </PositionTrack>
    <ErrorTrack>
      <BeanStateUnknown url="preference:resources/slip/unknown-sliphalf-red.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateUnknown>
      <TurnoutStateClosed url="preference:resources/slip/closed-sliphalf-red.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateClosed>
      <TurnoutStateThrown url="preference:resources/slip/thrown-sliphalf-red.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </TurnoutStateThrown>
      <BeanStateInconsistent url="preference:resources/slip/error-sliphalf-red.png" degrees="180" scale="1.0">
        <rotation>0</rotation>
      </BeanStateInconsistent>
    </ErrorTrack>
  </iconmaps>
</indicatorturnouticon>
```

Maak een kopie voor de linker helft van de engelse wissel (LT1, 180˚ geroteerd).

### Logix xml

```
<logixs class="jmri.managers.configurexml.DefaultLogixManagerXml">
  <logix userName="Sv slip LT2" enabled="yes">
    <systemName>IX:RTX:IO:AUTO:0008</systemName>
    <userName>Sv slip LT2</userName>
    <comment>Silverton crossing</comment>
    <logixConditional systemName="IX:RTX:IO:AUTO:00081T" order="0" />
    <logixConditional systemName="IX:RTX:IO:AUTO:0008C2" order="1" />
    <logixConditional systemName="IX:RTX:IO:AUTO:0008C3" order="2" />
    <logixConditional systemName="IX:RTX:IO:AUTO:0008C4" order="3" />
  </logix>
</logixs>
<conditionals class="jmri.managers.configurexml.DefaultConditionalManagerXml">
  <conditional systemName="IX:RTX:IO:AUTO:0008C2" userName="slip NW-SE" antecedent="R1 and R2" logicType="1" triggerOnChange="yes">
    <systemName>IX:RTX:IO:AUTO:0008C2</systemName>
    <userName>slip NW-SE</userName>
    <conditionalStateVariable operator="4" negated="no" type="3" systemName="Loop reverse relay" dataString="" num1="0" num2="0" triggersCalc="yes" />
    <conditionalStateVariable operator="1" negated="no" type="3" systemName="slip-east" dataString="" num1="0" num2="0" triggersCalc="yes" />
    <conditionalAction option="1" type="17" systemName="LT2" data="2" delay="1" string="1" />
  </conditional>
  <conditional systemName="IX:RTX:IO:AUTO:0008C3" userName="slip W-E" antecedent="R1 and R2" logicType="1" triggerOnChange="yes">
    <systemName>IX:RTX:IO:AUTO:0008C3</systemName>
    <userName>slip W-E</userName>
    <conditionalStateVariable operator="4" negated="no" type="4" systemName="Loop reverse relay" dataString="" num1="0" num2="0" triggersCalc="yes" />
    <conditionalStateVariable operator="1" negated="no" type="4" systemName="slip-east" dataString="" num1="0" num2="0" triggersCalc="yes" />
    <conditionalAction option="1" type="17" systemName="Sv Slip" data="2" delay="1" string="1" />
  </conditional>
  <conditional systemName="IX:RTX:IO:AUTO:0008C4" userName="slip W-SE" antecedent="R1 and R2" logicType="1" triggerOnChange="yes">
    <systemName>IX:RTX:IO:AUTO:0008C4</systemName>
    <userName>slip W-SE</userName>
    <conditionalStateVariable operator="4" negated="no" type="4" systemName="Loop reverse relay" dataString="" num1="0" num2="0" triggersCalc="yes" />
    <conditionalStateVariable operator="1" negated="no" type="3" systemName="slip-east" dataString="" num1="0" num2="0" triggersCalc="yes" />
    <conditionalAction option="1" type="17" systemName="Sv Slip" data="4" delay="1" string="1" />
  </conditional>
  <conditional systemName="IX:RTX:IO:AUTO:00081T" userName="slip NW-E" antecedent="R1 and R2" logicType="1" triggerOnChange="yes">
    <systemName>IX:RTX:IO:AUTO:00081T</systemName>
    <userName>slip NW-E</userName>
    <conditionalStateVariable operator="4" negated="no" type="4" systemName="slip-east" dataString="" num1="0" num2="0" triggersCalc="yes" />
    <conditionalStateVariable operator="1" negated="no" type="3" systemName="Loop reverse relay" dataString="" num1="0" num2="0" triggersCalc="yes" />
    <conditionalAction option="1" type="17" systemName="Sv Slip" data="4" delay="1" string="1" />
  </conditional>
</conditionals>
```
