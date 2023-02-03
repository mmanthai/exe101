<template>
  <div class="p-8 flex flex-col items-center justify-between">
    <div class="
        mt-2
        bg-white
        dark:bg-gray-800
        p-3
        w-full
        px-4
        rounded-md
        box-border
        shadow
      ">
      <ul v-if="isSelectedTab === 'DisplayProfile'" class="
          nav nav-tabs
          flex flex-col
          md:flex-row
          flex-wrap
          list-none
          border-b-0
          pl-0
        " id="tabs-tab3" role="tablist">
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
            <span class="mx-2 text-[13px] text-[#434141] font-bold">Thông Tin Cửa Hàng</span>
          </div>
        </li>

        <li @click="setSelectedTab('UpdateStore')" class="nav-item" role="presentation">
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
            <span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1">Cập Nhật Cửa Hàng</span>
          </span>
        </li>
      </ul>
      <ul v-else class="
          nav nav-tabs
          flex flex-col
          md:flex-row
          flex-wrap
          list-none
          border-b-0
          pl-0
          mb-4
        " id="tabs-tab3" role="tablist">
        <li @click="setSelectedTab('DisplayProfile')" class="nav-item" role="presentation">
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
              class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1">Thông Tin Cửa Hàng</span></span>
        </li>

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
            <span class="mx-2 text-[13px] text-[#434141] font-bold pt-1">Cập Nhật Cửa Hàng</span>
          </div>
        </li>
      </ul>
      <component :is="isSelectedTab"></component>
    </div>
  </div>
</template>

<script>
import DisplayProfile from "./StoreProfile/DisplayProfile.vue";
import UpdateStore from "./StoreProfile/UpdateStore.vue";
export default {
  components: {
    DisplayProfile,
    UpdateStore
  },
  data() {
    return {
      isSelectedTab: "DisplayProfile",
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.isSelectedTab = tab;
    },
  },
};
</script>