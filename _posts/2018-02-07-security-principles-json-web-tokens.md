---
title: Four Security Principles That Software Developers Should Follow
layout: post
description: ""
published: false
tags: [security]
---
Security is a topic that is often poorly understood by developers because many of them focus on the technical side of security rather than the wider topic which involves people, money, risk and business priorities. This can result in poor decision making, unnecessary complication and wasted resource.

It's important that developers when building or choosing security solutions pick the correct one for their business or organisational situation. And it's particularly important that junior developers understand the wider context within which security decisions should be made.

## 1. Avoid dogma and absolutism

In a recent dev.to article a contributor shared the following advice on the topic of JSON Web Tokens and local storage.

> The biggest security offenders I see today are those of us who store JWTs (session data) in local storage. Many people don't realize that JWTs are essentially the same thing as a username/password.

> If an attacker can get a copy of your JWT, they can make requests to the website on your behalf and you will never know. Treat your JWTs like you would a credit card number or password: don't ever store them in local storage.

The post from which this advice comes is generally excellent, it's definitely worth a read, and covers many of the important issues relating to JavaScript local storage. Sadly though this statement on JWTs and security is misguided or at least lacks the important nuances that developers need to understand.  

The position taken on JWTs and local storage is an absolute one, "Don't do it!!" But where you store a JWT is not really of great importance, and storing it somewhere 'safe' doesn't guarantee security. The important questions to ask are, what are you storing in the JWT? And, what are you using the JWT to do or access?

If the answer to those question doesn't include any Personal Identifiable Information, or includes minimal PII, then you can probably do as you wish with those JWTs. If by contrast your answer to the above questions is, "All their credit card information!!" Then you should probably consider an alternative technology to JWTs.

As an example, if you were to implement a content paywall as many online news publications now do JWTs stored in local storage will be a perfectly acceptable security solution. The content you are protecting is of low value, no PII, so the likelihood that a hacker will be interested in hacking this content is very low, possibly pointless. JWTs though will stop your average 'run of the mill' web user from accessing the content without paying for it. A simple solution to a security requirement.

You'll note that this approach to solving a security problem is less dogmatic and absolutist. There is a tendency among talented developers to become dogmatic and absolutist, possibly because everything they see is 'bad' or at least less than perfect. A little like when Plato looked upon Athens in the 5th century BC, but like Plato this approach can lead to poor solutions and bad answers. And it can be unhelpful for those attempting to understand a topic, particularly if they are junior.

It is sensible when dealing with security to avoid dogma, absolutism and one size fits all statements as there isn't an equivalent of the moral absolute, "Do not murder". Security involves too much nuance.

## 2. There is no such thing as security

It is important to note the irony at the heart of security, which is that it doesn't exist. Recently Google Chrome announced on Twitter that they will be marking all sites using HTTP as "Not Secure". You'll note they already mark HTTPS sites as "Secure".

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🔐⚠️ The moment we&#39;ve all been waiting for! Chrome will mark all HTTP sites as &quot;Not secure&quot; in July 2018. 🔐⚠️<a href="https://t.co/2eV4GuEa2y">https://t.co/2eV4GuEa2y</a></p>&mdash; emily schechter (@emschec) <a href="https://twitter.com/emschec/status/961662132012986368?ref_src=twsrc%5Etfw">February 8, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This is utterly bizarre as HTTPS, or HTTP via TLS, is a very useful security enhancement but does not in any way guarantee security. It is perfectly possible to build a site and serve it via HTTP that is more secure than a site served over HTTPS. Google's actions here are surprisingly irresponsible as they could encourage average web users to feel safe when they are not and so be less cautious in their actions and behaviours online. And this is without even covering the topic of how the HTTPS connection is implemented, see CloudFlare... A more sensible approach may be to describe the connection as "Private" or "Public", but "Secure" and "Not Secure" is very misleading.

There has never been anything that has been completely secure, and even with all the technical advancements we've made there still isn't. Security has always been relative to what is being secured. People have spent millennia building walls of one type or another, but no-one has ever succeeded in building an impregnable dome.

If you don't believe me just ask the Iranians. In 2009 the Americans, definitely with the help of the Israelis and probably the British, hacked into an Irainian Nuclear facility called Natanz. You'll probably remember reading about the Stuxnet virus which was the likely culprit. What is extraordinary about the hack is that the Natanz facility was air gapped and probably one of the most secure facilities in the world. This though did not stop the Americans from getting a virus into the facility and disrupting Iranian nuclear production processes.

If you're interested in this topic and stories like this I suggest you read Gordon Corera's book 'Intercept: The Secret History of Computers and Spies'. It's a wonderful and exciting book that will contextualise the topics of security and hacking for you.

Good security involves building a wall that is higher than the value of the assets you're protecting. That is it will cost a hacker more to hack your system than they will gain from hacking it. This also means though that your security should be proportionate to what you are protecting. Don't for example air gap a server to protect a few email addresses you've collected from a web sign up form, that would be an extraordinary waste of money.

## 3. Understand the threat

What is important is to first understand the likely security threat you face. Security threats can be broken down into four basic groups:

- **1. Kiddy Scripters and Automated Threats:** See most WordPress / Joomla hacks.
- **2. Skilled Hackers and Hacker Organisations:** Anonymous, LulzSec
- **3. Organised Crime and Minor State Actors:** The Mafia, North Korea
- **4. Major State Actors:** USA, China, Russia, Israel, UK

The majority of developers will rarely deal with anything above level one. The reason for this is two fold, you have to be doing something of significant financial value and or of significant political value to move above level one. Examples of this would be sensitive government work, aspects of financial work and aspects of major corporate work.

Also the threats are diverse and won't necessarily relate to hacking data, as might occur if a poorly implemented JWT falls into the wrong hands. For example your organisation may be much more vulnerable to a DDOS Attack than a data breach. As a developer it's important you consider how your business might be vulnerable, and the primary vulnerability may not always be financial or PII, it could be reputational. Embarrassing your organisation by taking your website offline may be of far greater value to hackers than stealing the PII you have on your servers.

The Fappening in 2014 is a good example of an organisation failing to understand a threat properly. In this case Apple failed to value the content they had on their iCloud system and therefore did not implement security features that could have limited the damage. For example sending out emails when a new device or strange IP connects to an account. The Fappening was an edge case as no-one had really considered the value of celebrity PII before, but it does highlight that the threats organisation face may not always be logical.      

## 4. Implement a proportionate solution

As a developer you must seriously consider the threats you face before you implement any security solutions. This is so that you can implement proportionate security measures. Proportionate does not simply relate to the security threat though, it also relates to how much money you have to spend. A poor nation cannot build the Great Wall of China, but it can defend itself if it understands the threat and deploys its resources sensibly.

Much of the world enjoys laughing at North Korea, Kim Jong Un and his crazy nuclear plans. However behind the madness there may be some logic. There is a theory that North Korea has recognised that America and the West has happily carried out regime change against Afghanistan, Iraq and Libya, but has been much more cautious in relation to Iran and Pakistan. The theory goes that this is because Iran may have nuclear weapons and Pakistan does have nuclear weapons. North Korea has recognised this and is rushing to build a bomb and missile so it doesn't become the next Iraq. It has assessed the threat and is responding logically given its limited means, and it may succeed in defending the North Korean regime from America's bombs.

I'm not of course advising you to follow North Korea's example, however you should consider what is a proportionate security response given your company's resources. This is particularly important given very few of us work at Apple, Google or Facebook. Most organisations have limited resources and they cannot justify spending large sums of money on security features that only produce marginal gains. When considering your security response you should begin by asking the following three questions.

1. What am I defending and how valuable is it?
2. Who is it that poses me a threat?
3. How much resource does my organisation have to defend itself with?

If the answer to these questions are low value, limited threat and low resources, then the basics will suffice. For example securely encrypt passwords, don't store too much PII, implement CSRF policies, etc, etc. If the answers are at the opposite end of the scale then you will have to consider much more advanced security features. And if the answers are mixed you may have to compromise in certain areas.

The overarching point here though is that there is no 'one size fits all' security solution.  
