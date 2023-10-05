import { resolve } from 'path'
import { defineConfig } from 'vite'
// vite.config.js
export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          statepatternrubber: resolve(__dirname, 'pages/statepatternrubber/index.html'),
        },
      },
      sourcemap: true
    },
  })