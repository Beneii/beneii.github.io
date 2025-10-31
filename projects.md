---
layout: projects
title: Projects
permalink: /projects/
---

<div class="projects-masonry">
  {% for project in site.data.projects %}
  <a href="/projects/{{ project.slug }}/" class="project-tile" data-title="{{ project.title }}" data-category="{{ project.category }}">
    <div class="project-tile-image">
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
    <div class="project-tile-footer">
      <h3>{{ project.title }}</h3>
      <span class="tech-label">{{ project.tech }}</span>
    </div>
  </a>
  {% endfor %}
</div>
