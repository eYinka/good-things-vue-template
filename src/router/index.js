import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Services from "@/pages/Services.vue";

// Define the website routes
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/services", name: "services", component: Services },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    }
});


export default router;