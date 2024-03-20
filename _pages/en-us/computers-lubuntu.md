---
page_id: lubuntu
layout: page
permalink: /computers/lubuntu
title: lubuntu
description: Lubuntu (Linux) tips
lang: en-us
nav: false
---

# Lubuntu tips

## Installing a Belkin WiFi PCMCIA card on Lubuntu 14.04

<p>Check the properties of your WiFi card by opening Utilities > Xterminal and typing:</p>
<pre>sudo lspci</pre>
<p>The Belkin FSD7010 rev 03 card uses the Broadcom BCM 4306 rev 03 hardware, PCI-ID: [14e4:4320]: use open source B43 driver</p>
<p>Look up the Ubuntu driver for the chipset in your card, using this <a href="https://help.ubuntu.com/community/HardwareSupportComponentsWirelessNetworkCardsBelkin#PCMCIA">table</a>.
</p>

<p>To use a Broadcom (Belkin) WiFi card (and enable shut down of your laptop, which the automatically loaded wl driver blocks):</p>

<p>The (L)Ubuntu kernel in versions 8.04.x (Hardy Heron) and higher do provide the b43 drivers, however due to copyright restrictions not the proprietary firmware which is required to run the card. To extract the required firmware and install b43-fwcutter, issue the following commands in a terminal (under the desktop menu System Tools > LXTerminal) and follow the prompts:</p>
<pre>sudo apt-get update</pre>
<pre>sudo apt-get install b43-fwcutter</pre>
<p>Remove your wifi card from its slot and restart the computer.</p>

#### Uninstall the default _wl_ wireless driver

<p><a href="https://help.ubuntu.com/community/AptGet/Howto">apt-get</a> installs a package, apt-get remove deletes a package (with --purge it deletes the configurations as well).
Go to Utilities > Xterminal and type:</p>
<pre>sudo apt-get remove --purge bcmwl-kernel-source</pre>
<p>You might have to repeat this step after a system update, as the default bcmwl-kernel module gets installed again. Took me months to sort that one out.</p>
<p>Continue with the following command:</p>
<pre>sudo apt-get install linux-firmware-nonfree</pre>
<p>followed by</p>
<pre>sudo -i nano /etc/modprobe.d/blacklist.conf</pre>
<p>If present, remove or #-comment out the following line in the /etc/modprobe.d/blacklist.conf file:</p>
<pre># blacklist b43</pre>
<p>We prevented wl from loading before b43 by deleting the bcmwl kernel module. If it keeps getting in your way, add the line</p>
<pre>blacklist wl</pre>
<p>Save your edits by pressing Ctrl-O. Insert your wifi card in the slot.</p>

#### Install the wifi icon

<p>Go to desktop menu->Preferences->Default applications for LXSessions. Navigate to Core Applications and then to Network GUI. Type in </p><pre>nm-applet</pre>
<p>and hit reload.<br>
There is a known bug that displays 2 Network Manager icons in the tray. Don't worry, is my easiest fix.</p>

#### Activate B43 driver

<p>Depending on the release, the B43 (and other) packages can often be simply activated under the desktop menu > Preferences > Additional Drivers (the rightmost tab, in Dutch: Extra stuurprogramma's).<br>
Click B43, enter password.<br>
on our Acer laptop, no special action was necesary to activate the driver, but you should enable the Wifi hardware switch or both the internal and the PCMCIA card will be disabled.</p>

### Switching between drivers

<p>If your card is supported by more than one driver then use the <a href="https://en.wikipedia.org/wiki/Modprobe">modprobe command</a> to select the appropriate driver. First unload all conflicting drivers (this includes removing the driver you're trying to install). Go to Utilities > Xterminal and type:</p>
<pre>sudo modprobe -r b43 bcma</pre>
<pre>sudo modprobe -r brcmsmac bcma</pre>
<pre>sudo modprobe -r wl</pre>
<p>You might have to restart your computer (with Wireless disabled and the Wifi card ejected from its slot) to be able to unload the WL module using the last line; in that case, the system will tell you &quot;Cannot unload, wl is in use&quot;.</p>

<p>Then load the B43 driver by entering the command:</p>
<pre>sudo modprobe b43</pre>

<p>Go to <em>Update drivers</em> > <em>Extra Drivers</em> and select &quot;Do not use device&quot; (Gebruik het apparaat niet) instead of "Use Broadcom 802.11 Linux STA driver in bcmwl-kernel-source (non-free)".</p>

Go to <em>Network connections</em> and delete any old Wifi connection.<br>
Create a new connection, fill in your credentials, MAC of the network card (= eth1).<br>
If your laptop also has an internal, built-in wireless card, be sure to pick the right adapter and ignore the other one.

Hope this has been of help to you.
Source of these instructions: <a href ="https://help.ubuntu.com/community/WifiDocs/Driver/bcm43xx">help.ubuntu.com</a> and <a href="https://launchpad.net/ubuntu/+source/b43-fwcutter">launchpad.net</a>.
