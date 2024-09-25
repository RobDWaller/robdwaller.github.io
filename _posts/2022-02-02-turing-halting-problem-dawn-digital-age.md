---
layout: post
title: "Turing, the Halting Problem and the Dawn of the Digital Age"
description: "The period between 1930 and 1960 can be regarded as a dividing line in history. A 30 year period which turned more than 2,000 years of human history on its head."
tags: [history, computers, software, turing]
canonical: "https://medium.com/@history_dev/turing-the-halting-problem-and-the-dawn-of-the-digital-age-3d8bb493addc"
image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bombe-rebuild.jpg"
published: true
author: rob_waller
---
For over 2,000 years great engineers, mathematicians and scientists have [produced various analogue computers](https://medium.com/@history_dev/the-origins-of-computers-the-abacus-and-the-astrolabe-9272affc5212). Ranging from the Antikythera Mechanism of antiquity to the Difference Engines of the Victorian period. During the 1930s, 40s and 50s though there was a great flurry of activity that transported us from the analogue age to the digital.

The period between 1930 and 1960 can be regarded as a dividing line in history. A 30 year period which turned more than 2,000 years of human history on its head. It started with the development of the electro-mechanical computer and ended with the development of the transistor-based digital computer. The world was changed completely, and one of the men regarded as responsible for this great change is [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing).

In 1936 Turing published a paper titled “On Computable Numbers, with an Application to the Entscheidungsproblem". The paper disproved David Hilbert and William Ackermann’s [Decision Problem](https://en.m.wikipedia.org/wiki/Entscheidungsproblem), a challenge that asked whether every problem was decidable. Or in other words, can be shown to be true or false. As Professor Melanie Mitchell describes it.

> Is there always a definite procedure that can decide whether or not a statement is true?

To refute this claim Turing began with a theoretical, digital computer, now known as a [Turing Machine](https://en.m.wikipedia.org/wiki/Turing_machine). This computer ran on an infinite tape containing zeros, ones and blanks. A read and write head would read the input from the tape and based on some rules, the programme, would write some output back to the tape and either halt or move the head and repeat.

All problems can be encoded as zeros and ones (AKA binary code) and then a simple set of rules can be followed based on the zeros and ones which are read. In its simplest form, a human could read the zeros and ones from a tape and follow the rules, and this was Turing’s [original thought](https://plato.stanford.edu/entries/turing-machine/#HumaMachComp). Despite its inefficiencies, this system could be used to compute any computable problem.

But to show not all problems were computable, and disprove the Decision Problem, Turing used a technique called “proof by contradiction”. He began by claiming it was possible to build a Turing Machine that could compute whether a programme given some input would halt or run forever. He would then show this machine could result in a contradiction so could not exist.

This idea which Turing had touched upon would later be referred to as the [Halting Problem](Halting Problem). Today software developers know it as the infinite loop and it’s a problem many of them run into when writing loops or recursive functions. An example of an infinite loop in C++ can be seen below, the `while()` ‘programme’ has been provided with the input `true` so will print out `hello` to the console forever.

```
#include <iostream>
using namespace std;
int main() {
  while (true) {
    cout << "hello" << endl;
  }
}
```

Turing’s Halting Problem paradox showed if you built an infinite loop detecting machine a version could be created which when run on itself would result in the machine being in both a true and a false state. This contradiction showed it wasn’t possible to build an infinite loop detecting machine. It will take another article for me to describe the Halting Problem in detail, for now, you’ll just have to take my word for it.

This was groundbreaking work, for both mathematics and computers, as Mitchell states.

> [Turing] rigorously defined the notion of “definite procedure.” Second, his definition, in the form of Turing machines, laid the groundwork for the invention of electronic programmable computers. Third, he showed what few people ever expected: there are limits to what can be computed.

The Turing Machine then led to the concept of [Turing Completeness](https://en.m.wikipedia.org/wiki/Turing_completeness) which became the benchmark for modern computers and programming languages. A Turing Complete machine is simply a machine or programme which can simulate the behaviour of any Turing Machine. In basic terms, this just means it can solve any computable problem. It’s not 100% clear when the first Turing Complete machine appeared. Some have claimed it was Konrad Zuse’s Z3 in 1941, others Tommy Flower’s Colossus in 1943, but everyone accepts ENIAC, completed by the Americans in 1945, was Turing Complete.

Turing laid down the bedrock for the digital computer in the 1930s by refuting the Decision Problem and describing the Turing Machine. By the end of the 1950s, his great insight on computation led to the modern digital computer we know today. Tragically Turing committed suicide in 1954 after he was persecuted based on his sexual orientation by the British State. Sadly he would never see the wonders of the modern world he played a pivotal role in creating.

---

**Useful Resources:**

- [https://www.goodreads.com/book/show/5597902-complexity](https://www.goodreads.com/book/show/5597902-complexity)
- [https://youtu.be/t37GQgUPa6k](https://youtu.be/t37GQgUPa6k)
- [https://youtu.be/macM_MtS_w4uh](https://youtu.be/macM_MtS_w4uh)
- [https://plato.stanford.edu/entries/turing-machine/](https://plato.stanford.edu/entries/turing-machine/)