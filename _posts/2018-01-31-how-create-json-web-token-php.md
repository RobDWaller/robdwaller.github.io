---
layout: 'post'
title: 'How to Create a JSON Web Token Using PHP'
description: ""
published: false
tags: [php, json, jwt, tokens, authentication]
---

I have spent the last year working on a JSON Web Token library in PHP called ReallySimpleJWT, and this week I released version 1.0.0. This I regard as the first production ready release and the code is accessibly via GitHub and Packagist.

For those of you who have not come across JSON Web Tokens before they are a simple, URL friendly, token based authentication system. They allow you to authenticate a user without the need to maintain sessions, use cookies or regularly query a database. They also allow you to transfer user information via JSON efficiently, especially when using URLs, as the tokens are compact.

Each token is broken down into three parts and each part is concatenated by a dot.

- **Header:** This contains information on the token type, always JWT, and the hashing algorithm used, for example HMAC SHA256 or RSA.
- **Payload:** This contains any information you wish to transfer about the user, for example their user identifier.
- **Signature:** This secures the token and is a hash of the header, payload and secret.

```js
// Token structure
header.payload.signature

// A real world token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

Security is achieved via the signature, this is created by hashing the header and payload and securing this with a secret only known to the author. When receiving a token from a user the author will then be able to validate the signature by re-hashing the received header and payload with the known secret and checking it matches the received signature. If anyone were to tamper with the header or payload the signatures would not match and authentication would fail.

The ReallySimpleJWT library offers a simple means of generating and validating JSON Web Tokens.  

```php
use ReallySimpleJWT\Token;

// Generate a token
$token = Token::getToken('userIdentifier', 'secret', 'tokenExpiryDateTimeString', 'issuerIdentifier');

// Validate the token
$result = Token::validate($token, 'secret');
```

The library is really straight forward to use and will help you get going with JSON Web Tokens, especially if you a simple API you'd like to build. The library also offers more advanced usage and functionality if you'd like to read the documentation.

## How to Build Your JSON Web Token in PHP

What though if you'd like to build your own JSON Web Token Generator? Or even just learn a little bit more about the inner workings of JSON Web Tokens. It's very simple and the following guide will show you how. The examples below are written using PHP, but the concepts apply to any language so any developer should find them useful.

To begin  

```php
<?php

$heder = json_encode(['typ' => 'JWT', 'alg' => '']);
