import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 9000
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        format: 'system',
        entryFileNames: 'rg-root-config.js'
      }
    }
  }
})
