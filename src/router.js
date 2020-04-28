import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import { getters, store, types } from "@/state";

Vue.use(Router);

const routes = [
  {
    path: "",
    component: () => import("@/views/Dashboard"),
  },
  {
    path: "/recipients",
    component: () => import("@/views/recipients/Index"),
    children: [
      {
        path: "",
        component: () => import("@/views/recipients/List"),
      },
      {
        path: ":id",
        component: () => import("@/views/recipients/Detail"),
        props: true,
      },
    ],
  },
  {
    path: "/salutations",
    component: () => import("@/views/Salutations"),
  },
  {
    path: "/messages",
    component: () => import("@/views/Messages"),
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "open",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Remove initial loading
  const gullPreLoading = document.getElementById("loading_wrap");
  if (gullPreLoading) {
    gullPreLoading.style.display = "none";
  }
  // Complete the animation of the route progress bar.
  setTimeout(() => NProgress.done(), 500);

  if (window.innerWidth <= 1200) {
    if (store.getters[getters.sidebar.SIDEBAR_GET_SECONDARY_OPEN]) {
      store.dispatch(types.sidebar.SIDEBAR_SECONDARY_TOGGLE);
    }

    if (store.getters[getters.sidebar.SIDEBAR_GET_SIDEBAR_OPEN]) {
      store.dispatch(types.sidebar.SIDEBAR_TOGGLE);
    }
  } else {
    if (store[getters.sidebar.SIDEBAR_GET_SECONDARY_OPEN]) {
      store.dispatch(types.sidebar.SIDEBAR_SECONDARY_TOGGLE);
    }
  }
});

export default router;
