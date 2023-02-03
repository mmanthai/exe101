<template>
  <div>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <customer-header />
    <div class="pt-28">
      <court-booking :courtInfo="courtInfo" />
    </div>
    <div class="flex items-center justify-center mt-8">
      <div class="datepicker relative form-floating mb-3 xl:w-96">
        <input
          v-model="bookingParam.BookedPlayDate"
          :min="new Date().toISOString().split('T')[0]"
          type="date"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Select a date"
        />
        <label for="floatingInput" class="text-gray-700"
          >Chọn ngày đặt sân</label
        >
      </div>
    </div>
    <div class="text-center block">
      <button
        @click="checkIsExistDate()"
        class="bg-blue-400 hover:bg-blue-300 font-medium duration-300 px-4 py-2 text-white rounded-md mt-4 mb-6"
      >
        Xem Lịch
      </button>
    </div>

    <div v-if="slotByDate.length > 0" class="container-fluid mt-8 px-16 w-full">
      <!-- paste table vao day o ben trang khac -->
      <booking-time-table
        @createBooking="createBooking"
        :idCourtType="bookingParam.CourtTypeId"
        :slotByDate="slotByDate"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import CourtService from "@/services/court.service.js";
import SlotService from "@/services/slot.service.js";
import swal from "sweetalert";

import BookingTimeTable from "@/pages/customer/BookTimeTable.vue";

const CustomerHeader = defineAsyncComponent(() =>
  import("@/components/layout/customer/CustomerHeader.vue")
);
const CustomerFooter = defineAsyncComponent(() =>
  import("@/components/layout/customer/CustomerFooter.vue")
);

const CourtBooking = defineAsyncComponent(() =>
  import("@/components/court/CourtBooking.vue")
);

export default {
  components: {
    CustomerHeader,
    CustomerFooter,
    CourtBooking,
    BookingTimeTable,
  },
  mounted() {
    this.loading = true;
    let courtId = this.$route.query.courtId;
    let vendorId = this.$route.params.vendorId;

    CourtService.getCourtById(courtId)
      .then((res) => {
        if (res.data) {
          this.courtInfo = res.data;

          this.bookingParam.VendorId = vendorId;
          this.bookingParam.CourtId = courtId;
          this.bookingParam.CourtTypeId = this.courtInfo.TypeId;
        }
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
      courtInfo: {},
      loading: false,
      chosenDate: "",
      bookingParam: {
        VendorId: "",
        CourtId: "",
        BookedPlayDate: "",
        CourtTypeId: "",
        SlotIds: [],
      },
      slotByDate: [],
    };
  },
  methods: {
    checkIsExistDate() {
      if (this.bookingParam.BookedPlayDate.length == 0) {
        swal("Xin hãy chọn ngày đặt lịch !", {
          icon: "warning",
        }).then(() => {
          return;
        });
      } else {
        this.loading = true;

        // let splitDate = this.bookingParam.BookedPlayDate.split('-');
        // this.BookedPlayDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
        SlotService.getSlotByDate(this.bookingParam)
          .then((res) => {
            this.slotByDate = res.data;
          })
          .catch((err) => {})
          .finally(() => {
            this.loading = false;
          });
      }
    },
    createBooking(slot_ids) {
      this.bookingParam.SlotIds = slot_ids;

      SlotService.createSlotBookingByDate(this.bookingParam)
        .then((res) => {
          console.log(res.StatusCode);
          if (res) {
            this.$toast.open({
              message: "Bạn Đã Đặt Thành Công !",
              position: "top-right",
              type: "success",
            });

            this.$router.push({
              name: "vendor-detail-page",
              params: {
                vendorId: this.bookingParam.VendorId,
              },
            });
          }
        })
        .catch((err) => {
          this.$toast.open({
            message: "Thất bại, thử lại bằng cách chọn ca chơi khác",
            position: "top-right",
            type: "error",
          });
          location.reload();
        });
    },
  },
};
</script>

<style></style>
