<template>
  <main>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <section class="absolute w-full h-full">
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center mt-1 justify-center h-full">
          <div class="w-full lg:w-1/2 px-4">
            <div class="w-60 h-60 mx-auto mb-4">
              <img class="object-cover" src="@/assets/img/logo.png" />
            </div>
            <div class="relative flex flex-col w-full">
              <h2 class="text-center font-bold text-[25px] mb-4">Đăng Ký</h2>
              <form @submit.prevent="handleRegister">
                <div class="relative w-full mb-8 grid grid-cols-2 gap-10">
                  <!-- <div class="relative">
                    <p
                      v-if="!user.username"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Tên tài khoản"
                      type="text"
                      class="bg-[#F0EEEE] w-full px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                      required
                      v-model="this.user.username"
                      :class="
                        this.err.errUserName && !msgSuccess
                          ? 'border-1 border-red-500'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="this.err.errUserName"
                      class="absolute top-[138%] left-0 error-text text-center text-red-700"
                      role="alert"
                    >
                      * {{ this.err.errUserName }}
                    </p>
                  </div> -->

                  <div class="relative col-span-2">
                    <p
                      v-if="!this.user.email"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Email"
                      type="email"
                      required
                      class="bg-[#F0EEEE] w-full px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 pr-8"
                      v-model="this.user.email"
                      :class="
                        this.err.errEmail && !msgSuccess
                          ? ' border-1 border-red-500 mb-2'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="this.err.errEmail"
                      class="absolute top-[138%] left-0 error-text text-center text-red-700"
                      role="alert"
                    >
                      * {{ this.err.errEmail }}
                    </p>
                  </div>
                  <div class="relative">
                    <p
                      v-if="!this.user.fullName"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Họ Tên"
                      type="text"
                      class="bg-[#F0EEEE] w-full px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2"
                      required
                      v-model.trim="this.user.fullName"
                      :class="
                        err.errFullName && !msgSuccess
                          ? 'border-1 border-red-500'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="this.err.errFullName"
                      class="absolute top-[138%] left-0 error-text text-center text-red-700"
                      role="alert"
                    >
                      * {{ this.err.errFullName }}
                    </p>
                  </div>
                  <div class="relative">
                    <p
                      v-if="!this.user.phoneNumber"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Số điện thoại"
                      type="tel"
                      class="bg-[#F0EEEE] w-full px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50"
                      required
                      v-model.trim="this.user.phoneNumber"
                      :class="
                        this.err.errPhoneNumber && !msgSuccess
                          ? 'border-1 border-red-500 mb-2'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="this.err.errPhoneNumber"
                      class="absolute top-[138%] left-0 error-text text-center text-red-700"
                      role="alert"
                    >
                      * {{ this.err.errPhoneNumber }}
                    </p>
                  </div>
                  <div class="relative">
                    <p
                      v-if="!this.user.password"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Mật khẩu"
                      type="password"
                      class="bg-[#F0EEEE] w-full px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2"
                      required
                      v-model="this.user.password"
                      :class="
                        this.err.errPassword && !msgSuccess
                          ? ' border-1 border-red-500'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="this.err.errPassword"
                      class="absolute top-[138%] left-0 error-text text-center text-red-700"
                      role="alert"
                    >
                      * {{ this.err.errPassword }}
                    </p>
                  </div>
                  <div class="relative">
                    <p
                      v-if="!this.user.confirmPassword"
                      class="text-2xl text-red-500 absolute right-3 top-3"
                    >
                      *
                    </p>
                    <input
                      placeholder="Xác nhận mật khẩu"
                      type="password"
                      class="bg-[#F0EEEE] w-full px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2"
                      required
                      v-model="this.user.confirmPassword"
                      :class="
                        this.err.errConfirmPassword && !msgSuccess
                          ? 'border-1 border-red-500'
                          : 'border-0'
                      "
                    />
                    <p
                      v-if="this.err.errConfirmPassword"
                      class="absolute top-[138%] left-0 error-text text-center text-red-700"
                      role="alert"
                    >
                      * {{ this.err.errConfirmPassword }}
                    </p>
                  </div>
                </div>

                <div class="container">
                  <div>
                    <select
                      id="roleID"
                      name="roleID"
                      class="form-select form-control"
                    >
                      <option selected disabled value="-1">
                        Bạn muốn làm gì?
                      </option>
                      <option value="5">Tôi muốn đặt sân</option>
                      <option value="4">Tôi muốn cho thuê sân</option>
                    </select>
                  </div>
                </div>

                <p
                  v-if="!checkIsEntered"
                  class="text-red-500 text-right text-sm italic"
                >
                  Ghi chú: (*) Các trường bắt buộc nhập
                </p>
                <p
                  v-if="msgSuccess"
                  class="text-lg font-md error-text text-center text-red-700"
                  role="alert"
                >
                  {{ msgSuccess }}
                </p>

                <!-- <div class="mt-10">
                  <p
                    v-if="msgError"
                    class="text-lg font-md error-text text-center text-red-700"
                    role="alert"
                  >
                    {{ msgError }}
                  </p>
                </div> -->
                <button-component
                  class="font-medium uppercase text-white text-[16px] bg-blue-700 hover:bg-blue-800 active:bg-blue-900 mt-5"
                  type="submit"
                >
                  Đăng ký
                </button-component>
              </form>

              <div class="relative mt-2 w-full">
                <p
                  class="text-center text-gray-400 hover:text-gray-600 duration-200"
                >
                  <router-link to="/login" class="no-underline"
                    >Đã có tài khoản? Đăng nhập</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import User from "@/models/User";
export default {
  name: "LoginPage",

  data() {
    return {
      user: new User(),
      loading: false,
      err: new Error(),
      msgSuccess: "",
      msgError: "",
    };
  },
  mounted() {
    let msg = JSON.parse(sessionStorage.getItem("register_sucess"));
    if (msg) {
      this.msgSuccess = msg;
    }
  },
  computed: {
    checkIsEntered() {
      if (
        !this.user.username ||
        !this.user.fullName ||
        !this.user.password ||
        !this.user.confirmPassword ||
        !this.user.email ||
        !this.user.phoneNumber
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    // checkNull() {
    //   if (
    //     this.user.username.trim() === "" ||
    //     this.user.fullName.trim() === "" ||
    //     this.user.password.trim() === "" ||
    //     this.user.confirmPassword.trim() === "" ||
    //     this.user.email.trim() === "" ||
    //     this.user.phoneNumber.trim() === ""
    //   ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },

    handleRegister() {
      // sessionStorage.setItem("data_register", JSON.stringify(this.user));
      const roleValue = document.querySelector("#roleID").value;
      this.err = new Error();
      // this.loading = true;
      console.log(this.roleValue);
      if (roleValue === "-1") {
        this.$toast.open({
          message: "Bạn chưa chọn vai trò",
          type: "warning",
          position: "top-right",
        });
      } else {
        this.loading = true;
        this.user.clientId = roleValue;
        this.$store
          .dispatch("auth/register", this.user)
          .then(
            (res) => {
              if (res) {
                this.msgSuccess = "Đăng ký thành công !";
                sessionStorage.setItem(
                  "email_resgister",
                  JSON.stringify(this.user.email)
                );
                this.user = new User("", "", "", "", "", "", "");
                this.err = new Error();
                this.$router.push("/verify");
              }
            },
            (error) => {
              this.msgError = error.response.data;
              console.log(error);
              let object_err = error.response.data;
              console.log(object_err);
              Object.keys(object_err).forEach((key) => {
                if (key.includes("Username")) {
                  this.err.errUserName = object_err[key][0];
                  this.msgError = object_err[key][0];
                }

                if (key.includes("FullName")) {
                  this.err.errFullName = object_err[key][0];
                  this.msgError = object_err[key][0];
                }

                if (key.includes("Password")) {
                  this.err.errPassword = object_err[key][0];
                  this.msgError = object_err[key][0];
                }

                if (key.includes("ConfirmPassword")) {
                  this.err.errConfirmPassword = object_err[key][0];
                  this.msgError = object_err[key][0];
                }
                if (key.includes("Email")) {
                  this.err.errEmail = object_err[key][0];
                  this.msgError = object_err[key][0];
                }

                if (key.includes("PhoneNumber")) {
                  this.err.errPhoneNumber = object_err[key][0];
                  this.msgError = object_err[key][0];
                }
                // if (key.includes("ClientId")) {
                //   this.err.errPhoneNumber = object_err[key][0];
                //   this.msgError = object_err[key][0];
                // }
              });
              this.loading = false;
            }
          )
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style scoped>
.error-text {
  display: block;
  margin-top: -18px;
  margin-bottom: 10px;
}
</style>
