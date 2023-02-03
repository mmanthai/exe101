<template>
  <div>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <div
      class="flex-1 w-full overflow-auto bg-[#F8F9FF] flex flex-col scroll-content"
    >
      <customer-header />

      <!--banner introduction-->
      <div
        class="container grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 pt-36 mx-auto"
      >
        <div class="flex flex-col items-center justify-center -mt-40">
          <h1 class="text-4xl text-left font-semibold">
            Chào Mừng Đến Với Tennis<span class="text-[#30AF82]">Today</span>
          </h1>
          <p class="text-lg font-medium mt-1 tracking-tight">
            Đây là trang web đặt sân tennis tốt nhất. Thoải mái đặt sân không lo
            về giá !
          </p>
          <button
            type="button"
            @click.prevent="scrollToListSection"
            class="px-8 py-3 mt-4 bg-green-500 hover:bg-green-700 duration-200 text-white rounded-full"
          >
            Đặt Ngay
          </button>
        </div>
        <div>
          <img
            src="@/assets/img/tennis-player.png"
            class="w-full h-[70%]"
            alt="tennis player"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-between">
      <!-- feature court-->
      <div class="container px-8 mt-32">
        <div
          class="w-full h-96 mx-auto text-2xl font-semibold"
          id="list-section"
        >
          <list-promotion-vendor
            :listPromotingVendor="listPromotingVendor"
            frameName="promotionVendor"
          >
            <template #title>
              <h2>Top Cửa Hàng Đang Khuyến Mãi</h2>
            </template>
          </list-promotion-vendor>
        </div>
      </div>

      <!-- high rating court-->
      <div class="container px-8 mt-60">
        <div class="w-full h-96 mx-auto text-2xl font-semibold">
          <list-high-rating-vendor
            :listHighRatingVendor="_listHighRatingVendor"
            frameName="highRatingVendor"
          >
            <template #title>
              <h2>Top Cửa Hàng Nổi Bật</h2>
            </template>
          </list-high-rating-vendor>
        </div>
      </div>
      <!-- high rating court-->
      <div class="container px-8 mt-60">
        <div class="w-full h-96 mx-auto text-2xl font-semibold">
          <list-high-rating-court
            :listHighCourtBooked="listHighCourtBooked"
            frameName="highRatingCourt"
          >
            <template #title>
              <h2>Top Sân Được Đặt Nhiều Nhất</h2>
            </template>
          </list-high-rating-court>
        </div>
      </div>
    </div>

    <footer class="mt-56">
      <customer-footer />
    </footer>
  </div>
</template>

<script>
import CustomerService from "@/services/customer.service.js";

import { defineAsyncComponent } from "vue";

const CustomerHeader = defineAsyncComponent(() =>
  import("@/components/layout/customer/CustomerHeader.vue")
);
const CustomerFooter = defineAsyncComponent(() =>
  import("@/components/layout/customer/CustomerFooter.vue")
);
const ListHighRatingVendor = defineAsyncComponent(() =>
  import(
    "@/components/listHorizontal/vendor/high-rating-vendor/ListHighRatingVendor.vue"
  )
);
const ListPromotionVendor = defineAsyncComponent(() =>
  import(
    "@/components/listHorizontal/vendor/promotion-vendor/ListPromotionVendor.vue"
  )
);
const ListHighRatingCourt = defineAsyncComponent(() =>
  import("@/components/listHorizontal/court/ListHightRatingCourt.vue")
);

export default {
  components: {
    CustomerHeader,
    CustomerFooter,
    ListHighRatingVendor,
    ListPromotionVendor,
    ListHighRatingCourt,
  },
  methods: {
    scrollToListSection() {
      let list_section = document.getElementById("list-section");
      this.$smoothScroll({
        scrollTo: list_section,
        duration: 1000,
        offset: -150,
      });
    },
  },
  data() {
    return {
      param: {
        vendorId: "",
        pageSize: 10,
        query: "",
        currentPage: 1,
        statusId: "",
      },
      listPromotingVendor: [],
      _listHighRatingVendor: [],
      listHighCourtBooked: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    let body = document.querySelector("body");
    body.style.overflow = "hidden";

    CustomerService.loadAllListForHomePage()
      .then((res) => {
        let responses = res;
        responses.forEach((response, index) => {
          if (response.status == 200) {
            if (index == 0) {
              this.listPromotingVendor = response.data.Value;
            } else if (index == 1) {
              this._listHighRatingVendor = response.data.Value;
            } else if (index == 2) {
              this.listHighCourtBooked = response.data.Value;
            }
            return;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
        body.style.overflow = "auto";
      });
  },
};
</script>

<style></style>
