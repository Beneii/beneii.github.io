---
layout: default
title: Projects
description: "Explore my portfolio of interactive systems, creative technology, and software projects"
---

{% include page-hero.html %}

<section class="projects-section fade-in">
  <div class="container">
    <div class="projects-toolbar">
      <div class="projects-filter">
        <label for="category-filter">Filter by:</label>
        <select id="category-filter">
          <option value="all">All Projects</option>
          <option value="web">Web Development</option>
          <option value="hardware">Hardware/Creative Tech</option>
          <option value="game">Games/Experiments</option>
          <option value="automation">Automation/Tooling</option>
        </select>
      </div>
    </div>

    <div class="projects-grid">
      {% for project in site.projects %}
      <article class="project-card" data-category="{{ project.category }}">
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
          <div class="project-links">
            <a href="{{ project.url }}" class="btn">View Details</a>
            {% if project.demo_url %}
            <a href="{{ project.demo_url }}" class="btn btn-outline" target="_blank">Live Demo</a>
            {% endif %}
            {% if project.github_url %}
            <a href="{{ project.github_url }}" class="btn btn-outline" target="_blank">GitHub</a>
            {% endif %}
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const filter = document.getElementById('category-filter');
  const projects = document.querySelectorAll('.project-card');

  filter.addEventListener('change', function() {
    const category = this.value;
    
    projects.forEach(project => {
      if (category === 'all' || project.dataset.category === category) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
</script>

<script src="/assets/js/project-filter.js" defer></script>
<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="/assets/js/scroll-reveal.js" defer></script>
<script src="/assets/js/dark-mode.js" defer></script>

{% include footer.html %}
