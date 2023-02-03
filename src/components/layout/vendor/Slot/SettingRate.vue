<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div class="p-8 flex flex-col items-center justify-between">
    <div
      class="mt-2 bg-white dark:bg-gray-800 p-3 w-[60%] px-4 rounded-md box-border shadow"
    >
      <p class="text-red-500 text-sm italic pl-4">
        * giá hiển thị = giá cơ bản x hệ số
      </p>

      <ul
        v-if="isSelectedTab === 'NormalDay'"
        class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0"
        id="tabs-tab3"
        role="tablist"
      >
        <!--active-->
        <li role="presentation">
          <div
            class="w-full block font-normal text-small leading-tight uppercase border-x-0 border-t-0 border-b-4 px-6 py-3 my-2 active"
            role="tab"
          >
            <span class="mx-2 text-[13px] text-[#434141] font-bold"
              >Ngày Thường</span
            >
          </div>
        </li>

        <li
          @click="setSelectedTab('WeekendDay')"
          class="nav-item"
          role="presentation"
        >
          <span
            class="cursor-pointer w-full block font-medium text-sm leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-profile-tab3"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile3"
            role="tab"
            aria-controls="tabs-profile3"
            aria-selected="false"
          >
            <span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
              >Cuối Tuần</span
            >
          </span>
        </li>

        <!--active-->
        <li
          @click="setSelectedTab('HolidayDay')"
          class="nav-item"
          role="presentation"
        >
          <span
            class="cursor-pointer w-full block font-medium text-sm leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-profile-tab3"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile3"
            role="tab"
            aria-controls="tabs-profile3"
            aria-selected="false"
          >
            <span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
              >Ngày Lễ</span
            >
          </span>
        </li>
      </ul>
      <ul
        v-if="isSelectedTab === 'WeekendDay'"
        class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0"
        id="tabs-tab3"
        role="tablist"
      >
        <li
          @click="setSelectedTab('NormalDay')"
          class="nav-item"
          role="presentation"
        >
          <span
            class="cursor-pointer w-full block font-normal text-normal uppercase leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-profile-tab3"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile3"
            role="tab"
            aria-controls="tabs-profile3"
            aria-selected="false"
            ><span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
              >Ngày Thường</span
            ></span
          >
        </li>

        <!--active-->
        <li role="presentation">
          <div
            class="w-full block font-semibold text-normal leading-tight uppercase border-x-0 border-t-0 border-b-4 px-6 py-3 my-2 active"
            role="tab"
          >
            <span class="mx-2 text-[13px] text-[#434141] font-bold pt-1"
              >Cuối Tuần</span
            >
          </div>
        </li>

        <li
          @click="setSelectedTab('HolidayDay')"
          class="nav-item"
          role="presentation"
        >
          <span
            class="cursor-pointer w-full block font-normal text-normal uppercase leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-profile-tab3"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile3"
            role="tab"
            aria-controls="tabs-profile3"
            aria-selected="false"
            ><span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
              >Ngày Lễ</span
            ></span
          >
        </li>
      </ul>
      <ul
        v-if="isSelectedTab === 'HolidayDay'"
        class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0"
        id="tabs-tab3"
        role="tablist"
      >
        <li
          @click="setSelectedTab('NormalDay')"
          class="nav-item"
          role="presentation"
        >
          <span
            class="cursor-pointer w-full block font-normal text-normal uppercase leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-profile-tab3"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile3"
            role="tab"
            aria-controls="tabs-profile3"
            aria-selected="false"
            ><span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
              >Ngày Thường</span
            ></span
          >
        </li>

        <li
          @click="setSelectedTab('WeekendDay')"
          class="nav-item"
          role="presentation"
        >
          <span
            class="cursor-pointer w-full block font-normal text-normal uppercase leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            id="tabs-profile-tab3"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile3"
            role="tab"
            aria-controls="tabs-profile3"
            aria-selected="false"
            ><span class="mx-2 text-[#334D6E] text-[13px] font-medium pt-1"
              >Cuối Tuần</span
            ></span
          >
        </li>

        <!--active-->
        <li role="presentation">
          <div
            class="w-full block font-semibold text-normal leading-tight uppercase border-x-0 border-t-0 border-b-4 px-6 py-3 my-2 active"
            role="tab"
          >
            <span class="mx-2 text-[13px] text-[#434141] font-bold pt-1"
              >Ngày Lễ</span
            >
          </div>
        </li>
      </ul>
      <component :rate_setting="obj_rate" :is="isSelectedTab"></component>
      <div @click="settingRate" class="flex justify-end pt-4 px-8">
        <button
          class="modal-close px-4 bg-indigo-500 p-1 py-2 rounded-lg text-white hover:bg-indigo-400"
        >
          Áp Dụng
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NormalDay from "../RatingByDate/NormalDay.vue";
import HolidayDay from "../RatingByDate/HolidayDay.vue";
import WeekendDay from "../RatingByDate/WeekendDay.vue";
import TokenService from "@/services/token/token.service";
import UserService from "@/services/user.service";
import SlotService from "@/services/slot.service";

export default {
  components: {
    NormalDay,
    HolidayDay,
    WeekendDay,
  },
  mounted() {
    let userProfile = TokenService.getUser().Token;
    this.loading = true;
    UserService.getOwnerProfile(userProfile.UserId)
      .then((res) => {
        let user_profile = res.data;

        if (user_profile.Vendor.Id) {
          this.vendorId = user_profile.Vendor.Id;
          this.param.vendorId = user_profile.Vendor.Id;
          SlotService.getRatingByVendorId(this.param)
            .then((res) => {
              let rating_response = res.data.Value;
              let start_index = 0;
              if (rating_response.length > 0) {
                rating_response.forEach((rating) => {
                  this.obj_rate[start_index].coefficient = rating.Coefficient;
                  this.obj_rate[start_index].id = rating.Id;
                  start_index++;
                });
                console.log(this.obj_rate);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err.response);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  data() {
    return {
      isSelectedTab: "NormalDay",
      param: {
        id: "",
        vendorId: "",
        pageSize: "",
        query: "",
        currentPage: 1,
      },
      vendorId: "",
      obj_rate: [
        {
          id: "",
          coefficient: 0,
          vendorId: "",
          active: true,
          typeId: 1,
        },
        {
          id: "",
          coefficient: 0,
          vendorId: "",
          active: true,
          typeId: 2,
        },
        {
          id: "",
          coefficient: 0,
          vendorId: "",
          active: true,
          typeId: 3,
        },
      ],
      loading: false,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.isSelectedTab = tab;
    },
    settingRate() {
      this.loading = true;

      let check = 0;
      this.obj_rate.forEach((rate) => {
        if (rate.coefficient == 0) {
          check++;
        }
      });

      if (check > 0) {
        this.$toast.open({
          message: "Xin hãy cài đặt đủ hệ số theo ngày !",
          position: "top-right",
          type: "error",
        });
        this.loading = false;
      } else {
        this.obj_rate.forEach((rate) => {
          rate.vendorId = this.vendorId;
        });

        SlotService.createRatingForSlotByDate(this.obj_rate)
          .then((res) => {
            if (res.data) {
              this.$toast.open({
                message: "Hoàn Tất Cài Đặt Thành Công!",
                position: "top-right",
                type: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);

            this.$toast.open({
              message: "Đã có lỗi xảy ra. Không thể cài đặt tỉ lệ !",
              position: "top-right",
              type: "error",
            });
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>
1
