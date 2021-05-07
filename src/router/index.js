import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login_A",
    name: "login_A",
    component: () =>
      import(/* webpackChunkName: "login_A" */ "../views/login_A.vue"),
  },
  {
    path: "/loading_A",
    name: "loading_A",
    component: () =>
      import(/* webpackChunkName: "loading_A" */ "../views/loading_A.vue"),
  },
  {
    path: "/loading_B",
    name: "loading_B",
    component: () =>
      import(/* webpackChunkName: "loading_B" */ "../views/loading_B.vue"),
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
  {
    path: "/button-C",
    name: "button-C",
    component: () =>
      import(/* webpackChunkName: "button-C" */ "../views/button-C.vue"),
  },
  {
    path: "/gradient_A",
    name: "gradient_A",
    component: () =>
      import(/* webpackChunkName: "gradient_A" */ "../views/gradient_A.vue"),
  },
  {
    path: "/tick",
    name: "tick",
    component: () => import(/* webpackChunkName: "tick" */ "../views/tick.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
