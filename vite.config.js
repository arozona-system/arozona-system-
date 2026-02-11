import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // <-- dit à Vite que index.html est à la racine
  build: {
    outDir: 'dist'
  }
})
