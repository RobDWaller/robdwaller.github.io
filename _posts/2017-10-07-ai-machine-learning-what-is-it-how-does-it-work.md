---
layout: post
title: "AI and Machine Learning: 2. What is it and How Does it Work?"
description: "On a basic level machine learning involves lots and lots of data and what is called a 'model'"
published: true
tags: [ai, machine learning, explanation, google vision, tensors, php-ml, neural networks]
---
As touched upon in the [series introduction](https://robdwaller.github.io/2017/08/24/ai-machine-learning-series-introduction.html) when we're discussing 'Artificial Intelligence' we're not really discussing Artificial Intelligence at all. What we're actually discussing is Machine Learning, which is a very different topic.

One of the reasons why the term AI is often used in place of machine learning is that machine learning is an incredibly complicated topic. It's so difficult to explain and understand that it may as well be Artificial Intelligence, or at least that's how the [media often treat it](https://www.standard.co.uk/news/techandgadgets/london-tech-expert-dont-expect-skynet-situation-any-time-soon-after-facebook-shuts-down-ai-a3601601.html). It is though important to try and understand what machine learning is so that you can grasp where we are today and how far we still have to go to achieve Artificial Intelligence.

On a basic level machine learning involves lots and lots of data and what is called a 'model'. A model is simply a mathematical algorithm or a collection of mathematical algorithms that can tell you something about your data. For example you can present an image to [Google Vision](https://cloud.google.com/vision/) and it will use machine learning to tell you information about the image. In the example below I presented a picture of the Cotswolds to Google Vision*...

!['Google Vision on the Cotswolds'](/assets/img/google-vision.PNG)   

As can be seen Google Vision is very confident there is a historic site, some sky and a village. It's quite incredible really, but it should be noted that none of Google Vision's predictions are 100% accurate nor 100% confident. And this points to a wider issue in machine learning that there are still a lot of grey areas and uncertainty, we're not dealing with absolutes.

Google use [Computational Graphs](https://en.wikipedia.org/wiki/Graph_theory) and [Neural Networks](https://en.wikipedia.org/wiki/Artificial_neural_network) to make tools like Vision work. You can [read more about these concepts](https://cloud.google.com/blog/big-data/2016/09/around-the-world-landmark-detection-with-the-cloud-vision-api) but essentially they are just machine learning tools, in fact a neural network is just a type of machine learning model. On a base level Google wrote a number of models to spot certain items in images, usually just groups of pixels, they then combined them, and finally 'trained' them against a very large data set until they were confident in the model they had produced. This model can then be queried by a new image and the model will return the information we see above.

What though does 'training' mean, and how do you train a model? Training involves several steps, first an initial model is written based on a small amount of data. Then more data is thrown at the model and it is assessed how accurate the model is, if it isn't very accurate the model is adjusted to become more accurate and then more data is thrown at it. This process can happen many times, thousands and possibly millions of times until the model is very accurate, 90% and above**.

This process is often automated without any human intervention and known as 'learning' and it's why programmers often say they don't understand the inner workings of a model. For more complex applications like Google Vision multiple models will be combined so the complexity is very high.

A relatively simple example of machine learning is provided by [Arkadiusz Kondas](https://twitter.com/ArkadiuszKondas) who has written a 'simple' machine learning library for PHP called [php-ml](https://github.com/php-ai/php-ml). In his code example Arkadiusz displays the basic steps of generating a machine learning model.

```php
<?php

require_once 'vendor/autoload.php';

use Phpml\Classification\KNearestNeighbors;

$samples = [[1, 3], [1, 4], [2, 4], [3, 1], [4, 1], [4, 2]];
$labels = ['a', 'a', 'a', 'b', 'b', 'b'];

$classifier = new KNearestNeighbors();
$classifier->train($samples, $labels);

echo $classifier->predict([3, 2]);
// return 'b'
```

To begin you create a dataset that a computer can understand, in this case two arrays, sometimes called [tensors](https://en.wikipedia.org/wiki/Tensor). The first array is the data you are interested in, the `$samples`, and the second array is the `$labels`, what the data or `$samples` represents. Essentially we're going to present our model with some data and tell it what it is, we're 'training' the model.

The model used here is a pre-built one called [K Nearest Neighbours](). Once trained with the data the model can make a prediction against a new piece of data that doesn't have an associated label. It can make a guess at what the label should be, in this case `'b'`. This is a very simple machine learning process as it is only one step and there is no learning involved, but it does show roughly how it works.

Machine Learning is and will become a very powerful tool that will transform the way we live. Already it is powering every day tools and application such as Google Search, Uber and driverless car technology. It is not Artificial Intelligence though, it is still ultimately a dumb computer that has been programmed by a human. In the next article we'll look at where machine has got and how advanced it has become.  

<small>* I was on holiday there at time of writing.</small>
<small>** 90% isn't very accurate, but when you can use machine learning to process a billion records of data very quickly it's incredible powerful and efficient. Less accurate than a human, but far, far faster and cheaper.</small>

### Previous posts in this series:
- [AI and Machine Learning: Series Introduction](https://robdwaller.github.io/2017/08/24/ai-machine-learning-series-introduction.html)
- [AI and Machine Learning: 1. A Brief History of Automation](https://robdwaller.github.io/2017/09/12/ai-machine-learning-brief-history-automation.html)
