---
layout: post
published: true
title: What Are Code Reviews?
description: There is a great deal of fear and misunderstanding surrounding code reviews.
tags: [code reviews, communication, development, teams]
---
Code reviews, what are they? The answer to this question should be obvious. However there is a great deal of fear and misunderstanding surrounding code reviews. This fear and misunderstanding is also a little chicken and egg, both exist because of the other.

Many developers and development teams still don't do regular code reviews and I've experienced this many times during my career. This often means when developers, particularly junior ones, first experience code reviews they are terrified by the idea. "You're going to review my work?!! But it's not ready, I wasn't..." This reaction or view exists because developers often misunderstand the purpose of code reviews. And sometimes because code reviews are executed poorly.

There are two misconceptions regarding code reviews that require clarification. The first is that code reviews exist to censure bad work, and may even result in developers losing their jobs*.

This simply isn't the case, or it shouldn't be. If you're in a team where people are regularly critiqued or belittled during code reviews then you're doing it wrong, or maybe your managers are. People must not fear code reviews, they are meant to be a constructive process. All developers should embrace them.

The second misconception is that they exist to fix or refactor code. They don't, you cannot fix code in a review. It is neither the correct nor the appropriate place to do this. If code needs to be refactored it can be noted in a code review but there should be a specific meeting or conversation for it. Refactoring code is complicated and suggests something went wrong in the planning stage. You simply can't solve this problem in a code review, so don't bother.

What then are code reviews? To begin with, they are short, 5-10 minutes. If they go over 20 minutes something has gone wrong. They are regular, code reviews should occur every day. In my team they're one of the first things developers do in their day.

Code reviews are in the main just a sanity check, which simply aims to resolve basic mistakes. Here's some example code...

```php
<?php

public function doSomething($var1)
{
    if (true) {
        var_dump($var1);
        return $var1 + 2;
    }
}
```

We might raise the following issues with this code...

- 'if true' is an obvious mistake, it needs to be fixed.
- 'var_dump' is debug code, it should be removed.
- The method lacks any form of type hinting**.
- The method name is unclear, it should be more semantic.
- The parameter name is also unclear, it should be more semantic.
- The method has no comment.

All of the issues raised relate to code cleanliness and good practice, none of them relate to how the code works. The critical point though is all developers, whether junior or senior, make these mistakes all the time. If you make these mistakes you are not a bad developer. You simply fix them, move on, and aim not to make them again.

Most importantly though code reviews improve team communication and this has some important consequences. Developers will begin to discuss their code more, question and justify their approaches. It will even encourage developers to suggest new technology and solutions.

They also spread responsibility for work more widely. Individual developers are no longer solely responsible for the code they write. This relieves pressure on individual developers and means more developers are contributing to the final product.

As mentioned earlier code reviews don't and can't fix code. Combined though the increased communication and shared responsibility will lead over time to better code and better products.

The final point to make is code reviews are for everyone. They should never involve seniors just reviewing juniors, everyone should be reviewing everyone. No one is above a junior reviewing their code. The simple logic to this is a junior may learn something by reviewing a senior's code. And most likely they'll be able to find faults in the senior's code too.

If you and your team are not doing code reviews I strongly recommend you start.

<small>* I have technically fired someone because of a code review, but I'd emphasise it was the last straw rather than the only factor.</small>
<small>** I am one of those 'Visual Debt' ideologues... ;)</small>
