import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      external: ['/assets/index-BmWpCgn-.js']
    }
  }
  // server: {
  //   host: true,
  //   port: 3000,
  //   proxy: {
    
  //     '/api': {
  //       target: 'http://192.168.1.225:3000',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
});
