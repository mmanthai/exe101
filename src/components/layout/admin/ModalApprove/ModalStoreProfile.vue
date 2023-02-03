<template>
    <div class="bg-gray-100">
        <div class="container mx-auto my-5 p-5 px-8">
            <div class="md:flex no-wrap md:-mx-2 pt-4">
                <!-- Left Side -->
                <div class="w-full md:w-1/3 md:mx-2">
                    <!-- Profile Card -->
                    <div class="bg-white p-3 border-t-4 border-green-400">
                        <div class="image overflow-hidden">
                            <img class="h-72 object-cover w-full mx-auto" :src="userProfile.Avatar" alt="" />
                        </div>
                    </div>
                    <!-- End of profile card -->
                    <div class="my-4"></div>
                </div>
                <!-- Right Side -->
                <div class="w-full md:w-3/4 mx-2 h-80">
                    <!-- Profile tab -->
                    <!-- About Section -->
                    <div class="bg-white p-3 shadow-sm rounded-sm h-full">
                        <div class="flex items-center space-x-2 font-semibold text-gray-600 leading-8 px-4">
                            <span clas="text-green-500">
                                <font-awesome-icon icon="user" class="text-lg" />
                            </span>
                            <div class="flex items-center justify-middle">
                                <span class="tracking-wide text-lg">Thông Tin</span>
                            </div>
                        </div>
                        <div class="text-gray-700 mt-2">
                            <div class="grid grid-col">
                                <span class="flex items-center">
                                    <div class="px-4 font-semibold w-52">Tên Cửa Hàng:</div>
                                    <div class="py-2">
                                        <div class="px-1">
                                            <div class="relative">
                                                <div class="px-1 py-1 text-left">
                                                    {{ userProfile.VendorName }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span class="flex items-center">
                                    <div class="pl-4 pr-2 mt-[-25px] font-semibold w-60">
                                        Địa chỉ:
                                    </div>
                                    <div class="px-1 py-2">
                                        <div class="px-1 py-1">
                                            <div class="relative">
                                                <div class="px-1 py-1 text-left">
                                                    {{ userProfile.Address }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>

                                <span class="flex items-center">
                                    <div class="pl-4 pr-2 font-semibold w-52">
                                        Khung Giờ Hoạt Động:
                                    </div>
                                    <div class="px-1 flex items-center">
                                        <div class="px-1">
                                            <div class="relative">
                                                <div class="px-1 py-1 text-left">
                                                    {{
                                                            new Date(userProfile.OpenTime)
                                                                .toLocaleTimeString()
                                                                .slice(0, 5)
                                                    }}
                                                    -
                                                    {{
                                                            new Date(userProfile.CloseTime)
                                                                .toLocaleTimeString()
                                                                .slice(0, 5)
                                                    }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span class="flex items-center py-3">
                                    <div class="pl-4 pr-2 font-semibold w-44">Email:</div>
                                    <div class="px-1">
                                        <div class="px-1 pt-1">
                                            <div class="relative">
                                                <div class="px-1 py-1 text-left">
                                                    {{ userProfile.Email }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span class="flex items-center">
                                    <div class="pl-4 pr-2 font-semibold w-44">Số Điện Thoại:</div>
                                    <div class="px-1">
                                        <div class="px-1">
                                            <div class="relative">
                                                <div class="px-1 py-1 text-left">
                                                    {{ userProfile.PhoneNumber }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- End of about section -->
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
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
};
</script>
  