<template lang="">
  <div class="">
    <NavVue />
    <header class="px-[200px] pt-5">
      <h3 class="font-bold">Makinde Tolulope</h3>
    </header>
    <div class="grid grid-cols-3 gap-5 pt-5 px-[200px]">
      <div
        class="h-20 border border-grey rounded-xl flex justify-center items-center flex-col"
      >
        <h3 class="font-bold">Pending orders</h3>
        <p>0</p>
      </div>
      <div
        class="h-20 border border-grey rounded-xl flex justify-center items-center flex-col"
      >
        <h3 class="font-bold">Total orders</h3>
        <p>0</p>
      </div>
      <div
        class="h-20 border border-grey rounded-xl flex justify-center items-center flex-col"
      >
        <h3 class="font-bold">Total sales</h3>
        <p>N0</p>
      </div>
      <RouterLink to="/dashboard/upload-product">
        <div
          class="h-20 bg-brandColor rounded-xl flex justify-center items-center text-white flex-col cursor-pointer hover:bg-black"
        >
          <h3 class="font-bold">Add Product</h3>
        </div>
      </RouterLink>
      <RouterLink to="/dashboard/upload-product">
        <div
          class="h-20 bg-brandColor rounded-xl flex justify-center items-center text-white flex-col cursor-pointer hover:bg-black"
        >
          <h3 class="font-bold">Edit store</h3>
        </div>
      </RouterLink>
    </div>
    <!-- <form @submit.prevent="createStore">
      <input @change="getImage($event)" type="file" />
      <button>Submit</button>
    </form> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavVue from "@/components/Nav.vue";
import { RouterView, RouterLink } from "vue-router";
import { Store } from "../api";

export default defineComponent({
  components: { NavVue },
  data() {
    return {
      image: "",
    };
  },
  methods: {
    async createStore() {
      let formData = new FormData();
      formData.append("file", this.image);
      formData.append("akaka", "swwsw");
      // formData.append("name", this.name);
      for (let x of formData) {
        console.log(x);
      }
      try {
        const res = await Store.createStore(formData);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
    getImage(e: any) {
      this.image = e.target.files[0];
    },
  },
});
</script>
<style lang=""></style>
