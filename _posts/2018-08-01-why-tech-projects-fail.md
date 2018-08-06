---
layout: 'post'
title: "Why Tech Projects Fail: Management, Planning, Process"
description: "Without good management, planning and process it is simply not possible to write good code and produce great products which is what all developers want to do."
published: true
tags: [management, planning, process, development]
---
Tech projects fail all the time, or they produce less than is desired. For instance, the product works but the code is awful. As developers we've all worked on projects like this, or had to tidy them up, and it can be frustrating. So it's important we understand why tech projects fail so we can reduce their occurrence. And hopefully make development a more enjoyable activity and job.

As developers when we discuss project failure we're generally referring to code quality. Low quality code has four features:

- Poorly written
- No documentation
- Buggy
- Fails to meet business requirements

Many developers believe code quality is related to principles and tests. This is logical as developers who fail to follow principles or write tests produce poorly written, buggy code. But code principles and tests, while important, do not cause project failure or directly reduce code quality. They are symptoms rather than the root cause. Their absence highlights project failure but does not explain it.

Projects fail for three reasons:

## MPP

- Management
- Planning
- Process

## Management

Management and managers are the basis of project failure. Everything that can go wrong with a project derives from management.

Bad code is produced, as mentioned above, because developers don't write tests or follow code principles. But the reason developers don't follow code principles or write tests is due to experience and or time.

It is managers who define both experience and time. Managers are the ones who hire developers and if they only hire inexperienced developers things will go wrong, quickly. Inexperienced developers will often be able to make a product work, but they won't always appreciate the importance of principles, tests and documentation. And often they will struggle with push back, telling management they're wrong. Code quality can only suffer in an inexperienced environment, and this ultimately will lead to project failure.

There is nothing wrong with inexperienced developers, I was one for a long time. Inexperienced developers though require support and must be assigned suitable work. They should not be given too much responsibility and they must be mentored. Ideally by someone who can explain the value of tests, principles, documentation, and attention to detail.

Time, the other issue managers struggle with, is a result of complexity. The more complicated a project the more time is required. Managers often fail to understand project complexity and therefore set unrealistic or ill-informed timelines. This applies too much pressure and developers under pressure will often skip tests and principles. This will always result in bad code and errors.

The actions of managers have a strong link to code quality and project failure. If managers make bad decisions code quality falls and projects fail. If managers want to avoid project failure they need to hire the right team for their project. They also need to understand their project's complexity to define realistic timelines and this requires planning.

## Planning

Planning has four aims:

- Understand project complexity
- Highlight known unknowns
- Minimise unknown unknowns
- Define priority.

Many organisations fail to plan adequately, and some even refuse to plan. They don't see its value or believe their project is simple and it's possible to 'just get on with the work'. In my career I've only worked at one organisation who did proper planning. This is extraordinary given I've been coding professionally for over a decade. Also, it means my career is pot marked with failure and low quality code.

It is essential to plan, every project and task, no matter how small, requires planning. As a manager and a developer it is sensible to assume a project or task is more complicated than it seems. Most tasks, once you consider testing, coding, documentation, review and deployment, take at least two to three days to complete. If you're timelining in hours you're probably not considering complexity properly.

So what does planning look like? It can take many forms, but its main aim, as mentioned, is to understand complexity.

This can be achieved by sitting with a client and writing some user stories. Define what they want their users to achieve and why. Alternatively you can hire business analysts and UX specialists to learn about and document a client's business and user needs. Note a UX specialist is someone who researches user behaviour, not someone who just draws up sitemaps and wireframes.

There is also [Behaviour Driven Development](https://en.m.wikipedia.org/wiki/Behavior-driven_development). [Ciaran McNulty](https://twitter.com/ciaranmcnulty) has been pushing [BDD principles](https://youtu.be/83GbyDpJDI4) in the PHP community for a number of years. In his [latest talk](http://meetu.ps/e/Flwzn/2D0Hf/d) at PHP London he highlighted the benefit of [example mapping](https://cucumber.io/blog/2015/12/08/example-mapping-introduction) which aims to understand project complexity by writing requirements, rules and examples.

An example requirement may be:

```
Shop A has a user loyalty scheme.

For each dollar spent by a user the user receives one loyalty point.
```

On the surface this requirement seems simple. One dollar equals one loyalty point. But there are questions to answer or rules to define, for instance, what about tax?

This is where an example can help:

```
User 1 purchases Product A.

Product A costs $10 and there is 20% tax.

Product A's total cost is $12.

User 1 receives 10 loyalty points.
```

With an example the complexity of the loyalty scheme is clearer. Users only receive loyalty points for the cost of the product not the tax. Now imagine there are hundreds of examples for a big project. Suddenly the project is easier to understand, it is clearer what has to be done, and it's more testable. Also the unknown unknowns are reduced dramatically.

If you haven't read about [Behaviour Driven Development](https://en.m.wikipedia.org/wiki/Behavior-driven_development) I suggest you do. Even if you are unable to use it the underlying principles will help you become a better developer and or manager.

Project priority must also be clear before coding begins. If data entry is the most important aspect of a system, don't begin by building a notifications system.

Priority must be based on evidence, not whim. Just because the CEO or manager thinks something is important doesn't mean it is. Priority should be based on user feedback, user research or financials. If you're losing 20% of purchases due to a convoluted checkout process fix this before you implement the CEO's rebrand initiative.

Priority also changes over time and based on new information. So it must be tracked and fed into the planning of each feature. If you haven't got a clear priority list based on evidence then you will fail to deliver what you need to.

Planning is essential to project success. Developers need absolute clarity on what they need to produce. They cannot fulfil all the business requirements if there isn't a clear plan with well defined priorities and requirements. Code quality will also suffer without a plan. If developers have to constantly amend their code as new requirements or priorities are discovered 'hacking' will begin. As a result tests and principles will go out the window, quality will fall and the project will begin to fail.


## Process

Process is the final aspect of good project management. It is like the cherry atop the cake. When discussing process we must accept code is only one aspect of the process, and not the most important. If your process looks like 'write code', 'deploy code' something is horribly wrong.

A tech process has three aims:

- Ensure quality
- Minimise bugs
- Avoid delays

And a simple tech process may look like:

- Sprint planning
- Code
- Code review
- Bug fix
- Quality assurance
- Bug fix
- Deployment
- Sanity check

You could add more steps, such as documentation and automated testing. But the main point is 'code' is only one part of a multi-step process. The most important parts are testing and review. You have to assume there will be bugs, no matter how experienced the developer or how good the planning. So there must be steps to catch and fix bugs.

Another aspect of good process is communication. There must be a clear means for your team to communicate with each other. It is particularly important for them to be able quickly communicate problems or blockers. For me this is a five to ten minute daily stand up, for others it may be a Slack channel. Problems need to be exposed quickly as this will minimise delays as it allows resources to be reallocated and priorities amended.

Finally, teamwork is essential. Developers should never work in a silo on their own. Every piece of work should be looked at by multiple developers. A code review will cover some of this but it's important that developers plan and discuss their work together. This will help solve problems faster. It will also reduce pressure as no developer will feel solely responsible for a piece of work.

If you haven't got a clearly defined process a good place to start is the [Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/). It was written by [Joel Spolsky](https://twitter.com/spolsky) in 2000, and it defines 12 aspects of a good development team and process. You may not agree with all of it but a lot of it is valuable advice and still relevant almost 20 years later. Use it to assess where your team is today and then let it guide your progress. It will be difficult to achieve a perfect score, but if you improve in just two to three areas you'll feel the benefit.

Without a process code quality will suffer. Developers will work independently, produce code of varying quality and lots of bugs will slip into production. The knock on effects of this can be enormous. They may even result in complete project failure, so it is essential to implement a well structured process.

## The Budgets Myth

Some in the tech community will argue  it's not possible to get MPP right. Often they will argue there isn't enough budget and therefore time to do proper management, planning and process.

> "We just need to get on with the work..."

This is one of the biggest myths in software development. Also those who use it are displaying their ignorance of 'the business of tech'.

The truth is every tech project has a 'full cost' relative to the team employed to deliver it. It will take a set amount of developer days to fully deliver a project. Fully deliver means all business requirements are met and the project is bug free.

The full cost is always met, eventually. The only question is whether the full cost is met pre or post release and by whom. Bugs released into production will have to be fixed and the owner, client or supplier will need to meet these costs.

Shortcuts can be taken pre-release but costs will begin to spiral post-release and drive additional costs. Bugs are significantly more expensive to fix post-release. Usually because they are not budgeted for, may require structural changes, slow down other work and will require enhanced testing. A lack of documentation means developers take longer to understand existing code. This will decrease velocity and drive up the cost of bug fixes and system extension. Business requirements not fully met may reduce efficiency in other teams driving up costs in other parts of the business. This final point can have significant untracked financial implications for businesses.

As an example, I designed a data warehouse and visualisation system for a client. I predicted it would take a team of three developers and a part time project manager about six months to deliver version one. The client were not happy with this quote and gave my design to a company who said they would deliver the project in eight weeks.

Six months after the project began it still wasn't fully delivered. Also to save time the developers involved decided to connect the visualisation tool directly to MongoDB. In my plan MongoDB was part of the data transformation pipeline. A temporary data store, the data visualisation tool was never meant to connect to it. This shortcut saved time but it meant the data analysts didn't have a standardised and well structured dataset to consume in the visualisation tool. The warehouse was almost useless to them, they couldn't do their job and they began looking for alternatives.

The client decided in this case to go with a cheap quote rather than a realistic one. As a result the project overshot and it drove business inefficiencies in the data team. The very team the project was designed to help. Eventually the full cost of this project will be met, hopefully by the supplier, and my original quote will likely be exceeded dramatically. It is even possible the project will be shelved, resulting in an enormous waste of money.

The reality is if a project costs $100,000 to complete you will pay $100,000 to complete it. If you try to cut corners and only spend $50,000 you'll most likely end up spending more than $100,000 as costs accrue over time. The only way to reduce a budget is to cut the number of requirements until the work can be fully delivered for your budget.

Management, planning and process are essential to the good running of any tech project. Without them code quality will suffer and projects will fail. They are also closely linked to the financials of a project and if they are not right or ignored costs will spiral. As developers we need to focus on MPP and make sure it's right before we worry about code. Without good management, planning and process it is simply not possible to write good code and produce great products which is what all developers want to do.
