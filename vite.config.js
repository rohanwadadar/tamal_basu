import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tamal_basu/',  // REQUIRED for GitHub / Netlify subpath
  plugins: [react()],
})
