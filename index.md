---
layout: home
title: Home
tagline: "Building interactive systems that blend code, AI, and physical computing"
---

<section class="home-section featured-section reveal">
  <h2>Featured Projects</h2>
  <p class="section-lede">A few things I've designed, built, soldered, and shipped.</p>
  <div class="projects-masonry">
    {% for project in site.data.projects limit: 3 %}
      {% include project-tile.html project=project %}
    {% endfor %}
  </div>
  <div class="view-all-projects">
    <a href="/projects/" class="btn">View all projects</a>
  </div>
</section>

<section id="contact" class="home-section contact-section reveal">
  <h2>Contact</h2>
  <div class="contact-container">
    <a class="contact-method" href="mailto:ben.eifion.jones@gmail.com">
      <span class="contact-label">Email</span>
      <span class="contact-value">ben.eifion.jones@gmail.com</span>
    </a>
    <a class="contact-method" href="https://github.com/beneii" target="_blank" rel="noopener">
      <span class="contact-label">GitHub</span>
      <span class="contact-value">github.com/beneii</span>
    </a>
    <a class="contact-method" href="tel:0451662807">
      <span class="contact-label">Phone</span>
      <span class="contact-value">0451 662 807</span>
    </a>
    <div class="contact-method">
      <span class="contact-label">Discord</span>
      <span class="contact-value">Benei</span>
    </div>
  </div>
</section>
