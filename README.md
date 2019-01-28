# LightPI

Creating an API for my COMP 349 Class

Distributed-Systems assignment #1

Premise:

In our assignment, we are going to simulate some smart devices, focusing on how to maintain state and control one or more of them. Additionally, We will also have reporting (logs) that allow us to see all events and usage information associated with these smart devices.

Process:

> 1. Create a smart device instance <br />
    *BulbDevice*; <br />
> 2. Add/remove/update delete the smart device in a group of devices <br />
    print("Current environment directory:" + sys.prefix) <br />
    print("System version: "+sys.version) <br />
    print("Current working directory: "+os.getcwd()) <br />
> 3. Move devices between groups <br />
    Move working directory <br />
> 4. Turn on/off a device <br />
    *varOn*; <br />
    *varIsWaiting*; <br />
    *varOff*; <br />
    *varSleep*; <br />
> 5. Show the state of all devices <br />
    *ListDevices* <br />
> 6. Set a timer for a device with a simple trigger (on/off), i.e. turn off device 30 minutes after it was turned on. <br />
    *varTimer*; <br />
> 7. Set a schedule for a device (on/off), i.e. turn on a device at 12:30 <br />
    *varClock*; <br />
