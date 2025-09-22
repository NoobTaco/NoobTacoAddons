import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/NoobTacoAddons/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pve: resolve(__dirname, 'pve.html'),
        footerLoader: resolve(__dirname, 'src/footer-loader.js')
      }
    }
  }
})
