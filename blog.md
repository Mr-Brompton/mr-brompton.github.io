---
layout: default
title: Blog
---
<h1>Latest Posts</h1>


{% for post in site.posts %}
  <div class="blog-card">
    <div class="meta">
      <a href="{{ post.url }}"><div class="photo" style="background-image: url({{ site.url }}/assets/img/Cyber-update.jpg)"></div></a>
      <!--        <ul class="details">
          <li class="author"><a href="#">Jane Doe</a></li>
          <li class="date">July. 15, 2015</li>
          <li class="tags">
            <ul>
              <li><a href="#">Learn</a></li>
              <li><a href="#">Code</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </li>
        </ul>-->
    </div>
    <div class="description">
      <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
        <p>{{ post.excerpt }}</p>
    </div>
  </div>
{% endfor %}