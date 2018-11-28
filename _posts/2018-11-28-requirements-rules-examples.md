---
layout: post
title: "Simple, Fast Development Planning with Requirements, Rules and Examples Spreadsheets"
description: "A Requirements, Rules and Examples spreadsheet helps a team understand complexity, write better tests and improves transparency."
tags: [planning, tests, complexity, RRE]
published: true
---
In an ideal world all development teams will plan their projects via a combination of [Behaviour Driven Development](https://www.youtube.com/watch?v=pGtyaBm-Xbk), [Agile Principles](https://www.youtube.com/watch?v=Z9QbYZh1YXY) and [Scrum / Kanban](https://www.youtube.com/watch?v=rIaz-l1Kf8w). Sadly we don't exist in an ideal world and as such many development teams, possibly the majority, are unable to use approaches like BDD. In fact many teams do little to no planning before they begin development and this results in subpar output.

There are a number of reasons why this can occur:

- Time constraints
- Financial pressures
- Lack of resource
- Team and organisational ignorance

As I have mentioned in a [previous post](https://rbrt.wllr.info/2018/08/01/why-tech-projects-fail.html) a lack of planning is one of the main reasons tech projects fail. Also the primary aim of a developer / development team is:

> To produce code and products which function and are bug free.

In an environment where there is a lack of planning this will be difficult to achieve and most likely the project will fail or deliver poor results. So how do we improve planning where a team struggles with resource and time constraints or other problems?

An important question to ask is, what is the aim of a project plan? Three things jump to mind:

- **Understand complexity:** developers need to know what to build in detail to minimise 'unknown unknowns'.
- **Easier to tests:** a plan with examples or test cases makes it easier for developers and QAs to write and run tests.
- **Increase transparency:** everyone involved in a project understands what has to be done to deliver it.

One approach which achieves these three aims is a Requirements, Rules and Examples spreadsheet, and it is so simple one person can complete it in less than an hour. I'd advise a team complete it together, but I appreciate the pressure some teams are under.

So how does RRE work? It's easy, get a spreadsheet and create three columns, from left to right, with the headers Requirements, Rules and Examples.

- **Requirements:** defines what features, etc are required to complete a task.
- **Rules:** defines what rules each requirement must comply with.
- **Examples:** provides an example of a requirement in use which complies with the defined rules.

To illustrate this process I have created an [RRE spreadsheet](https://docs.google.com/spreadsheets/d/1g75Ts7-_tXYqqoRgZfM1tkw2Fm5muwHMe5viX0HFzSU/edit?usp=sharing) for a simple web form which accepts event sign ups. Let's look at the first requirement and its first rule.

- **Requirement 1:** The web form must have a first name field.
- **Rule 1.1:** The first name field is a required field.
- **Example 1.1.1:** A user fills in the form but leaves the first name field empty. When they submit the form a validation error message appears stating 'Please fill in a valid first name: only alpha numeric characters, spaces and dashes allowed.'
- **Example 1.1.2:** A user fills in the form and enters their first name. When they submit the form it processes successfully and a success message appears 'Thank you for signing up to our event.'

As the numbers suggest as you move from left to right on the spreadsheet more information is filled out. So each requirement has an equal or greater amount of rules, and each rule has an equal or greater amount of examples. Requirement 1 has two rules and seven examples.

<img src="/assets/img/rre.JPG" />

What is apparent is the creation of a first name field on a web form is more complicated than it may seem on the surface. Our RRE spreadsheet which only took a matter of minutes to fill IN highlights this well.   

The second benefit of RRE is it makes testing easier as in essence each example is a test case. A developer can write a unit test for the example and a QA can do a manual test of the example on the final product. To highlight this I have created a [Python Flask code repository](https://github.com/RobDWaller/requirements-rules-examples) that shows this in action.

If we look at the file `test/test_form_validation.py` we can see tests which comply directly with the examples:

```python
def test_name_empty(self):

    validation = FormValidation()

    self.assertFalse(validation.name(''))

def test_name_filled(self):

    validation = FormValidation()

    self.assertTrue(validation.name('James'))

def test_name_filled_two(self):

    validation = FormValidation()

    self.assertTrue(validation.name('James Christopher'))
```

These three tests cover the first four examples in our spreadsheet: 1.1.1, 1.1.2, 1.2.1 and 1.2.2.

For instance, `self.assertTrue(validation.name('James Christopher'))` complies directly with *A user fills in the form and enters the first name 'James Christoper'. When they submit the form it processes successfully and a success message appears 'Thank you for signing up to our event.'*

The final benefit of an RRE spreadsheet is transparency. You create a document that everyone can understand and highlights what needs to be done. This can have enormous benefits when you need to explain to stakeholders how long a piece of work will take and how complicated it is.

There are no rules around how you write your requirements, rules and examples. The aim is simply to document your plan as fast as is possible. As mentioned above my advice is you create this spreadsheet in a team setting as you'll be able to come up with more examples faster. But if you can't it isn't the end of the world.

A Requirements, Rules and Examples spreadsheet is not a replacement for Behaviour Driven Development or Scrum Practices. It is an approach to help those who are currently struggling with planning tech and development projects. And it should be seen as a first step on your way to BDD. It will help you plan projects better and show to stakeholders the benefits of better planning. And hopefully this will result in better code and products with fewer bugs.
