import { createRouter, createWebHistory } from "vue-router";
import { RouterParams } from "@/enums/router-params";
import { getUser } from "@/api/rest/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/${RouterParams.mainPage}`,
      name: RouterParams.mainPage,
      component: () => import("@/pages/main-page/main-page.vue"),
    },
    {
      path: `/${RouterParams.authPage}`,
      name: RouterParams.authPage,
      component: () => import("@/pages/auth-page/auth-page.vue"),
    },
    {
      path: `/${RouterParams.forgotPage}`,
      name: RouterParams.forgotPage,
      component: () => import("@/pages/forgot-page/forgot-page.vue"),
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

router.beforeEach((to, from, next) => {
  // эмуляция проверки,авторизован ли пользователь
  getUser()
    .then((data) => {
      const defaultPageName = RouterParams.mainPage;
      if (to.name) {
        const authPage =
          to.name === RouterParams.authPage ||
          to.name === RouterParams.forgotPage;
        const userAuthorized = data?.isAuth;
        // если авторизованный пользователь на Авторизации - редирект на главную

        if (authPage && userAuthorized) {
          next({ name: defaultPageName });
          return;
        }

        // если неавторизованный пользователь в приложении - редирект на стр.Авториз
        if (!authPage && !userAuthorized) {
          throw new Error();
        }
        next();
      } else {
        next({ name: defaultPageName });
      }
    })
    .catch(() => {
      next({ name: RouterParams.authPage });
    });
});

export default router;
