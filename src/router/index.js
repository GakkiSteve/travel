import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import City from "../components/city/City";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/city",
    name: "City",

    component: City,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
