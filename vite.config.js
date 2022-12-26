import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: false,
    assetsDir: "./",
    rollupOptions: {
      external: ["vue/dist/vue.global.prod.js"],
      input: {
        content: "./src/content/content.js",
      },
      output: {
        entryFileNames: "[name].js",
        globals: {
          Vue: "vue/dist/vue.global.prod.js"
        }
      },
    },
  },
});
