---
layout: post
title: "The Hacker's Manual"
date: 2022-04-19 +0530
comments: true
categories: jekyll update
---

<script>

function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('indexvals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

</script>

<style>

  #searchbar{
     margin-left: 0%;
     padding:15px;
     border-radius: 10px;
   }
 
   input[type=text] {
      width: 100%;
      -webkit-transition: width 0.15s ease-in-out;
      transition: width 0.15s ease-in-out;
   }
 
   /* When the input field gets focus,
        change its width to 100% */
   input[type=text]:focus {
     width: 100%;
   }

</style>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFluffySnowman%2Ffluffysnowman.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

<head>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
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

<div>

<input id="searchbar" onkeyup="search()" type="text" name="search" placeholder="Search for topics...">

</div>

<br>
<hr>
<br>

# INDEX:

<ol>
    <li class="indexvals"><a href="#wireless-network-auditing">Wireless Network Auditing</a></li> 
        <ul id="myUL">
            <li class="indexvals"><a href="#installations-for-networking">Installations</a></li>
            <li class="indexvals"><a href="#wireless-networking-with-aircrack-ng">Aircrack-ng</a></li>
            <li class="indexvals"><a href="#deauthentication">Deauth Attacks</a></li>
            <li class="indexvals"><a href="#wpa-handshake-cracking">WPA Handshakes</a></li>
            <li class="indexvals"><a href="#wep-handshake-cracking">WEP Handshakes</a></li>
            <li class="indexvals"><a href="#network-mapping">Mapping</a></li>
        </ul>
    <li class="indexvals"><a href="#social-engineering">Security in Operating Systems</a></li>
        <ul id="myUL">
            <li class="indexvals"><a href="#phishing">Phishing</a></li>
            <li class="indexvals"><a href="#pretexting">Pretexting</a></li>
            <li class="indexvals"><a href="#baiting">Baiting</a></li>
            <li class="indexvals"><a href="#scareware">Scareware</a></li>
        </ul>
</ol>

# Wireless Network Auditing

First we'll start with basic network hacking and mapping. Common tools used for this are:

### Installations for Networking

```bash
aircrack-ng wireshark nmap airgeddon etherape host mtr tcpdump traceroute net-tools
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

sudo apt-get install aircrack-ng wireshark nmap airgeddon etherape host mtr tcpdump traceroute net-tools
```

If you wish to use all these tools at once in an efficient and simple interface please check out [this github repository](https://github.com/FluffySnowman/fastmap).

<br>
<hr>
<br>

[Back to Index](#index)

### Wireless Networking with aircrack-ng

So... Now you decide you wanna test your wireless network's security. Lets jump right into it!
Tools which we'll be using for this are the `aircrack-ng` suite. This set of binaries can be used to put your networking device into monitor mode, scan for wireless networks around you and finally.. crack them.
Let's start this by firing up a temrinal. <b>You will need to be a superuser/admin to use these commands so make sure you have a root terminal open or use `su` or `sudo su` to do so. </b>

```bash
ifconfig
```

This command will show all your wireless and wired interfaces for networks that your computer has access to. You will have to select a wireless interface. The default value for a wireless interface on linux usually starts with `wl` (Example: `wlan0`(standing for 'Wireless Local Area Network #0').

The output should look a little something like this:

<p align="center">
<img src="/assets/pics/ifconfig_out_0x1.PNG" alt="ifconfig_out_0x1">
</p>

(Example taken from geeksforgeeks.org)

<b>NOTE: YOU WILL NEED TO MAKE SURE THAT YOUR WIFI ADAPTER ALLOWS 'MONITOR MODE' TO WORK WITH THE NEXT TOOL.</b>

Once you have found your wireless adapter name, you need to put it in monitor mode to look for (monitor) networks. This is done by typing the following command:

```bash
airmon-ng check kill
airmon-ng start <interface name>

Example: 
airmon-ng check kill
airmon-ng start wlan0
```

Airmon-ng will check if the wireless adapter is already in monitor mode and if it is it will kill it. Then it will start the adapter in monitor mode.

If you receive any errors with these commands feel free to leave a comment asking for help with your error in a screenshot and I will try my best to help :) [leave a comment](#comments-section)

So now we have our wireless card in monitor mode. Time to scan for some networks!
The command airodump-ng will scan for wireless networks around you. But you will have to specify a wireless network interface for it to scan with.

```bash
airodump-ng <interface name>

Example: 
airodump-ng wlan0
```

The output should look similar to this:

<p align="center">
<img src="/assets/pics/airodump-ng_0x1.PNG" alt="airodump-ng_0x1">
</p>

(exmaple from aircrack-ng's website)

This basically lists all the wireless networks' MAC ID's (BSSID) and their channel. It also lists the BSSIDs of the devices connected to it (station).

### Deauthentication

Now what you gotta do to get a .cap file (caplet) is create a handshake between a device joining the network and the network itself. To do this you have to kick a device off the network using the STATION MAC ID (station). and the BSSID of the network shown next to it (BSSID).
You will also have to write this data to a .cap file for cracking later. 
Note the BSSID of the router, the channel that its on and the STATION MAC ID to kick off the network. Also note down the name of the file you want to save the .cap to. 

Now you will have to run aireplay-ng while airodump-ng is running as you have to capture a handshake- not just kick someone off the wifi. 
Follow these steps and replace the respective values in <> with the values you got from the airodump-ng output.

Window 1:

```bash
airodump-ng --bssid <ACCESS POINT BSSID> -c <CHANNEL> -w <FILENAME> <INTERFACE NAME>
```

Window 2:

```bash
aireplay-ng -0 0 -a <ACCESS POINT BSSID> -c <STATION MAC ID> <INTERFACE NAME>
```

Now you have to wait for aireplay-ng to do its job. (If you get any problems with these commands feel free to [leave a comment](#comments-section))
If all of this is successful, you should see a line like this at the top of the airodump-ng window:

<b>NOTE: When kicking devices off the network to get a handshake, you should be mindful that anyone could be logging the network and their computer's connection to the network so it is wise to change your MAC Address everytime you boot or everytime you do a deauth attack. Leant how to [Change Your MAC Address here](https://fluffysnowman.github.io/jekyll/update/2022/04/17/main.html#change-your-mac-address)</b>

<p align="center">
<img src="/assets/pics/airodump-ng_0x2.PNG" alt="airodump-ng 0x2">
</p>

(example from google)

This means that you have managed to capture a handshake and now you can crack it.

Now the intense part:

[Back to Index](#index)

### WPA Handshake Cracking 

We will have to crack this handshake file with a wordlist. A common wordlist called rockyou.txt can be found [here](https://objects.githubusercontent.com/github-production-release-asset-2e65be/97553311/d4f580f8-6b49-11e7-8f70-7f460f85ab3a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20220420%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220420T141433Z&X-Amz-Expires=300&X-Amz-Signature=37f861490af9ff6f1d2e6f948bae6573d488aaa289458ef9b0bdb7722ff1349f&X-Amz-SignedHeaders=host&actor_id=51316255&key_id=0&repo_id=97553311&response-content-disposition=attachment%3B%20filename%3Drockyou.txt&response-content-type=application%2Foctet-stream). Download them, extract them and save them to a location you will remember. You can download any wordlist you want. Some are quite big and heavy and some aren't. 
Simple type in this command now:

```bash
aircrack-ng -w <wordlist.txt> <filename>.cap
```
Where filename is the name of the file where you saved the handshake to.

Now all you have to do is wait. If the wordlist has the key to the network in it, it will crack once it reaches the line which the key is in. If not, you will have to try another one :)

Once it is cracked, the terminal should be similar to this:

<p align="center">
<img src="/assets/pics/aircrack-ng_0x1.PNG" alt="aircrack-ng_0x1">
</p>

(example from google)

The arrow is pointed towards the password. You can connect to the WiFi Network using the password as you would normally.

[Back to Index](#index)

### WEP Handshake Cracking 

WEP is fairly easy to crack or you could say- easier than WPA. You simple have to use the same command but with no wordlist.

```bash
aircrack-ng <filename>.cap
```

Then you wait and its cracked. Easy peasy. 

<br>

So that's how you crack a wireless network. Now, moving on to what you can do once you're inside the wireless network.

[Back to Index](#index)

<hr>

### Network Mapping

Fire up a root temrinal or use `su` / `sudo su` to acquire admin privelages. Now we can start mapping. An [ARP Scan](_posts\2022-04-17-main.markdown#arp) is the best way to start mapping a network.
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

<br>
<hr>
<br>

# Social Engineering

Social Engineering is a way to make people give up confidential or personal information by deception or manipulation or by fooling them so well that they believe they are entering details into a legit website/form or even a social media account.

There are many ways to conduct social engineering such as-

<ul>
    <li><a href="#phishing">Phishing</a></li>
    <li><a href="#pretexting">Pretexting (Scamming)</a></li>
    <li><a href="#baiting">Baiting</a></li>
    <li><a href="#scareware">Scareware</a></li>
</ul>

So... let's start doing some social engineering!

[Back to Index](#index)

### Phishing

Phising is basically a way to trick people into clicking on a link or button which captures information about their connection to the website (such as their IP address, their MAC address, their browser, etc) and making them enter details into a form which looks like it is a legit website such as instagram or facebook but the website is hosted by you and it not legit and it logs the details that are in the form once the form is submited after which they get redirected to a page that isnt the legit website and then they know that they've been fooled- or redirect them to a clone of the website which is not legit but looks and feels very similar to the original. There are also other types of phishing such as using a cloneed wifi network usually with the word "FREE" in the essid and allowing people to connect to it. Once this is done, you can ARP Spoof them, conduct an evil twin attack or just find out any information using this methods.

There are many ways to conduct phishing. The first and most common way is by using `Ngrok` on the backend.

The go-to phishing tools I use is [SET (Social Engineering Toolkit)](https://github.com/trustedsec/social-engineer-toolkit){:target="\_blank"} , [WifiPhisher](https://github.com/wifiphisher/wifiphisher){:target="\_blank"}, [zphisher](https://github.com/trustedsec/social-engineer-toolkit){:target="\_blank"} or [maskphish](https://github.com/jaykali/maskphish){:target="\_blank"}.

First I will explain the process behind Cloned wifi attacks (Evil twin) because it might be a bit confusing for newbies.

[Back to Index](#index)

### Pretexting

Pretexting is just another word for scamming in this context. A person uses manipulation and clever language based on lies and pretends to <b>need</b> sensitive information. This is usally done by gaining trust of someone (the victim) or impersonating a bank/tax/police/co-worker which has a "right-to-know" authority. This will lead them to give up information without hesitation and can be used to confirm the victim's identity through which they can gather sensitive or important personal data. 

Pretexting doesn't really have any programs to do so. However, you can create a script, in a language such as python, to mimic the behaviour of a human. But the main purpose of pretexting is to seem like a geniuine person who <i>needs</i> information from you- such as a government official etc.

There is no specific guide to this. If you wish to practice pretexting then feel free to send me a message on my discord or twitter or email (links in [about page](https://fluffysnowman.github.io/about/)).



[Back to Index](#index)

### Baiting

Baiting is like capturing a fish in a lake. There is a something the fish (the victim) is greedy for or really likes or is justy curious about; and the fisherman (attacker) is going to give that bait to the fish ()victim) to eventually capture it. The most common form of baiting is used in the real world. Physical objects such as flash drives- infected with auto running malware. However, this is not the only type of baiting. Online baiting exsists too. This is when there is an AD on a website which looks interesting and grabs the curiosity of the user/target. This is used to gain access to the user's accounts using saved information on browsers after they have downloaded the malware. The malware can be an auto running one or a click to run. It doesn't really have to do anything but it just has to grab data from the user/victim's computer and send it to the server you are running to get all the data that you want.


[Back to Index](#index)


### Scareware

Scareware is basically spamming or bombarding the victim's computer/email/website theyre using with false alarms and false "threats" that are present on their device such as- "Your computer computer is infected with a virus. Install this tool to fix it". When the victim installs this tool, they will be infected with the virus. It could be anything from a fake scanner which sends information to the perpetrator or infects the computer with malware which can cause it to crash/BSOD/etc. These "Scarewares" can also be promoted through emails (sent to a large amount of people) where the perpetrator asks the victim to install a paid/free tool which could infect their computer or it just does nothing and your money is wasted.



[Back to Index](#index)

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


