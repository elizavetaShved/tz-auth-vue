import { createRouter, createWebHistory } from "vue-router";
import { RouterParams } from "@/enums/router-params";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/${RouterParams.mainPage}`,
      name: "mainPage",
      component: () => import("@/pages/main-page/main-page.vue"),
    },
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
