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
                class="h-72 w-full mx-auto object-cover"
                :src="
                  vendor.ImageUrl
                    ? vendor.ImageUrl
                    : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
                "
                alt=""
              />
            </div>
            <label class="block mt-4">
              <span class="sr-only">Choose File</span>
              <input
                @change="uploadImg"
                type="file"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 pb-2"
                accept="image/*"
              />
            </label>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-3/4 mx-2 h-full">
          <!-- Profile tab -->
          <!-- About Section -->
          <form @submit.prevent="createVendor">
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div
                class="flex items-center space-x-2 font-semibold text-gray-600 leading-8 px-4"
              >
                <span class="text-green-500">
                  <font-awesome-icon icon="user" class="text-lg" />
                </span>
                <div class="flex items-center w-full justify-between">
                  <span class="tracking-wide text-lg">Thông Tin</span>
                  <p class="text-red-500 font-normal text-right text-sm italic">
                    Ghi chú: (*) Các trường bắt buộc nhập
                  </p>
                </div>
              </div>
              <!--information container-->
              <div
                class="grid md:grid-cols-2 gap- mt-4 sm:grid-cols-1 text-normal px-4"
              >
                <div>
                  <label class="text-[#747474]" for="username"
                    >Tên Cửa Hàng</label
                  >
                  <div class="relative">
                    <p
                      v-if="!vendor.Name"
                      class="text-2xl text-red-500 absolute right-12 top-4"
                    >
                      *
                    </p>
                    <input
                      placeholder="Tên Cửa Hàng"
                      type="text"
                      class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                      required
                      v-model.trim="vendor.Name"
                    />
                    <!-- <p class="
                          absolute
                          top-[100%]
                          left-0
                          error-text
                          text-sm
                          text-center text-red-700
                        " role="alert">
                      123
                    </p> -->
                  </div>
                </div>
                <div>
                  <label class="text-[#747474]" for="username">Email</label>
                  <!-- <input-component type="email" class="w-[90%] mt-2 text-sm" value="sonstarnguyen@gmail.com" /> -->
                  <div class="relative">
                    <p
                      v-if="!vendor.Email"
                      class="text-2xl text-red-500 absolute right-12 top-4"
                    >
                      *
                    </p>
                    <input
                      placeholder="Email"
                      type="email"
                      class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                      v-model.trim="vendor.Email"
                      required
                    />
                    <!-- <p v-if="err.errVendorName" class="
                          absolute
                          top-[138%]
                          left-0
                          error-text
                          text-center text-red-700
                        " role="alert">
                      * {{ err.errVendorName }}
                    </p> -->
                  </div>
                </div>
                <div class="mt-8">
                  <label class="text-[#747474]" for="username"
                    >Giờ Mở Cửa</label
                  >
                  <!-- <input-component type="time" class="w-[90%] mt-2 border-gray-800 text-sm text-gray-600" /> -->
                  <div class="relative">
                    <p
                      v-if="!vendor.OpenTime"
                      class="text-2xl text-red-500 absolute right-12 top-4"
                    >
                      *
                    </p>
                    <input
                      placeholder="Giờ Mở Cửa"
                      type="time"
                      class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                      required
                      v-model.trim="vendor.OpenTime"
                    />
                    <!-- <p v-if="err.errVendorName" class="
                          absolute
                          top-[138%]
                          left-0
                          error-text
                          text-center text-red-700
                        " role="alert">
                      * {{ err.errVendorName }}
                    </p> -->
                  </div>
                </div>

                <div class="mt-8">
                  <label class="text-[#747474]" for="username"
                    >Giờ Đóng Cửa</label
                  >
                  <!-- <input-component type="time" class="w-[90%] mt-2 border-gray-800 text-sm text-gray-600" value="Admin" /> -->

                  <div class="relative">
                    <p
                      v-if="!vendor.CloseTime"
                      class="text-2xl text-red-500 absolute right-12 top-4"
                    >
                      *
                    </p>
                    <input
                      placeholder="Giờ Đóng Cửa"
                      type="time"
                      class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                      required
                      v-model.trim="vendor.CloseTime"
                    />
                    <!-- <p v-if="err.errVendorName" class="
                          absolute
                          top-[138%]
                          left-0
                          error-text
                          text-center text-red-700
                        " role="alert">
                      * {{ err.errVendorName }}
                    </p> -->
                  </div>
                </div>

                <div class="mt-8">
                  <label class="text-[#747474]" for="phoneNumber"
                    >Số Điện Thoại</label
                  >
                  <!-- <input-component type="tel" class="w-[90%] mt-2 text-sm" value="0978145440" /> -->
                  <div class="relative">
                    <p
                      v-if="!vendor.PhoneNumber"
                      class="text-2xl text-red-500 absolute right-12 top-4"
                    >
                      *
                    </p>
                    <input
                      placeholder="Số Điện Thoại"
                      type="number"
                      class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                      required
                      v-model.trim="vendor.PhoneNumber"
                    />
                    <!-- <p v-if="err.errVendorName" class="
                          absolute
                          top-[138%]
                          left-0
                          error-text
                          text-center text-red-700
                        " role="alert">
                      * {{ err.errVendorName }}
                    </p> -->
                  </div>
                </div>

                <div class="flex flex-col items-start justify-start mt-8">
                  <label class="text-[#747474]" for="username">Địa chỉ</label>
                  <!-- <textarea class="w-[90%] mt-2 h-13 resize-none overflow rounded-md text-sm"></textarea> -->
                  <div class="relative w-[90%]">
                    <p
                      v-if="!vendor.Address"
                      class="text-2xl text-red-500 absolute right-4 top-6"
                    >
                      *
                    </p>
                    <textarea
                      v-model.trim="vendor.Address"
                      placeholder="Địa chỉ"
                      class="mt-2 w-full px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                      required
                    ></textarea>
                    <!-- <p v-if="err.errVendorName" class="
                          absolute
                          top-[138%]
                          left-0
                          error-text
                          text-center text-red-700
                        " role="alert">
                      * {{ err.errVendorName }}
                    </p> -->
                  </div>
                </div>
              </div>
            </div>

            <!--button control-->
            <div class="w-full flex items-center justify-end mt-8">
              <div v-if="existVendorId" class="flex items-center">
                <div
                  @click="updateVendor($event)"
                  class="flex space-x-2 justify-center"
                >
                  <button
                    type="button"
                    class="flex items-center px-10 py-2.5 bg-[#50AE01] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-[#78d22f] hover:shadow-lg focus:bg-[#78d22f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <Icon icon="dashicons:update-alt"></Icon>
                    <p class="pl-2">Cập Nhật</p>
                  </button>
                </div>
              </div>
              <div v-else class="flex space-x-2 justify-center">
                <button
                  type="submit"
                  class="flex items-center px-10 py-2.5 bg-[#50AE01] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-[#78d22f] hover:shadow-lg focus:bg-[#78d22f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <Icon icon="akar-icons:circle-plus-fill"></Icon>
                  <p class="pl-2">Tạo Cửa Hàng</p>
                </button>
              </div>
            </div>
            <!-- End of about section -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import Vendor from "@/models/Vendor";
import ErrorVendor from "@/models/ErrorVendor";
import axios from "axios";
import VendorService from "@/services/vendor.service";
import TokenService from "@/services/token/token.service";
import UserService from "@/services/user.service";
import swal from "sweetalert";
export default {
  components: {
    Icon,
  },
  mounted() {
    this.userProfile = TokenService.getUser().Token;
    UserService.getOwnerProfile(this.userProfile.UserId)
      .then((res) => {
        let user_profile = res.data;
        if (user_profile.Vendor.Id) {
          this.getVendorProfile(user_profile.Vendor.Id);
          this.existVendorId = true;
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  data() {
    return {
      loading: true,
      vendor: new Vendor(),
      errVendor: new ErrorVendor(),
      userProfile: "",
      existVendorId: false,
      avtUrlDefault: "https://i.ibb.co/Kmr0F1Z/store.webp",
      vendorId: "",
    };
  },
  methods: {
    createVendor() {
      this.loading = true;
      this.vendor.OwnerId = this.userProfile.UserId;

      if (!this.vendor.ImageUrl) {
        swal("Xin hãy chọn hình ảnh sân !", {
          icon: "warning",
        }).then(() => {
          this.loading = false;
          return;
        });
      }

      if (this.vendor.ImageUrl) {
        VendorService.createVendorProfile(this.vendor)
          .then((res) => {
            // reset value of form
            this.vendor = new Vendor();
            if (res.data) {
              UserService.getOwnerProfile(this.userProfile.UserId)
                .then((res) => {
                  let user_profile = res.data;
                  if (user_profile.Vendor.Id) {
                    this.vendorId = user_profile.Vendor.Id;
                    this.getVendorProfile(user_profile.Vendor.Id);
                    this.existVendorId = true;
                  }
                  this.$toast.open({
                    message: "Tạo Cửa Hàng Thành Công !",
                    position: "top-right",
                    type: "success",
                  });
                })
                .catch((err) => {
                  console.log(err.response.data);
                });
            }
          })
          .catch((err) => {
            console.log(err.response.data);
            this.$toast.open({
              message: "Đã có lỗi xảy ra. Không Thể Tạo Cửa Hàng !",
              position: "top-right",
              type: "error",
            });
          })
          .finally(() => (this.loading = false));
      }
    },
    uploadImg(evt) {
      this.loading = true;
      let apiKey = "3ce508644197fb15dcf4e916cf328c21";
      const baseUrlImgbb = "https://api.imgbb.com/1";
      this.selectedFile = evt.target.files[0];
      let body = new FormData();
      body.set("key", apiKey);
      body.append("image", this.selectedFile);
      axios
        .post(baseUrlImgbb + "/upload", body)
        .then((res) => {
          this.vendor.ImageUrl = res.data.data.image.url;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    closeWaiting() {
      this.loading = false;
    },
    async getVendorProfile(vendorId) {
      this.loading = true;
      await VendorService.getVendorProfile(vendorId)
        .then((res) => {
          this.vendor = res.data;
          this.vendor.VendorId = vendorId;
          console.log(this.vendor);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    updateVendor(evt) {
      evt.preventDefault();
      this.loading = true;

      let today = new Date();
      // Use the substring() function to extract hours and minutes
      this.vendor.OpenTime = this.vendor.OpenTime.slice(0, 5);
      this.vendor.CloseTime = this.vendor.CloseTime.slice(0, 5);
      VendorService.updateVendorProfile(this.vendor)
        .then((res) => {
          if (res.data) {
            this.$toast.open({
              message: "Cập Nhật Thành Công !",
              position: "top-right",
              type: "success",
            });

            location.reload();

            // UserService.getOwnerProfile(this.userProfile.UserId)
            //   .then((res) => {
            //     let user_profile = res.data;
            //     if (user_profile.Vendor.Id) {
            //       this.vendor.VendorId = Vendor.Id
            //       this.getVendorProfile(user_profile.Vendor.Id);
            //       this.existVendorId = true;
            //     }
            //   })
            //   .catch((err) => {
            //     console.log(err.response.data);
            //   });
          }
        })
        .catch((err) => {
          console.log(err);
          this.$toast.open({
            message: "Đã có lỗi xảy ra. Không thể cập nhật cửa hàng !",
            position: "top-right",
            type: "error",
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
