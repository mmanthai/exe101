<template>
    <preloader-component :class="loading == false ? 'hidden' : ''" />

    <div class="container mx-auto px-8 h-[80%] lg:mt-4">
        <div class="w-[100%] h-full">
            <div class="container flex items-center justify-between">
                <span class="pt-4">
                    <h2 class="font-bold text-lg text-gray-600 dark:text-gray-200">
                        Danh Sách Thành Viên
                    </h2>
                    <p class="my-2 text-[#334D6E]">
                        Tổng số chủ sân : {{ membersTotal }}
                    </p>
                    <div @click="resetSearch" class="block mt-4">
                        <button type="button"
                            class="px-6 py-2 text-white text-base bg-gray-500 hover:bg-gray-600 rounded">Làm Mới
                        </button>
                    </div>
                </span>

                <div class="flex items-center justify-between">

                    <div class="container mx-auto flex px-4">
                        <div class="mx-auto flex items-center justify-center">
                            <div class="mx-auto flex items-center justify-center">
                                <div class="mr-5">
                                    <p class="text-gray-500 font-lexend font-normal mb-1">
                                        Trạng Thái
                                    </p>
                                    <select @change="filterOwner($event)" id="small"
                                        class="rounded-lg text-md block pr-8 W-full text-sm text-gray-900 bg-gray-50 border border-gray-500 focus:ring-blue-500 focus:border-blue-500">
                                        <option v-if="filterSelect === '1'" selected="true" value="1">
                                            Tất cả
                                        </option>
                                        <option v-else select="false" value="1">Tất cả</option>
                                        <option value="2">Hoạt Động</option>
                                        <option value="3">Bị Khóa</option>
                                    </select>
                                </div>
                                <div class="flex items-center relative mt-6">
                                    <span @click="searchOwner" class="text-2xl p-2 text-gray-600 absolute right-0">
                                        <Icon icon="ei:search" />
                                    </span>
                                    <input @keyup.enter="searchOwner" v-model="searchValue" type="text"
                                        placeholder="Search..."
                                        class="pr-10 rounded border border-gray-500 h-10 px-2 bg-gray-50 placeholder:text-sm focus:ring-600 mt-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto h-96 mt-6 min-w-full">
                <p class="text-red-500 text-center" v-if="this.filterArr.length === 0">
                    Không có tài khoản nào phù hợp
                </p>
                <table v-if="filterArr.length > 0" class="min-w-full">
                    <th class="px-6 py-3 text-sm font-medium leading-4 tracking-wider text-left text-[#334D6E] bg-gray-100 border-b border-gray-200 cursor-pointer"
                        @click="sortByField('id')">
                        ID
                        <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
                    </th>
                    <th class="px-6 py-3 text-sm font-medium leading-4 tracking-wider text-left text-[#334D6E] bg-gray-100 border-b border-gray-200 cursor-pointer"
                        @click="sortByField('fullName')">
                        Họ Tên
                        <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
                    </th>
                    <th class="px-6 py-3 text-sm font-medium leading-4 tracking-wider text-left text-[#334D6E] bg-gray-100 border-b border-gray-200 cursor-pointer"
                        @click="sortByField('email')">
                        Email
                        <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
                    </th>
                    <th class="px-6 py-3 text-sm font-medium leading-4 tracking-wider text-left text-[#334D6E] bg-gray-100 border-b border-gray-200 cursor-pointer"
                        @click="sortByField('phoneNumber')">
                        Điện Thoại
                        <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
                    </th>
                    <th class="px-6 py-3 text-sm font-medium leading-4 tracking-wider text-left text-[#334D6E] bg-gray-100 border-b border-gray-200 cursor-pointer"
                        @click="sortByField('status')">
                        Trạng Thái
                        <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
                    </th>
                    <th
                        class="px-6 py-3 text-sm font-medium leading-4 tracking-wider text-left text-[#334D6E] bg-gray-100 border-b border-gray-200">
                        Thao Tác
                    </th>
                    <tbody class="bg-white">
                        <tr v-for="member in filterArr" :key="member.id">
                            <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="ml-4 text-[#334D6E]">{{ member.Id }}</div>
                                </div>
                            </td>
                            <td class="px-6 py-5 border-b border-gray-200 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink object-contain">
                                        <img class="rounded-2xl mr-3 w-8 h-8" :src="member.Avatar" />
                                    </div>
                                    <div class="ml-4 text-[#334D6E]">{{ member.FullName }}</div>
                                </div>
                            </td>
                            <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="ml-4 text-[#334D6E]">{{ member.Email }}</div>
                                </div>
                            </td>
                            <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="ml-4 text-[#334D6E]">
                                        {{ member.PhoneNumber }}
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div class="flex items-center">
                                    <span v-if="member.Active" class="font-semibold text-[#50D222]">Đã
                                        kích hoạt</span>

                                    <span v-else class="font-semibold text-[#FF8494]">Chưa Kích Hoạt</span>
                                </div>
                            </td>
                            <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="ml-4 text-[#334D6E]">
                                        <div class="flex items-center">
                                            <Icon icon="ic:baseline-remove-red-eye"
                                                class="w-5 h-5 text-[#ACACAC] mr-2 cursor-pointer hover:text-gray-500"
                                                @click="memberDetail(member.id)" />
                                            <Icon v-if="member.status !== 0"
                                                class="w-5 h-5 text-[#ACACAC] mr-2 cursor-pointer hover:text-gray-500"
                                                icon="mdi:trash" />
                                            <Icon @click="unLockAccount(member.id)"
                                                class="w-5 h-5 text-[#ACACAC] mr-2 cursor-pointer hover:text-gray-500 mt-[-3px]"
                                                icon="gala:unlock" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex flex-col container mx-auto lg:mt-6 md:mt-0">
                    <div class="mx-auto flex items-center text-[#ACACAC] font-medium lg:mt-4 text-sm">
                        <nav v-if="membersTotal > param.PageSize" aria-label="Page navigation example">
                            <ul class="inline-flex -space-x-px">
                                <li>
                                    <span v-if="param.CurrentPage == 1"
                                        class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default">Trước</span>
                                    <span v-else
                                        class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                                        @click="previousPage">Trước</span>
                                </li>
                                <li v-for="page in totalPage" :key="page">
                                    <span v-if="page === param.CurrentPage" aria-current="page"
                                        class="py-2 px-3 cursor-default text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700">{{
                                                page
                                        }}</span>
                                    <a v-else href="#"
                                        class="py-2 px-3 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        @click="paging(page)">{{ page }}</a>
                                </li>
                                <li>
                                    <span v-if="param.CurrentPage == totalPage"
                                        class="py-2 px-3 cursor-default ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Sau</span>
                                    <span v-else
                                        class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                                        @click="nextPage">Sau</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--The Modal-->
    <!-- <ModalOwnerDetail :class="isHiddenModal === false ? 'hidden' : ''" :detail="ownerDetail" :click="countClick"
      :hiddenButton="true" :disabledInput="false" /> -->
</template>
<script>
// import ModalOwnerDetail from "./ModalOwnerDetail.vue";
import { Icon } from "@iconify/vue";
import swal from "sweetalert";
import UserService from "@/services/user.service.js";
import OwnerModal from "./YardOwnerModal.vue";
export default {
    name: "YardOwnerList",
    components: {
        Icon,
        OwnerModal,
    },
    mounted() {
        this.getListMember();
    },
    data() {
        return {
            loading: false,
            param: {
                PageSize: 5,
                queryString: "",
                CurrentPage: 1,
            },
            membersTotal: 0,
            totalPage: 0,
            profileDetail: {},
            isHiddenModal: false,
            countClick: 0,
            checkSort: 0,
            filterSelect: "1",
            filterArr: [],
            searchValue: "",
        };
    },
    methods: {
        memberDetail(id) {
            this.profileDetail = this.sortedList.find((x) => x.id == id);
            this.isHiddenModal = true;
            this.countClick++;
        },
        paging(page) {
            this.param.CurrentPage = page;
            this.getListMember();
        },
        getListMember() {
            this.loading = true;
            UserService.getListMember(this.param)
                .then(res => {
                    if (res.data) {
                        let data = res.data;
                        this.membersTotal = data.Count
                        this.totalPage = data.PageCount;
                        this.param.CurrentPage = data.PageNumber;
                        this.filterArr = data.Value;
                    }
                }).catch(err => {
                    console.log(err)
                }).finally(() => {
                    this.loading = false;
                })
        },
        searchOwner() {
            if (this.searchValue.length > 0) {
                this.param.queryString = this.searchValue;
                if (this.param.CurrentPage !== 1) {
                    this.param.CurrentPage = 1;
                }
                this.getListMember();
            }
        },
        resetSearch() {
            let reset_param = {
                PageSize: 5,
                queryString: "",
                CurrentPage: 1,
            }

            this.searchValue = "";
            this.param = reset_param;
            this.getListMember();
        },
        previousPage() {
            if (this.param.CurrentPage > 1) {
                this.param.CurrentPage--;
            }
            this.getListMember();
        },
        nextPage() {
            if (this.param.CurrentPage < this.totalPage) {
                this.param.CurrentPage++;
            }
            this.getListMember();
        }
    },

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
