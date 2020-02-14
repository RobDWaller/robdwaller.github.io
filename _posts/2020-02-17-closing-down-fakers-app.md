---
layout: post
title: "Closing Down The Fakers App"
description: "I started the Fakers App in 2012 as a side project to help some journalists researching people who were buying fake followers on Twitter."
tags: [twitter, spam, fake followers, fakers app]
published: false
--- 
I started the Fakers App in 2012 as a side project to help some journalists researching people who were buying fake followers on Twitter. When it first launched only a few people used it, but its launch coincided with the Obama / Romney election. Someone at Mashable decided to use the tool to analyse both [Obama and Romney's Twitter accounts](https://mashable.com/2012/08/24/obama-has-13-million-fake-twitter-followers-report/) and publish an article on it. Almost instantly traffic on the site exploded, it went from something like a 100 sign ups a day to 30k an hour.

The media attention grew and grew and eventually I was interviewed by CNN, I believe I also appeared on BBC Radio 4, and most major news publications covered the Fakers App. It seems I'd hit a nerve. Funnily enough Twitter never reached out to me. :(

<iframe width="560" height="315" src="https://www.youtube.com/embed/CFZyxNbkv5k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The final outcome of all this was over 1.5 million people used the app to check their fake follower score. It also helped people block millions of fake Twitter accounts, at its peak it was blocking over 250k per week.

Sadly though after 8 years I feel its time to bring the project to an end. When all this began I was 28 and little more than a junior developer with quite the ego. I was completely unprepared for handling and building a website which was generating so much traffic and interest. 

I suppose this is where the problems began, I didn't know how to write decent, maintainable code, I just knew how to make things work. This was enough to keep the car on the road, but not good for the long term sustainability of the project. You can see the codebase on GitHub, which I've now made public, it is a catastrophe. A lesson in what not to do for any junior developer.

Lessons learnt:
- Don't write your own framework.
- Write lots of tests.
- Minimise your cyclomatic complexity.
- Write some documentation.

There have been two attempts over the years to rewrite the application so it works better, one a few years ago and one more recently. But the task is too complex for a developer who's outlook on software development has fundamentally changed. Eight year's ago I had no idea what a unit test was, now I'm a Test Driven Development evangelist. I'm now far more aware of the importance of making software function correctly and this means tasks take longer.

More importantly though my heart is no longer in the project, my life has moved on. I got engaged, bought a house and I recently had my first child, my son Jacob was born in December 2019. I also now have other software projects which take up my time and require my support. Put simply I can't maintain the project in the same way I did 4 or 5 years ago.

I'm very proud of the Fakers App, it played an enormous part in my growth as a software developer. And I believe it helped a lot of people and made a difference to the Twitter ecosystem.

I've open sourced all the code for the project because while a lot of the code is a mess there are some interesting ideas hidden in their. I also believe spam and fake followers is still a massive problem on social media so if you want to take the core 'algorithm' and build something new, go for it!

- Original Fakers App
- Rebuild One
- Rebuild Two

Thanks to everyone who has used and supported the app over the years. Here's to the next crazy idea and if you have any questions just drop me a message on Twitter @RobDWaller.

xx