# LightPI
Creating an API for my COMP 349 Class

Distributed-Systems assignment #1

Premise:

In our assignment, we are going to simulate some smart devices, focusing on how to maintain state and control one or more of them. To make things interesting, we will also have background “threads” that support timers (to turn the device off after a certain amount of elapsed time) and events (on at certain time, off at certain time). We will also have reporting (logs) that allow us to see all events and usage information associated with these smart devices.

Process:

> 1. Create a smart device instance
    >*BulbDevice*;
> 2. Add/remove/update delete the smart device in a group of devices
    >print("Current environment directory:" + sys.prefix)
    >print("System version: "+sys.version)
    >print("Current working directory: "+os.getcwd())
> 3. Move devices between groups
    >Move working directory
> 4. Turn on/off a device
    >*varOn*;
    >*varIsWaiting*;
    >*varOff*;
    >*varSleep*;
> 5. Show the state of all devices
    >*ListDevices*
> 6. Set a timer for a device with a simple trigger (on/off), i.e. turn off device 30 minutes after it was turned on.
    >*varTimer*;
> 7. Set a schedule for a device (on/off), i.e. turn on a device at 12:30
    >*varClock*;
