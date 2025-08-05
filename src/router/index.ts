// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EatOutView from "../views/EatOutView.vue";
import HelpView from "../views/HelpView.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/eatout", component: EatOutView },
    { path: "/help", component: HelpView },
  ],
});
