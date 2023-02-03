<template>
  <div class="p-8 flex slot-center justify-center overflow-y-hidden">
    <div
      class="
        bg-white
        dark:bg-gray-800
        p-5
        px-4
        rounded-md
        box-border
        shadow
        w-[40%]
        overflow-y-auto
      "
      v-scroll:throttle="{ fn: onScroll, throttle: 600 }"
      v-scroll:debounce="{fn: onScroll, debounce: 500 }"
    >
      <span>
        <h2 class="font-semibold text-lg text-gray-800 dark:text-gray-200">
          Quản lý ca thuê
        </h2>
        <p class="text-gray-400 font-lexend font-normal">Tổng có 12 ca</p>
      </span>
      <div class="wrapping-table mt-2 mx-center h-100">
        <table
          class="
            w-full
            text-sm text-left text-gray-500
            dark:text-gray-400
            lg:overflow-auto
          "
        >
          <thead
            class="
              text-sm text-gray-700
              uppercase
              bg-gray-50
              dark:bg-gray-700 dark:text-gray-400
            "
          >
            <tr>
              <th scope="col" class="uppercase px-6 py-3">Ca</th>
              <th scope="col" class="uppercase px-6 py-3">Khung Giờ</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="
                bg-white
                border-b
                dark:bg-gray-800 dark:border-gray-700
                odd:bg-white
                even:bg-gray-50
              "
              v-for="slot in slotList"
              :key="slot"
            >
              <td class="px-2 py-4">
                <div class="flex slot-center">
                  <div class="ml-4 text-[#334D6E]">{{ slot.slot }}</div>
                </div>
              </td>
              <td class="px-6 py-4">
                {{ slot.time }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slotList: [
        {
          slot: 1,
          time: "5:00 AM - 6:30 AM",
        },
        {
          slot: 2,
          time: "6:30 AM - 8:00 AM",
        },
        {
          slot: 3,
          time: "8:00 AM - 9:30 AM",
        },
        {
          slot: 4,
          time: "9:30 AM - 11:00 AM",
        },
        {
          slot: 5,
          time: "11:00 AM - 12:00 AM",
        },
        {
          slot: 6,
          time: "12:00 AM - 01:30 PM",
        },
        {
          slot: 7,
          time: "01:30 PM - 03:00 PM",
        },
        {
          slot: 8,
          time: "03:00 PM - 04:30 PM",
        },
        {
          slot: 9,
          time: "04:30 PM - 06:00 PM",
        },
        {
          slot: 10,
          time: "06:00 PM - 07:30 PM",
        },
        {
          slot: 11,
          time: "07:30 PM - 09:00 PM",
        },
        {
          slot: 12,
          time: "09:00 PM - 10:00 PM",
        },
      ],
    };
  },
};
</script>
