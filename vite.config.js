import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/', // ← très important pour un repo type username.github.io
  plugins: [react()],
})
