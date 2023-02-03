<template>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <div class="container p-6 rounded-md shadow-md bg-white mx-auto h-full w-[80%] mt-8 md:mt-0 min-w-[80%] relative">
        <form>
            <!--form control-->
            <div class="flex">
                <!--img container-->
                <div>
                    <div class="flex flex-col justify-start items-start lg:w-80 md:w-40 sm:w-20">
                        <img @load="closeWaiting" class="rounded h-64 object-cover mr-3 lg:w-60 md:w-40"
                            :src="srcImg" />
                        <label class="block mt-4">
                            <span class="sr-only">Choose File</span>
                            <input @change="uploadImg" type="file"
                                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                accept="image/*" />
                        </label>
                    </div>
                </div>

                <!--information container-->
                <div class="grid md:grid-cols-2 gap-6 mt-4 sm:grid-cols-1 text-normal">
                    <div>
                        <label class="text-[#747474]" for="username">Tài Khoản</label>
                        <input-component disabled="true" class="w-full mt-2 border-gray-800 text-sm text-gray-600"
                            :value="currentUser.UserName" />
                    </div>
                    <div>
                        <label class="text-[#747474]" for="username">Vai Trò</label>
                        <input-component disabled="true" class="w-full mt-2 border-gray-800 text-sm text-gray-600"
                            value="Admin" />
                    </div>
                    <div>
                        <label class="text-[#747474]" for="username">Họ Tên</label>
                        <div class="relative">
                            <p v-if="!currentUser.FullName" class="text-2xl text-red-500 absolute right-12 top-4">
                                *
                            </p>
                            <input placeholder="Họ Tên" type="text"
                                class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                                required v-model="currentUser.FullName" />
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
                        <label class="text-[#747474]" for="username">Email</label>
                        <div class="relative">
                            <p v-if="!currentUser.Email" class="text-2xl text-red-500 absolute right-12 top-4">
                                *
                            </p>
                            <input placeholder="Email" type="text"
                                class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                                required v-model="currentUser.Email" />
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
                        <label class="text-[#747474]" for="username">Số Điện Thoại</label>
                        <div class="relative">
                            <p v-if="!currentUser.PhoneNumber" class="text-2xl text-red-500 absolute right-12 top-4">
                                *
                            </p>
                            <input placeholder="Số Điện Thoại" type="text"
                                class="mt-2 w-[90%] px-3 py-2 place-holder-grey-400 text-grey-700 rounded text-md shadow focus:outline-none focus:ring-50 mb-2 pr-8"
                                required v-model="currentUser.PhoneNumber" />
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
                        Cập Nhật
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
import InputComponent from "@/components/ui/InputComponent.vue";

import axios from "axios";

export default {
    components: {
        InputComponent,
    },
    mounted() {
        this.currentUser = this.$store.getters["auth/getUser"].Token;
        this.loading = false;
        this.srcImg = this.currentUser.Avatar;
    },
    data() {
        return {
            currentUser: "",
            selectedFile: null,
            loading: true,
            srcImg: "",
        };
    },
    methods: {
        async uploadImg(evt) {
            this.loading = true;
            let apiKey = "3ce508644197fb15dcf4e916cf328c21";
            const baseUrlImgbb = "https://api.imgbb.com/1";

            this.selectedFile = evt.target.files[0];

            let body = new FormData();
            body.set("key", apiKey);
            body.append("image", this.selectedFile);

            await axios
                .post(baseUrlImgbb + "/upload", body)
                .then((res) => {
                    this.srcImg = res.data.data.image.url;
                })
                .catch((err) => {
                    console.log(err);
                    this.loading = false;
                });
        },
        hasHistory() {
            return window.history.length > 2;
        },
        closeWaiting() {
            this.loading = false;
        },
    },
};
</script>
  