---
layout: post
title: "How to Unit Test WordPress"
description: ""
tags: [wordpress, tests, unit test, php unit, wp mock]
published: false
---
Applying modern PHP development principles like unit tests to WordPress may seem like an impossible task. WordPress and much of its ecosystem lives in a different world to Composer, PHP Unit, CodeSniffer and many of the other tools modern PHP developers like to use. WordPress has little interest in them and does not wish to promote these tools to its community. But just because WordPress works differently to the rest of the PHP community does not mean we cannot apply modern development principles like units tests to the WordPress code we write.   

In a previous post I explained how to begin with Composer and Docker with WordPress. And to apply unit tests to WordPress code, particularly plugins code, you will need to become comfortable using Composer with WordPress. This post is based around a WordPress example plugin I built called Atlantic City, this is my version of the famous Hello Dolly plugin, but based on the song Atlantic City by Bruce Springsteen. 
