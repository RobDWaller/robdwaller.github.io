---
layout: post
title: "How to Setup WordPress with Composer and Docker"
description: ""
tags: [php, wordpress, docker, composer, dusty]
published: false
---
I've been doing PHP development for at least a decade and one thing which keeps rearing its ugly head is WordPress. It seems if you are a PHP developer you cannot avoid WordPress, at some point you'll have to work on a project powered by it and it may well be a nightmare. WordPress is a legacy project and lacks many of the tools, concepts and features which make a developer's life easier.

WordPress though is an amazing tool which helps millions of people easily build blogs, websites and online businesses. It is a tool built for users and not developers.

There are a number

maintnenance / deployments
environment setup
package management

WordPress is an amazing tool which helps millions of people easily build a presence or business online. It can be customised in thousands of ways with little or no technical skill and users can build anything from a blog to an ecommerce website. This simplicity and flexibility has made WordPress probably the most ubiquitous software library in the world.

If you are a PHP developer you may have a very different outlook on WordPress, you may regard it as a code nightmare which should be avoided. The reason is simple, WordPress is a legacy project and while it now works with the latest versions of PHP it implements very few of the modern development concepts which make a PHP developer's life easier.

One of the most important tools now available to PHP developers is the package manager Composer. This allows developers to setup a dependency list of useful packages which they can pull into their website or application to easily add features and functionality. By default Composer is not available to WordPress and it may never be made available.

There is though a growing community of developers who have been using WordPress with Composer, I've been using it for at least three years. Individuals such as John Bloc have turned WordPress into a Composer package available via Packagist, and WPackagist makes the majority of WordPress themes and plugins available via Composer. So some progress is being made, even if it is unofficial in nature.

Another useful development tool is Docker which allows for the creation of development and production environments via containers. These are tiny virtualised environments which execute a single service such as MySQL, Apache or PHP. Once mastered Docker allows you to combine multiple services into an environment via a Yaml config file, which makes environment creation much easier. WordPress does have a default Docker image you can use to create a WordPress environment, but it does not integrate with Composer.

Essentially there has been no real way to easily use both Composer and Docker with WordPress, and generally custom development has been required. And this is why I've created Dusty. It is a WordPress starter repository, and it comes with a Composer and Docker integration out of the box. It is built to get going with Composer, Docker and WordPress as quickly as possible, hopefully in five minutes.

Once you have installed Composer and Docker on your local machine you can create a new Dusty project with a single command:

```
composer create-project rbdwllr/dusty project-name
```

This will install Dusty and all its dependencies. You can then spin up the development environment via Docker:

```
docker-compose up -d --build
```

Dusty manages WordPress config settings via .env files and the PHP Dot Env package. You can create the initial .env file automatically via a docker command:

```
docker-compose exec web composer make-environment
```

This does two things, it generates the base .env file and then automatically generates and populates the WordPress salts via the WordPress Salts Generator package.

Once these three basic steps have been completed you can access your new WordPress site via http://localhost:8080 and finish the standard WordPress installation process.

Dusty provides a platform from which to build out a WordPress website and gain all the benefits of the whole PHP ecosystem.
