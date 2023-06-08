import { createRouter, createWebHistory } from "vue-router";
import Page from "@/pages/Page.vue";

const routes = [
  {
    path: "/page",
    component: Page,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
