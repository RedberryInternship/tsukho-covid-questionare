import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
  define: {
    'process.env.REACT_APP_API_URL': `"${process.env.REACT_APP_API_URL}"`,
  },
});
