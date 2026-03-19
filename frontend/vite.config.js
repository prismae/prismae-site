import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/prismae-site/',

  server: {
    port: 5173,
    open: true
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },

  preview: {
    port: 4173
  }
})
