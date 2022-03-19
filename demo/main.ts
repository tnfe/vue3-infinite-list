import { createApp } from "vue";
import App from "./index.vue";

import "element-plus/dist/index.css";
import router from "./router";
import ElementPlus from "element-plus";

createApp(App).use(ElementPlus).use(router).mount("#app");
