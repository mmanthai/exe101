<template>
  <div
    class="container-fluid fixed z-10 w-full mx-auto h-[14.8%] mb-8 border-1 pl-1 md:mb-0 shadow"
  >
    <div class="h-full w-full px-4 grid grid-cols-2 bg-white">
      <div class="wrap-header flex items-center justify-between flex-wrap">
        <div class="mr-5 flex justify-between relative mt-2 items-center pb-2">
          <div class="flex flex-col items-center">
            <p class="text-xl font-medium leading-4 pt-2">
              Tennis<span class="text-[#30AF82]">Today</span>
            </p>
            <img
              src="@/assets/img/logo.png"
              class="w-20 h-20 object-contain"
              @click.prevent="backToHome"
            />
          </div>
          <div class="mt-4 mx-4 w-full">
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 left-0 flex items-center cursor-pointer pl-3 pointer-events-none"
              >
                <Icon
                  icon="material-symbols:search"
                  class="w-6 h-6 text-gray-600"
                />
              </div>
              <input
                @keyup.enter="searchVendor"
                type="text"
                class="w-[450px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
                placeholder="Tìm kiếm cửa hàng..."
                v-model="searchValue"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-header flex items-center justify-end flex-wrap mt-3">
        <div class="mr-5 flex float-right relative">
          <div class="mr-5 flex float-right relative">
            <p
              class="w-5 h-5 p-2 ml-3 text-sm bg-red-600 text-white font-semibold rounded-2xl inset-0 right-2 bottom-0 absolute flex items-center justify-center"
            >
              2
            </p>
            <button
              @click="cartToggle"
              @blur="cartToggleBlur"
              class="mr-5 text-2xl text-gray-500 mt-1"
            >
              <Icon
                class="w-7 h-7"
                icon="material-symbols:shopping-cart-outline"
              />
            </button>

            <transition name="fade">
              <div
                id="dropdownLarge"
                v-show="cart"
                class="pb-2 px-1 block absolute right-24 mt-11 z-10 w-96 h-96 overflow-auto border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow"
              >
                <div class="py-2">
                  <span
                    class="flex items-center justify-between px-4 mt-1 text-center text-sm text-gray-500 dark:text-gray-200 cursor-pointer hover:text-gray-700 duration-200"
                  >
                    <h3
                      class="font-md text-md uppercase text-gray-400 cursor-default"
                    >
                      Thông Báo
                    </h3>
                    <h3 class="text-blue-500 text-sm">
                      Đánh Dấu Tất Cả Đã Đọc
                    </h3>
                  </span>
                </div>
                <ul
                  v-for="notify in notify_list"
                  :key="notify.id"
                  @click="showApproveDetail(1)"
                  class="py-2 text-sm text-gray-700 dark:text-gray-200 mb-1"
                  :class="notify.status === 0 ? 'bg-red-50' : ''"
                  aria-labelledby="dropdownSmallButton"
                >
                  <li>
                    <span
                      class="py-2 px-4 0 hover:bg-blue-300 hover:text-white cursor-pointer flex items-start justify-start relative pl-11"
                    >
                      <span>
                        <Icon
                          class="text-green-500 w-7 h-7 absolute top-6 left-4"
                          :icon="notify.icon"
                        />
                      </span>
                      <span
                        class="ml-4 flex flex-col items-start justify-start pr-11"
                      >
                        <h3 class="font-semibold text-green-500 mb-1">
                          {{ notify.title }}
                        </h3>
                        <p class="text-sm">
                          <span class="font-semibold">{{
                            notify.username
                          }}</span>
                          đã gửi yêu cầu duyệt sân vào lúc
                          <span class="font-semibold">{{ notify.time }}</span>
                          ngày
                          <span class="font-semibold">{{ notify.date }}</span>
                        </p>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </transition>

            <div class="mr-5 flex float-right relative">
              <p
                class="w-5 h-5 p-2 ml-3 text-sm bg-red-600 text-white font-semibold rounded-2xl inset-0 right-2 bottom-0 absolute flex items-center justify-center"
              >
                2
              </p>
              <button
                @click="notifyToggle"
                @blur="notifyToggleBlur"
                class="mr-5 text-2xl text-gray-500 mt-1"
              >
                <Icon class="w-7 h-7" icon="bi:bell" />
              </button>

              <transition name="fade">
                <div
                  id="dropdownLarge"
                  v-show="notify"
                  class="pb-2 px-1 block absolute right-24 mt-11 z-10 w-96 h-96 overflow-auto border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow"
                >
                  <div class="py-2">
                    <span
                      class="flex items-center justify-between px-4 mt-1 text-center text-sm text-gray-500 dark:text-gray-200 cursor-pointer hover:text-gray-700 duration-200"
                    >
                      <h3
                        class="font-md text-md uppercase text-gray-400 cursor-default"
                      >
                        Thông Báo
                      </h3>
                      <h3 class="text-blue-500 text-sm">
                        Đánh Dấu Tất Cả Đã Đọc
                      </h3>
                    </span>
                  </div>
                  <ul
                    v-for="notify in notify_list"
                    :key="notify.id"
                    @click="showApproveDetail(1)"
                    class="py-2 text-sm text-gray-700 dark:text-gray-200 mb-1"
                    :class="notify.status === 0 ? 'bg-red-50' : ''"
                    aria-labelledby="dropdownSmallButton"
                  >
                    <li>
                      <span
                        class="py-2 px-4 0 hover:bg-blue-300 hover:text-white cursor-pointer flex items-start justify-start relative pl-11"
                      >
                        <span>
                          <Icon
                            class="text-green-500 w-7 h-7 absolute top-6 left-4"
                            :icon="notify.icon"
                          />
                        </span>
                        <span
                          class="ml-4 flex flex-col items-start justify-start pr-11"
                        >
                          <h3 class="font-semibold text-green-500 mb-1">
                            {{ notify.title }}
                          </h3>
                          <p class="text-sm">
                            <span class="font-semibold">{{
                              notify.username
                            }}</span>
                            đã gửi yêu cầu duyệt sân vào lúc
                            <span class="font-semibold">{{ notify.time }}</span>
                            ngày
                            <span class="font-semibold">{{ notify.date }}</span>
                          </p>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
            <button @click="menuToggle" @blur="menuToggleBlur">
              <div
                class="user-avatar flex hover:bg-gray-100 dark:hover:bg-gray-700 p-1 cursor-pointer rounded-md"
              >
                <img
                  :src="
                    this.avatar
                      ? this.avatar
                      : 'https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg'
                  "
                  class="rounded-full mr-4 w-10 h-10 p-1 ring-1 ring-gray-300 dark:ring-gray-500"
                  alt=""
                />
                <span class="text-md mt-4 text-gray-300">
                  <Icon icon="bi:caret-down-fill" />
                </span>
              </div>
            </button>

            <transition name="fade">
              <div
                id="dropdownSmall"
                v-show="menu"
                class="block absolute right-0 mt-14 z-10 w-44 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow"
              >
                <div class="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">
                  <div>Tài khoản đăng nhập</div>
                  <div class="font-bold truncate">
                    {{ this.currentUser.UserName }}
                  </div>
                </div>
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownSmallButton"
                >
                  <li>
                    <span
                      @click="routerLink('/profile')"
                      class="block py-2 px-4 0 hover:bg-blue-500 hover:text-white cursor-pointer"
                      >Thông Tin Tài Khoản</span
                    >
                  </li>
                  <li>
                    <span
                      @click="routerLink('/history')"
                      class="block py-2 px-4 0 hover:bg-blue-500 hover:text-white cursor-pointer"
                      >Lịch Sử Đặt Sân</span
                    >
                  </li>
                </ul>
                <div class="py-1">
                  <span
                    @click="routerLink('/logout')"
                    class="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer"
                    >Đăng xuất</span
                  >
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import VendorService from "@/services/vendor.service.js";
export default {
  components: {
    Icon,
  },
  name: "CustomerHeader",
  props: {
    toggleModal: {
      type: Number,
      require: false,
    },
    search: {
      type: String,
      require: false,
    },
  },
  mounted() {
    this.currentUser = this.$store.getters["auth/getUser"].Token;
    this.avatar = JSON.parse(localStorage.getItem("user")).Token.Avatar;
    console.log(this.avatar);
    this.searchValue = this.$route.params.search;
    this.userAvatar = this.$store.getters["auth/getUser"].Token.Avatar;
  },
  data() {
    return {
      cart: false,
      menu: false,
      searchValue: "",
      currentUser: "",
      userAvatar: "",
      notify: false,
      avatar: "",
      notify_list: [
        {
          id: 1,
          icon: "akar-icons:chat-approve",
          title: "Yêu Cầu Duyệt Chủ Sân",
          username: "abc",
          date: "26/06/2022",
          time: "19h30",
          status: 0,
        },
        {
          id: 2,
          icon: "akar-icons:chat-approve",
          title: "Yêu Cầu Duyệt Chủ Sân",
          username: "abc",
          date: "26/06/2022",
          time: "19h30",
          status: 0,
        },
        {
          id: 4,
          icon: "akar-icons:chat-approve",
          title: "Yêu Cầu Duyệt Chủ Sân",
          username: "abc",
          date: "26/06/2022",
          time: "19h30",
          status: 0,
        },
        {
          id: 5,
          icon: "akar-icons:chat-approve",
          title: "Yêu Cầu Duyệt Chủ Sân",
          username: "abc",
          date: "26/06/2022",
          time: "19h30",
          status: 1,
        },
        {
          id: 6,
          icon: "akar-icons:chat-approve",
          title: "Yêu Cầu Duyệt Chủ Sân",
          username: "abc",
          date: "26/06/2022",
          time: "19h30",
          status: 1,
        },
        {
          id: 7,
          icon: "akar-icons:chat-approve",
          title: "Yêu Cầu Duyệt Chủ Sân",
          username: "abc",
          date: "26/06/2022",
          time: "19h30",
          status: 1,
        },
      ],
    };
  },
  methods: {
    backToHome() {
      this.$router.push("/home");
    },
    routerLink(path) {
      if (path.includes("logout")) {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      } else {
        this.$router.push(path);
      }
    },
    // menuToggle: function () {
    //   console.log(this.userAvatar);
    //   this.menu = !this.menu;
    //   if (this.notify) {
    //     this.notify = !this.notify;
    //   }

    //   console.log(`click menu: ${this.menu} - notify: ${this.notify}`);
    // },
    menuToggle: function () {
      this.menu = !this.menu;

      if (this.notify) {
        this.notify = !this.notify;
      }
    },
    // notifyToggle: function () {
    //   this.notify = !this.notify;
    //   if (this.menu) {
    //     this.menu = !this.menu;
    //   }
    //   console.log(`click notify: ${this.notify} - menu: ${this.menu}`);
    // },
    notifyToggle: function () {
      this.notify = !this.notify;
      if (this.menu) {
        this.menu = !this.menu;
      }
    },
    cartToggle: function () {
      this.cart = !this.cart;
      if (this.notify) {
        this.notify = !this.notify;
      }
      if (this.menu) {
        this.menu = !this.menu;
      }
    },
    showApproveDetail(id) {
      this.$router.push(`/notify?notifyId=${id}`);
    },
    searchVendor() {
      if (this.searchValue !== null && this.searchValue.trim().length > 0) {
        this.$router.push({
          name: "search-vendor-page",
          params: {
            search: this.searchValue,
          },
        });
        // let search_params = {
        //   pageSize: 5,
        //   queryString: this.searchValue,
        // };
        // console.log(search_params);
        // VendorService.searchVendor(search_params).then((res) => {
        //   if (res) {
        //     console.log(res.data.Value);
        //     // sessionStorage.setItem(
        //     //   "search_result",
        //     //   JSON.stringify(res.data.Value)
        //     // );
        //     sessionStorage.setItem(
        //       "search_result",
        //       JSON.stringify(res.data.Value)
        //     );
        //     sessionStorage.setItem(
        //       "count_search",
        //       JSON.stringify(res.data.length)
        //     );

        //     this.$router.push({
        //       name: "search-vendor-page",
        //       params: {
        //         search: this.searchValue,
        //       },
        //     });
        //   } else {
        //     console.log(err);
        //   }
        // });
      }
    },
  },
  watch: {
    toggleModal() {
      if (this.notify || this.menu) {
        this.notify = false;
        this.menu = false;
      }
    },
    $route() {
      if (this.$route.params.search.length > 0) {
        this.searchValue = this.$route.params.search;
      }
    },
  },
};
</script>

<style scoped></style>
