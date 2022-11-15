<template lang="">
  <div
    v-if="toast.isToastOpen === true"
    :class="`bg-[${toast.state}] absolute top-20 right-10  p-3 rounded-lg`"
  >
    <p class="text-white">{{ toast.msg }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapStores } from "pinia";
import { useCounterStore } from "@/stores/toggles";

export default defineComponent({
  data() {
    return {};
  },
  computed: {
    ...mapStores(useCounterStore),
    ...mapState(useCounterStore, ["toast"]),
  },
});
</script>
<style lang=""></style>
