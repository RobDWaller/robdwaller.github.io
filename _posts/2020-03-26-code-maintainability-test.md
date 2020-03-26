---
layout: post
title: "The Code Maintainability Test"
description: "Code maintainability is a fundamental part good of software development. It is important because as code becomes less maintainable the cost to maintain the code increases."
tags: [code, maintainability, maintenance, costs]
published: true
---
Code maintainability is a fundamental part of good software development. It is important because as code becomes less maintainable the cost to maintain the code increases. There are more bugs to fix and it's more difficult to add new features. Also new developers find less maintainable code more difficult to learn and it takes them longer to contribute to a project, driving up costs further. 

If we were to plot cost against code maintainability it would look something like this:

<img src="/assets/img/cost-maintainability.png" />

As maintainability increases costs fall. Maintenance costs never fall to zero but they do fall dramatically as a codebase improves.

One problem with code maintainability though is it's difficult to quantify. What does maintainable code mean or look like? There are tools like [Code Climate](https://codeclimate.com/) which attempt to define it, but they don't offer a lot of detail on what it means. Also it's not always possible for a development team to use a cloud based tool like Code Climate.

To help I have created a quick ten point code maintainability test. It is similar in intent to the [Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/), it is a bunch of simple, binary questions. For a positive answer you score a point, and the closer your score is to ten the more maintainable your code is.

Of course this test is not meant to be comprehensive. It is only meant to provide a rough guide to how maintainable code is. Like sticking a licked finger in the air to test the direction of the wind. It does not capture all the nuance of code maintainability.

The test is broken down into three parts:

- Usability: how easy is your code to learn and contribute to?
- Bug Density: how many bugs do you have to fix?
- Code Complexity: how easy is your code to understand and extend?

## The Test

### Usability

Usable code is easy to learn and fast to contribute to. Well formatted code with good documentation is usable code.

- Do you have a well written README which explains installation, setup and usage? **(+1 Point)**
- Do you have clear code comments which explain the existence and intent of the code? **(+1 Point)**
- Do you run [code lint](https://en.wikipedia.org/wiki/Lint_(software)) tools? **(+1 Point)**

### Bug Density

Type usage, static analysers and code tests will all reduce bug density. The lower your bug density the fewer bugs you'll have to fix in production.

- Do you have a [code coverage](https://en.wikipedia.org/wiki/Code_coverage) score greater than 60%? **(+1 Point)**
- Do you have a code coverage score greater than 90%? **(+1 Point)**
- Do you run mutation test or [fault injection](https://en.wikipedia.org/wiki/Fault_injection) tools? **(+1 Point)** 
- Do you use a [strongly typed](https://en.wikipedia.org/wiki/Strong_and_weak_typing) language or run a [static analyser](https://en.wikipedia.org/wiki/Static_program_analysis)? **(+1 Point)**

### Code Complexity

Code with low complexity is easier to read and understand, easier to test, easier to find bugs, and easier to extend.

- Do you run [mess detection](https://phpmd.org) tools? **(+1 Point)**
- Do you have an average [code complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) below 10? **(+1 Point)**
- Do you have an average code complexity below 5? **(+1 Point)** 

## Scores

**0 - 3 Points:** Your codebase is difficult to maintain. It will have a high bug density; It will be difficult to add new features; New developers will struggle to learn the codebase and contribute; Costs will be high; A long and difficult rebuild is likely.  

**4 - 7 Points:** Your codebase will have maintenance issues. It will have a moderate to high bug density; Some features will be difficult to add; New developers will struggle with aspects of your codebase; Costs will be moderate to high. Improvements can be made.

**8 - 10 Points:** Your codebase is easy to maintain. It will have a low bug density; You can easily add new features; New developers will learn the codebase quickly; Costs will be minimised. Keep up the good work.

## Tools

Below is a list of tools which can help with testing and code analysis which will improve code maintainability. It is not a comprehensive list, there are loads more tools out there across many languages. 

### Testing Tools
- [Jest](https://jestjs.io/) (JavaScript)
- [Mocha](https://mochajs.org/) (JavaScript)
- [Chai](https://www.chaijs.com/) (JavaScript)
- [PHP Unit](https://phpunit.de/) (PHP)
- [Codeception](https://codeception.com/) (PHP)
- [Mockery](http://docs.mockery.io/en/latest/) (PHP)
- [Tarpaulin](https://github.com/xd009642/tarpaulin) (Rust)

### Mutation Test Tools
- [Stryker](https://stryker-mutator.io/) (JavaScript)
- [Infection](https://infection.github.io/guide/) (PHP)

### Code Analysis / Quality Tools
- [ESLint](https://eslint.org/) (JavaScript)
- [PHP MD](https://phpmd.org/) (PHP)
- [Code Sniffer](https://github.com/squizlabs/PHP_CodeSniffer) (PHP)
- [PHP Loc](https://packagist.org/packages/phploc/phploc) (PHP)
- [Radon](https://radon.readthedocs.io/en/latest/) (Python)
- [Pylint](https://www.pylint.org/) (Python)
- [Rust FMT](https://github.com/rust-lang/rustfmt) (Rust)
- [Clippy](https://github.com/rust-lang/rust-clippy) (Rust)

### Static Analysis Tools
- [PHPStan](https://github.com/phpstan/phpstan) (PHP)
- [Psalm](https://psalm.dev/) (PHP)

I do hope this is useful, and if you have any questions, thoughts or criticisms drop me a message on Twitter [@RobDWaller](https://twitter.com/RobDWaller).