import Vue from "vue";
import Router from "vue-router";
// import { authGuard } from "./auth";

import Home from "@/views/Home.vue";
import Recipients from "@/views/Recipients.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/recipients",
      name: "Recipients",
      component: Recipients,
      // beforeEnter: authGuard,
      // meta: { claimName: "awesum-moderator" }
    },
  ],
});
