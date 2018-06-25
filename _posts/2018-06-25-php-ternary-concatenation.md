---
layout: 'post'
title: "Oddities With PHP Ternaries and String Concatenation"
description: "In PHP ternaries break down when you insert them in string concatenation code."
published: true
tags: [php, concatenation, ternary, strings]
---
Ternaries are a simple programming concept that make writing 'if else' statements more efficient. They are made up of three parts, hasten the term ternary which means 'composed of three parts'.

The structure is as follow:

```
query ? true result : false result;
```

Most developers will have seen one in action and they look like this in PHP:

```php
/**
 * Check if a sting matches foo and return a message.
 */
public function isFoo(string $word): string
{
    return $word === 'foo' ? 'It is foo.' : 'It is not foo.';
}
```

This is all very simple. In the example above we check if a string variable equals `foo`. If it does we return the string `It is foo.`, and if it does not match we return `It is not foo.`.

In PHP ternaries break down when you insert them in string concatenation code. In the following example we'd expect the result to return `This is the word foo, it is the best word.` if we input `foo`:

```php
public function concatenateString(string $word): string
{
    return 'This is the word ' .
        $word . ', ' .
        $word === 'foo' ? 'it is the best' : 'no-one cares about this' .
        ' word.';
}
```

Instead we get the following result `no-one cares about this word.`. For some reason the ternary not only doesn't work, but it also breaks the string concatenation too.

The reason this occurs is because of the way PHP processes the string concatenation. Essentially we need to tell PHP to execute ternary before it attempts to concatenate the strings, otherwise it will get itself in a muddle.

We do this by placing parentheses around the ternary, this tells PHP to execute the ternary first:

```php
public function concatenateString(string $word): string
{
   return 'This is the word ' .
       $word . ', ' .
       ($word === 'foo' ? 'it is the best' : 'no-one cares about this') .
       ' word.';
}
```

When we do this and pass in the word `foo` we get the expected result, `This is the word foo, it is the best word.`.

Once again, as in my post on [strict types](http://rbrt.wllr.info/2018/04/20/how-php-type-declarations-work.html), PHP is full of little oddities like this that may trip you up.

I hope this helps and if you have any questions drop me a message on Twitter [@RobDWaller](https://twitter.com/RobDWaller).
