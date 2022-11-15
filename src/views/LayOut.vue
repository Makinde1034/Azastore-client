<template lang="">
  <div>
    <RouterView />
  </div>
</template>

<script lang="ts">
import Nav from "../components/Nav.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  components: { Nav },
};
</script>
<style lang=""></style>
