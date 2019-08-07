---
layout: post
title: "How to Unit Test WordPress"
description: "WP_Mock is an extension of PHPUnit which makes WordPress specific testing functionality available."
tags: [wordpress, tests, unit test, php unit, wp mock]
published: true
---
Applying modern PHP development principles like unit tests to WordPress may seem like an impossible task. WordPress and much of its ecosystem lives in a different world to [Composer](https://getcomposer.org/), [PHPUnit](https://packagist.org/packages/phpunit/phpunit), [CodeSniffer](https://packagist.org/packages/squizlabs/php_codesniffer) and many of the other tools modern PHP developers like to use. WordPress has little interest in them and [does not wish to promote](https://wordpress.org/about/philosophy/) these tools to its community. But just because WordPress works differently to the rest of the PHP community it does not mean we cannot apply modern development principles like units tests.   

In a [previous post](https://rbrt.wllr.info/2019/07/20/wordpress-docker-composer.html) I explained how to begin with Composer and [Docker](https://www.docker.com/) with WordPress. And to apply unit tests to WordPress code, particularly plugins code, you will need to become comfortable using Composer with WordPress. This post is based around a WordPress example plugin I built called [Atlantic City](https://github.com/RobDWaller/atlantic-city). It is my version of the famous [Hello Dolly plugin](https://en-gb.wordpress.org/plugins/hello-dolly/), but based on the song Atlantic City by Bruce Springsteen, and it was built using Test Driven Development principles.

The plugin is relatively simple, it contains one class, which includes an array of lines from the song Atlantic City and some business logic which randomly selects a line from the song and displays it in the WordPress admin. The plugin only makes three calls to WordPress functionality, there are two requests made to the `add_action()` method, and one to the `is_rtl()` method. Assuming you are familiar with WordPress development you will know that actions and filters are WordPress' version of events and commands. While the `is_rtl()` method asks whether WordPress is setup to display text from right to left or left to right.

Because of this integration with WordPress methods if we attempt to unit test the [AtlanticCity class](https://github.com/RobDWaller/atlantic-city/blob/master/src/AtlanticCity.php) we will get *function not found* errors, because PHPUnit will not have any knowledge of WordPress. So this is where [WP_Mock](https://packagist.org/packages/10up/wp_mock) comes in. It is an extension of PHPUnit, Mockery and Patchwork which makes WordPress specific testing functionality available.

First of all it allows us to easily mock / monkey patch WordPress functions:

```php
WP_Mock::userFunction('is_rtl', [
    'times' => 1,
    'return' => false
]);
```

This is very similar to tools like Mockery, you name the function call you wish to mock, then you say how many times you expect it to be called, and finally what the function should return.

WP_Mock also allows you to check whether an action or filter has been added:

```php
WP_Mock::expectActionAdded('admin_notices', [$atlantic, 'atlanticCity']);
```

This is useful because when you add actions and filters nothing happens directly, but you can test they exist and they are being used in the way you expect. In addition, with the `expectAction()`, `expectFilter()` and `onFilter()` methods you can mock and test what happens when specific actions and filters are fired by your code.

To use WP_Mock there is some custom setup you need to configure, you will need to set up a bootstrap file to initiate WP_Mock. This bootstrap file will then need to be referenced in your PHPUnit XML config file:

```php
// Add bootstrap="tests/bootstrap.php" to phpunit.xml.
// Add the following code to your tests/bootstrap.php file.

require_once __DIR__ . '/../vendor/autoload.php';

WP_Mock::bootstrap();
```

Also in your test files you will need to add your `setup()` and `tearDown()` methods:

```php
public function setUp(): void
{
    WP_Mock::setUp();
}

public function tearDown(): void
{
    WP_Mock::tearDown();
}
```

Once this is done you'll be good to go with unit tests in WordPress, you just make the standard PHPUnit call on the command line:

```
vendor/bin/phpunit
```

For more information on [WP_Mock](https://packagist.org/packages/10up/wp_mock) please read their documentation. Also take a look at the code for [Atlantic City](https://github.com/RobDWaller/atlantic-city) as it offers some boilerplate to begin using WP_Mock.

One final note, the Atlantic City plugin also shows you how to set up other useful code analysis tools such as CodeSniffer, [PHPMD](https://packagist.org/packages/phpmd/phpmd) and [PHPStan](https://packagist.org/packages/phpstan/phpstan). If you're familiar with PHPStan you may think it's impossible to run static analysis against WordPress code due to all the dodgy WordPress function calls. But PHPStan allows you to ignore errors, and if you ignore the function not found errors you can use PHPStan and gain all the other benefits of static analysis, such as type checks.

```yaml
# phpstan.neon config file.
parameters:
    ignoreErrors:
        - '#Function [a-zA-Z0-9\\_]+ not found\.#'
```

I hope all of this info helps you with your WordPress development. Good luck and If you have any questions drop me a message on Twitter [@RobDWaller](https://twitter.com/RobDWaller).
