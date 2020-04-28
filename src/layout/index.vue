<template>
  <div
    :class="[sidebarOpen ? 'sidenav-open' : '']"
    class="app-admin-wrap layout-sidebar-compact sidebar-gradient-purple-blue clearfix"
  >
    <Sidebar></Sidebar>
    <!-- end-leftsidebar -->
    <div class="main-content-wrap d-flex flex-column">
      <Topbar></Topbar>
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import { getters } from "@/state";

export default {
  name: "Layout",
  components: {
    Topbar,
    Sidebar,
    Footer
  },
  data() {
    return {};
  },
  metaInfo() {
    return {
      title: "You're #awesum!",
      titleTemplate: "%s | You're #awesum!"
    };
  },
  computed: {
    sidebarOpen() {
      return this.$store.getters[getters.sidebar.SIDEBAR_GET_SIDEBAR_OPEN];
    }
  }
};
</script>
