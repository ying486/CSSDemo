import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/loading",
    name: "loading",
    component: () =>
      import(/* webpackChunkName: "loading" */ "../views/loading.vue"),
  },
  {
    path: "/video-cube",
    name: "video-cube",
    component: () =>
      import(/* webpackChunkName: "video-cube" */ "../views/video-cube.vue"),
  },
  {
    path: "/button-A",
    name: "button-A",
    component: () =>
      import(/* webpackChunkName: "button-A" */ "../views/button-A.vue"),
  },
  {
    path: "/button-B",
    name: "button-B",
    component: () =>
      import(/* webpackChunkName: "button-B" */ "../views/button-B.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
