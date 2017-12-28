---
layout: post
title: 'Set Up PHP Unit From Scratch'
published: false
description: "Ever since Scotch Box released version 3.0 they've had an issue with the PHP-XML module not being installed on the Vagrant box."
tags: [scotch box, php, php-xml, bug, issue, vagrant, composer]
---
```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit
     backupStaticAttributes="false"
     bootstrap="./vendor/autoload.php"
     cacheTokens="false"
     colors="true"
     convertErrorsToExceptions="true"
     convertNoticesToExceptions="true"
     convertWarningsToExceptions="true"
     forceCoversAnnotation="false"
     mapTestClassNameToCoveredClassName="false"
     processIsolation="false"
     stopOnError="false"
     stopOnFailure="false"
     stopOnIncomplete="false"
     stopOnSkipped="false"
     verbose="false">
    <testsuites>
        <testsuite name="Testing Example">
            <directory>./tests</directory>
        </testsuite>
    </testsuites>
</phpunit>
```
