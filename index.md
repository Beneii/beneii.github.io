---
layout: default
title: "Benei's Portfolio"
description: "Building interactive systems that blend code, AI, and physical computing"
---

{% include page-hero.html %}

<section class="about-preview fade-in">
  <div class="container">
    <h2>About Me</h2>
    <p>I'm a developer passionate about creating interactive systems that blend code, AI, and physical computing. My work focuses on building intuitive interfaces and exploring the intersection of technology and human experience.</p>
    <a href="/about" class="btn">Read More</a>
  </div>
</section>

<section id="featured-projects" class="featured-projects fade-in">
  <div class="container">
    <h2>Featured Projects</h2>
    <div class="projects-grid">
      {% for project in site.projects limit:3 %}
      <article class="project-card">
        {% if project.image %}
        <img src="{{ project.image }}" alt="{{ project.title }}" class="project-image">
        {% endif %}
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            {% for tag in project.tags %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
          <a href="{{ project.url }}" class="btn">View Project</a>
        </div>
      </article>
      {% endfor %}
    </div>
    <div class="projects-cta">
      <a href="/projects" class="btn">View All Projects</a>
    </div>
  </div>
</section>

<section class="contact-preview fade-in">
  <div class="container">
    <h2>Get in Touch</h2>
    <p>Interested in working together? Let's connect and discuss how we can create something amazing.</p>
    <a href="mailto:your.email@example.com" class="btn">Contact Me</a>
  </div>
</section>

<script src="{{ '/assets/js/hero-typing.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/dark-mode.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>

{% include footer.html %} 