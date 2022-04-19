---
layout: post
title: "The Hacker's Manual"
date: 2022-04-19 +0530
categories: jekyll update
---

<hr>
<br>
DISCLAIMER: ALL OF THESE TUTORIALS AND TIPS ARE ONLY FOR EDUCATION PURPOSES. I HOLD NO RESPONSIBILITY FOR ANYONE'S ACTIONS.

<hr>

So... Let's start hacking.

First we'll start with basic network hacking and mapping. Common tools used for this are:

```bash
aircrack-ng wireshark nmap airgeddon
```

These are some of the tools that beginners use to crack, map and track wireless and wired networks.
For these examples we will be using a debian distribution of linux such as Ubuntu, Parrot or Kali.
If you guys want tutorials for other distributions please contact me on <a href="mailto:thefluffysnowmanyt@gmail.com">thefluffysnowmanyt@gmail.com</a>

So you gotta load up these tools on your computer now. You can use the advanced package tool `apt` to install these tools. 

{% include /_includes/codeHeader.html %}
```bash
sudo apt-get install aircrack-ng wireshark nmap airgeddon
```