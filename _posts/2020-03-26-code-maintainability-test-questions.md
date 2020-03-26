---
layout: post
title: "The Code Maintainability Test Questions"
description: "These are just the questions for the code maintainability test I created."
tags: [code, maintainability, maintenance, costs]
published: true
---
These are just the questions for the Code Maintainability Test. The test will help you understand the state of your codebase and make improvements. For a fuller explanation of the Code Maintainability Test please read the [associated post](https://rbrt.wllr.info/2020/03/26/code-maintainability-test.html).

## Questions

1. Do you have a well written README which explains installation, setup and usage? **(+1 Point)**
2. Do you have clear code comments which explain the existence and intent of the code? **(+1 Point)**
3. Do you run code lint tools? **(+1 Point)**
4. Do you have a code coverage score greater than 60%? **(+1 Point)**
5. Do you have a code coverage score greater than 90%? **(+1 Point)**
6. Do you run mutation test or fault injection tools? **(+1 Point)** 
7. Do you use a strongly typed language or run a static analyser? **(+1 Point)**
8. Do you run mess detection tools? **(+1 Point)**
9. Do you have an average code complexity below 10? **(+1 Point)**
10. Do you have an average code complexity below 5? **(+1 Point)** 

## Scores

**0 - 3 Points:** Your codebase is difficult to maintain. It will have a high bug density; It will be difficult to add new features; New developers will struggle to learn the codebase and contribute; Costs will be high; A long and difficult rebuild is likely.  

**4 - 7 Points:** Your codebase will have maintenance issues. It will have a moderate to high bug density; Some features will be difficult to add; New developers will struggle with aspects of your codebase; Costs will be moderate to high. Improvements can be made.

**8 - 10 Points:** Your codebase is easy to maintain. It will have a low bug density; You can easily add new features; New developers will learn the codebase quickly; Costs will be minimised. Keep up the good work.