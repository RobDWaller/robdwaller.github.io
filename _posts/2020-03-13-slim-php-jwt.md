---
layout: post
title: "How to Easily Add JWTs to Slim PHP"
description: "The easiest way to add JWT authorisation to Slim PHP is via the library PSR-JWT"
tags: [php, slim, slim php, jwt, json web tokens]
published: true
---
Slim PHP is one of my favourite [web frameworks](https://www.slimframework.com/), it's simple to learn, lightweight, and great for building small websites and applications.

One of the best use cases for [Slim PHP](https://www.slimframework.com/) is when you need to build a small API with a handful of endpoints. In this scenario you may need to add a layer of security to authorise resource requests. A great way to do this is with [JSON Web Tokens](https://tools.ietf.org/html/rfc7519).

JWTs allow you to provide users with access to API endpoints and their resources in a granular manner. Access can be time limited, restricted to certain user groups and more. 

The easiest way to add JWT authorisation to Slim PHP is via the library [PSR-JWT](https://packagist.org/packages/rbdwllr/psr-jwt). It is a [PSR 7 / 15](https://www.php-fig.org/psr/psr-7/) compliant JWT creation and validation library, which works perfectly with Slim PHP as it is also PSR 7 / 15 compliant. 

[PSR-JWT](https://packagist.org/packages/rbdwllr/psr-jwt) is built on top of [ReallySimpleJWT](https://github.com/RobDWaller/ReallySimpleJWT) and it exposes authorisation middleware which can easily be added to Slim PHP's routing system.

Here's an example of how to add the middleware to a Slim PHP route:

```php
require '../../vendor/autoload.php';

$app->get('/route/example', function (Request $request, Response $response) {
    $response->getBody()->write("JSON Web Token is Valid!");

    return $response;
})->add(\PsrJwt\Factory\JwtMiddleware::json('Secret123!456$', 'jwt', 'Authorisation Failed'));
```

It's literally a few lines of code, you just pass the `JwtMiddleware::json()` method a token secret, a request key and a response message. If the JSON Web Token passed with the request is invalid you'll see the response message and if it is valid the route will load as expected.

PSR-JWT is also completely customisable, you can even use your own [handlers](https://www.php-fig.org/psr/psr-15/) to define how authorisation should be handled and what the response should be. Have a read of the [documentation](https://github.com/RobDWaller/psr-jwt/blob/master/README.md) to find out more.

Also if you want to understand JSON Web Tokens in more detail I suggest you give [RFC 7519](https://tools.ietf.org/html/rfc7519) and [RFC 6750](https://tools.ietf.org/html/rfc6750) a read. If you have any questions feel free to drop me a message on Twitter [@RobDWaller](https://twitter.com/RobDWaller).
