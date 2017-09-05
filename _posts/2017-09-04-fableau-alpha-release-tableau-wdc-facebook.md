---
layout: post
title: "Fableau Alpha Release: A Tableau Web Data Connector for Facebook"
published: false
description:
tags:
---
Over the last few months I've been doing a great deal of work on Tableau integrations. For those of you who don't know what Tableau is, it is a very powerful data visualisation tool.

It has many built in data connectors for databases like MySQL, MS-SQL and other data stores. However it has very few API integrations for social networks and other useful data sources.

Tableau offers a JavaScript SDK on which to build Web Data Connectors to various online data sources, such as Facebook. I have used this SDK to build and release a comprehensive WDC integration between Tableau and Facebook at work. 

However I began with a prototype tool and this is where Fableau comes from. Fableau is a much smaller, less capable Web Data Connetor for Facebook. For instance it will only allow you to pull singular snapshots of data for one off visualisations. This is to comply with Facebook's security policies.

Fableau though is no less powerful than any other open source Facebook Web Data Connector currently available. It pulls page and post insight data back from Facebook, which is great for building Facebook campaign visualisations. 

In addition Fableau should provide a good guide on how to build WDCs for Tableau. I've attempted to use modern JavaScript syntax such as classes to separate out the various concerns. So the Tableau integration and Facebook integration are in different places. Also I made great use of JavaScripts data pipeline functions, such as map() and reduce(). This code is then compiled using a combination of Laravel Mix, Webpack and Babel.

One note that should be considered in the build is that the Tableau client is not the most up to date. So Babel was used to pollyfill certain things like Promises.

Obviously this is the Alpha release of this codebase, so it is by no means perfect. I need to tidy it up a little, add more comments and test it further.

It should though provide a good building block from which to build more advanced Tableau Web Data Connectors. I will appreciate any Feedback you can provide.

### Useful Resources
- Tableau
- Tableau Web Data Connector SDK
- Facebook Graph API
- Facebook Graph Explorer
- JavaScript Classes
- JavaScript Arrays
- Laravel Mix
- WebPack
- Yarn
- Babel