---
layout: post
title: "Setup Docker with Ubuntu Windows Subsystem for Linux"
description: "You can't install Docker for Windows and access it directly from WSL in your Ubuntu terminal."
tags: [docker, windows, wsl, linux, ubuntu]
published: true
---

I'm a big fan of Windows Subsystem for Linux because I hate the Windows command prompt. WSL allows me to [run Ubuntu](https://www.microsoft.com/en-gb/p/ubuntu/9nblggh4msv6?activetab=pivot%3Aoverviewtab) on Windows and get a mix of the benefits that both Linux and Windows offer.

One problem though I found recently was using Docker on Windows. First you need to make sure you are running Windows Pro, Home will not suffice. But importantly for me you can't install Docker for Windows and access it directly from WSL in your Ubuntu terminal.

This is a bit of a pain but it turns out there is a solution. You can create a npiperelay... I have no idea what this is exactly but it will allow WSL to communicate with Docker for Windows. [The tutorial is on the Microsoft Tech Blog](https://blogs.technet.microsoft.com/virtualization/2017/12/08/wsl-interoperability-with-docker/) and it is relatively straight forward to follow.

> We frequently get asked about running docker from within the Windows Subsystem for Linux (WSL). We don’t support running the docker daemon directly in WSL. But what you can do is call in to the daemon running under Windows from WSL. What does this let you do? You can create dockerfiles, build them, and run them in the daemon—Windows or Linux, depending on which runtime you have selected—all from the comfort of WSL.

I've done this on two machines now and it works fine and gives you full control over Docker, just like you were executing the commands on a Linux environment or via Windows Power Shell.

Hopefully Microsoft will improve WSL over the coming months and years so that this is no longer an issue. But for now this seems to be a decent work around. I hope it helps.
