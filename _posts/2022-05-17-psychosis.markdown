---
layout: post
title: "Psychosis"
date: 2030-05-17 +0530
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

Go to the [comments](#comments-section)

<div>

<input id="searchbar" onkeyup="search()" type="text" name="search" placeholder="Search for topics...">

</div>

<br>
<hr>
<br>

# INDEX:

<ol>
    <li><a href="#psychotic-illustrations">Psychotic Illustrations</a></li> 
          <ul id="myUL">
            <li class="indexvals"><a href="#voices-in-dark-rooms">The Voices in Dark Rooms</a></li>
            <li class="indexvals"><a href="#the-grey-man">The Grey Man</a></li>
            <li class="indexvals"><a href="#the-grey-man-at-night">The Grey Man at Night</a></li>
          </ul>
    <li><a href=""></a></li>
        <ul id="myUL">
        </ul>
</ol>

<br>
<hr>
<br>

<h1 align="center">Psychotic Illustrations</h1>

### Voices in Dark Rooms

<p align="center">
<img src="/assets/psychosis/psych0x9.jpg" alt="they can see you">
</p>

<br>

[Back to Index](#index)

### The Grey Man

<p align="center">
<img src="/assets/psychosis/psych0x11.jpg" alt="they can see you">
</p>

All he does is stare at me :)

<br>

[Back to Index](#index)

### The Grey Man at Night

<p align="center">
<img src="/assets/psychosis/psych0x8.jpg" alt="they can see you">
</p>

He also stares but speaks using my mind

<br>

[Back to Index](#index)

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



