---
layout: post
title: "Prove Your Code Works: Tests"
description: "Tests are one of the most important ways to prove your code works, they enable observability and provide a guarantee code will work as expected."
tags: [code quality, documentation, tests, code analysis]
published: true
---
Tests are one of the most important ways to prove your code works, they enable observability and provide a guarantee code will work as expected. In general they are a professional approach to software development. 

Software tests are a vast and complex subject, made up of many different types of tests, such as Unit Tests, Integration Tests, Behavioral Tests, and many more. The Test Pyramid provides a useful overview of the subject but does not capture everything involved.

<img src="/assets/img/testing-pyramid.jpg" alt="Testing Pyramid">

Due to the complexity of the subject this post will focus on only three aspects of testing, Unit Tests, Code Coverage and Mutation Tests. It is felt these topics present the most value in terms of professionalism and proving code works.

## Unit Tests

Unit Tests are the basis of software testing as the majority of the tests a developer will write will be [Unit Tests](https://phpunit.de/). But how do we define a Unit Test? 

A Unit Test is a small test which tests an equally small amount of business logic. A suite of Unit Tests should run quickly as they only test isolated code. And while the line between Unit Tests and Integration Tests is blurry Unit Tests should never test frameworks, dependencies or Input / Output. 

<img src="/assets/img/application-structure.jpg" alt="Unit Tests and Application Structure">

The primary aim of Unit Tests is to ensure your core business logic functions as expected so you can prove it works. And this is achieved through the isolation of code, so each part can be proven to work independently of anything else.

There are two basic rules to follow to achieve code isolation.

> 1. **A** should not know about **B** or **C** or anything else.
> 2. If **A** uses **B** it should not know where **B** came from or where **B** is going.

In essence code should not know where it is run and it should not know whether the data it processes came from the database or is going to the filesystem. 

To provide a code example:

```php
/** 
 * Code is not isolated at all as it mixes IO with Business Logic.
 */
function fileHasLotsOfContent(): bool
{
    $content = file_get_contents("https://www.google.com/");
    return strlen($content) > 20000;
}

var_dump(fileHasLotsOfContent());

/** 
 * Code is still not isolated as it still mixes IO with Business Logic.
 */
function fileHasLotsOfContent(string $filename): bool
{
    $content = file_get_contents($filename);
    return strlen($content) > 20000;
}

var_dump(fileHasLotsOfContent("https://www.google.com/"));

/** 
 * Code is now isolated and can be easily Unit Tested.
 */
function fileHasLotsOfContent(string $content): bool
{
    return strlen($content) > 20000;
}

var_dump(fileHasLotsOfContent(file_get_contents("https://www.google.com/")));
```

As this example shows the first two implementations of the function `fileHasLotsOfContent` are not isolated, but the third one is as it removes all reference to IO, in essence A no longer knows about B. Once isolation has been achieved the code can be more easily Unit Tested and bugs can be discovered and fixed. Many developers find Unit Tests difficult or costly to implement, and this is usually because they fail to isolate the code under test.

Projects with isolated code covered by a comprehensive Unit Test Suite are professional in nature as they are more likely to work as expected.

## Code Coverage

Unit Tests are relatively pointless without what we might refer to as 'Comprehensive Observability'. To achieve this we need to answer two question:

1. Are there enough Unit Tests?
2. Do the Unit Tests work?

We achieve the first by generating [Code Coverage](https://codecov.io/) scores and reports. For those who have not heard of Code Coverage before it is, in very simple terms, a calculation of how much code is covered by tests.

As this [example](https://coveralls.io/builds/26689821/source?filename=src/Bundle/JoseFramework/Services/HeaderCheckerManager.php#L39) shows a Code Coverage report highlights in green which lines of code have been covered by tests. The lines highlighted in red are not covered by tests. 

<img src="/assets/img/code-coverage-2.jpg" alt="Code Coverage Example">

Code Coverage scores and reports are useful because they instantly provide project observability. They prove the code has Unit Tests and in principle prove the code works. They also highlight where you need to improve your test suite.

There is some controversy over Code Coverage scores and reports. Some developers don't believe they present value as the scores can be gamed. As in you can achieve 100% Code Coverage without properly testing your code. 

This is possible, but it is a straw man and doesn't present a reasonable argument against Code Coverage scores. In essence it argues developers approach software development in bad faith. If developers refuse to test code properly or are unable to test code properly then you have a serious organisational problem. The issue does not lie with Code Coverage scores or the pursuit of higher Code Coverage scores.

Ultimately a Code Coverage score of 80%-100% should be seen as a start point, not an end in itself. It provides a guide which helps you ensure you have enough tests to provide a guarantee your code will function as expected.

## Mutation Tests

As an extension of Code Coverage and as a way to prove our Code Coverage scores represent value and  prove "The Unit Tests work" we can run [Mutation Tests](https://infection.github.io/guide/), also known as Fault Injection.

Mutation Tests are a means to stress test your Unit Tests and they work by injecting faults into your code to see if your Unit Tests fail. Test which fail are classified as capturing the 'Mutant' and test which continue to pass are classified as letting the 'Mutant' escape. Tests which pass in this scenario are seen as bad.

As an example lets say we wrote the following PHP pseudo code and test.

```php
function hasADozenEggs(int $eggs): bool
{
    return $eggs > 11;
}

function testHasADozenEggs(int $eggs): bool
{
    $eggs = 15;

    assertTrue(hasADozenEggs($eggs));
}
```

If we ran mutation tests against this code it would generate many mutants which highlight the flaws in our test suite. For example the following code changes will continue to pass our test, and the mutants will escape:

```php
// This mutant adds 1 to our check.
function hasADozenEggs(int $eggs): bool
{
    return $eggs > 12;
}

// This mutant amends the operator in our check.
function hasADozenEggs(int $eggs): bool
{
    return $eggs >= 11;
}
```

To fix this issue we'd need to write some Unit Tests which fail when these mutants are generated. For example we could fix the operator mutant with the following test:

```php
// Ensures there is greater than 11 eggs.
function testHasADozenEggsFail(int $eggs): bool
{
    $eggs = 11;

    assertFalse(hasADozenEggs($eggs));
}
```

Mutation scores are measured out of 100, and a good score will provide reassurance your project has a comprehensive test suite which represents real value. It helps developers root out edge cases in their code which will surface as bugs. And it will help ensure breaking changes are highlighted by the test suite. There is almost no better way to prove your code works than a good mutation score, but it relies on well written Unit Tests and good Code Coverage.

## Overview

This post does not pretend to cover the topic of software tests completely. Neither does it suggest you can prove you code will work without fault 100% of the time. What it does do though is suggest Unit Tests, Code Coverage and Mutation Tests will set you upon a professional development path. They will give you confidence in your code, provide observability and present a lot of evidence your code does work.

I hope you found this post useful and if you have any questions or feedback please drop me a message on Twitter [@RobDWaller](https://twitter.com/RobDWaller).

For more information on useful testing tools across various languages please take a look at my [code maintainability](https://rbrt.wllr.info/2020/03/26/code-maintainability-test.html) article.