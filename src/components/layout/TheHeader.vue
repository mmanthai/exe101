<template>
  <div class="container mx-auto h-[14.8%] mb-8 border-1 pl-1 md:mb-0">
    <div class="h-full px-4 flex bg-white items-center justify-end">
      <div class="wrap-header flex items-center justify-end flex-wrap">
        <div class="mr-5 flex float-right relative">
          <div class="mr-5 flex float-right relative">
            <p
              class="w-5 h-5 p-2 ml-3 text-sm bg-red-600 text-white font-semibold rounded-2xl inset-0 right-2 bottom-0 absolute flex items-center justify-center">
              2
            </p>
            <button @click="notifyToggle" @blur="notifyToggleBlur" class="mr-5 text-2xl text-gray-500 mt-1">
              <Icon class="w-7 h-7" icon="clarity:bell-line" />
            </button>
            <transition name="fade">
              <div id="dropdownLarge" v-show="notify"
                class="pb-2 px-1 block absolute right-24 mt-11 z-10 w-96 h-96 overflow-auto border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow">
                <div class="py-2">
                  <span
                    class="flex items-center justify-between px-4 mt-1 text-center text-sm text-gray-500 dark:text-gray-200 cursor-pointer hover:text-gray-700 duration-200">
                    <h3 class="font-md text-md uppercase text-gray-400 cursor-default">
                      Thông Báo
                    </h3>
                    <h3 class="text-blue-500 text-sm">
                      Đánh Dấu Tất Cả Đã Đọc
                    </h3>
                  </span>
                </div>
                <ul v-for="notify in notify_list" :key="notify.id" @click="showApproveDetail(1)"
                  class="py-2 text-sm text-gray-700 dark:text-gray-200 mb-1"
                  :class="notify.status === 0 ? 'bg-red-50' : ''" aria-labelledby="dropdownSmallButton">
                  <li>
                    <span
                      class="py-2 px-4 0 hover:bg-blue-300 hover:text-white cursor-pointer flex items-start justify-start relative pl-11">
                      <span>
                        <Icon class="text-green-500 w-7 h-7 absolute top-6 left-4" :icon="notify.icon" />
                      </span>
                      <span class="ml-4 flex flex-col items-start justify-start pr-11">
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
            <button @click="menuToggle" @blur="menuToggleBlur">
              <div class="user-avatar flex hover:bg-gray-100 dark:hover:bg-gray-700 p-1 cursor-pointer rounded-md">
                <img src="@/assets/img/admin.png"
                  class="rounded-full mr-4 w-10 h-10 p-1 ring-1 ring-gray-300 dark:ring-gray-500" alt="" />
                <span class="text-md mt-4 text-gray-300">
                  <Icon icon="bi:caret-down-fill" />
                </span>
              </div>
            </button>

            <transition name="fade">
              <div id="dropdownSmall" v-show="menu"
                class="block absolute right-0 mt-12 z-10 w-44 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow">
                <div class="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">
                  <div>Tài khoản đăng nhập</div>
                  <div class="font-bold truncate">
                    {{ this.currentUser.UserName }}
                  </div>
                </div>
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSmallButton">
                  <li>
                    <span @click="routerLink('/admin-profile')"
                      class="block py-2 px-4 0 hover:bg-blue-500 hover:text-white cursor-pointer">Thông Tin Tài
                      Khoản</span>
                  </li>
                </ul>
                <div class="py-1">
                  <span @click="routerLink('/logout')"
                    class="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer">Đăng
                    xuất</span>
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
export default {
  components: {
    Icon,
  },
  name: "TheHeader",
  props: {
    toggleModal: {
      type: Number,
      require: false,
    },
  },
  mounted() {
    this.currentUser = this.$store.getters["auth/getUser"].Token;
  },
  data() {
    return {
      menu: false,
      currentUser: "",
      notify: false,
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
    EmitSearchValue() {
      let searchInput = document.getElementById("inputSearch");
      this.$emit("search", searchInput.value);
    },
    routerLink(path) {
      if (path.includes("logout")) {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      } else {
        this.$router.push(path);
      }
    },
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
    showApproveDetail(id) {
      this.$router.push(`/notify?notifyId=${id}`);
    },
  },
  watch: {
    toggleModal() {
      if (this.notify || this.menu) {
        this.notify = false;
        this.menu = false;
      }
    },
  },
};
</script>

<style scoped>

</style>
