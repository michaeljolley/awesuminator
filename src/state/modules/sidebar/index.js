import { types } from "./mutation-types";
import { getters } from "./getters";

const state = {
  isSidebarOpen: true,
};

const gets = {
  [getters.SIDEBAR_GET_SIDEBAR_OPEN]: (state) => state.isSidebarOpen,
};

const actions = {
  async [types.SIDEBAR_TOGGLE](context) {
    context.commit(types.SIDEBAR_TOGGLE);
  },
};

const mutations = {
  [types.SIDEBAR_TOGGLE](state) {
    state.isSidebarOpen = !state.isSidebarOpen;
  },
};

export const sidebar = {
  store: {
    state,
    getters: gets,
    actions,
    mutations,
  },
  types,
  getters,
};
