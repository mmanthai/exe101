<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div
    class="container p-6 rounded-md shadow-md bg-white mx-auto h-full w-[80%] mt-8 md:mt-0 min-w-[80%] relative"
  >
    <p class="text-red-500 font-normal text-right text-sm italic">
      Ghi chú: (*) Các trường bắt buộc nhập
    </p>
    <form @submit.prevent="updateProfile">
      <!--form control-->
      <div class="flex">
        <!--img container-->
        <div>
          <div
            class="flex flex-col justify-start items-start lg:w-80 md:w-40 sm:w-20"
          >
            <img
              @load="closeWaiting"
              class="h-64 rounded mr-3 lg:w-60 object-contain md:w-40"
              :src="
                currentUser.Avatar
                  ? currentUser.Avatar
                  : 'https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg'
              "
            />
            <label class="block mt-4">
              <span class="sr-only">Choose File</span>
              <input
                @change="uploadImg"
                type="file"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                accept="image/*"
              />
            </label>
          </div>
        </div>

        <!--information container-->
        <div
          class="flex-1 grid md:grid-cols-2 gap-6 mt-4 sm:grid-cols-1 text-normal"
        >
          <div>
            <label class="text-[#747474]" for="username">Email</label>
            <!-- <input-component disabled="true" class="w-full mt-2 border-gray-800 text-sm text-gray-600"
              :value="currentUser.UserName" /> -->
            <div class="relative">
              <p
                v-if="!currentUser.Email"
                class="text-2xl text-red-500 absolute right-12 top-4"
              >
                *
              </p>
              <input
                placeholder="Tên Tài Khoản"
                type="text"
                class="mt-2 w-[90%] px-3 py-2 bg-gray-100 place-holder-grey-400 text-grey-700 rounded text-md focus:outline-none focus:ring-50 mb-2 pr-8"
                required
                disabled
                v-model="currentUser.Email"
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
          <div>
            <label class="text-[#747474]" for="username">Vai Trò</label>
            <!-- <input-component  disabled="true" class="w-full mt-2 border-gray-800 text-sm text-gray-600"
              :value="roleUser" /> -->
            <div class="relative">
              <p
                v-if="!roleUser"
                class="text-2xl text-red-500 absolute right-12 top-4"
              >
                *
              </p>
              <input
                placeholder="Tên Cửa Hàng"
                type="text"
                class="mt-2 w-[90%] px-3 py-2 bg-gray-100 place-holder-grey-400 text-grey-700 rounded text-md focus:outline-none focus:ring-50 mb-2 pr-8"
                required
                disabled
                v-model="roleUser"
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
          <div>
            <label class="text-[#747474]" for="username">Họ Tên</label>
            <!-- <input-component required class="w-full mt-2 text-sm" :value="currentUser.FullName" /> -->
            <div class="relative">
              <p
                v-if="!currentUser.FullName"
                class="text-2xl text-red-500 absolute right-12 top-4"
              >
                *
              </p>
              <input
                placeholder="Họ Tên"
                type="text"
                class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                required
                v-model="currentUser.FullName"
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

          <div>
            <label class="text-[#747474]" for="phone">Số Điện Thoại</label>
            <!-- <input-component required type="text" class="w-full mt-2 text-sm" :value="currentUser.PhoneNumber" /> -->
            <div class="relative">
              <p
                v-if="!currentUser.PhoneNumber"
                class="text-2xl text-red-500 absolute right-12 top-4"
              >
                *
              </p>
              <input
                placeholder="Số Điện Thoại"
                type="number"
                class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                required
                v-model="currentUser.PhoneNumber"
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
        </div>
      </div>

      <!--button control-->
      <div class="w-full flex items-center justify-end">
        <div>
          <nav>
            <button
              type="button"
              @click="hasHistory() ? $router.go(-1) : $router.push('/')"
              class="mx-auto bg-gray-500 hover:bg-gray-700 duration-200 text-white font-medium py-2 px-4 rounded w-20 text-md"
            >
              &laquo; Back
            </button>
          </nav>
        </div>
        <div>
          <button
            type="button"
            @click="updateProfile"
            class="mx-auto bg-green-500 hover:bg-green-700 duration-200 text-white font-medium py-2 px-4 rounded w-25 text-md ml-3"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="js">
import UserService from "@/services/user.service";
import TokenService from "@/services/token/token.service";
import axios from "axios";

export default {
  components: {},
  mounted() {
    this.loading = true;

    this.currentUser = TokenService.getUser().Token;
    let roleUser = this.currentUser.RoleIds[0];
    if (roleUser === 5) {
      this.roleUser = "Khách hàng";
    }

    this.loading = false;
  },
  data() {
    return {
      currentUser: "",
      selectedFile: null,
      loading: true,
      roleUser: "",
    };
  },
  methods: {
    hasHistory() {
      return window.history.length > 2;
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
          this.currentUser.Avatar = res.data.data.image.url;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;

          this.$toast.open({
            message: "Không thể tải ảnh lên !",
            position: "top-right",
            type: "error",
          });
        });
    },
    closeWaiting() {
      this.loading = false;
    },
    updateProfile() {
      this.loading = true;
      let update_profile = {
        fullName: this.currentUser.FullName,
        phoneNumber: this.currentUser.PhoneNumber,
        avatar: this.currentUser.Avatar,
      };

      UserService.updateProfile(update_profile)
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            TokenService.updateLocalUserProfile(res.data);
            this.currentUser = TokenService.getUser().Token;
            this.loading = false;

            this.$toast.open({
              message: "Cập Nhật Thành Công !",
              position: "top-right",
              type: "success",
            });
            this.$router.push("/home");
          }
        })
        .catch((err) => {
          console.log(err);

          this.loading = false;

          this.$toast.open({
            message: "Không Cập Nhật Được!",
            position: "top-right",
            type: "error",
          });
        });
    },
  },
};
</script>
