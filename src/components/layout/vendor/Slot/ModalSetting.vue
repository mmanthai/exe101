<template>
  <div
    id="modal"
    class="flex modal fixed inset-0"
    :class="isClose === true ? 'hidden' : ''"
  >
    <div class="modal-overlay absolute w-full h-full"></div>
    <div class="mx-auto relative p-4 w-full max-w-5xl md:h-auto">
      <div
        class="relative h-[70%] bg-white rounded-lg shadow dark:bg-gray-700 mt-12"
      >
        <button
          @click="hiddenModal"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="py-6 px-6 lg:px-8">
          <h3 class="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
            Cài Đặt Giá Tiền
          </h3>
          <p class="text-gray-400 font-lexend font-normal mb-4">
            Loại sân : {{ slot.typeName }}
          </p>

          <div class="h-96 bg-red-5 overflow-y-auto">
            <form action="#">
              <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-y-auto"
              >
                <thead
                  class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                  <tr>
                    <th scope="col" class="uppercase px-6 py-3">Ca</th>
                    <th scope="col" class="uppercase px-6 py-3">Khung Giờ</th>
                    <th scope="col" class="uppercase px-6 py-3">Giá Cơ Bản</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
                    v-for="slot in slot.slotDetail"
                    :key="slot"
                  >
                    <td class="px-2 py-4">
                      <div class="flex slot-center">
                        <div class="ml-4 text-[#334D6E]">{{ slot.SlotNo }}</div>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      {{ slot.StartTime }} - {{ slot.EndTime }}
                    </td>
                    <td class="px-6 py-4">
                      <input
                        type="number"
                        class="shadow appearance-none placeholder:text-sm border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        placeholder="Giá Tiền"
                        v-model="slot.Price"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="flex justify-end pt-4 px-8">
                <button
                  type="button"
                  class="px-4 bg-transparent p-1 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                  @click="hiddenModal"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  @click="settingPrice"
                  class="modal-close px-4 bg-indigo-500 p-1 py-2 rounded-lg text-white hover:bg-indigo-400"
                >
                  Áp Dụng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    detail: {
      type: Object,
      require: true,
    },
    idType: {
      type: String,
      require: true,
    },
    click: {
      type: Number,
      require: true,
    },
  },
  mounted() {
    let setting_all_slot = JSON.parse(
      sessionStorage.getItem("setting_all_slot")
    );

    if (setting_all_slot) {
      setting_all_slot.forEach((court) => {
        if (court.id === this.idType) {
          this.slot.slotDetail = court.slotDetail;
        }
      });

      this.slot = this.detail;
    }
  },
  data() {
    return {
      isClose: false,
      idCourtType: "",
      slot: {
        id: "2",
        typeName: "Sân Đất Nện",
        slotDetail: JSON.parse(sessionStorage.getItem("slot_array")),
      },
    };
  },
  methods: {
    hiddenModal() {
      this.isClose = true;
    },
    settingPrice() {
      let setting_all_slot = JSON.parse(
        sessionStorage.getItem("setting_all_slot")
      );

      if (!setting_all_slot) {
        let new_array_setting = [];
        new_array_setting.push(this.slot);
        sessionStorage.setItem(
          "setting_all_slot",
          JSON.stringify(new_array_setting)
        );
      } else {
        setting_all_slot.forEach((slot, index) => {
          if (slot.id === this.slot.id) {
            setting_all_slot.splice(index, 1);
          }
        });
        setting_all_slot.push(this.slot);

        sessionStorage.removeItem("setting_all_slot");

        sessionStorage.setItem(
          "setting_all_slot",
          JSON.stringify(setting_all_slot)
        );
      }

      this.$toast.open({
        message: "Cài Đặt Thành Công !",
        position: "top-right",
        type: "success",
      });
    },
  },
  watch: {
    detail(newVal) {
      this.isClose = false;
      this.slot = newVal;

      let setting_all_slot = JSON.parse(
        sessionStorage.getItem("setting_all_slot")
      );
      if (setting_all_slot) {
        setting_all_slot.forEach((court) => {
          if (court.id === this.detail.id) {
            this.slot.slotDetail = court.slotDetail;
          }
        });
      } else {
      }
    },
    click() {
      this.isClose = false;
      this.slot = this.detail;
    },
    idType() {
      this.idCourtType = this.idType;
      this.slot = this.detail;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-body {
  width: 500px;
  height: 300px;
  background: red;
  position: relative;
  z-index: 50;
}
</style>
