---
layout: post
title: "How to Set Up Testing With Behat, Selenium and Chrome"
published: false
description: ""
tags: [Testing, Behat, PHP, Selenium, Chrome, Linux]
---
Often when developing web applications you'll want to setup some automated tests. There are of course lots of well documented ways to setup atomated unit, integration and functional tests using tools such as PHPUnit and Codeception.

However, like me you may work in a team with a QA (Quality Assurance) and you may wish to empower them to configure some automated tests without having to write or understand too much code. 

This is where Behat comes in handy. Behat is a PHP version of the well known testing tool Cucumber and it follows Behaviour Driven Development principles along with the Gherkin syntax. If you'd like to understand more on BDD and Behat I'd suggest you watch Ciaran McNulty's fantastic talk on the subject.

In a nutshell Behat allows you to write and execute human readable tests. Here is an example of a Behat test...

  

This is pretty cool, right? It's even more readable than Codeception. There is of course a catch, which is that you need to write / code the underlying tests which Behat can then execute. These are known as 'step definitions' and are grouped into classes known as 'contexts'. 

Under the hood Behat converts the human readable commands into a method name it executes in the context class and then checks whether it passes or fails. An example step definition looks like this...

You can see how the method name tallies with the Behat test above. As a developer using Behat may seem like overkill, essentially writing tests twice seems pointless. 

If you have a QA though it's a different matter. Your QA is responsible for testing your product. It therefore makes sense that they write some tests. In addition, they play an important role with the Project Manager to ensure the product matches the client brief. Behat and BDD principles empower a QA to define tests that will ensure your product works as expected and matches your brief.

Also Behat has some cool features that allow QAs and developers to work well together. First off when the Behat tests are written and run for the first time Behat will output the method signatures for the step definitions that the developer needs to add to the relevant context.

So in reality Behat is merely a nice human readable wrapper for unit and other tests. Many developers may see this as a nice to have rather than a necissity when testing a web app. Especially given you can implement readable BDD tests in code using Codeception.

Before you throw Behat under the bus or juggernaut  

Composer Setup
```
"require-dev": {
    "behat/behat": "3.4.*",
    "phpunit/phpunit": "6.4.*",
    "behat/mink-extension": "2.2.*",
    "behat/mink-selenium2-driver": "1.3.*"
}
```

```
vendor/bin/behat --verbose
```

Install Java
```
java -version
```

personal package archive

```
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install -y oracle-java8-installer
```

install selenium
http://selenium-release.storage.googleapis.com/3.7/selenium-server-standalone-3.7.1.jar

```
sudo mkdir /usr/local/share/selenium
sudo wget http://selenium-release.storage.googleapis.com/3.7/selenium-server-standalone-3.7.1.jar -P /usr/local/share/selenium
```

run selenium

```
java -jar /usr/local/share/selenium/selenium-server-standalone-3.7.1.jar
```

install chrome driver

https://chromedriver.storage.googleapis.com/2.33/chromedriver_linux64.zip

```
sudo wget https://chromedriver.storage.googleapis.com/2.33/chromedriver_linux64.zip -P /usr/local/share
sudo unzip /usr/local/share/chromedriver_linux64.zip -d /usr/local/share
sudo rm /usr/local/share/chromedriver_linux64.zip

java -jar -Dwebdriver.chrome.driver="/usr/local/share/chromedriver" /usr/local/share/selenium/selenium-server-standalone-3.7.1.jar -debug
```

install chrome

https://christopher.su/2015/selenium-chromedriver-ubuntu/

```
#dependencies
sudo apt-get install -y libxss1 libappindicator1 libindicator7

Install to you home directory
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -P ~/

#install local package, there will be dependency errors
sudo dpkg -i ~/google-chrome*.deb

#tidy up installed packages and fix any broken dependencies
sudo apt-get install -f

#check it work

which google-chrome
google-chrome --headless --dump-dom https://www.chromestatus.com/
```


set up behat yaml

```
default:
    extensions:
        Behat\MinkExtension:
            base_url: http://192.168.34.123
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

run behat

```
vendor/bin/behat
```
