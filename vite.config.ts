import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {fileURLToPath, URL} from "node:url";
import typescript from '@rollup/plugin-typescript';
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'mosaic-ui',
      fileName: (format) => `mosaic-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: path.resolve('./node_modules/vue'),
        }
      },
    },
  },
  plugins: [
    // {
    //   ...typescript(),
      // apply: 'build',
      // declaration: true,
      // declarationDir: 'types/',
      // rootDir: 'src/'
    // },
    vue(),
    dts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  }
})
