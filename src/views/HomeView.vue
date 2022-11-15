<template>
  <div class=" pb-20">
    <Nav />
    <HeroVue />
    <section class="flex justify-center py-16">
      <div class="w-[40%] flex p-3 h-20 rounded-full bg-[#E5E5E5]">
        <div
          @click="setActiveTab(0)"
          :class="`${
            activeTab === 0 ? 'bg-brandColor text-white ' : 'bg-none'
          } 'bg-brandColor cursor-pointer flex justify-center items-center rounded-full h-full w-[50%] mr-2`"
        >
          <p class="font-semibold">Stores</p>
        </div>
        <div
          @click="setActiveTab(1)"
          :class="`${
            activeTab === 1 ? 'bg-black text-white' : 'bg-none'
          } 'bg-brandColor cursor-pointer flex justify-center items-center rounded-full h-full w-[50%] ml-2`"
        >
          <p class="font-semibold">Products</p>
        </div>
        <div></div>
      </div>
    </section>
    <section>
      <div v-if="activeTab === 1">
        <Products />
      </div>
      <div v-else>Stores</div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroVue from "@/components/Hero.vue";
import Products from "@/components/Products.vue";
import Nav from "@/components/Nav.vue"

export default defineComponent({
  components: { HeroVue, Products,Nav },
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    setActiveTab(num: number) {
      this.activeTab = num;
    },
  },
});
</script>

<style>
.home {
  width: 100%;
}
</style>
