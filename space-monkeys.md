---
layout: page
title: "Space Monkeys"
permalink: /projects/space-monkeys/
---

{% include navbar.html %}
{% include page-hero.html %}
<div class="page-content-container">
  <div class="project-detail">
    <div class="details">
      <div style="display:flex;flex-wrap:wrap;gap:2rem;align-items:center;justify-content:center;">
        <figure style="flex:1;min-width:250px;text-align:center;">
          <img src="https://picsum.photos/seed/spacemonkeys/800/500" alt="Space Monkeys Game hero image" style="max-width:100%;border-radius:8px;"/>
          <figcaption>Space Monkeys – Group Game Project</figcaption>
        </figure>
      </div>
      <h2>About the Game</h2>
      <p><strong>Space Monkeys</strong> is a frantic local-multiplayer brawler created in under 12 weeks for our university group capstone. Up to four players jet-pack around a zero-gravity arena, slinging bananas and physics-based projectiles to knock each other into the void.</p>

      <h3>Tech Stack</h3>
      <ul>
        <li>Unity 2022 (URP)</li>
        <li>C# gameplay scripting & network-ready architecture</li>
        <li>Custom ragdoll & thruster physics</li>
        <li>GitHub Projects for agile task tracking</li>
      </ul>

      <div style="display:flex;flex-wrap:wrap;gap:1rem;margin:2rem 0;">
        <a href="https://liamdskinner.itch.io/space-monkeys" class="btn" target="_blank">Play on itch.io</a>
        <a href="https://github.com/JamesKirwanUTS/Cozy" class="btn btn-secondary" target="_blank">View Source Code</a>
      </div>

      <h2>Case Study Coming Soon</h2>
      <p>A full post-mortem covering design decisions, system architecture, and our play-testing results will be published here soon.</p>
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