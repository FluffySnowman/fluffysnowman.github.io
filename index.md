---
layout: default
permalink: /
---

  <style>
        .writer {
        font-family: Courier, monospace;
        display: inline-block;
        }
        .writer-text {
            display: inline-block;
            overflow: hidden;
            letter-spacing: 2px;
            animation: typing 2s steps(30, end), blink .75s step-end infinite;
            white-space: nowrap;
            font-size: 30px;
            font-weight: 700;
            border-right: 4px solid orange;
            box-sizing: border-box;
        }

        @keyframes typing {
            from { 
                width: 0% 
            }
            to { 
                width: 100% 
            }
        }

        @keyframes blink {
            from, to { 
                border-color: transparent 
            }
            50% { 
                border-color: green 
            }
        }
    </style>


<header style="display: contents">
 <font size=1> 
  <div>
    <a style="text-decoration:none" href="{{ "/" | prepend: site.baseurl | replace: '//', '/' }}">
    {% assign owner_first_name = site.owner | split: " " %}
    <h1>fluffy@void:~$</h1>
    </a>
    <div class="header-links">
      {% include links.html %}
    </div>
  </div>
  </font> 
  <hr>
  
</header>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FFluffySnowman%2Ffluffysnowman.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

### Welcome to the site where there is content from computer tutorials to photography. Make sure to check out the Indexes on each page for easy navigation :)

<body>

<br> 
<div class="writer">
            <div class="writer-text">

<p>> <a href="/jekyll/update/2022/05/26/botnets.html" style="text-decoration:none">Botnet Basics</a></p> 
  </div>
  </div>
<br>


<div class="writer">
            <div class="writer-text">

<p>> <a href="/jekyll/update/2022/05/18/photography.html" style="text-decoration:none">Photography by The Fluffy Snowman</a></p>
  </div>
  </div>
<br>

<div class="writer">
            <div class="writer-text">

<p>> <a href="/jekyll/update/2022/05/06/the-dark-web.html" style="text-decoration:none">The Dark Web</a></p>
  </div>
  </div>
<br>

<div class="writer">
            <div class="writer-text">

<p>> <a href="/jekyll/update/2022/04/19/the-hackers-maual.html" style="text-decoration:none">The Hacker's Manual</a></p>
  </div>
  </div>
<br>

<div class="writer">
            <div class="writer-text">

<p>> <a href="/jekyll/update/2022/04/17/main.html" style="text-decoration:none">The Guide to Everything</a></p>
  </div>
  </div>
<br>

</body>

{% include footer.html %}
