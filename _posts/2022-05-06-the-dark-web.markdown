---
layout: post
title: "The Dark Web"
date: 2022-05-06 +0530
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

Welcome to the guide to everything you can do using the TOR browser and network!

Let's jump right into it:

Go to the [comments](#comments-section)

<div>

<input id="searchbar" onkeyup="search()" type="text" name="search" placeholder="Search for topics...">

</div>

<br>
<hr>
<br>

# INDEX 

<ol id="myUL">
    <li class="indexvals"><a href="#basics">Basics</a></li> 
    <li class="indexvals"><a href="#setting-up-tor">Setting up TOR</a></li>
</ol>

# Basics

The TOR network (The Onion Router) is basically a way to access the dark web. It is relatively secure compared to accessing the clear web with a normal browser as with normal connections, the browser (you) communicates directly with the server (website) which can let them track you and all that jazz. 
However, with the TOR network, each request is bounced through tons of servers so people can't track you.
But... everything isnt exactly 100% secure. The "exit node" is the place where everything <i>could</i> be logged and if someone's watching the logs, they can trace the packets back to you however this isnt as easy as you think. 

TOR hostnames are random strings. It <i>IS</i> possible to create your own hostname but it isnt that easy as some prerequisites have to be installed.

So you want to connect to this part of the web ? You want to make your own website on there ? Its quite easy. Just like setting up a normal website locally but you don't need to buy a domain like the clear web and you don't need a dedicated server for it. You run it on localhost (127.0.0.1) and tor does the work for you.

The TOR browser looks like this:

<p align="center">
<img src="/assets/pics/dark_web_0x1.PNG" alt="darkweb0x1">
</p>

[Back to Index](#index)

# Setting up TOR

The easiest way to set up TOR is through a package manager on your pc. For Windows you can set it up by downloading it on their [official website](https://www.torproject.org/download/){:target="\_blank"} and for linux you can install it using your respective package manager.
Example:

```bash
sudo apt install tor
```

This should install all of TOR's required files and binaries. For this tutorial we will be setting up a TOR website on linux as it is way easier. If you wish to do this on Windows or Mac then install [WSL](https://docs.microsoft.com/en-us/windows/wsl/install){:target="\_blank"} or [VirtualBox](https://www.virtualbox.org/wiki/Downloads){:target="\_blank"} or your preferred virtualisation platform.

Once you have the linux distribution of your choice installed and TOR installed, proceed to locate the files of TOR.

```bash
whereis tor
```

This will give an ouput similar to this:

<p align="center">
<img src="/assets/pics/dark_web_whereis0x1.PNG" alt="darkwebwhereis0x1">
</p>

Note these locations down.
Now that we know where TOR's files are located, we can start making our website. If you already have a website move/copy it to the folder you want to run a server in.

For the people that just want to make a website and run it and see if it works, put some content in the main file `index.html` and start a server like so (you will require python3 or apache to do this. I personally use python3)-

```bash
cd /path/to/website/folder
echo "testing" > index.html
#only bind to port 8080 if its free
python3 -m http.server --bind 127.0.0.1:8080
```

Once you have done this, open up a browser and navigate to `127.0.0.1:8080` to see if the server is up and running. When you load into the website you should see some text in the terminal where you ran the `python3` command.
If it is up and running you can stop the server by hitting `control+c` in the terminal.

Now we have to get our TOR service up and running.
To check if it works in the first place, fire up a terminal and do this:

`sudo tor`

OR

```bash
sudo su -
tor
```

This will start up the TOR service. You can browse any website using the onion circuit once this has fully started up. When it has started up correctly, it should look like this:-

<p align="center">
<img src="/assets/pics/dark_web_startup_tor.PNG" alt="darkweb_startup_tor">
</p>

If this goes well you can terminate this process too by hitting `control+c` in the terminal.

Now we have to get our TOR hostname address and connect the service to our web server thats running locally. Move into the tor folder located at `/etc/tor` by using the change directory (`cd`) command.

```bash
cd /etc/tor
```

Now we can start editing our `torrc` file. Use the text editor of your choice. I prefer `nano` or `vim` as they can be used in the terminal itself. Use the superuser to edit this file: `sudo nano torrc`.

Now we have to look for these two lines and remove the `#` on the left of them.

<p align="center">
<img src="/assets/pics/dark_web_torrc_editing.PNG" alt="darkweb_torrc_edit">
</p>

The lines which are white have the `#` removed from the start of them unlike the others. Change the last number on the 2nd uncommented line to what port you're using to run the web server locally (I'm using `8080`).

Write to the file by hitting `control + o` and `return` and then `control + x` to exit.

With this done, you now have to find the location of your TOR hostname address. Navigate to the directory using the superuser to find the contents of the file `hostname`.

```bash
sudo su -
cd /var/lib/tor/hidden_service
cat hostname
```

This will give you the hostname that you will put in the search bar to access your website using the TOR Browser. Once you've got this, you can navigae back to your website folder using `cd` and do the following.

Terminal 1:
```bash
python3 -m http.server --bind 127.0.0.1 8080
```

Terminal 2:
```bash
sudo tor
```

This will start your local web server and the 2nd command in the 2nd terminal will connect it to the TOR Circuit. Once all of these have started up succesfully, use the `hostname` that you found and open up the TOR Browser. To install TOR on linux follow [this guide](https://tb-manual.torproject.org/installation/) and for Windows and Mac OS, just run the executable by double clicking it.

Once the browser is up and running, simply paste the `hostname` into the search bar and there you go- you have created a website on the dark/deep web.
It should look like this:

<p align="center">
<img src="/assets/pics/dark_web_finished_tor_site_0x1.PNG" alt="darkweb_tor_finished_website">
</p>


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

