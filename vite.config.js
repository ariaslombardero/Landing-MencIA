import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow serving files from the parent MencIAlanding directory
    // so that simulator HTML links (../Laboratorio MencIA/...) work
    fs: {
      allow: [
        path.resolve(__dirname, '..'),
      ],
    },
  },
})
