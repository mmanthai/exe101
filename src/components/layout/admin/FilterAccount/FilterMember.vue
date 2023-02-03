<template>
    <div class="container mx-auto mt-6 min-w-full">
        <div class="float-right">
            <div class="flex items-center text-right">
                <div type="button" class="
              flex
              items-center
              px-4
              py-2.5
              font-medium
              text-sm
              leading-tight
              box-border
              border-2 border-b-0
              bg-gray-100
              hover:bg-gray-300
              duration-200
              transition
              ease-in-out
              cursor-pointer
            " @click="blockAllAccount">
                    <Icon class="w-4 h-4 text-red-500 mr-2 cursor-pointer" icon="ant-design:lock-filled" />
                    <p class="pl-1 text-gray-500 text-sm">Khóa</p>
                </div>
            </div>
        </div>
        <table class="min-w-full">
            <th class="
            px-6
            py-3
            text-sm
            font-medium
            leading-4
            tracking-wider
            text-left text-[#334D6E]
            bg-gray-100
            border-b border-gray-200
            cursor-pointer
          " @click="sortByField('id')">
                ID
                <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
            </th>
            <th class="
            px-6
            py-3
            text-sm
            font-medium
            leading-4
            tracking-wider
            text-left text-[#334D6E]
            bg-gray-100
            border-b border-gray-200
            cursor-pointer
          " @click="sortByField('fullName')">
                Họ Tên
                <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
            </th>
            <th class="
            px-6
            py-3
            text-sm
            font-medium
            leading-4
            tracking-wider
            text-left text-[#334D6E]
            bg-gray-100
            border-b border-gray-200
            cursor-pointer
          " @click="sortByField('email')">
                Email
                <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
            </th>
            <th class="
            px-6
            py-3
            text-sm
            font-medium
            leading-4
            tracking-wider
            text-left text-[#334D6E]
            bg-gray-100
            border-b border-gray-200
            cursor-pointer
          " @click="sortByField('phoneNumber')">
                Điện Thoại
                <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
            </th>
            <th class="
            px-6
            py-3
            text-sm
            font-medium
            leading-4
            tracking-wider
            text-left text-[#334D6E]
            bg-gray-100
            border-b border-gray-200
            cursor-pointer
          " @click="sortByField('cancelCount')">
                Số lần Hủy
                <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
            </th>
            <th class="
            px-6
            py-3
            text-sm
            font-medium
            leading-4
            tracking-wider
            text-left text-[#334D6E]
            bg-gray-100
            border-b border-gray-200
            cursor-pointer
          " @click="sortByField('status')">
                Trạng Thái
                <font-awesome-icon class="w-4 h-4 text-[#ACACAC]" icon="arrows-up-down" />
            </th>
            <th class="
            px-6
            py-3
            text-sm
            font-medium
            leading-4
            tracking-wider
            text-left text-[#334D6E]
            bg-gray-100
            border-b border-gray-200
            flex
            items-center
          ">
                Thao Tác
            </th>
            <th class="
            px-6
            text-sm
            font-medium
            leading-4
            tracking-wider
            text-left text-[#334D6E]
            bg-gray-100
            border-b border-gray-200
            cursor-pointer
          ">
                <input v-model="isSelectAll" id="checkBoxSelectAll" focus:ring-100 type="checkbox" class="mt-[-2px]" />
            </th>
            <tbody class="bg-white">
                <tr v-for="member in sortedList" :key="member.id">
                    <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="ml-4 text-[#334D6E]">{{ member.id }}</div>
                        </div>
                    </td>
                    <td class="px-6 py-5 border-b border-gray-200 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink object-contain">
                                <img class="rounded-2xl mr-3 w-8 h-8" :src="member.img" />
                            </div>
                            <div class="ml-4 text-[#334D6E]">{{ member.fullName }}</div>
                        </div>
                    </td>
                    <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="ml-4 text-[#334D6E]">{{ member.email }}</div>
                        </div>
                    </td>
                    <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="ml-4 text-[#334D6E]">
                                {{ member.phoneNumber }}
                            </div>
                        </div>
                    </td>
                    <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="ml-4 text-[#334D6E]">
                                {{ member.cancelCount }}
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div class="flex items-center">
                            <span v-if="member.status === 1" class="font-semibold text-[#50D222]">Hoạt Động</span>
                            <span v-else class="font-semibold text-red-500">Bị Khóa</span>
                        </div>
                    </td>
                    <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="ml-8 text-[#334D6E]">
                                <div class="flex items-center">
                                    <font-awesome-icon class="
                        w-5
                        h-5
                        text-[#ACACAC]
                        mr-2
                        cursor-pointer
                        hover:text-gray-500
                      " icon="eye" @click="memberDetail(member.id)" />
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="px-2 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div class="flex items-center ml-4">
                            <input focus:ring-100 type="checkbox" class="checkboxElement" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="flex flex-col container mx-auto lg:mt-6 md:mt-0">
            <!-- <p class="text-center md:my-2 my-4 text-[#334D6E]">
              Tổng số thành viên : {{ membersTotal }}
            </p> -->
            <div class="
            mx-auto
            flex
            items-center
            text-[#ACACAC]
            font-medium
            lg:mt-4
            text-sm
          "></div>
        </div>
        <!--The Modal-->
        <TheModal :class="isHiddenModal === true ? 'hidden' : ''" :profile="profileDetail" :click="countClick" />
    </div>

</template>
  
<script>
import swal from "sweetalert";
import { Icon } from "@iconify/vue";
import TheModal from "../MemberModal.vue";

export default {
    components: { Icon, TheModal },
    mounted() {
        let search_obj = {
            ...this.$store.getters["member/memberCancelManyTimes"](
                this.currentPage
            ),
        };

        this.sortedList = [...search_obj.search_arr];

        this.membersTotal = search_obj.totalSearch;
        this.totalPage = Math.ceil(this.membersTotal / this.pageSize);
    },
    data() {
        return {
            sortedList: [],
            membersTotal: 0,
            currentPage: 1,
            pageSize: 5,
            totalPage: 0,
            profileDetail: {},
            isHiddenModal: true,
            countClick: 0,
            checkSort: 0,
            isSelectAll: false,
        };
    },
    methods: {
        memberDetail(id) {
            this.profileDetail = this.sortedList.find((x) => x.id == id);
            this.isHiddenModal = false;
            this.countClick++;
        },
        sortByField(fieldSort) {
            if (this.checkSort == 0) {
                if (
                    fieldSort === "id" ||
                    fieldSort === "fullName" ||
                    fieldSort === "email" ||
                    fieldSort === "cancelCount"
                ) {
                    this.sortedList.sort((a, b) =>
                        parseInt(a[fieldSort]) < parseInt(b[fieldSort]) ? 1 : -1
                    );
                } else {
                    this.sortedList.sort((a, b) =>
                        a[fieldSort] > b[fieldSort] ? 1 : -1
                    );
                }

                this.checkSort = 1;
            } else {
                let search_obj = {
                    ...this.$store.getters["member/memberCancelManyTimes"](
                        this.currentPage
                    ),
                };

                this.sortedList = [...search_obj.search_arr];
                this.checkSort = 0;
            }
        },
        paging(page) {
            this.currentPage = page;

            let search_obj = this.$store.getters["member/searchMembers"](
                this.currentPage
            );

            this.sortedList = [...search_obj.search_arr];
            this.membersTotal = search_obj.totalSearch;

            this.totalPage = Math.ceil(this.membersTotal / this.pageSize);
        },
        showAlert() {
            swal({
                title: "Bạn có chắc chắn sẽ khóa tài khoản này không ?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    swal("Khóa Tài Khoản Thành Công !", {
                        icon: "success",
                    });
                }
            });
        },
        blockAllAccount() {
            let checkboxes = document.getElementsByClassName("checkboxElement");
            let arr_checkbox = [...checkboxes];
            let isSelect = 0;

            arr_checkbox.forEach((checkbox) => {
                if (checkbox.checked) {
                    isSelect++;
                }
            });

            if (isSelect === 0) {
                swal({
                    text: "Hãy chọn ít nhất 1 tài khoản để khóa !",
                    icon: "warning",
                });
            } else {
                swal("Bạn có chắc chắn sẽ khóa tài khoản đã chọn?", {
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        swal("Khóa Thành Công !", {
                            icon: "success",
                        });

                        if (this.isSelectAll) {
                            this.isSelectAll = false;
                        }
                        let checkboxs = document.getElementsByClassName("checkboxElement");
                        let arr_checkbox = [...checkboxs];

                        arr_checkbox.forEach((checkbox) => {
                            if (checkbox.checked) {
                                checkbox.checked = false;
                            }
                        });
                    }
                });
            }
        },
    },
    watch: {
        isSelectAll(value) {
            let checkboxs = document.getElementsByClassName("checkboxElement");
            let arr_checkbox = [...checkboxs];
            if (value) {
                arr_checkbox.forEach((checkbox) => {
                    checkbox.checked = true;
                });
            } else {
                arr_checkbox.forEach((checkbox) => {
                    checkbox.checked = false;
                });
            }
        },
    },
};
</script>