<template>
  <div>
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
          <th scope="col" class="uppercase px-6 py-3">Lựa chọn</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
          v-for="slot in slotList"
          :key="slot"
        >
          <td class="px-2 py-4">
            <div class="flex slot-center">
              <div class="ml-4 text-[#334D6E]">{{ slot.SlotNo }}</div>
            </div>
          </td>
          <td class="px-6 py-4">
            {{ slot.StartTime ? slot.StartTime.slice(0, 5) : "" }} -
            {{ slot.EndTime ? slot.EndTime.slice(0, 5) : "" }}
          </td>
          <td class="px-6 py-4">
            <input
              disabled
              type="number"
              class="shadow appearance-none placeholder:text-sm border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Giá Tiền"
              v-model="slot.Price"
            />
          </td>
          <td class="px-6 py-4">
            <input
              :disabled="slot.StatusId !== 1"
              class="form-check-input ml-7 w-4 h-4"
              type="checkbox"
              v-model="slot.IsAvailable"
              id="flexCheckDefault"
            />
            <input class="idSlot" type="hidden" :value="slot.Id" />
            <p class="hidden">{{ slot }}</p>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button
        @click.prevent="processBooking"
        type="button"
        class="bg-lime-400 text-white font-medium duration-300 hover:bg-lime-300 px-6 py-3 rounded-md mt-10 mb-10"
      >
        Đặt Lịch
      </button>
    </div>

    <transition v-if="showConfirm" name="modal">
      <confirm-booking-modal @closeModal="hiddenModal">
        <template #confirmBooking>
          <h2 class="text-lg font-semibold">Xác nhận lịch đặt sân</h2>
          <p class="mb-4">Loại Sân : {{ courtTypeName }}</p>
          <ul class="mb-4">
            <li
              v-for="slot in slotBooked"
              :key="slot"
              class="border-b-2 pb-2 my-4"
            >
              <div class="flex items-center">
                <p class="font-semibold w-28">Ca :</p>
                <p>{{ slot.SlotNo }}</p>
              </div>
              <div class="flex items-center">
                <p class="font-semibold w-28">Khung Giờ :</p>
                <p>
                  {{ slot.StartTime.slice(0, 5) }} -
                  {{ slot.EndTime.slice(0, 5) }}
                </p>
              </div>
              <div class="flex items-center">
                <p class="font-semibold w-28">Giá Tiền :</p>
                <p class="mr-2">{{ slot.Price }}</p>
                VNĐ
              </div>
            </li>
          </ul>
          <div class="flex items-center justify-end text-base mr-4">
            <p class="text-right font-bold text-base mr-4">Tổng Tiền :</p>
            <p class="mr-1">
              {{ totalPriceSlotBooked }}
            </p>
            VNĐ
          </div>

          <div class="flex items-center my-4 justify-end">
            <button
              type="button"
              @click="hiddenModal"
              class="px-6 mr-4 rounded text-white py-2 bg-gray-500 hover:bg-gray-600 active:bg-gray-700 duration-300"
            >
              Hủy
            </button>
            <button
              @click="createBooking"
              type="button"
              class="px-6 mr-4 rounded text-white py-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 duration-300"
            >
              Xác nhận
            </button>
          </div>
        </template>
      </confirm-booking-modal>
    </transition>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
const ConfirmBookingModal = defineAsyncComponent(() =>
  import("@/components/layout/customer/ConfirmBookingModal.vue")
);
import swal from "sweetalert";

export default {
  components: {
    ConfirmBookingModal,
  },
  props: {
    slotByDate: {
      type: Array,
      required: true,
    },
    idCourtType: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      slotList: this.slotByDate,
      slotBooked: [],
      showConfirm: false,
      courtTypeText: this.idCourtType,
    };
  },
  watch: {
    slotByDate(newVal) {
      this.slotList = newVal;
    },
    idCourtType(newVal) {
      this.courtTypeText = newVal;
    },
  },
  methods: {
    processBooking() {
      let all_slot = document.querySelectorAll("input[type=checkbox]");
      all_slot.forEach((slot, index) => {
        if (slot.checked) {
          let slot_booked = JSON.parse(
            slot.parentElement.childNodes[2].innerHTML
          );
          this.slotBooked.push(slot_booked);
        }
      });

      if (this.slotBooked.length === 0) {
        swal("Xin hãy chọn ca !", {
          icon: "warning",
        }).then(() => {
          return;
        });
      } else {
        this.showConfirm = true;
      }
    },
    createBooking() {
      let slot_ids = [];
      this.slotBooked.forEach((slot) => {
        slot_ids.push(slot.Id);
      });
      this.$emit("createBooking", slot_ids);
      this.hiddenModal();
    },
    hiddenModal() {
      this.showConfirm = false;
      this.slotBooked = [];
    },
  },
  computed: {
    totalPriceSlotBooked() {
      let sum = 0;

      if (this.slotBooked.length > 0) {
        this.slotBooked.forEach((slot) => {
          sum += slot.Price;
        });
      }

      return sum;
    },
    courtTypeName() {
      if (this.courtTypeText === 2) {
        return "Sân Đất Nện";
      } else if (this.courtTypeText === 3) {
        return "Sân Cứng";
      } else if (this.courtTypeText === 4) {
        return "Sân Cỏ";
      }
    },
  },
};
</script>

<style>
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
