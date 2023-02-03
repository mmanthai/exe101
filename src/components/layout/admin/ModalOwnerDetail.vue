<template>
  <div id="modal" class="flex modal fixed inset-0" :class="isClose === true ? 'hidden' : ''">
    <div class="modal-overlay absolute w-full h-full"></div>
    <div class="mx-auto relative p-4 w-full max-w-6xl h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-4">
        <button @click="hiddenModal" type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
          <Icon class="w-6 h-6" icon="bi:x-circle-fill" />
        </button>
        <div class="py-6 px-6 lg:px-8">
          <div class="py-4flex flex-col items-center justify-between">
            <div class="mt-2 bg-white dark:bg-gray-800 p-3 w-full px-4 rounded-md box-border">
              <ul v-if="isSelectedTab === 'ModalOwnerProfile'"
                class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0" id="tabs-tab3"
                role="tablist">
                <!--active-->
                <li role="presentation">
                  <div
                    class="w-full block font-normal text-small leading-tight uppercase border-x-0 border-t-0 border-b-4 px-6 py-3 my-2 active"
                    role="tab">
                    <span class="mx-2 text-[13px] text-[#434141] font-bold">Thông Tin Chủ Sân</span>
                  </div>
                </li>

                <li @click="setSelectedTab('ModalStoreProfile')" class="nav-item" role="presentation">
                  <span
                    class="cursor-pointer w-full block font-medium text-sm leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                    aria-controls="tabs-profile3" aria-selected="false">
                    <span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1">Thông Tin Cửa Hàng</span>
                  </span>
                </li>

                <li @click="setSelectedTab('ModalRentalYardList')" class="nav-item" role="presentation">
                  <span
                    class="cursor-pointer w-full block font-medium text-sm leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                    aria-controls="tabs-profile3" aria-selected="false">
                    <span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1">Danh Sách Sân Cho Thuê</span>
                  </span>
                </li>
              </ul>
              <ul v-if="isSelectedTab === 'ModalStoreProfile'"
                class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0" id="tabs-tab3"
                role="tablist">
                <li @click="setSelectedTab('ModalOwnerProfile')" class="nav-item" role="presentation">
                  <span
                    class="cursor-pointer w-full block font-normal text-normal uppercase leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                    aria-controls="tabs-profile3" aria-selected="false"><span
                      class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1">Thông Tin Chủ Sân</span></span>
                </li>

                <!--active-->
                <li role="presentation">
                  <div
                    class="w-full block font-semibold text-normal leading-tight uppercase border-x-0 border-t-0 border-b-4 px-6 py-3 my-2 active"
                    role="tab">
                    <span class="mx-2 text-[13px] text-[#434141] font-bold pt-1">Thông Tin Cửa Hàng</span>
                  </div>
                </li>

                <li @click="setSelectedTab('ModalRentalYardList')" class="nav-item" role="presentation">
                  <span
                    class="cursor-pointer w-full block font-normal text-normal uppercase leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                    aria-controls="tabs-profile3" aria-selected="false"><span
                      class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1">Danh Sách Sân Cho Thuê</span></span>
                </li>
              </ul>
              <ul v-if="isSelectedTab === 'ModalRentalYardList'"
                class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0" id="tabs-tab3"
                role="tablist">
                <li @click="setSelectedTab('ModalOwnerProfile')" class="nav-item" role="presentation">
                  <span
                    class="cursor-pointer w-full block font-normal text-normal uppercase leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                    aria-controls="tabs-profile3" aria-selected="false"><span
                      class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1">Thông Tin Chủ Sân</span></span>
                </li>

                <li @click="setSelectedTab('ModalStoreProfile')" class="nav-item" role="presentation">
                  <span
                    class="cursor-pointer w-full block font-normal text-normal uppercase leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                    id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                    aria-controls="tabs-profile3" aria-selected="false"><span
                      class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1">Thông Tin Cửa Hàng</span></span>
                </li>

                <!--active-->
                <li role="presentation">
                  <div
                    class="w-full block font-semibold text-normal leading-tight uppercase border-x-0 border-t-0 border-b-4 px-6 py-3 my-2 active"
                    role="tab">
                    <span class="mx-2 text-[13px] text-[#434141] font-bold pt-1">Danh Sách Sân Cho Thuê</span>
                  </div>
                </li>
              </ul>
              <component :userProfile="detail" :disabledInput="disabledInput" :is="isSelectedTab"
                :showCancel="hiddenButton"></component>
            </div>
            <div v-show="detail.StatusTicked == 1" class="flex items-center justify-end mt-4">
              <div class="flex space-x-2 justify-center">
                <button @click="AcceptRequest" type="button"
                  class="flex items-center px-10 py-2.5 bg-[#50AE01] text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-[#78d22f] hover:shadow-lg focus:bg-[#78d22f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                  <Icon icon="dashicons:update-alt"></Icon>
                  <p class="pl-2">Phê Duyệt</p>
                </button>
              </div>
              <div class="flex space-x-2 justify-center ml-2">
                <button @click="DeclineRequest" type="button"
                  class="flex items-center px-11 py-2.5 bg-red-500 text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
                  <Icon icon="ic:baseline-cancel"></Icon>
                  <p class="pl-2">Từ Chối</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalOwnerProfile from "./ModalApprove/ModalOwnerProfile.vue";
import ModalStoreProfile from "./ModalApprove/ModalStoreProfile.vue";
import ModalRentalYardList from "./ModalApprove/ModalRentalYardList.vue";
import swal from "sweetalert";

import { Icon } from "@iconify/vue";

export default {
  components: {
    ModalOwnerProfile,
    ModalStoreProfile,
    ModalRentalYardList,
    Icon,
  },
  props: {
    detail: {
      type: Object,
      require: true,
    },
    click: {
      type: Number,
      require: true,
    },
    disabledInput: {
      type: Boolean,
      require: false,
    },
  },
  data() {
    return {
      isClose: false,
      isSelectedTab: "ModalOwnerProfile",
    };
  },
  methods: {
    hiddenModal() {
      this.isClose = true;
      this.isSelectedTab = "ModalOwnerProfile";

    },
    setSelectedTab(tab) {
      this.isSelectedTab = tab;
    },
    AcceptRequest() {
      this.hiddenModal();
      this.$emit("accept", this.detail.VendorId);
    },
    DeclineRequest() {
      this.hiddenModal();
      this.$emit("decline", this.detail.VendorId);
    },
    updateSuccess() {
      swal("Cập Nhật Thành Công !", {
        icon: "success",
      });
    },
  },
  watch: {
    detail() {
      this.isClose = false;

      console.log(this.detail)
    },
    click() {
      this.isClose = false;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-body {
  width: 500px;
  height: 300px;
  background: red;
  position: relative;
  z-index: 50;
}
</style>
