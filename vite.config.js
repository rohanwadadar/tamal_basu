import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tamal_basu/',   // 👈 ADD THIS LINE
})
