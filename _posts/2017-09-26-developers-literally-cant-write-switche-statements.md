---
layout: post
title: "Juniors Literally Can't Write Switch Statements: What Senior PHP
Developers Need to Focus On"
description: 'While many junior PHP developers struggle to write and learn basic
code many seniors spend their time arguing and bickering.'
tags: [php, javascript, senior, juniors, code basics, learning]
published: true
---
If you follow the PHP community on Twitter and other places you'll have noticed
a lot of negativity floating around at moment. Lot's of arguing and bickering,
[visual debt](https://laracasts.com/series/php-bits/episodes/1)* anyone... [@Nealio82](https://twitter.com/nealio82) [wrote an interesting post](https://medium.com/@nealio82/the-global-php-community-continues-to-toxify-itself-and-we-need-to-halt-it-for-the-sake-of-our-eabecd21a365) on the topic, highlighting
some of the problems...

> The PHP community is broken. There are clear factions of die-hard fans within our wider ecosystem viciously guarding their own biases and making the same denigrating and sneering comments we already face from the much wider software community.

And on the train home tonight I spotted this conversation on Twitter about
dependency injection...

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">It depends a bit ok what projects you’re working on. For my stuff it is generally speaking ok. Only in some instances needed to inject.</p>&mdash; Freek Van der Herten (@freekmurze) <a href="https://twitter.com/freekmurze/status/908716651012612096">September 15, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

It would seem there are a lot of senior PHP developers arguing with each other, and
often about how many angels they can see dancing on the head of a pin.
Fundamentally know one knows where the line that separates when to
use dependency injection and when not to is, or even if there is a line.

For me many senior PHP developers seem to have the wrong focus,
there isn't enough perspective. Possibly there are too many ivory towers. While
many senior developers are arguing about the benefits of Doctrine over Eloquent, for example,
there are junior developers who literally can't even write basic code properly.

At work recently a company has been doing some code for us and one of their junior developers
produced a JavaScript switch statement that looked like this...

```JavaScript
var input = 5

switch (input) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
        //Do Something!!
    break;
    case "6":
    case "7":
}
```

Gobsmacking, literally insane. And the sad thing is I've not been able to chat to
the junior and discuss their code with them. Then a few days later one of my
juniors wrote a PHP switch statement that began...

```php
switch (true) {
    case $this->object instanceof SomeClass:
        //Do Something
    break;
    //etc, etc...
```

I don't want to embarrass the junior because they're great, super smart, but
what was their excuse? "I found the code on StackOverflow..." So I, and two of the
seniors, had to explain how switch statements work and not to ever mindlessly copy
and paste stuff off StackOverflow...     

As senior developers we need to put things in perspective, particularly in the
PHP community right now. Beyond actually coding stuff, the day job, the primary
focus of senior developers should be to educate and guide junior developers.
This means two things, teach the basics, the real basics, and encourage juniors
to learn, to self teach.

What do the basics look like? Use the Command Line over a GUI tool, write out
MySQL in the CLI so you learn it, don't just config in Workbench or something.
Use a simple text editor for a few years, not a super powerful IDE, do the wax
on wax off. Write short, simple methods, minimise control structures, add some
comments. Test things, be careful when you deploy something, make backups, don't
hot fix on the server... etc...

As a senior you won't always have the time, and occasionally you won't have the capability,
to explain the really complicated stuff. So focus on the basics and encourage juniors
to learn themselves, but don't define who to learn from or who to follow or who to respect.
This is not only wrong, but leads to the mindless bickering we see a lot of currently.

A couple years ago I saw a great talk by [Marco Pivetta](https://twitter.com/ocramius) on [Extremely Defensive PHP](https://ocramius.github.io/extremely-defensive-php/#/),
it's brilliant, so good in my opinion that I share it with most of the junior developers
I meet or work with. But I also recently shared [Rob Allen's](https://twitter.com/akrabat) talk on [building APIs](https://www.youtube.com/watch?v=L9oR4U2nVhQ),
and I've always encouraged people to watch [Jeffrey Way's](https://twitter.com/jeffrey_way) [Laracasts](https://laracasts.com/). Doing this
doesn't mean I think Marco, Rob or Jeffrey are perfect, that they're always right,
that they never make mistakes. I have no idea which one of them is the better developer,
like I have no idea which one of them is the better cook. It just means they've created some interesting, helpful content that may teach you something.

Code is like philosophy, you should read as much of it
as possible, from as many sources as possible, regardless of whether you agree with it
or not. Me personally, I prefer capitalism over communism, would I ever say read
Hayek but not Marx, no! That would be idiotic, read both, they were both intelligent
people, they both have interesting ideas and you can make your own mind up on who
you prefer.

Ultimately senior developers arguing with other senior developers about dependency
injection or polymorphism or interface segregation is completely pointless. It
won't achieve anything. As senior developers we need to focus on helping and guiding
junior developers. And it will do the PHP community some good if we focus on this for
a while rather than bickering about those angels.

Because as Socrates said, "Shit if I know..." **

<small>* Personally I didn't agree with Jeffrey's position on Type Hinting, however I
think the reaction was unnecessary and over the top. Generally I just thought he
articulated an idea poorly, no need to hang him.</small>

<small>** He didn't really say that... But it was along those lines... Look up Socrates
and the Oracle of Delphi...</small>
