<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div class="p-8 flex flex-col items-center justify-between">
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full px-4 rounded-md box-border shadow">
      <span>
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          Lịch Đặt Sân
        </h2>
        <p class="my-2 text-[#334D6E]">
          Tổng số yêu cầu : {{ displayInfo.totalBooking }}
        </p>
      </span>
      <div class="flex items-center justify-between">
        <div class="container mx-auto flex px-4 mt-4">
          <div class="mx-auto flex items-center justify-center">
            <div class="mr-5">
              <p class="text-gray-400 font-lexend font-normal mb-1">Từ Ngày</p>
              <input type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" />
            </div>
            <div class="mr-5">
              <p class="text-gray-400 font-lexend font-normal mb-1">Đến Ngày</p>
              <input type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" />
            </div>
            <div class="mr-5">
              <p class="text-gray-400 font-lexend font-normal mb-1">
                Trạng Thái
              </p>
              <select id="small"
                class="rounded-lg text-md block pr-8 W-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Active">Tất cả</option>
                <option value="Active">Xác Nhận</option>
                <option value="Active">Chưa Xác Nhận</option>
                <option value="Active">Đã Thanh Toán</option>
                <option value="Active">Hủy</option>
              </select>
            </div>
            <div class="flex items-center relative mt-6">
              <span class="text-2xl p-2 text-gray-400 absolute right-0">
                <Icon icon="ei:search" />
              </span>
              <input type="text" placeholder="Search..."
                class="pr-10 rounded border border-gray-300 bg-gray-50 placeholder:text-sm" />
            </div>
          </div>
        </div>
      </div>

      <div class="wrapping-table mt-10">
        <table
          class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="uppercase px-6 py-3">Khách Hàng</th>
              <th scope="col" class="uppercase px-6 py-3">Số điện thoại</th>
              <th scope="col" class="uppercase px-6 py-3">Loại Sân</th>
              <th scope="col" class="uppercase px-6 py-3">Ngày & Khung giờ</th>
              <th scope="col" class="uppercase px-6 py-3">Trạng Thái</th>
              <th scope="col" class="uppercase px-6 py-3">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="booking in bookingArray" :key="booking.Id">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="flex-shrink object-contain">
                    <img @load="closeWaiting" class="rounded-2xl mr-3 w-8 h-8" :src="booking.UserData.Avatar" />
                  </div>
                  <div class="ml-4 text-[#334D6E]">
                    {{ booking.UserData.FullName }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                {{ booking.UserData.PhoneNumber }}
              </td>
              <td class="px-6 py-4">
                <!-- {{ items.yardType }} -->
              </td>
              <td class="px-6 py-4">
                <!-- {{ items.datetime }} -->
              </td>
              <td class="px-6 py-4">
                <span class="text-green-800 bg-green-300 px-3 py-1 rounded-md" v-if="booking.StatusId == 1">
                  Mới
                </span>
                <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md" v-else-if="booking.StatusId == 2">
                  Xác Nhận
                </span>
                <span class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md" v-else-if="booking.StatusId == 3">
                  Chủ Sân Từ Chối
                </span>
                <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md" v-else-if="booking.StatusId == 4">
                  Nguời Dùng Đã Hủy
                </span>
                <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md" v-else-if="booking.StatusId == 5">
                  Đã Thanh Toán
                </span>
                <span class="text-red-800 bg-red-300 px-3 py-1 rounded-md" v-else-if="booking.StatusId == 6">
                  Người Đặt Không Đến
                </span>
              </td>
              <td class="px-10 py-4">
                <span class="flex items-center">
                  <font-awesome-icon
                    class="w-6 h-6 mr-2 cursor-pointer text-gray-500 hover:text-gray-700 active:text-gray-800 duration-200"
                    icon="eye" @click="showDetail(booking.Id)" />
                  <Icon @click="AcceptRequest"
                    class="w-6 h-6 mr-2 cursor-pointer text-green-500 hover:text-green-700 active:text-green-800 duration-200"
                    icon="akar-icons:circle-check-fill" />

                  <Icon
                    class="w-7 h-7 text-red-500 mr-2 cursor-pointer hover:text-red-700 active:text-red-800 duration-200"
                    icon="ic:round-cancel" @click="showAlert" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-show="isEmpty" class="text-red-500 text-lg text-center">
        * Hiện tại cửa hàng chưa có lịch đặt sân
      </p>

      <div v-show="displayInfo.pageCount > 1" class="container mt-4 py-4 flex items-center justify-center">
        <nav aria-label="Page navigation example mx-auto">
          <ul class="inline-flex -space-x-px">
            <li @click="bookingPageList(param.currentPage - 1)">
              <span
                class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">Trước
                Đó</span>
            </li>
            <li v-for="page in displayInfo.pageCount" :key="page">
              <span v-if="page === param.currentPage" aria-current="page"
                class="py-2 px-3 text-blue-600 cursor-default bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{
                    page
                }}</span>
              <a @click="bookingPageList(page)" v-else
                class="py-2 px-3 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{
                    page
                }}</a>
            </li>
            <li @click="bookingPageList(param.currentPage + 1)">
              <span
                class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">Tiếp
                Theo</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <!--The Modal-->
  <DetailBookingModal :class="isHiddenModal === true ? 'hidden' : ''" :bookingDetail="bookingDetail"
    :click="countClick" />
</template>

<script>
import { Icon } from "@iconify/vue";
import swal from "sweetalert";
import DetailBookingModal from "./Booking/DetailBookingModal.vue";
import BookingService from "@/services/booking.service.js";
import UserService from "@/services/user.service.js";
import TokenService from "@/services/token/token.service.js";

export default {
  components: { Icon, DetailBookingModal },
  mounted() {
    this.loading = true;
    this.param.vendorId = TokenService.getUser().Token.VendorId;

    console.log(this.param)

    BookingService.getPagedListBookingRequest(this.param)
      .then((res) => {
        let data = res.data;
        console.log(data)
        this.objectBookingResponse = data;
        this.bookingArray = this.objectBookingResponse.Value;
        this.displayInfo.totalBooking = data.Count;
        this.displayInfo.pageCount = data.PageCount;

        this.bookingArray.forEach((booking) => {
          UserService.getOwnerProfile(booking.InsertedBy).then((res) => {
            if (res.data) {
              let dataUser = res.data;
              if (!dataUser.Avatar) {
                dataUser.Avatar =
                  "https://i.ibb.co/M8PtLRt/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-des.png";
              }
              booking["UserData"] = dataUser;
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });
    this.loading = false;
  },
  data() {
    return {
      objectBookingResponse: {},
      bookingArray: [],
      bookingDetail: {},
      isHiddenModal: true,
      countClick: 0,
      isEmpty: false,
      loading: true,
      param: {
        vendorId: 0,
        pageSize: 5,
        query: "",
        currentPage: 1,
      },
      displayInfo: {
        pageCount: 0,
        totalBooking: 0,
      },
    };
  },
  methods: {
    closeWaiting() {
      this.loading = false;
    },
    showDetail(idBooking) {
      this.isHiddenModal = false;
      this.countClick++;

      this.bookingArray.forEach((booking) => {
        if (booking.Id == idBooking) {
          this.bookingDetail = booking;
        }
      });

    },
    AcceptRequest() {
      swal("Bạn có chắc chắn xác nhận yêu cầu này không ?", {
        buttons: ["Hủy", "Đồng Ý"],
      }).then((value) => {
        if (value) {
          swal("Xác Nhận Thành Công !", {
            icon: "success",
          });
        }
      });
    },
    showAlert() {
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
  },
};
</script>

<style scoped>
select {
  height: 42px;
}

input:focus {
  outline: none;
  border: none;
}
</style>
