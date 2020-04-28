import Vue from "vue";
import Layout from "@/layout";
import router from "./router";

import base from "@/plugins/base";

Vue.use(base);

import FaunaGraphQLPlugin from "@/plugins/fauna";
// import AuthPlugin from "@/plugins/auth";

Vue.config.productionTip = false;

Vue.use(FaunaGraphQLPlugin, {
  faunaDbSecret: process.env.VUE_APP_FAUNADB_SECRET,
});

import { store } from "@/state";

new Vue({
  store,
  router,
  render: (h) => h(Layout),
}).$mount("#app");
