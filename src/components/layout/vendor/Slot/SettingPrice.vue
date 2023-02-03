<template>
  <div>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <div class="p-8 flex flex-col items-center justify-between">
      <div class="mt-2 bg-white dark:bg-gray-800 p-5 w-[50%] px-4 rounded-md box-border shadow">
        <span>
          <p class="text-red-500 text-sm italic mb-2">
            * Ấn vào cài đặt để cài giá tiền cơ bản cho mỗi loại sân
          </p>
          <h2 class="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Danh Sách Loại Sân
          </h2>
        </span>
        <div class="wrapping-table mt-10">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="uppercase px-6 py-3">Loại Sân</th>
                <th scope="col" class="uppercase px-6 py-3">
                  Cài Đặt Giá Tiền
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                v-for="court in listTypeYard" :key="court.id">
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <div class="flex-shrink object-contain">
                      <img class="rounded mr-3 w-20 h-12" :src="court.img" />
                    </div>
                    <div class="ml-4 text-[#334D6E]">{{ court.yardType }}</div>
                  </div>
                </td>
                <td class="px-12 py-4">
                  <Icon class="w-7 h-7 hover:text-gray-600 cursor-pointer" icon="ant-design:setting-filled"
                    @click="yardDetail(court.id)" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div @click="checkSetting" class="flex justify-end pt-4 px-8">
          <button class="modal-close px-4 bg-indigo-500 p-1 py-2 rounded-lg text-white hover:bg-indigo-400">
            Áp Dụng
          </button>
        </div>
      </div>
    </div>
    <!--The Modal-->
    <teleport to="#app">
      <ModalSetting v-if="!isHiddenModal" :detail="slotDetail" :idType="idTypeCourt" :click="countClick" />
    </teleport>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import ModalSetting from "./ModalSetting.vue";
import SlotService from "@/services/slot.service";
import TokenService from "@/services/token/token.service";
import UserService from "@/services/user.service";

export default {
  components: {
    Icon,
    ModalSetting,
  },
  created() {
    this.userProfile = TokenService.getUser().Token;
    this.getListSlotOfVendor();
  },
  data() {
    return {
      userProfile: {},
      idTypeCourt: "0",
      isHiddenModal: true,
      loading: false,
      slotDetail: {},
      param: {
        vendorId: "",
        pageSize: "",
        query: "",
        currentPage: "",
      },
      countClick: 0, // using for display again when choose the same yard type
      listTypeYard: [
        {
          img: "https://thegioithethao.vn/upload_images/images/2022/01/22/4(1).jpg",
          id: 2,
          yardType: "Sân Đất Nện",
        },
        {
          img: "https://i.ibb.co/F0B5CqT/tennis-grass.jpg",
          id: 3,
          yardType: "Sân Cỏ",
        },
        {
          img: "https://www.thethaothientruong.vn/uploads/contents/San-Tennis-cung.jpg",
          id: 4,
          yardType: "Sân Cứng",
        },
      ],
      yards: [
        {
          id: "2",
          typeName: "Sân Đất Nện",
          slotDetail: JSON.parse(sessionStorage.getItem("slot_array")),
        },
        {
          id: "3",
          typeName: "Sân Cỏ",
          slotDetail: JSON.parse(sessionStorage.getItem("slot_array")),
        },
        {
          id: "4",
          typeName: "Sân Cứng",
          slotDetail: JSON.parse(sessionStorage.getItem("slot_array")),
        },
      ],
    };
  },
  methods: {
    yardDetail(id) {
      this.isHiddenModal = false;
      this.countClick++;

      this.slotDetail = this.yards.find((yard) => yard.id == id);
      this.idTypeCourt = this.slotDetail.id;

      this.slotDetail.slotDetail.forEach((slot) => {
        slot.StartTime = slot.StartTime.slice(0, 5);
        slot.EndTime = slot.EndTime.slice(0, 5);
        slot.ApplyTypeId = this.idTypeCourt;
      });
    },
    groupByApplyTypeId(list, keyGetter) {
      const map = new Map();
      list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
          map.set(key, [item]);
        } else {
          collection.push(item);
        }
      });

      return map;
    },
    checkSetting() {
      let setting_all_slot = JSON.parse(
        sessionStorage.getItem("setting_all_slot")
      );
      if (!setting_all_slot) {
        this.$toast.open({
          message: "Xin hãy cài đặt giá tiền cho từng loại sân !",
          position: "top-right",
          type: "error",
        });
      } else {
        this.loading = true;
        console.log(setting_all_slot);

        setting_all_slot.forEach((slot) => {
          SlotService.createSlotForCourtTypeId(slot.slotDetail)
            .then((res) => {
              this.getListSlotOfVendor();
              this.$toast.open({
                message: "Hoàn Tất Cài Đặt Thành Công!",
                position: "top-right",
                type: "success",
              });
            })
            .catch((err) => {
              console.log(err);
            });
        });


        this.loading = false;
      }
    },
    getListSlotOfVendor() {
      this.loading = true;
      UserService.getOwnerProfile(this.userProfile.UserId)
        .then((res) => {
          let user_profile = res.data;
          if (user_profile.Vendor.Id) {
            this.param.vendorId = user_profile.Vendor.Id;

            SlotService.getListSlotByVendorId(this.param)
              .then((res) => {
                const list_slot = res.data.Value;
                if (list_slot) {
                  let list_slot_group_by_apply_type_id = this.groupByApplyTypeId(
                    list_slot,
                    (slot) => slot.ApplyTypeId
                  );

                  for (let [key, value] of list_slot_group_by_apply_type_id) {
                    this.yards.forEach((yard) => {
                      if (yard.id == key) {
                        yard.slotDetail = value;
                      }
                    });
                  }

                  this.yards.forEach((yard) => {
                    yard.slotDetail.forEach((slot) => {
                      slot.StartTime = slot.StartTime.slice(0, 5);
                      slot.EndTime = slot.EndTime.slice(0, 5);
                    });
                  });

                  sessionStorage.setItem(
                    "setting_all_slot",
                    JSON.stringify(this.yards)
                  );
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
    }
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
