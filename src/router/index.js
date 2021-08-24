import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/Registration.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/invitation",
    name: "Invitation",
    component: () => import("../views/Invitation.vue")
  },
  {
    path: "/landing",
    name: "Landing",
    component: () => import("../views/Landing.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
