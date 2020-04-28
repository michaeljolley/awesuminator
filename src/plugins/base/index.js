import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import Meta from "vue-meta";

import BreadCrumb from "@/components/BreadCrumb.vue";

import "@/assets/styles/sass/themes/base.scss";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

export default {
  install(Vue) {
    Vue.use(BootstrapVue);
    Vue.use(BootstrapVueIcons);
    Vue.component("vue-perfect-scrollbar", () =>
      import("vue-perfect-scrollbar")
    );
    Vue.component("BreadCrumb", BreadCrumb);

    Vue.use(Meta, {
      keyName: "metaInfo",
      attribute: "data-vue-meta",
      ssrAttribute: "data-vue-meta-server-rendered",
      tagIDKeyName: "vmid",
      refreshOnceOnNavigation: true,
    });
  },
};
