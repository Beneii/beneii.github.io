---
layout: page
title: "Blobby Ring Generator"
permalink: /projects/blobby-ring-generator/
---

{% include navbar.html %}
{% include page-hero.html %}
<div class="page-content-container">
  <div class="project-detail">
    <div class="details">
      
      ## Introduction
      When I first saw voxel art tutorials online, I loved the chunky aesthetic—but hated how clunky exporting to 3D always felt. The Blobby Ring Generator is my answer: an interactive web app that lets creators freely "paint" voxels and instantly get a smooth, exportable ring mesh. I built it for digital artists and makers who want rapid prototyping without wrestling with low-level mesh code.
      <br><br>
      The most innovative aspect? Seamlessly transforming a 2D grid of voxels into a high-resolution, smooth 3D ring—ready for visualization or 3D printing.

      ## Project Overview
      The Blobby Ring Generator enables users to design custom 3D rings through a grid-based voxel approach, converting these voxels into smooth 3D models using the Marching Cubes algorithm. Leveraging Three.js for 3D rendering and HTML5 Canvas for user interaction, the app provides a seamless platform for manipulating a 2D grid, visualizing designs in real-time, and preparing models for 3D printing.

      <div style="display:flex;flex-wrap:wrap;gap:2rem;align-items:center;justify-content:center;">
        <figure style="flex:1;min-width:250px;text-align:center;">
          <img src="/assets/images/blobbyringhero.png" alt="Blobby Ring Generator hero image" style="max-width:100%;border-radius:8px;"/>
          <figcaption>Brush in action: painting voxels and generating a ring</figcaption>
        </figure>
        <!-- Add more screenshots or GIFs here -->
      </div>

      ## Feature Reflection: Voxel Grid to Marching Cubes Conversion
      <strong>Recount:</strong> <br>
      A pivotal feature is the interactive voxel grid. Users toggle voxels on a 2D grid, representing different ring layers. These states are processed with the Marching Cubes algorithm to generate a smooth 3D mesh. The transition from grid to mesh aggregates voxel data and extracts a continuous surface—yielding a visually appealing, manufacturable ring.
      <br><br>
      <strong>React:</strong> <br>
      Watching discrete voxels transform into a fluid 3D model was deeply satisfying. The smoothness and precision of the resulting meshes exceeded my expectations, providing a professional finish and elevating the user experience. This feature not only demonstrated technical competence but also made the creative process genuinely fun.
      <br><br>
      <strong>Analyze:</strong> <br>
      Success hinged on mapping the 2D grid to 3D space, tuning Marching Cubes parameters (resolution, isoLevel), and managing memory efficiently. Using Three.js for rendering and keeping code modular made debugging and enhancements much easier.
      <br><br>
      <strong>Improve:</strong> <br>
      Future iterations could add advanced drawing tools (variable brush sizes/shapes), real-time mesh updates, and performance optimizations (Web Workers, alternative algorithms) for even more detailed designs.

      ## Feature Reflection: Export Functionality for 3D Printing
      <strong>Recount:</strong> <br>
      Another highlight is export functionality: users can download their rings as OBJ or GLTF files, ready for 3D printing. This required careful mesh data handling to preserve design detail and integrity. Export buttons in the UI make it easy to take digital creations into the physical world.
      <br><br>
      <strong>React:</strong> <br>
      Seeing users print their own rings was incredibly rewarding. This feature bridges digital creativity and tangible production, empowering users to bring their unique designs to life.
      <br><br>
      <strong>Analyze:</strong> <br>
      The key was accurate translation of Three.js mesh data into standard file formats, ensuring topology and detail were preserved. Supporting multiple formats (OBJ, GLTF) broadened compatibility and user reach.
      <br><br>
      <strong>Improve:</strong> <br>
      Expanding export options, adding validation checks, and offering export customization (resolution, compression) would further enhance this feature. Tutorials on preparing/printing files could also help users succeed.

      ## Key Learnings
      - Mastered Three.js's Marching Cubes nuances (resolution vs. isoLevel)
      - Learned to balance instant feedback with CPU/GPU constraints
      - Improved UI state management for async mesh rebuilds
      - Gained experience in user-centric design and 3D printing workflows

      ## Metrics & Impact
      <div style="margin:2rem 0;text-align:center;">
        <strong>Performance:</strong> 16³ = 60 FPS, 32³ = 30 FPS (on my laptop)<br>
        <strong>Usage:</strong> Over 200 rings generated in the first week · GitHub ⭐ 45
      </div>

      <div style="text-align:center;margin:2rem 0;">
        <a href="/Projects/three-ring-generator/" class="btn">Launch the Live Generator →</a>
      </div>

      ## Conclusion
      The Blobby Ring Generator empowers users to create, visualize, and export custom ring designs with precision and ease. Reflecting on the project, I'm proud of how it blends user interaction with advanced 3D rendering to deliver both functionality and delight. I'd love to hear your feedback or see the rings you create—<a href="/Projects/three-ring-generator/">try it live</a> and drop me a line on <a href="https://github.com/beneii" target="_blank">GitHub</a>!

      <p style="text-align:center; margin-top:2rem;">
        <a href="/projects/">← Back to all projects</a>
      </p>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/nav-scroll.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url }}" defer></script>
<script src="{{ '/assets/js/dark-mode.js' | relative_url }}" defer></script>

{% include footer.html %} 