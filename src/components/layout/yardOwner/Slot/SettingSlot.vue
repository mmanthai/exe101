<template>
  <preloader-component :class="loading == false ? 'hidden' : ''" />
  <div class="p-8 flex flex-col items-center justify-between">
    <div class="bg-white dark:bg-gray-800 p-5 px-4 rounded-lg box-border shadow w-[45%]">
      <h2 class="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-6">
        Cài Đặt Giờ Thuê
      </h2>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6 mx-center">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
              for="gr id-first-name">
              Giờ Mở Cửa
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-100"
              id="grid-start-time" type="time" :value="vendor.OpenTime" disabled="true" />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-end-time">
              Giờ Đóng Cửa
            </label>
            <input
              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-100"
              id="grid-end-time" type="time" :value="vendor.CloseTime" disabled="true" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2" for="grid-password">
              Khoảng Thời Gian Thuê Mỗi Ca
            </label>
            <!-- <select
              id="small"
              class="
                rounded-lg
                text-md
                block
                pr-8
                W-full
                text-sm text-gray-900
                bg-gray-50
                border border-gray-300
                focus:ring-blue-500 focus:border-blue-500
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            >
              <option value="1">1 giờ</option>
              <option value="2">1 giờ 30 phút</option>
            </select> -->
            <div class="flex items-center pt-2">
              <input min="60" max="90"
                class="appearance-none block w-40 bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-100"
                id="duration-time" type="number" placeholder="nhập số phút" />
              <label class="ml-4 block uppercase tracking-wide text-gray-700 text-sm font-md mb-2"
                for="gr id-first-name">
                Phút
              </label>
            </div>
          </div>
        </div>
        <div @click="settingSlot" class="flex flex-wrap mx-3 mb-2 justify-end">
          <button type="button" @click="showAlert"
            class="modal-close px-5 bg-indigo-500 py-2 rounded-lg text-white hover:bg-indigo-400">
            Cài Đặt
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import VendorService from "@/services/vendor.service.js";
import TokenService from "@/services/token/token.service.js";

export default {
  mounted() {
    this.vendorId = TokenService.getUser().Token.VendorId;

    VendorService.getVendorProfile(this.vendorId)
      .then((res) => {
        this.vendor = res.data;

        this.vendor.OpenTime = new Date(this.vendor.OpenTime)
          .toLocaleTimeString()
          .slice(0, 5);
        this.vendor.CloseTime = new Date(this.vendor.CloseTime)
          .toLocaleTimeString()
          .slice(0, 5);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  data() {
    return {
      vendorId: "",
      vendor: "",
      loading: true,
      slot_array: []
    };
  },
  methods: {
    settingSlot() {
      let minutes = document.getElementById("duration-time").value;

      if (minutes < 60 || minutes > 120) {
        swal("Số phút tối thiểu là  60  và nhỏ hơn 120 ", {
          icon: "warning",
        });
      } else {
        if (minutes > 60 && minutes % 30 !== 0) {
          swal("Số phút phải là bội số của 30 ( trong khoảng 60 - 120)", {
            icon: "warning",
          });
        } else {
          let durationTime = minutes / 60;
          let durationHour = 0;
          let durationMinute = 0;

          if (durationTime > 1 && durationTime < 2) {
            durationHour = Math.floor(durationTime);
            durationMinute = (durationTime - durationHour) * 60;
          } else if (durationTime === 1) {
            durationHour = 1;
          } else if (durationTime === 2) {
            durationHour = 2;
          }

          // let totalTime = (this.vendor.CloseTime - this.vendor.OpenTime) * 60;
          let splitOpenTime = this.vendor.OpenTime.split(":");

          let convertOpenTimeMinutes = parseInt(
            splitOpenTime[0] * 60 + parseInt(splitOpenTime[1])
          );

          let splitCloseTime = this.vendor.CloseTime.split(":");
          let convertCloseTimeMinutes =
            parseInt(splitCloseTime[0]) * 60 + parseInt(splitOpenTime[1]);

          let totalActionMinutes =
            convertCloseTimeMinutes - convertOpenTimeMinutes;

          let totalSlot = Math.ceil(totalActionMinutes / minutes);

          let previousSlot = {};

          let endTimeMinute_first_slot = (parseInt(splitOpenTime[1]) + durationMinute >= 60 ? parseInt(splitOpenTime[1]) - durationMinute : parseInt(splitOpenTime[1]) + durationMinute).toString();
          let endTimeHour_first_slot = (parseInt(splitOpenTime[1]) + durationMinute >= 60 ? parseInt(splitOpenTime[0]) + 1 + durationHour : parseInt(splitOpenTime[0]) + durationHour).toString();

          let first_slot = {
            no: 1,
            startTime: `${splitOpenTime[0]}:${splitOpenTime[1]}`,
            endTime: `${endTimeHour_first_slot.padStart(2, '0')}:${endTimeMinute_first_slot.padStart(2, '0')}`,
            price: 0,
            vendorId: this.vendorId,
            applyTypeId: 2,
          };

          this.slot_array.push(first_slot);

          previousSlot = { ...first_slot };

          for (let i = 2; i <= totalSlot; i++) {
            let previousEndTime = previousSlot.endTime.split(":");

            let startTimeMinutes = parseInt(previousEndTime[1]) + durationMinute >= 60 ? (parseInt(previousEndTime[1]) - durationMinute).toString() : `${parseInt(previousEndTime[1]) + durationMinute}`;
            let startTimeHours = parseInt(previousEndTime[1]) + durationMinute >= 60 ? parseInt(previousEndTime[0]) + 1 : parseInt(previousEndTime[0]);

            // let endTimeCurrent = `${parseInt(startTimeHours) + durationHour > splitCloseTime[0] ? splitCloseTime[0] : parseInt(startTimeHours) + durationHour}:${startTimeMinutes.padStart(2, '0')}`

            let hourEndTime = `${parseInt(startTimeHours) + durationHour}`
            let minuteEndTime = `${startTimeMinutes}`.padStart(2, '0')



            if (hourEndTime > parseInt(splitCloseTime[0])) {
              hourEndTime = parseInt(splitCloseTime[0]).toString();
            } else if (hourEndTime == parseInt(splitCloseTime[0]) && minuteEndTime > parseInt(splitCloseTime[1])) {
              minuteEndTime = parseInt(splitCloseTime[1]).toString().padStart(2, '0');
            }

            let slot = {
              no: i,
              startTime: `${previousEndTime[0].padStart(2, '0')}:${previousEndTime[1].padStart(2, '0')}`,
              endTime: `${hourEndTime.padStart(2, '0')}:${minuteEndTime}`,
              price: 0,
              vendorId: this.vendorId,
              applyTypeId: 2,
            };

            this.slot_array.push(slot);
            previousSlot = { ...slot };

            if (this.slot_array.length > 0) {
              sessionStorage.setItem("slot_array", JSON.stringify(this.slot_array));

              swal({
                title: "Cài đặt thành công. Xin vui lòng cài đặt giá tiền cho từng loại sân !",
                icon: "success",
              }).then(() => {
                this.$emit('changeTab', 'SettingPrice')
              });
            }
          }

        }


      }
    },
  },
};
</script>
