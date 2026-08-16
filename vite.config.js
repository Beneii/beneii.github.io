import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        tokenmix: resolve(__dirname, 'tokenmix/index.html'),
        automation: resolve(__dirname, 'projects/automation/index.html'),
        deskCompanion: resolve(__dirname, 'projects/desk-companion/index.html'),
        planit: resolve(__dirname, 'projects/planit/index.html'),
        spaceMonkeys: resolve(__dirname, 'projects/space-monkeys/index.html')
      }
    }
  },
  optimizeDeps: {
    entries: ['index.html']
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['terminal.local', 'localhost']
  }
});
