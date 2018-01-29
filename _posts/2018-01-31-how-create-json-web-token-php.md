---
layout: 'post'
title: 'How to Create a JSON Web Token Using PHP'
description: ""
published: false
tags: [php, json, jwt, tokens, authentication]
---

I have spent the last year working on and off on a PHP JSON Web Token library called [ReallySimpleJWT](), and this week I released [version 1.0.0](). This I regard as the first production ready release and the code is accessibly via [GitHub]() and [Packagist]().

For those of you who have not come across JSON Web Tokens before they are a simple, URL friendly, token based authentication system. They allow you to authenticate a user without the need to maintain sessions, use cookies or regularly query a database. They also allow you to transfer user information via JSON efficiently, especially when using URLs, as the tokens are compact.

Each token is broken down into three parts and each part is concatenated by a dot.

- **Header:** This contains information on the token type, always JWT, and the hashing algorithm used, for example HMAC SHA256 or RSA.
- **Payload:** This contains any information you wish to transfer about the user, for example the user identifier.
- **Signature:** This secures the token and is a hash of the header, payload and secret.

```js
// Token structure
header.payload.signature

// A real world token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

JWT security is achieved via the signature which is created by hashing the header and payload and securing this with a secret only known to the author. When receiving a token from a user the author will then be able to validate the signature by re-hashing the received header and payload with the known secret and checking it matches the received signature. If anyone were to tamper with the header or payload the signatures would not match and authentication would fail.

The ReallySimpleJWT library offers an easy to use interface for generating and validating JSON Web Tokens.  

```php
use ReallySimpleJWT\Token;

// Generate a token
$token = Token::getToken('userIdentifier', 'secret', 'tokenExpiryDateTimeString', 'issuerIdentifier');

// Validate the token
$result = Token::validate($token, 'secret');
```

The library will help you get going with JSON Web Tokens, especially if you have a simple API you'd like to build that requires authentication. The library also offers more advanced usage and functionality if you'd like to read the documentation.

## How to Build Your JSON Web Token in PHP

What though if you'd like to build your own JSON Web Token Generator? Or even just learn a little bit more about the inner workings of JSON Web Tokens? It's very simple and the following guide will show you how to create your own JSON Web Tokens.

The examples below are written using PHP, but the concepts apply to any language so any developer should find them useful. The full script is at the bottom of this guide.

### Create the Header and Payload

To begin with we want to create our header and payload JSON strings. We'll do this based on two simple arrays each asserting a number of claims about the token, you can read more about claims in the associated [RFC](https://tools.ietf.org/html/rfc7519#section-4). For the header we define the type `typ` and the algorithm `alg` claims which are RFC standard claims; for the payload we'll create our own claim `user_id`.

```php
// Create token header as a JSON string
$header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);

// Create token payload as a JSON string
$payload = json_encode(['user_id' => 123]);
```

As you can see each array is JSON encoded.

### Create Base64Url Header and Payload Strings

Next we encode our `$header` and `$payload` JSON strings as Base64Url strings. This is slightly different to a standard Base64 string and the is no PHP Base64Url magic method yet. So we have to do a bit of string replace magic, this replaces `+` with `-`, `/` with `_` and `=` with `''`. This is so that the Base64 string will work nicely in URLs and ensure the token is passed in its pure without any URL encoding happening.    

```php
// Encode Header to Base64Url String
$base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));

// Encode Payload to Base64Url String
$base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
```

### Create the Signature

To create the signature we need to use the `hash_hmac()` method in PHP using the sha256 algorithm. We pass in a concatenated string of the Base64Url encoded header and footer `$base64UrlHeader . "." . $base64UrlPayload`. It's important to note we have to include the `.` between the two strings. We add a secret, ideally a strong one that is longer than twelve characters. The ReallySimpleJWT library enforces this principle, but for our example we don't need to worry. Finally we force the `hash_hmac()` method to return the output as binary data.

```php
// Create Signature Hash
$signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'abC123!', true);
```

### Base64Url Encode the Signature

Once we have created the signature we simply need to Base64Url encode it as we did with the header and payload.

```php
// Encode Signature to Base64Url String
$base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
```

### Create the JSON Web Token

Finally we create the JSON Web Token by concatenating the header `$base64UrlHeader`, payload `$base64UrlPayload` and signature `$base64UrlSignature`. Each part of the JWT is divided by a dot `.`.

```php
// Create JWT
$jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
```

And that's it, really easy. You can test the JWT that this code produced at the [JWT.io website](https://jwt.io). The code is below in full and I'd suggest you read the relevant [documentation on the JWT site]() along with the [RFC]().

You can of course use the [ReallySimpleJWT Library]() if you wish and I will produce a post on validating JWTs in the next week or two. If you have any thoughts or have noticed any mistakes please message me [@RobDWaller]() on Twitter.

## The Script

```php
// Create token header as a JSON string
$header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);

// Create token payload as a JSON string
$payload = json_encode(['user_id' => 123]);

// Encode Header to Base64Url String
$base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));

// Encode Payload to Base64Url String
$base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

// Create Signature Hash
$signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'abC123!', true);

// Encode Signature to Base64Url String
$base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

// Create JWT
$jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

echo $jwt;
```
