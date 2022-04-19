---
layout: post
title: "The Hacker's Manual"
date: 2022-04-19 +0530
comments: true
categories: jekyll update
---

<!--
extra_javascript:
    /scripts/copy_code.js
-->
<hr>
<br>
DISCLAIMER: ALL OF THESE TUTORIALS AND TIPS ARE ONLY FOR EDUCATION PURPOSES. I HOLD NO RESPONSIBILITY FOR ANYONE'S ACTIONS.

<hr>
<br>
So... Let's start hacking.

Go to the [comments](#comments-section)

# INDEX:

1. [Network Auditing](#network-auditing)
    - [Installations](#installations-for-networking)

# Network Auditing

First we'll start with basic network hacking and mapping. Common tools used for this are:

### Installations for Networking

```bash
aircrack-ng wireshark nmap airgeddon etherape ping host mtr tcpdump traceroute 
```

These ^ are some of the tools that beginners use to crack, map and track wireless and wired networks.
For these examples we will be using a debian distribution of linux such as Ubuntu, Parrot or Kali.
If you guys want tutorials for other distributions please contact me on <a href="mailto:thefluffysnowmanyt@gmail.com">thefluffysnowmanyt@gmail.com</a> or [leave a comment](#comments-section).

So you gotta load up these tools on your computer now. You can use the advanced package tool `apt` to install these tools. 


<!--
{% include codeHeader.html %}
<div id="copy1">
</div>
-->

```bash
sudo apt-get update

sudo apt-get install aircrack-ng wireshark nmap airgeddon etherape ping host mtr tcpdump traceroute 
```

If you wish to use all these tools at once in an efficient and simply interface please check out [this github repository](https://github.com/FluffySnowman/fastmap).

Once you have these installed, 

[Back to Index](#index)<br><br>[Comment](#comments-section)

# COMMENTS SECTION

{% if page.comments %}

<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://fluffysnowman.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endif %}

[Back to Index](#index)


