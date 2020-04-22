<template>
  <div>
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/recipients">Recipients</router-link>
      </li>
      <li>Salutations</li>
      <li>Messages</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
</style>
