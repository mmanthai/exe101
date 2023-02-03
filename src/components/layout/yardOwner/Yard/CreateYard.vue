<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div class="container mx-auto my-5 px-8">
    <form @submit.prevent="createYard">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-1/3 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img @load="closeWaiting" class="h-64 w-full mx-auto object-contain"
                :src="court.imageUrl ? court.imageUrl : 'https://i.ibb.co/V2D9Tmb/istockphoto-471621500-612x612.jpg'"
                alt="" />
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
            <div class="flex items-center space-x-2 font-semibold text-gray-600 leading-8 px-4">
              <span clas="text-green-500">
                <font-awesome-icon icon="user" class="text-lg" />
              </span>
              <span class="tracking-wide text-lg">Thông Tin</span>
            </div>
            <!--information container-->
            <div class="grid md:grid-cols-1 gap-2 px-4 pb-5 mt-4 sm:grid-cols-1 text-normal">
              <div>
                <label class="text-[#747474]" for="username">Tên Sân</label>
                <div class="relative w-80">
                  <p v-if="!court.name" class="text-2xl text-red-500 absolute right-3 top-4">
                    *
                  </p>
                  <input placeholder="Tên Sân" type="text"
                    class="mt-2 w-80 px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                    required v-model="court.name" />
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
              <div class="container flex items-center mt-3">
                <div class="flex items-center justify-start mt-[-6px] mr-4">
                  <span>
                    <label class="text-[#747474]" for="username">Loại Sân</label>
                    <select v-model="court.typeId" id="courtType"
                      class="rounded-lg mt-2 text-md block pr-8 W-full text-sm text-gray-900 bg-gray-50 border border-gray-500 focus:ring-blue-500 focus:border-blue-500">
                      <option disabled value="-1">Chọn Loại Sân</option>
                      <option value="2">Sân Đất Nện</option>
                      <option value="3">Sân Cỏ</option>
                      <option value="4">Sân Cứng</option>
                    </select>
                  </span>
                </div>
                <div class="flex items-center justify-start mt-[-6px]">
                  <span>
                    <label class="text-[#747474]" for="username">Kích Thước Sân</label>
                    <select v-model="court.courtSizeId" id="courtSize"
                      class="rounded-lg mt-2 text-md block pr-8 W-full text-sm text-gray-900 bg-gray-50 border border-gray-500 focus:ring-blue-500 focus:border-blue-500">
                      <option disabled value="-1">Chọn Kích Thước</option>
                      <option s value="1">Kích Thước Lớn</option>
                      <option value="2">Kích Thước Tiêu Chuẩn</option>
                      <option value="3">Kích Thước Nhỏ</option>
                    </select>
                  </span>
                </div>
              </div>


            </div>

            <!--button control-->
            <div class="w-full flex items-center justify-end mt-8 pb-2">
              <div class="flex space-x-2 justify-center ">
                <button type="submit" class="
                  flex
                  items-center
                  px-10
                  py-2.5
                  bg-[#50AE01]
                  text-white
                  font-medium
                  text-sm
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-[#78d22f] hover:shadow-lg
                  focus:bg-[#78d22f]
                  focus:shadow-lg
                  focus:outline-none
                  focus:ring-0
                  active:bg-green-700 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                ">
                  <Icon icon="akar-icons:circle-plus-fill"></Icon>
                  <p class="pl-2">Tạo Sân</p>
                </button>
              </div>
            </div>
          </div>



          <!-- End of about section -->
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import swal from "sweetalert";
import Court from "@/models/Court.js";
import CourtService from "@/services/court.service.js";
import TokenService from "@/services/token/token.service.js";
import axios from "axios";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      court: new Court(),
      loading: false
    };
  },
  mounted() {
    if (!this.court.typeId) {
      this.court.typeId = -1
    }

    if (!this.court.courtSizeId) {
      this.court.courtSizeId = -1
    }
  },
  methods: {
    createYard() {
      this.loading = true;

      if (this.court.typeId === -1) {
        swal("Xin hãy chọn loại sân !", {
          icon: 'warning'
        }).then(() => {
          this.loading = false;
        })

      }

      if (this.court.courtSizeId === -1) {
        swal("Xin hãy chọn kích thước sân !", {
          icon: 'warning'
        }).then(() => {
          this.loading = false;
        })

      }

      if (!this.court.imageUrl) {
        swal("Xin hãy chọn hình ảnh sân !", {
          icon: 'warning'
        }).then(() => {
          this.loading = false;
        })
      }


      if (this.court.typeId !== -1 &&
        this.court.courtSizeId !== -1 &&
        this.court.imageUrl) {
        let vendorId = TokenService.getUser().Token.VendorId;
        if (vendorId !== 0) {
          this.court.vendorId = vendorId;
          CourtService.createCourt(this.court)
            .then(res => {
              if (res.data) {

                //reset information
                this.court = new Court();
                this.court.typeId = -1
                this.court.courtSizeId = -1


                this.$toast.open({
                  message: 'Tạo Sân Thành Công !',
                  position: 'top-right',
                  type: 'success',
                });
              }
            }).catch(err => {
               this.loading = true;
              console.log(err)
              this.$toast.open({
                message: 'Đã có lỗi xảy ra .Không thể tạo sân !',
                position: 'top-right',
                type: 'error',
              });
            }).finally(() => {
              this.loading = false;
            })
        } else {
          swal("Xin hãy tạo cửa hàng trước khi tạo sân !", {
            icon: 'warning'
          })
          this.loading = false;
        }
      }


    },
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
          this.court.imageUrl = res.data.data.image.url;
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
  },
};
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  width: 160px;
}
</style>
