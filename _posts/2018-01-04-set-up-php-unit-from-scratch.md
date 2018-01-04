---
layout: post
title: 'Set Up PHPUnit From Scratch'
published: true
description: "Writing unit tests with PHPUnit is a great way to improve your code and your applications, learn how to set it up from scratch."
tags: [testing, tests, unit tests, phpunit, php]
---
Writing unit tests with [PHPUnit](https://phpunit.de) is a great way to improve your code and your applications. With many modern PHP frameworks, like Laravel, PHPUnit comes built in so writing and running tests is really easy.

Sometimes though you won't need or want to run a framework like Laravel as you are writing a simple app that doesn't need all that 'functionality'. However it's always sensible to write unit tests to check your application logic. Without a framework this will mean you need to setup PHPUnit from scratch.  

Sadly there isn't a great deal of good documentation on how to do this, so I'm going to note down how to do it for my own reference and yours.

First you will need to install PHPUnit by adding it to your `composer.json` file. Remember always add it to `require-dev` as there is no need for PHPUnit to exist or run in production.

```js
"require-dev": {
    "phpunit/phpunit": "~6.0",
    "mockery/mockery": "~1.0"
}
```

You can also add in a mocking tool like [Mockery](http://docs.mockery.io/en/latest/) if you wish to extend the capability of your tests. Once you have installed PHPUnit by running `composer install` or `composer update` you will need to configure it by creating a `phpunit.xml` file. An example configuration is shown below.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit
     backupStaticAttributes="false"
     bootstrap="./vendor/autoload.php"
     cacheTokens="false"
     colors="true"
     convertErrorsToExceptions="true"
     convertNoticesToExceptions="true"
     convertWarningsToExceptions="true"
     forceCoversAnnotation="false"
     mapTestClassNameToCoveredClassName="false"
     processIsolation="false"
     stopOnError="false"
     stopOnFailure="false"
     stopOnIncomplete="false"
     stopOnSkipped="false"
     verbose="false">
    <testsuites>
        <testsuite name="Testing Example">
            <directory>./tests</directory>
        </testsuite>
    </testsuites>
</phpunit>
```

There are two important configuration options.

- `bootstrap="./vendor/autoload.php"` defines how to autoload files and classes. You will usually use the built in composer autoloader.
- `<directory>./tests</directory>` defines where your test files will exists. This will not always be the `./tests` directory but usually it is.

Finally you will need to create a test file `./tests/ExampleTest.php` to check it all works.

```php
<?php

namespace Tests;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    public function testExample()
    {
        $var1 = true;

        $this->assertTrue($var1);
    }
}
```

It's relatively stright forward, you just extend the PHPUnit `TestCase` class and write a test function `testExample` including an [assertion](https://phpunit.de/manual/current/en/appendixes.assertions.html). Note, all test functions must begin with the keyword `test`.

Finally you can run `vendor/bin/phpunit` and you should see the following output...

```shell
PHPUnit 6.5.5 by Sebastian Bergmann and contributors.

.                                                                   1 / 1 (100%)

Time: 132 ms, Memory: 4.00MB

OK (1 test, 1 assertion)
```

Simple, I hope this helps. If you have any questions or pointers message me on Twitter [@RobDWaller](https://twitter.com/robdwaller).
