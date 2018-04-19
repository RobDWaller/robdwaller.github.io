---
layout: 'post'
title: 'How PHP Type Declarations Actually Work'
description: "There are two important caveats to the type declarations introduced in PHP 7 that developers should be aware of."
published: true
tags: [php, type declarations, type hints, return types]
---

Type declarations are a simple programming concept that lots of developers use on a daily basis. In the [code example below](https://3v4l.org/PJOaL) we see a basic method that uses type declarations. The method places a string type hint on the $foo parameter and a string return type on the method itself.

```php
function bar(string $foo): string
{
    return $foo;
}

$result = bar('Hello');

var_dump($result);

// Output: string(5) "Hello"
```

These [type declarations](https://en.wikipedia.org/wiki/Declaration_(computer_programming)) tell us two things about the method. It accepts one string argument and it will return a string. In a strictly typed language like Go if the `bar()` method is called and an integer argument is passed in, eg 123, an error will occur. The code will also error if the method returns something other than a string for some reason.

Type declarations serve two basic purposes in code:

- **Low-level data / code integrity:** it is more difficult to misuse methods and type checking is reduced.
- **Code readability:** it is clearer what a method accepts and what it will return.

PHP has historically been a weakly typed language. Type declarations were only introduced in PHP 5, and in a limited form. Full type declarations and strict types did not appear until PHP 7's release in 2015.

PHP 7 was an exciting step forward for those of us who like the concept of type declarations and strictly typed code. There are though two important caveats to the type declarations introduced in PHP 7 that developers should be aware of.

## PHP 7 is a Weakly Typed Language

By default PHP 7 remains a weakly typed language. This may seem counterintuitive given the introduction of full type declarations and strict types. But it was decided to aid backwards compatibility that type declarations would not be forced on PHP code. Developers can turn strict types on using the internal `declare(strict_types=1);` method at the top of a PHP file.

This implementation means that PHP will 'ignore' type hints and return types unless the `declare(strict_types=1);` method appears at the top of the file. This makes some sense as there is a lot of legacy PHP code still in use and developers should be able to upgrade to the latest version of PHP without rewriting their entire codebase.

This approach does have some consequences though. If a developer defines type declarations but does not add `declare(strict_types=1);` to the start of the file PHP will use type coercion to make things work. Type coercion basically means a value of one type will be cast to a value of another type when required. This is less than ideal when using type declarations as methods may not function as expected.

As [an example](https://3v4l.org/EGpLn), if we edit our 'foo bar' code from above we'll see the type coercion at work. The bar method will now have an integer type hint on the `$foo` parameter and a string return type on the method. When we call the bar method with an integer argument of 123 the method will return 123 as a string. This is because type coercion has converted the integer value to a string value to comply with the defined return type.

```php
function bar(int $foo): string
{
    return $foo;
}

$result = bar(123);

var_dump($result);

// Output: string(3) "123"
```

It's only when we add `declare(strict_types=1);` to the [top of the PHP file](https://3v4l.org/dtYQ9) that the type declarations are imposed.

```php
declare(strict_types=1);

function bar(int $foo): string
{
    return $foo;
}

bar(123);
```

Now when we call the bar method with an integer argument of 123 we get an error. This is because the method expects to return a string but it is attempting to return an integer. Strict types have been imposed on the method and the following error is outputted.

```
FATAL ERROR Uncaught TypeError: Return value of bar() must be of the type string, integer returned
```

## Strict Types Are Imposed on a File by File Basis

The other caveat to be aware of is strict types have to be imposed on a file by file basis, they cannot be applied globally. This means you have to place `declare(strict_types=1);` in every file where you want strict types to be imposed. Again this has been done to help backwards compatibility, but it means you cannot easily impose strict types across an application.

To show this in action let's look at another example. Imagine we have a small application that pulls in two functions from two separate files, `foo.php` and `bar.php`. We'll add a `declare(strict_types=1);` to the top of the application file just to prove it has no effect on the files pulled in. Also we'll place the methods we call inside a try catch to handle any errors that are thrown.

```php
/**
 * This declares strict types but has no effect on the code.
 */
declare(strict_types=1);

/**
 * Call in the foo.php and bar.php files.
 */
require __DIR__ . '/../src/foo.php';
require __DIR__ . '/../src/bar.php';

try {
    /**
     * This method will output a string 123.
     */
    var_dump(foo(123));

    /**
     * This method will throw an error.
     */
    var_dump(bar(123));

} catch (Error $e) {

    /**
     * Print out the error message thrown by the bar(123) method
     * "Return value of bar() must be of the type string, integer returned"
     */
    echo $e->getMessage() . PHP_EOL;
}
```

In the foo file we'll have a foo method that accepts an integer and returns a string. In this file there will be no `declare(strict_types=1);`.

```php
function foo(int $bar): string
{
    return $bar;
}
```

In the bar file we'll have a bar method that also accepts an integer and returns a string. This time though we'll have a `declare(strict_types=1);` at the top of the file.

```php
declare(strict_types=1);

function bar(int $foo): string
{
    return $foo;
}
```

When we call the `foo(123)` and `bar(123)` methods respectively we'll get some very different output. The foo method will return a string so we'll see an output of `string(3) "123"`. By contrast the bar method will throw an error because strict types have been imposed. We'll see an error message outputted, `Return value of bar() must be of the type string, integer returned`. This example shows strict types can be both on and off in the same application.

## The Consequences

I don't wish to get into the rights and wrongs of PHP's approach to type declarations, smarter people than I have designed and implemented them. But the consequences of this approach should be obvious. The most important being PHP's type system cannot be trusted. And this means low level integrity errors can slip into code unless you are meticulous with `declare(strict_types=1);` statements.

It also means you should be careful when testing code. For instance when unit testing with [PHPUnit](https://phpunit.de/manual/6.5/en/appendixes.assertions.html#appendixes.assertions.assertSame) you should use `assertSame()` instead of `assertEquals()`. This is because `assertSame()` checks value and type where as `assertEquals()` only checks value. And if you want to ensure code integrity you need to check type as well as value.

Type declarations are a big step forward for PHP and I believe all PHP developers should use them whether `declare(strict_types=1);` is on or off. It is though important that PHP developers understand how they work as misunderstanding PHP's type system will lead to bugs and will have negative effects on your applications.

For more information on PHP's type system I suggest you [read the RFC](https://wiki.php.net/rfc/scalar_type_hints_v5) on PHP scalar type declarations.
