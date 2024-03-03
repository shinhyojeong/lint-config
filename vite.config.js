import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'index.js'),
        resolve(__dirname, 'prettierrc.js')
      ],
      name: '@shinhyojeong/eslint-config',
      formats: ['es', 'cjs']
    },
    outDir: 'lib'
  }
})
