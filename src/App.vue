<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <LayOutVue />
  <ToastVue />
</template>

<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import LayOutVue from "./views/LayOut.vue";
import { defineComponent } from "vue";
import ToastVue from "./components/Toast.vue";

export default {
  components: { LayOutVue,ToastVue },
};
</script>

<style scoped></style>
