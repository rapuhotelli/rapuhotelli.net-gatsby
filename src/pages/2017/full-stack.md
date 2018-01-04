---
title: "So, you're a Full-Stack Developer"
description: "You what?"
date: 2017-08-20T18:20:13+02:00
series: ["web"]
thumbnail: ""
---

Every time someone says they are a "full-stack developer" I feel a sharp, nostalgic jolt up my spine. You might be one, but most likely you are not. Or, like me, at some point in time you were.

In short, a "full-stack developer" is a term used to describe someone who has the skillset to develop and deploy a product all on their own. For my kind of furious nerds who read every possible tech blog in a desperate attempt to understand what's going on in the development world, being a full-stack is the ultimate goal. It means you are invincible. Today, however, it's just too much. You have to focus.

Back in as recently as about 2010 (or so) being full-stack was relatively easy. The golden age of server-rendered MVC applications had just reached its peak. I got into Linux servers to study Apache and Nginx just get the satisfaction from the knowledge of being able to do it. Full-Stack back then was in essence:

1. Choose our favorite MVC framework. Make some fancy-ass models, controllers and views. Extend a bunch of classes to be cool as fuck.
2. Be proficient in SQL.
3. Do some CSS.
4. Have access to a server which you can configure yourself to run your app.

If you wanted actual scaling due to large amount of page views you needed special skills that were beyond full-stack. If you had to scale _shit got real_.

If you were poor you could have a server under your bed which runs your app (along with irssi and your torrents or whatever).

I used PHP frameworks mostly and the choices were abundant. Early on I used something called CakePHP a lot, which [still seems to be kicking](https://cakephp.org/).

During my studies I had a friend who had made his own [CSS grid "framework"](https://jonikorpi.com/less-framework/). It was ace and I quite liked it. Sensible CSS toolkits didn't really exist and the concept of bringing large-scale sanity into stylesheets had just barely been invented.

Hardest part was the server. The whole world of hosting was obscure as all hell, as it was really hard to find "tutorials" in a very academic unix world. Documentation existed, but applying that information to your needs was another beast entirely. You needed friends to show you the ropes.

Today, we have the cloud. And not just the cloud, but today applications are far more complex. In my personal opinion, they are far more complex than is necessary. It's a trap the industry has dug itself into, but that is a story for another time. 

Setting up a "full", safe, and scaling web app is so much work that it's very impractical to do on your own. The risk of misconfiguration is very high, especially in the cloud. Today, instead of being able to git clone an MVP and call it a day, _full-stack is a set of skills that theoretically enable joining a project in any part of the project._ However, the details of that project are not necessarily yours to define, so it's likely that your Full-Stack Developer would still lack a necessary skill. It all comes down to the near hysterical complexity of internet today. 

Here's your typical considerations in 2017:

1. Choose your language and platform based on a bunch of conditions:

  -  What is the end result of the app? What are the performance requirements for page load speed and server capacity and how does it scale? Does it have to scale?
  - What are your mobile considerations: make a separate mobile app or just "mobile first"? How well can it survive without constant supervision? Could you do that mobile app as well?
  - How many people are going to be working on it and do they need to learn anything? 

2. Now that the language and platform are chosen, decide on how your front-end should work

  - If you're doing client-side apps, what is the technology stack?
  - Are you prepared to start configuring webpack and Babel to get your anus destroyed?
  - Does your full-stackness involve UX competence or do you include *npm install bootstrap* as a part of your expertise?

3. Since you're probably doing an API based app, we're going to assume you daydream of OAuth specifications and GraphQL statements. Don't forget to write your unit tests. We're also assuming you know what database types to use and when.

4. We're almost done. All you need now is to understand how the cloud actually works, and no, I don't mean running an EC2 container with a bunch of dockerized things in it. In the traditional full-stack mindset you would also set up the pipes that build your cloudy container images for you with all the security groups and autoscales and all that. For me, this is the train stop where I get off. Maybe in the future I will handle this as well, but there is only a limited amount of hours in a day and I get my kicks from actual programming and product design. Sanity prevails.

Did you notice that today we considered scaling and in the past we did not? That's because how the application is developed and deployed is integral to how its scaling is going to work due to the inevitable continuous integration and continuous deployment setups which, ofcourse, are your job as well.

There is a reason why developers are in massive demand. There are so many possible end results and variations that no single person can do it _with confidence._ All of the parts of modern web development have so much depth, and considering the historical context for the term "full-stack", calling yourself full-stack in, say, job interviews should raise some flags. More than likely you don't know what the word means or you're trusting that your interviewer will gloss over the use of the term. 

This is a weird topic to have strong opinions on, but I strongly believe you should just call yourself a "Web Developer" and then focus on your existing skillset and expanding your skillset. In fact, it's rare that anyone involved with the web would focus on just one part of it. If you're _really_ confident about your experience, just use a Senior prefix.

Ofcourse, you're free to defined the word as you see fit. Everyone does it, afterall. However, using the term properly is a good sign that you understand your profession and is considered _best practice_.
