---
layout: post
title: "Photography by The Fluffy Snowman"
date: 2022-05-18 +0530
comments: true
categories: jekyll update
---


<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

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


////////////////////////////////////

var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
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


#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {
  opacity: 0.7;
}

.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9);
  /* Black w/ opacity */
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

.modal-content,
#caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
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
            <li><a href="#goa-sunset-1">Goa Sunset 1</a></li>
            <li><a href="#goa-sunrise-1">Goa Sunrise 1</a></li>
          </ul>
    <li><a href="#edited-photography">Edited Photography</a></li>
            <ul id="myUL">
                <li><a href="#the-red-lamp-post">The Red Lamp Post</a></li>
                <li><a href="#the-white-lamp-post-with-me-smoking">The white lamp post with me smoking</a></li>
                <li><a href="#glitched-hacker-in-hoodie-v1">Glitched Hacker in Hoodie v1</a></li>
                <li><a href="#glitched-hacker-in-hoodie-v2">Glitched Hacker in Hoodie v2</a></li>
          </ul>
</ol>

<br>
<hr>
<br>

# Photography

#### Brighton Beach at Dusk 1


<img class="myImages" id="myImg" src="http://onebigphoto.com/uploads/2012/10/midnight-sun-in-lofoten-norway.jpg" alt="Midnight sun in Lofoten, Norway" width="300" height="200">
<img class="myImages" id="myImg" src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1490029386/fisherman-cabin-hamnoy-lofoten-islands-norway-NORWAY0320.jpg?itok=cpPuUjh1" alt="Fishermen's cabins in Lofoten, Norway"
width="300" height="200">
<img class="myImages" id="myImg" src="http://fjordtours.blob.core.windows.net/fjordtours-umbraco/1199/gerirangerfjord-per-ottar-walderhaug-fjordnorway.jpg" alt="Gerirangerfjord, Norway" width="300" height="200">
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>
<!--
<p align="center">
<img src="/assets/photography/brightonbeachnight.jpg" alt="brightonbeachatnight">
</p>

-->

[Back to Index](#index)

#### Brighton beach at Dawn 1

<p align="center">
<img src="/assets/photography/brightonbeachdawn1.jpg" alt="brightonbeachatdawn">
</p>

[Back to Index](#index)

#### Goa sunset 1

<p align="center">
<img src="/assets/photography/goabeachsunset1.jpg" alt="goabeachsunset1">
</p>

#### Goa sunrise 1

<p align="center">
<img src="/assets/photography/goabeachdawn.jpg" alt="goabeachdawn1">
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

#### The White Lamp Post with me Smoking

<p align="center">
<img src="/assets/photography/lampsmoking.png" alt="lampsmoking">
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



