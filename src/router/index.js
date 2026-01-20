import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
// import Contact from "../views/Contact.vue";
import ProjectDetail from "../views/ProjectDetail.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home, meta: { breadcrumb: "Home" } },
    { path: "/about", component: About, meta: { breadcrumb: "About" } },
    // { path: "/contact", component: Contact },
    {
      path: "/projects/:slug",
      component: ProjectDetail,
      props: true,
      meta: { breadcrumb: "Project" },
    },
  ],
  scrollBehavior(to, from, saved) {
    if (to.hash) return { el: to.hash, top: 0, behavior: "smooth" };
    if (saved) return saved;
    return { top: 0 };
  },
});

export default router;
