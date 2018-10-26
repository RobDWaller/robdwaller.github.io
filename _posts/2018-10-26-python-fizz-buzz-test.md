---
layout: post
title: "How to Answer an Interview Assessment: A Python FizzBuzz Example"
description: "When you run a developer test or assessment you are not checking to see 'if' someone can write code and solve a problem."
tags: [python, FizzBuzz, tests, interviews]
published: true
---
Recently I wrote a [Python test](https://github.com/RobDWaller/python-assessment) which I was going to use during interviews for hiring developers. I never got to use it sadly as I decided to leave the job it was for, let's just say the company had a few issues...

The test asks a developer to complete a few tasks based around list and dictionary manipulation. I shared it on Twitter and got some interesting feedback. A number of developers / friends thought it was a little too easy.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">it&#39;s almost too easy. I don&#39;t think you can figure out if someone is mid/senior from this</p>&mdash; @r4vi (@r4vi) <a href="https://twitter.com/r4vi/status/1050426504008622080?ref_src=twsrc%5Etfw">October 11, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I thought this was fair feedback but missed the point of the test slightly. When you run a developer test or assessment, I prefer the term assessment, you are not checking to see 'if' someone can write code and solve a problem. Instead you are looking to see 'how' a developer writes code and solves a problem. And 'how' they solve the problem defines where they sit on the Junior to Senior spectrum.

Personally as a manager I measure developers as follows:

- **Junior:** Can solve the problem.
- **Mid:** Solves the problem well, shows knowledge of principles, adds some comments and tests.
- **Senior:** Solves the problem well, shows knowledge of principles, adds full comments, writes tests, complies with a code standard and applies static analysis.

My standards are of course arbitrary and not everyone will agree with them, however they can be assessed against a relatively simple assessment. As really the only differences between junior and senior developers are quality, professionalism and experience. So a good assessment is one which is open and gives a developer enough rope with which to hang themselves. If they don't add comments this tells you something important about them. So ultimately the assessment does not need to be complicated or difficult to complete.

A great example of a good assessment is [FizzBuzz](http://wiki.c2.com/?FizzBuzzTest), it is relatively simple and there are numerous ways to solve it.

> Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

To provide an example of how you should approach development assessments I have created a Python repository which solves FizzBuzz. I'm not going to claim my code is perfect, there is certainly room for improvement. You will though note a few things:

- The code has tests and I've achieved [code coverage](https://codecov.io/gh/RobDWaller/fizz_buzz) of 78%.
- The code complies almost perfectly with [Pylint](https://www.pylint.org/) which imposes the PEP 8 standard.
- The code is run against the [Radon](https://radon.readthedocs.io/en/latest/) static analyser and achieved an A grade.
- The code has comments and documentation.
- The code is run against a Continuous Integration pipeline.

By completing the above steps I can prove with some level of certainty my code works. It also shows a professional approach to development with a focus on quality. And it proves I have a reasonable level of experience.

If you are a developer looking for work, like myself currently, this is how I'd advise you approach any assessment you are given. And if you are an assessor / employer I'd remind you your assessments don't need to be too complicated to tell you a lot about a developer.

And there certainly isn't any need to whiteboard anyone... ;)
