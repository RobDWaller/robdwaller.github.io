---
layout: post
title: "How to Write Tests in Deno"
description: "This post aims to show you how to begin to write tests in Deno, and provides an honest appraisal of Deno's test tools so you are aware of current pitfalls."
tags: [deno, javascript, tests, unit tests]
published: false
---
Deno is a new JavaScript / Typescript runtime which aims to supercede Node.js, and with the   the release of [Deno 1.0](https://deno.land/v1) it is gaining more traction with developers. Personally I'm a big fan of [Deno](https://deno.land/), I think it's a step forward for the JavaScript community, and I hope it succeeds. 

I'm also a big fan of tests and Test Driven Development principles, as such I am pleased to see Deno like Rust and other languages has tests built in. With this post I aim to show you how to begin to write tests in Deno, and provide an honest appraisal of Deno's test tools so you are aware of the current pitfalls.

To begin you need to [install Deno](https://deno.land/manual/getting_started/installation). Once this is done just run `deno test` in the command line and any test files you have will execute. You can also run specific test files by referencing them after the `deno test` command. 

```sh
deno test tests/example.test.ts
```

Take a look at the [documentation](https://deno.land/manual/testing) to learn more on this.

Another great feature of Deno is it comes with TypeScript built in, so you get type checking out of the box. This also means Deno files can just be TypeScript files, and we can create test files by appending files with `.test.ts`. For example, `person.test.ts` will contain tests for our person module `person.ts`.

To write a test in Deno, first we import the assertion we want to use from the [asserts module](https://deno.land/std/testing/asserts.ts) and then we write the test in the required Deno format.

```js
import {
  assert,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("Test Assert Second", () => {
  assert("Hello");
});
```

The assertions will throw an error if they fail, this will be caught and the error message will be outputted to the CLI.

<img src="/assets/img/deno-test-fail.PNG" alt="Example of Deno test fail output" />

There is no concept of NPM, Node Modules or package.json in Deno, which is a good thing. Instead you can import modules directly from local or remote locations within files. In this case we import the `assert()` method from the remote asserts module located at `https://deno.land/std/testing/asserts.ts`.

But this is where things become a little hazy, and developers need to be careful. All of Deno's core features, including the asserts module are held under the `std` namespace. And this namespace is currently unstable, as of writing we're on version 0.56. This means the test modules like the asserts module are not feature complete, will have bugs and are subject to change at short notice. My personal view is it is possible to write stable tests in Deno but there is more work to do in this area and developers should consider the lack stability before they write their tests.

The [asserts module](https://deno.land/std/testing/asserts.ts) makes nine assertion methods available for use:

- `assert(expr: unknown, msg = ""): asserts expr`
- `assertEquals(actual: unknown, expected: unknown, msg?: string): void`
- `assertNotEquals(actual: unknown, expected: unknown, msg?: string): void`
- `assertStrictEquals(actual: unknown, expected: unknown, msg?: string): void` *
- `assertStringContains(actual: string, expected: string, msg?: string): void` *
- `assertArrayContains(actual: unknown[], expected: unknown[], msg?: string): void`
- `assertMatch(actual: string, expected: RegExp, msg?: string): void`
- `assertThrows(fn: () => void, ErrorClass?: Constructor, msgIncludes = "", msg?: string): Error` *
- `assertThrowsAsync(fn: () => Promise<void>, ErrorClass?: Constructor, msgIncludes = "", msg?: string): Promise<Error>` *

## Assert

The assert method is a simple 'truthy' assertion and it's value is limited because numerous values will assert. This is not great if you're trying to write explicit and precise tests. I would generally avoid using this assertion.

```js
Deno.test("Test Assert Second", () => {
  assert(1);
  assert("Hello");
  assert(true);
});
```

## Assert Equal vs Strict Equal

Equality is a slightly confused topic in Deno assertions currently, there are three equality assertions available, `assertEquals()`, `assertNotEquals()` and `assertStrictEquals()`. 

The `assertEquals()` and `assertNotEquals()` methods are based on an internal [equal method](https://github.com/denoland/deno/blob/master/std/testing/asserts.ts#L76). This is quite a complicated method, it's [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) is 30, and it tries to provide a general equality check for JavaScript, which is no mean feat. 

As the examples show it will assert numerous types, including objects.
```js
Deno.test("Test Assert Equals", () => {
  assertEquals(1, 1);
  assertEquals("Hello", "Hello");
  assertEquals(true, true);
  assertEquals(undefined, undefined);
  assertEquals(null, null);
  assertEquals(new Date(), new Date());
  assertEquals(new RegExp("abc"), new RegExp("abc"));

  class Foo{};
  const foo1 = new Foo();
  const foo2 = new Foo();

  assertEquals(foo1, foo2);
});

Deno.test("Test Assert Not Equals", () => {
  assertNotEquals(1, 2);
  assertNotEquals("Hello", "World");
  assertNotEquals(true, false);
  assertNotEquals(undefined, "");
  assertNotEquals(new Date(), Date.now());
  assertNotEquals(new RegExp("abc"), new RegExp("def"));
});
```

The difference to `assertStrictEquals()` is the strict equality check will not assert two instances of identical objects as they won't be referentially the same.

The under the hood strict equals does a simple, strict `===` check, there is no reference to the `equal()` method. This limits the scope of what `assertStrictEquals()` defines as equal, which makes things more precise and stable.

```js
Deno.test("Test Assert Strict Equals", () => {
  assertStrictEquals(1, 1);
  assertStrictEquals("Hello", "Hello");
  assertStrictEquals(true, true);
  assertStrictEquals(undefined, undefined);
});
```

It should be noted neither assertion will handle the JavaScript float problem, both of these assertions will fail:

```js
Deno.test("Test Floats", () => {
  assertEquals(0.1 + 0.2, 0.3);
});

Deno.test("Test Floats Strict", () => {
  assertStrictEquals(0.1 + 0.2, 0.3);
});
```

Overall in terms of equality checks I would stick with `assertStrictEquals()` as the value of `assertEquals()` is debatable. It's based on very complicated functionality, which has the potential to be buggy, and the need to assert the equality of whole objects in unit tests is minimal. For unit tests I'd stick to asserting primitives with `assertStrictEquals()`.

## Assert Contains

There are two methods available to assert a thing contains a thing in Deno, `assertStringContains()` and `assertArrayContains()`.

The `assertStringContains()` assertion does what it says on the tin. It does a simple includes check on a string to see if it contains the expected string. It's not very complicated and therefore useable and likely to be stable.

```js
Deno.test("Test Assert String Contains", () => {
  assertStrContains("Hello World", "Hello");
});
```

The `assertArrayContains()` assertion by contrast is quite complicated and contains [nested loops](https://github.com/denoland/deno/blob/master/std/testing/asserts.ts#L278) which is always concerning. I've noticed some bugs in the assertion and it doesn't seem to provide much more value than a simple `Array.includes()` check. You may experience unexpected behavior with this assertion.

```js
Deno.test("Test Assert Array Contains", () => {
  assertArrayContains([1, 2, 3], [1]);
  assertArrayContains([1, 2, 3], [1, 2]);
  assertArrayContains(Array.from("Hello World"), Array.from("Hello"));
});
```

## Assert Regex

You can assert regular expressions in Deno tests using the oddly named `assertMatch()` assertion. It is a simple assertion which does a basic RegExp test on a string. It's not complicated and does what you'd 'expect' it to, so it's likely to be stable and quite usable.

```js
Deno.test("Test Assert Match", () => {
  assertMatch("abcdefghi", new RegExp("def"));

  const basicUrl = new RegExp("^https?:\/\/[a-z\.]+\.com$");
  assertMatch("https://www.google.com", basicUrl);
  assertMatch("http://facebook.com", basicUrl);
});
```

## Assert Throws

There are two ways to assert whether something throws an error in Deno, `assertThrows()` and `assertAsyncThrows()`. Both assertions allow you to check an error has been thrown, the type of error thrown and what the message was. This is pretty standard functionality available in most assertion libraries.

The difference between the two assertions is `assertThrows()` accepts a standard function and `assertAsyncThrows()` accepts a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

The `assertThrows()` assertion is relatively straight forward, the only complexity exists around how it handles the message checks. 

```js
Deno.test("Test Assert Throws", () => {
  assertThrows((): void => {
    assertStrictEquals(new Date(), new Date());
  });

  // assertStrictEquals will throw an AssertionError with the message "Values Don't Match!"
  assertThrows((): void => {
    assertStrictEquals(2, 3, "Values Don't Match!");
  }, AssertionError, "Values Don't Match!");
});
```

The `assertAsyncThrows()` is a little more complicated, mainly because it deals with Promises. But basically it will catch thrown errors or rejections in Promises. And again most of the complexity exists around the message checks.

```js
Deno.test("Test Assert Throws Async", () => {
  assertThrowsAsync((): Promise<void> => {
    return new Promise((): void => {
      throw Error("Panic!");
    });
  });

  assertThrowsAsync((): Promise<number[]> => {
    return new Promise((resolve, reject): void => {
      const range = Array.from(Array(10).keys());
  
      reject(range);
    });
  });
});
```

It should be noted recent changes have been made to both these assertions to genericise them so the may have some stability issues in the near future.

## Custom Messages

Each of Deno's built in assertions allow you to overwrite the standard CLI message if you want to. For instance this example will output "Values Don't Match!" rather than the standard CLI message.

```js
Deno.test("Test Assert Equal Fail Custom Message", () => {
  assertEquals(1, 2, "Values Don't Match!");
});
```

## Overview

Overall Deno tests are relatively straight forward to set up and begin using, which is a massive benefit compared to the config hell of Node and NPM test libraries. 

There is though some work to be done in this area for Deno. It's fair to say some of the assertions are overcomplicated and stability may be an issue in the near future. But overall it is a great start and a big step forward for testing within the JavaScript community. 

Please do give [Deno](https://deno.land) a try, I think you'll like it.

## Beyond Deno Core Assertions

If you want more than the Deno standard assertions module has to offer I have begun work on an assertion library called [explicitly](https://deno.land/x/explicitly). The library extends the standard Deno assertions with a collection of simple but explicit assertions. These assertions are geared towards developers who wish to write clear and concise Unit Tests in Deno.

- `assertTrue(actual: unknown): void`
- `assertFalse(actual: unknown): void`
- `assertSame(actual: unknown, expected: unknown): void`
- `assertGreater(actual: unknown, expected: unknown): void`
- `assertGreaterOrEqual(actual: unknown, expected: unknown): void`
- `assertLess(actual: unknown, expected: unknown): void`
- `assertLessOrEqual(actual: unknown, expected: unknown): void`
- `assertInstanceOf(actual: unknown, expected: any): void`
- `assertTypeOf(actual: unknown, expected: string): void`
- `assertDate(actual: Date, expected: Date | string): void`
- `assertDateTime(actual: Date, expected: Date | string): void`

<small>* Recent changes have been made to these Deno assertion methods in terms of naming and implementation, please see the [version history](https://deno.land/std/testing/asserts.ts) for more details.</small>