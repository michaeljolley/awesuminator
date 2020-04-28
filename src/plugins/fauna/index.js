import { createFaunaClient } from "./createFaunaClient";

export default {
  install(Vue, options) {
    Vue.prototype.$fauna = createFaunaClient(options);
  },
};
