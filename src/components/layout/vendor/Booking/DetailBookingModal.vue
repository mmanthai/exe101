<template>
  <div
    id="modal"
    class="flex modal fixed inset-0"
    :class="isClose === true ? 'hidden' : ''"
  >
    <div class="modal-overlay absolute w-full h-full"></div>
    <div class="mx-auto relative p-4 w-full max-w-xl h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-20">
        <button
          @click="hiddenModal"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-50 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <Icon class="w-6 h-6" icon="akar-icons:circle-x-fill"></Icon>
        </button>
        <div class="w-full md:w-3/4 mx-2 h-full">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-600 leading-8 px-4"
            >
              <span clas="text-green-500">
                <font-awesome-icon icon="user" class="text-lg" />
              </span>
              <span class="tracking-wide text-lg">Chi Tiết Đặt Sân</span>
            </div>
            <div class="text-gray-700 mt-4">
              <div class="grid grid-col gap-2">
                <span class="flex items-center">
                  <div class="px-4 py-2 font-semibold">Tài khoản yêu cầu:</div>
                  <div class="px-1 py-2">{{ initData.UserData.UserName }}</div>
                </span>

                <span class="flex items-center">
                  <div class="px-4 py-2 font-semibold w-44">Họ Tên:</div>
                  <div class="px-1 py-2">{{ initData.UserData.FullName }}</div>
                </span>

                <span class="flex items-center">
                  <div class="px-4 py-2 font-semibold w-44">Email:</div>
                  <div class="px-1 py-2">{{ initData.UserData.Email }}</div>
                </span>

                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-44">
                    Số điện thoại:
                  </div>
                  <div class="px-1 py-2">
                    {{ initData.UserData.PhoneNumber }}
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-44">
                    Khung Giờ Thuê:
                  </div>
                  <div class="py-2">5:00 - 6:30 AM</div>
                </span>
                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-44">
                    Tên Sân Thuê:
                  </div>
                  <div class="px-1 py-2">{{ textCourtName }}</div>
                </span>
                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-44">
                    Trạng Thái:
                  </div>
                  <div class="px-1 py-2 text-red-500 semibold">
                    Chờ Xác Nhận
                  </div>
                </span>
              </div>
            </div>

            <!--button control-->
            <div class="w-full flex items-center justify-end py-4">
              <div
                class="flex space-x-2 justify-center mr-2"
                @click="cancelBooking"
              >
                <button
                  type="button"
                  class="flex items-center px-4 py-2.5 bg-red-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <Icon icon="ant-design:delete-filled"></Icon>
                  <p class="pl-2">Từ Chối</p>
                </button>
              </div>

              <div
                class="flex space-x-2 justify-center"
                @click="confirmBooking"
              >
                <button
                  type="button"
                  class="flex items-center px-4 py-2.5 bg-[#50AE01] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-[#78d22f] hover:shadow-lg focus:bg-[#78d22f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <Icon icon="akar-icons:circle-check-fill"></Icon>
                  <p class="pl-2">Xác Nhận</p>
                </button>
              </div>
            </div>
          </div>
          <!-- End of about section -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Icon } from "@iconify/vue";
import swal from "sweetalert";
import CourtService from "@/services/court.service";
import SlotService from "@/services/slot.service";

export default {
  components: {
    // Icon,
  },
  props: {
    bookingDetail: {
      type: Object,
      require: false,
    },
    click: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      isClose: false,
      initData: {
        Id: 3,
        VendorId: 11,
        TotalPrice: 200000,
        InsertedDate: "2022-07-18T00:00:00+07:00",
        InsertedBy: 1,
        Note: "Love",
        StatusId: 1,
        Active: true,
        PaymentId: 1,
        UserData: {
          Id: 1,
          FirstName: "Henry",
          LastName: "Aaron",
          MiddleName: "de",
          FullName: "Aaron de Henry",
          DoB: "2000-04-15T00:00:00+07:00",
          Address: "Thủ Đức",
          PhoneNumber: "876543217",
          Avatar: "https://i.ibb.co/ByyCZT0/avatar.jpg",
          Password:
            "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",
          UserName: "sys",
          LoginFailedCount: 0,
          LastLogin: "2022-07-20T10:04:36.7440062+07:00",
          LastFailedLogin: "2022-07-19T00:00:00+07:00",
          Email: "henri@gmail.com",
          GenderId: 1,
          Active: true,
          InsertedDate: "2022-06-19T00:00:00+07:00",
          InsertedBy: 1,
        },
      },
    };
  },
  computed: {
    textCourtName() {
      if (this.initData.BookingDetail) {
        return this.initData.BookingDetail[length - 1].textCourtName;
      } else {
        return "";
      }
    },
    textSlotName() {
      if (this.initData.BookingDetail) {
        return this.initData.BookingDetail[length - 1].textSlot;
      } else {
        return "";
      }
    },
  },
  methods: {
    hiddenModal() {
      this.isClose = true;
    },
    cancelBooking() {
      swal("Bạn có chắc chắn sẽ từ chối yêu cầu này không?", {
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal({
            text: "Xin Hãy Nhập Lý Do :",
            content: {
              element: "textarea",
              attributes: {
                placeholder: "Nhập Lý Do",
                required: true,
              },
            },
            button: "Xác Nhận",
          }).then((value) => {
            if (value) {
              swal("Từ Chối Thành Công !", {
                icon: "success",
              });

              this.hiddenModal();
            }
          });
        }
      });
    },
    confirmBooking() {
      swal("Xác Nhận Thành Công !", {
        icon: "success",
      });

      this.hiddenModal();
    },
  },
  watch: {
    bookingDetail() {
      this.isClose = false;
      this.initData = this.bookingDetail;
      this.initData.textCourtName = "";
      this.initData.textSlot = "";
      let textCourtName = "";
      let textSlot = "";

      if (this.initData.BookingDetail) {
        this.initData.BookingDetail.forEach((detail) => {
          CourtService.getCourtById(detail.CourtId).then((res) => {
            if (res.data) {
              let court = res.data;
              textCourtName += court.Name + ", ";
              detail.textCourtName = textCourtName;
            }
          });

          SlotService.getSlotById(detail.SlotId).then((res) => {
            if (res.data) {
              let slot = res.data;
              textSlot += `${slot.StartTime.slice(0, 5)}-${slot.EndTime.slice(
                0,
                5
              )} ,`;
              detail.textSlot = textSlot;
            }
          });
        });
      }

      console.log(this.initData);
    },
    click() {
      this.isClose = false;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-body {
  width: 500px;
  height: 300px;
  background: red;
  position: relative;
  z-index: 50;
}
</style>
