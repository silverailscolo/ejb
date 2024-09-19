---
layout: post
lang: en-us
page_id: locobooster
title: "HDL LocoBooster installation issue fixed"
date: "2018-05-23"
categories:
  - "trains"
  - "how-to"
---

# Experience and Solution

I built the [HDL LocoBooster](https://locohdl.synology.me) 3.8 and conected it to a section op rail and the existing LocoNet.

## Issue

My DCC Command Station is a classic Digitrax Zephyr DCS50. One LocoNet socket on the Zephyr is only connected to the LocoBooster (the LocoBooster outputs are conneted to the rails). The second LocoNet socket on the Zephyr is daisy-chained to my decoders. Four Digitrax DS54/64 stationary decoders are connected to Zephyr Rail A/B connections with their own power supply.

(I had double checked there was no connection between the rails and the Zephyr Rail A/B sockets. I converted an existing layout, after all. And indeed there was 1 place where Rail A was connected to the wrong bus.)

- Whenever I connect both LocoNet and the rails to the LocoBuffer, and turn on track power on the Zephyr, alle LEDs on the LocoBuffer dim and the board produces a humming sound.
- When I cut the Ground-wires in the LocoNet cable between the LocoBooster and the Zephyr, the effect goes away but the power relay on the LocoBooster does not turn off when I push the Power-button on the Zephyr. Have to cycle on/off at least once.
- A different power pack for the LocoBooster makes no difference.

There is no heavy wire connecting the Zephyr Ground (Common) and the LocoBooster Ground.

<figure><img src='{{ "/assets/img/blog/Zephyr-Rear-Panel.png" | relative_url }}' alt="Zephyr connection panel" class='img-fluid'><figcaption class="kleiner">Zephyr connection panel</figcaption></figure>

Did read about ("same reference level”) as a suggestion to fix this type of issues, but Hans Deloof - the designer of the LocoBooster - doesn't mention this in the docs. And it turned out it wasn't needed.

When I disconnect the rails-connectors on the LocoBuffer and - only - touch the ground terminal shortly, there's a spark (and the LEDs dim, as well as the 1 Hz hum somewhere on the board).

Between the LocoBoster rail outputs and the Zephyr Rail A I measured a high resistance of about 15kOhm, so definitely not 0. Conclusion: This is the internal resistance of the Digitrax Zephyr CS.

## Double-check your wiring!

Fresh the next day I discovered: somewhere under the layout the Zephyr Rail A bus wire was directly wired to the same rail th aBooster/Track A wire was feeding. So in this spot the same rail got power from 2 boosters = issues!

After I fixed this, the LocoBooster worked fine using a normal LocoNet cable. Until I follewed the instructions and used one of the free outputs as input (and closed the contact)... Address wiped, etc.

Internally the LocoBooster has a connection between LocoNet (ground) and the ground wire of the booster external power pack. So forget the extra inputs and be aware of this.

I bought a different booster with a so called H-bridge. The H-bridge separates power from LocoNet, so finally it was time to run trains.

One year on, while moving a [Digitrax BD1 occupancy sensor](https://www.digitrax.com/media/apps/products/detection-signaling/bd1/documents/BD1%20Inst.pdf), I discovered that the BD1 on purpose connects one of the rails to LocoNet (through the black/red sensor wires you connect to the decoder). From the start I wondered how on earth the BD1 could signal a train arriving and pull up an input to +5V when it is only connected to SE8c Ground. The BD1 (and presumably the BD4 too) can only be used in a 100% Digitrax system, with a "Ground"-wire between all items.

So I got rid of my only BD1 and this opens a new opportunity for the LocoBooster that started this post...
