---
layout: post
title: "The Dark Web"
date: 2022-05-06 +0530
comments: true
categories: jekyll update
---

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFluffySnowman%2Ffluffysnowman.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

Welcome to the guide to everything you can do using the TOR browser and network!

Let's jump right into it:

Go to the [comments](#comments-section)

# INDEX 
    1. [Basics](#basics)
    2. [Setting up tor](#setting-up-tor)


# Basics

The TOR network (The Onion Router) is basically a way to access the dark web. It is relatively secure compared to accessing the clear web with a normal browser as with normal connections, the browser (you) communicates directly with the server (website) which can let them track you and all that jazz. 
However, with the TOR network, each request is bounced through tons of servers so people can't track you.
But... everything isnt exactly 100% secure. The "exit node" is the place where everything <i>could</i> be logged and if someone's watching the logs, they can trace the packets back to you however this isnt as easy as you think. 

TOR hostnames are random strings. It <i>IS</i> possible to create your own hostname but it isnt that easy as some prerequisites have to be installed.

So you want to connect to this part of the web ? You want to make your own website on there ? Its quite easy. Just like setting up a normal website locally but you don't need to buy a domain like the clear web and you don't need a dedicated server for it. You run it on localhost (127.0.0.1) and tor does the work for you.

# Setting up TOR

The easiest way to set up TOR is through a package manager on your pc. 



# COMMENTS SECTION

{% if page.comments %}

<div id="disqus_thread"></div>
<script>
    (function() { 
    var d = document, s = d.createElement('script');
    s.src = 'https://fluffysnowman.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endif %}

[Back to Index](#index)

