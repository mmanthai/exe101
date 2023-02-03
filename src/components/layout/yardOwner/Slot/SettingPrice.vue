<template>
  <div class="p-8 flex flex-col items-center justify-between">
    <div
      class="mt-2 bg-white dark:bg-gray-800 p-5 w-[50%] px-4 rounded-md box-border shadow"
    >
      <span>
        <p class="text-red-500 text-sm italic mb-2">
          * Ấn vào cài đặt để cài giá tiền cơ bản cho mỗi loại sân
        </p>
        <h2 class="font-semibold text-lg text-gray-800 dark:text-gray-200">
          Danh Sách Loại Sân
        </h2>
      </span>
      <div class="wrapping-table mt-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="uppercase px-6 py-3">Loại Sân</th>
              <th scope="col" class="uppercase px-6 py-3">Cài Đặt Giá Tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="type in listTypeYard"
              :key="type.id"
            >
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="flex-shrink object-contain">
                    <img class="rounded mr-3 w-20 h-12" :src="type.img" />
                  </div>
                  <div class="ml-4 text-[#334D6E]">{{ type.yardType }}</div>
                </div>
              </td>
              <td class="px-12 py-4">
                <Icon
                  class="w-7 h-7 hover:text-gray-600 cursor-pointer"
                  icon="ant-design:setting-filled"
                  @click="yardDetail(type.id)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!--The Modal-->
  <ModalSetting
    :class="isHiddenModal === true ? 'hidden' : ''"
    :detail="slotDetail"
    :idType="idTypeCourt"
    :click="countClick"
  />
</template>

<script>
import { Icon } from "@iconify/vue";
import ModalSetting from "./ModalSetting.vue";

export default {
  components: {
    Icon,
    ModalSetting,
  },
  data() {
    return {
      idTypeCourt: "",
      isHiddenModal: true,
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
      (this.isHiddenModal = false), this.countClick++;
      this.slotDetail = this.yards.find((yard) => yard.id == id);
      this.idTypeCourt = this.slotDetail.id;
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
