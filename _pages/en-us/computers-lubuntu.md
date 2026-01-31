---
page-id: lubuntu
layout: page
permalink: /computers/lubuntu/
title: Lubuntu Tips
description: Lubuntu (Linux) tips
lang: en-us
nav: false
---

<div class="card mx-auto mb-3 p-3" style="max-width: 90%;">

<h2>Installing a Belkin WiFi PCMCIA card on Lubuntu 14.04</h2>

Check the properties of your Wi-Fi card by opening Utilities > Xterminal and typing:

<pre>sudo lspci</pre>

The Belkin FSD7010 rev 03 card uses the Broadcom BCM 4306 rev 03 hardware, PCI-ID: [14e4:4320]: use open source B43 driver
Look up the Ubuntu driver for the chipset in your card, using this <a href="https://help.ubuntu.com/community/HardwareSupportComponentsWirelessNetworkCardsBelkin#PCMCIA">table</a>.

To use a Broadcom (Belkin) Wi-Fi card (and enable shut down of your laptop, which the automatically loaded wl driver blocks):

The (L)Ubuntu kernel in versions 8.04.x (Hardy Heron) and higher do provide the b43 drivers, however due to copyright restrictions not the proprietary firmware which is required to run the card. To extract the required firmware and install b43-fwcutter, issue the following commands in a terminal (under the desktop menu System Tools > LXTerminal) and follow the prompts:

<pre>sudo apt-get update</pre>
<pre>sudo apt-get install b43-fwcutter</pre>

Remove your Wi-Fi card from its slot and restart the computer.

#### Uninstall the default _wl_ wireless driver

[apt-get](https://help.ubuntu.com/community/AptGet/Howto) installs a package, apt-get remove deletes a package (with --purge it deletes the configurations as well).
Go to Utilities > Xterminal and type:

<pre>sudo apt-get remove --purge bcmwl-kernel-source</pre>

You might have to repeat this step after a system update, as the default bcmwl-kernel module gets installed again. Took me months to sort that one out.
Continue with the following command:

<pre>sudo apt-get install linux-firmware-nonfree</pre>

followed by

<pre>sudo -i nano /etc/modprobe.d/blacklist.conf</pre>

If present, remove or #-comment out the following line in the /etc/modprobe.d/blacklist.conf file:

<pre># blacklist b43</pre>

We prevented wl from loading before b43 by deleting the bcmwl kernel module. If it keeps getting in your way, add the line

<pre>blacklist wl</pre>

Save your edits by pressing Ctrl-O. Insert your wifi card in the slot.

#### Install the wifi icon

Go to desktop menu->Preferences->Default applications for LXSessions. Navigate to Core Applications and then to Network GUI. Type in <pre>nm-applet</pre>
and hit reload.<br>
There is a known bug that displays 2 Network Manager icons in the tray. Don't worry, is my easiest fix.

#### Activate B43 driver

Depending on the release, the B43 (and other) packages can often be simply activated under the desktop menu > Preferences > Additional Drivers (the rightmost tab, in Dutch: Extra stuurprogramma's).<br>
Click B43, enter password.<br>
on our Acer laptop, no special action was necesary to activate the driver, but you should enable the Wifi hardware switch or both the internal and the PCMCIA card will be disabled.

### Switching between drivers

If your card is supported by more than one driver then use the <a href="https://en.wikipedia.org/wiki/Modprobe">modprobe command</a> to select the appropriate driver. First unload all conflicting drivers (this includes removing the driver you're trying to install). Go to Utilities > Xterminal and type:

<pre>sudo modprobe -r b43 bcma</pre>
<pre>sudo modprobe -r brcmsmac bcma</pre>
<pre>sudo modprobe -r wl</pre>

You might have to restart your computer (with Wireless disabled and the Wi-Fi card ejected from its slot) to be able to unload the WL module using the last line; in that case, the system will tell you &quot;Cannot unload, wl is in use&quot;.

Then load the B43 driver by entering the command:

<pre>sudo modprobe b43</pre>

Go to <em>Update drivers</em> > <em>Extra Drivers</em> and select &quot;Do not use device&quot; (Gebruik het apparaat niet)
instead of "Use Broadcom 802.11 Linux STA driver in bcmwl-kernel-source (non-free)".

Go to <em>Network connections</em> and delete any old Wifi connection.<br>
Create a new connection, fill in your credentials, MAC of the network card (= eth1).<br>
If your laptop also has an internal, built-in wireless card, be sure to pick the right adapter and ignore the other one.

Hope this has been of help to you.
Source of these instructions: [help.ubuntu.com](https://help.ubuntu.com/community/WifiDocs/Driver/bcm43xx) and [launchpad.net](https://launchpad.net/ubuntu/+source/b43-fwcutter).

</div>
