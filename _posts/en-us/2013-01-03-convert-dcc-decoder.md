---
layout: post
lang: en-us
page-id: dcc-decoder
title: Add a DCC decoder to an Arnold Calf
date: 2013-01-03
categories:
  - trains
  - how-to
tags:
  - dcc
---

Converting N-scale DC engines to DCC allows you to run them on your DCC layout.
In this post, I'll show how I added a TCS Z2 DCC decoder to my [N-scale Arnold SW-1500 Calf](/rollingstock/UP_SW1500_1870/).
Similar methods can be applied to all sorts of model engines.

<div class="col-sm">
<figure><img src='{{ "/assets/img/rostercovers/UP_SW1500_1870.jpg" | relative_url }}' alt="SW1500 ready for DCC" class='img-fluid'><figcaption class="kleiner">SW1500 ready for DCC</figcaption></figure>
</div>

## What we need

- A [TCS Z2 2-function DCC decoder](https://www.tcsdcc.com/product-page/z2) in a small form factor
- Kapton insulating tape
- Multi-strand thin wires, red and black, each 50mm/2" long
- Small 10W soldering iron and flux solder

## Access the interior

- Remove the shell from the frame by pressing the fuel tank together (watch out as tabs break easily)
- Remove the hood from the frame (walkway) by pressing the front end inwards (again, wiggle gently before pulling as the tab might break)
- Drop the trucks, the power pickup PCB and the DC engine with wire worms

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2985.jpg" | relative_url }}' alt="Engine removed" class='img-fluid'><figcaption class="kleiner">Engine removed</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2984.jpg" | relative_url }}' alt="Wires soldered to electrical pickup PCB" class='img-fluid'><figcaption class="kleiner">Wires soldered to electrical pickup PCB</figcaption></figure>
</div>
</div>

## Make room for the decoder

- Mark the top of the frame towards the high end of the motor, as illustrated.
- After the motor has been removed from the frame, use a saw and file to remove the marked part of the cast metal frame.

## Convert the power pickup

- Isolate the inside of the copper bracket on PCB with a piece of thin Kapton tape.
- Instead of the PCB top directly feeding the DC engine, we solder a 50mm piece of thin red and black wire to the BCB tabs.
- Tape the decoder in its new position on top of the frame.
- Clip, strip and solder the gray and orange wires directly to the engine copper pads.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2981.jpg" | relative_url }}' alt="Hood and trucks removed" class='img-fluid'><figcaption class="kleiner">Hood and trucks removed</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2986.jpg" | relative_url }}' alt="Decoder taped in place, guide wires up through frame" class='img-fluid'><figcaption class="kleiner">Decoder taped in place, guide wires up through frame</figcaption></figure>
</div>
</div>

## Finishing up

- Reassemble the trucks, motor and pickup PCB, while guiding the red and black wires up alongside the motor
- Clip the red and black wires to the decoder's, folding them forward alongside the decoder.
- As front headlight place an LED in series with a 500 Ohm 1/4 W resistor in the recess, and solder to the blue (+) and white (-) decoder wires.
- Check all wiring, looking for shorts and polarity.
- Test drive the loco on a DCC controlled piece of track. Check speed, motor noise, turn on the headlight.

<div class="row">
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2983.jpg" | relative_url }}' alt="Frame marked for piece to remove" class='img-fluid'><figcaption class="kleiner">Frame marked for piece to remove</figcaption></figure>
</div>
<div class="col-sm">
<figure><img src='{{ "/assets/img/blog/installdcc/DSCF2987.jpg" | relative_url }}' alt="Decoder in place, solder headlight and red/black wires" class='img-fluid'><figcaption class="kleiner">Decoder in place, solder headlight and red/black wires</figcaption></figure>
</div>
</div>

## More

- Find the full TCS instructions [here](https://www.tcsdcc.com/product-page/z2)
- TCS provides a “GOOF-PROOF” Warranty, so go ahead and start converting your locos too.
