<template>
  <div class="flex justify-center">
    <div
      class="relative rounded-lg shadow-lg bg-white max-w-sm min-w-[350px] w-52 h-[450px] overflow-hidden my-1 mx-8 mr-4 cursor-pointer border"
    >
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img
          class="rounded-t-lg w-full h-52 object-cover"
          src="https://hoctennis.com.vn/upload/files/baiviet/day_tennis_quan_2trung%2520kien_005%5B1%5D.jpg"
          alt=""
        />
      </a>
      <img
        src="@/assets/img/sale.svg"
        class="w-16 h-16 absolute top-0 right-0"
      />
      <div class="p-4">
        <div class="flex items-center">
          <Icon
            icon="ic:outline-store"
            class="w-7 h-7 text-gray-600 text-sm mr-2"
          />
          <h3 class="text-gray-900 text-xl font-medium mb-1 mt-1">
            {{ vendor.Name }}
          </h3>
        </div>

        <div class="flex items-center mb-2">
          <Icon icon="mdi:sale-outline" class="w-5 h-5 text-red-500 text-sm" />
          <span class="text-sm ml-2 text-red-500"
            >Ưu đãi lên đến 45.000 VNĐ</span
          >
        </div>

        <div class="flex items-center mb-3">
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
          <span class="text-sm text-gray-600">(200 lượt đánh giá)</span>
        </div>

        <div class="flex items-center mb-2">
          <Icon
            icon="ic:sharp-access-time"
            class="w-5 h-5 text-gray-600 text-sm"
          />
          <span class="text-sm text-gray-600 ml-2"
            >{{ vendor.OpenTime.slice(0, 5) }} -
            {{ vendor.CLoseTime.slice(0, 5) }}</span
          >
        </div>

        <div class="flex items-center mb-2">
          <Icon
            icon="material-symbols:location-on-outline-rounded"
            class="w-5 h-5 text-gray-600 text-sm"
          />
          <span class="text-sm text-gray-600 ml-2 tracking-tighter"
            >{{ vendor.Address }}.</span
          >
        </div>

        <div class="flex items-center mb-2">
          <Icon
            icon="material-symbols:attach-money"
            class="w-5 h-5 text-gray-600 text-sm"
          />
          <span class="text-sm text-gray-600 ml-2"
            >150.000 VNĐ - 350.000 VNĐ</span
          >
        </div>
      </div>

      <div
        @click="showVendorDetail(vendor.Id)"
        class="flex items-center text-base justify-end px-4 cursor-pointer"
      >
        <span class="text-gray-600 mx-1">Xem Cửa Hàng</span>
        <Icon
          icon="material-symbols:arrow-forward-rounded"
          class="w-5 h-5 text-gray-600 text-sm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import sale from "@/assets/img/sale.svg";
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
      vendor: this.vendorInfo,
    };
  },
  methods: {
    showVendorDetail(id) {
      this.$router.push({
        name: "vendor-detail-page",
        params: {
          vendorId: id,
        },
      });
    },
  },
};
</script>

<style></style>
