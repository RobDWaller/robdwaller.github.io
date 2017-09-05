---
layout: post
title: "Fableau Alpha Release: A Tableau Web Data Connector for Facebook"
published: false
description: "Fableau is a Tableau Web Data Connector for the Facebook Graph API which I've now released the Alpha version for."
tags: [tableau, tableau wdc, facebook, facebook graph api, JavaScript]
---
Fableau is a Tableau Web Data Connector for the Facebook Graph API which I've now released the Alpha version for. Tableau, for those who don't know, is a very powerful data visualisation and analysis tool, and over the last few months I've been doing a great deal of work on Tableau API integrations.

It has many built in data connectors for databases like MySQL, MS-SQL and other data stores. However it has very few API integrations for social networks and other useful data sources. Tableau though offers a JavaScript SDK on which to build Web Data Connectors to various online data sources, such as Facebook. I have used this SDK to build and release a comprehensive WDC integration between Tableau and Facebook at work.

However I began learning about Tableau WDCs by writing a simple prototype tool and this is where Fableau comes from. Fableau is a much smaller, less capable Web Data Connector for Facebook. For instance it will only allow you to pull singular snapshots of data for one off visualisations. It is though is no less powerful than any other open source Facebook Web Data Connectors currently available. It pulls page and post insight data back from Facebook, which is great for building Facebook campaign visualisations.

In addition Fableau should provide a good guide on how to build WDCs for Tableau. I've attempted to use modern JavaScript concepts such as classes to separate out the various concerns. Also I made great use of JavaScript's data pipeline functions, such as `map()` and `reduce()`. This code is then compiled using a combination of Laravel Mix, Webpack and Babel. One note that should be considered in the build is that the Tableau client is not the most up to date. So Babel was used to polyfill certain things like Promises.

To setup and use Fableau you will need NodeJs and NPM installed along with Yarn. And to compile simply run Yarn followed by Webpack.

```
yarn

npm run webpack
```

Obviously this is the Alpha release of this codebase, so it is by no means perfect. I need to tidy it up a little, add more comments and test it further. It should though provide a good building block from which to build more advanced Tableau Web Data Connectors. I will appreciate any Feedback you can provide.

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
