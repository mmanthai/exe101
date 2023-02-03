<template>
  <div>
    <customer-header />

    <!--Search Result-->
    <div class="container pl-10 md:pt-36">
      <div class="container px-20 py-4">
        <span class="text-base my-4 block">
          <router-link to="/home">Trang Chủ</router-link> /
          <span>Kết Quả Tìm Kiếm</span>
        </span>
        <h2 class="text-2xl font-semibold">
          {{ this.countSearch }} Kết Quả Cho "{{ this.$route.params.search }}"
        </h2>
      </div>
    </div>

    <!--filter-->
    <div class="container-fluid bg-[#F7F7F7] h-auto mt-2 px-24">
      <div class="container grid grid-cols-8 gap-4 h-full">
        <div class="col-span-2 pt-8">
          <div class="flex items-center">
            <Icon
              icon="material-symbols:filter-alt-outline"
              class="w- h-6 cursor-pointer"
            />
            <span class="text-lg font-semibold text-[#404040]">Lọc</span>
          </div>
          <div class="border-b-2 mt-2"></div>

          <div class="mt-4">
            <div
              @click="showFilterBlock('showFilterRating')"
              class="cursor-pointer flex items-center justify-between"
            >
              <span class="font-medium">Đánh Giá</span>
              <Icon icon="ic:round-plus" class="w-4 h-4 text-gray-600" />
            </div>
            <transition name="filterBlock">
              <div v-if="showFilterObject.showFilterRating" class="pl-6 pt-4">
                <ul>
                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <div class="flex items-center">
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                    </div>
                  </li>
                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <div class="flex items-center">
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />

                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                    </div>
                  </li>

                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <div class="flex items-center">
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />

                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                    </div>
                  </li>

                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <div class="flex items-center">
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                    </div>
                  </li>

                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <div class="flex items-center">
                      <Icon
                        icon="material-symbols:star-rounded"
                        class="w-5 h-5 text-yellow-600 text-sm"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </transition>
          </div>

          <div class="mt-8">
            <div
              @click="showFilterBlock('showFilterPrice')"
              class="cursor-pointer flex items-center justify-between"
            >
              <span class="font-medium">Giá</span>
              <Icon icon="ic:round-plus" class="w-4 h-4 text-gray-600" />
            </div>
            <transition name="filterBlock">
              <div v-if="showFilterObject.showFilterPrice" class="pl-6 pt-4">
                <ul>
                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <span> Từ 100.000 VNĐ Đến 250.000 VNĐ</span>
                  </li>
                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <span>Từ 250.000 VNĐ Đến 350.000 VNĐ</span>
                  </li>
                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <span>Trên 350.000 VNĐ</span>
                  </li>
                </ul>
              </div>
            </transition>
          </div>

          <div class="mt-8">
            <div
              @click="showFilterBlock('showFilterCourt')"
              class="cursor-pointer flex items-center justify-between"
            >
              <span class="font-medium">Loại Sân</span>
              <Icon icon="ic:round-plus" class="w-4 h-4 text-gray-600" />
            </div>
            <transition name="filterBlock">
              <div v-if="showFilterObject.showFilterCourt" class="pl-6 pt-4">
                <ul>
                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <span> Sân Đất Nện</span>
                  </li>
                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <span>Sân Cỏ</span>
                  </li>
                  <li class="flex items-center mb-3">
                    <input
                      type="checkbox"
                      class="mr-2 mt-1 w-8 h-4 cursor-pointer"
                    />
                    <span>Sân Cứng</span>
                  </li>
                </ul>
              </div>
            </transition>
            <div class="my-8 flex items-center justify-end">
              <button
                class="cursor-pointer shadow px-4 py-2 bg-gray-500 rounded text-white text-base mr-2 hover:bg-gray-700 duration-200"
              >
                Làm Mới
              </button>
              <button
                class="cursor-pointer shadow px-4 py-2 bg-blue-600 rounded text-white text-base hover:bg-blue-800 duration-200"
              >
                Lọc
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-6 pt-20 px-10 flex flex-col justify-between">
          <vendor-item-search
            :vendorItemSearch="listSearchVendor"
            frameName="searchVendor"
            :vendorValue="vendor"
            v-for="vendor in listSearchVendor"
            :key="vendor"
          />
          <!-- ở trên -->

          <div class="flex items-center justify-center my-4">
            <nav aria-label="Page navigation">
              <ul class="inline-flex space-x-2">
                <li>
                  <button
                    class="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
                  >
                    <Icon
                      icon="material-symbols:chevron-left-rounded"
                      class="w-4 h-4"
                    />
                  </button>
                </li>
                <li>
                  <button
                    class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
                  >
                    1
                  </button>
                </li>
                <li>
                  <button
                    class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
                  >
                    2
                  </button>
                </li>
                <li>
                  <button
                    class="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline"
                  >
                    3
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100"
                  >
                    <Icon
                      icon="material-symbols:chevron-right-rounded"
                      class="w-4 h-4"
                    />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { defineAsyncComponent } from "vue";
import VendorService from "@/services/vendor.service.js";
// const CustomerHeader = defineAsyncComponent(() =>
//   import("@/components/layout/customer/CustomerHeader.vue")
// );
import CustomerHeader from "@/components/layout/customer/CustomerHeader.vue";
const VendorItemSearch = defineAsyncComponent(() =>
  import("@/components/search-item/VendorItemSearch.vue")
);

export default {
  components: {
    Icon,
    CustomerHeader,
    VendorItemSearch,
  },
  data() {
    return {
      showFilterObject: {
        showFilterRating: false,
        showFilterPrice: false,
        showFilterCourt: false,
      },
      param: {
        pageSize: 10,
        queryString: this.$route.params.search,
        currentPage: 1,
      },
      listSearchVendor: [],
      countSearch: 0,
    };
  },
  mounted() {
    VendorService.searchVendor(this.param)
      .then((res) => {
        if (res) {
          this.listSearchVendor = res.data.Value;
          this.countSearch = res.data.Count;
          console.log(this.countSearch);
          console.log(this.listSearchVendor);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    showFilterBlock(filterBlock) {
      this.showFilterObject[filterBlock] = !this.showFilterObject[filterBlock];
    },
  },
  watch: {
    $route() {
      console.log(this.$route.params.search);
    },
  },
};
</script>

<style scoped>
.filterBlock-enter-from,
.filterBlock-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.filterBlock-enter-active,
.filterBlock-leave-active {
  transition: all 0.3s ease;
}

.filterBlock-enter-to,
.filterBlock-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
