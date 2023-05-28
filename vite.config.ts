import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import { resolve } from "path";
import path from "path";


export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    Markdown({
      builders: []
    })

  ],
  // 打包
  build: {
    lib: {
      // 入口
      entry: "src/components/index.ts",
      name: "du-test",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src/',
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
});
