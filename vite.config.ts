import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
  // Use the repo name when deploying to GitHub Pages
  // If deploying to username.github.io (root), change to '/'
  base: '/Portfolio-V2/',
  build: {
    outDir: 'dist',
  },
})
