<template lang="">
  <div class="px-28">
    <Product />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Store } from "../api";
import Product from "./Product.vue";

export default defineComponent({
  components: { Product },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      try {
        const res = await Store.getStores();
        const stores = await res.json();
        console.log(stores);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {},
  mounted() {
    this.getProducts();
  },
});
</script>
<style lang=""></style>
