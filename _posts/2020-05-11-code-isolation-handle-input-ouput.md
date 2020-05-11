---
layout: post
title: "Code Isolation and How to Handle Input Output"
description: "Code Isolation is a relatively simple concept, it just means one piece of code should not know about or affect any other piece of code."
tags: [code isolation, isolation, IO, input output]
published: true
---
Code Isolation is a relatively simple concept, it just means one piece of code should not know about or affect any other piece of code. We see this in other fields such as car manufacture, you can replace a headlight without affecting the battery or the wheels. Each part of the car is isolated from the other.

As mentioned in a [previous post](/2020/05/08/prove-code-works-tests.html) there are two basic rules to code isolation:

> 1. **A** should not know about **B** or **C** or anything else.
> 2. If **A** uses **B** it should not know where **B** came from or where **B** is going.

When we talk about code isolation and Business Logic it simply means we don't mix it with Input / Output, and we try not to mix it with framework code either. 

So let's fill in the gaps and make our rules a little clearer:

> 1. **Business Logic** should not know about **Databases** or **File Systems** or anything else.
> 2. If **Business Logic** uses **Data** it should not know where **Data** came from or where **Data** is going.

To put this in code form we write Business Logic code like this:

```php
// Isolated method.
function fileHasLotsOfContent(string $content): bool
{
    return strlen($content) > 20000;
}
```

We do not mix in files system code like this:

```php
// Method now contains an Input / Output reference.
function fileHasLotsOfContent(string $filename): bool
{
    $content = file_get_contents($filename);
    return strlen($content) > 20000;
}
```

When Business Logic code is isolated it is easier to test, more reliable and easier to share. But of course at some point in every project we need to deal with IO or framework code. So how do we isolate Input / Output code?

The main aim is to create a [DMZ](https://en.wikipedia.org/wiki/Demilitarized_zone) or translation layer between IO and Business Logic. Recently Twitter provided a great example of poorly isolated IO / framework code when a PHP developer shared some of their [Laravel](https://laravel.com/) code:

```php
class Post extends Model
{
    public function commentCount()
    {
        static $cache;
        
        return $cache?: $cache = $this->comments->count();    
    }
}
```

The author's aim was to highlight the benefit of [memoization](https://en.wikipedia.org/wiki/Memoization), which is basically in memory caching. If we put aside the topic of memoization for the moment, which has questionable benefits, the example highlights a number of issues with handling database calls, or in other words handling IO code.

The most obvious issue is the call to `$this->comments->count()` which we can assume makes a call to a data store of some kind and can return anything. The assumption is it will return an integer, but it may for example return an error string, or even throw an exception. Just imagine we couldn't connect to the data store for some reason.

This issue is compounded by the lack of types and or type checks in the code, which means we have no idea what the downstream `commentCount` method will return either. Essentially the `commentCount` method couples our code directly to the data store and whatever it wants to return. This means any code which depends on the commentCount method is also coupled to our data store.

Types are an essential part of code isolation. If we know what calls to IO will return we can write isolated Business Logic without any reference to IO.

Let's dig into how we might improve this situation. First let's image we created a psuedo `Model` for the `Post` class to extend which threw an exception when it was unable to connect to the database: 

```php
class Model 
{
    protected $comments;
    
    public function __construct()
    {
        $this->comments = new class {
            public function count()
            {
                $responses = [
                    1,
                    2,
                    3,
                    "Error: could not connect to database",
                    5
                ];
                
                $rand = rand(0, 4);
                
                if (is_string($responses[$rand])) {
                    throw new Exception($responses[$rand]);
                }
                
                return $responses[$rand];
            }
        };
    }
}
```

Our pseudo `Model` adds a `count` method to the `$comments` property which selects a random response from a list of five. Four of the responses are integers as expected, and one is an error string. If the error string is returned an exception is thrown. This replicates how a connection to a database might function in real life. Our `Post` model now needs to handle this exception scenario.

So how can we improve our `Post` model? Well let's begin by replacing the the memoization code with a value object. This will achieve two ends, first it will replicate the memoization functionality, we won't have to call the database every time we want the post comment count now. Secondly it will provide the `commentCount` method with a clear return type.

```php
final class CommentCount
{
    private $count;
    
    public function __construct(int $count)
    {
        $this->count = $count;
    }
    
    public function getCount(): int
    {
        return $this->count;
    }
}
```

Next we need to catch the exception and handle the error message. We'll log it somewhere so we know an exception has occurred and return a comment count of 0. 

```php
class Post extends Model
{
    public function commentCount(): CommentCount
    {
        try {
            return new CommentCount($this->comments->count()); 
        }
        catch (Exception $e) {
            Logger::log($e->getMessage());
            return new CommentCount(0);
        }
    }
}
```

This is not perfect, production code, but it should be clear what we've achieved. The `commentCount` method now has an explicit return type with no reference to a database request. We've essentially created a DMZ between our business logic and our IO. Previously any request to the `commentCount` method was directly coupled to the database, it's behaviour was dependent on the behaviour of the database. Where as now our Business Logic is just dependent on the CommentCount value object.

So let's write some simple Business Logic to prove the point. Let's imagine we wanted to display a message which highlighted which posts had a lot of comments. We'll call this business logic Comment Wow, cos "Wow! We've got a lot of comments." 😂:

```php
class CommentWow 
{
    public function wow(CommentCount $commentCount): string
    {
        if ($commentCount->getCount() == 0) {
            return "Sad. :(";
        }
        
        if ($commentCount->getCount() > 0 && $commentCount->getCount() < 5) {
            return "Ok.";
        }
        
        if ($commentCount->getCount() >= 5) {
            return "Wow! :)";
        }
    }
}
```

Our `wow` method just returns a different string depending on how many comments there are. Importantly though this isolated business logic knows nothing about IO or a thing called a database. In essence "A does not know about B". 

This approach has two significant benefits. First our code is much easier to test, as we don't have to worry about databases or any other kind of IO. And secondly we can replace our database or even the framework itself without affecting our Business Logic. So long as the CommentCount value object is created our CommentWow business logic will continue to function.

Of course all the code used in this post is psedo-example code. Real world scenarios are more complicated, but the examples should highlight the benefits of this approach and the direction in which you should take your code. Just remember isolated code is easier to work with and more likely to function as expected.

You can see the final, working example code on [3v4l.org](https://3v4l.org/jKuBi). I hope this post was useful and if you have any questions or feedback, please drop me a message on Twitter [@RobDWaller](https://twitter.com/RobDWaller).


### WIP Examples

This is the work I carried to get to the final point.

- v1 [3v4l.org/FlXpC](https://3v4l.org/FlXpC)
- v1.1 [3v4l.org/elnZE](https://3v4l.org/elnZE)
- v2 [3v4l.org/R8PE7](https://3v4l.org/elnZE)
- v3 [3v4l.org/Yfmub](https://3v4l.org/Yfmub)
- v3.1 [3v4l.org/1luHe](https://3v4l.org/1luHe)
- v3.2 [3v4l.org/pCg4d](https://3v4l.org/pCg4d)
- vFinal [3v4l.org/jKuBi](https://3v4l.org/jKuBi)