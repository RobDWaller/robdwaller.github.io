---
layout: post
title: 'Scotch Box 3.0 PHP 7.0 Xml Issue'
published: true
description: 'Ever since Scotch Box released version 3.0 they've had an issue with the PHP-XML module not being installed on the Vagrant box.'
tags: [scotch box, php, php-xml, bug, issue, vagrant, composer]
---
I've been a long time user of [Scotch Box](https://box.scotch.io/) for my local environment, but ever since they released version 3.0 they've had an [issue with the PHP-XML module](https://github.com/scotch-io/scotch-box) not being installed. This means that when you try to run commands like `composer install` you'll get an error.

The guys at [Scotch.io](https://scotch.io) don't seem to have any intention to fix the problem themselves. I therefore have been running a few commands myself to upgrade the box to PHP 7.1 and resolve the issue.

I leave them here to remind myself what they are and hopefully help anyone else with the same issue.

```shell
# This installs php7.1
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt-get install -y php7.1 php7.1-xml php7.1-mysql php7.1-curl php7.1-mbstring

# This enables Apache to run php7.1
sudo a2dismod php7.0
sudo a2enmod php7.1
sudo service apache2 restart
```

Note: I've added these commands to the GitHub issue too.

Obviously one can only hope Scotch Box fix this problem in their next release.
