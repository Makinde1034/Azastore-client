import { defineStore } from "pinia";


interface toastI {
  msg: string;
  isToastOpen: boolean;
  state: any
}

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 40, toast: { isToastOpen: false, msg: "rr" } }),
  getters: {
    // double: (state) => state.count * 2,
  },
  actions: {
    toggleToast(data: toastI) {
      this.toast = data;
    },
  },
});
