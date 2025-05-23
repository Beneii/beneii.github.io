import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';

// Debounce function
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

const gridResolutionX = 128; // Horizontal resolution
const gridResolutionY = 128; // Vertical resolution
const ringRadius = 1;
let ringHeight = 1;

// Define restricted vertical range (e.g., middle 50%)
const minY = 0;
const maxY = gridResolutionY - 1;

let isDrawing = false;
let lastCell = null;
let brushThickness = 1;
let drawingMode = 'draw'; // Modes: 'draw', 'erase'
let startPoint = null;

// Default marching cube settings
let isolationValue = 300;
let ballRadius = 0.01;
let marchingCubesResolution = 64;

let voxelGrid = Array.from({ length: gridResolutionY }, () => Array(gridResolutionX).fill(false));

// === Pre-initialize Materials ===
// const voxelMaterial = new THREE.MeshStandardMaterial({ color: 0x0077ff }); // No longer needed
const smoothMaterial = new THREE.MeshStandardMaterial({ color: 0xff5533, flatShading: true });
const metallicMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff, // full white
  metalness: 0.0, // lower metalness so white shows without env map
  roughness: 0.1,
  emissive: 0xffffff,
  emissiveIntensity: 0.05,
});

// === Scene Setup ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
// Move camera closer (approx 3× zoom)
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth / 2, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.getElementById('rendererContainer').appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Add Lights with Shadows
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(5, 10, 7.5);
directionalLight.castShadow = true;

// Configure shadows for better quality
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.camera.left = -10;
directionalLight.shadow.camera.right = 10;
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = -10;

scene.add(directionalLight);

// === Canvas Grid ===
const canvas = document.getElementById('voxelGrid');
const ctx = canvas.getContext('2d');
const cellWidth = canvas.width / gridResolutionX; // Calculate once
const cellHeight = canvas.height / gridResolutionY; // Calculate once

function drawGrid() { // This function now ONLY draws the 2D grid, no 3D regeneration
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < gridResolutionY; y++) {
    for (let x = 0; x < gridResolutionX; x++) {
      if (y < minY || y > maxY) {
        ctx.fillStyle = '#ffffff';
      } else {
        ctx.fillStyle = voxelGrid[y][x] ? '#0077ff' : '#ffffff';
      }
      ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
  // REMOVED: regenerateMesh(); from here
}

// === Undo/Redo Stacks ===
const undoStack = [];
const redoStack = [];

let liveUpdate = false;
const debouncedLiveUpdate = debounce(regenerateMesh, 150);

function cloneGrid(grid) {
  return grid.map(row => [...row]);
}

function pushUndoState() {
  undoStack.push(cloneGrid(voxelGrid));
  if (undoStack.length > 50) undoStack.shift(); // cap history
  redoStack.length = 0; // clear redo on new action
}

function applyGrid(newGrid) {
  voxelGrid = cloneGrid(newGrid);
  drawGrid();
  if (liveUpdate) regenerateMesh();
}

function undo() {
  if (undoStack.length === 0) return;
  redoStack.push(cloneGrid(voxelGrid));
  const prev = undoStack.pop();
  applyGrid(prev);
}

function redo() {
  if (redoStack.length === 0) return;
  undoStack.push(cloneGrid(voxelGrid));
  const next = redoStack.pop();
  applyGrid(next);
}

function setActiveModeButton() {
  const eraseBtn = document.getElementById('eraseModeButton');
  if (drawingMode === 'erase') {
    eraseBtn.classList.add('active');
  } else {
    eraseBtn.classList.remove('active');
  }
}

// Toggle erase mode button
document.getElementById('eraseModeButton').addEventListener('click', () => {
  drawingMode = drawingMode === 'erase' ? 'draw' : 'erase';
  setActiveModeButton();
});

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  pushUndoState();
  const { x, y } = getCellFromMouse(event);
  if (y < minY || y > maxY) return;
  startPoint = { x, y };
  
  const affectedCells = getCellsUnderBrush(x,y);
  affectedCells.forEach(cell => {
    if (cell.nx >= 0 && cell.ny >= 0 && cell.nx < gridResolutionX && cell.ny < gridResolutionY && !(cell.ny < minY || cell.ny > maxY) ) {
        if (drawingMode === 'erase') {
            if(voxelGrid[cell.ny][cell.nx]) {
              voxelGrid[cell.ny][cell.nx] = false;
              paintCell(cell.nx, cell.ny, '#ffffff');
            }
        } else { // draw mode
            if(!voxelGrid[cell.ny][cell.nx]) { 
                voxelGrid[cell.ny][cell.nx] = true;
                paintCell(cell.nx, cell.ny, '#0077ff');
            }
        }
    }
  });
  if (liveUpdate) debouncedLiveUpdate();
  lastCell = { x,y }; 
});

canvas.addEventListener('mouseup', () => {
  /* // REMOVED: Ensure final 3D update on mouse up
  if(isDrawing) { 
    debouncedRegenerate3DView(); 
  }
  */
  isDrawing = false;
  lastCell = null;
  startPoint = null;
});

// Stop drawing if mouse leaves the canvas
canvas.addEventListener('mouseleave', () => {
  isDrawing = false;
  lastCell = null;
  startPoint = null;
});

// Ensure drawing stops even if mouseup occurs outside the canvas
window.addEventListener('mouseup', () => {
  isDrawing = false;
  lastCell = null;
  startPoint = null;
});

canvas.addEventListener('mousemove', (event) => {
  if (!isDrawing || drawingMode === 'rectangle') return;

  const { x, y } = getCellFromMouse(event);
  if (y < minY || y > maxY) return; 

  if (lastCell && (x !== lastCell.x || y !== lastCell.y)) {
    drawLine(lastCell.x, lastCell.y, x, y); 
  }
  lastCell = { x, y };
  // REMOVED: debouncedRegenerate3DView(); 
});

function getCellFromMouse(event) {
  const rect = canvas.getBoundingClientRect();
  const cellWidth = canvas.width / gridResolutionX;
  const cellHeight = canvas.height / gridResolutionY;
  const x = Math.floor((event.clientX - rect.left) / cellWidth);
  const y = Math.floor((event.clientY - rect.top) / cellHeight);
  return { x, y };
}

function drawLine(x0, y0, x1, y1) {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    const affectedCells = getCellsUnderBrush(x0, y0);
    affectedCells.forEach(cell => {
      if (cell.nx >= 0 && cell.ny >= 0 && cell.nx < gridResolutionX && cell.ny < gridResolutionY && !(cell.ny < minY || cell.ny > maxY)) {
          if (drawingMode === 'erase') {
            if(voxelGrid[cell.ny][cell.nx]) {
                voxelGrid[cell.ny][cell.nx] = false;
                paintCell(cell.nx, cell.ny, '#ffffff');
            }
          } else {
            if(!voxelGrid[cell.ny][cell.nx]) { 
                voxelGrid[cell.ny][cell.nx] = true;
                paintCell(cell.nx, cell.ny, '#0077ff');
            }
          }
      }
    });

    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx) { err += dx; y0 += sy; }
  }
  if (liveUpdate) debouncedLiveUpdate();
}

// Helper function to get all cells affected by the current brush size
function getCellsUnderBrush(centerX, centerY) {
    const cells = [];
    for (let dy = -brushThickness + 1; dy < brushThickness; dy++) {
        for (let dx = -brushThickness + 1; dx < brushThickness; dx++) {
            cells.push({ nx: centerX + dx, ny: centerY + dy });
        }
    }
    return cells;
}

// Helper function to paint a single cell on the 2D canvas
function paintCell(gridX, gridY, color) {
    if (gridX < 0 || gridX >= gridResolutionX || gridY < 0 || gridY >= gridResolutionY) return;
    if (gridY < minY || gridY > maxY) return; // Respect drawing boundaries

    ctx.fillStyle = color;
    ctx.fillRect(gridX * cellWidth, gridY * cellHeight, cellWidth, cellHeight);
}

// === Generate Voxel Ring ===
/* // Removing Voxel Ring generation logic
function generateVoxelRing() {
  // ... (entire function content removed or commented out) ...
}
*/

// === Generate Smooth Ring ===
function generateSmoothRing(materialToUse) {
  const marchingCubes = new MarchingCubes(marchingCubesResolution, materialToUse, true, true, 100000);
  marchingCubes.scale.set(ringRadius * 3, ringHeight * 3, ringRadius * 3);
  marchingCubes.isolation = isolationValue;

  const angleStep = (2 * Math.PI) / gridResolutionX;
  const verticalStep = (2 * Math.PI * ringRadius) / gridResolutionX;

  for (let y = 0; y < gridResolutionY; y++) {
    const posY = -(y - (gridResolutionY - 1) / 2) * verticalStep;
    for (let x = 0; x < gridResolutionX; x++) {
      if (!voxelGrid[y][x]) continue;

      const angle = (gridResolutionX - 1 - x) * angleStep;
      const wx = ringRadius * Math.cos(angle);
      const wz = ringRadius * Math.sin(angle);

      const normX = (wx + ringRadius * 3.0) / (ringRadius * 6.0);
      const normY = (posY + (gridResolutionY - 1) * verticalStep / 2) / ((gridResolutionY - 1) * verticalStep);
      const normZ = (wz + ringRadius * 3.0) / (ringRadius * 6.0);

      marchingCubes.addBall(normX, normY, normZ, ballRadius, 1.0);
    }
  }
  
  marchingCubes.update();
  return marchingCubes;
}

// === Regenerate Mesh ===
let currentMesh = null;
let currentMode = 'metallic'; // Default to metallic

function regenerateMesh() {
  if (currentMesh) {
    scene.remove(currentMesh);
    currentMesh = null;
  }

  // Check if there are any voxels to generate
  const hasVoxels = voxelGrid.some(row => row.some(cell => cell));
  if (!hasVoxels) return;

  if (currentMode === 'smooth') {
    currentMesh = generateSmoothRing(smoothMaterial);
  } else if (currentMode === 'metallic') {
    currentMesh = generateSmoothRing(metallicMaterial);
  }

  if (currentMesh) {
    currentMesh.castShadow = true;
    currentMesh.receiveShadow = true;
    scene.add(currentMesh);
  }
}

function exportToOBJ() {
  const exporter = new OBJExporter();
  
  // Export only the current mesh
  if (currentMesh) {
    const objData = exporter.parse(currentMesh);

    // Create a blob and download the OBJ file
    const blob = new Blob([objData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ring.obj';
    link.click();
  } else {
    console.warn('No mesh to export.');
  }
}

// === UI Event Listeners ===
/* // Removing Voxel toggle listener
document.getElementById('toggleVoxel').addEventListener('click', () => {
  currentMode = 'voxel';
  regenerateMesh(); 
});
*/

document.getElementById('exportObjButton').addEventListener('click', exportToOBJ);

document.getElementById('resetGrid').addEventListener('click', () => {
  voxelGrid = Array.from({ length: gridResolutionY }, () => Array(gridResolutionX).fill(false));
  drawGrid(); 
  regenerateMesh(); 
});

// Add listener for the new OVERLAY Generate button
document.getElementById('generateOverlayButton').addEventListener('click', () => {
  regenerateMesh();
});

const debouncedSliderRegenerateMesh = debounce(regenerateMesh, 250);

document.getElementById('isolationSlider').addEventListener('input', (e) => {
  isolationValue = parseFloat(e.target.value);
  debouncedSliderRegenerateMesh();
});

document.getElementById('ballRadiusSlider').addEventListener('input', (e) => {
  ballRadius = parseFloat(e.target.value);
  if (ballRadius === 0) ballRadius = 0.001;
  debouncedSliderRegenerateMesh();
});

document.getElementById('brushThicknessSlider').addEventListener('input', (e) => {
  brushThickness = parseInt(e.target.value, 10);
  // No 3D regeneration needed here, brush size affects next draw operation
});

document.getElementById('resolutionSlider').addEventListener('input', (e) => {
  marchingCubesResolution = parseInt(e.target.value, 10);
  if (marchingCubesResolution < 16) marchingCubesResolution = 16;
  debouncedSliderRegenerateMesh();
});

document.getElementById('ringHeightSlider').addEventListener('input', (e) => {
  ringHeight = parseFloat(e.target.value);
  debouncedSliderRegenerateMesh();
});

document.getElementById('undoButton').addEventListener('click', undo);
document.getElementById('redoButton').addEventListener('click', redo);

// === Animation ===
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// Initial draw of the empty grid and 3D view setup
drawGrid(); 
regenerateMesh(); // Initial render will now be metallic (or empty if grid is empty)
animate();

// Modify paint and drawLine update calls later: We'll add condition.

document.getElementById('liveUpdateToggle').addEventListener('change', (e) => {
  liveUpdate = e.target.checked;
  document.getElementById('generateOverlayButton').style.display = liveUpdate ? 'none' : 'block';
  if (liveUpdate) {
    regenerateMesh(); // Generate initial mesh when enabling live update
  }
});

// set initial overlay visibility
document.getElementById('generateOverlayButton').style.display = liveUpdate ? 'none' : 'block';

// Texture dropdown
document.getElementById('textureSelect').addEventListener('change', (e)=>{
  currentMode = e.target.value;
  regenerateMesh();
});
