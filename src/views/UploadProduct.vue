<template lang="">
  <div>
    <NavVue />
    <section class="flex px-40 juatify-center pb-10">
      <div class="w-1/2 pt-10">
        <div class="w-full p-3 border-dashed border-2 border-grey rounded-lg">
          <label
            for="file-upload"
            v-if="images.length === 0"
            class="custom-file-upload"
          >
            <div
              class="w-full h-full cursor-pointer flex justify-center items-center py-40"
            >
              <input
                @change="getImage($event)"
                multiple="multiple"
                id="file-upload"
                type="file"
              />
              <p class="text-grey text-center">
                Click here to upload images for your product. <br />
                (Maximum of 4 images)
              </p>
            </div>
          </label>
          <div class="grid w-full gap-5 grid-cols-3" v-else>
            <div v-for="(image, index) in imagePreviews">
              <div class="h-28 bg-black">
                <img class="w-full h-full object-cover" :src="image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 pt-10 pl-10">
        <div class="w-2/3 flex flex-col">
          <label class="mb-2 font-semibold" for="Name">Name</label>
          <input
            class="border border-grey text-sm h-12 mb-5 rounded-lg pl-3 focus:border outline-none focus:border-brandColor"
            type="text"
            placeholder="E.g Tote bag"
            v-model="name"
          />
          <label class="mb-2 font-semibold" for="Name">Price</label>
          <input
            class="border mb-5 border-grey text-sm h-12 rounded-lg pl-3 focus:border outline-none focus:border-brandColor"
            type="text"
            placeholder="$100"
            v-model="amount"
          />
          <label class="mb-2 font-semibold" for="Name">Category</label>
          <select
            name="cateogory"
            id=""
            class="border cursor-pointer border-grey text-sm h-12 mb-5 rounded-lg pl-3 focus:border outline-none focus:border-brandColor"
            v-model="category"
          >
            <option value="Clothes">Clothes</option>
            <option value="Phones">Phones</option>
            <option value="Clothes">Clothes</option>
            <option value="Clothes">Clothes</option>
            <option value="Clothes">Clothes</option>
          </select>

          <label class="mb-2 font-semibold" for="Name">Color</label>
          <select
            name="Color"
            id=""
            class="border mb-5 cursor-pointer border-grey text-sm h-12 rounded-lg pl-3 focus:border outline-none focus:border-brandColor"
            v-model="color"
          >
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Pink">Pink</option>
            <option value="Red">Red</option>
          </select>
          <label class="mb-2 font-semibold" for="Name">Description</label>
          <textarea
            class="border border-grey text-sm h-20 mb-5 rounded-lg p-3 focus:border outline-none focus:border-brandColor"
            name="Description"
            id=""
            cols="30"
            rows="10"
            v-model="description"
          ></textarea>
        </div>
        <!-- <LoadingButton text="submit " /> -->
        <button @click="uploadProduct">submit</button>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavVue from "@/components/Nav.vue";
import LoadingButton from "../components/buttons/pendingButton.vue";
import { Product } from "../api";
import { mapState, mapStores, mapActions } from "pinia";
import { useCounterStore } from "@/stores/toggles";
import { toastState } from "@/contants";

export default defineComponent({
  components: { NavVue, LoadingButton },
  data() {
    return {
      name: "",
      color: "",
      description: "",
      category: "",
      amount: "",
      images: [],
      imagePreviews: [] as string[],
    };
  },
  methods: {
    getImage(e: any) {
      this.images = e.target.files;

      let url;
      let arr = [];
      for (let i = 0; i < this.images.length; i++) {
        url = URL.createObjectURL(this.images[i]);
        arr.push(url);
      }
      this.imagePreviews = arr;
      console.log(this.imagePreviews);
    },

    async uploadProduct() {
      let formData = new FormData();
      for (let i = 0; i < this.images.length; i++) {
        formData.append("file", this.images[i]);
      }
      formData.append("name", this.name);
      formData.append("amount", this.amount),
      formData.append("category", this.category);
      formData.append("description", this.description);
      formData.append("color", this.color);
      formData.append("price", this.amount);

      try {
        const res = await Product.uploadProduct(formData);
        console.log(res);
      } catch (err) {
        console.log(err);
        this.toggleToast({
          msg: "An error occured",
          isToastOpen: true,
          state: toastState.failed,
        });

        setTimeout(() => {
          this.toggleToast({
          msg: "",
          isToastOpen: false,
          state: toastState.failed,
        });
        }, 3000);
      }
    },
    ...mapActions(useCounterStore, ["toggleToast"]),
  },
  computed: {
    ...mapStores(useCounterStore),
    // gives read access to this.count and this.double
    ...mapState(useCounterStore, ["count", "toast"]),
  },
});
</script>
<style lang="css">
input[type="file"] {
  display: none;
}
</style>
