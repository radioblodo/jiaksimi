// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EatOutView from "../views/EatOutView.vue";
import HelpView from "../views/HelpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView, meta: { title: "Home - What to eat?" } },
    {
      path: "/eatout",
      component: EatOutView,
      meta: { title: "Eat Out - Where to eat?" },
    },
    {
      path: "/help",
      component: HelpView,
      meta: { title: "About - What to eat?" },
    },
  ],
});

// Global hook to update title
router.afterEach((to) => {
  const title = to.meta?.title as string;
  if (title) {
    document.title = title;
  }
});

export default router;
