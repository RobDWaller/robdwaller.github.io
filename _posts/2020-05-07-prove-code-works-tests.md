---
layout: post
title: "Prove Your Code Works: Tests"
description: ""
tags: [code quality, documentation, tests, code analysis]
published: false
---
Tests are one of the most important ways to prove your code works. They enable observability and provide a guarantee the code will work as expected. In general they are a professional approach to software development. 

Software tests are a vast and complex subject, made up of many different types of tests such as Unit Tests, Integration Tests, Behavioral Tests, etc, etc. Even the Test Pyramid diagram fails to provide an adequate overview of everything involved.

<img src="/assets/img/testing-pyramid.jpg" alt="Testing Pyramid">

Due to the complexity of the subject this post will focus on only three aspects of testing, Unit Tests, Code Coverage and Mutation Tests. 

## Unit Tests

Unit Tests are the basis of software testing as the majority of the tests a developer will write will be Unit Tests. 

But how do we define a Unit Test? Essentially a Unit Test is a small test which tests an equally small amount of business logic. A suite of Unit Tests should run quickly as they should only test isolated code. And while the line between Unit Tests and Integration Tests is blurry Unit Tests should never test frameworks, dependencies or IO. 

<img src="/assets/img/application-structure.jpg" alt="Unit Tests and Application Structure">

The primary aim of Unit Tests is to ensure your core business logic functions as expected, prove it works. And this is achieved through the isolation of code, so each part can be proven to work independently of anything.

There are two basic rules to follow to achieve code isolation.

> 1. **A** should not know about **B**.
> 2. If **A** uses **B** it should not know where **B** came from or where **B** is going.

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

Unit Tests are relatively pointless without what we might refer to as 'Comprehensive Observability'. To achieve this we need to prove two things:

1. There are enough Unit Tests.
2. The Unit Tests work.

We achieve the first by generating Code Coverage scores and reports. For those who have not heard of code coverage before in very simple terms it simply calculates how much of your code is covered by tests.

As this [example](https://codecov.io/gh/RobDWaller/ReallySimpleJWT/src/master/src/Validate.php#L32) shows a code coverage report highlights in green which lines of code have been covered by tests. The lines highlighted in red are not covered by tests. 

<img src="/assets/img/code-coverage-2.jpg" alt="Code Coverage Example">

Code Coverage scores and reports are useful because they instantly provide project observability. They prove the code has Unit Tests and in principle prove the code works.

There is some controversy over Code Coverage scores and reports. Some developers don't believe they present value as the scores can be gamed. As in you can achieve 100% Code Coverage without properly testing your code. 

This is possible but for me this is a straw man and doesn't present a reasonable argument against Code Coverage. In essence it argues developers approach software development in bad faith. If developers refuse to test code properly or are unable to test code properly then you have a serious organisational problem. The issue does not lie with Code Coverage scores or the pursuit of higher Code Coverage scores.

Ultimately a Code Coverage score of 80%-100% should be seen as a start point, not an end in itself. It is just one part of a process whereby you prove your code works.

## Mutation Tests

As an extension of Code Coverage and as a way to prove our Code Coverage scores represent value and we can prove "The Unit Tests work" we can run Mutation Tests.

Also known as Fault Injection, Mutation Tests are a means to stress test your Unit Tests. They work by injecting faults into your code and see if your Unit Tests fail. Test which fail are classified as capturing the 'Mutant' and test which continue to pass are classified as letting the 'Mutant' escape.

As an example lets say we wrote the following PHP pseudo code and test.

```php
function hasADozenEggs(int $eggs): bool
{
    return $eggs > 11;
}

function testHasADozenEggs(int $eggs): bool
{
    $eggs = 15;

    assert(hasADozenEggs($eggs));
}
```

If we ran mutation tests against this code it would generate many mutants which highlight the flaws in our test suite. For example the following mutants will continue to pass our test:

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

A good mutation score will provide reassurance your project has a comprehensive test suite which represents real value. It helps developers root out the edge cases in their code which will surface as bugs. There is almost no better way to prove your code works than a decent mutation score.

## Overview

This post does not pretend to cover the topic of software tests completely. Neither does it suggest you can prove you code will work without fault 100% of the time. What it does do though is suggest Unit Tests, Code Coverage and Mutation Tests will set you upon the professional development path. They will give you confidence in your code, provide observability and present a lot of evidence your code does work.

I hope you found this post useful and if you have any questions or feedback please drop me a message on Twitter @RobDWaller.

