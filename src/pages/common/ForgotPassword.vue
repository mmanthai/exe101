<template>
  <main>
    <section class="absolute w-full h-full">
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-1/3 px-4">
            <div class="w-60 h-60 mx-auto mb-6">
              <img class="object-cover" src="@/assets/img/forgot.png" />
            </div>
            <div class="relative flex flex-col w-full">
              <h2 class="text-center font-bold text-[25px] mb-6">
                Nhập Email Để Đổi Mật Khẩu
              </h2>
              <form @submit.prevent="forgotPassword">
                <div class="relative w-full mb-8">
                  <div>
                    <input
                      placeholder="Email"
                      type="email"
                      class="bg-[#F0EEEE] w-full border-0 px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring mb-8"
                      required
                      v-model="forgot.email"
                      :class="
                        errEmail && !message
                          ? 'border-1 border-red-500'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="errEmail"
                      class="error-text text-center text-red-700 mt-2 mb-2"
                      role="alert"
                    >
                      * {{ errEmail }}
                    </p>
                  </div>

                  <div
                    v-if="message"
                    class="error-text text-center text-red-700 mt-2 mb-2"
                    role="alert"
                  >
                    {{ message }}
                  </div>

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
import Forgot from "@/models/Forgot.js";
export default {
  name: "ForgotPassPage",

  data() {
    return {
      forgot: new Forgot(),
      loading: false,
      message: "",
      errEmail: "",
    };
  },
  methods: {
    forgotPassword() {
      this.loading = true;
      this.$store
        .dispatch("auth/forgotPassword", this.forgot.email)
        .then(
          (response) => {
            if (response) {
              this.$router.push("/changeForgotPassword");
              sessionStorage.setItem(
                "email_changePassword",
                JSON.stringify(this.forgot)
              );
            } else if (response.StatusCode === 400) {
              this.message = response.Message;
            }
          },
          (error) => {
            let object_err = error.response.data;
            if (object_err) {
              this.errEmail = object_err.Message;
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
