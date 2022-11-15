<template lang="">
  <div class="flex px-28">
    <div>
      <h3 class="text-6xl font-bold pt-20 leading-[4rem] mb-5">
        Create a store in the <br />
        cloud.
      </h3>
      <p class="text-2xl mb-10">
        Azastore helps individuals and buinesses <br />
        create a store and sell fast.
      </p>
      <div>
        <RouterLink to="/signin">
          <button
            class="bg-black py-4 text-white px-5 rounded-full mr-5 font-semibold"
          >
            Create an account
          </button>
        </RouterLink>

        <button
          class="bg-brandColor py-4 text-white px-5 rounded-full font-semibold"
        >
          Explore stores
        </button>
      </div>
    </div>
    <div class="pl-28 pt-16 w-[50%] flex items-center justify-center">
      <img
        v-motion
        :initial="{
          opacity: 0,
          scale: 0.9,
        }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 500,
          },
        }"
        class="h-96"
        src="../assets/e-shopping.svg"
        alt=""
      />
    </div>
  </div>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";

export default {};
</script>
<style lang=""></style>
