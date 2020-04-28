import Vue from "vue";
import Vuex from "vuex";

import { fauna } from "./modules/fauna";
import { functions } from "./modules/functions";
import { sidebar } from "./modules/sidebar";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    fauna: fauna.store,
    functions: functions.store,
    sidebar: sidebar.store,
  },
});
