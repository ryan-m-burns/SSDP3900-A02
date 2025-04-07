import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  // Base path for GitHub Pages deployment

  base: '/SSDP3900-A02/',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
