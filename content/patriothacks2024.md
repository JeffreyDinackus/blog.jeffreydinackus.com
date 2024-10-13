---
title: 'Reflections on Patriothacks 2024'
author: 'Jeffrey Dinackus'
date: "2024-10-12"
---

For my first time, I attended a hackathon not as a participant, but as a mentor and workshop attendee. 

There were a lot of smart people at this event, exports on AI, a Senior Solutions Architect from AWS, a mini crowd of experts from Microsoft and their partner Cloudforce. They were all incredibly friendly and I asked them like 3 dozen questions haha. 

The things I learned I expect are gonna be life and career changing and I am going to write some of them down here. 

Some of the smaller lessons first:

I need to start using GitHub Copilot instead of ChatGPT for my code. I've used it briefly before but only when writing powershell at work when I'm too lazy to look up the syntax for what I want to do. 

The main selling point for me is that it knows the context of my code in Visual Studio Code and can reference any part of my code so it can understand be able to do a lot more than ChatGPT with less effort. 

Some interesting things I want to try are: generating test cases, generating markdown readme files for my projects, generating code comments and documentation, explaining open source code that is hard to understand, explaining errors in the terminal, creating markdown pages, and writing database commands such as inserts (which was featured in the workshop I attended by Microsoft) Note that you'll need to describe your database fields at the current time I think. Maybe I can find a connector. 

I also want to use Copilot in Azure to help explain and make my cloud deployments quicker (more on this soon I think)

these are my raw notes from the workshop but I have tried to make them a little clearer

The context is that we were creating a python calculator and generating insert commands for a Postgres DB

/Tests

/Help displays help

@ generally provides context to copilot

Highlight code + /Explain 

@workspace

Here's some of the real prompts the Microsoft engineer used:

We were buidling a python calculator:

“I need four methods for building a calculator, add, subtract, multiply, divide, each method should take in two numbers and output a result based on the result of the requested calculation” 

Copilot I am not seeing anything in the console as far as errors and info in my flask project? 

The more descriptive the better

Be very thorough with copilot 

“What do I need to do to create a new python file?”

Generating DB commends: 

I have a address table with the following: id which is bigint, people_fk which is also a foreign key bigint, and street. Use the id's in the people table with a unique id from 1 to 23 as your foreign key, create unique street names and create twenty records create sql inserts for the data 

How do I join my addresses table to my people table 

I have two tables, a addresses table and a people table and the people table has a pk of id, addresses has a fk of people_fk, how do I join them


And you can use the chat from the left side or press CTRL+I on windows. 

How do I create a Markdown page

Use markdown to explain the functions in my calc.py file 

@workspace feeds in the context of your project 

Highlight and /optimize 

In chat you can see the diff

@terminal explain



Onto the next thing:

There was a AI panel with 5 really knowledgable exports from Microsoft, AWS, Astrazeneca, the Special Competitive Studies Project, and Hitachi Vantara Federal.


They emphacized the non standard ways to get a role in AI. By either taking a alternative career path to developer such as tester, UI/UX / wireframing / documentation, true graphics designer (creating beautiful designs that the coders draw up, gaining buy in from executives) or etc.

Something else interesting, is they spoke about being a software engineer + invested in the product you are looking for. 

So for example, if I am working in a medical company like astrazentica, I should take some courses at a university on Medicine, or accounting, or databases, or whatever. You need to differentiate yourself. The issue for the job seeker is they never know what the hiring manager is looking for. But it's a numbers game. Everyone is a software engineer these days.

For me:

Finance + software engineer 

Academia + software engineering

Theology + software engineering

Math + software engineering

(Cloud) Solutions Architecture + software engineering

Be passionate about what you do and the desired outcome, like saving lives, preventing the building from falling over, they will only give you more opportunities and promote you. Networking 

Ask questions about what you are doing, why am I writing this code? What does it do? Ask questions 

Such as saving people as quickly as we can in a medicine company. 

Be a entrepeneur. IF you see a problem try to solve it, be helpful GOOD ADVICE. Be the solution. How can you reduce cloud costs?

Personal brand early in your career helps people send you opportunities. Regulated industry, big tech government sector, business degrees was a speaker example. Let people understand your brand and they will give you opportunities. 

Become presentable,, learn how to address people, articulate yourself, make eye contact. 

Writing and communication skills will take you far. SWE write a lot of documentation 

Follow a select number of publiciations to keep yourself up to date. Or you will be a dinosaur in short order. 

Also, there's a lot of free training data from the government at data.gov.

If your data is crap, your model will be too. AI doesn't let you somehow get around writing good software. 

This is basically verbatim what one speaker said: Stop looking at insta and watch developer videos and become passionate, learn something new every week. Pick a lane, don't go wide. Go deep. 



Find friends who are smarter than you. Sharpen steel with steel. Do not be the smartest person in your group. Build yourself a network of friends who are smarter than you 

Some other surces they mentioned: 

Chief data office officer for top government agencies 

Institutes of ai governmence

Ai governance  

Responsible ai toolkit


The cloud is more green than anyone can do at home. The limiting factors of AI are heat and electricity. 

Domain specific models are more engineer efficient and more focused and specialized and what you should be using most of the time. I should look for some. I agree with this. 

I'd like to see a numpy LLM or a tensorflow LLM that can give expert advice. 

Application cost optimizers are starting to exist. Just doing code optimizations 

800000 saved by one customer in cloud costs.


They also mentioned training vs inferencing. And be knowledgalbe where you want to deploy your models. Either on the ground or in the data center or on prem. 

Find friends who are smarter than you. Sharpen steel with steel. Do not be the smartest person in your group. Build yourself a network of friends who are smarter than you 


A negative perspective vs a positive perspective changes the way the LLM answers the question completely. 





My last section is the most impactful. It's basically a way for me to get a cloud job. 


I had a talk with one Microsoft rep and he gave some golden advice. 

Basically, the thing I need to look into and start doing is cloud solutions architecture. 

The tools the clouds use is all the same, but I basically need to take a big application such as linkedin, youtube, name it and then create the 50000 ft design, and bring it down to a 5000 ft design and then diagram it, build a proof of concept with a working backend on small scale and finally come up with solutions for errors like what if my server goes down? Will I use load balancers, health checks, automatic reprovisioning, etc. 

The backend example he gave was tailored to my interest, finance, it was a API that pulls a API and it will need to do so in a scalable, hardened manner, and be fault tolerant. The specific API just pulls stock data. This is the part I had the most questions about and will need to figure out. 

I need to use the well architected frameworks for the 3 primary clouds, whitepapers, and documentation to figure out industry best practices as well as perhaps certifications. 

This sounds like a whole heck of a lot of fun. 

I should also be able to explain architecture decisions like, SQL vs NoSQL, what's the use cases?

Know the interconnections of the pieces and the use cases. 

What do I do if my server (node or flask or etc) fails? How do I handle that?

What i'm trying to learn is solutions architecture and I need to learn to provision cloud applications in a cost efficient, scalable way. I should archiected a scalable way to host a website. 

The non proprietary stuff is the most bang for buck. I work in networking right now and I can confirm the non proprietary stuff is always what saves the day. 

How can I regenerate a server without downtime?

Draw diagrams, put them on github, build real world test cases, heck I might even release my terraform code. 


resources:

Azure architect docs 

Azure well architecture 

Azyre architecture center

[Azure Architecture Center - Azure Architecture Center | Microsoft Learn](https://learn.microsoft.com/en-us/azure/architecture/) 

[Reference Architecture Examples and Best Practices (amazon.com)](https://aws.amazon.com/architecture/?cards-all.sort-by=item.additionalFields.sortDate&cards-all.sort-order=desc&awsf.content-type=*all&awsf.methodology=*all&awsf.tech-category=*all&awsf.industries=*all&awsf.business-category=*all)

https://aws.amazon.com/whitepapers/?whitepapers-main.sort-by=item.additionalFields.sortDate&whitepapers-main.sort-order=desc&awsf.whitepapers-content-type=*all&awsf.whitepapers-global-methodology=*all&awsf.whitepapers-tech-category=*all&awsf.whitepapers-industries=*all&awsf.whitepapers-business-category=*all

[Azure Well-Architected Framework - Microsoft Azure Well-Architected Framework | Microsoft Learn](https://learn.microsoft.com/en-us/azure/well-architected/)

[Google Cloud Architecture Framework  |  Cloud Architecture Center](https://cloud.google.com/architecture/framework)


my mind went to this when I got home: 

neetcode systems design course

https://neetcode.io/courses