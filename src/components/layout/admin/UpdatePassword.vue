<template>
  <div class="container p-6 rounded-md shadow-md bg-white mx-auto h-full w-[80%] mt-8 md:mt-0 min-w-[80%] relative">
    <form>
      <!--form control-->
      <div class="flex">
        <!--information container-->
        <div class="w-[80%] grid md:grid-cols-2 gap-6 mt-4 sm:grid-cols-1 text-normal">
          <div>
            <label class="text-[#747474]" for="username">Tài Khoản</label>
            <input-component disabled="true" class="w-[90%] mt-2 border-gray-800 text-sm text-gray-600" value="Admin" />
          </div>
          <div>
            <label class="text-[#747474]" for="username">Mật Khẩu Cũ</label>
            <div class="relative">
              <p v-if="!currentUser.CurrentPassword" class="text-2xl text-red-500 absolute right-12 top-4">
                *
              </p>
              <input placeholder="Nhập mật khẩu cũ" type="text"
                class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                required v-model="currentUser.CurrentPassword" />
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
            <label class="text-[#747474]" for="username">Mật Khẩu Mới</label>
            <div class="relative">
              <p v-if="!currentUser.NewPassWord" class="text-2xl text-red-500 absolute right-12 top-4">
                *
              </p>
              <input placeholder="Nhập mật khẩu mới" type="text"
                class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                required v-model="currentUser.NewPassWord" />
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
            <label class="text-[#747474]" for="username">Xác Nhận Mật Khẩu</label>
            <div class="relative">
              <p v-if="!currentUser.ConfirmPassword" class="text-2xl text-red-500 absolute right-12 top-4">
                *
              </p>
              <input placeholder="Xác nhận mật khẩu mới" type="text"
                class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                required v-model="currentUser.ConfirmPassword" />
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
      <div class="w-full flex items-center justify-end">
        <div>
          <nav>
            <button type="button" @click="hasHistory() ? $router.go(-1) : $router.push('/')"
              class="mx-auto bg-gray-500 hover:bg-gray-700 duration-200 text-white font-medium py-2 px-4 rounded w-20 text-md">
              &laquo; Back
            </button>
          </nav>
        </div>

        <div>
          <button
            class="mx-auto bg-green-500 hover:bg-green-700 duration-200 text-white font-medium py-2 px-4 rounded w-25 text-md ml-3">
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputComponent from "@/components/ui/InputComponent.vue";
import TokenService from "@/services/token/token.service";
export default {
  components: {
    InputComponent,
  },
  methods: {
    hasHistory() {
      return window.history.length > 2;
    },
  },
  mounted() {
    this.currentUser = TokenService.getUser().Token;
    this.currentUser["CurrentPassword"] = "";
    this.currentUser["NewPassWord"] = "";
    this.currentUser["ConfirmPassword"] = "";
  },
  data() {
    return {
      currentUser: "",
    };
  },
};
</script>
