---
layout: post
title: "Fableau Alpha Release: A Tableau Web Data Connector for Facebook"
published: true
description: "Fableau is a Tableau Web Data Connector for the Facebook Graph API which I've now released the Alpha version for."
tags: [tableau, tableau wdc, facebook, facebook graph api, JavaScript]
---
[Fableau](http://fableau.io) is a Tableau Web Data Connector for the Facebook Graph API which I've now released the [Alpha version for](https://github.com/RobDWaller/fableau). [Tableau](https://tableau.com), for those who don't know, is a very powerful data visualisation and analysis tool, and over the last few months I've been doing a great deal of work on Tableau API integrations.

Tableau has many built in data connectors for databases like MySQL, MS SQL and other data stores. However it has very few API integrations for social networks and other useful data sources. It does though offer a [JavaScript SDK](https://tableau.github.io/webdataconnector/) on which to build Web Data Connectors that integrate with APIs, such as the Facebook Graph API. I have used this SDK to build and release a comprehensive WDC integration between Tableau and Facebook at work.

However I began learning about Tableau WDCs by writing a simple prototype tool and this is the basis of Fableau. Currently it will only allow you to pull singular snapshots of data for one off visualisations in Tableau. This is due to the pure use of JavaScript and to comply with Facebook's security suggestions. It is though no less powerful than any other open source Facebook Web Data Connector currently available for Tableau. The WDC will pull page and post insight data back from Facebook, which is great for building Facebook campaign visualisations.

In addition Fableau should provide a good guide on how to build WDCs for Tableau. I've attempted to use modern JavaScript concepts such as classes to separate out the various concerns. Also I made great use of JavaScript's data pipeline functions, such as `map()` and `reduce()`. This code is then compiled using a combination of Laravel Mix, Webpack and Babel. One note on the build is that the Tableau client is not the most up to date, so Babel was used to polyfill certain things like [Promises]().

You can use Fableau to pull Facebook data by visiting the [Fableau.io](http://fableau.io) website I have set up. Alternatively if you'd like to setup and use Fableau on your own server you will need NodeJs and NPM installed along with Yarn. And to compile simply run Yarn followed by Webpack. You will also need to [set up your own Facebook app](https://developers.facebook.com/) and swap out the client id.

```
yarn

npm run webpack
```

Obviously this is the Alpha release of this codebase, so it is by no means perfect. I need to tidy it up a little, add more comments and test it further. It should though provide a good building block from which to build more advanced Tableau Web Data Connectors and start visualising data in Tableau. I will appreciate any feedback you can provide.

### Useful Resources
- [Fableau.io](http://fableau.io)
- [Fableau on GitHub](https://github.com/RobDWaller/fableau)
- [Tableau](https://www.tableau.com/)
- [Tableau Web Data Connector SDK](https://tableau.github.io/webdataconnector/)
- [Facebook Graph API](https://developers.facebook.com/docs/graph-api)
- [Facebook Graph Explorer](https://developers.facebook.com/tools/explorer/)
- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Laravel Mix](https://laravel.com/docs/5.4/mix)
- [Webpack](https://webpack.js.org/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Babel](https://babeljs.io/)
