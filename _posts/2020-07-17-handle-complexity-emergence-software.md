---
layout: post
title: "How to Handle the Emergence of Complexity in Software"
description: "In software development complexity itself is an emergent property of code. At some point in the development process software crosses the boundary between simple and complex."
tags: [complexity, code isolation, clean architecture, architecture]
published: true
---
All complex systems have what is called emergent properties. For instance water has emergent properties like damp and wet. When a surface has 10 water molecules spread across it we don't classify it as wet, but at some point when there are enough water molecules on a surface it will become wet. The property of wetness emerges from a collection of water molecules.

The difficulty with emergence is defining the boundaries, for instance between dryness, dampness and wetness. Emergence is also situational, can a granite work top become damp in the same way as a t-shirt? Solid surfaces are generally defined as wet or dry where as permeable surfaces can become damp.

In software development complexity itself is an emergent property of code. At some point in the development process software crosses the boundary between simple and complex. Software goes from readable and easy to understand to unreadable and hard to understand. The emergence of this complexity can depend on a number of factors, how the code is written, how much code is written, how difficult the problem is which the code aims to solve, etc.

As software developers one of our primary aims is to minimise complexity, and there are strong incentives to do this. One obvious one is financial, as software becomes more complex it becomes harder and more costly to maintain. You require more developers to keep the lights on and get things done. The second is developer wellbeing, it is not fun to work on code which is too complicated. Instead of adding new features which generate business value and make users happy developers feel like their only purpose is to ensure the tower of cards does not come crashing down.

## What is Software Complexity?

When we refer to complexity in software it is important to define precisely what we mean. By its nature software is complex and most developers only deal with a small part of this complexity at any given time. JavaScript only has meaning because there are numerous other layers of software written in other languages which allow it to work. This complexity is not what is of interest to us because no developer has to consider the complexity of software in its entirety. If they tried they'd fail and probably go mad. 

When we talk about complexity in software what we mean is how understandable or readable is the code? For example if you sat a new developer in front of an existing codebase could they tell you what it does and how easily could they make a change to it? If complexity is low and the code is understandable then they will be able to tell you what the code does and easily make a change. If not, you likely have a complexity problem. 

## How to Spot Complexity

So what can you do to minimise the emergence of complexity in a codebase? The first step is to learn to spot complexity. Luckily there are tools and metrics which can help with this. 

Three important complexity metrics are:

- [Cyclomatic Complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity): How many control structures does the code have?
- [NPath Complexity](https://modess.io/npath-complexity-cyclomatic-complexity-explained/): How many paths are there through the code?
- [CRAP](https://blog.ndepend.com/crap-metric-thing-tells-risk-code/): Given the complexity of the code are there enough tests? 

Of these metrics Cyclomatic Complexity is the easiest to understand and begin using. It looks at a unit of code, usually a method, and checks to see how many control structures or decision points there are. For instance `if`, `switch`, `foreach`, etc. The more decision points there are in a method the more outcomes that method can have, which increases the complexity. Ideally you want code to have a Cyclomatic Complexity score below 5 and definitely below 10. If a codebase has a lot of methods with complexity above 10 there is likely an issue.

There are also plenty of tools like [PHPMD](https://phpmd.org/rules/codesize.html#cyclomaticcomplexity) and [ESLint](https://eslint.org/docs/rules/complexity) which allow you to run and automate complexity checks. You can add them to your Continuous Integration pipeline, set some thresholds and if some new code breaches the threshold you can review it and fix it. This process alone will help you keep a lid on a lot of complexity.

But of course the topic of complexity is not that simple. You also need to be able to read code manually and spot when complexity is creeping into the design.

For instance the PHP code below has a Cyclomatic Complexity score of four, which is good. 

```php
public function childrenAboveFiveFeet(array $parents): array
{
    $children = [];

    foreach ($parents as $parent) {
        foreach ($parent->getChildren() as $child) {
            $heightInFeet = $child->getHeight() / 30.48;

            if ($heightInFeet > 5) {
                $children[] = $child;
            }
        }
    }

    return $children;
}
```

On the surface this code doesn't seem too complicated, it is short and easy enough to understand, but there are problems. The main issue is the business logic is not isolated, it is hidden within nested foreach loops.  

```php
/** The Business Logic **/
$heightInFeet = $child->getHeight() / 30.48;

if ($heightInFeet > 5) {
    $children[] = $child;
}
```

The business logic is the code we really care about, it is the code which makes decisions and we need to ensure it works. But because it is nested in two foreach loops the business logic is much harder to test than it should be. 

To test the business logic in detail requires us to spin up a collection of people and children objects each time we write a test. This will quickly become tiresome when we just need to ensure our centimeter to feet conversion is correct, so we can accurately calculate whether a child is above five feet tall. Ideally we should isolate this business logic into separate methods so it can be tested more easily.

To ensure code doesn't become too complex we need to be able to analyse it manually and highlight when the code design could be better. As the example above shows tools and metrics aren't enough on their own. 

## Code Isolation

This is where the principle of Code Isolation comes in, which is one of the mains ways we handle and minimise complexity. There are two basic rules to code isolation:

> 1. **A** should not know about **B** or **C** or anything else.
> 2. If **A** uses **B** it should not know where **B** came from or where **B** is going.

In real terms these rules may look something like this:

> 1. **Business Logic** should not know about **Databases** or **File Systems** or anything else.
> 2. If **Business Logic** uses **Data** it should not know where **Data** came from or where **Data** is going.

Code Isolation is the guiding principle behind [Clean Architecture](https://blog.jacobsdata.com/2020/02/19/a-brief-intro-to-clean-architecture-clean-ddd-and-cqrs), but there is not much point in learning Clean Architecture unless you have an understanding of Code Isolation. 

In basic terms Code Isolation means we separate decision making, also referred to as business logic or domain logic, from Input / Output. So in our code we don't muddle calls to the database or filesystem with making decisions. 

In this Deno / TypeScript code example the retrieval of data from a JSON file is muddled with making a decision about the data.

```js
export function overEighteens(): object {
  /** Filesystem Call **/
  const file = fromFileUrl(new URL("../../assets/people.json", import.meta.url));
  const json = readJsonSync(file);

  if (json instanceof Array) {
    return json.filter((person: any) => {
      if (person.age !== undefined) {
        /** Decision Point **/
        return person.age >= 18
      }
      return false;
    });
  }

  return {};
}
```

As a standalone method the above code is basically fine, and if this was the only function in a microservice then there wouldn't be an issue as complexity would be low regardless. But merging I/O and decision making in this way creates problems. 

The code is harder to test because it is tightly coupled to the filesystem. So we either have to mock the filesystem somehow or ensure the filesystem is working correctly for us to test the code. Debugging the code is also more difficult, does the issue lie with the retrieval of the data, or does it lie with the age check? Does the issue relate to the I/O or the business logic? In this code it will be less clear.

But the main issue is if this approach to code is repeated across a codebase complexity will emerge quickly. The point where the code is difficult to understand, hard to test, debug and change will be reached far sooner than in a codebase which follows the Code Isolation principle. 

It is also important to note the code isolation principle has nothing to do with the [WET or DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself#DRY_vs_WET_solutions) principles. They all relate to abstraction, but abstraction does not guarantee isolation. A developer can easily abstract tightly coupled code. If the aim of a developer is to minimise complexity they need to follow the Code Isolation principle. Following WET or DRY principles does not guarantee isolation nor will it guarantee minimal complexity. It's not to say WET or DRY don't offer a useful guide for practical development, but do not confuse them with the Code Isolation principle.

## A Code Isolation Example

So how might we use the Code Isolation principle to improve the code example above? Well we break the code down into its component parts. The part which retrieves the data goes in one method and the part which makes a decision about the data goes in another.

```js
interface Person {
  id: number,
  name: string,
  age: number,
}

function overEighteen(person: Person): boolean {
  return person.age >= 18;
}

export function overEighteens(): Person[] {
  return retrievePeople().filter(person => overEighteen(person));
}

function retrievePeople(): Person[] {
  const file = fromFileUrl(new URL("../../assets/people.json", import.meta.url));
  const json = readJsonSync(file)
  
  if (json instanceof Array) {
    return json.filter((person): person is Person => {
      return (
        person instanceof Object &&
        person.hasOwnProperty("id") && 
        person.hasOwnProperty("name") &&
        person.hasOwnProperty("age")
      );
    });
  }
  
  return [];
}
```
The above code is not production ready nor testable, but it highlights the principle of isolation and it is more robust. Data retrieval exists in one place and we ensure it returns a correct collection of data. And our age check exists in another place and expects a `Person` object. 

The code can be improved further and made more testable by abstracting the code into separate modules. The age check can then be tested with a unit test and the data retrieval with an integration test. We've achieved isolation in this code because the age check `overEighteen()` method no longer knows where the `Person` data came from, or the purpose of the `boolean` it returns.

As I hope the example highlights, in medium to large codebases the Code Isolation principle helps keep code simpler, more robust, and testable. And this will minimise the complexity of the codebase making it easier to understand and more maintainable.   

## Overview

Minimising the emergence of complexity in software is difficult, as software by it's very nature is complex. There is also no one size fits all solution to the problem. How you handle complexity will depend on the problem you need to solve and the scale of it.

There are though strategies which can help developers with this problem. The first is metrics and tooling, and I would encourage all developers to impose Cyclomatic Complexity checks in their CI pipelines. If this is applied to an existing codebase start with a threshold of 20 and lower it as your code improves with the aim of getting below 10. If it is a new project be brave, start with a threshold of five or six and see how you get on.

Also begin to consider the Code Isolation principle and how it can be used to improve your codebase. Analyse where your business logic can be better isolated so it is easier to test and becomes more robust. And as part of this begin to look at Clean Architecture principles and the various implementations of it, you may find one which suits your use case.  

And finally write some documentation as it is one of the best ways to tackle code complexity. First it forces you to explain what your code does and what its purpose is. This will help you spot and fix some of the flaws in your code. But most importantly it will help other developers understand why your code exists and what it does which will make it easier for them to contribute.

It is unlikely you can stop any complexity emerging in the software you produce, but by applying some of the tools and ideas above you can hopefully minimise many of its negative effects.