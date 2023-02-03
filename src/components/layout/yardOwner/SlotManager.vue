<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div class="flex flex-col items-center justify-center mt-8">
    <ul v-if="isSelectedTab === 'SettingPrice'" class="
        nav nav-tabs
        flex flex-col
        md:flex-row
        flex-wrap
        list-none
        border-b-0
        pl-0
      " id="tabs-tab3" role="tablist">
      <li @click="setSelectedTab('SettingSlot')" class="nav-item" role="presentation">
        <span class="
            cursor-pointer
            w-full
            block
            font-medium
            text-sm
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            my-2
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
          " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
          aria-controls="tabs-profile3" aria-selected="false">
          <span class="mx-2 text-[#334D6E] text-[14px] font-medium pt-1">Cài Đặt Giờ Thuê</span>
        </span>
      </li>

      <!--active-->
      <li role="presentation">
        <div class="
            w-full
            block
            font-normal
            text-small
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-4
            px-6
            py-3
            my-2
            active
          " role="tab">
          <span class="mx-2 text-[14px] text-[#434141] font-bold">Cài Đặt Giá Cơ Bản</span>
        </div>
      </li>

      <li @click="setSelectedTab('SettingRate')" class="nav-item" role="presentation">
        <span class="
            cursor-pointer
            w-full
            block
            font-medium
            text-sm
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            my-2
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
          " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
          aria-controls="tabs-profile3" aria-selected="false">
          <span class="mx-2 text-[#334D6E] text-[14px] font-medium pt-1">Cài Đặt Giá Theo Ngày</span>
        </span>
      </li>
    </ul>
    <ul v-else-if="isSelectedTab === 'SettingSlot'" class="
        nav nav-tabs
        flex flex-col
        md:flex-row
        flex-wrap
        list-none
        border-b-0
        pl-0
        mb-4
      " id="tabs-tab3" role="tablist">
      <!--active-->
      <li role="presentation">
        <div class="
            w-full
            block
            font-semibold
            text-normal
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-4
            px-6
            py-3
            my-2
            active
          " role="tab">
          <span class="mx-2 text-[14px] text-[#434141] font-bold pt-1">Cài Đặt Giờ Thuê</span>
        </div>
      </li>

      <li @click="setSelectedTab('SettingPrice')" class="nav-item" role="presentation">
        <span class="
            cursor-pointer
            w-full
            block
            font-normal
            text-normal
            uppercase
            leading-tight
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            my-2
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
          " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
          aria-controls="tabs-profile3" aria-selected="false"><span
            class="mx-2 text-[#334D6E] text-[14px] font-medium pt-1">Cài Đặt Giá Cơ Bản</span></span>
      </li>

      <li @click="setSelectedTab('SettingRate')" class="nav-item" role="presentation">
        <span class="
            cursor-pointer
            w-full
            block
            font-medium
            text-sm
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            my-2
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
          " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
          aria-controls="tabs-profile3" aria-selected="false">
          <span class="mx-2 text-[#334D6E] text-[14px] font-medium pt-1">Cài Đặt Giá Theo Ngày</span>
        </span>
      </li>
    </ul>

    <ul v-else-if="isSelectedTab === 'SettingRate'" class="
        nav nav-tabs
        flex flex-col
        md:flex-row
        flex-wrap
        list-none
        border-b-0
        pl-0
        mb-4
      " id="tabs-tab3" role="tablist">
      <!--active-->
      <li @click="setSelectedTab('SettingSlot')" class="nav-item" role="presentation">
        <span class="
            cursor-pointer
            w-full
            block
            font-medium
            text-sm
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            my-2
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
          " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
          aria-controls="tabs-profile3" aria-selected="false">
          <span class="mx-2 text-[#334D6E] text-[14px] font-medium pt-1">Cài Đặt Giờ Thuê</span>
        </span>
      </li>

      <li @click="setSelectedTab('SettingPrice')" class="nav-item" role="presentation">
        <span class="
            cursor-pointer
            w-full
            block
            font-medium
            text-sm
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            my-2
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
          " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
          aria-controls="tabs-profile3" aria-selected="false">
          <span class="mx-2 text-[#334D6E] text-[14px] font-medium pt-1">Cài Đặt Giá Cơ Bản</span>
        </span>
      </li>

      <li role="presentation">
        <div class="
            w-full
            block
            font-semibold
            text-normal
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-4
            px-6
            py-3
            my-2
            active
          " role="tab">
          <span class="mx-2 text-[14px] text-[#434141] font-bold pt-1">Cài Đặt giá theo ngày</span>
        </div>
      </li>
    </ul>
  </div>
  <!--dynamic component-->
  <component @changeTab="setSelectedTab" :is="isSelectedTab"></component>

  <div @click="checkSetting()" class="flex space-x-2 justify-center">
    <button type="button"
      class="flex items-center px-10 py-2.5 bg-[#50AE01] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-[#78d22f] hover:shadow-lg focus:bg-[#78d22f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
      <Icon icon="dashicons:update-alt"></Icon>
      <p class="pl-2">Hoàn Tất Cài Đặt</p>
    </button>
  </div>

</template>
 
<script>
import SettingSlot from "./Slot/SettingSlot.vue";
import SettingPrice from "./Slot/SettingPrice.vue";
import SettingRate from "./Slot/SettingRate.vue";
import SlotService from '@/services/slot.service.js'
export default {
  components: {
    SettingSlot,
    SettingPrice,
    SettingRate
  },
  data() {
    return {
      isSelectedTab: "SettingSlot",
      loading: false
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.isSelectedTab = tab;
    },
    checkSetting() {
      let setting_all_slot = JSON.parse(sessionStorage.getItem('setting_all_slot'));
      if (!setting_all_slot) {

        this.$toast.open({
          message: 'Xin hãy cài đặt giá tiền cho từng loại sân !',
          position: 'top-right',
          type: 'error',
        });
      } else {
        if (setting_all_slot.length === 3) {

          this.loading = true
          let count = 0;

          setting_all_slot.forEach((slot) => {
            count += 1;

            SlotService.createSlotForCourtTypeId(slot.slotDetail)
              .then(res => {
                console.log(res.data)

              }).catch(err => {
                console.log(err)
              })
          })
          if (count == 3) {
            this.$toast.open({
              message: 'Hoàn Tất Cài Đặt Thành Công!',
              position: 'top-right',
              type: 'success',
            });
            sessionStorage.removeItem("setting_all_slot");
          } else {
            this.$toast.open({
              message: 'Đã có lỗi xảy ra !',
              position: 'top-right',
              type: 'error',
            });
          }

          this.loading = false;
        } else if (setting_all_slot.length < 3) {
          this.$toast.open({
            message: `Xin hãy cài đặt đủ giá tiền cho từng loại sân`,
            position: 'top-right',
            type: 'error',
          });

        }
      }
    }
  },
};
</script>