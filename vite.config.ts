import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { name } from "./package.json";

// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
// import Unocss from 'unocss/vite'
// https://vitejs.dev/config/

export default defineConfig({
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  plugins: [
    vue(),
    //Unocss(),
    //peerDepsExternal()
  ],
  build: {
    lib: {
      name,
      entry: "src/index.ts",
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        //In UMD build mode, a global variable is provided for these externalized dependencies
        globals: {
          vue: "Vue",
          "vue-demi": "VueDemi",
        },
      },
    },
  },
});
