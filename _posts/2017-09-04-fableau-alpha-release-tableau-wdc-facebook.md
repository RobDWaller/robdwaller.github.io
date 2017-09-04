---
layout: post
title: "Fableau Alpha Release: A Tableau Web Data Connector for Facebook"
published: false
description:
tags:
---
Over the last few months I've been doing a great deal of work on Tableau integrations. For those of you who don't know what Tableau is, it is a very powerful data visualisation tool.

It has many built in data connectors for databases like MySQL, MS-SQL and other data stores. However it has very few API integrations for social networks and other useful data sources.

Tableau though offers a JavaScript SDK on which you can build you own Web Data Connectors to various online data sources. I have been working on and released a comprehensive WDC integration between Tableau and Facebook at work. 

However I began with a prototype tool and this is where Fableau come from, see what I did with the name... Fableau is a much smaller, less capable Tableau Web Data Connetor for Facebook. For instance it will only allow you to pull singular snapshots of data for one off visualisations. This is to comply with Facebook's security policies.

Fableau though is no less powerful than any other open source Facebook Web Data Connector currently available. It currently pulls page and post insight data back from Facebook, which is great for building Facebook campaign visualisations. 

In addition Fableau should provide a good guide on how to build WDCs for Tableau. I've attempted to use modern JavaScript syntax such as 

it also provides a building block on which to develop bigger Web Data Connectors, not just for Facebook but other data sources. Finaly I hope people will feedback.

how to use

code used

its only alpha