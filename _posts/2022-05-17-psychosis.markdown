---
layout: post
title: "Psychosis"
date: 2022-05-17 +0530
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

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
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

* {
  box-sizing: border-box;
}

/* Position the image container (needed to position the left and right arrows) */
.container {
  position: relative;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Container for image text */
.caption-container {
  text-align: center;
  background-color: #222;
  padding: 2px 16px;
  color: white;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.column {
  float: left;
  width: 16.66%;
  height: 16.66%
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
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

<div class="container">

  <!-- Full-width images with number text -->
  <div class="mySlides">
    <div class="numbertext">1 / 11</div>
      <img src="/assets/psychosis/psych0x1.png" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 11</div>
      <img src="/assets/psychosis/psych0x2.png" style="width:100%; height: 50%">
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 11</div>
      <img src="/assets/psychosis/psych0x3.png" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 11</div>
      <img src="/assets/psychosis/psych0x4.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 11</div>
      <img src="/assets/psychosis/psych0x5.png" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">6 / 11</div>
      <img src="/assets/psychosis/psych0x6.png" style="width:100%">
  </div>
  <div class="mySlides">
    <div class="numbertext">7 / 11</div>
      <img src="/assets/psychosis/psych0x7.png" style="width:100%">
  </div>
    <div class="mySlides">
    <div class="numbertext">8 / 11</div>
      <img src="/assets/psychosis/psych0x8.png" style="width:100%">
  </div>
    <div class="mySlides">
    <div class="numbertext">9 / 11</div>
      <img src="/assets/psychosis/psych0x9.jpg" style="width:100%">
  </div>
    <div class="mySlides">
    <div class="numbertext">10 / 11</div>
      <img src="/assets/psychosis/psych0x10.png" style="width:100%">
  </div>
  <div class="mySlides">
    <div class="numbertext">11 / 11</div>
      <img src="/assets/psychosis/psych0x11.png" style="width:100%">
  </div>
  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <!-- Image text -->
  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <!-- Thumbnail images -->
  <div class="row">
    <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x1.png" style="width:100%" onclick="currentSlide(1)" alt="My perception of faces">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x2.png" style="height:50%" onclick="currentSlide(2)" alt="Another perception of faces">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x3.png" style="width:100%" onclick="currentSlide(3)" alt="Warped faces">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x4.jpg" style="width:100%" onclick="currentSlide(4)" alt="Something I saw the other day">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x5.png" style="width:100%" onclick="currentSlide(5)" alt="the plague doctor watching me">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x6.png" style="width:100%" onclick="currentSlide(6)" alt="Some wacky woman trynna kill me">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x7.png" style="width:100%" onclick="currentSlide(7)" alt="The Face that follows me everywhere">
    </div>
     <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x8.png" style="width:100%" onclick="currentSlide(8)" alt="The Grey man when I try to sleep">
    </div>
     <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x9.jpg" style="width:100%" onclick="currentSlide(9)" alt="When I'm in a dark room with barely any light">
    </div>
     <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x10.png" style="width:100%" onclick="currentSlide(10)" alt="2 headed monster with knives">
    </div>
     <div class="column">
      <img class="demo cursor" src="/assets/psychosis/psych0x11.png" style="width:100%" onclick="currentSlide(11)" alt="The Grey Man in the morning">
    </div>
  </div>
</div>

# The Voices


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



