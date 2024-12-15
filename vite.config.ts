import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['@splinetool/runtime']
  },
  define: {
    'process.env': {}
  },
  server: {
    host: true,
    port: 5173
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          spline: ['@splinetool/runtime', '@splinetool/react-spline']
        }
      }
    }
  }
});