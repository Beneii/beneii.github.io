---
layout: home
title: Home
tagline: "Building interactive systems that blend code, AI, and physical computing"
---

<section id="work" class="work-section reveal">
  <div class="section-head">
    <span class="section-label">01 — Selected Work</span>
    <a class="section-link" href="/projects/">All projects →</a>
  </div>
  {% for project in site.data.projects limit: 3 %}
  <a class="feature-row" href="/projects/{{ project.slug }}/">
    <div class="feature-media">
      {% if project.image_placeholder %}
      <div class="placeholder-graphic">
        <div style="font-size:4rem;">⚙</div>
      </div>
      {% else %}
      <img
        src="{{ project.image }}"
        alt="{{ project.title }}"
        {% if project.pixel_art %}style="image-rendering:pixelated;image-rendering:crisp-edges;"{% endif %}
        loading="lazy">
      {% endif %}
    </div>
    <div class="feature-info">
      <span class="feature-index">0{{ forloop.index }}</span>
      <h3>{{ project.title }}</h3>
      <p class="feature-tech">{{ project.tech }}</p>
      <p class="feature-desc">{{ project.description }}</p>
      <span class="feature-cta">View project →</span>
    </div>
  </a>
  {% endfor %}
</section>

<section id="contact" class="contact-section reveal">
  <span class="section-label">02 — Contact</span>
  <h2 class="contact-headline">Let's build something <em>together.</em></h2>
  <a class="contact-email" href="mailto:ben.eifion.jones@gmail.com">ben.eifion.jones@gmail.com</a>
  <div class="contact-links">
    <div>
      <span class="contact-label">GitHub</span>
      <a href="https://github.com/beneii" target="_blank" rel="noopener">github.com/beneii</a>
    </div>
    <div>
      <span class="contact-label">Phone</span>
      <a href="tel:0451662807">0451 662 807</a>
    </div>
    <div>
      <span class="contact-label">Discord</span>
      <span class="contact-value">Benei</span>
    </div>
  </div>
</section>
