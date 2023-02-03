<template>
  <div class="dashboard">
    <!-- grid wrapper card -->

    <!--List Yard-->
    <div class="container h-96 overflow-auto mt-8 px-2">
      <div
        v-for="court in courtList"
        :key="court.Id"
        class="card h-60 w-full bg-white flex items-center rounded"
      >
        <div class="flex items-center pl-8 w-full">
          <div class="mr-8">
            <img class="w-72 h-44 rounded-xl" :src="court.ImageUrl" />
          </div>

          <!--infor Yard-->
          <div class="flex flex-col items-start h-auto mt-7">
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1"
                >Tên Sân:
              </span>
              <span class="text-gray-500">
                <div class="relative">
                  <div class="px-1 py-1 text-left">
                    {{ court.Name }}
                  </div>
                </div>
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1"
                >Loại Sân:
              </span>
              <span class="text-gray-500 mt-[-4px]">
                <div class="relative">
                  <div v-if="court.TypeId == 2" class="px-1 py-2 text-left">
                    Sân Đất Nện
                  </div>
                  <div
                    v-else-if="court.TypeId == 3"
                    class="px-1 py-2 text-left"
                  >
                    Sân Cỏ
                  </div>
                  <div
                    v-else-if="court.TypeId == 4"
                    class="px-1 py-2 text-left"
                  >
                    Sân Cứng
                  </div>
                </div>
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1"
                >Chiều Dài:
              </span>
              <span class="text-gray-500">
                <div class="relative">
                  <div class="px-1 text-left">
                    <div
                      v-if="court.CourtSizeId == 1"
                      class="px-1 py-1 text-left"
                    >
                      40m
                    </div>
                    <div
                      v-else-if="court.CourtSizeId == 2"
                      class="px-1 py-1 text-left"
                    >
                      36.57m
                    </div>
                    <div
                      v-else-if="court.CourtSizeId == 3"
                      class="px-1 py-1 text-left"
                    >
                      34.75m
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div class="flex items-start mb-4">
              <span class="text-gray-500 text-md font-semibold mr-5 w-32 mt-1"
                >Chiều Rộng:
              </span>
              <span class="text-gray-500">
                <div class="relative">
                  <div class="px-1 text-left">
                    <div
                      v-if="court.CourtSizeId == 2"
                      class="px-1 py-1 text-left"
                    >
                      20m
                    </div>
                    <div
                      v-else-if="court.CourtSizeId == 3"
                      class="px-1 py-1 text-left"
                    >
                      18.29m
                    </div>
                    <div
                      v-else-if="court.CourtSizeId == 4"
                      class="px-1 py-1 text-left"
                    >
                      18.29m
                    </div>
                  </div>
                </div>
              </span>
            </div>

            <!-- <div class="flex items-center">
                <span class="text-gray-500 text-md font-semibold mr-3 pt-1">Loại Kích Thước:
                </span>
                 <span class="text-gray-500">
                  <select v-if="!disabledInput" id="small" class="
                      rounded-lg
                      text-sm
                      block
                      pr-8
                      W-full
                      text-gray-900
                      bg-gray-50
                      border border-gray-500
                      focus:ring-blue-500 focus:border-blue-500
                      ml-2
                    ">
                    <option value="Active">Kích Thước Lớn</option>
                    <option selected="true" value="Active">Kích Thước Tiêu Chuẩn</option>
                    <option value="Active">Kích Thước Nhỏ</option>
                  </select>
                  <input v-else disabled="disabledInput" :class="disabledInput ? 'bg-gray-50' : ''"  type="text" placeholder="Loại sân"
                    class="ml-[7px]  px-2 py-1 placeholder-slate-300 text-slate-600 relative rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring-100 w-64"
                    value="Sân Cứng" />
                </span>
              </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourtService from "@/services/court.service.js";
export default {
  props: {
    showCancel: {
      type: Boolean,
      required: false,
    },
    disabledInput: {
      type: Boolean,
      required: false,
    },
    userProfile: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      courtList: [],
    };
  },
  computed: {
    // typeCourtText() {
    //   let textTypeCourt = ''
    //   this.courtList.forEach((court) => {
    //     if (court.TypeId == 1) {
    //       textTypeCourt = 'Sân Đất Nện'
    //     } else if (court.TypeId == 2) {
    //       textTypeCourt = 'Sân Cỏ'
    //     }
    //     else if (court.TypeId == 3) {
    //       textTypeCourt = 'Sân Cứng'
    //     }
    //   })
    //   return textTypeCourt;
    // }
  },
  mounted() {
    console.log();

    let params = {
      vendorId: this.userProfile.Id,
      pageSize: 5,
      query: "",
      currentPage: 1,
    };

    CourtService.getCourtOfVendor(params)
      .then((res) => {
        this.courtList = res.data.Value;
        console.log(this.courtList);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
