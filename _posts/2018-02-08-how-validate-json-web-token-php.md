---
title: "How to Validate a JSON Web Token in PHP"
layout: post
description: ""
published: false
tags: [JWT]
---
In my previous post on the topic of JSON Web Tokens I talked through the process of creating a JWT in PHP. It is a relatively standard process across all languages so should be a useful tutorial for all developers whatever the language they code with. If you wish to learn more about JSON Web Tokens I suggest you give it a read as it provides a more detailed introduction on JWTs than this post on JWT validation.

This short tutorial is based on the work I have done on my own PHP JWT library ReallySimpleJWT. As mentioned previously my library allows you to get started with JSON Web Tokens in PHP very quickly as it offers a very simple interface to manage the process.

```php
use ReallySimpleJWT\Token;

// Generate a token
$token = Token::getToken('userIdentifier', 'secret', 'tokenExpiryDateTimeString', 'issuerIdentifier');

// Validate the token
$result = Token::validate($token, 'secret');
```

For those of you who would like to understand how JSON Web Tokens actually work though my previous tutorial and this one on validation should help. I suggest you read both so that you have a full understanding of the basics.

## How to Validate a JSON Web Token in PHP

JSON Web Token security is mainly based on the token signature. For those of you who have not used JWTs before they are a Base64Url string separated into three parts by dots. They include the header, the payload and the signature, as shown in this code example.

```js
// Token structure
header.payload.signature

// A real world token
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9.NYlecdiqVuRg0XkWvjFvpLvglmfR1ZT7f8HeDDEoSx8
```

The header and payload are encoded JSON strings that contain information on the token and the user or system using the token. In the payload for example you may store a user identifier. The signature is created by hashing the header and payload part of the token, eg `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMjN9`, along with a secret or salt only known to the token author.

This achieves security because if anyone were to attempt to tamper with the header or more likely the payload when the author attempts regenerate the signature with the received header and payload string the signature would not match the received signature. 
