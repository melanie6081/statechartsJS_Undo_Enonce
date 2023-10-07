import { resolve } from 'path'
import { defineConfig } from 'vite'
// vite.config.js
export default defineConfig({
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          statepatternrubber: resolve(__dirname, 'pages/statepatternrubber/index.html'),
          xstatelamp: resolve(__dirname, 'pages/xstatelamp/index.html'),
          xstatetraffic: resolve(__dirname, 'pages/xstatetraffic/index.html'),
          xstaterubber: resolve(__dirname, 'pages/xstaterubber/index.html')
        },
      },
      sourcemap: "inline"
    },
    sourcemap: "inline"
  })