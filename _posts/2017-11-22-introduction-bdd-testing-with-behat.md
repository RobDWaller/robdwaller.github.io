---
layout: post
title: "An Introduction to Automated Tests With Behat PHP"
published: true
description: "Behat is a PHP version of the well known testing tool Cucumber and it follows Behaviour Driven Development principles along with the Gherkin syntax."
tags: [Testing, Behat, PHP, BDD, Automation, Automated Testing, Linux]
---
Often when developing web applications you'll want to setup some automated tests. There are of course lots of well documented ways to setup automated unit, integration and functional tests using tools such as [PHPUnit](https://phpunit.de/) and [Codeception](http://codeception.com/). However, like me you may work in a team with a QA (Quality Assurance) and you may wish to empower them to configure some automated tests without having to write or understand too much code.

This is where [Behat](http://behat.org/en/latest/) comes in handy. Behat is a PHP version of the well known testing tool [Cucumber](https://cucumber.io/docs#cucumber-implementations) and it follows Behaviour Driven Development principles along with the [Gherkin syntax](https://github.com/cucumber/cucumber/wiki/Gherkin). If you'd like to understand more on BDD and Behat I'd suggest you watch [Ciaran McNulty's fantastic talk](https://www.youtube.com/watch?v=83GbyDpJDI4) on the subject.

In a nutshell Behat allows you to write and execute human readable tests. Here is an example of a Behat test...

```
Feature: Iterator class
    In order to keep a count
    As a user
    I need to be able to add integers to an iterator

    Rules:
        - the iterator will count by increments of 1

    Scenario:
        Given there is an iterator class with a count of 0
        When I add an increment to the iterator class
        Then the iterator class count will be 1
```  

This is pretty cool, right? It's even more readable than Codeception. There is of course a catch, which is that you need to write / code the underlying tests which Behat can then execute. These are known as 'step definitions' and are grouped into classes known as 'contexts'. Under the hood Behat converts the human readable commands into a method name it executes in the context class and then checks whether it passes or fails. An example step definition looks like this...

```
/**
 * @Given there is an iterator class with a count of :arg1
 */
public function thereIsAnIteratorClassWithACountOf($arg1)
{
    Assert::assertEquals($this->iterator->getCount(), $arg1);
}
```

You can see how the method name tallies with the Behat test above. As a developer using Behat may seem like overkill, essentially writing tests twice seems pointless. There are of course significant gains from the BDD process though.

Also If you have a QA it's a different matter as your QA is responsible for testing your product. It therefore makes sense that they write some tests. In addition, they play an important role with the Project Manager to ensure the product matches the client brief. Behat and BDD principles empower a QA to define tests that will ensure your product works as expected and matches your brief.

Also Behat has some cool features that allow QAs and developers to work well together. First off when the Behat tests are written and run for the first time Behat will output the method signatures that need to be implemented, as can be seen in this image.

![Behat Auto Signatures Output](/assets/behat-methods.png)

Behat therefore separates out the concerns of defining your product and the associated tests, and the implementation of the tests and code that passes these tests. Your QA and Project Manager can focus on the former and your developer can focus on the latter. This will have many benefits for your team and client relationship.

In addition, Behat can be extended with libraries such as [Mink](https://packagist.org/packages/behat/mink) and tools such as [Selenium](http://www.seleniumhq.org/) so you can run functional tests on the front end of your application. This becomes even better because Mink comes with built in contexts. This means a QA can begin writing functional tests without any help of a developer and very little knowledge of code.

I'd advise everyone to begin looking into Behat, automated testing and BDD as it will empower you team to build better more reliable products that match your client needs. In the sister post to this I explain how to set Behat and Selenium to run automated functional tests.  
