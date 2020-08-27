---
title: "How to Handle Code Complexity"
layout: talk
published: true
description: "Complexity is an emergent property of code, at some point a codebase will cross a tipping point between simple and complicated."
tag: [complexity, cyclomatic complexity, n-path complexity, code isolation]
---
## Talk Abstract

Complexity is an emergent property of code, at some point a codebase will cross a tipping point between simple and complicated. This has a number of negative consequences related to bugs, testability, extendability, and ultimately project success. This talk will explain what code complexity is, how it emerges, how to spot it early, and how to mitigate its effects.

## Talk Description

The primary aim of this talk is to show developers how to spot code complexity and how to produce code which minimises complexity. And it is hoped this will help developers and businesses avoid costly re-writes or project cancellations. The talk covers three areas:

**What is Code Complexity?**

Software by its nature is complex, vastly complex in fact. It is though a pointless and futile endeavour to consider all the dependencies which are required to produce working software. Instead when discussing code complexity we need to focus on individual projects and codebases. And of primary importance is how simple, understandable, testable and extendable code is.  

**How to Spot Code Complexity**

There are two ways to spot code complexity, tooling and manual analysis. The former relies on metrics such as Cyclomatic Complexity, N-Path Complexity and CRAP Scores. These metrics can be linked to Continuos Integration pipelines and trigger alerts when thresholds are breached. They can provide an early warning system for the emergence of complexity, but they do not provide a complete answer. Developers also need to learn how to spot the signs of complexity by reading code and analysing its design.

**Code Isolation**

Code Isolation is the core design principle which aims to minimise code complexity. It is the bedrock on top of which Clean Architecture sits, and its core principle is "A should not know about B or C or anything else." The overall aim is to isolate domains and units of code so they are simple, readable, testable and extendable.

## Notes

Code Complexity is a topic of importance to me and I have written a number of posts on the subject which explain my thinking on the subject in more detail. 

- [How to Handle the Emergence of Complexity in Software](https://dev.to/robdwaller/how-to-handle-the-emergence-of-complexity-in-software-5alj)
- [Code Isolation and How to Handle Input Output](https://rbrt.wllr.info/2020/05/11/code-isolation-handle-input-ouput.html)

## Presented At

TBC

## Slides

TBC

## Videos

TBC