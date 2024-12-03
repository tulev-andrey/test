import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const customElement = ['Filters']

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => customElement.indexOf(tag) !== -1
        }
      }
    })
  ]
})
