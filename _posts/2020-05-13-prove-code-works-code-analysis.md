---
layout: post
title: "Prove Your Code Works: Code Analysis"
description: "Code Analysis allows you to generate lots of metrics and information which help you improve your code and prove it's quality."
tags: [code quality, documentation, tests, code analysis]
published: true
---
Another means to prove your code works is via Code Analysis. It allows you to generate lots of metrics and information which help you improve your code and prove it's quality. In terms of providing observability it is one of the most important things you can do.

Code Analysis as a subject can be broken down into three areas:

- Formatting
- Mess Detection
- Static Analysis

## Formatting

When we discuss code formatting we often refer to linting. All we mean by this is to give our code a standard structure and format. We remove the lint from the code, like we remove the lint from our clothes so they look nice.

The reason we do this is because well formatted code is easier to read and work with. It also looks more professional. Code Lint tools allow us to then apply a standard format across a team or project. This means everyone is producing code in a similar fashion, which makes it easier for different team members to work on the same code.

For instance, no-one wants to work with code which looks like this...

```php
class Adder{
    // Developer One did this.
    public function addToThree(int $number): int{
        return 3+$number;
    }

    // Developer Two did this.
    public function add_to_four (int $number):int 
    {
            return 4 + $number;
    }
}

$adder = new Adder;

var_dump($adder->addToThree(5));

var_dump($adder -> add_to_four(3));
```

Code lint tools will pick up on issues like indentation, spacing, casing, bracket position and more. Also many code lint tools like PHP [CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) and JavaScript's [ESLint](https://eslint.org/) allow you to comply with a standard of your choosing. For instance [PSR-12](https://www.php-fig.org/psr/psr-12/) in PHP or [StandardJS](https://standardjs.com/) in JavaScript. You and your team can pick what suits you.

## Mess Detection

Mess Detection aims to deal with two issues, basic code errors and code complexity. 

For instance the following code can be written more efficiently.

```php
function journeyType(string $vehicle): string
{
    if ($vehicle == "car" || $vehicle == "bike") {
        return "road";
    } 
    else {
        return "rail";
    }
}
```

In this code there is no need for the `else` statement as the `return` statement inside the `if` statement ends the execution of the function. This is known as an ElseExpression error and a mess detector like [PHPMD](https://phpmd.org/) will advise you to change the code as follows:

```php
function journeyType(string $vehicle): string
{
    if ($vehicle == "car" || $vehicle == "bike") {
        return "road";
    } 
    
    return "rail";
}
```

This can be a huge benefit over a large codebase as these edits will make the code much shorter, more efficient and easier to read. Mess detectors will pick up on a whole array of errors like this, for instance boolean flag arguments, undefined variables and much more.

Mess detection is really powerful when it comes to code complexity. One of the primary aims of a software developer is to minimise complexity, because complexity is poison to software projects and is ultimately what kills them. Mess detection will check for a number of signs of complexity including class length and method length. But the most important checks are the [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) and [N-Path complexity](https://phpmd.org/rules/codesize.html#npathcomplexity) checks.

They sound 'complicated' but really all they do is check for the density of control structures / paths in code. This includes `if else` expressions and the various loops such as `for` and `foreach`. In basic terms the more control structures a method has the more complex it is and the higher your scores will be. 

As an example lets look at the following code:

```php
class ChildHeight
{
    /**
     * @param Array<Person> $parents
     */
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
}
```

The method `childrenAboveFiveFeet` takes an Array of `Person` objects and calculates which ones have children above 5ft tall. The class only has 21 lines of code and only nests control structures three levels deep. It's not very complicated? We've all seen code which looks far, far worse, so why change it?

Well, we could rewrite the code as follows:

```php
class ChildHeight
{
    private function cmToFeet(int $height): float
    {
        return $height / 30.48;
    }
    
    private function isAboveFeet(int $height, int $feet): bool
    {
        return $this->cmToFeet($height) > $feet;
    }
    
    /**
     * @param Array<Person> $children
     */
    private function childrenAboveFeet(array $children, int $feet): array
    {
        return array_filter($children, function($child) use ($feet) {
            return $this->isAboveFeet($child->getHeight(), $feet);
        });
    }
    
    /**
     * @param Array<Person> $parents
     */
    private function parentsWithChildrenAboveFeet(array $parents, int $feet): array
    {
        return array_reduce($parents, function($children, $parent) use ($feet) {
            return array_merge(
                $children, 
                $this->childrenAboveFeet($parent->getChildren(), $feet)
            );
        }, []);
    }
    
    /**
     * @param Array<Person> $parents
     */
    public function parentsWithChildrenAboveFiveFeet(array $parents): array
    {
        return $this->parentsWithChildrenAboveFeet($parents, 5);
    }
}
```

The output of this code is exactly the same, but we seem to have added far more code? We now have 42 lines of code! We've added 21 lines, doubled the length, why would we do this?! Only a pedant or an idiot would make this change, surely?!

Well the latter code, while longer, is far less complicated. And this is revealed in the cyclomatic complexity scores. The former code example has a score of 4, where as the latter code example has a score of just 1. The first example is four times more complicated than the second example. This may seem counterintuitive, how can the first example be more complicated? 

Well it all depends on the right question. If you ask, "How do I prove this code works?" things become clearer. At their core both sets of code do a conversion and a check. 

```php
$heightInFeet = $child->getHeight() / 30.48;
                
if ($heightInFeet > 5) {
    $children[] = $child;
}

// And

private function cmToFeet(int $height): float
{
    return $height / 30.48;
}

private function isAboveFeet(int $height, int $feet): bool
{
    return $this->cmToFeet($height) > $feet;
}
```

In the former code example the core business logic sits within two `foreach` loops in a single method. This means if you want to test this logic you have to spin up the whole `Array<Person>` world every time. This will quickly become nauseating and bloated. Many developer in this scenario will just create a single 'Happy Path' test and walk away. And we'll be left with unreliable software which will cause us no end of problems in production.

In the latter code example the core business logic is split out into two separate methods, and yes you can test private methods in PHP. These methods can be tested much more easily because you just need to supply integers. You can write lots of short tests very quickly and ensure this core logic works. Then you just have to write a couple of tests for the reduction and filter methods as the core business logic is robustly tested. 

Let's drive this point home. Let's imagine in our mad world we want to find all the children above 5ft tall who own Hamsters. So we extend our original method a little:

```php
public function childrenAboveFiveFeetWithHamsters(array $parents): array
{
    $children = [];
    
    foreach ($parents as $parent) {
        foreach ($parent->getChildren() as $child) {
            $heightInFeet = $child->getHeight() / 30.48;
            
            if ($heightInFeet > 5) {
                // New Code
                foreach ($child->getPets() as $pet) {
                    if ($pet->getType() == "Hamster") {
                        $children[] = $child;
                    }
                }
            }
        }
    }
    
    return $children;
}
```

This still doesn't seem complicated, it's barely 20 lines of code. But our cyclomatic complexity score is now 6, we're beginning to wander into nesting hell, and our tests now need to spin up a whole universe of parents, children and pets. The madness begins and the reliability collapses.

Mess Detection checks like cyclomatic complexity help guide you away from this eventuality and keep your code simple, isolated and testable. Most tools set a reporting threshold for cyclomatic complexity of 10 - 20, but I would aim for below 5, your software will thank you for it.

## Static Analysis

Static Analysis just means to analyse a programme without running the programme. So in that sense both Code Linting and Mess Detection are a form of Static Analysis. But Code Linting and Mess Detection fall into a category of analysis which might be defined as subjective. 

> "In my opinion the code should be formatted like this." 
>
> "In my opinion methods should be no more than 10 lines long."

Pure static analysers by contrast focus on the objective validity of code, will this code actually work? They are similar to compilers, and in dynamic languages like PHP they act in a very similar way. There are though static analysers for languages like Java.

The main benefit of static analysers like [PHPStan](https://phpstan.org/) or [Psalm](https://psalm.dev/) is they can help us enforce types properly and remove a whole category of type based errors in our code.

In [Rust](https://www.rust-lang.org/), for example, you cannot write the following code, it won't compile because you are mixing types within the `my_function` method:

```rust
fn my_function(number: u8) -> u8 {
    if number > 10 {
        return number + "10";
    }
    
    number
}

fn main() {
    println!("{}", my_function(9));
    
    println!("{}", my_function(11));
}
```

In PHP by contrast you can write exactly the same logic and it will be interpreted and run:

```php
declare(strict_types = 1);

function my_function(int $number): int
{
	if ($number > 10) {
		return $number + "10";
	}
	
	return $number;
}

var_dump(my_function(9));

var_dump(my_function(11));
```

This PHP code does not represent the worst type based offence you can commit. But there is no need to write code like this and it's easy to imagine a type based mistake which could cause serious problems.

This is where a tool like PHPStan comes into play, you can [run it](https://phpstan.org/r/be146ed7-aac3-4e25-9c0f-afb51e18171e) against your PHP code and just like the Rust compiler it will pick up the bug and output the following message:

> Only numeric types are allowed in +, string given on the right side.

This is really useful in terms of proving code works, if you pass a PHPStan or Psalm check you know your PHP code will have minimal type based errors. The quality and reliability of you code will increase dramatically.

There are of course some type based errors Static Analysers and even monstrously strict compilers like the Rust compiler won't pick up:

```rust
fn my_function(number: u8) -> u8 {
    if number > 210 {
        return number + 50;
    }
    
    number
}

fn main() {
    println!("{}", my_function(50));
    
    println!("{}", my_function(211));
}
```

This code will compile in Rust but overflow at runtime as it has potential to return an unsigned 16 bit integer. Neither Rust nor PHPStan will pick up on this sort of thing, so please do use Static Analysers, but remain vigilant. 😂

## Overview

The tools and approaches outlined in this post will help improve the quality of your code dramatically. And importantly they will help you prove your code works.

But what is really great is all of these things can be automated, meaning their cost of use is minimal. They can be added to a Continuos Integration pipeline tool like [GitHub Actions](https://github.com/marketplace?type=actions) or [Travis CI](https://travis-ci.org/) with ease. So you don't even have to worry about them as you work, they will pick up on the errors when you push your code. They really are a hassle free step towards professional software development.

I hope you found this post useful and if you have any questions or feedback let me know on Twitter [@RobDWaller](https://twitter.com/RobDWaller).