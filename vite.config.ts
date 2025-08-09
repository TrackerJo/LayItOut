import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  base: '/LayItOut/',
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        layout: resolve(root, 'Layout', 'index.html'),
        login: resolve(root, 'Login', 'index.html'),
        print: resolve(root, 'Print', 'index.html'),

      }
    }
  }
})
