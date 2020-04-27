---
layout: post
title: "Prove Your Code Works: Documentation"
description: "Good documentation helps other developers navigate code and implement it in their projects. "
tags: [code quality, documentation, tests, code analysis]
published: true
---
One of the ways you can prove your code works and provide some professional guarantees is to write some documentation. Good documentation provides evidence the authors of the code understand its intent and how best to use and implement it. It also helps other developers navigate code and add it to their projects.

In many cases good documentation allows developers to implement a package or framework without ever looking at the code. It is something that is done well in Open Source projects but less so in commercial settings. In fact it can often be forgotten about in commercial settings.

But documentation is commercially important as it improves developer efficiency and reduces costs, so all organisations should care about it. There are many forms of documentation and I will cover some of the basics which will help you improve your projects.

- READMEs
- Code Comments
- Semantic Versioning
- Release Notes

## READMEs

READMEs provide an overview of your project, what its purpose is, how to implement it and if there are any gotchas. The best way to write a [README](https://github.com/RobDWaller/ReallySimpleJWT/blob/master/readme.md) is to assume the reader knows very little about the subject your project deals with. Also don't assume a reader knows a great deal about the language you use or the basic setup, it's likely they don't.

Some good sections to include in a README are:

- **Introduction:** explain the intent and existence of the project. Provide any useful information on the wider topic your project deals with.
- **Installation / Setup:** how do you install and configure the framework or package. What tools are required, what commands need to be run, what files need to be edited.
- **Basic Usage:** Provide a simple FooBar code example which explains how to use the framework or package and prove it works.  
- **Advanced Usage:** Provide details on the interfaces the framework or package contains, along with some examples of advanced usage scenarios.

READMEs are also a good place to put [badges](https://shields.io/) which highlight facts and metrics about your codebase. They are a quick and simple way to expose Service Level Indicators and provide observability.

[![codecov](https://codecov.io/gh/RobDWaller/ReallySimpleJWT/branch/master/graph/badge.svg)](https://codecov.io/gh/RobDWaller/ReallySimpleJWT)

For example, a code coverage badge helps to provide test observability. It helps prove the project has been tested and gives a basic guarantee the code will work as expected. There are plenty of other badges which can be added too for things like build state, code linting, mutation tests and more.  

## Code Comments 

Comments help developers navigate your code. It's not always obvious what code does or why it exists, even if you have well named classes and methods. Comments are often hard to get right but you should try to focus on the intent of the code and any information which is hidden in the code.

As an example let's imagine we have a method which calculates the total cost of a train journey.

```php
class Travel 
{
    public function totalCost(int $outward, int $return): int
    {
        return $outward + $return;
    }
}
```

An example of a bad comment is:

```php
/** 
 * Add outward to return.  
 */
```

This is a pointless comment as it tells us nothing we cannot learn from the code itself. But sadly you see this type of comment a lot.

A better comment would be:

```php
/**
 * Calculate total cost of a train journey. Values are in pennies or cents. 
 */
```

This is a better comment because it explains the intent of the code `Calculate total cost of a train journey.` and it reveals some information about the method which may not be obvious in the code `Values are in pennies or cents.`.

Another benefit of good comments is they help improve the way you name things. For instance we may work out from writing the above comment the best place to put this method is in a class called `TrainJourney` not `Travel`. This will make the domain clearer and will make it easier for developers to discover and understand the code. 

## Semantic Versioning

Semantic Versioning, or [SemVer](https://semver.org/), is one of the best ways you can document change and communicate change to other developers. It provides a clear indication of what code you have released and how developers should respond to the release.

For those who have not come across SemVer before it is a format for [tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) code releases: 

> Given a version number MAJOR.MINOR.PATCH, increment the:
>
> - MAJOR version when you make incompatible API changes,
> - MINOR version when you add functionality in a backwards compatible manner, and
> - PATCH version when you make backwards compatible bug fixes.
> 
> Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

So if your current release has a tag `1.0.3` and you add some new functionality which is backwards compatible your next release tag will be `1.1.0`. But if you were to make a breaking change the release tag would become `2.0.0`.

SemVer clearly communicates to developers how they should react to your releases. If it is a MAJOR version then they will have to make changes to their own codebase to continue using your framework or package. Where as if it is a PATCH version they don't have to do anything. 

The other benefit of following SemVer is you will tag your code in Git which means developers can easily go through the history of your code, and see what state it was in at a particular release. They don't have to go through the commit history to find when a change or bug was introduced.

## Release Notes

Release Notes are closely linked to SemVer. Of course you can follow SemVer without writing [Release Notes](https://github.com/RobDWaller/ReallySimpleJWT/releases), you can just tag your code in Git. But if you wish to communicate to developers the reason behind a release and provide a more detailed history of your codebase you should write Release Notes.

Good Release Notes will include some of the following information:

- What are the changes or additions to the codebase.
- Why the changes are being made.
- What changes or additions still need to be made.

This information will make it far easier for developers to react to releases. If changes are required to their codebase they will have the relevant information needed to make those changes. And if they need to edit the project itself they will have relevant information on when and why changes were made to the project. Again as with the other forms of documentation Release Notes will improve developer efficiency. 

## Overview

Good documentation is one of the best ways you can provide observability for a project. It will highlight key information about your project and hopefully allow developers to use your project without ever having to look at the code. And if they do have to make edits to the project code it will help them navigate the codebase and make those changes more easily. This will make developers more efficient and reduce project costs.

But most importantly good documentation communicates a level of professionalism. It proves you care about your project and how easy it is for other developers to use it.

As a final note I am reminded of this recent Tweet which I think is very apt.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The project’s not finished until the documentation is done</p>&mdash; Chris Shaver (@ChrisShaver64) <a href="https://twitter.com/ChrisShaver64/status/1249785215091802112?ref_src=twsrc%5Etfw">April 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I hope you found this post useful, and if you have any questions or thoughts please drop me a message [@RobDWaller](https://twitter.com/RobDWaller).