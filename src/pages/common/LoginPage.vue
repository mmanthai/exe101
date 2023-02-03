<template>
  <main>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <section class="absolute w-full h-full">
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-1/3 px-4">
            <div class="w-60 h-60 mx-auto mb-6">
              <img class="object-cover" src="@/assets/img/logo.png" />
            </div>
            <div class="relative flex flex-col w-full">
              <h2 class="text-center font-bold text-[25px] mb-6">Đăng Nhập</h2>
              <form @submit.prevent="handleLogin">
                <div class="relative w-full mb-8">
                  <div>
                    <input
                      placeholder="Email"
                      type="email"
                      class="bg-[#F0EEEE] w-full border-0 px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring mb-8"
                      required
                      v-model="user.username"
                    />
                  </div>
                  <div class="flex flex-col justify-start items-start">
                    <input
                      placeholder="Mật khẩu"
                      type="password"
                      class="bg-[#F0EEEE] w-full border-0 px-3 py-3 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring mb-8"
                      required
                      v-model="user.password"
                    />
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
                    Đăng Nhập
                  </button-component>
                </div>
              </form>
              <div class="relative mt-2 w-full">
                <p
                  class="text-center text-gray-400 hover:text-gray-500 duration-200"
                >
                  <router-link to="/forgotPassword" class="no-underline"
                    >Quên mật khẩu?</router-link
                  >
                </p>

                <p
                  class="text-center text-gray-400 hover:text-gray-500 duration-200"
                >
                  <router-link to="/register" class="no-underline"
                    >Chưa có tài khoản? Đăng ký ngay</router-link
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
import { mapGetters } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      user: new User(),
      loading: false,
      message: "",
    };
  },
  computed: {
    ...mapGetters("auth", ["getStatusLoggedIn"]), // mapgetter để lẩy các hàm getter trong auth module, lấy hàm gì thì copy cái tên hàm bỏ vào mảng
    loggedIn() {
      return this.getStatusLoggedIn;
    },
  },
  created() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      if (!this.loggedIn) {
        this.$router.push("/login");
      } else {
        let roleID = user.Token.RoleIds[0];
        if (roleID === 2) {
          this.$router.push("/dashboard");
        } else if (roleID === 4) {
          this.$router.push("/vendor");
        } else if (roleID === 5) {
          this.$router.push("/home");
        }
      }
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$store.dispatch("auth/login", this.user).then((response) => {
        if (response.StatusCode === 200) {
          let RoleID = response.Token.RoleIds[0];
          if (RoleID === 2) {
            //   // role 2 : system , 4: vendor, 5 : customer
            this.$router.push("/dashboard");
          } else if (RoleID === 4) {
            this.$router.push("/vendor");
          } else if (RoleID === 5) {
            this.$router.push("/home");
          }
          this.loading = false;
        } else {
          this.message = response.Message;
          this.loading = false;
        }
      });
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
