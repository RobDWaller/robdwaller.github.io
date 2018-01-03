---
layout: post
title: 'Set Up PHP Unit From Scratch'
published: false
description: "It's always sensible to write unit tests to test your application logic but this may mean you need to setup PHP Unit from scratch."
tags: [testing, tests, unit tests, phpunit, php]
---
Writing unit tests is a great way to improve your code and your applications. With many modern PHP frameworks, like Laravel, PHP Unit comes built in so writing and running tests is really easy.

Sometimes though you wont need or want to run a framework like Laravel as you are writing a simple app that doesn't need all that 'bloat'. However it's always sensible to write unit tests to test your application logic but this may mean you need to setup PHP Unit from scratch.  

There isn't a great deal of good documentation on how to do this, so I'm going to note down how to do it for my own reference and yours.

First you will need to install PHP Unit by adding it to your `composer.json` file. Remember always add it to `require-dev` as there is no need for PHP Unit to exist or run in production.

```js
"require-dev": {
    "phpunit/phpunit": "~6.0",
    "mockery/mockery": "~1.0"
}
```

You can also add in a mocking tool like Mockery if you wish to extend the capability of your tests. Once you have installed PHP Unit by running `composer install` or `composer update` you will need to configure it by creating a `phpunit.xml` file. An example configuration is shown below.

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
- `<directory>./tests</directory>` defines where your test files will exists. This may not always be the `./tests` directory.

Finally you will need to create a test file `./tests/ExampleTest.php`.

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

`vendor/bin/phpunit`

```shell
PHPUnit 6.5.5 by Sebastian Bergmann and contributors.

.                                                                   1 / 1 (100%)

Time: 132 ms, Memory: 4.00MB

OK (1 test, 1 assertion)
```
