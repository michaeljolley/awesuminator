<template>
  <div
    class="side-content-wrap"
    @mouseenter="isMenuOver = true"
    @mouseleave="isMenuOver = false"
    @touchstart="isMenuOver = true"
  >
    <vue-perfect-scrollbar
      :settings="{ suppressScrollX: true, wheelPropagation: false }"
      :class="{
        open: sidebarOpen,
      }"
      ref="myData"
      class="sidebar-left rtl-ps-none ps"
    >
      <ul class="navigation-left">
        <div class="logo">
          <img alt src="@/assets/images/logo.png" />
        </div>
        <li class="nav-item">
          <router-link tag="a" class="nav-item-hold" to="/" title="Dashboard">
            <b-icon-house font-scale="2" />
            <span class="nav-text">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-item-hold"
            to="/recipients"
            title="Recipients"
          >
            <b-icon-people font-scale="2" />
            <span class="nav-text">Recipients</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-item-hold"
            to="/salutations"
            title="Salutations"
          >
            <b-icon-chat font-scale="2" />
            <span class="nav-text">Salutations</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            class="nav-item-hold"
            to="/messages"
            title="Messages"
          >
            <b-icon-envelope font-scale="2" />
            <span class="nav-text">Messages</span>
          </router-link>
        </li>
      </ul>
    </vue-perfect-scrollbar>
  </div>
</template>

<script>
import { isMobile } from "mobile-device-detect";
import { getters, types } from "@/state";

export default {
  data() {
    return {
      isMobile,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  computed: {
    sidebarOpen() {
      return this.$store.getters[getters.sidebar.SIDEBAR_GET_SIDEBAR_OPEN];
    },
  },

  methods: {
    removeOverlay() {
      this.$store.dispatch(types.sidebar.SIDEBAR_TOGGLE);
      this.toggleSelectedParentMenu();
    },

    compactSideBarToggle() {
      if (this.sidebarOpen) {
        this.$store.dispatch(types.sidebar.SIDEBAR_TOGGLE);
      }
    },

    handleWindowResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth <= 1200) {
        if (this.sidebarOpen) {
          this.$store.dispatch(types.sidebar.SIDEBAR_TOGGLE);
        }
      } else {
        if (!this.sidebarOpen) {
          this.$store.dispatch(types.sidebar.SIDEBAR_TOGGLE);
        }
      }
    },
    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "")[1];
      if (currentParentUrl !== undefined && currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = "dashboards";
      }
    },
    toggleSubMenu(e) {
      let parent = e.target.dataset.item;

      this.selectedParentMenu = parent;
    },
  },
};
</script>
