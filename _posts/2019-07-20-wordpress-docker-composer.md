---
layout: post
title: "How to Setup WordPress with Composer and Docker"
description: ""
tags: [php, wordpress, docker, composer]
published: false
---
All PHP developers know WordPress development can be frustrating and unavoidable. WordPress is a ubiquitous, legacy project and while it works with the latest versions of PHP it implements very few of the modern development concepts PHP developers are use to.

One of the most important tools now available to PHP developers is the package manager Composer. This allows developers to setup a dependency list of useful packages which they can pull into their website or application to easily add features and functionality. By default Composer is not available to WordPress and it may never be made available. There is though a growing community of developers who have been using WordPress with Composer, I've been using it for at least three years. Individuals such as John Bloc have turned WordPres into a Composer package available via Packagist, and WPackagist makes the majority of WordPress themes and plugins available via Composer. So some progress is being made, even if it is unofficial in nature.

Another useful development tool is Docker which allows for the creation of development and production environments via containers. These are basically vistualised environments which execute a single service such as MySQL, Apache or PHP. Once mastered Docker allows you to combine multiple services into an environment via a yaml config file, which makes environment creation much easier. WordPress does have a default Docker image you can use to create a WordPress environment, but it does not integrate with Composer.

Essentially there is no easy way to use both Composer and Docker with WordPress, and generally custom development has been required. This is where Dusty comes in. Dusty is a WordPress starter repo package, and it comes with a Composer and Docker integration out of the box.

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

Once these three basic steps have been completed you can access your new WordPress site via http://localhost:8080.
