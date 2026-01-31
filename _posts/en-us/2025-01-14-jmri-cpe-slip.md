---
layout: post
lang: en-us
page-id: jmri-cpe-slip
title: Display a slip on a CPE panel
date: 2025-01-14
tags:
  - jmri
categories:
  - trains
  - how-to
---

## How to put a double slip on a JMRI Control Panel

On my layout a remote double slip connects the Ouray loop in Silverton. To display this turnout on a Layout Editor panel or a classic Panel is straight forward using a dedicated tool. But in Control Panel Editor (CPE) the so-called Turnout Indicator element that can show occupancy and route assignment is not available for 3-way turnouts and slips (see [docs](https://www.jmri.org/help/en/package/jmri/jmrit/display/ControlPanelEditor.shtml)).

<figure><img src='{{ "/assets/img/trains2/jmri/jmri-le-slipedit-en.png" | relative_url }}' alt="LE slip edit pane" class='img-fluid'><figcaption class="kleiner">LE slip edit pane</figcaption></figure>

My slip turnout LT2 has only two states to operate, whilst the LE slip/3-way tool expects two turnout addresses for at least 3 states.
Relay LT1 flips the return loop DCC track power to match the feeders to the slip and beyond to prevent a short.
Using these 2 turnout addresses we can create a representation on the CPE panel:

| LT1 (loop relay, left half) | IT2 (right half of icon) | LT2 (2-state remote slip) |
| --------------------------- | ------------------------ | ------------------------- |
| closed                      | thrown                   | thrown                    |
| closed                      | closed                   | closed                    |
| thrown                      | thrown                   | closed                    |
| thrown                      | closed                   | thrown                    |

<figure><img src='{{ "/assets/img/trains2/jmri/slip-logic-table.png" | relative_url }}' alt="Logic table LT1 + IT2 > LT2" class='img-fluid'><figcaption class="kleiner">Logic table LT1 + IT2 > LT2</figcaption></figure>

The slip is operated via two indicator turnout icons displayed on the panel.
A JMRI Logix checks the State of both and sets LT2 to match the logic table. (Routes can use only one commanding turnout, so they would require a sensor to track the second turnout).

<figure><img src='{{ "/assets/img/trains2/jmri/jmri-logix-edit.png" | relative_url }}' alt="Screen shot of Logix config pane" class='img-fluid'><figcaption class="kleiner">Screen shot of Logix config pane</figcaption></figure>

The slip turnout icon on the Control Panel is actually made from two halfs placed back-to-back. Each indicator part uses an icon map of 4 x 4 .png afbeeldingen:

<figure><img src='{{ "/assets/img/trains2/jmri/slip-icon-set-en.png" | relative_url }}' alt="Edit screen for icon map" class='img-fluid'><figcaption class="kleiner">Edit screen for icon map</figcaption></figure>

The image map for both halves of the slip icon was trimmed from a normal indicator turnout icon set, with the left side rotated 180 degrees.
Download a zip containing the special icons I created [here](/assets/downloads/jmriprefs-resources-slip.zip) and copy its contents to the JMRI preferences/resources folder.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/jmri/cpe-slip-c.png" | relative_url }}' alt="Slip icon in operation showing closed" class='img-fluid'><figcaption class="kleiner">Slip icon closed</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/trains2/jmri/cpe-slip-t.png" | relative_url }}' alt="Slip icon in operation showing thrown" class='img-fluid'><figcaption class="kleiner">Slip icon thrown</figcaption></figure>
</div>
</div>

The panel file was tweaked in a text editor, but you could do this using the UI tool too. Work on a copy of the panel file to prevent errors in JMRI.
The good thing was that there was no need to dive deep into the CPE Java code and extend a class plus a tool. Enjoy warrant operations!

### Panel xml snippet

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

Add a copy for the other half of the slip (LT1).

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
