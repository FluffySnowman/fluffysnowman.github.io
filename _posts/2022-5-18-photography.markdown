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










var fsmActual = document.createElement('div');
fsmActual.setAttribute('id', 'fsm_actual');
document.body.appendChild(fsmActual);
var $fsm = document.querySelectorAll('.fsm');;
var $fsmActual = document.querySelector('#fsm_actual');
$fsmActual.style.position = "absolute";

var position = {};
var size = {};


//modal action stuffs
var openFSM = function(event) {
	var $this = event.currentTarget;
	position = $this.getBoundingClientRect();
	size = {
		width: window.getComputedStyle($this).width,
		height: window.getComputedStyle($this).height
	}
	
	$fsmActual.style.position = "absolute";
	$fsmActual.style.top = position.top + 'px';
	$fsmActual.style.left = position.left + 'px';
	$fsmActual.style.height = size.height;
	$fsmActual.style.width = size.width;
	$fsmActual.style.margin = $this.style.margin;
	
	setTimeout(function(){
		$fsmActual.innerHTML = $this.innerHTML;
		var classes = $this.classList.value.split(' ');
		for (var i = 0; i < classes.length; i++) {
			$fsmActual.classList.add(classes[i]);
		}
		$fsmActual.classList.add('growing');
		$fsmActual.style.height = '100vh';
		$fsmActual.style.width = '100vw';
		$fsmActual.style.top = '0';
		$fsmActual.style.left = '0';
		$fsmActual.style.margin = '0';
	}, 1);
	
	setTimeout(function(){
		$fsmActual.classList.remove('growing');
		$fsmActual.classList.add('full-screen')
	}, 1000);
};

var closeFSM = function(event){
	var $this = event.currentTarget;
	
	$this.style.height = size.height;
	$this.style.width = size.width;
	$this.style.top = position.top + 'px';
	$this.style.left = position.left + 'px';
	$this.style.margin = '0';
	$this.classList.remove('full-screen');
	$this.classList.add('shrinking');
	
	setTimeout(function(){
		while($this.firstChild) $this.removeChild($this.firstChild);
		var classList = $this.classList;
		while (classList.length > 0) {
			 classList.remove(classList.item(0));
		}
		$this.style = '';;
	}, 1000);
};

for (var i = 0; i < $fsm.length; i++) {
	$fsm[i].addEventListener("click", openFSM);
}
$fsmActual.addEventListener("click", closeFSM);


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








body {

	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0;
	background-color: #f5f5f5;
	font-family: 'Roboto', sans-serif;
	
	&.no-scroll {
		overflow: hidden;
	}
}

h1 {
	font-weight: 900;
	text-transform: uppercase;
}

.fsm {
	margin: 10vh 5vw;
	background-color: blue;
	height: 100px;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #f5f5f5;
	font-size: 1.5rem;
	border-radius: 10px;
	transition: 1s;
	cursor: pointer;
	
	.fa {
		transition: 1s;
		color: #f5f5f5;
		font-size: 2.5vw;
		
		&:before {
			color: #f5f5f5;
		}
	}
	
	.modal-content {
		height: 0;
		width: 0;
		margin: 0;
	}
	
	h1.modal-content {
		opacity: 0;
		transition: 1s;
	}
	
	&.apple {
		background: linear-gradient(135deg, #83458e 0%,#608dc9 100%);
	}
	&.pied {
		background: linear-gradient(135deg, #6ecdc7 0%,#c7e4ec 100%);
	}
	&.codepen {
		background: linear-gradient(135deg, #778899 0%,#DCDCDC 100%);
	}
	&.google {
		background: linear-gradient(135deg, #4285f4 0%,#ea4335 100%);
	}
	
	&.growing {
		h1.modal-content {
			height: auto;
			margin: 0;
			opacity: 0;
			transition-delay: 0.5s;
		}
	}
	
	&.full-screen {
		height: 100vh;
		z-index: 100;
		margin: 0;
		border-radius: 0;
		
		.fa {
			font-size: 10vw;
		}
		.modal-content {
			height: auto;
			width: auto;
			margin: inital;
		}
		h1.modal-content {
			transition-delay: 0.5s;
			opacity: 1;
		}
	}
	&.shrinking {
		h1.modal-content {
			transition-delay: 0s;
			transition: 0.5s;
			opacity: 0;
			display: block;
		}
	}
	
	&-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
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

<div id="fsm_container" class="fsm-container">
<div class="fsm apple">
<i class="fa fa-apple">
<p align="center">
<img class="modal-content" src="/assets/photography/brightonbeachnight.jpg" alt="brightonbeachatnight">
</p>
</i>
</div>
</div>

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



