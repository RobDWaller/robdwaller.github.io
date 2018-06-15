---
layout: 'post'
title: "Why Projects Fail and Code Principles Don't Matter"
description: ""
published: false
tags: [code principles, solid, management, mpp]
---
Solid principles are bullshit! See I said it, a blasphemy.

Given at this point I can sense a number of developers blood boiling I think it's sensible I back track a little.

Solid and code principles generally are not bullshit and they should be encouraged. They are though not as important as many developers believe. They hace little impact on the good running of software development projects and they're not the reason projects go horribly wrong.

For instance the following method does not comply with SOLID principles:

```php
public function addOneOrMinusTwo($number, $add)
{
    if ($add) {
        return $number + 1;
    }
    
    return $number - 2;
}
```

This method also does not comply with the boolean flag argument principle and a number of others. According to Solid and other principles we should write this method as follows:

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

The important question is, does this matter? Not really. The non-solid method is fine, it's not great, but it works and it won't break a project. Even if you were to increase the method's cyclomatic complexity by adding 'divide by five' functionality it still wouldn't matter.

So, what does matter? What really matters is defined by the acronym MPP. Or in other words:

- Management
- Planning 
- Process

**Management**

I can imagine many of you at this point screaming, "LEGACY CODE!!" or "TECHNICAL DEBT!!" You'd make the argument that bad code, or code that doesn't comply with code principles, leads to technical debt which ruins projects.

The problem with this line of thinking and this focus on code principles is that it is not the root cause of bad code. Bad developers are also not the cause of bad code. The true cause is management.

Code principles have never saved a doomed project.