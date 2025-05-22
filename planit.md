---
layout: page
title: "PlanIt"
permalink: /projects/planit/
---

{% include navbar.html %}
{% include page-hero.html %}
<div class="page-content-container">
  <div class="project-detail">
    <div class="details">
      <div style="display:flex;flex-wrap:wrap;gap:2rem;align-items:center;justify-content:center;">
        <figure style="flex:1;min-width:250px;text-align:center;">
          <img src="/assets/images/PlanIt1.png" alt="PlanIt iOS App Screenshot 1" style="max-width:100%;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,0.15);"/>
          <figcaption>PlanIt: Planet-themed Task & Calendar Manager</figcaption>
        </figure>
      </div>
      <h2>Project Overview</h2>
      <p><strong>PlanIt</strong> is a planet-themed iOS app for managing tasks and calendars. It integrates with the Canvas Student API to automatically fetch upcoming assessments, or you can manually add your own tasks and events. Designed for students and busy professionals, PlanIt makes staying organized fun and visually engaging.</p>
      <h2>App Showcase</h2>
      <div class="planit-carousel" style="display:flex;gap:1.5rem;overflow-x:auto;padding-bottom:1rem;scroll-snap-type:x mandatory;">
        <img src="/assets/images/PlanIt1.png" alt="PlanIt Screenshot 1" style="height:400px;max-width:250px;object-fit:contain;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.12);scroll-snap-align:center;"/>
        <img src="/assets/images/PlanIt2.png" alt="PlanIt Screenshot 2" style="height:400px;max-width:250px;object-fit:contain;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.12);scroll-snap-align:center;"/>
        <img src="/assets/images/PlanIt3.png" alt="PlanIt Screenshot 3" style="height:400px;max-width:250px;object-fit:contain;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.12);scroll-snap-align:center;"/>
        <img src="/assets/images/PlanIt4.png" alt="PlanIt Screenshot 4" style="height:400px;max-width:250px;object-fit:contain;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.12);scroll-snap-align:center;"/>
      </div>
      <h2>Case Study Coming Soon</h2>
      <p>This page will soon feature a full case study, technical reflection, and more details about PlanIt's features and development process.</p>
      <div style="text-align:center;margin:2rem 0;">
        <a href="/projects/" class="btn">← Back to all projects</a>
      </div>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/dark-mode.js' | relative_url }}" defer></script>

{% include footer.html %} 