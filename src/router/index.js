import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home";
import Search from "../pages/Search";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/search", component: Search, name: "Search" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
