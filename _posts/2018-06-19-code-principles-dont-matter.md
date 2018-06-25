---
layout: 'post'
title: "Why Software Projects Fail: MPP"
description: ""
published: false
tags: [code principles, solid, management, mpp]
---
Software development projects fail all the time, or more often than not they produce less than what is desired. For instance, the product works but the code is awful and will need to be rewritten. As developers we've all worked on projects like this and it can be very frustrating.

The question is, why do projects fail?

Some believe projects fail because developers don't follow code principles. It's logical because bad code usually means the developers involved haven't followed principles. Other developers believe a lack of testing will cause a project to fail. Again a lack of tests will likely lead to bad code. Code principles and tests are symptoms of project failure rather than the root cause.

Projects fail for three reasons, Management, Planning and Process or MPP*.

## MPP

- Management
- Planning
- Process

## Management

Management or managers is the basis of project failure, it sits at the heart of project failure. Managers 

## Planning

## Process

* I believe I may have invented a new acronym... ;)

SOLID principles are bullshit! See I said it, blasphemy!!

At this point I can sense many developers' blood boiling so I think I'll backtrack a little...

Code principles are not bullshit and they should be encouraged. But they are not as important as many developers believe. They also have little impact on the good running of software development projects and they're not the reason projects fail.

For instance, the following method does not comply with SOLID principles:

```php
public function addOneOrMinusTwo($number, $add)
{
    if ($add) {
        return $number + 1;
    }

    return $number - 2;
}
```

According to SOLID and other principles we should write this method as follows:

```
public function addOne(int $number): int
{
    return $number + 1;
}

public function minusTwo(int $number): int
{
    return $number - 2;
}
```

This is much better and more 'compliant'. We've split the single method into two methods that only do one thing, we've removed the boolean flag argument, and we've added some type hints. Great!!

The important question is, does this matter? Not really. The non-solid method is fine, it's not great, but it works and it won't break a project. Even if you were to increase the method's cyclomatic complexity by adding 'divide by five' functionality it still wouldn't matter, much.

So, what does matter and what influences project performance? I believe this can be defined by the acronym MPP. Or in other words:

- Management
- Planning
- Process

**Management**

Management is the most important aspect of project performance. A manager will make or break a project. Everything flows from the manager or managers.  

Many developers will argue that code principles are important because a lack of principles leads to technical debt. And this will cost money to fix and occasionally result in a project rebuild.

The problem with this line of thinking and focus on code principles is it is not the root cause of bad code. Bad developers are also not the cause of bad code. One of the main causes is management.

The reasons we know this is code principles have never rescued a doomed project. And in reverse code principles have never caused a project to fail.

Managers by contrast are tightly linked to project performance. They are the ones who make the hiring and planning decisions. Very often they hire developers who are not experienced enough to complete the work required.


As an example, I don't believe there is such a thing as a bad coder. There are though inexperienced coders, and occasionally lazy or uniterested coders. And these types of coders will create bad code.

Who though hires and deploys these 'bad' developers? Managers do, and this often occurs because they lack technical experi

Inexperienced developers are hired and given too much responsibily on projects by managers. This occurs because many managers involved in tech are either technically inexperienced or don't understand their project's complexity. There are also lazy managers who don't care and are quite happy to see the .... roll down the hill.

If a manager just asks developers to "do x by y". Then an inexperienced or lazy developer will do whatever thet can to solve the problem as quickly as they can.

A good manager by contrast only hires an inexperienced developer if they know they can be properly supported. They also give them tasks appropriate to their experience. Good managers are also responsible for inspiring lazy or uninterested developers. Or in some cases removing them from the team.

planning = understanding complexity

Code principles have never saved a doomed project.


even great developers with all the code principles and design patterns can't make a poorly planned project work well.

A good outcome does not mean neat code, with minimal bugs. it means it also fulfills the business and user requirements too.

Lack technical experience
Fail to understand project complexity
Hire inexperienced developers
Lack interest

Plaaning understanding complexity
Build the right team
Timelines and costs
Provide a clear plan

reviews
testing
deployments
