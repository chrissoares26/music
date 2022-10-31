import { createRouter, createWebHistory } from "vue-router";
import useUserStore from "@/stores/user";
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";
// import Manage from "@/views/Manage.vue";
// import ErrorPage from "@/views/ErrorPage.vue";
// import Song from "@/views/Song.vue";

const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const Manage = () => import("@/views/Manage.vue");
const Error = () => import("@/views/Error.vue");
const Song = () => import("@/views/Song.vue");

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    // alias: '/manage',
    path: "/manage-music",
    component: Manage,
    beforeEnter: (to, from, next) => {
      next();
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/manage",
    redirect: { name: "manage" },
  },
  {
    name: "song",
    path: "/song/:id",
    component: Song,
  },
  {
    name: "error",
    path: "/error",
    component: Error,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "error" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next();
    return;
  }
  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({
      name: "home",
    });
  }
});

export default router;
