import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Demo1 = () => import("./components/demo/Demo1.vue");
const Demo2 = () => import("./components/demo/Demo2.vue");
const Demo3 = () => import("./components/demo/Demo3.vue");
const Demo4 = () => import("./components/demo/Demo4.vue");
const Demo5 = () => import("./components/demo/Demo5.vue");
const Demo6 = () => import("./components/demo/Demo6.vue");
const Demo7 = () => import("./components/demo/Demo7.vue");

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: '/demo1' },
  { path: "/demo1", name: "demo1", component: Demo1 },
  { path: "/demo2", name: "demo2", component: Demo2 },
  { path: "/demo3", name: "demo3", component: Demo3 },
  { path: "/demo4", name: "demo4", component: Demo4 },
  { path: "/demo5", name: "demo5", component: Demo5 },
  { path: "/demo6", name: "demo6", component: Demo6 },
  { path: "/demo7", name: "demo7", component: Demo7 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
