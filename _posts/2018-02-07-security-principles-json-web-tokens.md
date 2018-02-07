---
title: Security Principles and JSON Web Tokens
layout: post
description: ""
published: false
tags: [security]
---
Last week there was an interesting post on local storage security in dev.to by ... The author had particular ire for JSON Web Tokens, or at least how they are used.

The post makes a number of good points and is certainly worth a read. The author is clearly a talented and knowledgable developer. The post though presents a slightly missguided view on security and development in general. Overall I would describe it as dogmatic and absolutist.

I think its important to highlight some of the nuances involved in these topics, particularly for junior developers.

There are two important points to make:

- Software Development is not an absolutist activity.
- There is no such thing as security.

Let me deal with the security point first. If you're interested in this topic I suggest you read Gordon Carera's book The Secret History of Computers. It's a wonderful and exciting book that will contextualise the topics of security and hacking for you. 

The reality of security in the modern world is that there is none. If you are carrying out an activity that is of interest to the following states you have little to no security:

- USA
- China
- Russia
- Israel 
- UK

It's quite likely some of the work you do over the course of your careers will fall into this category. Some of the work I've done certainly has.

Ultimately these actors will find a way into your systems no matter what you do. In ... the Americans, probably with the help of the Israelis and British, hacked into an Irainian Nuclear facility called . You'll probably remember reading about the Stuxnet virus. This facility was air gapped and probably one of the most secure facilities in the world. It didn't stop the Americans though.

To pull this hack off the Americans will have spent a great deal of time and money. But it does highlight that absolute security does not exist, it is a myth.

Security is a wall building activity, not an impregnable dome building activity. No matter how high you build your wall an actor with enough determination will build a ladder to climb over it.

Your aim is to build a wall that is higher than the value of the assets you're protecting. That is it will cost a hacker more to hack your system than they will gain from hacking it. This also means that your security should be proportionate to what you are protecting. Don't for example air gap a server to protect a few email addresses.

How does this all relate to JSON Web Tokens and Local Storage. Well as I mentioned, development isn't an absolutist activity. Very little is set in stone, apart from 'turn your computer on'. So the following statement is both misguided and 