<template>
  <keep-alive>
    <div class="flex">
      <div
        class="fixed inset-0 lef-0 w-60 h-full overflow-y-hidden transition duration-300 transform shadow lg:translate-x-0 lg:inset-0"
      >
        <div class="flex items-center justify-start px-4">
          <div class="flex content-center items-center justify-center">
            <div class="flex flex-col items-center py-4">
              <p class="text-xl font-medium leading-4">
                Tennis<span class="text-[#30AF82]">Today</span>
              </p>
              <p class="text-normal text-[12px] text-[#9B86A8]">
                indulge your passion
              </p>
            </div>
          </div>
        </div>

        <div class="container mx-auto mt-2 h-[72%]">
          <div class="flex items-center px-6 py-2 duration-200 border-1-4">
            <img
              :src="currentUser.Avatar"
              class="w-9 h-9 rounded-3xl object-cover"
            />
            <div class="flex flex-col ml-2">
              <span>
                <p class="text-md font-semibold">{{ currentUser.FullName }}</p>
              </span>
              <span>
                <p class="text-xs">Chủ Sân</p>
              </span>
            </div>
          </div>

          <nav class="mt-6 h-full">
            <!--Active-->
            <div
              v-if="checkIsActive('dashboard')"
              class="w-full bg-[#FEF5F8] flex"
            >
              <div class="w-1 bg-[#EF3270]"></div>

              <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                <Icon
                  class="w-7 h-7 text-[#ACACAC]"
                  icon="ant-design:home-twotone"
                />

                <span class="mx-2 text-[14px] text-[#434141] font-bold pt-1"
                  >Trang Chủ</span
                >
              </div>
            </div>

            <!--Not Active-->

            <div
              v-else
              @click="setCurrentActive('dashboard')"
              class="mt-5 flex items-center px-6 py-2 duration-200 border-1-4 text-[#C2CFE0] hover:bg-red-50 cursor-pointer"
            >
              <Icon
                class="w-7 h-7 text-[#ACACAC]"
                icon="ant-design:home-filled"
              />
              <span class="mx-2 text-[#334D6E] text-[14px] font-medium pt-1"
                >Trang Chủ</span
              >
            </div>

            <!--Active-->

            <div
              v-if="checkIsActive('StoreProfile')"
              class="w-full bg-[#FEF5F8] flex mt-5"
            >
              <div class="w-1 bg-[#EF3270]"></div>

              <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                <Icon
                  class="w-7 h-7 text-[#ACACAC]"
                  icon="ant-design:appstore-twotone"
                />

                <span class="mx-2 text-[14px] text-[#434141] font-bold pt-1"
                  >Thông Tin Cửa Hàng</span
                >
              </div>
            </div>

            <!--Not Active-->
            <div
              v-if="!checkIsActive('StoreProfile')"
              @click="setCurrentActive('StoreProfile')"
              class="mt-5 flex items-center px-6 py-2 duration-200 border-1-4 text-[#C2CFE0] hover:bg-red-50 cursor-pointer"
            >
              <Icon
                class="w-7 h-7 text-[#ACACAC]"
                icon="ant-design:appstore-filled"
              />
              <span class="mx-2 text-[#334D6E] text-[14px] font-medium pt-1"
                >Thông Tin Cửa Hàng</span
              >
            </div>

            <div
              v-if="checkIsActive('SlotManager')"
              class="w-full bg-[#FEF5F8] flex mt-5"
            >
              <div class="w-1 bg-[#EF3270]"></div>

              <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                <Icon
                  class="w-7 h-7 text-[#ACACAC]"
                  icon="mdi:account-clock-outline"
                />
                <span class="mx-2 text-[14px] text-[#434141] font-bold"
                  >Quản Lý Giờ Thuê</span
                >
              </div>
            </div>

            <!---->
            <div
              v-else
              @click="setCurrentActive('SlotManager')"
              class="mt-5 flex items-center px-6 py-2 duration-200 border-1-4 text-[#C2CFE0] hover:bg-red-50 cursor-pointer"
            >
              <Icon class="w-7 h-7 text-[#ACACAC]" icon="mdi:account-clock" />
              <span class="mx-2 text-[#334D6E] text-[14px] font-medium"
                >Quản Lý Giờ Thuê</span
              >
            </div>

            <div
              v-if="checkIsActive('YardManager')"
              class="w-full bg-[#FEF5F8] flex mt-5"
            >
              <div class="w-1 bg-[#EF3270]"></div>

              <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                <Icon
                  class="w-7 h-7 text-[#ACACAC]"
                  icon="ph:tennis-ball-light"
                />

                <span class="mx-2 text-[14px] text-[#434141] font-bold"
                  >Quản Lý Sân</span
                >
              </div>
            </div>

            <!---->
            <div
              v-else
              @click="setCurrentActive('YardManager')"
              class="mt-5 flex items-center px-6 py-2 duration-200 border-1-4 text-[#C2CFE0] hover:bg-red-50 cursor-pointer"
            >
              <Icon class="w-7 h-7 text-[#ACACAC]" icon="ph:tennis-ball-fill" />

              <span class="mx-2 text-[#334D6E] text-[14px] font-medium"
                >Quản Lý Sân</span
              >
            </div>

            <!--Active-->
            <div
              v-if="checkIsActive('BookingManager')"
              class="w-full bg-[#FEF5F8] flex mt-5"
            >
              <div class="w-1 bg-[#EF3270]"></div>

              <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                <Icon
                  class="w-7 h-7 text-[#ACACAC]"
                  icon="fluent:calendar-settings-20-regular"
                />

                <span class="mx-2 text-[14px] text-[#434141] font-bold"
                  >Quản Lý Đặt Sân</span
                >
              </div>
            </div>

            <!---->
            <div
              v-else
              @click="setCurrentActive('BookingManager')"
              class="mt-5 flex items-center px-6 py-2 duration-200 border-1-4 text-[#C2CFE0] hover:bg-red-50 cursor-pointer"
            >
              <Icon
                class="w-7 h-7 text-[#ACACAC]"
                icon="fluent:calendar-settings-20-filled"
              />
              <span class="mx-2 text-[#334D6E] text-[14px] font-medium"
                >Quản Lý Đặt Sân</span
              >
            </div>

            <!--Active-->
            <!-- <div
                v-if="checkIsActive('bookingHistory')"
                class="w-full bg-[#FEF5F8] flex mt-5"
              >
                <div class="w-1 bg-[#EF3270]"></div>
  
                <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                  <font-awesome-icon
                    class="w-6 h-6 text-[#ACACAC]"
                    icon="clock-rotate-left"
                  />
  
                  <span class="mx-2 text-[14px] text-[#434141] font-bold"
                    >Lịch Sử Đặt Sân</span
                  >
                </div>
              </div> -->

            <!---->
            <!-- <div
                v-else
                @click="setCurrentActive('bookingHistory')"
                class="
                  mt-5
                  flex
                  items-center
                  px-6
                  py-2
                  duration-200
                  border-1-4
                  text-[#C2CFE0]
                  hover:bg-red-50
                  cursor-pointer
                "
              >
                <font-awesome-icon
                  class="w-6 h-6 text-[#ACACAC]"
                  icon="clock-rotate-left"
                />
                <span class="mx-2 text-[#334D6E] text-[14px] font-medium"
                  >Lịch Sử Đặt Sân</span
                >
              </div> -->

            <!--Active-->
            <div
              v-if="checkIsActive('PromotionManager')"
              class="w-full bg-[#FEF5F8] flex mt-5"
            >
              <div class="w-1 bg-[#EF3270]"></div>

              <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                <Icon
                  class="w-7 h-7 text-[#ACACAC]"
                  icon="mdi:voucher-outline"
                />

                <span class="mx-2 text-[14px] text-[#434141] font-bold"
                  >Quản Lý Khuyến Mãi</span
                >
              </div>
            </div>

            <!---->
            <div
              v-else
              @click="setCurrentActive('PromotionManager')"
              class="mt-5 flex items-center px-6 py-2 duration-200 border-1-4 text-[#C2CFE0] hover:bg-red-50 cursor-pointer"
            >
              <Icon class="w-7 h-7 text-[#ACACAC]" icon="mdi:voucher" />
              <span class="mx-2 text-[#334D6E] text-[14px] font-medium"
                >Quản Lý Khuyến Mãi</span
              >
            </div>

            <!--logout-->
          </nav>
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
import { Icon } from "@iconify/vue";
import TokenService from "@/services/token/token.service";
export default {
  components: {
    Icon,
  },
  created() {
    this.currentUser = TokenService.getUser().Token;
  },
  data() {
    return {
      isActive: "dashboard",
      isSelectedTab: "",
      currentUser: "",
    };
  },
  methods: {
    setCurrentActive(ele) {
      this.isActive = ele;
      this.$emit("changeTab", ele);
    },
    checkIsActive(ele) {
      if (this.isActive === ele) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
