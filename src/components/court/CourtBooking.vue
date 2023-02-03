<template>
  <div
    class="container-fluid px-16 bg-[#333] h-96 mx-auto shadow md:pt-4 lg-pt-6"
  >
    <div class="grid grid-cols-8 gap-4 h-full pt-10">
      <div class="col-span-3">
        <div class="w-full h-72 rounded bg-white p-3">
          <img
            :src="
              court_info.ImageUrl
                ? court_info.ImageUrl
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
            {{ court_info.Name }}
          </h2>

          <div class="flex items-center mb-3">
            <span class="px-1 text-white text-sm">5.0</span>
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

            <span class="text-sm text-white pl-4"> ( 10 lượt đánh giá )</span>
          </div>

          <div class="flex items-center mb-5 mt5">
            <Icon
              icon="game-icons:tennis-court"
              class="w-5 h-5 text-white text-base"
            />
            <span class="text-base text-white ml-2">{{ typeIdCourtText }}</span>
          </div>

          <div class="flex items-center mb-5 mt5">
            <Icon
              icon="nimbus:size-height"
              class="w-5 h-5 text-white text-base"
            />
            <span class="text-sm text-white ml-2">{{ courtSizeText }}</span>
          </div>

          <div class="flex items-center mb-5 mt5">
            <Icon
              icon="ic:twotone-photo-size-select-small"
              class="w-5 h-5 text-white text-base"
            />
            <span class="text-sm text-white ml-2">{{ courtSizeIdText }}</span>
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
    courtInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      court_info: {},
    };
  },
  computed: {
    typeIdCourtText() {
      if (this.court_info.TypeId === 2) {
        return "Sân Đất Nện";
      } else if (this.court_info.TypeId === 3) {
        return "Sân Cứng";
      } else if (this.court_info.TypeId === 4) {
        return "Sân Cỏ";
      }
    },
    courtSizeIdText() {
      if (this.court_info.CourtSizeId === 1) {
        return "Kích Thước Lớn";
      } else if (this.court_info.CourtSizeId === 2) {
        return "Kích Thước Trung Bình";
      } else if (this.court_info.CourtSizeId === 3) {
        return "Kích Thước Nhỏ";
      }
    },
    courtSizeText() {
      if (this.court_info.CourtSizeId === 1) {
        return "40m x 20m";
      } else if (this.court_info.CourtSizeId === 2) {
        return "36.57m x 18.29m";
      } else if (this.court_info.CourtSizeId === 3) {
        return "34.75m * 18.29m";
      }
    },
  },
  watch: {
    courtInfo(newVal) {
      this.court_info = newVal;
    },
  },
};
</script>

<style></style>
