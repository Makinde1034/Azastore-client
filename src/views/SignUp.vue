<template lang="">
  <div class="w-screen h-screen flex">
    <div class="h-full w-[40%]">
      <SignInSlider />
    </div>
    <div
      class="w-[60%] bg-[#F7F7FC] h-full flex flex-col items-center justify-center"
    >
      <form
        @submit.prevent="register"
        class="w-[60%] p-5 bg-white shadow rounded-xl"
      >
        <header class="mb-5">
          <h3 class="font-semibold text-xl">Sign up</h3>
        </header>
        <input
          class="border border-grey focus:border outline-none focus:border-brandColor w-full h-14 rounded-lg pl-5 mb-6"
          type="text"
          placeholder="Email"
          v-model="userDetails.email"
          required
        />
        <input
          class="border border-grey focus:border outline-none focus:border-brandColor w-full h-14 rounded-lg pl-5 mb-6"
          type="text"
          placeholder="Firstname"
          v-model="userDetails.firstname"
        />
        <input
          class="border border-grey focus:border outline-none focus:border-brandColor w-full h-14 rounded-lg pl-5 mb-6"
          type="text"
          placeholder="Password"
          v-model="userDetails.password"
          required
        />
        <input
          class="border border-grey focus:border outline-none focus:border-brandColor w-full h-14 rounded-lg pl-5 mb-6"
          type="text"
          placeholder="Lastname"
          v-model="userDetails.lastname"
        />
        <button
          class="bg-brandColor w-full rounded-lg h-14 text-white font-semibold"
        >
          Sign up
        </button>
      </form>
      <p class="cursor-pointer mt-5 text-grey text-sm font-semibold">
        Already have an account?
        <span class="text-brandColor font-semibold">
          <RouterLink to="/signin">Sign in</RouterLink>
        </span>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import SignInSlider from "../components/SignInSlider.vue";
import { defineComponent } from "vue";
import { Auth } from "../api";

export default defineComponent({
  components: { SignInSlider },
  data() {
    return {
      userDetails: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      console.log(this.userDetails);
      try {
        const res = await Auth.signUp(this.userDetails);
        const _res = await res.json();
        console.log(_res);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
</script>
<style lang=""></style>
