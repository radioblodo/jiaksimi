import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/theme.css";
import "element-plus/theme-chalk/dark/css-vars.css"; // Dark mode

import { i18n } from "./i18n";

import App from "./App.vue";
import router from "../src/router";

createApp(App)
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(ElementPlus)
  .mount("#app");
