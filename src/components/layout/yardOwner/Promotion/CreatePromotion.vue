<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <form @submit.prevent="createPromotion">
    <div class="container mx-auto my-5 px-8 mt-8">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-1/3 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img @load="closeWaiting" class="h-64 w-full mx-auto object-contain"
                :src="promotion.imageUrl ? promotion.imageUrl : 'https://i.ibb.co/t41GMzQ/discount.png'"
                alt="ảnh khuyến mãi" />
            </div>
            <label class="block mt-4">
              <span class="sr-only">Choose File</span>
              <input @change="uploadImg" type="file"
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                accept="image/*" />
            </label>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-3/4 mx-2 h-full">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <p class="text-red-500 font-normal text-right text-sm italic">
              Ghi chú: (*) Các trường bắt buộc nhập
            </p>
            <div class="flex items-center space-x-2 font-semibold text-gray-600 leading-8 px-4">
              <span clas="text-green-500">
                <font-awesome-icon icon="user" class="text-lg" />
              </span>
              <span class="tracking-wide text-lg">Thông Tin</span>
            </div>
            <!--information container-->
            <div class="grid md:grid-cols-2 gap-2 px-4 pb-5 mt-4 sm:grid-cols-1 text-normal">

              <div>
                <label class="text-[#747474]" for="username">Tên Khuyến Mãi</label>
                <div class="relative">
                  <p v-if="!promotion.name" class="text-2xl text-red-500 absolute right-12 top-4">
                    *
                  </p>
                  <input placeholder="Tên Khuyến Mãi" type="text"
                    class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                    required v-model="promotion.name" />
                  <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                </div>
              </div>
              <div>
                <label class="text-[#747474]" for="username">Mã Code</label>
                <div class="relative">
                  <p v-if="!promotion.code" class="text-2xl text-red-500 absolute right-12 top-4">
                    *
                  </p>
                  <input placeholder="Mã Code" type="text"
                    class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                    required v-model="promotion.code" />
                  <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                </div>
              </div>
              <div>
                <label class="text-[#747474]" for="username">Ngày Hiệu Lực</label>
                <div class="relative">
                  <p v-if="!promotion.effectiveDate" class="text-2xl text-red-500 absolute right-12 top-4">
                    *
                  </p>
                  <input placeholder="Ngày Hiệu Lực" type="date"
                    class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                    required v-model="promotion.effectiveDate" />
                  <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                </div>
              </div>
              <div>
                <label class="text-[#747474]" for="username">Ngày Hết Hạn</label>
                <div class="relative">
                  <p v-if="!promotion.expiredDate" class="text-2xl text-red-500 absolute right-12 top-4">
                    *
                  </p>
                  <input placeholder="Ngày Hết Hạn" type="date"
                    class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                    required v-model="promotion.expiredDate" />
                  <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                </div>
              </div>
              <div>
                <label class="text-[#747474]" for="username">Số Tiền Giảm</label>
                <div class="relative">
                  <p v-if="!promotion.discountPrice" class="text-2xl text-red-500 absolute right-12 top-4">
                    *
                  </p>
                  <input placeholder="Số Tiền Giảm" type="number"
                    class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                    required v-model="promotion.discountPrice" />
                  <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                </div>
              </div>
              <div>
                <label class="text-[#747474]" for="username">Mô Tả</label>
                <div class="relative w-[90%]">
                  <p v-if="!promotion.description" class="text-2xl text-red-500 absolute right-4 top-6">
                    *
                  </p>
                  <textarea v-model="promotion.description" placeholder="Mô tả"
                    class="w-full mt-2 h-13 resize-none overflow rounded-md text-sm" required></textarea>
                  <!-- <p v-if="err.errVendorName" class="
                        absolute
                        top-[138%]
                        left-0
                        error-text
                        text-center text-red-700
                      " role="alert">
                    * {{ err.errVendorName }}
                  </p> -->
                </div>
              </div>
            </div>
          </div>

          <!--button control-->
          <div class="w-full flex items-center justify-end mt-8">
            <div class="flex space-x-2 justify-center">
              <button type="submit"
                class="flex items-center px-10 py-2.5 bg-[#50AE01] text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-[#78d22f] hover:shadow-lg focus:bg-[#78d22f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                <Icon icon="akar-icons:circle-plus-fill"></Icon>
                <p class="pl-2">Tạo Khuyến Mãi</p>
              </button>
            </div>
          </div>
          <!-- End of about section -->
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { Icon } from "@iconify/vue";
import axios from "axios";
import swal from "sweetalert";
import Promotion from "@/models/Promotion.js";
import TokenService from "@/services/token/token.service.js";
import PromotionService from '@/services/promotion.service.js';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      loading: false,
      promotion: new Promotion(),
    };
  },
  methods: {
    uploadImg(evt) {
      this.loading = true;
      let apiKey = "3ce508644197fb15dcf4e916cf328c21";
      const baseUrlImgbb = "https://api.imgbb.com/1";

      this.selectedFile = evt.target.files[0];

      let body = new FormData();
      body.set("key", apiKey);
      body.append("image", this.selectedFile);

      axios
        .post(baseUrlImgbb + "/upload", body)
        .then((res) => {
          this.promotion.imageUrl = res.data.data.image.url;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;

          this.$toast.open({
            message: 'Không thể tải ảnh lên !',
            position: 'top-right',
            type: 'error',
          });
        });
    },
    closeWaiting() {
      this.loading = false;
    },
    createPromotion() {
      this.loading = true;

      let vendorId = TokenService.getUser().Token.VendorId;
      if (vendorId !== 0) {
        this.promotion.vendorId = vendorId;

        if (!this.promotion.imageUrl) {
          swal('Xin vui lòng chọn ảnh khuyễn mãi', {
            icon: "warning"
          }).then(() => {
            this.loading = false;
            return;
          })
        } else {
          PromotionService.createPromotion(this.promotion)
            .then(res => {
              if (res.data) {
                this.promotion = new Promotion();
                this.$toast.open({
                  message: 'Tạo Khuyến Mãi Thành Công !',
                  position: 'top-right',
                  type: 'success',
                });
              }
            }).catch(err => {
              console.log(err)
              this.$toast.open({
                message: 'Đã có lỗi xảy ra. Không thể tạo khuyến mãi !',
                position: 'top-right',
                type: 'error',
              });
            }).finally(() => {
              this.loading = false;
            })
        }





      } else {
        swal("Xin hãy tạo cửa hàng trước khi tạo khuyến mãi !", {
          icon: 'warning'
        })
      }

    },
  }
};
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  width: 150px;
}
</style>
