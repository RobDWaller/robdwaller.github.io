---
layout: post
title: 'Why You Must Always Test to Break'
published: false
description: ''
tags: [tests]
---
When building an application and writing code there are two types of test you can carry out to check things work. The first is 'test to work', these are tests that under normal conditions check your code works.

To take the example of a car, you might create a test that checks when you put the key in the ignition and turn it the engine starts.

```
Given there is a car with an ignition
When I insert a key
And turn the key
Then car's engine will start
```

Similarly with code you will write a unit test that checks when you pass an expected argument into a method that you are returned the value you expect. You write and carry out these tests to prove your application or car works.  

While 'test to work' is important and you should always write tests that prove your code works you must also 'test to break'. This is where you ask difficult and unexpected questions of your code and application. This is important because you can achieve 100% code coverage and very high path coverage by just writing 'test to work' tests. However 'test to work' does not guarantee your code works under all conditions.

To return to our car example, a 'test to break' test may read as follows. Insert a screwdriver into the ignition, twist it and wiggle it, the engine must not start. Another set of tests to break may ask what happens if I drive the car into a wall at 20mph, 40mph, 60mph and 80mph.

```
Given I am in a moving car traveling at 20mph
When I guide the car into a brick wall
Then the seat belt tightens
And the airbag deploys
```

Each of these tests check that certain things don't break and in both cases our tests are checking what happens under abnormal circumstances. It's unlikely that someone will drive a car into a wall at 60mph, however you should still test for what happens.

Code should be tested in exactly the same way. Let me provide an example, imagine we have some magical code that builds cars. Initially our car code, like the Ford Motoring company, only builds black cars, then one day its decided that we'll start making blue cars too.

In our code we have a car order object, which defines what our customer wants; A car order validator, that checks the order complies with our set of car rules; And finally a car builder that magically generates our car.

Initially we have a test that tests if we can build a black car. You can see all the code for this example on GitHub. And what do you know, our car builder makes a black car.
