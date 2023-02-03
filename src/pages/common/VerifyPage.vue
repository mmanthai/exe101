<template>
  <div>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <div
      class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12"
    >
      <div
        class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl"
      >
        <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div
            class="flex flex-col items-center justify-center text-center space-y-2"
          >
            <div class="font-semibold text-3xl">
              <p>Xác thực email</p>
            </div>
            <div class="flex flex-row text-sm font-medium text-gray-400">
              <p>
                Đã gửi mail xác thực đến email <b>{{ email }}</b>
              </p>
            </div>
          </div>

          <div>
            <form action="" method="post">
              <div class="flex flex-col space-y-4">
                <div
                  class="flex flex-row items-center justify-between mx-auto w-full max-w-xs"
                >
                  <input
                    placeholder="Mã xác thực"
                    type="text"
                    class="bg-[#F0EEEE] w-full border-0 px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring mb-8"
                    required
                    v-model="verifyObj.code"
                  />
                </div>

                <!-- v-if="message !== ''" -->
                <p
                  v-if="this.message"
                  class="text-base text-red-500 text-center block mb-8"
                >
                  {{ this.message }}
                </p>

                <div class="flex flex-col space-y-1">
                  <div>
                    <button
                      @click.prevent="verifyAccount"
                      type="button"
                      class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      Xác thực tài khoản
                    </button>
                  </div>

                  <div
                    class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500"
                  >
                    <p>Không nhận được mã xác thực?</p>
                    <a
                      class="flex flex-row items-center text-blue-600"
                      @click="resendCode"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Gửi lại</a
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";
import User from "@/models/User.js";
import ErrorForgot from "@/models/ErrorForgot.js";
import UserService from "@/services/user.service.js";

export default {
  data() {
    return {
      loading: false,
      verifyObj: {
        code: "",
        email: "",
      },
      message: "",
      user: new User(),
      err: new Error(),
      errForgot: new ErrorForgot(),
    };
  },
  methods: {
    resendCode() {
      const email = JSON.parse(sessionStorage.getItem("email_resgister"));
      UserService.resendOTP(email)
        .then((response) => {
          if (response.status === 200) {
            swal("Gửi lại mã xác thực thành công !", {
              icon: "success",
              timer: 2000,
            });
          } else if (response.status === 400) {
            this.message = response.Message;
          }
        })
        .catch((error) => {
          this.err = error;
        });
    },
    verifyAccount() {
      this.loading = true;

      // chạy cái này trước khi nhảy vào trang
      const email = JSON.parse(sessionStorage.getItem("email_resgister"));
      console.log(email);
      this.verifyObj.email = email;
      this.$store
        .dispatch("auth/verifyAccount", this.verifyObj)
        .then(
          (response) => {
            console.log(response);
            if (response) {
              swal("Xác Thực Thành Công !", {
                icon: "success",
                timer: 2000,
              }).then(() => {
                this.$router.push("/login");
              });
            } else if (!response) {
              this.message = "Sai mã xác nhận";
            } else if (response == false) {
              this.message = "Sai mã xác nhận";
            }
          }
          // (error) => {

          // }
        )
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
<style></style>
