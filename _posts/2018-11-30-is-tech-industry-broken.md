---
layout: post
title: "The Tech Industry is Broken: Stories From the Trenches"
description: ""
tags: []
published: false
---
It is my opinion the tech industry is broken. I have been a software developer for well over a decade and I love to code and build things. I also think much of the development community is great, I love going to conferences, engaging with other developers on Twitter and I think Dev.To is an amazing resource. But sadly I feel the wider tech industry is broken.

When I say broken I'm not referring to issues raised by people like Emily Chang, relating to the excesses of Silicon Valley and the problems our industry has with diversity. If you want to find out more about those issues I suggest you read Chang's book Brotopia. What I'm referring to is a more basic issue which is the tech industry's inability to carry out its main purpose. In a nutshell, deliver functioning and maintainable code and products.

I began coding nearly 14 years ago, slightly before 'Web 2.0' kicked off. Since then I have grown and matured as a developer dramatically. I would not claim to be a great developer, but I now have a lot of experience and I try my best to get the basics right. What I'd describe as the basics are Single Responsibility, Tests and Analysis, and Documentation. However, I don't feel the tech industry has improved at all in the last 10-15 years, the problems I saw and experienced when I started I still see today.

And if I'm being honest this is beginning to ware me down and erode my confidence. I'm not sure long term I can continue to work in an industry which regularly fails to deliver and can't get the basics right. My Father was a builder for his whole life and there are great similarities between building and development. Sadly on a social level builders receive far more abuse and criticism than developers do for 'shoddy work'. But the building industry and builders are significantly more professional than most developers or development projects. Builders do immense amounts of planning, have to draw up blueprints and comply with all sorts of onerous regulations relating to how they build things. Developers don't need to do any of this nor comply with any regulations and as a result many development projects are failure. If the failure rate in building was the same as it is in development there would be a national outcry

My concern on a personal is I may be living in a bubble. Maybe a lot of developers work in very professional environments where everything works perfectly and things break rarely. I suspect this is unlikely, but it is a possibility. So I'm going to share some stories from my career which highlight some of the issues I have faced and the problems I have seen. I would really like it if this inspired others to share their stories as I think we need to discuss the basic failings in our industry. And I think others would like to see change too, but this won't happen until we are open and honest about the realities of our industry and its failings.

The stories below are in no particular order and are picked from the past decade. I played my part in some of these stories and I wasn't always the 'good guy'. As a developer I'm not without sin and I openly admit to the many screw ups I've made during my career:



**Everything's Down:** A company I was working with managed a large number of websites for their client. I was a relatively new employee as the sole back-end / dev-ops developer and I had gone on holiday to France for a week to visit family. On the Friday of my holiday I received a phone call from the office. They said one of the client's websites had gone offline. I had limited remote access to their systems and could not fix the problem. So we had to wait until Monday when I was back in the office to fix it. On my return however I discovered that not just one website was offline, but every single one of the client's websites was offline. The reason for this was the system had been set up so every website connected to a single RDS instance hosting multiple databases. The RDS instance was small and could only serve a limited number of connections. One of the websites had gone haywire and was consuming all the connections meaning all the other websites reliant on the RDS went down for at least four days. There were no monitoring tools in place and certainly not enough tech support so the full scale of the issue was unknown. The sites could have been offline for more than a week.

**Rockstar Developer:** I took on a more senior role in a company working with technology I had not used before. There was an important marketing campaign which needed to be delivered within two weeks. I basically had no idea what I was doing, I was learning a new tech stack and trying to deliver for a client to a strict deadline. It resulted in me working around 40 hours in a 48 hour period, a 12 hour shift followed by an 18 hour shift. The project went live on time but looking back on the situation it now seems ridiculous. I was a junior developer dumped in an almost impossible situation and only by doing a week of work in two days was I able to deliver. I suspect what I did was the definition of 'Rockstar Development', but it was stupid and I suspect many other junior developers have or do work like this.

**Build it and They Will Come:** I joined a company as a lead developer and after a few weeks discovered a project a junior had been working. The project was an algorithm prototype for a large client, but there were some oddities about it. The developer had been working on it unsupervised for 9 months and it was processing terabytes of data. This meant there was a significant infrastructure behind it. When I discussed the project with the junior developer I discovered we were spending several thousand dollars a month on it. I then asked whether the client knew this and had ever signed off the costs. The answer to both questions was no. I spoke to my boss and the client, unsurprisingly the client didn't want to pay the now tens of thousands in cost accrued over many months. So the solution was to turn all off all the infrastructure and halt the work. In essence a junior developer wasted 9 month's of their life, a huge amount of money and all because no-one had properly scoped the work with the client properly. In addition, all the actual cost came from ancillary systems which did not relate to the core algorithm the client wanted to test.    

**Hacked in Minutes:** A marketing department within a company I worked for built a new corporate website with an external supplier. This website was launched to much fanfare and in a branding sense the website was a significant step forward compared to the existing website. However, on launch day the marketing team sent an internal email around to the company showing off the new website. About five minutes later a response to the email came back from one of the senior developers in the company with the subject line, "Hacked". Said developer had run a simple SQL injection attack on the site and gained access to the website's database. But it got worse, they also gained access to all the databases for the clients our website provider managed.   

**Changing the Guard:** I joined a development house to work on a legacy project that aimed to migrate an existing system to a more modern framework. The system was unique, complicated and managed lots of data tracking financial assets. We began work on this project very slowly and it took almost a year before we began to see some real progress as we'd got to a point where the team understood the system reasonably well. We were though a team of contractors and as everyone knows contractors can be expensive. Within the same development house a permanent team had just become available. The powers that be decided it would be a good idea to replace our contractor team with the permanent team. This was a disaster as the contractor team had a huge amount of system knowledge that could not be easily transferred. We'd also defined an approach to completing the migration, this was not necessarily the perfect solution but it was one defined as a result of a year's work. The permanent team, not fully understanding the project thought our approach was mad, they wanted to take a different approach and maybe they were right. However the team transition due to the system's complexity failed. No further work was really done and the project was put on hold. All of this could have been avoided if the company hadn't tried to save a little bit of cash.

**Threat to Life:** As a lead developer I was providing support to a third party supplier on a project based in a sensitive part of the world. This project revolved around a website which promoted a certain political position which in said country may have been controversial. So the website and server were at risk of being hacked. I asked for access to the system to see what was what. I was expecting to have to SSH into a server, but instead I was sent login details to a 'cPanel' like tool. This concerned me so I logged to see what I could access. I quickly found where PHPMyAdmin was and saw a list of all the databases held on the server. Not all the databases related to the website, some were just custom databases set up for admin purposes. I had a look at the tables and data, and I found the names and home / office addresses of various officials in said country. I was now very worried, so I decided to test how robust the login system was. There was no IP blocking or username based blocking which meant anyone could have brute forced the login page and gained access to the system. The country and information were so sensitive I believed this website posed a threat to life. I raised this issue and some action was taken, but I never got confirmation from the third party supplier they had fixed the issue completely. I think this is the worse thing I've seen during my career as the level of incompetence was gross to the point of endangering life.

**Worse than WordPress:** I provided some ad-hoc consultancy to a small agency based in the music industry. They had one very successful website based on WordPress. But they were struggling to scale the website, they were using a lot of plugins and those plugins were placing a significant load on the database. They asked me how much it might cost to build a more efficient and customised system from scratch. I said around £20,000 which I now think was a significant underestimate. They decided, because they didn't want to spend £20k+ to outsource the project to India and get it done more cheaply. Many months later I went back to the agency because they were having problems deploying the new website and getting it to work. I had a look and it quickly became clear the new website was making even  

**We Ain't Touching That:**

**Gone in 6 Hours:**