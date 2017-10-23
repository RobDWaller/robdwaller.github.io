---
layout: post
title: 'Why You Must Always Test to Break'
published: false
description: ''
tags: [tests]
---
When building an application and writing code there are two types of test you can carry out to check things work. The first is 'test to work', these are tests that check under normal conditions your code works.

To take the example of a car, you might creat a test that checks when you put the key in the ignition and turn it the engine starts. Similarly with code you will write a unit test that checks when you pass an expected argument into a method that you are returned that value you expect. You write and carry out these tests to prove your application or car works.  

While 'test to work' is important and you should always write tests that prove your code works you must also 'test to break'. This is where you ask difficult and unexpected questions of your code an application. This is important because you can achieve 100% code coverage and very high path coverage by just writing 'test to work' tests. However 'test to work' does not guarantee your code works under all conditions.