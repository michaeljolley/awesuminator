import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import * as types from "./Mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipients: [],
    salutations: [],
    messages: [],
    loading: false,
  },
  mutations: {
    [types.USER_LOG_IN](state) {},
    [types.USER_LOG_OUT](state) {},
    [types.LOADING](state, isLoading) {
      state.loading = isLoading;
    },
    [types.SAVE_MESSAGE](state, gramercy) {},
    [types.SAVE_RECIPIENT](state, gramercy) {},
    [types.SAVE_SALUTATION](state, gramercy) {},
  },
  actions: {
    async [types.USER_LOG_IN](context, user) {},
    [types.USER_LOG_OUT](context) {},
    async [types.SAVE_MESSAGE](context, payload) {},
    async [types.SAVE_RECIPIENT](context, payload) {},
    async [types.SAVE_SALUTATION](context, payload) {},
  },
});
