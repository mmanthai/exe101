<template>
  <header class="bg-white p-2 border-b-2">
    <div class="wrap-header flex items-center justify-end flex-wrap">
      <div class="mr-5 flex float-right relative">
        <p class="
            w-5
            h-5
            p-2
            ml-3
            text-sm
            bg-red-600
            text-white
            font-semibold
            rounded-2xl
            inset-0
            right-2
            bottom-0
            absolute
            flex
            items-center
            justify-center
          ">
          2
        </p>
        <button @click="notifyToggle" class="mr-5 text-2xl text-gray-500">
          <Icon class="w-7 h-7" icon="clarity:bell-line" />
        </button>
        <transition name="fade">
          <div id="dropdownLarge" v-show="notify" class="
                  pb-2
                  px-1
                  block
                  absolute
                  right-24
                  mt-11
                  z-10
                  w-96
                  h-96
                  overflow-auto
                  border
                  dark:border-gray-700
                  bg-white
                  dark:bg-gray-800
                  rounded
                  divide-y
                  dark:divide-gray-700
                  divide-gray-100
                  shadow
            ">
            <div class="py-2">
              <span class="
                  flex
                  items-center
                  justify-between
                  px-4
                  mt-1
                  text-center text-sm text-gray-500
                  dark:text-gray-200
                  cursor-pointer
                  hover:text-gray-700
                  duration-200
                ">
                <h3 class="font-md text-md uppercase text-gray-400 cursor-default">
                  Thông Báo
                </h3>
                <h3 class="text-blue-500 text-sm">Đánh Dấu Tất Cả Đã Đọc</h3>
              </span>
            </div>
            <ul class="
                py-3
                text-sm text-gray-700
                dark:text-gray-200
                bg-red-50
                mb-1
              " aria-labelledby="dropdownSmallButton">
              <li>
                <span class="
                    py-2
                    px-4
                    0
                    hover:bg-blue-300 hover:text-white
                    cursor-pointer
                    flex
                    items-start
                    justify-start
                    relative
                    pl-11
                  ">
                  <span>
                    <Icon class="text-green-500 w-7 h-7 absolute top-6 left-4" icon="bi:check-circle-fill" />
                  </span>
                  <span class="ml-4 flex flex-col items-start justify-start pr-11">
                    <h3 class="font-semibold text-green-500 mb-1">
                      Lệnh Đặt Sân Mới
                    </h3>
                    <p class="text-sm">
                      <span class="font-semibold">Sân 2</span> <span class="font-semibold">, Ca 1</span> đã được đặt bởi
                      <span class="font-semibold">sonnct</span> vào lúc
                      <span class="font-semibold">19h30</span> ngày
                      <span class="font-semibold">26/6/2022</span>
                    </p>
                  </span>
                </span>
              </li>
            </ul>
            <ul class="py-3 text-sm text-gray-700 dark:text-gray-200 bg-red-50" aria-labelledby="dropdownSmallButton">
              <li>
                <span @click="routerLink('/owner-profile')" class="
                    py-2
                    px-4
                    0
                    hover:bg-blue-300 hover:text-white
                    cursor-pointer
                    flex
                    items-start
                    justify-start
                     relative
                    pl-11
                  ">
                  <span>
                    <Icon class="text-green-500 w-7 h-7 absolute top-6 left-4" icon="bi:check-circle-fill" />
                  </span>
                  <span class="ml-4 flex flex-col items-start justify-start pr-11">
                    <h3 class="font-semibold text-green-500 mb-1">
                      Lệnh Đặt Sân Mới
                    </h3>
                    <p class="text-sm">
                      <span class="font-semibold">Sân 2</span> <span class="font-semibold">, Ca 1</span> đã được đặt bởi
                      <span class="font-semibold">sonnct</span> vào lúc
                      <span class="font-semibold">19h30</span> ngày
                      <span class="font-semibold">26/6/2022</span>
                    </p>
                  </span>
                </span>
              </li>
            </ul>
            <ul class="py-3 text-sm text-gray-700 dark:text-gray-200 bg-red-50" aria-labelledby="dropdownSmallButton">
              <li>
                <span @click="routerLink('/owner-profile')" class="
                    py-2
                    px-4
                    0
                    hover:bg-blue-300 hover:text-white
                    cursor-pointer
                    flex
                    items-start
                    justify-start
                     relative
                    pl-11
                  ">
                  <span>
                    <Icon class="text-green-500 w-7 h-7 absolute top-6 left-4" icon="bi:check-circle-fill" />
                  </span>
                  <span class="ml-4 flex flex-col items-start justify-start pr-11">
                    <h3 class="font-semibold text-green-500 mb-1">
                      Lệnh Đặt Sân Mới
                    </h3>
                    <p class="text-sm">
                      <span class="font-semibold">Sân 2</span> <span class="font-semibold">, Ca 1</span> đã được đặt bởi
                      <span class="font-semibold">sonnct</span> vào lúc
                      <span class="font-semibold">19h30</span> ngày
                      <span class="font-semibold">26/6/2022</span>
                    </p>
                  </span>
                </span>
              </li>
            </ul>
            <ul class="py-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
              <li>
                <span @click="routerLink('/owner-profile')" class="
                    py-2
                    px-4
                    0
                    hover:bg-blue-300 hover:text-white
                    cursor-pointer
                    flex
                    items-start
                    justify-start
                     relative
                    pl-11
                  ">
                  <span>
                    <Icon class="text-red-500 w-8 h-8 absolute top-6 left-4" icon="ic:baseline-cancel" />
                  </span>
                  <span class="ml-4 flex flex-col items-start justify-start pr-11">
                    <h3 class="font-semibold text-red-500 mb-1">
                      Lệnh Hủy Sân
                    </h3>
                    <p class="text-sm">
                      <span class="font-semibold">Sân 2</span> <span class="font-semibold">, Ca 1</span> đã được đặt bởi
                      <span class="font-semibold">sonnct</span> vào lúc
                      <span class="font-semibold">19h30</span> ngày
                      <span class="font-semibold">26/6/2022</span>
                    </p>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </transition>
        <button @click="menuToggle" @blur="menuToggleBlur">
          <div class="
              user-avatar
              flex
              hover:bg-gray-100
              dark:hover:bg-gray-700
              p-1
              cursor-pointer
              rounded-md
            ">
            <img :src="currentUser.Avatar" class="
                rounded-full
                mr-4
                w-10
                h-10
                object-cover
                p-1
                ring-1 ring-gray-300
                dark:ring-gray-500
              " alt="" />
            <span class="text-md mt-4 text-gray-300">
              <Icon icon="bi:caret-down-fill" />
            </span>
          </div>
        </button>

        <transition name="fade">
          <div id="dropdownSmall" v-show="menu" class="
              block
              absolute
              right-0
              mt-12
              z-10
              w-44
              border
              dark:border-gray-700
              bg-white
              dark:bg-gray-800
              rounded
              divide-y
              dark:divide-gray-700
              divide-gray-100
              shadow
            ">
            <div class="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">
              <div>Tài khoản đăng nhập</div>
              <div class="font-bold truncate">
                {{ this.currentUser.UserName }}
              </div>
            </div>
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
              <li>
                <span @click="routerLink('/owner-profile')" class="
                    block
                    py-2
                    px-4
                    0
                    hover:bg-blue-300 hover:text-white
                    cursor-pointer
                  ">Thông Tin Tài Khoản</span>
              </li>
            </ul>
            <div class="py-1">
              <span @click="routerLink('/logout')" class="
                  block
                  py-2
                  px-4
                  text-sm text-gray-700
                  dark:text-gray-200
                  hover:bg-blue-300 hover:text-white
                  cursor-pointer
                ">Đăng xuất</span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
import { Icon } from "@iconify/vue";
import TokenService from '@/services/token/token.service.js'
export default {
  components: {
    Icon,
  },
  mounted() {
    this.currentUser = TokenService.getUser().Token;
  },
  props: {
    toggleModal: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      menu: false,
      notify: false,
      currentUser: "",
    };
  },
  methods: {
    menuToggle: function () {
      this.menu = !this.menu;

      if (this.notify) {
        this.notify = !this.notify;
      }
    },
    notifyToggle: function () {
      this.notify = !this.notify;

      if (this.menu) {
        this.menu = !this.menu;
      }
    },
    routerLink(path) {
      if (path.includes("logout")) {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      } else {
        this.$router.push(path);
      }
    },
  },
  watch: {
    toggleModal() {
      if (this.notify) {
        this.notify = false;
      }

      if (this.menu) {
        this.menu = false;
      }
    }
  }
};
</script>
