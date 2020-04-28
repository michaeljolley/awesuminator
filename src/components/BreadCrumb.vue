<template>
  <div>
    <div class="breadcrumb">
      <slot name="header">
        <h1>
          <b-icon :icon="icon" variant="info" />
          {{ page }}
        </h1>
        <ul v-if="folder">
          <li>
            <router-link :to="'/' + folder.toLowerCase()">{{
              folder
            }}</router-link>
          </li>
          <li>{{ page }}</li>
        </ul>
      </slot>
    </div>
    <div class="separator-breadcrumb border-top"></div>
  </div>
</template>
<script>
export default {
  props: ["page", "folder", "icon"],
};
</script>
