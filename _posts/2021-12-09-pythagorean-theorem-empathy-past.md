---
layout: post
title: "The Pythagorean Theorem and Empathy for the Past"
description: "As software developers working in the 'modern' world it can be difficult for us to grasp how challenging previous generations found certain tasks."
tags: [mathematics, history, computers, software, empathy]
image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*k3-5BtP2Y1rFT6QwyR17lA.png"
canonical: "https://medium.com/@history_dev/the-pythagorean-theorem-and-empathy-for-the-past-e047ec2f7a9f"
published: true
---
As software developers working in the 'modern' world it can be difficult for us to grasp how challenging previous generations found certain tasks. Even the problems faced by LEO programmers using punch tape in the 1950s are relatively meaningless to us today. So how do we understand the problems faced by those working more than 2,000 years ago? And why is this important?

It’s important because if we wish to understand the past, and even the present, we need to have empathy for previous generations. We need to grasp and grapple with the problems and challenges they faced. This will help us better understand their capabilities and achievements. As Jaqueline Stedall, a historian of mathematics, says.

> The difficulty for the historian is usually not so much understanding the mathematics itself as entering into the mind and mathematical universe of someone from another era.

In my previous post on the [Origins of Mathematics](https://rbrt.wllr.info/2021/11/25/origins-mathematics-journey-towards-computers.html) I touched upon Pythagoras' Theorem. Today known as the Pythagorean Theorem due to the lack of evidence to link it to Pythagoras. It also provides a good way for us to understand the challenges of the past. The theorem has been understood for a very long time. And while it is relatively simple, it opens the door to a lot of complexity.

The Pythagorean Theorem states that for a right-angled triangle the square of the hypotenuse, the diagonal, equals the squares of the other two sides added together.

`a² + b² = c²`

It’s a useful theorem because it allows us to easily calculate the length of a hypotenuse. We just need to find the square root of the squares of a and b added together.

`√a² + b² = c`

In the real world this may help us calculate the length of a diagonal wall in a building. Which will enable us to order the right amount of bricks. But how easy is this to calculate?

The core of the Pythagorean Theorem is relatively simple. Just a multiplication and addition.

`a² + b² or (a * a) + (b * b)`

Even for large numbers we can do this sort of calculation with a pen and paper. The complexity creeps in when we introduce square roots, which we need to calculate the length of a hypotenuse.

`√a² + b² = c`

A square root is the opposite of a square. We can easily calculate the square root of 16 in our head, it’s 4 because 4 times 4 equals 16. But what about 289 or even 7? Not so easy.

Square roots aren’t a problem we worry about today. We have scientific calculators and programming languages have square root methods and hypotenuse methods built-in. For instance, C++ and PHP both provide a sqrt()and a hypot() method. As developers we don’t have to give these calculations any thought. We just call the method we need and as if by magic the result is returned.

The problem has been abstracted for us. We don’t worry about it in the same way early programmers or ancient mathematicians had to. So, how might we increase our empathy for ancient mathematicians and understand their challenges? Well, let’s consider how we might write an algorithm to solve a square root. It’s not an easy task.

To calculate a square root with pen and paper we need to [use long division](https://byjus.com/maths/square-root-long-division-method/). A process which combines simplification with trial and error. And sounds similar to brute forcing a password with a [dictionary attack](https://en.wikipedia.org/wiki/Dictionary_attack). Which is also a form of simplification plus trial and error.

Our square root algorithm might therefore aim to simplify the problem and use a recursive trial and error process to find the answer. This wouldn’t be ideal or efficient, and it would need a lot of tests, but it might work. I’m not going to write the code now (I might come back to it in a later post). My aim is simply to highlight where our thinking might begin and the complexity involved.

Our thinking probably isn’t too far off the mark though. As it is well known square root algorithms aren’t very efficient. So maybe there is a recursive process involved. Also, we have a good example from the world of programming. The ID developers had to solve a [square root efficiency problem](https://www.youtube.com/watch?v=p8u_k2LIZyo) in the game Quake III. They used a combination of hacks, clever maths, and approximation to get things working. It wasn’t simple and it wasn’t precise, but it worked. Clearly, square roots aren’t easy to solve.

When we delve into problems like this we quickly bump into complexity. And it highlights the challenges faced by previous generations dealing with these problems directly.

The Babylonians were aware of and [using the Pythagorean Theorem](https://en.wikipedia.org/wiki/Babylonian_mathematics), and solving square roots 4,000 years ago. And they did this challenging mathematics without computers or digital calculators. From which we can only conclude there were some very smart and capable people living in the second millennium BC.

It’s important to have empathy for previous generations. We live in a very advanced age, but our world is built on the hard work and genius of many generations. And when we analyse the past we’re often dealing with very capable human beings. Many of whom were a lot smarter than we are.

---

**Useful Sources:**

- [https://www.goodreads.com/book/show/12896546-the-history-of-mathematics](https://www.goodreads.com/book/show/12896546-the-history-of-mathematics) Jacqueline Stedall p90