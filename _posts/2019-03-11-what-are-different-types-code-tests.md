---
layout: post
title: "What are the Different Types of Code Tests"
description: "There are three different test types, unit, integration and functional, and they can all be run using PHPUnit."
tags: [tdd, tests, unit tests, integration tests, functional tests, code tests]
published: true
---

I've been writing code tests for four years and recently I gave a talk on Test Driven Development at PHP UK 2019. You could say I've fallen in love with tests, or at least I really appreciate the improvements they have *driven* in my code.

One thing I've struggled with though is the definition of the different types of code tests you can run as a PHP developer. I think other developers also struggle with this and often it leads to confusion and problems. So to remedy this slightly I'm going to note down the differences between the various test types along with some notes, theory and tips. This is my view on the topic and you may find other people disagree or have different definitions, but I hope it helps.

There are three different test types, unit, integration and functional, and they can all be run using [PHPUnit](https://packagist.org/packages/phpunit/phpunit).

## Unit Tests

I began to 'truly' understand unit tests about three years ago after I screwed up my first proper test suite. Unit tests have three main characteristics:

- They are fast.
- They focus on business logic.
- They don't deal with Input / Output.

In essence unit tests only check small amounts of code and logic. They don't interact with things like databases nor file systems. And they help us comply with one of the core principles of business logic design.

> Business logic doesn't care where data comes from nor where it goes.

This leads us on to the topic of test isolation. Many developers believe unit tests should be isolated and only test one thing, they should not test the boundaries between different *units of code*. A *pure* isolated test would test a class or method with no dependencies, or boundaries.

In the [code example](https://3v4l.org/6ghsY) below we see two classes, Bar and Foo. Bar is an isolated class, it has no dependencies, whereas Foo has a dependency of Bar and is therefore non-isolated.

```php
/**
 * Isolated code
 */
class Bar
{
    public function add(int $numOne, int $numTwo): int
    {
        return $numOne + $numTwo;
    }
}

/**
 * Non-Isolated code
 */
class Foo
{
    private $bar;

    public function __construct(Bar $bar)
    {
        $this->bar = $bar;
    }

    public function addFive(int $base): int
    {
        return $this->bar->add($base, 5);
    }
}
```

To test the Foo class in an isolated way, we could mock the Bar class. We will then have removed the Bar class from our test and isolated our tests on the Foo class. This though is where the topic of isolation becomes fuzzy, because in this scenario it would be ridiculous to mock something as small as the Bar class.

Test isolation is important as it focuses your tests on the business logic contained within the relevant unit of code, but please apply it on a case by case basis. If you apply it everywhere you will end up with a lot of unnecessary mocks and stubs.

To summarise, a unit test is small and focussed on business logic only. But if we follow this definition of 'unit tests' we will struggle to fully test anything beyond a [simple library](https://github.com/RobDWaller/ReallySimpleJWT/tree/master/tests). When we build applications we need different types of tests to make sure we achieve complete test coverage.

## Integration and Functional Tests

This is where integration and functional tests come in. Integration tests are similar to unit tests, but they test how code interacts with services, such as a database or the file system. By their nature they are non-isolated tests as they will interact with many objects and at least one service.

Functional tests take this a step further as they test how a piece of functionality works as a whole. The difference between a functional test and an integration test is a functional test sits *outside* the application and an integration test sits *inside* an application. So a functional test will test a web form or API endpoint whereas an integration test will test a code call to a database.

Because integration and functional tests interact with databases and other services they are more costly to run. For example you may have to create, seed and drop a database multiple times to complete a single test cycle. As a result it's sensible to separate them from your unit tests and run them less often so they don't slow project progress. Good times to run them may be when code is pushed to a repo, a pull request is created, or a build occurs, whatever works best for you, your team and your application.

## The Test Pyramid

Another consequence of the increased cost is you write fewer integration and functional tests. This makes sense as you are testing larger aspects of your application with a smaller surface area. These cost and quantity principles are well highlighted in the Test Pyramid diagram.

![Test Pyramid](/assets/img/testing-pyramid.jpg)

As can be seen as you move up the pyramid the cost of the tests increase and the quantity you write decreases. If you are writing more functional and integration tests than unit tests something is wrong with your testing strategy.

## Fuzziness

One of the most important things to remember about unit, integration and functional tests is they all test different aspects of your application. This can be confusing sometimes as the boundaries between the different types of tests are fuzzy. And you will end up testing the same aspect of your application in three different ways. For example, in a unit test you may stub a database response, in an integration test you may test a database call, and if you write a functional test you may retrieve data from the database.

You must remember though you are doing three very different things:

- Unit Tests: Assess your business logic, or how you process data and information.
- Integration Tests: Assess how your code interacts with services, will the SQL statement return the right data?
- Functional Tests: Assess how your application surfaces information, if I pass X to the API will I see Y JSON?

At each level you are asking very different questions of your application. So none of these tests are mutually exclusive. Just because you have written unit tests for a part of your application it does not mean you should not write integration or functional tests that cover the same part of the application.

![Test Circles](/assets/img/testing-circles.jpg)

The above diagram helps to highlight where the different tests sit. As can be seen unit and integration tests sit inside your application and test the innards, where as functional tests wrap around your application and test its interfaces.

## Conclusion

To conclude, this post simply highlights the three different types of test a PHP developer may write and how they differ. It does not cover End to End tests or User Interface tests, please don't confuse either of these with functional tests... ;)

I hope this post is useful and if you have any questions drop me a message [@RobDWaller](https://twitter.com/robdwaller).




                                                                                              
