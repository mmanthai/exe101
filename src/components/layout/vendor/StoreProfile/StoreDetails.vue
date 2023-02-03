<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div class="bg-gray-100">
    <div class="container mx-auto my-5 p-5 px-8">
      <div class="md:flex no-wrap md:-mx-2 pt-4">
        <!-- Left Side -->
        <div class="w-full md:w-1/3 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img
                @load="closeWaiting"
                class="h-48 w-full mx-auto object-contain"
                :src="
                  vendor.ImageUrl
                    ? vendor.ImageUrl
                    : 'https://i.ibb.co/S3VjM8X/online-store-building-7737-788.webp'
                "
                alt="ảnh cửa hàng"
              />
            </div>
            <h1 class="text-gray-800 font-semibold text-lg leading-8 my-1">
              Tên Cửa Hàng :
              {{ vendor.Name ? vendor.Name : "Chưa Có" }}
            </h1>
            <h4
              class="text-gray-600 font-lg text-semibold leading-6 flex items-center pb-4"
            >
              <p class="font-semibold mr-2 text-normal">Quản lý bởi :</p>
              <p class="text-normal">
                {{ currentUser.FullName ? currentUser.FullName : "Chưa Có" }}
              </p>
            </h4>
            <ul
              class="bg-gray-100 h-12 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
            >
              <li
                v-if="vendor.ApproveStatusId !== 1"
                class="flex items-center py-1"
              >
                <span>Trạng Thái</span>
                <span class="ml-auto"
                  ><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >{{
                      vendor.BusinessStatusId
                        ? "Đang Hoạt Động"
                        : "Chưa Đăng Ký"
                    }}
                  </span></span
                >
              </li>
            </ul>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
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
              <span class="tracking-wide text-lg">Thông Tin</span>
            </div>
            <div class="text-gray-700 mt-4">
              <div class="grid grid-col">
                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-60">Địa chỉ:</div>
                  <div class="px-1 py-2 text-left">
                    {{ vendor.Address ? vendor.Address : "Chưa Có" }}
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="px-4 py-2 font-semibold w-60">Email:</div>
                  <div class="px-1 py-2 text-left">
                    {{ vendor.Email ? vendor.Email : "Chưa Có" }}
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-60">
                    Số điện thoại:
                  </div>
                  <div class="px-1 py-2 text-left">
                    {{ vendor.PhoneNumber ? vendor.PhoneNumber : "Chưa Có" }}
                  </div>
                </span>

                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-60">
                    Khung Giờ Hoạt Động:
                  </div>
                  <div v-if="vendor.OpenTime && vendor.CloseTime" class="py-2">
                    {{ `${vendor.OpenTime.slice(0, 5)}` }}
                    -
                    {{ `${vendor.CloseTime.slice(0, 5)}` }}
                  </div>
                  <div v-else class="py-2">Chưa Có</div>
                </span>
                <span class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-60">
                    Ngày Đăng Kí:
                  </div>
                  <div v-if="vendor.InsertedDate" class="px-1 py-2">
                    {{
                      new Date(this.vendor.InsertedDate).toLocaleDateString()
                    }}
                  </div>
                  <div v-else class="py-2">Chưa Có</div>
                </span>
                <span v-show="vendor.StatusId != 1" class="flex items-center">
                  <div class="pl-4 pr-2 py-2 font-semibold w-60">
                    Kiểm duyệt:
                  </div>
                  <div class="px-1 py-2">
                    {{ displayStatusApprove }}
                  </div>
                  <font-awesome-icon
                    v-show="vendor.StatusId == 4"
                    class="w-5 h-5 text-[#ACACAC] ml-2 cursor-pointer hover:text-gray-500"
                    icon="eye"
                    @click="showRejectReason(vendor.Id)"
                  />
                </span>
              </div>
            </div>

            <!--button control-->
            <div class="w-full flex items-center justify-end py-1 pb-[7px]">
              <div class="flex space-x-2 justify-center">
                <button
                  v-show="
                    vendor.ApproveStatusId == 1 || vendor.ApproveStatusId == 4
                  "
                  @click="sendRequestToApprove($event)"
                  type="button"
                  class="flex items-center px-4 py-2.5 bg-[#50AE01] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-[#78d22f] hover:shadow-lg focus:bg-[#78d22f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <Icon icon="akar-icons:sign-out"></Icon>
                  <p class="pl-2">Đăng Ký Cửa Hàng</p>
                </button>
              </div>
              <div
                v-show="vendor.ApproveStatusId == 3"
                class="flex space-x-2 justify-center ml-2"
              >
                <button
                  type="button"
                  class="flex items-center px-11 py-2.5 bg-red-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <Icon icon="ant-design:delete-filled"></Icon>
                  <p class="pl-2">Dừng Hoạt Động</p>
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
import { Icon } from "@iconify/vue";
import Vendor from "@/models/Vendor";
import TokenService from "@/services/token/token.service";
import VendorService from "@/services/vendor.service";
import UserService from "@/services/user.service";
import swal from "sweetalert";
// Enum Vendor Status
// const Status = Object.freeze({
//   'new': 1,
//   'pending approve': 2,
//   'approved': 3,
//   'rejected': 4
// })
export default {
  components: {
    Icon,
  },
  mounted() {
    this.userProfile = TokenService.getUser().Token;
    UserService.getOwnerProfile(this.userProfile.UserId)
      .then((res) => {
        let user_profile = res.data;
        this.vendor = res.data;
        this.dataVendor = user_profile.Vendor;
        console.log(this.dataVendor);
        this.currentUser = res.data;
        if (user_profile.Vendor.Id) {
          this.getVendorProfile(user_profile.Vendor.Id);
        }
        console.log(this.vendor);
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  data() {
    return {
      vendor: new Vendor(),
      currentUser: "",
      loading: true,
      dataVendor: {},
    };
  },
  computed: {
    displayStatusApprove() {
      console.log(this.dataVendor.ApproveStatusId);
      let statusText = "";
      if (this.dataVendor.ApproveStatusId == 1) {
        statusText = "Chưa Đăng Ký";
      } else if (this.dataVendor.ApproveStatusId == 2) {
        statusText = "Đang Chờ Duyệt";
      } else if (this.dataVendor.ApproveStatusId == 3) {
        statusText = "Đã Duyệt";
      } else if (this.dataVendor.ApproveStatusId == 4) {
        statusText = "Đã Từ Chối";
      }
      return statusText;
    },
  },
  methods: {
    getVendorProfile(vendorId) {
      this.loading = true;
      VendorService.getVendorProfile(vendorId)
        .then((res) => {
          if (res.data) {
            this.vendor = res.data;
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this.loading = false;
        });
    },
    sendRequestToApprove(evt) {
      evt.preventDefault();
      this.loading = true;
      VendorService.sendRequestToApprove(this.vendor)
        .then((res) => {
          console.log(res);
          if (res) {
            this.userProfile = TokenService.getUser().Token;
            UserService.getOwnerProfile(this.userProfile.UserId)
              .then((res) => {
                let user_profile = res.data;
                if (user_profile.Vendor.Id) {
                  this.getVendorProfile(user_profile.Vendor.Id);
                }
                this.$toast.open({
                  message: "Đã gửi yêu cầu phê duyệt !",
                  position: "top-right",
                  type: "success",
                });
              })
              .catch((err) => {
                console.log(err.response);
              });
          }
        })
        .catch((err) => {
          console.log(err);
          this.$toast.open({
            message: err.response.data.Message,
            position: "top-right",
            type: "error",
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    showRejectReason(vendorId) {
      this.loading = true;
      VendorService.getTicketApprove(vendorId)
        .then((res) => {
          console.log(res.data);
          swal("Lý do bị từ chối!", `${res.data.ReasonOfChange}`);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
