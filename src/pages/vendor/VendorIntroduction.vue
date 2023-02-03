<template>
  <div
    class="container-fluid px-16 bg-[#333] h-96 mx-auto shadow md:pt-4 lg-pt-6"
  >
    <div class="grid grid-cols-8 gap-4 h-full pt-10">
      <div class="col-span-3">
        <div class="w-full h-72 rounded bg-white p-3">
          <img
            :src="
              vendor_info.ImageUrl
                ? vendor_info.ImageUrl
                : 'https://cdn.thredbo.com.au/wp-content/uploads/2017/03/07150540/Untitled-design-5-1500x900.jpg'
            "
            class="w-full h-full object-cover rounded"
            alt="ảnh cửa hàng tennis"
          />
        </div>
      </div>
      <div class="col-span-5">
        <div class="pt-1 px-4">
          <h2 class="text-2xl text-white font-semibold mb-2">
            {{ vendor_info.Name }}
          </h2>

          <div class="flex items-center mb-4">
            <Icon
              icon="material-symbols:star-rounded"
              class="w-5 h-5 text-yellow-600 text-base"
            />
            <Icon
              icon="material-symbols:star-rounded"
              class="w-5 h-5 text-yellow-600 text-base"
            />
            <Icon
              icon="material-symbols:star-rounded"
              class="w-5 h-5 text-yellow-600 text-base"
            />
            <Icon
              icon="material-symbols:star-rounded"
              class="w-5 h-5 text-yellow-600 text-base"
            />
            <Icon
              icon="material-symbols:star-rounded"
              class="w-5 h-5 text-yellow-600 text-base"
            />

            <span class="text-sm text-white pl-4">( 200 lượt đánh giá )</span>
          </div>

          <div class="flex items-center mb-4">
            <Icon
              icon="ic:sharp-access-time"
              class="w-5 h-5 text-white text-base"
            />
            <span class="text-base text-white ml-2"
              >{{
                vendor_info.OpenTime ? vendor_info.OpenTime.slice(0, 5) : ""
              }}
              -
              {{
                vendor_info.CloseTime ? vendor_info.CloseTime.slice(0, 5) : ""
              }}</span
            >
          </div>

          <div class="flex items-center mb-4">
            <Icon
              icon="material-symbols:location-on-outline-rounded"
              class="w-5 h-5 text-white text-base"
            />
            <span class="text-base text-white ml-2">
              {{ vendor_info.Address }}
            </span>
          </div>

          <div class="flex items-center mb-4 pl-1">
            <Icon
              icon="ic:outline-phone"
              class="w-5 h-5 text-white text-base"
            />
            <span class="text-base text-white ml-2">{{
              vendor_info.PhoneNumber
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      vendor_info: this.vendorInfo,
    };
  },
  watch: {
    vendorInfo(newVal) {
      this.vendor_info = newVal;
    },
  },
};
</script>

<style></style>
