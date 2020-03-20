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

To add a GitHub Actions badge to your project just use the following markdown. Obviously fill in the relevant `{user}`, `{repo}` and `{action}` information:

```markdown
[![Actions Status](https://github.com/{user}/{repo}/workflows/{action}/badge.svg)](https://github.com/{user}/{repo}/actions)
```

One thing which can be a little confusing is what the `{action}` name should be. This should reference the name property in the yaml action config file within your `./.github/workflows` directory.

For a [Rust project](https://github.com/RobDWaller/csp-generator/blob/master/.github/workflows/build-test.yml) I recently worked on this is `Build and Test`.

```yaml
name: Build and Test

on: [push]

jobs:
  build:
  ...
```

The only change required for the badge URL is to replace the spaces with `%20`, so the URL `{action}` reference becomes `Build%20and%20Test`.  

Here is an example from my [Rust project](https://github.com/RobDWaller/csp-generator/blob/master/README.md) which should make this clearer:

```markdown
[![Actions Status](https://github.com/RobDWaller/csp-generator/workflows/Build%20and%20Test/badge.svg)](https://github.com/RobDWaller/csp-generator/actions)
```

And you can see the working badge here: 
[![Actions Status](https://github.com/RobDWaller/csp-generator/workflows/Build%20and%20Test/badge.svg)](https://github.com/RobDWaller/csp-generator/actions)

I hope this info helps, have fun with GitHub Actions, and if you have any questions drop me a message [@RobDWaller](https://twitter.com/RobDWaller).