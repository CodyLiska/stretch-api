// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import StretchList from "@/views/StretchList.vue";
import StretchDetail from "@/components/StretchDetail.vue";

const routes = [
  {
    path: "/",
    name: "StretchList",
    component: StretchList,
  },
  {
    path: "/stretch/:id",
    name: "StretchDetail",
    component: StretchDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
