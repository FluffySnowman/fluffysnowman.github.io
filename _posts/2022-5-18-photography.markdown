---
layout: post
title: "Photography by The Fluffy Snowman"
date: 2022-05-18 +0530
comments: true
categories: jekyll update
---

<script>
function myFunction() {

  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
</script>

<style>
#myInput {
  background-image: url('/css/searchicon.png'); 
  background-position: 10px 12px; 
  background-repeat: no-repeat; 
  width: 100%;
  font-size: 16px; 
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px; 
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

<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for topics">

</div>

<br>
<hr>
<br>

# Index

<ol>
    <li><a href="#photography">Photography</a></li> 
          <ul id="myUL">
            <li><a href="#brighton-beach-at-dusk-1">Brighton Beach at dusk 1</a></li>
            <li><a href="#brighton-beach-at-dawn-1">Brighton Beach at Dawn 1</a></li>
          </ul>
    <li><a href="#edited-photography">Edited Photography</a></li>
            <ul id="myUL">
                <li><a href="#the-red-lamp-post">The Red Lamp Post</a></li>
                <li><a href="#glitched-hacker-in-hoodie-v1">Glitched Hacker in Hoodie v1</a></li>
                <li><a href="#glitched-hacker-in-hoodie-v2">Glitched Hacker in Hoodie v2</a></li>
          </ul>
</ol>

<br>
<hr>
<br>

# Photography

#### Brighton Beach at Dusk 1

<p align="center">
<img src="/assets/photography/brightonbeachnight.jpg" alt="brightonbeachatnight">
</p>

[Back to Index](#index)

#### Brighton beach at Dawn 1

<p align="center">
<img src="/assets/photography/brightonbeachdawn1.jpg" alt="brightonbeachatdawn">
</p>



[Back to Index](#index)

<br>
<hr>
<br>

# Edited Photography

#### The Red Lamp Post

<p align="center">
<img src="/assets/photography/lampred.png" alt="redlampedit">
</p>

[Back to Index](#index)

#### Glitched Hacker in Hoodie v1

<p align="center">
<img src="/assets/photography/glitchalf.gif" alt="glitch1">
</p>

[Back to Index](#index)

#### Glitched Hacker in Hoodie v2

<p align="center">
<img src="/assets/photography/glitchfull.gif" alt="glitch2">
</p>

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



