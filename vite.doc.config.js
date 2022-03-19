import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { name } from "./package.json";

export default defineConfig({
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  plugins: [vue()],
  base: "./",
  build: {
    brotliSize: false,
    manifest: false,
    outDir: "docs",
    publicDir: "./",
    rollupOptions: {
      input: {
        main: "index.html",
      },
      output: {},
    },
  },
});
