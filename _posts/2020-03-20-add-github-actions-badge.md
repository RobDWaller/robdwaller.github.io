---
layout: post
title: "How to Add a GitHub Actions Badge to Your Project"
description: "To add a GitHub Actions badge to your project just use the following markdown."
tags: [github, actions, badges, rust]
published: true
---
I've been playing with [GitHub Actions](https://github.com/features/actions) for a couple of months now. I had been an ardent [Travis](https://travis-ci.org/) loyalist, but given how impressive GitHub Actions are it feels inevitable I will make the switch.

One thing which tripped me up though was how to add GitHub Actions badges to my projects. This is so I can provide some observability and prove my projects build and the tests pass.

It turns out it is really simple, but it doesn't seem to be well documented anywhere. So I thought I'd make a note of it and share it.

To add a GitHub Actions badge to your project just use the following markdown. Obviously fill in the relevant `{user}` and `{repo}` information:

```markdown
[![Actions Status](https://github.com/{user}/{repo}/workflows/Build%20and%20Test/badge.svg)](https://github.com/{user}/{repo}/actions)
```

Here is an example for a Rust project I've been working on recently:

```markdown
[![Actions Status](https://github.com/RobDWaller/csp-generator/workflows/Build%20and%20Test/badge.svg)](https://github.com/RobDWaller/csp-generator/actions)
```

And you can see the badge here: 
[![Actions Status](https://github.com/RobDWaller/csp-generator/workflows/Build%20and%20Test/badge.svg)](https://github.com/RobDWaller/csp-generator/actions)

I hope this info helps, have fun with GitHub Actions, and if you have any questions drop me a message [@RobDWaller](https://twitter.com/RobDWaller).