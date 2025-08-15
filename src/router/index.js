import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // funkar på GitHub Pages
  routes: [
    { path: "/", component: Home },
    { path: "/projects", component: Projects },
  ],
  scrollBehavior: () => ({ top: 0 }),
});

export default router;
