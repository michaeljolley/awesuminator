import Vue from "vue";
import Vuex from "vuex";

import { fauna } from "./modules/fauna";
import { sidebar } from "./modules/sidebar";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    fauna: fauna.store,
    sidebar: sidebar.store,
  },
});
