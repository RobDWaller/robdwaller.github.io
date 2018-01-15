---
layout: post
title: 'Why You Must Always Follow Test to Break Principles'
published: true
description: 'When building an application and writing code there are two types of test you can run to check everything works, test to work and test to break.'
tags: [tests, php, phpunit, unit tests, test to work, test to break]
---
When building an application and writing code there are two types of test you can run to check everything works. The first is 'test to work', these are tests that under normal conditions check your code works.

To take the example of a car, you might create a test that checks when you put the key in the ignition and then turn it the engine starts.

```
Given there is a car with an ignition
When I insert a key
And turn the key
Then the car's engine will start
```

Similarly with code you will write a unit test that checks when you pass an expected argument into a method that you are returned the value you expect. You write and carry out these tests to prove your application or car works.  

While 'test to work' is important, and you should always write tests that prove your code works, you must also 'test to break'. This is where you ask difficult and unexpected questions of your code and application. This is important because you can achieve 100% code coverage and very high path coverage by just writing 'test to work' tests. However 'test to work' does not guarantee your code will work under all conditions.

To return to our car example, a 'test to break' test may read as follows. Insert a screwdriver into the ignition, twist it and wiggle it, the engine must not start. Another set of tests to break may ask what happens if a car is driven into a wall at 20mph, 40mph, 60mph and 80mph.

```
Given a moving car is traveling at 20mph
When it is guided into a brick wall
Then the seat belt tightens
And the airbag deploys
```

Each of these tests check that certain things don't break and in both cases our tests are checking what happens under abnormal circumstances. It's unlikely that someone will drive a car into a wall at 60mph, however you should still test for what happens.

Code should be tested in exactly the same way. Let's look at an example, imagine we have some magical code that builds car objects for a car ordering system. Like the Ford Motoring company we like black cars so users can only order black cars. There are also two other rules, so our application rules are as follows.

- Cars must be black
- Cars must have four wheels
- Cars must have three or five doors

To begin we write a test to build a car object that accepts three arguments `$colour`, `$wheels` and `$doors`. There are then three getter methods to retrieve this information which we will run assertions on.

```php
public function testMakeCar()
{
    $car = new Car('black', 4, 5);

    $this->assertEquals('black', $car->getColour());

    $this->assertEquals(4, $car->getWheelCount());

    $this->assertEquals(5, $car->getDoorCount());
}
```

We then of course write our Car class to fulfil the test...

```php

namespace App;

class Car
{
    private $colour;

    private $wheels;

    private $doors;

    public function __construct(string $colour, int $wheels, int $doors)
    {
        $this->colour = $colour;

        $this->wheels = $wheels;

        $this->doors = $doors;
    }

    public function getColour(): string
    {
        return $this->colour;
    }

    public function getWheelCount(): int
    {
        return $this->wheels;
    }

    public function getDoorCount(): int
    {
        return $this->doors;
    }
}
```

Really simple, the next step would be to take this Car object and pass it to an Order object which will process the car order. In our example the Order class will accept a Car object and there will be a single method that will output an order statement...

```
You have ordered a black car with 4 wheels and 5 doors
```  

We also want to test this for three doors and five doors as our rules above state. So we write two tests...

```php
public function testOrderFiveDoorCar()
{
    $car = new Car('black', 4, 5);

    $order = new Order($car);

    $this->assertEquals(
        'You have ordered a black car with 4 wheels and 5 doors',
        $order->getOrderDetails()
    );
}

public function testOrderThreeDoorCar()
{
    $car = new Car('black', 4, 3);

    $order = new Order($car);

    $this->assertEquals(
        'You have ordered a black car with 4 wheels and 3 doors',
        $order->getOrderDetails()
    );
}
```

We then write our Order class code to fulfil the tests...

```php

namespace App;

use App\Car;

class Order
{
    private $car;

    public function __construct(Car $car)
    {
        $this->car = $car;
    }

    public function getOrderDetails()
    {
        return 'You have ordered a ' . $this->car->getColour() . ' car with ' . $this->car->getWheelCount() . ' wheels and ' . $this->car->getDoorCount() . ' doors';
    }
}
```

And it works, our tests pass and we have 100% code coverage, GREAT!! We should have also achieved 100% path coverage as we have no control structures in our code. In essence we've proved our code works, fulfilled the defined rules and if we use the code in the manner defined above it will work fine.

We haven't though fully tested our code as we haven't written any 'test to break' tests. For example what would happen if we pass blue as the colour, or 6 doors, or eight wheels into our car object?

The answer is nothing, our code will execute fine and we will just get output from our `Order::getOrderDetails()` method that looks like this...

```
You have ordered a blue car with 8 wheels and 6 doors
```

This of course will break all our application rules. And in the real world it's precisely how another developer or user may accidentally use the code in the future. To get things right we need to write some 'test to break' tests that check what happens if our code is misused.

We'll write three new tests, one to check for black colour, one for four wheels and a final one for three or five doors...

```php
/**
 * @expectedException App\OrderException
 * @expectedExceptionMessage You must order a black car
 */
public function testOrderBlueCar()
{
    $car = new Car('blue', 4, 3);

    $order = new Order($car);

    $order->getOrderDetails();
}

/**
 * @expectedException App\OrderException
 * @expectedExceptionMessage You must order a car with 4 wheels
 */
public function testOrderEightWheelCar()
{
    $car = new Car('black', 8, 3);

    $order = new Order($car);

    $order->getOrderDetails();
}

/**
 * @expectedException App\OrderException
 * @expectedExceptionMessage You must order a car with 5 or 3 doors
 */
public function testOrderSixDoorCar()
{
    $car = new Car('black', 4, 6);

    $order = new Order($car);

    $order->getOrderDetails();
}
```

The new tests are going to force exceptions on the `Order::getOrderDetails()` method using [PHPUnit annotations](https://phpunit.de/manual/current/en/appendixes.annotations.html#appendixes.annotations.expectedException). You could choose to just return an error message or a boolean `false`, I'm though not a fan of mixed return types nor returning error strings, personal preference... Also you could impose exceptions in the Car object constructor, again though I'm not a fan of doing this.

However, with these three 'test to break' tests now in place we impose our application rules explicitly. Our order process will fail if it receives a Car object containing the wrong data, which is what we want.

To fulfil these tests I simply add a private `validate()` method to my Order class that I call in the `getOrderDetails()` method. In addition, I add an OrderException class that extends the PHP Exception class, I like explicit exceptions too...

```php
private function validate(): void
{
    if ($this->car->getColour() !== 'black') {
        throw new OrderException('You must order a black car');
    }

    if ($this->car->getWheelCount() !== 4) {
        throw new OrderException('You must order a car with 4 wheels');
    }

    if ($this->car->getDoorCount() !== 5 && $this->car->getDoorCount() !== 3) {
        throw new OrderException('You must order a car with 5 or 3 doors');
    }
}
```    

Our code now fulfils the tests and it can only be used in one way. A developer cannot throw a Car object at the Order object without complying with our application rules. And it means our code and application are now more robust and properly tested.

Everything I've stated in this post I hope is obvious as the example is very simple. However, in more complex applications things are less obvious and more likely to go wrong, especially when integrated. This is why it is essential to follow 'test to break' principles and always look for ways in which your code can be misused. This will have a number of benefits, your application and code will be more robust meaning you'll sleep better at night, and importantly you'll spend less time bug fixing after launch.

If you would like to view a working version of the code discussed in this post please take a look at the [associated repository](https://github.com/RobDWaller/test-to-break). And of course if you have any questions or thoughts please message me on Twitter [@RobDWaller](https://twitter.com/RobDWaller)
