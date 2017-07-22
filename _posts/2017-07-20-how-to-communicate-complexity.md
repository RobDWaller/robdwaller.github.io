---
published: false
title: "How to Communicate Complexity?"
layout: post
---
Communicating complexity to others, particularly the non-technical, is one of
the biggest challenges developers face. Sadly though we haven't defined
a clear means of communicating complexity. It's something that needs to be
worked on by our industry, especially if we want to reduce project stresses.

The other day I tweeted the following, which highlights my personal frustration...

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">
Development is teaching me that people who don&#39;t understand something often
believe it is less complicated than it actually is.
<a href="https://twitter.com/hashtag/dev?src=hash">#dev</a>
<a href="https://twitter.com/hashtag/php?src=hash">#php</a></p>&mdash;
Rob Waller (@RobDWaller)
<a href="https://twitter.com/RobDWaller/status/878134004884545537">June 23,
2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Now, of course, it could be argued, what does it matter? It's not the job of the
'normals' to understand technical complexity, that is what developers are paid for...
And to some degree this is correct, but like all things in life it is more complicated
than that...

Back in March I was on a stag do -- 'batchelor party' if
you're American. Now, as is typical of these sorts of things you often gravitate
to your own kind... After a few drinks I got talking to the
future brother in law, and what do you know he's a software developer. He
does AI, so is much smarter than I obviously. Anyway, we got talking about dev and after a few more
drinks he said something profound...

> "The sole purpose of a software developer is to manage complexity."

I hadn't ever expressed this thought before, but it immediately
struck me as one of those natural truisms. Like does a bear .... in the woods..?
Obviously if our sole purpose is to manage complexity then communicating complexity
is very important.

There are three core problems when communicating complexity. The first is
that complexity increases rapidly as a system grows, the second is exposing the complexity
that lies beneath the surface, AKA the Iceberg problem, and finally

Explaining complexity to other developers is relatively straight forward as
we have a common language to work with. For example in the code below you can
easily see the increasing complexity.

```php
<?php

// Complexity = 2
public function isWidget(bool $widgetState): bool;

// Complexity = 9
public function canWidget(bool $hasWidgetName, bool $hasWidgetType, bool $hasWidgetFunction): bool;

// Complexity = unknown, look at method code...
public function assessWidgetNameForDiscrepancies(string $widgetName): int;
```

Merely using the method signatures, and all that 'Visual Debt', you can
score the complexity of the methods.

The first method 'isWidget' has a single
boolean going in and a boolean coming out. So unless someone is doing something
stupid only one of two things can occur, it has a complexity of two.
'canWidget' is slightly more complex, so a 9. The final method though, who knows
what is going on, it could be one of those horrible 100 line methods that
someone hasn't even bothered to test... Consumes a string, returns an int, what
kind of madness is this..?

It's clear that as developers we have a common and easy
way to communicate complexity. Along with a shared understanding of
complexity. However what should also be clear from the examples above is that
complexity increases rapidly. While both methods look simple on the surface, 'canWidget'
is significantly more complex than 'isWidget'.

There is no common language or approach when communicating to the
non-technical. Even simple Power Points and diagrams don't really convey
complexity, they usually just communicate what is involved.

Another example, recently I had to build a simple API, it required two endpoints.
I decided to keep this very simple, I didn't bother with a framework or proper routing,
I just went with query parameters...

```
http://tinyapi.com?route=endpointone

http://tinyapi.com?route=endpointtwo
```

On the surface this all seems quite simple. A non-technical person managing this work
may assume there is little or no complexity. Just write the end points...

This is wrong of course, what if a user decided to go to these endpoints instead?

```
http://tinyapi.com?route=foobar

http://tinyapi.com/hello/world
```

How should the API respond in this scenario? It should do something, right?
Of course it should. This though highlights that almost everything is more complicated
than it seems on the surface.

How though do you easily communicate this complexity?

Now... I know what is coming... What about Agile and BDD? Well,
both of these things can help negate some of the issues around complexity. In
many respects they simply remove the issue of complexity as they focus on what
is to be done. For me though neither of them solve the actual problem of
communicating complexity. Even story points don't attempt to communicate complexity,
they merely score it.

In addition, most developers don't work in Agile or BDD
environments. During my twelve year career I've worked in one Agile environment,
and zero BDD environments. And I've been around a lot of London, and at some decent places.
The reason for this is simple, a lot of companies do tech, but very few companies
are tech focused. So often they have very different focuses and working practices.



That they should always be prepared for something simple taking longer
