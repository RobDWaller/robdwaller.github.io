---
title: Security Principles and Software Development
layout: post
description: ""
published: false
tags: [security]
---
Security is a topic that is often poorly understood by developers. This I believe is because many developers focus on the technical side of security rather than wider topic which involves people, money, business management, etc. This can result in poor decision making and unnecessary complication.

In a recent dev.to article Randall Degges shared this on the topic of JSON Web Tokens and local storage.

> The biggest security offenders I see today are those of us who store JWTs (session data) in local storage. Many people don't realize that JWTs are essentially the same thing as a username/password.

If an attacker can get a copy of your JWT, they can make requests to the website on your behalf and you will never know. Treat your JWTs like you would a credit card number or password: don't ever store them in local storage.

Generally Randall's post on local storage is excellent, definitely worth a read. Sadly though this statement on JWTs is missguided or at the very least lacks nuance.  

His position on JWTs and local storage is a blanket one, "Don't do it!!" But where you store a JWT is not really of great importance, and storing it somewhere 'safe' doesn't guarantee security. The important questions to ask are, what are you storing in the JWT? And, what are you using the JWT to do or access?

If the answer to that question doesn't include any Personal Identifiable Information, or includes minimal PII, then you can probably do as wish with those JWTs. If by contrast your answer to the above questions is, "All their credit card information!!" Then you should probably consider an alternative technology to JWTs entirely.

You'll note that this approach to solving a security problem is less dogmatic and absolutist. There is a tendency among talented developers to become dogmatic and absolutist. Possibly because everything they see is 'shit' or at least less than perfect. A little like when Plato looked upon Athens in the ... century BC. Like Plato though this approach can lead to poor solutions and bad answers. And it cam be unhelpful for those attempting to understand a topic, particularly if they are junior.

When discussing
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