<template>
  <div class="container-fluid px-16 mx-auto">
    <div class="flex flex-col items-center justify-between">
      <court-of-vendor
        :courtInfo="court"
        v-for="court in listCourt"
        :key="court"
      />
    </div>

    <div class="flex items-center justify-center mb-8">
      <nav aria-label="Page navigation">
        <ul class="inline-flex space-x-2">
          <li>
            <button
              class="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
            >
              <Icon
                icon="material-symbols:chevron-left-rounded"
                class="w-4 h-4"
              />
            </button>
          </li>
          <li>
            <button
              class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
            >
              1
            </button>
          </li>
          <li>
            <button
              class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
            >
              2
            </button>
          </li>
          <li>
            <button
              class="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline"
            >
              3
            </button>
          </li>
          <li>
            <button
              class="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100"
            >
              <Icon
                icon="material-symbols:chevron-right-rounded"
                class="w-4 h-4"
              />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { defineAsyncComponent } from "vue";
const CourtOfVendor = defineAsyncComponent(() => import("./CourtOfVendor.vue"));

export default {
  components: {
    CourtOfVendor,
    Icon,
  },
  props: {
    courtListOfVendor: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      listCourt: this.courtListOfVendor,
    };
  },
  watch: {
    courtListOfVendor(newVal) {
      this.listCourt = newVal;
    },
  },
};
</script>

<style></style>
