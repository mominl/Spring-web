import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Try without Tailwind plugin first to test
export default defineConfig({
  plugins: [
    react()
  ]
})
