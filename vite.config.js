import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    entries: ['index.html']
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['terminal.local', 'localhost']
  }
});
