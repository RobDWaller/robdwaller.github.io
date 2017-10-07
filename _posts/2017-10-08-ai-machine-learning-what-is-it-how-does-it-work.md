---
layout: post
title: AI and Machine Learning: 2. What is it and How Does it Work?
description:
published: false
tags: []
---
As touched upon in the series introduction when we're discussing 'Artificial Intelligence' we're not really discussing Artificial Intelligence at all. What we're actually discussing is Machine Learning, which is a very different topic.

One of the reasons why the term AI is often used in place of machine learning is that machine learning is an incredibly complicated topic. It's so complicated and difficult to explain and understand that it may as well be Artificial Intelligence, or at least that's how the media seem to treat it. It is though important to try and understand what machine learning is so that you can understand where we are today and how far we still have to go to achieve Artificial Intelligence.

So what is machine learning?

On a basic level machine learning involves lots and lots of data and what is called a 'model'. A model is simply a mathematical algorithm or a collection of mathematical algorithms that can tell you something about your data. For example you can present an image to Google Vision and it will use machine learning to tell you information about the image. In the example below I presented a picture of the Cotswolds to Google Vision*...

!['Google Vision on the Cotswolds'](/assets/img/google-vision.PNG)   

As can be seen Google Vision is very confident there is a historic site, some sky and a village. It's quite incredible really, but it should be noted that none of Google Vision's predictions are 100% accurate nor 100% confident. And this points to a wider issue in machine learning that there is still a lot of grey space and uncertainty, we're not dealing with absolutes. But either way how does Google Vision work and how did Google achieve this?

Most likely Google used Computational Graphs and Neural Networks. You can read more about these concepts but essentially they are just machine learning tools, in fact a neural network is just a type of machine learning model. On a base level Google wrote a number of algorithms to spot certain items in images they then combined them and 'trained' them against a very large data set until they were confident in the model they had produced. This model can then be queried by a new image and the model will return the information we see above.

What though does 'training' mean, and how do you train a model? A relatively simple example of this is provided by Arkadiusz Kondas who has written a 'simple' machine learning library for PHP called php-ml. In his code example Arkadiusz displays the basic steps of generating a machine learning model.

```
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

To begin you create a dataset that a computer can understand, in this case two arrays. The first is the data you are interested in, the `$samples`, and the second are the `$labels`, what the data or `$samples` represents. Essentially we're going to present our model with some data and tell it what it is. Google Vision will have done something very similar, it will have acquired a large set of image data and categorised it before running it against the models it had written.

The next step is to train our model, in this case the Nearest Neighbours model. Once trained with the data the model can make a prediction against a new piece of data that doesn't have an associated label. It can make a guess at what the label should be.   
