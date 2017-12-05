---
layout: post
title: "How to Set Up Testing With Behat, Selenium and Chrome"
published: true
description: "This post aims to explain how to setup automated functional tests in Behat using Selenium and Chrome."
tags: [Testing, Functional Tests, Automation, Automated Tests, Behat, PHP, Selenium, BDD, Chrome, Linux]
---
This post aims to explain how to setup automated functional UI tests in [Behat](http://behat.org/en/latest/) using [Selenium](http://www.seleniumhq.org/) and Chrome. The benefit of setting this up is that these tests can be written with little to no coding experience required. They can be setup by a QA or a Project Manager for example.

If you don't know anything about Behat or BDD I would suggest you read my [introductory post](http://rbrt.wllr.info/2017/11/22/introduction-bdd-testing-with-behat.html) or watch [Ciaran McNulty's talk](https://www.youtube.com/watch?v=83GbyDpJDI4) on the subject.

### GitHub Library

I've created a [GitHub library](http://rbrt.wllr.info/2017/11/22/how-setup-testing-behat-selenium-chrome.html) that provides an example of setting up and running this functionality on Travis.

Please [take a look](http://rbrt.wllr.info/2017/11/22/how-setup-testing-behat-selenium-chrome.html) as this post will reference it on a number of occasions.

### System Requirements

When I setup Behat I was running the following system, you of course may be running on a slightly different environment, but hopefully the setup and principles contained in this post will be similar.

- Ubuntu 14.04
- Apache
- PHP 7.1

### Composer Setup

Behat is a PHP Library that can easily be pulled in via [Composer](https://getcomposer.org/) and [Packagist](https://packagist.org/packages/behat/behat). To get Behat working with Selenium you require a number of libraries. This includes the [Behat Mink](https://packagist.org/packages/behat/mink) extension and the [Mink Selenium driver](https://packagist.org/packages/behat/mink-selenium2-driver) that allow you to automate front end functional tests with a headless Chrome browser.

Selenium has advantages over the [PHP Goutte](https://packagist.org/packages/behat/mink-goutte-driver) headless browser in that it can execute JavaScript code. So to begin we need to config our `composer.json` as follows.

```javascript
"require-dev": {
    "behat/behat": "3.4.*",
    "phpunit/phpunit": "6.4.*",
    "behat/mink-extension": "2.2.*",
    "behat/mink-selenium2-driver": "1.3.*"
}
```

Once we've run `composer install` and everything is in our vendor directory we can execute Behat. I like to use the `--verbose` flag because it allows you to see the full output when executing Behat. This is particularly useful when you're learning how to use Behat.

```
vendor/bin/behat -V
behat 3.4.3

vendor/bin/behat --init
will install behat and add required directory structure and files.

vendor/bin/behat --verbose

No scenarios
No steps
0m0.20s (7.23Mb)
```

Of course when we run Behat for the first time nothing useful will happen. We haven't written any tests or installed all the tools we need.

### Installing Java

To run Selenium we need to install Java. You can check whether Java is installed by typing `java -version`. Most likely Java won't be installed or you'll need to update it to Java 8. You'll know Java isn't installed if you see the following output.

```
The program 'java' can be found in the following packages:
 * default-jre
 * gcj-4.8-jre-headless
 * openjdk-7-jre-headless
 * gcj-4.6-jre-headless
 * openjdk-6-jre-headless
Ask your administrator to install one of them
```

On Ubuntu 14.04 you will need to add a Personal Package Archive that can download and install Java 8. We do this with the following commands. One note: always be careful with PPAs don't add them to a live server unless you have tested and validated them on a dev box first.

```
# Add the PPA
sudo add-apt-repository ppa:webupd8team/java

# Update your local repository
sudo apt-get update

# Install Java 8
sudo apt-get install -y oracle-java8-installer
```

If you install Java successfully you can run `java -version` again and you should see output similar to `java version "1.8.0_151"`.

### Download Selenium

After we have Java setup we need to download the latest version of Selenium which is a Java executable. It does not need to be installed.

If you're not clear on what Selenium is, it is basically a tool that allows you to automate a browser. This can be done by opening an actual browser window or via a headless browser. You can of course find out more on the [Selenium Website](http://www.seleniumhq.org/)

```
# Make a Selenium directory
sudo mkdir /usr/local/share/selenium

# Download Selenium into your new Selenium directory
sudo wget http://selenium-release.storage.googleapis.com/3.7/selenium-server-standalone-3.7.1.jar -P /usr/local/share/selenium
```

Once we've downloaded Selenium we can start running it. Essentially what we are doing is turning Selenium on, rather than executing a particular command. Once Selenium is turned on we can then send it commands to execute; this is essentially what Behat Mink does.

```
java -jar /usr/local/share/selenium/selenium-server-standalone-3.7.1.jar
```

Once you've got Selenium running and seen what it can do I'd cancel it by typing `ctrl + c`.

### Download Chrome Driver

Right now Selenium does not have a browser to execute anything with, so we need to install one. In this case we're going to install Chrome. First we need to install a Chrome driver that Selenium can interact with.

So we download the Chrome driver and like Selenium it is just a Java executable.

```
# Download the Chrome driver zip
sudo wget https://chromedriver.storage.googleapis.com/2.33/chromedriver_linux64.zip -P /usr/local/share

# Unzip the Chrome driver zip
sudo unzip /usr/local/share/chromedriver_linux64.zip -d /usr/local/share

# Delete the now unneeded Chrome driver zip
sudo rm /usr/local/share/chromedriver_linux64.zip
```

Once the Chrome driver is installed we can edit the way we run Selenium by telling it to use the Chrome driver by adding the `-D` flag. You may also find it useful to use the `-debug` flag as it will help you deal with any problems you may have when running Selenium.

```
java -jar -Dwebdriver.chrome.driver="/usr/local/share/chromedriver" /usr/local/share/selenium/selenium-server-standalone-3.7.1.jar -debug
```

### Install Chrome

Finally before we can start writing some tests we need to install Chrome itself. We download Chrome as a Debian package rather than using Aptitude and install it manually. Finally we fix any broken dependencies and then check Chrome works as a headless browser.

```
# Install some required dependencies
sudo apt-get install -y libxss1 libappindicator1 libindicator7

# Download it to you home directory; This isn't a requirement, you can download it anywhere.
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -P ~/

# Install local package, there will be dependency errors
sudo dpkg -i ~/google-chrome*.deb

# Tidy up installed packages and fix any broken dependencies
sudo apt-get install -f

# Check it's installed
which google-chrome

# Check Chrome runs as a headless browser and dump output
google-chrome --headless --dump-dom https://www.chromestatus.com/
```

We're done, we can now moving onto setting up Behat itself.

### Write Behat YAML

First we config our `behat.yml` file. It's relatively straight forward, we set a base URL, we tell Behat to make use of Selenium and Chrome.

Importantly in our Chrome config we have to tell it to execute in headless mode. Finally and most importantly we need to tell Behat which contexts to use. Contexts are PHP classes that turn our Behat tests into executable code. In this case we're calling in the Mink Context which includes a bunch of default functionality for testing the UI. You can find out more on contexts in my [Behat introductory post](http://rbrt.wllr.info/2017/11/22/introduction-bdd-testing-with-behat.html).

```yaml
default:
    extensions:
        Behat\MinkExtension:
            base_url: http://[~You IP or Domain here~]
            javascript_session: selenium2
            browser_name: 'chrome'
            selenium2:
                capabilities: { "browserName": "chrome", "browser": "chrome", "version": "62", 'chrome': {'switches':['--no-sandbox', '--headless']}}
    suites:
        default:
            contexts:
                - FeatureContext
                - Behat\MinkExtension\Context\MinkContext
```

### Create a Behat Test

Once we've configed Behat we need to write a test that our new setup can execute. If you take a look at my [GitHub library](https://github.com/RobDWaller/behat-selenium-chrome) you will be able to see the Behat tests I have created. These tests are based on a simple web form that submits a name and shows a message. Hopefully they should provide a good example.

```
Feature: Form Submission
    In order to see a fun Hello 'Name' message
    As a website user
    I need to be able to visit the index page and submit the form with my name

    Scenario: Submit Form
        Given I am on "/index.php"
        When I fill in "name" with "John Smith"
        And I press "submit"
        Then I should see "Hello John Smith"

    Scenario: Subimt Form Error Message
        Given I am on "/index.php"
        When I press "submit"
        Then I should see "Hello you didn't submit your name..."
```  

The test script for Behat uses Gherkin syntax, I'm not going to explain this now, but you can read my other [Behat post](http://rbrt.wllr.info/2017/11/22/introduction-bdd-testing-with-behat.html) for more details.

To begin creating your own tests you'll need to initiate Behat which will create a `features/` directory with some default code in.

```
# To initiate Behat run
vendor/bin/behat --init
```

Once this is done you'll need to create a `*.feature` file and place your test code in it. In my [GitHub library]() example I create the file `features/form.feature`.

## Run Behat

We've finally setup Behat so we can now execute it. Make sure Selenium is turned on first and then run Behat.

```
# Turn on Selenium and suppress the output
java -jar -Dwebdriver.chrome.driver="/usr/local/share/chromedriver" /usr/local/share/selenium/selenium-server-standalone-3.7.1.jar >/dev/null &

# Run Behat
vendor/bin/behat --verbose
```

If all went well we should see something like...

```

```

FIN!
