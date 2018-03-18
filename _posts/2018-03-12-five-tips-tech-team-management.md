---
layout: 'post'
title: 'Five Tips for Aspiring Tech Team Managers'
description: "To become a tech manager and learn how to be good at it is difficult. There isn't a great deal of 'documentation' available and developers don't discuss the topic a lot."
published: true
tags: [management, development, tips]
---

To become a tech manager and learn how to be good at it is difficult. There isn't a great deal of 'documentation' available and developers don't discuss the topic a lot. Just take a look at your average [code conference](https://www.phpconference.co.uk/schedule/), there are very few talks on management. Sadly this means most new tech managers and lead developers learn on the job, which isn't always ideal.

I've been a tech manager for two years now and it's been an extreme learning curve. There are lots of thoughts and insights I could share, but there are five I believe important. They are useful for any aspiring manager, lead developer and even those who haven't considered the move into management yet.

### Great Developers Make Great Managers?

There is often an assumption that the most skilled developers will make the best managers. And that a developer should not go for a management role unless they are best developer in their team. This is a fallacy and a lie, you don't have to be a great developer to be a great manager.

It is important that you have experience and a good understanding of code and technical issues, but you don't have to be the best in your team at it. Management is about a lot more than your field of expertise so don't let your code capability put you off a management role, you may be great at it.

A good analogy for this point is football or 'soccer', which like development is a highly skilled profession. Let's begin with a question, what do the following football managers all have in common?

- Alex Fergusson
- Arsene Wenger
- Pep Guardiola
- Jurgen Klopp
- Jose Mourinho

Answer: none of them were particularly good at football, at least not exceptional. They are though some of the most decorated managers in the game. The theory goes that average football players make better managers because they have higher empathy. They can get more out of less capable players because they better understand their limitations and how best to use and deploy them. Great players by contrast often can't comprehend why average players can't do what they can, leading to frustration and arguments. Average players may also focus on developing other skills such as communication and strategy that are useful for managers. There is a good article on some of the data behind good football managers [in the FT](https://www.ft.com/content/f340caae-47cd-11e1-b646-00144feabdc0) that covers some of these issues. It's worth a read for any aspiring manager.

Overall football and sport highlight that many of the best managers are not always the most technically skilled. So remember that technical weakness does not exclude you from a management role.                         

### Mistakes Will Happen

This is simple, when you begin your career as a manager you will make mistakes. If it's your first management role you won't know how to respond to every situation correctly. In the two years I've been a manager I've made numerous mistakes; I've hired the wrong people; I've overreacted and become angry unnecessarily; and I've been too ambitious which has led to failures.  

The reality is you will make mistakes, it's ok, own up to them, apologise for them, note them down for next time and move on.

### Expect the Unexpected

No one can write a precise guide to management so expect and be prepared for the unexpected. You may have a lot of experience dealing with technical problems but when you become a manager you're going to have to deal with a whole array of issues that sit outside your technical expertise.

You will be exposed to people's personal issues; their mental health problems; their love lives; their arguments; a wide range of issues. Expect this and be prepared to deal with these issues in as measured and sensitive manner as possible.

### Learn to Compromise

This is important, you are not always going to get your own way and you are going to have to make the best of bad situations. Tech teams sit within businesses and technical issues and consequences are not always going to drive business decisions. As a manager you are going to have to negotiate and compromise with other departments and managers that have different motives and aims.

Sometimes these aims are going to conflict with technical best practice and may effect your team negatively. You can't always respond in a combative or belligerent manner. You are going to have to compromise and come up with solutions to deal with these issues.

One way to do this is to define what your 'lines in the sand' are and then compromise on everything else. This is a two step process that focuses on what is understandable to the non-technical and what may have a negative impact on the business. Usually in financial or reputational terms.

Code principles for example fail to match these criteria as they're rarely understandable outside of the technical context. You can't for instance turn around in a meeting and say, "I simply refuse to release the product this week because Dave's code doesn't comply with the Single Responsibility principle..."

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

Dave's code is terrible but it works which is all the business cares about and nobody in any other department or team is going to give a damn about the quality of it. This is not to say you shouldn't encourage your team to follow code principles. But for various reasons you're not always going to be able to follow them so there is no point being belligerent about them.

A better 'line in sand' would focus on security. This a more understandable topic for the non-technical and can have a direct impact on a business. As an example you may outlaw certain tools such as [WebMin](http://www.webmin.com/) or [PHPMyAdmin](https://www.phpmyadmin.net/). These tools can help developers and improve efficiency but they also expose servers and databases across the web so can be a security hazard and a business threat.

Other good 'lines in the sand' include:

- **Testing:** demand that there is always time to QA and test before release to reduce the number of bugs found in production.
- **Timelines:** demand that the budget and timeline matches what can realistically be delivered, so developers produce fewer bugs and less technical debt.
- **Deployments:** demand that code isn't deployed on a Friday when no one will be in the office the following day to fix problems.

All of these issues are understandable and easily explained to the non-technical. They will also stand as solid principles to guide your team and provide them with the time and space to develop good, secure, bug free software. Overall this will be good for your business, reputation and profit margins.  

### Keep Coding

There is no reason to stop coding when you become a manager. I very rarely code at work now, but I continue to work on some personal projects and regularly attend technical conferences and meetups. It's important to keep your toe in the water and there is no reason you shouldn't.

Get involved in an open source project, or write and maintain your own library. It only has to be a few hours a week. But if you continue to code it will help you stay in touch with what your team members are doing; what is happening in the wider technical space; and maintain your passion for the subject. This will increase your team's trust in your decisions and help you better advise your organisation. Overall this can only help you as a manager, so keep coding.

There is of course a great deal more to say on this subject. I hope though that it encourages more developers to become managers as this can only be good for our industry.

If you have any thoughts or feedback on this post please let me know via a tweet [@RobDWaller](https://twitter.com/RobDWaller).

**Note:** This post is based on a talk I gave at the [PHPLondon](https://twitter.com/phplondon) user group, the slides are below...
<script async class="speakerdeck-embed" data-id="9cc457d708334dee8a43ca2037aeb800" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
