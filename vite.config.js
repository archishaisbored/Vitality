// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public', // Set the root directory to 'public'
  server: {
    port: 3000,  // Ensure Vite runs on port 3000
    open: '/index.html', // Automatically open index.html
  },
});
