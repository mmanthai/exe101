<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div class="flex flex-col items-center justify-between">
    <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-full px-4 rounded-md box-border">
      <div class="flex items-center justify-between">
        <div class="container mx-auto flex px-4">
          <div class="mx-auto flex items-center justify-center">
            <div class="mr-5">
              <p class="text-gray-400 font-lexend font-normal mb-1">Từ Ngày</p>
              <input type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" />
            </div>
            <div class="mr-5">
              <p class="text-gray-400 font-lexend font-normal mb-1">Đến Ngày</p>
              <input type="date"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" />
            </div>
            <div class="flex items-center relative mt-6">
              <span @click="searchPromotion(1)" class="text-2xl p-2 text-gray-400 absolute right-0">
                <Icon icon="ei:search" />
              </span>
              <input @keyup.enter="searchPromotion(1)" v-model="param.query" type="text" placeholder="Tìm Kiếm..."
                class="pr-10 rounded border border-gray-300 bg-gray-50 placeholder:text-sm" />
            </div>
          </div>
        </div>
      </div>

      <div class="wrapping-table mt-10">
        <table
          class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="uppercase px-6 py-3">Tên Khuyễn Mãi</th>
              <th scope="col" class="uppercase px-6 py-3">Mã Khuyễn Mãi</th>
              <th scope="col" class="uppercase px-6 py-3">Số Tiền Giảm</th>
              <th scope="col" class="uppercase px-6 py-3">
                Ngày Hiệu Lực - Ngày Hết Hạn
              </th>
              <th scope="col" class="uppercase px-6 py-3">Trạng Thái</th>
              <th scope="col" class="uppercase px-6 py-3">Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="items in promotionList" :key="items">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="flex-shrink object-contain">
                    <img @load="closeWaiting" class="rounded-2xl mr-3 w-10 h-10 object-contain" :src="items.ImageUrl" />
                  </div>
                  <div class="ml-4 text-[#334D6E]">
                    {{ items.Name }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                {{ items.Code }}
              </td>
              <td class="px-6 py-4">{{ items.DiscountPrice }} đồng</td>
              <td class="px-6 py-4">
                {{ new Date(items.EffectiveDate).toLocaleDateString() }} - {{ new
                    Date(items.ExpiredDate).toLocaleDateString()
                }}
              </td>
              <td class="px-6 py-4">
                <div class="mb-3 mt-2">
                  <p class="text-normal text-green-600 font-semibold" v-if="items.status === 1">
                    Áp Dụng
                  </p>
                  <p class="text-normal text-red-600 font-semibold" v-else>
                    Ngưng Áp Dụng
                  </p>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="flex items-center">
                  <Icon @click="getPromotionDetail(items.Id)"
                    class="w-6 h-6 cursor-pointer hover:text-gray-600 duration-200" icon="ant-design:eye-filled" />
                  <Icon @click="deletePromotion(items.Id)"
                    class="w-6 h-6 cursor-pointer hover:text-gray-600 duration-200" icon="bxs:trash-alt" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p v-show="isEmpty" class="text-red-500 text-lg text-center">
      * Hiện tại cửa hàng chưa có khuyến mãi
    </p>

    <div class="container py-4 flex items-center justify-center">
      <nav v-show="displayInfo.pageCount > 1" :class="loading ? 'invisible' : 'visible'"
        aria-label="Page navigation example mx-auto">
        <ul class="inline-flex -space-x-px">
          <li @click="promotionPageList(param.currentPage - 1)">
            <span
              class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">Trước
              Đó</span>
          </li>
          <li v-for="page in displayInfo.pageCount" :key="page">
            <span v-if="page === param.currentPage" aria-current="page"
              class="py-2 px-3 text-blue-600 cursor-default bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{
                  page
              }}</span>
            <a @click="promotionPageList(page)" v-else
              class="py-2 px-3 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{
                  page
              }}</a>
          </li>
          <li @click="promotionPageList(param.currentPage + 1)">
            <span
              class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">Tiếp
              Theo</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <!--The Modal-->
  <ModalPromotion @loadAgain="promotionPageList(this.param.currentPage)"
    :class="isHiddenModal === false ? 'hidden' : ''" :detail="promotionDetail" :click="countClick" />
</template>

<script>
import { Icon } from "@iconify/vue";
import ModalPromotion from "./ModalPromotion.vue";
import swal from "sweetalert";
import PromotionService from "@/services/promotion.service.js";
import TokenService from "@/services/token/token.service.js";


export default {
  components: { Icon, ModalPromotion },
  created() {
    this.param.vendorId = TokenService.getUser().Token.VendorId;

    PromotionService.getPromotionOfVendor(this.param)
      .then((res) => {
        let data = res.data;

        if (data.LastItemOnPage == 0 && data.Count == 0) {
          this.isEmpty = true;
        } else if (data.LastItemOnPage > 0 && data.Count > 0) {
          this.promotionList = data.Value;
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
  },
  data() {
    return {
      isHiddenModal: false,
      countClick: 0,
      promotionDetail: {},
      promotionList: [],
      isEmpty: false,
      loading: true,
      param: {
        vendorId: 0,
        pageSize: 5,
        query: "",
        currentPage: 1,
        effectiveDate: '',
        expiredDate: '',
      },
      displayInfo: {
        pageCount: 0,
        totalPromotion: 0,
      },
    };
  },
  methods: {
    getPromotionDetail(id) {
      this.isHiddenModal = true;
      this.countClick++;
      this.promotionDetail = this.promotionList.find((x) => x.Id === id);

      console.log(this.promotionDetail)
    },
    promotionPageList(page) {
      this.param = { ...this.param, currentPage: page };
      if (this.param.currentPage > this.displayInfo.pageCount) {
        this.param = { ...this.param, currentPage: this.displayInfo.pageCount };
        return;
      } else if (this.param.currentPage < 1) {
        this.param = { ...this.param, currentPage: 1 };
        return;
      } else if (page > 0 && page <= this.displayInfo.pageCount) {
        this.loading = true;
        PromotionService.getPromotionOfVendor(this.param)
          .then((res) => {
            let data = res.data;

            if (data.LastItemOnPage == 0 && data.Count > 0) {
              this.param = {
                ...this.param,
                currentPage: this.param.currentPage - 1,
              };
              // đệ quy để lấy lại giá trị phân trang
              this.promotionPageList(this.param.currentPage);
            } else if (data.LastItemOnPage == 0 && data.Count == 0) {
              this.isEmpty = true;
              this.promotionList = [];
            } else if (data.LastItemOnPage > 0 && data.Count > 0) {
              this.promotionList = data.Value;
              // setting display promotion infor
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
    },
    searchPromotion(page) {
      console.log('search')
      this.promotionPageList(page)
    },
    deletePromotion(promotionId) {
      this.loading = true;

      swal("Bạn có chắc chắn sẽ xóa khuyến mãi này không ?", {
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {

          PromotionService.deletePromotion(promotionId)
            .then((res) => {
              if (res.data) {
                this.$toast.open({
                  message: 'Đã xóa khuyến mãi!',
                  position: 'top-right',
                  type: 'success',
                });

                this.promotionPageList(this.param.currentPage);
              }
            }).catch((err) => {
              console.log(err);
              this.$toast.open({
                message: 'Đã có lỗi xảy ra. Không thể xóa !',
                position: 'top-right',
                type: 'error',
              });

            }).finally(() => {
              this.loading = false;
            })



        } else {
          this.loading = false;
        }
      });
    },
    closeWaiting() {
      this.loading = false;
    },
  }
};
</script>

<style scoped>
select {
  height: 42px;
}

input:focus {
  outline: none;
  border: none;
}
</style>
