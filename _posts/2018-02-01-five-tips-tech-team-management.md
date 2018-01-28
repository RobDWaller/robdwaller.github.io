---
layout: 'post'
title: 'Five Tips for Aspiring Tech Team Managers'
description: "Management isn't a topic that is often discussed among developers as we're generally much more interested in the pros and cons of various frameworks, design patterns, code principles or design patterns"
published: false
tags: [management]
---

Becoming a tech manager and learning how to be good at it is difficult. There isn't a great deal of 'documentation' available and developers don't discuss the topic a lot. Just take a look at your average code conference, there are very few talks on management. Sadly this means most new tech managers and lead developers learn on the job, which isn't always ideal.

I've been managing a tech team for two years now and it's been an extreme learning curve. There are lots of thoughts and insights I could share, but there are five important ones. They are useful for any aspiring manager, lead developer and even those who haven't considered the move into management but probably should.

### Great Developers Don't Make Great Managers

I'm going to begin with a lie, a big fat one, "great developers don't make great managers". This is obviously false, great developers can and do make great managers. The important point though is that you don't have to be a great developer to be a great manager.

It is important that you have experience and a good understanding of code and technical issues, but you don't have to be the best in your team at it. Management is about a lot more than your field of expertise so don't let your code capability put you off a management role, you may be great at it.

A good analogy for this point is football, which like development is a highly skilled profession. Let's begin with a question, what do the following football managers all have in common?

- Alex Fergusson
- Arsene Wenger
- Pep Guardiola
- Jurgen Klopp
- Jose Mourinho

Answer: none of them were particularly good at football, at least not exceptional. They are though some of the most decorated managers in the game. The theory goes that average football players make better managers because they empathise better with average players and can therefore get more out of them. Great players by contrast often can't comprehend why less capable players can't do what they can, leading to frustration. Average players also develop other skills such as communication that are useful to managers. There is a good article on some of the data behind good football managers [in the FT](https://www.ft.com/content/f340caae-47cd-11e1-b646-00144feabdc0) that covers some of these issues.

Overall though football and sport more generally highlights that many of the best managers are not always the most technically skilled. So just remember that technical weakness does not exclude you from a management role.                         

### Mistakes Will Happen

This is simple, when you begin your career as a manager you will make mistakes. If it's your first management role you won't necessarily know how to respond to every situation correctly. In the two years I've been a manager I've made numerous mistakes; I've hired the wrong people; I've overreacted and become angry unnecessarily; and I've been too ambitious which has led to failures.  

The reality is you will make mistakes, it's ok, own up to them, apologise for them, note them down for next time and move on.

### Expect the Unexpected

No one can write a precise guide to management so expect and be prepared for the unexpected. You may have a lot of experience dealing with technical problems but when you become a manager you're going to have to deal with a whole array of issues that sit outside your technical expertise.

You will be exposed to people's personal issues; their mental health problems; their love lives; arguments; a whole array of issues. Expect this and be prepared to deal with these issues in as measured and sensitive manner as possible.

### Learn to Compromise

This is important, you are not always going to get your own way and you are going to have to make the best of bad situations. Tech teams sit within businesses and technical issues and consequences are not always going to drive business decisions. As a manager you are going to have to negotiate and compromise with other departments and managers that have different motives and aims.

Sometimes these aims are going to conflict with technical best practice and may effect your team negatively. You can't though always respond in a combative or belligerent manner. You are going to have to compromise and come up with solutions to deal with these issues.

One way to do this is to define what your 'lines in the sand' are and then be willing to compromise on everything else. This is a two step process that focuses on what is understandable to the non-technical and what may have a negative impact on the business.

Code principles for example fail to match these criteria as they're rarely understandable outside of the technical arena. For example, you can't turn around in a meeting and say, "I simply refuse to release the product this week because Dave's code doesn't comply with the Single Responsibility principle..."

```php
// Dave's Code

public function everyValueDivisibleByFive($array)
{
    $newArray = [];

    if (!count($array)) {
        $result = 'error';
    }
    else {
        foreach ($array as $row) {
            if ($row % 5 != 0) {
                $remainder = $row % 5;

                echo $remainder;

                if (5 - $remainder < 3) {
                    $addition = 5 - $remainder;

                    $newArray[] = $row + $addition;
                }
                else {
                    $newArray[] = $row - $remainder;
                }
            }
            else {
                $newArray[] = $row;
            }
        }

        $result = $newArray;
    }

    return $result;
}
```

Dave's code is terrible but it works which is ultimately all the business cares about and nobody in any other department or team is going to give a damn about the quality of Dave's code. This is not to say you shouldn't encourage your team to follow code principles, but for various reasons you're not always going to be able to follow them so there is no point in being belligerent about them.

A better 'line in sand' may be outlawing tools like WebMin or PHPMyAdmin that expose servers and databases over the web. Developers and others love these tools because they can make things quicker and more efficient. They are though terrible tools that no decent tech team should go near, and it's very easy to explain why. They make servers and databases more vulnerable to hacking, which can have very negative consequences for any business.

Other good 'lines in the sand' are; demand that there is always time to QA and test before release to reduce the number of bugs found in production; demand that the budget and timeline matches what can realistically be delivered, so developers produce fewer bugs and less technical debt; demand that code isn't deployed on a Friday when no one will be in the office the following day to fix any problems.

All of these issues are understandable and easily explained to the non-technical. They will also stand as solid principles to guide your team and provide them with the time and space to develop good, secure, bug free software, which is ultimately good for your business, reputation and profit margins.  

As a manager you will have to compromise in many areas. The important point though is to learn how to navigate a path between belligerence and softness. If you are too belligerent you're going to piss people off, even if you are right. By contrast if you are too soft you then your team will be buffeted around like a small boat in a storm. You will work longer hours, suffer more stress and produce poorer software. Essentially you should aim, as Aristotle might say, to find the 'mean' between belligerence and softness.

### Keep Coding

There is no reason when you become a manager that you should stop coding or learning about code. I very rarely code at work now, but I continue to work on some personal projects and regularly attend technical conferences and meetups. It's important to keep your toe in the water and there is no reason you shouldn't.

Get involved in an open source project, or write and maintain your own library. Continuing to code will help you stay in touch with what your team members are doing; what is happening in the wider technical space; and maintain your passion for the subject. Overall this can only help you as a manager, so keep coding.

There is of course a great deal more to say on this subject, but the above I hope is a good start.
