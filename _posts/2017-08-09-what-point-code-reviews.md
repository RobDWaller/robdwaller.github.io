---
layout: post
published: false
title: What's the Point of Code Reviews?
description: There is a great deal of fear and misunderstanding surrounding code reviews.
---
There is a great deal of fear and misunderstanding surrounding code reviews. This fear and misunderstanding is also a little chicken and egg, both exist because of the other.

Many developers, particularly Junior ones, are terrified by the idea of code reviews, "You're going to review my work?!! But it's not ready, I wasn't..." This fear exists because there is a view that the aim of code reviews is to censure bad work, or even fire people because of it. 

The first point to make about code reviews is that they are not about censuring anyone. If you're in a team where people are regularly critiqued or belittled during code reviews then you're doing it wrong, or maybe your managers are. People should and must not fear code reviews.

Also fix code

So what are the point of code reviews? The first part of the code review is a sanity check, which simply aims to resolve mistakes. Here's some example code...

```php
<?php

public function doSomething($var1)
{
    if (true) {
        return $var1 + 2;
    }
}
```