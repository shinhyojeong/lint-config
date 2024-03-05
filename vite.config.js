import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: '@shinhyojeong/eslint-plugin',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    outDir: 'lib'
  }
})
