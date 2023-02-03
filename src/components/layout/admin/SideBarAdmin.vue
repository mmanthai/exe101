<template>
  <keep-alive>
    <div class="flex">
      <div
        class="fixed inset-0 lef-0 w-60 h-full overflow-y-hidden transition duration-300 transform shadow lg:translate-x-0 lg:inset-0">
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
          <div class="container mx-auto h-full">
            <div class="flex items-center justify-center mt-2">
              <img src="@/assets/img/admin.png" class="w-9 h-9 rounded-3xl" />
              <div class="flex flex-col ml-2">
                <span>
                  <p class="text-md font-semibold">Lam Trường</p>
                </span>
                <span>
                  <p class="text-xs">Admin</p>
                </span>
              </div>
            </div>

            <nav class="mt-6 h-full">
              <!--Active-->
              <div v-if="checkIsActive('ApproveManager')" class="w-full bg-[#FEF5F8] flex">
                <div class="w-1 bg-[#EF3270]"></div>

                <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                  <Icon class="w-7 h-7 text-[#ACACAC]" icon="akar-icons:chat-approve" />

                  <span class="mx-2 text-[14px] text-[#434141] font-bold pt-1">Phê Duyệt Chủ Sân</span>
                </div>
              </div>

              <!--Not Active-->

              <div v-else @click="setCurrentActive('ApproveManager')"
                class="mt-5 flex items-center px-6 py-2 duration-200 border-1-4 text-[#C2CFE0] hover:bg-red-50 cursor-pointer">
                <Icon class="w-8 h-8 text-[#ACACAC]" icon="akar-icons:chat-approve" />
                <span class="mx-2 text-[#334D6E] text-[14px] font-medium pt-1">Phê Duyệt Chủ Sân</span>
              </div>

              <!--Active-->

              <div v-if="checkIsActive('YardOwner')" class="w-full bg-[#FEF5F8] flex mt-5">
                <div class="w-1 bg-[#EF3270]"></div>

                <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                  <Icon class="w-8 h-8 text-[#ACACAC]" icon="bxs:user-check" />

                  <span class="mx-2 text-[14px] text-[#434141] font-bold pt-1">
                    Chủ Sân</span>
                </div>
              </div>

              <!--Not Active-->

              <div v-else @click="setCurrentActive('YardOwner')"
                class="mt-5 flex items-center px-6 py-2 duration-200 border-1-4 text-[#C2CFE0] hover:bg-red-50 cursor-pointer">
                <Icon class="w-8 h-8 text-[#ACACAC]" icon="bxs:user-check" />

                <span class="mx-2 text-[#334D6E] text-[14px] font-medium pt-1">
                  Chủ Sân</span>
              </div>


              <div v-if="checkIsActive('MemberList')" class="w-full bg-[#FEF5F8] flex mt-5">
                <div class="w-1 bg-[#EF3270]"></div>

                <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                  <Icon class="w-8 h-8 text-[#ACACAC]" icon="carbon:user-avatar-filled-alt" />
                  <span class="mx-2 text-[14px] text-[#434141] font-bold">
                    Thành Viên</span>
                </div>
              </div>


              <div v-else @click="setCurrentActive('MemberList')"
                class="mt-5 flex items-center px-6 py-2 duration-200 border-1-4 text-[#C2CFE0] hover:bg-red-50 cursor-pointer">
                <Icon class="w-8 h-8 text-[#ACACAC]" icon="carbon:user-avatar-filled-alt" />
                <span class="mx-2 text-[#334D6E] text-[14px] font-medium">
                  Thành Viên</span>
              </div>

              <!-- <div v-if="checkIsActive('FilterAccount')" class="w-full bg-[#FEF5F8] flex mt-5">
                <div class="w-1 bg-[#EF3270]"></div>

                <div class="flex items-center px-6 py-2 duration-200 border-1-4">
                  <Icon class="w-8 h-8 text-[#ACACAC]" icon="clarity:filter-grid-circle-solid" />
                  <span class="mx-2 text-[14px] text-[#434141] font-bold">
                    Tìm Kiếm Đặc Biệt</span>
                </div>
              </div>

              <div v-else @click="setCurrentActive('FilterAccount')"
                class="mt-5 flex items-center px-6 py-2 duration-200 border-1-4 text-[#C2CFE0] hover:bg-red-50 cursor-pointer">
                <Icon class="w-8 h-8 text-[#ACACAC]" icon="clarity:filter-grid-circle-solid" />
                <span class="mx-2 text-[#334D6E] text-[14px] font-medium">
                  Tìm Kiếm Đặc Biệt</span>
              </div> -->
            </nav>
          </div>
        </div>
      </div>
    </div>
  </keep-alive>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      isActive: "ApproveManager",
      isSelectedTab: "",
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
