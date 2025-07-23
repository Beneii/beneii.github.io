#!/usr/bin/env node

// Simple test script for Canvas MCP
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Testing Canvas MCP...');

// Test if the MCP server can start
const mcpProcess = spawn('node', ['canvas-mcp/dist/index.js'], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: {
    ...process.env,
    CANVAS_API_TOKEN: process.env.CANVAS_API_TOKEN || 'test',
    CANVAS_DOMAIN: process.env.CANVAS_DOMAIN || 'test.instructure.com'
  }
});

mcpProcess.stdout.on('data', (data) => {
  console.log('MCP Output:', data.toString());
});

mcpProcess.stderr.on('data', (data) => {
  console.log('MCP Error:', data.toString());
});

mcpProcess.on('close', (code) => {
  console.log(`MCP process exited with code ${code}`);
});

// Kill after 5 seconds
setTimeout(() => {
  mcpProcess.kill();
  console.log('Test completed');
}, 5000);
