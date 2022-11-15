<template lang="">
  <div>
    <nav class="h-20 flex items-center px-28 justify-between">
      <RouterLink to="/"
        ><h3 class="text-3xl cursor-pointer font-bold text-brandColor">
          Azastore
        </h3></RouterLink
      >
      <ul class="flex">
        <li class="font-semibold mr-8 hover:text-brandColor text-sm">
          <RouterLink to="/signin">Sign in</RouterLink>
        </li>
        <li class="font-semibold mr-8 hover:text-brandColor text-sm">
          <RouterLink to="/signup">Sign up</RouterLink>
        </li>
        <li class="font-semibold mr-8 hover:text-brandColor text-sm">
          <RouterLink to="/dashboard">My store</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";

export default {};
</script>
<style lang=""></style>
