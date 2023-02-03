<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div class="dashboard p-8">
    <!-- grid wrapper card -->
    <div class="wrapper-card md:grid-cols-2 gap-2 overflow-y-auto">
      <div
        class="w-full mx-auto px-4 h-full flex items-center justify-between relative"
      >
        <!--List Yard-->
        <div class="gird grid-cols-2 gap-6 lg:w-[65%] md:w-full">
          <div>
            <div
              v-for="courtInfo in courtList"
              :key="courtInfo.Id"
              class="card h-60 w-full bg-white mb-8 flex items-center shadow rounded"
            >
              <div class="flex items-center pl-8 w-[72%]">
                <div class="mr-5 w-60 h-40">
                  <img
                    class="w-full h-full rounded-2xl object-contain"
                    :src="
                      courtInfo.ImageUrl
                        ? courtInfo.ImageUrl
                        : 'https://i.ibb.co/dbsRVcj/photo-1-15399608173151918722731.webp'
                    "
                  />
                </div>

                <!--infor Yard-->
                <div class="flex flex-col items-start justify-end h-auto">
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5 w-24"
                      >Tên Sân:
                    </span>
                    <span class="text-gray-500">
                      <p class="w-20 truncate ...">{{ courtInfo.Name }}</p>
                    </span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5 w-24"
                      >Loại Sân:
                    </span>
                    <span class="text-gray-500">
                      <p v-if="courtInfo.TypeId == 2">Sân Đất Nện</p>
                      <p v-else-if="courtInfo.TypeId == 3">Sân Cỏ</p>
                      <p v-else-if="courtInfo.TypeId == 4">Sân Cứng</p>
                    </span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5"
                      >Kích Thước:
                    </span>
                    <span class="text-gray-500">
                      <p v-if="courtInfo.CourtSizeId == 1">40m x 20m</p>
                      <p v-else-if="courtInfo.CourtSizeId == 2">
                        36.57m x 18.29m
                      </p>
                      <p v-else-if="courtInfo.CourtSizeId == 3">
                        34.75m x 17.07m
                      </p>
                    </span>
                  </div>
                  <div class="flex items-center mb-2">
                    <span class="text-gray-500 text-md font-semibold mr-5 w-24"
                      >Đánh giá:
                    </span>
                    <div v-if="courtInfo.RatingAverage > 0" class="item-rating">
                      <ul class="unstyled-list list-inline flex items-center">
                        <li
                          v-for="number in Math.floor(courtInfo.RatingAverage)"
                          :key="number"
                          class="ratings-list-item"
                        >
                          <Icon
                            class="w-5 h-5 text-yellow-300"
                            icon="ant-design:star-filled"
                          ></Icon>
                        </li>
                        <li
                          v-show="
                            courtInfo.RatingAverage -
                              Math.floor(courtInfo.RatingAverage) >=
                            0.5
                          "
                          class="ratings-list-item"
                        >
                          <Icon
                            class="w-5 h-5 text-yellow-300"
                            icon="clarity:half-star-solid"
                          ></Icon>
                        </li>

                        <!-- <li class="ratings-list-item">
                            <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                          </li>
                          <li class="ratings-list-item">
                            <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                          </li>
                          <li class="ratings-list-item">
                            <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                          </li>
                          <li class="ratings-list-item">
                            <Icon class="w-5 h-5 text-yellow-300" icon="ant-design:star-filled"></Icon>
                          </li> -->
                      </ul>
                    </div>
                    <div v-else class="text-gray-500">Chưa Có</div>
                  </div>
                </div>
              </div>

              <div class="flex-1 w-full h-full border-l-2 p-4">
                <div class="w-full h-full">
                  <div
                    class="flex space-x-2 justify-center my-3"
                    @click="showRating"
                  >
                    <button
                      type="button"
                      class="flex items-center justify-evenly px-10 py-2.5 bg-blue-400 text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      <Icon icon="ant-design:eye-filled"></Icon>
                      <p class="pl-2">Đánh Giá</p>
                    </button>
                  </div>
                  <div
                    class="flex space-x-2 justify-center my-8"
                    @click="UpdateYard(courtInfo.Id)"
                  >
                    <button
                      type="button"
                      class="flex items-center px-10 py-2.5 bg-[#50AE01] text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-[#78d22f] hover:shadow-lg focus:bg-[#78d22f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      <Icon icon="dashicons:update-alt"></Icon>
                      <p class="pl-2">Cập Nhật</p>
                    </button>
                  </div>
                  <div
                    class="flex space-x-2 justify-center my-8"
                    @click="showAlert(courtInfo.Id)"
                  >
                    <button
                      type="button"
                      class="flex items-center px-11 py-2.5 bg-red-500 text-white font-medium text-sm leading-tight rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      <Icon icon="ant-design:delete-filled"></Icon>
                      <p class="pl-2">Xóa Sân</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Card Report-->
        <div
          class="max-w-sm rounded overflow-hidden shadow-lg flex-1 absolute top-0 right-0 md:hidden lg:block"
        >
          <img
            class="w-full"
            src="../../../../assets/img/yardList.jpg"
            alt="tổng số sân"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Tổng có {{ displayInfo.totalCourt }} Sân Cho Thuê
            </div>
            <p class="text-gray-700 text-base">
              Sân sẽ được hiển thị và được tính toán giá thuê theo ngày
            </p>
          </div>
        </div>
      </div>
    </div>

    <p v-show="isEmpty" class="text-red-500 text-lg text-center">
      * Hiện tại chưa có sân cho thuê
    </p>

    <nav
      v-show="displayInfo.pageCount > 1"
      :class="loading ? 'invisible' : 'visible'"
      aria-label="Page navigation example mx-auto"
    >
      <ul class="inline-flex -space-x-px">
        <li @click="courtPageList(param.currentPage - 1)">
          <span
            class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            >Trước</span
          >
        </li>
        <li v-for="page in displayInfo.pageCount" :key="page">
          <span
            v-if="page === param.currentPage"
            aria-current="page"
            class="py-2 px-3 text-blue-600 cursor-default bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >{{ page }}</span
          >
          <a
            @click="courtPageList(page)"
            v-else
            class="py-2 px-3 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >{{ page }}</a
          >
        </li>
        <li @click="courtPageList(param.currentPage + 1)">
          <span
            class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            >Sau</span
          >
        </li>
      </ul>
    </nav>
  </div>

  <!--The Modal-->
  <RatingModal
    :class="isHiddenRating === false ? 'hidden' : ''"
    :profile="profileDetail"
    :click="triggerRating"
  />
  <UpdateModal
    :class="isHiddenUpdate === false ? 'hidden' : ''"
    :profile="courtDetail"
    :click="triggerUpdate"
  />
</template>

<script>
import { Icon } from "@iconify/vue";
import RatingModal from "./Modal/RatingModal.vue";
import UpdateModal from "./Modal/UpdateModal.vue";
import UserService from "@/services/user.service";
import CourtService from "@/services/court.service";
import TokenService from "@/services/token/token.service";
import swal from "sweetalert";

export default {
  components: {
    Icon,
    RatingModal,
    UpdateModal,
  },
  props: ["searchValue"],
  data() {
    return {
      isHiddenRating: false,
      isHiddenUpdate: false,
      triggerRating: 0,
      triggerUpdate: 0,
      isEmpty: false,
      loading: false,
      courtList: [],
      param: {
        vendorId: 0,
        pageSize: 3,
        query: "",
        currentPage: 1,
      },
      displayInfo: {
        pageCount: 0,
        totalCourt: 0,
      },
      courtDetail: {},
      userProfile: {},
    };
  },
  mounted() {
    this.loading = true;
    this.userProfile = TokenService.getUser().Token;
    UserService.getOwnerProfile(this.userProfile.UserId)
      .then((res) => {
        let user_profile = res.data;
        if (user_profile.Vendor.Id) {
          this.param = { ...this.param, vendorId: user_profile.Vendor.Id };
        }

        CourtService.getCourtOfVendor(this.param)
          .then((res) => {
            let data = res.data;

            if (data.LastItemOnPage == 0 && data.Count == 0) {
              this.isEmpty = true;
            } else if (data.LastItemOnPage > 0 && data.Count > 0) {
              this.courtList = data.Value;
              // setting display court infor
              this.displayInfo.pageCount = data.PageCount;
              this.displayInfo.totalCourt = data.Count;
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.loading = false;
          });
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    showRating() {
      this.isHiddenRating = true;
      this.isHiddenUpdate = false;
      this.triggerRating++;
    },
    UpdateYard(courtId) {
      this.courtDetail = this.courtList.find((court) => court.Id == courtId);

      this.isHiddenUpdate = true;
      this.isHiddenRating = false;
      this.triggerUpdate++;
    },
    showAlert(court_id) {
      swal("Bạn có chắc chắn sẽ xóa sân này không ?", {
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.loading = true;
          CourtService.deleteCourt(court_id)
            .then(() => {
              this.$toast.open({
                message: "Đã Xóa Sân !",
                position: "top-right",
                type: "success",
              });

              this.courtPageList(this.param.currentPage);
            })
            .catch((err) => {
              console.log(err);
              this.$toast.open({
                message: "Đã có lỗi xảy ra. Không thể xóa sân !",
                position: "top-right",
                type: "error",
              });
            })
            .finally(() => {
              this.loading = false;
            });
        }
      });
    },
    courtPageList(page) {
      this.loading = true;

      this.param = { ...this.param, currentPage: page };
      if (this.param.currentPage > this.displayInfo.pageCount) {
        this.param = { ...this.param, currentPage: this.displayInfo.pageCount };
        return;
      } else if (this.param.currentPage < 1) {
        this.param = { ...this.param, currentPage: 1 };
        return;
      } else if (page > 0 && page <= this.displayInfo.pageCount) {
        this.loading = true;
        CourtService.getCourtOfVendor(this.param)
          .then((res) => {
            let data = res.data;

            if (data.LastItemOnPage == 0 && data.Count > 0) {
              this.param = {
                ...this.param,
                currentPage: this.param.currentPage - 1,
              };
              // đệ quy để lấy lại giá trị phân trang
              this.courtPageList(this.param.currentPage);
            } else if (data.LastItemOnPage == 0 && data.Count == 0) {
              this.isEmpty = true;
              this.courtList = [];
            } else if (data.LastItemOnPage > 0 && data.Count > 0) {
              this.courtList = data.Value;
              // setting display court infor
              this.displayInfo.pageCount = data.PageCount;
              this.displayInfo.totalCourt = data.Count;
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.loading = false;
          });
      }

      this.loading = false;
    },
  },
  watch: {
    searchValue() {
      this.param = { ...this.param, query: this.searchValue };
      this.courtPageList(1);
    },
  },
};
</script>
