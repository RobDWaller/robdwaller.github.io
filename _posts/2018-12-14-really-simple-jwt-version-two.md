---
layout: post
title: "ReallySimpleJWT Version 2.0.0 to be Released Early 2019"
description: "To coincide with the deprecation of PHP 7.0 and the release of PHP 7.3 I have been working on version 2.0.0 of my Really Simple JSON Web Token library."
tags: [jwt, php, json, json web tokens]
published: true
---
To coincide with the deprecation of PHP 7.0 and the release of PHP 7.3 I have been working on version 2.0.0 of my [Really Simple JSON Web Token library](https://github.com/RobDWaller/ReallySimpleJWT).

I recently released [two alpha versions](https://github.com/RobDWaller/ReallySimpleJWT/releases/tag/2.0.0-alpha) of the library and a beta version will follow shortly. The aim is to have the release candidate ready for early 2019 and do the full release two weeks later.

Version two will be a significant departure from version one, so anyone who is currently using the library should plan their upgrade carefully. There will be a number of improvements made to the library:

- Drop support for PHP 7.0 and add support for PHP 7.3.
- Comply with the [JWT RFC](https://tools.ietf.org/html/rfc7519) more closely.
- Provide a more expressive interface.
- Make the library extendable so users can implement their own token encoding.

The new release will be built around two classes `Build` and `Parse`, the former will generate tokens and the later will parse and validate them. The `Token` facade class from version one will remain with minor amends, the rest of the codebase has been re-written.

As an example the new `Build` class can be used as follows:

```php
$build = new Build('JWT', new Validate(), new Encode());

$token = $build->setSecret('helLLO123$!456ht')
    ->setIssuer('127.0.0.1')
    ->setExpiration(time() + 100)
    ->setPrivateClaim('user_id', 2)
    ->build();
```

There will be interfaces provided for all the RFC defined claims such as `setAudience()` and `setNotBefore()`. This I hope will allow library users to better comply with the JWT RFC standard.

I believe version 2.0.0 will be a big step forward for the ReallySimpleJWT Library but I appreciate some users will wish to continue using version one, so I will continue to support version one for six months after the release of version two.

If you have any questions on this topic or the ReallySimpleJWT library in general please message me on Twitter [@RobDWaller](https://twitter.com/RobDWaller).
