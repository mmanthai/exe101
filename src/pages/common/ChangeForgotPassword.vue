<template>
  <main>
    <section class="absolute w-full h-full">
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-1/3 px-4">
            <div class="w-60 h-60 mx-auto mb-6">
              <img class="object-cover" src="@/assets/img/change.png" />
            </div>
            <div class="relative flex flex-col w-full">
              <h2 class="text-center font-bold text-[25px] mb-6">
                Thay Đổi Mật Khẩu
              </h2>
              <form @submit.prevent="changePassword">
                <div class="relative w-full mb-8">
                  <div class="relative">
                    <p
                      v-if="!change.code"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Mã xác nhận"
                      type="text"
                      class="bg-[#F0EEEE] w-full border-0 px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring mb-8"
                      required
                      v-model="change.code"
                      :class="err.errCode && !message"
                    />
                    <p
                      v-if="err.errCode"
                      class="error-text text-center w-full text-red-700 mt-2 mb-2"
                      role="alert"
                    >
                      * {{ err.errCode }}
                    </p>
                  </div>
                  <div class="relative">
                    <p
                      v-if="!change.password"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Mật khẩu mới"
                      type="password"
                      class="bg-[#F0EEEE] w-full border-0 px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring mb-8"
                      required
                      v-model="change.password"
                    />
                  </div>
                  <div class="relative">
                    <p
                      v-if="!change.confirmPassword"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Xác nhận mật khẩu"
                      type="password"
                      class="bg-[#F0EEEE] w-full border-0 px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring mb-8"
                      required
                      v-model="change.confirmPassword"
                      :class="err.errConfirmPassword && !message"
                    />
                    <p
                      v-if="err.errConfirmPassword"
                      class="error-text text-center text-red-700 mt-2 mb-2"
                      role="alert"
                    >
                      {{ err.errConfirmPassword }}
                    </p>
                    <div
                      v-if="message"
                      class="error-text text-center text-red-700 mt-2 mb-2"
                      role="alert"
                    >
                      {{ message }}
                    </div>
                  </div>
                  <p
                    v-if="!checkIsEntered"
                    class="text-red-500 text-right text-sm italic"
                  >
                    Ghi chú: (*) Các trường bắt buộc nhập
                  </p>

                  <button-component
                    class="font-medium uppercase text-white text-[16px] bg-blue-700 hover:bg-blue-800 active:bg-blue-900"
                    type="submit"
                  >
                    Xác Nhận
                  </button-component>

                  <div class="relative mt-2 w-full">
                    <p
                      class="text-center text-gray-400 hover:text-gray-500 duration-200"
                    >
                      <router-link to="/login" class="no-underline"
                        >Đã có tài khoản</router-link
                      >
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import ChangeForgot from "@/models/ChangeForgot.js";
import ErrorForgot from "@/models/ErrorForgot";
export default {
  name: "ForgotPassPage",
  data() {
    return {
      change: new ChangeForgot(),
      loading: false,
      err: new ErrorForgot(),
      message: "",
      errMsg: "",
    };
  },
  methods: {
    changePassword() {
      this.loading = true;
      this.err = new ErrorForgot();
      const email = JSON.parse(sessionStorage.getItem("email_changePassword"));
      this.change.email = email.email;
      this.$store
        .dispatch("auth/changePassword", this.change)
        .then(
          (response) => {
            if (response) {
              this.$router.push("/login");
              alert("Thay đổi thành công!");
            } else if (response.StatusCode == 400) {
              this.$toast.error(response.Message);
              console.log(response);
              // this.message = response.Message;
            }
          },
          (error) => {
            if (error.response.data.Code) {
              this.message = error.response.data.Code;
            }
            let object_err = error.response.data;
            if (object_err) {
              this.err.errCode = object_err.Message;
              Object.keys(object_err).forEach((key) => {
                if (key.includes("ConfirmPassword")) {
                  this.err.errConfirmPassword = object_err[key][0];
                }
              });
            }
          }
        )
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
