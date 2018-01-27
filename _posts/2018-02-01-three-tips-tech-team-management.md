---
layout: 'post'
title: 'Five Tips for Aspiring Tech Team Managers'
description: "Management isn't a topic that is often discussed among developers as we're generally much more interested in the pros and cons of various frameworks, design patterns, code principles or design patterns"
published: false
tags: [management]
---

Becoming a tech manager and learning how to be good at it is difficult. There isn't a great deal of 'documentation' available and developers don't discuss the topic a lot. Just take a look at your average code conference, there are very few talks on management. Sadly this means most new tech managers and lead developers learn on the job, which isn't always ideal.

I've been managing a tech team for two years now and it's been an extreme learning curve. There are lots of thoughts and learnings I could share, but there are five important ones. They are useful for any aspiring manager, lead developer and even those who haven't considered the move into management but probably should. 

### Great Developers Don't Make Great Managers

I'm going to begin with a lie, a big fat one, "great developers don't make great managers". This is obviously false, great developers can and do make great managers. The important point though is that if you're considering a management role remember you don't have to be a great developer to be a great manager.

It is important that you have experience and a good understanding of code and technical issues, but you don't have to be the best in your team at it. Management is about a lot more than your field of expertise so don't let your code capability put you off a management role. You may be great at it.

A good analogy for this point is football; what do the following football managers all have in common?

- Alex Fergusson
- Arsene Wenger
- Pep Guardiola
- Jurgen Klopp
- Jose Mourinho

Answer: none of them were particularly good at football, at least not exceptional. They are though some of the most decorated managers in the game. The theory goes that average football players make better managers because they empathise better with average players and can therefore get more out of them. Great players by contrast often can't comprehend why less capable players can't do what they can, leading to frustration. Average players also develop other skills that are useful to managers. There is a good article on some of the data behind good football managers [in the FT](https://www.ft.com/content/f340caae-47cd-11e1-b646-00144feabdc0) that covers some of these issues.

There are of course exceptions to every rule and [Johan Cruyff](https://en.wikipedia.org/wiki/Johan_Cruyff) is one of them. Cruyff was not only one of the greatest footballers of all time, but also one of the greatest managers too. He is widely regarded as the most influential footballer of all time. Even Cruyff admits though that management is about far more than technical skill. That it is important to understand what you are good at and what you are not and that you can acquire the skills you need from others. Cruyff highlights that one of the key skills of a good managers is to spot and deploy talent in the right places.

As a tech manager you should remember you can always hire the developers who have the skills and experience you don't. And in fact spotting talent is a skill in itself.

I'd really suggest reading [Cryuff's biography](https://www.amazon.co.uk/My-Turn-Autobiography-Johan-Cruyff/dp/150981390X), whether you like football or not, as it is a wonderful treatise on a great man and the principles of good management. In addition some history is also useful the Estate Manager in Xenophon's [Conversations of Socrates](https://www.amazon.co.uk/Conversations-Socrates-Classics-Xenophon/dp/014044517X/) is useful along with [The Prince](https://www.amazon.co.uk/Prince-Niccolò-Machiavelli/dp/1536912883) by Machiavelli. And possibly even [Ethics](https://www.amazon.co.uk/Nicomachean-Ethics-Penguin-Classics/dp/0140449493) by Aristotle.

Overall just remember that technical weakness does not exclude you from a management role.

### Mistakes Will Happen

This is simple, when you begin your career as a manager you will make mistakes. If it's your first management role you won't necessarily know how to respond to every situation correctly. You will make mistakes, it's ok, note them down for next time and move on.

### Expect the Unexpected

No one can write a precise guide to management so expect and be prepared for the unexpected. You may have a lot of experience dealing with technical problems but when you become a manager you're going to have to deal with a whole array of issues that sit outside your technical expertise.

You will be exposed to people's personal issues; their mental health problems; their love lifes; arguments; a whole array of issues. Expect this and be prepared to deal with these issues in as measured and sensitive manner as possible.

### Learn to Compromise

This is important, you are not always going to get your own way and you are going to have to make the best of bad situations. Tech teams sit within businesses and technical issues and consequences are not always going to drive business decisions. As a manager you are going to have to negotiate and compromise with other departments that have different motives and aims.

Sometimes these aims are going to conflict with technical best practice and may effect your team negatively. You can't though always respond in a combative or beligerent manner. You are going to have to compromise and come up with solutions to deal with these issues.

One way to do this is to define what your 'lines in the sand' are and then be willing to compromise on everything else. Part of this process is learning what is bad and what is ok. For example, many developers would see a lack of type hinting as bad...

```php
// Bad Method

public function helloWorld($hello, $world)
{
    $response = $hello.$world;

    return $response;
}

// Good Method

public function helloWorld(string $hello, string $world): string
{
    return $hello . $world;
}
```

On a personal level I would agree with these developers. However as a manager you need to focus on what is really bad, your lines in the sand cannot include type hinting. Of course you should encourage your team to type hint, but nobody in any other department is going to give a damn about it. Your lines in the sand need to be realistic and understandable to non-technical people.

So focus on things like security, don't allow people to use PHPMyAdmin or WebMin; Demand that there is always time to QA and test before release; That the budget and timeline matches what can realistically be delivered.  

As a manager you will have to compromise in many areas. The important point though is to learn to navigate a path between beligerence and 

### Keep Coding

There is no reason why as a manager that you stop coding or learning about code. I very rarely now code at work. However, I continue to work on some personal projects and regularly attend technical conferences and meetups. It's important to keep your toe in the water and there is no reason you shouldn't.

Get involved in an open source project, or write and maintain your own library. Continuing to code will help you stay in touch with what your team members are doing; what is happening in the wider technical space; and maintain your passion for the subject. Overall this can only help you as a manager, so keep coding.

There is of course a great deal more to say on this subject, but the above I hope is a good start.
