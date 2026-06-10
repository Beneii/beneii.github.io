---
layout: projects
title: Projects
permalink: /projects/
---

<div class="projects-masonry">
  {% for project in site.data.projects %}
    {% include project-tile.html project=project %}
  {% endfor %}
</div>
