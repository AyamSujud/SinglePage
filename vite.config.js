import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['SinglePage'], // Replace 'your-module-name' with the actual module you want to externalize
    },
  },
});
