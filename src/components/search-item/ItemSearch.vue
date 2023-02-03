<template>
  <div
    @click="showVendorDetail"
    class="vendor-item flex items-center bg-white cursor-pointer rounded shadow mb-10 duration-300"
  >
    <div class="p-2">
      <img
        src="https://hoctennis.com.vn/upload/files/baiviet/day_tennis_quan_2trung%2520kien_005%5B1%5D.jpg"
        class="w-72 h- object-contain rounded"
        alt="ảnh cửa hàng tennis"
      />
    </div>
    <div class="pl-4 pt-2 flex flex-col justify-between items-start -mt-2">
      <div class="flex items-center">
        <Icon
          icon="ic:outline-store"
          class="w-7 h-7 text-gray-600 text-sm mr-2"
        />
        <h3 class="font-bold text-lg">{{ vendorInfo.Name }}</h3>
      </div>
      <div class="flex items-center my-2">
        <span class="px-1 text-gray-600 text-sm pt-1/2">5.0</span>
        <div class="flex items-center">
          <Icon
            icon="material-symbols:star-rounded"
            class="w-5 h-5 text-yellow-600 text-sm"
          />
          <Icon
            icon="material-symbols:star-rounded"
            class="w-5 h-5 text-yellow-600 text-sm"
          />
          <Icon
            icon="material-symbols:star-rounded"
            class="w-5 h-5 text-yellow-600 text-sm"
          />
          <Icon
            icon="material-symbols:star-rounded"
            class="w-5 h-5 text-yellow-600 text-sm"
          />
          <Icon
            icon="material-symbols:star-rounded"
            class="w-5 h-5 text-yellow-600 text-sm"
          />

          <span class="text-sm text-gray-600 ml-1">(150 đánh giá)</span>
        </div>
      </div>

      <div class="flex items-center mb-3">
        <Icon
          icon="ic:sharp-access-time"
          class="w-5 h-5 text-gray-600 text-sm"
        />
        <span class="text-sm text-gray-600 ml-2">8:00 - 22:00</span>
      </div>

      <div class="flex items-center mb-3">
        <Icon
          icon="material-symbols:location-on-outline-rounded"
          class="w-5 h-5 text-gray-600 text-sm"
        />
        <span class="text-sm text-gray-600 ml-2"
          >18D Cộng Hòa, Tân Bình, TPHCM.</span
        >
      </div>

      <div class="flex items-center mb-3">
        <Icon
          icon="material-symbols:attach-money"
          class="w-5 h-5 text-gray-600 text-sm"
        />
        <span class="text-sm text-gray-600 ml-2"
          >150.000 VNĐ - 350.000 VNĐ</span
        >
      </div>

      <div class="flex items-center mb-3">
        <Icon
          icon="material-symbols:phone-in-talk-outline"
          class="w-5 h-5 text-gray-600 text-sm"
        />
        <span class="text-sm text-gray-600 ml-2">0978.145.440</span>
      </div>
    </div>
  </div>
</template>

<script>
import common from "@/common/common.js";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
  props: {
    vendorInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      vendorInfo: this.listSearchValue,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
