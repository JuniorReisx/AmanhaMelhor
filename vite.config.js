import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Amanha Melhor',
        short_name: 'Amanha Melhor',
        start_url: '/', 
        display: 'fullscreen', 
        background_color: '#6495ed',
        theme_color: '#6494ed',
        icons: [
          {
            src: '/meioRemove.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/meioRemove.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
