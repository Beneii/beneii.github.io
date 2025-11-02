---
layout: project
title: "Blobby Ring Generator"
permalink: /projects/blobby-ring-generator/
hero_image: "/assets/images/projects/blobbyringhero.png"
hero_caption: "Brush in action: painting voxels and generating a ring"
links:
  - text: "Launch the Live Generator →"
    url: "/Projects/three-ring-generator/"
    label: "Open Blobby Ring Generator app"
---

<h2>Project Overview</h2>
<p>I was getting very into creating jewelry and found that every software I used wasn't very beginner friendly and it was very difficult to make any that looked organic like the style that I wanted.</p>

<h3>The Journey</h3>
<p>I tried a lot of different approaches first, trying to paint in 2D onto a 3D cylinder and try to "delete" the parts of the mesh I wasn't drawing. But that approach did not really work at all.</p>

<p>I remembered some approaches I used for game development where I used marching cubes algorithm to create nice dynamic landscapes. I brought that knowledge across to this project and was able to map 2D pixel art to a 3D cylinder and ran a marching cubes algorithm on it.</p>

<h3>Tech Stack</h3>
<ul>
  <li>Three.js (3D rendering)</li>
  <li>HTML5 Canvas (user interaction)</li>
  <li>Marching Cubes algorithm</li>
  <li>JavaScript</li>
  <li>WebGL</li>
</ul>

<h3>Key Features</h3>
<ul>
  <li>Interactive voxel grid for designing rings</li>
  <li>Real-time 3D mesh generation using Marching Cubes</li>
  <li>Export functionality (OBJ, GLTF) for 3D printing</li>
  <li>Smooth mesh generation from discrete voxel data</li>
</ul>
