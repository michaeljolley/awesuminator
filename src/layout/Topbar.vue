<template>
  <div class="main-header">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt />
    </div>

    <div @click="compactSideBarToggle" class="menu-toggle">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div style="margin: auto"></div>

    <div class="header-part-right">
      <!-- User avatar dropdown -->
      <div class="dropdown">
        <b-dropdown
          id="dropdown-1"
          text="Dropdown Button"
          class="m-md-2 user col align-self-end"
          toggle-class="text-decoration-none"
          no-caret
          variant="link"
        >
          <template slot="button-content">User's name</template>

          <div class="dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item">Account settings</a>
            <a class="dropdown-item">Billing history</a>
            <a class="dropdown-item">Sign out</a>
          </div>
        </b-dropdown>
      </div>
    </div>
  </div>

  <!-- header top menu end -->
</template>
<script>
import { isMobile } from "mobile-device-detect";
import { mapGetters, mapActions } from "vuex";
import { mixin as clickaway } from "vue-clickaway";
import { getters, types } from "@/state";

export default {
  mixins: [clickaway],

  data() {
    return {
      isDisplay: true,
      isStyle: true
    };
  },
  computed: {
    ...mapGetters([
      getters.sidebar.SIDEBAR_GET_SIDEBAR_OPEN,
      getters.sidebar.SIDEBAR_GET_SECONDARY_OPEN
    ])
  },

  methods: {
    ...mapActions([types.sidebar.SIDEBAR_TOGGLE]),
    logoutUser() {},

    compactSideBarToggle() {
      if (this[getters.sidebar.SIDEBAR_GET_SIDEBAR_OPEN] && isMobile) {
        this[types.sidebar.SIDEBAR_TOGGLE]();
      } else if (this[getters.sidebar.SIDEBAR_GET_SIDEBAR_OPEN]) {
        this[types.sidebar.SIDEBAR_TOGGLE]();
      } else if (
        !this[getters.sidebar.SIDEBAR_GET_SIDEBAR_OPEN] &&
        !this[getters.sidebar.SIDEBAR_GET_SECONDARY_OPEN]
      ) {
        this[types.sidebar.SIDEBAR_TOGGLE]();
      } else if (!this[getters.sidebar.SIDEBAR_GET_SIDEBAR_OPEN]) {
        this[types.sidebar.SIDEBAR_TOGGLE]();
      }
    }
  }
};
</script>
