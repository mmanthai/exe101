<template>
  <div>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <customer-header />

    <div class="container pl-10 md:pt-36">
      <div class="container px-20 py-4">
        <span class="text-base block">
          <router-link to="/home">Trang Chủ</router-link> /
          <span>Lịch Sử Đặt Sân</span>
        </span>
      </div>
    </div>

    <div class="container px-16">
      <h2 class="font-semibold text-lg mb-4 px-10 ml-4">Lịch Sử Đặt Sân</h2>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg pt-8">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="py-3 px-6">Mã Đặt Sân</th>
              <th scope="col" class="py-3 px-6">Tên Cửa Hàng</th>
              <th scope="col" class="py-3 px-6">Ngày Đặt</th>
              <th scope="col" class="py-3 px-6">Tổng Giá Tiền (VNĐ)</th>
              <th scope="col" class="py-3 px-6">Trạng Thái</th>
              <th scope="col" class="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="history in historyBooking"
              :key="history"
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                BK{{ String(history.Id).padStart(6, "0") }}
              </th>
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ history.VendorName }}
              </th>
              <td class="py-4 px-6">
                {{ history.InsertedDate }}
              </td>
              <td class="py-4 px-6">
                {{ history.TotalPrice }}
              </td>
              <td v-if="history.StatusId == 1" class="py-4 px-6 text-gray-500">
                Mới
              </td>
              <td
                v-else-if="history.StatusId == 2"
                class="py-4 px-6 text-green-500"
              >
                Đã Xác Nhận
              </td>
              <td v-if="history.StatusId == 3" class="py-4 px-6 text-red-500">
                Đã Hủy
              </td>
              <td @click="showDetailHistory(history.Id)" class="py-4 px-6">
                <a
                  class="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
                  >Xem Chi Tiết</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="container px-16 mb-10" v-if="bookingDetail.length > 0">
      <h2 class="font-semibold text-lg mb-4 px-10 ml-4 mt-16 text-center">
        Chi Tiết Đặt Sân
      </h2>
      <div
        class="overflow-x-auto relative border-2 shadow-md sm:rounded-lg pt-8 px-24 w-[60%] mx-auto"
      >
        <div>
          <div class="flex items-center">
            <p class="font-semibold w-40">Tên Cửa Hàng :</p>
            <p>{{ bookingDetail[0].vendorName }}</p>
          </div>
          <div class="flex items-center">
            <p class="font-semibold w-40">Ngày Chơi :</p>
            <p>{{ bookingDetail[0].playDate }}</p>
          </div>
          <div class="flex items-center">
            <p class="font-semibold w-40">Tổng Giá :</p>
            <p class="mr-2">{{ bookingDetail[0].totalPrice }}</p>
            VNĐ
          </div>
        </div>
        <div class="pt-4">
          <ul>
            <li
              v-for="bookingDetail in bookingDetail[1]"
              :key="bookingDetail"
              class="border-b-2 pb-4 mt-2"
            >
              <div class="flex items-center">
                <p class="font-medium w-32">Mã Đặt Sân :</p>
                <p>BD{{ String(bookingDetail.BookingId).padStart(6, "0") }}</p>
              </div>

              <div class="flex items-center">
                <p class="font-medium w-32">Tên Sân :</p>
                <p>{{ bookingDetail.CourtId }}</p>
              </div>
              <div class="flex items-center">
                <p class="font-medium w-32">Ca :</p>
                <p>{{ bookingDetail.SlotId }}</p>
              </div>
              <div class="flex items-center">
                <p class="font-medium w-32">Giá :</p>
                <p>{{ bookingDetail.Price }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { defineAsyncComponent } from "vue";
import BookingService from "@/services/booking.service.js";
import VendorService from "@/services/vendor.service.js";

const CustomerHeader = defineAsyncComponent(() =>
  import("@/components/layout/customer/CustomerHeader.vue")
);
export default {
  components: {
    Icon,
    CustomerHeader,
  },
  mounted() {
    this.loading = true;
    BookingService.getPagedListBookingHistory(this.param)
      .then((res) => {
        let historyList = res.data.Value;
        let listModified = [];
        if (historyList.length > 0) {
          historyList.map((history, index) => {
            VendorService.getVendorProfile(history.VendorId)
              .then((res) => {
                if (res.data) {
                  let vendor = res.data;
                  history.VendorName = vendor.Name;
                  let insertDate = history.InsertedDate.slice(0, 10);
                  let splitDate = insertDate.split("-");
                  history.InsertedDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
                  this.historyBooking.push(history);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }
        console.log(this.historyBooking);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  data() {
    return {
      param: {
        VendorId: "",
        PageSize: "",
        queryString: "",
        CurrentPage: "",
        statusId: "",
      },
      historyBooking: [],
      loading: false,
      bookingDetail: [],
    };
  },
  methods: {
    showDetailHistory(id) {
      this.bookingDetail = [];
      let booking = this.historyBooking.find((x) => x.Id === id);
      let booking_detail = booking.BookingDetail;

      let info = {
        vendorName: booking.VendorName,
        playDate: booking.InsertedDate,
        totalPrice: booking.TotalPrice,
        totalPriceAfterPromotion: booking.TotalPriceAfterPromotion,
      };

      this.bookingDetail.push(info);
      this.bookingDetail.push(booking_detail);

      console.log(this.bookingDetail);

      // this.$router.push({
      //     name : 'history-detail-page',
      //     params : {
      //         bookingId : id
      //     }
      // })
    },
  },
};
</script>

<style></style>
