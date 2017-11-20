---
layout: post
title: "How to Set Up Testing With Behat, Selenium and Chrome"
published: false
description: ""
tags: [Testing, Behat, PHP, Selenium, Chrome, Linux]
---

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
