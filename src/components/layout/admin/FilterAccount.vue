<template>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <div class="px-6 flex flex-col items-center justify-between">
        <div class="mt-2 dark:bg-gray-800 p-5 w-full px-4 rounded-md box-border">
            <div class="container flex items-center justify-between">
                <span class="pt-2">
                    <h2 class="font-bold text-lg text-gray-600 dark:text-gray-200">
                        Danh Sách Phê Duyệt
                    </h2>
                    <p class="my-2 text-[#334D6E]">
                        Tổng số yêu cầu : {{ displayInfo.totalRequest }}
                    </p>
                </span>
                <div class="flex items-center justify-between">
                    <div class="container mx-auto flex px-4">
                        <div class="mx-auto flex items-center justify-center">
                            <div class="mr-5">
                                <p class="text-gray-500 font-lexend font-normal mb-1">
                                    Trạng Thái
                                </p>
                                <select id="small" class="
                      rounded-lg
                      text-md
                      block
                      pr-8
                      W-full
                      text-sm text-gray-900
                      bg-gray-50
                      border border-gray-500
                      focus:ring-blue-500 focus:border-blue-500
                    ">
                                    <option value="Active">Tất cả</option>
                                    <option value="Active">Chờ Phê Duyệt</option>
                                    <option value="Active">Phê Duyệt</option>
                                    <option value="Active">Từ Chối</option>
                                </select>
                            </div>
                            <div class="flex items-center relative mt-6">
                                <span class="text-2xl p-2 text-gray-400 absolute right-0">
                                    <Icon icon="ei:search" />
                                </span>
                                <input type="text" placeholder="Search..." class="
                      pr-10
                      rounded
                      border border-gray-500
                      bg-gray-50
                      placeholder:text-sm
                      focus:ring-600
                    " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="wrapping-table mt-10">
                <div class="container mx-auto px-8 h-[80%] lg:mt-8">
                    <div class="w-[100%] h-full">
                        <div class="container mx-auto h-96 mt-8 md:mt-0 min-w-full">
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
                    ">
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
                    ">
                                    Tên Cửa Hàng
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
                    ">
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
                    ">
                                    Số Điện Thoại
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
                    ">
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
                    ">
                                    Thao Tác
                                </th>
                                <tbody class="bg-white">
                                    <tr v-for="member in approveRequestInfo" :key="member.id">
                                        <td class="
                          px-6
                          py-5
                          border-b border-gray-200
                          whitespace-nowrap
                        ">
                                            <div class="flex items-center">
                                                <div class="flex-shrink object-contain">
                                                    <img @load="closeWaiting" class="rounded-2xl mr-3 w-8 h-8"
                                                        :src="member.Avatar" />
                                                </div>
                                                <div class="ml-4 text-[#334D6E]">
                                                    {{ member.FullName }}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="
                          px-2
                          py-4
                          border-b border-gray-200
                          whitespace-nowrap
                        ">
                                            <div class="flex items-center">
                                                <div class="ml-4 text-[#334D6E]">
                                                    {{ member.VendorName }}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="
                          px-2
                          py-4
                          border-b border-gray-200
                          whitespace-nowrap
                        ">
                                            <div class="flex items-center">
                                                <div class="ml-4 text-[#334D6E]">
                                                    {{ member.Email }}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="
                          px-2
                          py-4
                          border-b border-gray-200
                          whitespace-nowrap
                        ">
                                            <div class="flex items-center">
                                                <div class="ml-4 text-[#334D6E]">
                                                    {{ member.PhoneNumber }}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="
                          px-6
                          py-4
                          border-b border-gray-200
                          whitespace-nowrap
                        ">
                                            <div class="flex items-center">
                                                <span v-if="member.StatusTicked == 1"
                                                    class="font-semibold text-pink-500">Đang Chờ
                                                    Duyệt</span>
                                                <span v-else-if="member.StatusTicked == 2"
                                                    class="font-semibold text-[#50D222]">Đã
                                                    Duyệt</span>
                                                <span v-else-if="member.StatusTicked == 3"
                                                    class="font-semibold text-red-500">Từ
                                                    Chối</span>
                                            </div>
                                        </td>
                                        <td class="
                          px-2
                          py-4
                          border-b border-gray-200
                          whitespace-nowrap
                        ">
                                            <div v-if="member.status == 1" class="flex items-center">
                                                <div class="ml-4 text-[#334D6E]">
                                                    <div class="flex items-center">
                                                        <font-awesome-icon class="
                                  w-6
                                  h-6
                                  mr-2
                                  cursor-pointer
                                  text-gray-500
                                  hover:text-gray-700
                                  active:text-gray-800
                                  duration-200
                                " icon="eye" @click="showDetail(member.id)" />

                                                        <Icon @click="AcceptRequest(member.id)" class="
                                  w-6
                                  h-6
                                  mr-2
                                  cursor-pointer
                                  text-green-500
                                  hover:text-green-700
                                  active:text-green-800
                                  duration-200
                                " icon="akar-icons:circle-check-fill" />

                                                        <Icon class="
                                  w-7
                                  h-7
                                  text-red-500
                                  mr-2
                                  cursor-pointer
                                  hover:text-red-700
                                  active:text-red-800
                                  duration-200
                                " icon="ic:round-cancel" @click="showAlert(member.id)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-else class="flex items-center">
                                                <div class="ml-4 text-[#334D6E]">
                                                    <div class="flex items-center">
                                                        <Icon @click="showDetail(member.Id)" class="
                                  w-7
                                  h-7
                                  mr-2
                                  cursor-pointer
                                  text-gray-500
                                  hover:text-gray-700
                                  active:text-gray-800
                                  duration-200
                                " icon="ant-design:eye-filled" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="flex flex-col container mx-auto lg:mt-8 md:mt-0">
                        <div class="
                  mx-auto
                  flex
                  items-center
                  text-[#ACACAC]
                  font-medium
                  lg:mt-4
                  text-sm
                ">
                            <nav v-show="pageCount > 1" aria-label="Page navigation example mx-auto">
                                <ul class="inline-flex -space-x-px">
                                    <li>
                                        <span v-if="currentPage == 1" class="
                          py-2
                          px-3
                          ml-0
                          leading-tight
                          text-gray-500
                          bg-white
                          rounded-l-lg
                          border border-gray-300
                          hover:bg-gray-100 hover:text-gray-700
                          dark:bg-gray-800
                          dark:border-gray-700
                          dark:text-gray-400
                          dark:hover:bg-gray-700
                          dark:hover:text-white
                          cursor-default
                        ">Previous</span>
                                        <span v-else class="
                          py-2
                          px-3
                          ml-0
                          leading-tight
                          text-gray-500
                          bg-white
                          rounded-l-lg
                          border border-gray-300
                          hover:bg-gray-100 hover:text-gray-700
                          dark:bg-gray-800
                          dark:border-gray-700
                          dark:text-gray-400
                          dark:hover:bg-gray-700
                          dark:hover:text-white
                          cursor-pointer
                        ">Previous</span>
                                    </li>
                                    <li v-for="page in 2" :key="page">
                                        <span v-if="page === 1" aria-current="page" class="
                          py-2
                          px-3
                          text-blue-600
                          bg-blue-50
                          border border-gray-300
                          hover:bg-blue-100 hover:text-blue-700
                          dark:border-gray-700 dark:bg-gray-700 dark:text-white
                        ">{{ page }}</span>
                                        <a v-else href="#" class="
                          py-2
                          px-3
                          leading-tight
                          text-gray-500
                          bg-white
                          border border-gray-300
                          hover:bg-gray-100 hover:text-gray-700
                          dark:bg-gray-800
                          dark:border-gray-700
                          dark:text-gray-400
                          dark:hover:bg-gray-700
                          dark:hover:text-white
                        ">{{ page }}</a>
                                    </li>
                                    <li>
                                        <span class="
                          py-2
                          px-3
                          ml-0
                          leading-tight
                          text-gray-500
                          bg-white
                          rounded-r-lg
                          border border-gray-300
                          hover:bg-gray-100 hover:text-gray-700
                          dark:bg-gray-800
                          dark:border-gray-700
                          dark:text-gray-400
                          dark:hover:bg-gray-700
                          dark:hover:text-white
                          cursor-pointer
                        ">Next</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--The Modal-->
    <ModalOwnerDetail @accept="AcceptRequest" @decline="showAlert" :hidden-button="
        ownerDetail.status === 2 || ownerDetail.status === 3 ? true : false
    " :disabledInput="true" :class="isHiddenModal === false ? 'hidden' : ''" :detail="ownerDetail"
        :click="countClick" />
</template>
  
<script>
import { Icon } from "@iconify/vue";
import ModalOwnerDetail from "./ModalOwnerDetail.vue";
// import TokenService from "@/services/token/token.service";
import UserService from "@/services/user.service";
import VendorService from "@/services/vendor.service";
import swal from "sweetalert";

export default {
    components: { Icon, ModalOwnerDetail },
    data() {
        return {
            // approveList: [
            //     {
            //         id: 1,
            //         img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
            //         storeName: "Thủ Đức Tennis",
            //         owner: "Nguyễn Công Thái Sơn",
            //         openTime: "5:00 - 22:00",
            //         address:
            //             "18 Linh Trung, P. Linh Trung, quận Thủ Đức, TP. Hồ Chí Minh.",
            //         email: "huysenior@gmail.com",
            //         phoneNumber: "0978145440",
            //         rentalNo: "3",
            //         listYard: [
            //             {
            //                 id: 1,
            //                 nameYard: "Sân 1",
            //                 typeYard: "Sân Đất Nện",
            //                 size: "",
            //             },
            //             {
            //                 id: 2,
            //                 nameYard: "Sân 2",
            //                 typeYard: "Sân Cỏ",
            //                 size: "",
            //             },
            //             {
            //                 id: 2,
            //                 nameYard: "Sân 3",
            //                 typeYard: "Sân Cứng",
            //                 size: "",
            //             },
            //         ],
            //         status: 1,
            //         requestTime: "20/06/2022",
            //     },
            //     {
            //         id: 2,
            //         img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
            //         storeName: "Thủ Đức Tennis",
            //         owner: "Nguyễn Công Thái Sơn",
            //         openTime: "5:00 - 22:00",
            //         address:
            //             "18 Linh Trung, P. Linh Trung, quận Thủ Đức, TP. Hồ Chí Minh.",
            //         email: "huysenior@gmail.com",
            //         phoneNumber: "0978145440",
            //         rentalNo: "3",
            //         listYard: [
            //             {
            //                 id: 1,
            //                 nameYard: "Sân 1",
            //                 typeYard: "Sân Đất Nện",
            //                 size: "",
            //             },
            //             {
            //                 id: 2,
            //                 nameYard: "Sân 2",
            //                 typeYard: "Sân Cỏ",
            //                 size: "",
            //             },
            //             {
            //                 id: 2,
            //                 nameYard: "Sân 3",
            //                 typeYard: "Sân Cứng",
            //                 size: "",
            //             },
            //         ],
            //         status: 1,
            //         requestTime: "20/06/2022",
            //     },
            //     {
            //         id: 3,
            //         img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
            //         storeName: "Thủ Đức Tennis",
            //         owner: "Nguyễn Công Thái Sơn",
            //         openTime: "5:00 - 22:00",
            //         address:
            //             "18 Linh Trung, P. Linh Trung, quận Thủ Đức, TP. Hồ Chí Minh.",
            //         email: "huysenior@gmail.com",
            //         phoneNumber: "0978145440",
            //         rentalNo: "3",
            //         listYard: [
            //             {
            //                 id: 1,
            //                 nameYard: "Sân 1",
            //                 typeYard: "Sân Đất Nện",
            //                 size: "",
            //             },
            //             {
            //                 id: 2,
            //                 nameYard: "Sân 2",
            //                 typeYard: "Sân Cỏ",
            //                 size: "",
            //             },
            //             {
            //                 id: 2,
            //                 nameYard: "Sân 3",
            //                 typeYard: "Sân Cứng",
            //                 size: "",
            //             },
            //         ],
            //         status: 1,
            //         requestTime: "20/06/2022",
            //     },
            //     {
            //         id: 4,
            //         img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
            //         storeName: "Thủ Đức Tennis",
            //         owner: "Nguyễn Công Thái Sơn",
            //         openTime: "5:00 - 22:00",
            //         address:
            //             "18 Linh Trung, P. Linh Trung, quận Thủ Đức, TP. Hồ Chí Minh.",
            //         email: "huysenior@gmail.com",
            //         phoneNumber: "0978145440",
            //         rentalNo: "3",
            //         listYard: [
            //             {
            //                 id: 1,
            //                 nameYard: "Sân 1",
            //                 typeYard: "Sân Đất Nện",
            //                 size: "",
            //             },
            //             {
            //                 id: 2,
            //                 nameYard: "Sân 2",
            //                 typeYard: "Sân Cỏ",
            //                 size: "",
            //             },
            //             {
            //                 id: 2,
            //                 nameYard: "Sân 3",
            //                 typeYard: "Sân Cứng",
            //                 size: "",
            //             },
            //         ],
            //         status: 1,

            //         requestTime: "20/06/2022",
            //         statusTransaction: "1",
            //     },
            //     {
            //         id: 5,
            //         img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
            //         storeName: "Thủ Đức Tennis",
            //         owner: "Nguyễn Công Thái Sơn",
            //         openTime: "5:00 - 22:00",
            //         address:
            //             "18 Linh Trung, P. Linh Trung, quận Thủ Đức, TP. Hồ Chí Minh.",
            //         email: "huysenior@gmail.com",
            //         phoneNumber: "0978145440",
            //         rentalNo: "3",
            //         listYard: [
            //             {
            //                 id: 1,
            //                 nameYard: "Sân 1",
            //                 typeYard: "Sân Đất Nện",
            //                 size: "",
            //             },
            //             {
            //                 id: 2,
            //                 nameYard: "Sân 2",
            //                 typeYard: "Sân Cỏ",
            //                 size: "",
            //             },
            //             {
            //                 id: 2,
            //                 nameYard: "Sân 3",
            //                 typeYard: "Sân Cứng",
            //                 size: "",
            //             },
            //         ],
            //         status: 1,

            //         requestTime: "20/06/2022",
            //     },
            // ],
            isHiddenModal: false,
            ownerDetail: "",
            countClick: 0,
            param: {
                pageSize: 5,
                query: "",
                currentPage: 1,
            },
            displayInfo: {
                pageCount: 0,
                totalRequest: 0,
            },
            loading: true,

            requestList: {},
            approveRequestInfo: [],
            hiddenButton: false
        };
    },
    created() {
        this.loadApproveRequest();
    },
    methods: {
        showDetail(Id) {
            this.isHiddenModal = true;
            this.countClick++;
            this.ownerDetail = this.approveRequestInfo.find((x) => x.Id == Id);



        },
        loadApproveRequest() {
            VendorService.loadVendorRequestApprove(this.param)
                .then((res) => {
                    this.requestList = { ...res.data };
                    this.displayInfo.totalRequest = this.requestList.Count;
                    this.displayInfo.pageCount = this.requestList.PageCount;




                    this.requestList.Value.forEach((info) => {
                        UserService.getOwnerProfile(info.InsertedBy)
                            .then((res) => {
                                if (res.data) {
                                    let object_request = res.data;
                                    object_request['IdTicket'] = info.Id;
                                    object_request['StatusTicked'] = info.StatusId;
                                    object_request['IdTicket'] = info.Id;
                                    object_request['VendorId'] = info.RecordId;
                                    this.approveRequestInfo.push(res.data);
                                }
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    });
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    this.loading = false;
                });


        },
        AcceptRequest(id) {
            this.loading = true;

            swal("Bạn có chắc chắn phê duyệt chủ sân này không ?", {
                buttons: ["Hủy", "Đồng Ý"],
            }).then((value) => {
                if (value) {
                    VendorService.approveVendorRequest(id)
                        .then((res) => {
                            if (res.data) {
                                this.$toast.open({
                                    message: "Phê Duyệt Thành Công !",
                                    position: "top-right",
                                    type: "success",
                                });
                            }
                            this.approveRequestInfo = [];
                            this.loadApproveRequest();
                        })
                        .catch((err) => {
                            console.log(err);
                            this.$toast.open({
                                message: "Đã có lỗi xảy ra !",
                                position: "top-right",
                                type: "error",
                            });
                        });
                }

            });
        },
        showAlert(id) {

            this.loading = true;



            swal("Bạn có chắc chắn sẽ từ chối chủ sân này không?", {
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    this.$swal
                        .fire({
                            title: "Lý Do Từ Chối",
                            input: "textarea",
                            confirmButtonText: "Xác Nhận",
                            focusConfirm: false,
                            preConfirm: (value) => {
                                if (!value) {
                                    this.$swal.showValidationMessage(`Xin hãy nhập lý do !`);
                                }
                                return { reason: value };
                            },
                        })
                        .then((result) => {
                            if (result.value.reason.length > 0) {
                                let rejectReason = result.value.reason;

                                VendorService.rejectVendorRequest(id, rejectReason)
                                    .then(res => {
                                        if (res.data) {
                                            this.$toast.open({
                                                message: "Đã Từ Chối !",
                                                position: "top-right",
                                                type: "success",
                                            });

                                            this.approveRequestInfo = [];
                                            this.loadApproveRequest();
                                        }
                                    }).catch(err => {
                                        console.log(err)
                                        this.$toast.open({
                                            message: "Đã có lỗi xảy ra !",
                                            position: "top-right",
                                            type: "error",
                                        });

                                    }).finally(() => {
                                        this.loading = false;
                                    })

                            } else {
                                this.loading = false;
                            }
                        });
                }
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
    height: 42px;
}

input:focus {
    outline: none;
    border: none;
}
</style>