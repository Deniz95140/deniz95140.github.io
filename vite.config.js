import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  // Relative asset paths prevent blank pages when served from subpaths/static hosts.
  base: './',
  plugins: [react()],
});
