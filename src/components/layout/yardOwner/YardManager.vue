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

      <div class="flex items-center justify-between">
        <ul v-if="isSelectedTab === 'YardList'" class="
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
              <span class="mx-2 text-[13px] text-[#434141] font-bold">Danh Sách Sân Cho Thuê</span>
            </div>
          </li>

          <li @click="setSelectedTab('CreateYard')" class="nav-item" role="presentation">
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
              <span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1">Thêm Mới Sân</span>
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
        " id="tabs-tab3" role="tablist">
          <li @click="setSelectedTab('YardList')" class="nav-item" role="presentation">
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
                class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1">Danh Sách Sân Cho Thuê</span></span>
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
              <span class="mx-2 text-[13px] text-[#434141] font-bold pt-1">Tạo Thêm Sân</span>
            </div>
          </li>
        </ul>

        <div class="flex items-center relative ">
          <span @click="setSearchValue" class="text-2xl p-2 text-gray-400 absolute right-0">
            <Icon icon="ei:search" />
          </span>
          <input @keyup.enter="setSearchValue" id="search" type="text" placeholder="Tìm kiếm tên sân..."
            class="pr-10 rounded border border-gray-300 bg-gray-50 placeholder:text-sm" />
        </div>
      </div>


    </div>

  </div>
  <!--dynamic component-->
  <component :searchValue="searchValue" :is="isSelectedTab"></component>
</template>

<script>
import YardList from "./Yard/YardList.vue";
import CreateYard from "./Yard/CreateYard.vue";
import { Icon } from "@iconify/vue";
export default {
  components: {
    CreateYard,
    YardList,
    Icon
  },
  data() {
    return {
      isSelectedTab: "YardList",
      searchValue: ""
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.isSelectedTab = tab;
    },
    setSearchValue() {
      let search = document.getElementById("search").value;
      this.searchValue = search;
    }

  },
};
</script>