<template>
  <div
    class="container p-6 rounded-md shadow-md bg-white mx-auto h-full w-[80%] mt-8 md:mt-0 min-w-[80%] relative"
  >
    <form>
      <!--form control-->
      <p class="text-red-500 font-normal text-right text-sm italic">
        Ghi chú: (*) Các trường bắt buộc nhập
      </p>
      <div class="flex">
        <!--information container-->
        <div
          class="w-[80%] grid md:grid-cols-2 gap-6 mt-4 sm:grid-cols-1 text-normal"
        >
          <div>
            <label class="text-[#747474]" for="username">Username</label>
            <!-- <input-component
              disabled="true"
              class="w-full mt-2 border-gray-800 text-sm text-gray-600"
              :value="currentUser.UserName"
            /> -->
            <div class="relative">
              <p
                v-if="!currentUser.UserName"
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
                v-model="currentUser.UserName"
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
            <label class="text-[#747474]" for="password">Old Passwowrd</label>
            <div class="relative">
              <p
                v-if="!changePasswordObj.CurrentPassword"
                class="text-2xl text-red-500 absolute right-12 top-4"
              >
                *
              </p>
              <input
                placeholder="Mật Khẩu Cũ"
                type="password"
                class="mt-2 w-[90%] px-3 py-2 shadow place-holder-grey-400 text-grey-700 rounded text-md focus:outline-none focus:ring-50 mb-2 pr-8"
                required
                v-model="changePasswordObj.CurrentPassword"
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
            <label class="text-[#747474]" for="password">New Password</label>
            <div class="relative">
              <p
                v-if="!changePasswordObj.NewPassWord"
                class="text-2xl text-red-500 absolute right-12 top-4"
              >
                *
              </p>
              <input
                placeholder="Mật Khẩu Mới"
                type="password"
                class="mt-2 w-[90%] px-3 py-2 shadow place-holder-grey-400 text-grey-700 rounded text-md focus:outline-none focus:ring-50 mb-2 pr-8"
                required
                v-model="changePasswordObj.NewPassWord"
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
            <label class="text-[#747474]" for="username"
              >Confirm New Password</label
            >
            <div class="relative">
              <p
                v-if="!changePasswordObj.ConfirmPassword"
                class="text-2xl text-red-500 absolute right-12 top-4"
              >
                *
              </p>
              <input
                placeholder="Xác Nhận Mật Khẩu Mới"
                type="password"
                class="mt-2 w-[90%] px-3 py-2 shadow place-holder-grey-400 text-grey-700 rounded text-md focus:outline-none focus:ring-50 mb-2 pr-8"
                required
                v-model="changePasswordObj.ConfirmPassword"
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
            <!-- mx-auto bg-gray-500 hover:bg-gray-700 duration-200 text-white
            font-medium py-2 px-4 rounded w-20 text-md -->
              <button
                type="button"
                @click="hasHistory() ? $router.go(-1) : $router.push('/')"
                class="mx-auto bg-gray-500 hover:bg-gray-700 duration-200 text-white
                font-medium py-2 px-4 rounded w-20 text-md"
              >
                &laquo; Back
              </button>
          </nav>
        </div>

        <div>
          <button
            class="mx-auto bg-green-500 hover:bg-green-700 duration-200 text-white font-medium py-2 px-4 rounded w-25 text-md ml-3"
            type="button"
            @click="changePassword"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import TokenService from "@/services/token/token.service";
import UserService from "@/services/user.service";
import swal from "sweetalert";

export default {
  components: {},
  mounted() {
    this.currentUser = TokenService.getUser().Token;
    // this.currentUser["CurrentPassword"] = "";
    // this.currentUser["NewPassWord"] = "";
    // this.currentUser["ConfirmPassword"] = "";
  },
  data() {
    return {
      currentUser: "",
      selectedFile: null,
      loading: true,
      roleUser: "",
      changePasswordObj: {
        oldPassword: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    hasHistory() {
      return window.history.length > 2;
    },
    changePassword() {
      this.loading = true;
      let change_password = {
        oldPassword: this.changePasswordObj.CurrentPassword,
        password: this.changePasswordObj.NewPassWord,
        confirmPassword: this.changePasswordObj.ConfirmPassword,
      };
      this.$store
        .dispatch("auth/changePasswordUserProfile", change_password)
        .then((res) => {
          if (res) {
            console.log("doi pass thanh cong");
            swal({
              title: "Thành công",
              text: "Đổi mật khẩu thành công",
              icon: "success",
              button: "OK",
            }).then(() => {
              // this.$router.push("/profile");
              console.log("ko thanh cong");
            });
          } else if (res.StatusCode === 400) {
            this.message = res.Message;
          }
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
};
</script>
