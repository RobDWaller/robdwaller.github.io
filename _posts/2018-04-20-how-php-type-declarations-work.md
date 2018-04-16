---
layout: 'post'
title: 'How PHP Type Declarations Actually Work'
description: ""
published: false
tags: [php, type declarations, type hints, return types]
---

Type declarations are a simple programming concept that lots of developers use on a daily basis. In the code example below we see a basic method that uses type declarations. The method places a string type hint on the $foo parameter and a string return type on the method signature itself.

```
<?php

function bar(string $foo): string
{
    return $foo;
}

$result = bar('Hello');

var_dump($result);

// Output: Hello
```

These type declarations tell us two things about the method. It accepts one string argument and it will return a string. In a strongly typed language like Go if the `bar()` method is called and an integer argument is passed in, eg 123, then an error will occur. The code will also error if the method returns an integer instead of a string for some reason.

Type declarations serve two basic purposes in code:

- **Low-level data / code integrity:** it is more difficult to misuse methods and type checking is reduced.
- **Code readability:** it is clearer what a method requires and what it will return.

PHP has historically been a weakly typed language. Type declarations were only introduced in PHP 5, and in a limited form. Full type declarations and strong typing did not appear until PHP 7 in 2015. PHP 7 was an exciting step forward for those of us who like the concept of type declarations and strongly typed code.

There are though two important caveats to the type declarations introduced in PHP 7 that developers should be aware of.

## PHP 7 is a weakly typed language

By default PHP 7 is a weakly typed language. This may seem counterintuitive given the introduction of full type declarations and strong typing. It was decided to aid backwards compatibility that type declarations would not be forced on PHP code. Developers could turn strong typing on using the internal `declare(strict_types=1);` method at the top of a PHP file.

This implementation means that PHP will 'ignore' type hints and return types unless the `declare(strict_types=1);` method appears at the top of the file. This makes some sense as there is a lot of legacy PHP code still in use and developers should be able to upgrade to the latest version of PHP without rewriting their entire codebase.

This approach does have some consequences though. If a developer defines type declarations but does not call `declare(strict_types=1);` PHP will use type coercion to make things work. Type coercion basically means values of one type will be cast to a value of another type when required. This is less than ideal when using type hints and return types.

As an example, if we edit our foo bar code from above we'll see the type coercion at work. The bar method will now accept one integer argument and return a string. When we call `bar();` with an integer argument of 123 the method will return 123 as a string. This is because type coercion has converted the integer value to a string value.

```
<?php

function bar(int $foo): string
{
    return $foo;
}

$result = bar(123);

var_dump($result);

// Output: '123' as a string
```

It's only when we add `declare(strict_types=1);` to the top of the PHP file that the type declarations are imposed.

```
<?php

declare(strict_types=1);

function bar(int $foo): string
{
    return $foo;
}

$result = bar(123);

var_dump($result);

// Output: '123' as a string
```

Now when we call the bar method with an integer argument of 123 we'll get an error. This is because the method expects to return a string but it is attempting to return an integer. Strict typing has been imposed on the method and the following error is outputted.

```
FATAL ERROR Uncaught TypeError: Return value of bar() must be of the type string, integer returned
```


## Strong typing is file based
