---
layout: post
title: "The Hacker's Manual"
date: 2022-04-19 +0530
comments: true
categories: jekyll update
---

<head>
<link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico">
</head>
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

If you wish to use all these tools at once in an efficient and simple interface please check out [this github repository](https://github.com/FluffySnowman/fastmap).

Once you have these installed, fire up a root temrinal or use `su` / `sudo su` to acquire admin privelages. Now we can start mapping. An [ARP Scan](_posts\2022-04-17-main.markdown#arp) is the best way to start mapping a network.
One of the easiest ways to do this is to use the `nmap` command.
First we need to see who all are connected to the network.

```bash
nmap -sn <gateway>/<netmask>

Example-
nmap -sn 192.168.1.1/24
```
Give nmap a second to scan the network and then we can see who is connected to the network. It should look a bit like this:

<p align="center">
<img src="/assets/pics/manual_nmap_0x1.png" alt="manual_nmap_0x1">
</p>

This usage of the nmap command also shows the count of the amount of hosts that are online (up). This is useful for finding free IPs that can be used to configure IPs manually instead of using DHCP which can be quite problematic [IP Conflicts](https://fluffysnowman.github.io/jekyll/update/2022/04/17/main.html#dhcp)

[Back to Index](#index)<br><br>[Comment](#comments-section)

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


