<template lang="">
  <div class="w-screen h-screen flex">
    <div class="h-full w-[40%]">
      <SignInSlider />
    </div>
    <div
      class="w-[60%] bg-[#F7F7FC] h-full flex flex-col items-center justify-center"
    >
      <form
        @submit.prevent="signIn"
        class="w-[60%] p-5 bg-white shadow rounded-xl"
      >
        <header class="mb-5">
          <h3 class="font-semibold text-xl">Sign In</h3>
        </header>
        <input
          class="border border-grey focus:border outline-none focus:border-brandColor w-full h-14 rounded-lg pl-5 mb-6"
          type="email"
          placeholder="Email"
          required
          v-model="email"
        />

        <input
          class="border border-grey focus:border outline-none focus:border-brandColor w-full h-14 rounded-lg pl-5 mb-6"
          type="text"
          placeholder="Password"
          required
          v-model="password"
        />

        <button
          class="bg-brandColor w-full rounded-lg h-14 text-white font-semibold"
        >
          Sign in
        </button>
      </form>
      <p class="mt-3 text-red">{{ msg }}</p>
      <p class="cursor-pointer mt-5 text-grey text-sm font-semibold">
        Already have an account?
        <span class="text-brandColor font-semibold">
          <RouterLink to="/signup">Sign up</RouterLink>
        </span>
      </p>

      <p class="mt-3 text-brandColor cursor-pointer">Forgot password ?</p>
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
      email: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    async signIn() {
      this.msg = "";
      try {
        const data = {
          email: this.email,
          password: this.password,
        };
        const res = await Auth.signIn(data);
        const _res = await res.json();
        if (_res.ok === "failed") {
          this.msg = _res.msg;
          return;
        }
        this.$router.push("dashboard");
        console.log(_res);
        localStorage.setItem("token", _res.Token);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {},
});
</script>
<style lang=""></style>
