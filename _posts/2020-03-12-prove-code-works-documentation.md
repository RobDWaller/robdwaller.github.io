---
layout: post
title: "Prove Your Code Works: Documentation"
description: ""
tags: [code quality, documentation, tests, code analysis]
published: false
---
One of the ways you can prove your code works and improve its observability is to write some documentation. Good documentation helps other developers navigate code and implement it in their projects. 

In many cases good documentation allows developers to implement a  dependency, framework or tool without ever looking at the code. 

Documentation can come in many forms

- READMEs
- Code Comments
- Semantic Versioning
- Release Notes

**READMEs:** provide an overview of your project, what its purpose is, how to implement it and highlight any gotchas. READMEs are also a good place to put badges which highlight facts about your codebase. 

**Code Comments:** help developers navigate your code. It's not always obvious what code does or why it exists. Comments are often hard to get right but you should try to focus on the intent of the code and any information which is hidden in the code.

As an example let's imagine we have an total cost method which adds two values together.

```php
function totalCost(int $outward, int $return): int
{
    return $outward + $return;
}
```

An example of a bad comment is:

```php
/** 
 * Code adds outward to return.  
 */
```

This is a relatively pointless comment as it tells us nothing we cannot learn from the code itself.

A better comment would be:

```php
/**
 * Calculate total cost of a return journey. Values are in pennies 
 * or cents. 
 */
```




## Tests

**Unit Tests:**

**Mutation Tests:**

## Code Analysis

**Static Analysis:**

**Mess Detection:**

**Code Lint:**