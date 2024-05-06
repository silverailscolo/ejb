# SPDX-FileCopyrightText: Copyright 2024 EJ Broerse <https://www.ebroerse.nl>
#
# SPDX-License-Identifier: CC-BY-NC-SA-4.0

from machine import Pin,SPI
import framebuf
import time
import network
import math
import socket
import secrets
from umqtt.simple import MQTTClient
import asyncio

# Egbert Broerse 22 Feb 2024 microPython for Raspberry PicoW AGA. Based on
# https://github.com/micropython/micropython-lib/tree/master/micropython/umqtt.simple

OLED = None
mqtt_conn = None
task = None

# methods to draw active rects
# called anonymously in mqtt_callback
# ovens
def BO_aan():
    OLED.fill_rect(29,12,45,20, OLED.white)
    OLED.text("B",47,19, OLED.black)
    OLED.show()
    activate(0b00100000)
    start_timer_B()

def BO_uit():
    OLED.fill_rect(30,13,43,18, OLED.black)
    OLED.text("B",47,19, OLED.white)
    OLED.show()
    deactivate(0b11011110) #also turn off timer B

def RO_aan():
    OLED.fill_rect(29,34,45,20, OLED.white)
    OLED.text("R",47,40, OLED.black)
    OLED.show()
    activate(0b00010000)
    start_timer_B()

def RO_uit():
    OLED.fill_rect(30,35,43,18, OLED.black)
    OLED.text("R",47,40, OLED.white)
    OLED.show()
    deactivate(0b11101110)

def WO_aan():
    OLED.fill_rect(78,34,45,20, OLED.white)
    OLED.text("W",95,40, OLED.black)
    OLED.show()
    activate(0b00000100)
    #start_timer_A()

def WO_uit():
    OLED.fill_rect(79,35,43,18, OLED.black)
    OLED.text("W",95,40, OLED.white)
    OLED.show()
    deactivate(0b11111011)

def GR_aan():
    OLED.fill_rect(78,12,45,20, OLED.white)
    OLED.text("G",95,19, OLED.black)
    OLED.show()
    activate(0b00001000)
    # start_timer_B()

def GR_uit():
    OLED.fill_rect(79,13,43,18, OLED.black)
    OLED.text("G",95,19, OLED.white)
    OLED.show()
    deactivate(0b11110110)

    # hobs
def BP_aan():
    OLED.fill_rect(32,0,36,9, OLED.white)
    #OLED.text("R",47,40, OLED.black)
    OLED.show()
    activate(0b10000000)
    start_timer_A()

def BP_uit():
    OLED.fill_rect(33,1,34,7, OLED.black)
    #OLED.text("R",47,40, OLED.white)
    OLED.show()
    deactivate(0b01111101)

def SP_aan():
    OLED.fill_rect(82,0,36,9, OLED.white)
    #OLED.text("R",47,40, OLED.black)
    OLED.show()
    activate(0b01000000)
    start_timer_A()

def SP_uit():
    OLED.fill_rect(83,1,34,7, OLED.black)
    #OLED.text("R",47,40, OLED.white)
    OLED.show()
    deactivate(0b1011101)

    # timers, no activity
def A_aan():
    #OLED.fill_rect(0,0,20,20, OLED.white)
    fill_circle(10,10,9, OLED.white)
    #OLED.text("15",47,40, OLED.black) # timer aflopend + knipperen
    OLED.show()

def A_uit(s):
    OLED.fill_rect(0,0,20,20, OLED.black)
    OLED.text(s,2,8, OLED.white) # toon 15 (of de resterende tijd)
    OLED.show()

def B_aan():
    #OLED.fill_rect(0,43,20,20, OLED.white)
    fill_circle(10,53,9, OLED.white)
    #OLED.text("60",55,40, OLED.black) # timer aflopend + knipperen
    OLED.show()

def B_uit(s):
    OLED.fill_rect(0,43,20,20, OLED.black)
    OLED.text(s,2,49, OLED.white) # toon 60 (of de resterende tijd)
    OLED.show()

def activate(mask):
    global aga_active
    global task
    # betekenis bits vanaf links:
    # bit 1: BP
    # bit 2: SP
    # bit 3: BO
    # bit 4: RO
    # bit 5: GR
    # bit 6: WO
    # bit 7: timer A
    # bit 8: timer B
    aga_active = aga_active | mask # OR
    print(f"Activate: aga_active={bin(aga_active)}")
    if task is not None :
        task.cancel()

def deactivate(mask):
    global aga_active
    global task
    # betekenis bits vanaf links:
    # bit 1: BP
    # bit 2: SP
    # bit 3: BO
    # bit 4: RO
    # bit 5: GR
    # bit 6: WO
    # bit 7: timer A
    # bit 8: timer B
    aga_active = aga_active & mask # AND
    print(f"Deactivate: aga_active={bin(aga_active)}")
    if aga_active == 0b00000000 :
        task = asyncio.create_task(schermTimer()) # start sluimertimer 5 min
    #elif (task is not None) :
    #    task.cancel()

def fill_circle(x,y,r,c):
    OLED.hline(x-r,y,r*2,c)
    for i in range(1,r):
        a = int(math.sqrt(r*r-i*i)) # Pythagoras!
        OLED.hline(x-a,y+i,a*2,c) # Lower half
        OLED.hline(x-a,y-i,a*2,c) # Upper half

# Received MQTT messages from subscriptions will be delivered to this callback
def subscribe_callback(topic, msg):
    OLED.on()
    # print((topic, msg))
    if (b"baking_oven" in topic):
        if (msg == b"on"):
            BO_aan()
            print("Baking Oven ON")
        elif (msg == b"off"):
            BO_uit()
            print("Baking Oven OFF")
    elif (b"roasting_oven" in topic):
        if (msg == b"on"):
            RO_aan()
            print("Roasting Oven ON")
        elif (msg == b"off"):
            RO_uit()
            print("Roasting Oven OFF")
    elif (b"grill" in topic):
        if (msg == b"on"):
            GR_aan()
            print("Grill ON")
        elif (msg == b"off"):
            GR_uit()
            print("Grill OFF")
    elif (b"warming_oven" in topic):
        if (msg == b"on"):
            WO_aan()
            print("Warming Oven ON")
        elif (msg == b"off"):
            WO_uit()
            print("Warming Oven OFF")
    elif (b"simmer_plate" in topic):
        if (msg == b"on"):
            SP_aan()
            print("Simmer Plate ON")
        elif (msg == b"off"):
            SP_uit()
            print("Simmer Plate OFF")
    elif (b"boiling_plate" in topic):
        if (msg == b"on"):
            BP_aan()
            print("Boiling Plate ON")
        elif (msg == b"off"):
            BP_uit()
            print("Boiling Plate OFF")

# diplay constants
DC = 8
RST = 12
MOSI = 11
SCK = 10
CS = 9

class OLED_1inch3(framebuf.FrameBuffer):
    def __init__(self):
        self.width = 128
        self.height = 64
        self.is_on = 0

        self.cs = Pin(CS, Pin.OUT)
        self.rst = Pin(RST, Pin.OUT)

        self.cs(1)
        self.spi = SPI(1)
        self.spi = SPI(1, 2000_000)
        self.spi = SPI(1, 20000_000, polarity=0, phase=0, sck=Pin(SCK), mosi=Pin(MOSI), miso=None)
        self.dc = Pin(DC, Pin.OUT)
        self.dc(1)
        self.buffer = bytearray(self.height * self.width // 8)
        super().__init__(self.buffer, self.width, self.height, framebuf.MONO_HMSB)
        self.init_display()

        # color constants
        self.white =   0xffff
        self.black =   0x0000
        self.red =     0x2200

    def write_cmd(self, cmd):
        self.cs(1)
        self.dc(0)
        self.cs(0)
        self.spi.write(bytearray([cmd]))
        self.cs(1)

    def write_data(self, buf):
        self.cs(1)
        self.dc(1)
        self.cs(0)
        self.spi.write(bytearray([buf]))
        self.cs(1)

    def on(self):
        if not self.is_on:
            self.write_cmd(0xAF)
            self.is_on=1

    def off(self):
        if self.is_on:
            self.write_cmd(0xAE)
            self.is_on=0

    def init_display(self):
        # Initialize display
        self.rst(1)
        time.sleep(0.001)
        self.rst(0)
        time.sleep(0.01)
        self.rst(1)

        self.off()             #turn off OLED display

        self.write_cmd(0x00)   #set lower column address
        self.write_cmd(0x10)   #set higher column address

        self.write_cmd(0xB0)   #set page address

        self.write_cmd(0xdc)   #set display start line
        self.write_cmd(0x00)
        self.write_cmd(0x81)   #contract control
        self.write_cmd(0x6f)   #128
        self.write_cmd(0x21)   # Set Memory addressing mode (0x20/0x21) #

        self.write_cmd(0xa0)   #set segment remap
        self.write_cmd(0xc0)   #Com scan direction
        self.write_cmd(0xa4)   #Disable Entire Display On (0xA4/0xA5)

        self.write_cmd(0xa6)   #normal / reverse
        self.write_cmd(0xa8)   #multiplex ratio
        self.write_cmd(0x3f)   #duty = 1/64

        self.write_cmd(0xd3)   #set display offset
        self.write_cmd(0x60)

        self.write_cmd(0xd5)   #set osc division
        self.write_cmd(0x41)

        self.write_cmd(0xd9)   #set pre-charge period
        self.write_cmd(0x22)

        self.write_cmd(0xdb)   #set vcomh
        self.write_cmd(0x35)

        self.write_cmd(0xad)   #set charge pump enable
        self.write_cmd(0x8a)   #Set DC-DC enable (a=0:disable; a=1:enable)

        #self.write_cmd(0x36)  # MADCTR sets screen rotation !!! not working 12/2023
        # Options MV-MX-MY = bits 4-7:
        # Normal      0 0 0 = 0b00000000 = 0x0
        # Y-Mirror    0 0 1 =  0b00010000 = 0x10
        # X-Mirror    0 1 0 =  0b00100000 = 0x20
        # X-Mirror + Y-Mirror = Flip 180 0 1 1 =  0b00110000 = 0x30 << for AGA
        # X-Y Exchange 1 0 0 =  0b01000110 = 0x40
        # X-Y Exchange + Y-Mirror 1 0 1 =  0b01010000 = 0x50
        # X-Y Exchange + X-Mirror 1 1 0 =  0b01100000 = 0x60
        # X-Y Exchange + X-Mirror + Y-Mirror 1 1 1 =  0b01110000 = 0x70
        #self.write_data(0x30) # change the value of high nibble here?

        self.on()

    def show(self):
        self.write_cmd(0xb0)
        for page in range(0,64):
            self.column = 63 - page
            self.write_cmd(0x00 + (self.column & 0x0f))
            self.write_cmd(0x10 + (self.column >> 4))
            for num in range(0,16):
                self.write_data(self.buffer[page*16+num])

# end of class OLED_1inch3

keyA = Pin(15, Pin.IN, Pin.PULL_UP)
keyB = Pin(17, Pin.IN, Pin.PULL_UP)
timer_A_running = False
timer_B_running = False
aga_active = 0b00000000

# Coroutine: look for button press keyA
async def wait_keyA():
    #print("wait_keyA started")
    global timer_A_running
    keyA_prev = keyA.value()
    while True:
        keyNow = keyA.value() # voorkom wijziging tijdens cyclus
        if (keyNow != keyA_prev) :
            if (keyNow == 0) : # pressed
                OLED.on()
                if not timer_A_running :
                    start_timer_A()
                    #asyncio.create_task(start_timer_A())
                    #timer_A_running = True
                    #activate(0b00000010)
                    #asyncio.create_task(timer_A())
                else :
                    timer_A_running = False
                    deactivate(0b11111101)
                    # publish timer change event on mqtt - laat de timer dat zelf maar doen
                    #mqtt_conn.publish(b"picow/timerA/running", "Afgebroken")
            else :
                keyA_prev = keyNow
        await asyncio.sleep(0.1)

# Coroutine: look for button press keyB
async def wait_keyB():
    #print("wait_keyB started")
    global timer_B_running
    keyB_prev = keyB.value()
    while True:
        keyNow = keyB.value() # voorkom wijziging tijdens cyclus
        if (keyNow != keyB_prev) :
            print("key_B cycle")
            if (keyNow == 0) : # pressed
                OLED.on()
                if not timer_B_running :
                    start_timer_B()
                    #asyncio.create_task(start_timer_B())
                    #timer_B_running = True
                    #activate(0b00000001)
                    #asyncio.create_task(timer_B())
                else : # reset
                    timer_B_running = False
                    deactivate(0b11111110)
                    # publish timer change event on mqtt - laat de timer dat zelf maar doen
                    #mqtt_conn.publish(b"picow/timerB/running", "Afgebroken")
            else :
                keyB_prev = keyNow
        await asyncio.sleep(0.1)

def start_timer_A():
    global timer_A_running
    timer_A_running = True
    activate(0b00000010)
    print(f"Timer_A_running={timer_A_running}")
    asyncio.create_task(timer_A())

def start_timer_B():
    global timer_B_running
    timer_B_running = True
    activate(0b00000001)
    print(f"Timer_B_running={timer_B_running}")
    asyncio.create_task(timer_B())

# Coroutine: only return when completed after 15 minutes
async def timer_A() :
    print("timer_A gestart")
    global mqtt_conn
    global timer_A_running
    runtime = 15 * 60 # in seconds
    prevMinutes = 16 # start with just a bit extra
    # publish timer start event on mqtt
    mqtt_conn.publish(b"picow/timerA/running", "Gestart")
    while timer_A_running and runtime > 0 :
        runtime = runtime - 1
        A_aan() #draw white circle
        #print(f"timer_A runtime={runtime}")
        await asyncio.sleep_ms(920) #tweak to get real minutes

        runtime = runtime - 1
        minutesRemaining = runtime // 60
        #print(f"timer_A minutesRemaining={minutesRemaining}")
        A_uit(str(minutesRemaining)) #draw black circle + white minutes remaining
        if minutesRemaining < prevMinutes :
            # publish timer start event on mqtt
            mqtt_conn.publish(b"picow/timerA/running", str(minutesRemaining))
            prevMinutes = minutesRemaining
            print(f"timer_A prevMinutes={prevMinutes}")
        await asyncio.sleep_ms(920)
    timer_A_running = False
    deactivate(0b11111101)
    # publish timer finished event on mqtt
    mqtt_conn.publish(b"picow/timerA/running", "Afgelopen")
    A_uit("15")
    print("Timer_A gestopt")

# Coroutine: only return when completed after 60 minutes
async def timer_B() :
    print("timer_B gestart")
    global mqtt_conn
    global timer_B_running
    runtime = 60 * 60 # in seconds
    prevMinutes = 61 # start with just a bit extra
    # publish timer start event on mqtt
    mqtt_conn.publish(b"picow/timerB/running", "Gestart")
    while timer_B_running and runtime > 0 :
        runtime = runtime - 1
        B_aan() #draw white circle
        await asyncio.sleep_ms(920) #tweak to get real minutes

        runtime = runtime - 1
        minutesRemaining = runtime // 60
        B_uit(str(minutesRemaining)) #draw black circle + white minutes remaining
        if minutesRemaining < prevMinutes :
            # publish timer start event on mqtt
            mqtt_conn.publish(b"picow/timerB/running", str(minutesRemaining))
            prevMinutes = minutesRemaining
            print(f"timer_B prevMinutes={prevMinutes}")
        await asyncio.sleep_ms(920)
    timer_B_running = False
    deactivate(0b11111110)
    # publish timer finished event on mqtt
    mqtt_conn.publish(b"picow/timerB/running", "Afgelopen")
    B_uit("60")
    print("Timer_B gestopt")

# Coroutine: schakel scherm uit na ca. 5 minuten mqtt
async def schermTimer():
    runtime = 5 * 60 # 5 minuten, in seconds
    while (runtime > 0) and (aga_active == 0b00000000) :
        runtime = runtime - 10
        await asyncio.sleep(10)
    if (aga_active == 0b00000000) : # kan inmiddels alweer gereset zijn door andere actie
        OLED.off()

# Coroutine: connect and wait for mqtt messages
async def wait_mqtt() :
    global mqtt_conn
    #print("wait_mqtt started")
    while True:
        # Non-blocking wait for message
        mqtt_conn.check_msg()
        # Then need to sleep to avoid 100% CPU usage (in a real
        # app other useful actions would be performed instead)
        await asyncio.sleep(0.5)
    mqtt_conn.disconnect()

# Coroutine: entry point for asyncio program
async def main():
    global mqtt_conn
    global OLED

    # initialise display
    if OLED is None:
        OLED = OLED_1inch3()

    # start Wi-Fi
    wlan = network.WLAN(network.STA_IF)
    print("WLAN Active:", wlan.active(True))
    wlan.connect(secrets.SSID, secrets.PASSWORD)
    while True:
        wstat = wlan.status()
        if wstat < 0 or wstat >= 3:
            break
        print('Waiting for WiFi connection...')
        time.sleep(1)
    print("Connected:", wlan.isconnected())
    # start a server, and listen for devices connecting to it
    addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]
    s = socket.socket()
    s.bind(addr)
    s.listen(1)
    print('listening on', addr)
    status = wlan.ifconfig()
    print("IP address, netmask, gateway, DNS: ", status)

    # Teken AGA
    OLED.rect(25,8,102,56, OLED.white) #fornuis contour
    time.sleep(0.5)
    OLED.show()
    # Ovens
    OLED.rect(29,12,45,20, OLED.white) #baking oven A
    time.sleep(0.5)
    OLED.show()
    OLED.rect(29,34,45,20, OLED.white) #roasting oven B
    time.sleep(0.5)
    OLED.show()
    OLED.rect(78,12,45,20, OLED.white) #grill
    time.sleep(0.5)
    OLED.show()
    OLED.rect(78,34,45,20, OLED.white) #warming oven
    time.sleep(0.5)
    OLED.show()
    # Hobs
    OLED.rect(32,0,36,9, OLED.white) #Boiling Plate
    time.sleep(0.5)
    OLED.show()
    OLED.rect(82,0,36,9, OLED.white) #Simmer Plate
    time.sleep(0.5)
    OLED.show()
    # Letters
    OLED.text("B", 47, 19, OLED.white)
    OLED.text("R", 47, 40, OLED.white)
    OLED.text("G", 95, 19, OLED.white)
    OLED.text("W", 95, 40, OLED.white)
    A_uit("15") # halt timer 15
    B_uit("60") # halt timer 60
    OLED.show()

    # start MQTT connection
    mqtt_conn = MQTTClient("umqtt_client", "homeassistant.local", 1883, "secrets.mqtt_name", "secrets.mqtt_pwd")
    mqtt_conn.set_callback(subscribe_callback)
    mqtt_conn.connect()
    mqtt_conn.subscribe(b"homeassistant/input_boolean/+/state") # filter for AGA state topic only

    # Start coroutine as a task and immediately return
    #asyncio.create_task(wait_mqtt())

    # async watch button press, publish to mqtt/HomeAssistant, see:
    # https://www.digikey.nl/en/maker/projects/getting-started-with-asyncio-in-micropython-raspberry-pi-pico/110b4243a2f544b6af60411a85f0437c
    # https://gpiocc.github.io/learn/micropython/esp/2020/06/13/martin-ku-asynchronous-programming-with-uasyncio-in-micropython.html
    # Main event loop
    event_loop = asyncio.get_event_loop(mqtt_conn)
    event_loop.create_task(wait_mqtt())
    event_loop.create_task(wait_keyA())
    event_loop.create_task(wait_keyB())
    event_loop.run_forever()

    # turn display off after 2 minutes - async na elke activiteit zie schermTimer()

# Start event loop and run entry point coroutine
asyncio.run(main())
