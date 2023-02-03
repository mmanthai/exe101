<template>
  <div>
    <div class="flex items-center justify-between">
      <slot name="title"></slot>
      <router-link
        class="text-base mr-8 text-gray-500 hover:text-gray-700 duration-200 cursor-pointer"
        to="/"
        >Xem Tất Cả</router-link
      >
    </div>
    <!--btn control slide-->
    <div class="md:flex items-center justify-end mt-4 mr-2">
      <!--btn left arrow-->
      <button
        @click="moveToLeft()"
        class="text-gray-700 px-2 py-2 border hover:bg-blue-400 duration-300 hover:text-white"
      >
        <Icon icon="fe:arrow-left" class="w-5 h-5" />
      </button>

      <button
        @click="moveToRight()"
        class="text-gray-700 px-2 py-2 border mx-4 hover:bg-blue-400 duration-300 hover:text-white"
      >
        <Icon icon="fe:arrow-right" class="w-5 h-5" />
      </button>
    </div>
    <div class="container mx-auto">
      <div class="w-full h-auto min-h-96 flex items-center justify-between">
        <div class="relative w-full h-[500px] my-4">
          <div
            :class="frameName"
            class="relative w-full h-auto flex justify-start items-center scroll-smooth duration-200 snap-x overflow-hidden"
          >
            <promotion-vendor
              class="aspect-square duration-200"
              :vendorInfo="vendor"
              v-for="vendor in listVendor"
              :key="vendor"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "@/common/common.js";
import { Icon } from "@iconify/vue";
import { defineAsyncComponent } from "vue";

const PromotionVendor = defineAsyncComponent(() =>
  import("./PromotionVendor.vue")
);

export default {
  name: "ListHorizontal",
  components: {
    PromotionVendor,
    Icon,
  },
  props: {
    frameName: {
      type: String,
      required: true,
    },
    listPromotingVendor: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      listVendor: this.listPromotingVendor,
    };
  },
  methods: {
    moveToLeft() {
      common.scrollToLeft(this.frameName);
    },
    moveToRight() {
      common.scrollToRight(this.frameName);
    },
  },
  watch: {
    listPromotingVendor(newVal) {
      this.listVendor = newVal;
    },
  },
};
</script>

<style scoped></style>
