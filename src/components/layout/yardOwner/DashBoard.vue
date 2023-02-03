<template>
  <div class="dashboard p-8">
    <!-- grid wrapper card -->
    <div
      class="
        wrapper-card
        grid
        lg:grid-cols-4
        grid-cols-1
        md:grid-cols-2
        gap-2
        mt-5
      "
    >
      <!-- card  -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="
              bg-orange-200
              rounded-full
              w-14
              h-14
              text-lg
              p-3
              text-orange-600
              mx-auto
            "
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            3
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">Số sân hiện có</h2>
        </div>
      </div>
      <!-- end card -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="
              bg-green-200
              rounded-full
              w-14
              h-14
              text-lg
              p-3
              text-green-400
              mx-auto
            "
          >
            <span class="">
              <svg
                style="height: 30px; width: 30px; color: rgb(46, 229, 157)"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-alarm-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"
                  fill="#2ee59d"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            256
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">
            Tổng số lần đặt sân
          </h2>
        </div>
      </div>
      <!-- end card -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="
              bg-red-200
              rounded-full
              w-14
              h-14
              text-lg
              p-3
              text-yellow-600
              mx-auto
            "
          >
            <span class="">
              <svg
                style="color: rgb(245, 214, 15)"
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  fill="#f5d60f"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            4.8
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">
            Đánh giá trung bình
          </h2>
        </div>
      </div>
      <!-- end card -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow flex"
      >
        <div class="p-2 max-w-sm">
          <div
            class="
              bg-purple-200
              rounded-full
              w-14
              h-14
              text-lg
              p-3
              text-purple-600
              mx-auto
            "
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="30px"
                height="30px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path d="M15 13v1H1.5l-.5-.5V0h1v13h13Z" />
                  <path
                    d="M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708L13 3.207Z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>

        <div class="block p-2 w-full">
          <p class="font-semibold text-gray-900 dark:text-gray-200 text-xl">
            7 230
          </p>
          <h2 class="font-normal text-gray-400 text-md mt-1">
            Tổng lượt truy cập
          </h2>
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- end wrapper card -->
     <!-- <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="
          bg-white
          dark:bg-gray-800
          p-5
          w-full
          rounded-md
          box-border
          shadow
        "
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          Tổng doanh thu
        </h2>
        <p class="text-gray-400 font-lexend font-normal">
          Doanh thu được tính theo tuần
        </p>
        <span class="float-right mr-20">
          <h2 class="text-red-500 -mt-12 flex">
            <span class="mr-2"> 15.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-down" />
            </span>
          </h2>
        </span>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> 87.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
        <br />
        <div id="chart">
          <apexchart
            width="100%"
            height="380"
            type="area"
            :options="optionsArea"
            :series="seriesArea"
            :sparkline="{
              enabled: true,
            }"
          ></apexchart>
        </div>

        <br />
        <hr />
        <div class="wrapper-button mt-3">
          <button
            class="
              uppercase
              float-right
              mt-5
              border-b border-red-600
              text-red-600
            "
          >
            Báo cáo doanh thu
          </button>
        </div>
      </div>
    </div>

    <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="
          mt-2
          bg-white
          dark:bg-gray-800
          p-5
          w-full
          rounded-md
          box-border
          shadow
        "
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">102</h2>
        <p class="text-gray-400 font-lexend font-normal">
          Lượt Đặt Sân Trong Tuần
        </p>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> 27.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
        <div class="wrapper-chart mt-2">
          <apexchart
            type="bar"
            height="380"
            :options="chartOptions"
            :series="series"
          ></apexchart>
          <br />
          <hr />
          <div class="wrapper-button mt-3">
            <button
              class="
                uppercase
                float-right
                mt-5
                border-b border-red-600
                text-red-600
              "
            >
              Báo cáo lượt đặt sân
            </button>
          </div>
        </div>
      </div>
      <div
        class="
          mt-2
          bg-white
          dark:bg-gray-800
          p-5
          w-full
          rounded-md
          box-border
          shadow
        "
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">369</h2>
        <p class="text-gray-400 font-lexend font-normal">
          Lượt truy cập trong tuần
        </p>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> 47.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="area"
            :options="optionsVisitor"
            :series="seriesVisitor"
          ></apexchart>
          <br />
          <hr />
          <div class="wrapper-button mt-3">
            <button
              class="
                uppercase
                float-right
                mt-5
                border-b border-red-600
                text-red-600
              "
            >
              Báo cáo lượt truy cập
            </button>
          </div>
        </div>
      </div>

      <div
        class="
          mt-2
          bg-white
          dark:bg-gray-800
          p-5
          w-full
          rounded-md
          box-border
          shadow
        "
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          Sân Đất Nệm Được Đặt Nhiều Nhất
        </h2>
        <p class="text-gray-400 font-lexend font-normal">Độ Phủ Sân</p>

        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="pie"
            :options="optionsDonut"
            :series="seriesDonut"
          ></apexchart>
          <div class="p-3"></div>
          <br />
          <hr />
          <div class="wrapper-button mt-3">
            <button
              class="
                uppercase
                float-right
                mt-5
                border-b border-red-600
                text-red-600
              "
            >
              User Report
            </button>
          </div>
        </div>
      </div>
    </div> -->

    <div
      class="
        mt-2
        bg-white
        dark:bg-gray-800
        p-5
        w-full
        rounded-md
        box-border
        shadow
      "
    >
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
        Lịch Đặt Sân
      </h2>
      <p class="text-gray-400 font-lexend font-normal">
        Danh sách đặt sân mới nhất
      </p>
      <div class="wrapping-table mt-10">
        <table
          class="
            w-full
            text-sm text-left text-gray-500
            dark:text-gray-400
            lg:overflow-auto
            overflow-x-scroll
          "
        >
          <thead
            class="
              text-xs text-gray-700
              uppercase
              bg-gray-50
              dark:bg-gray-700 dark:text-gray-400
            "
          >
            <tr>
              <th scope="col" class="uppercase px-6 py-3">Khách Hàng</th>
              <th scope="col" class="uppercase px-6 py-3">Số điện thoại</th>
              <th scope="col" class="uppercase px-6 py-3">Loại Sân</th>
              <th scope="col" class="uppercase px-6 py-3">Ngày & Khung giờ</th>
              <th scope="col" class="uppercase px-6 py-3">Status</th>
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
              v-for="items in tableBooking"
              :key="items"
            >
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="flex-shrink object-contain">
                    <img class="rounded-2xl mr-3 w-8 h-8" :src="items.img" />
                  </div>
                  <div class="ml-4 text-[#334D6E]">{{ items.fullName }}</div>
                </div>
              </td>
              <td class="px-6 py-4">
                {{ items.phoneNumber }}
              </td>
              <td class="px-6 py-4">
                {{ items.yardType }}
              </td>
              <td class="px-6 py-4">
                {{ items.datetime }}
              </td>
              <td class="px-6 py-4">
                <span
                  class="text-green-800 bg-green-300 px-3 py-1 rounded-md"
                  v-if="items.statusTransaction == 'completed'"
                >
                  {{ items.statusTransaction }}
                </span>
                <span
                  class="text-purple-800 bg-purple-300 px-3 py-1 rounded-md"
                  v-else-if="items.statusTransaction == 'new'"
                >
                  {{ items.statusTransaction }}
                </span>
                <span
                  class="text-red-800 bg-red-300 px-3 py-1 rounded-md"
                  v-else
                >
                  {{ items.statusTransaction }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
// import { Icon } from "@iconify/vue";

export default {
  components: {
    // Icon,
  },
  data() {
    return {
      // chart data area
      optionsArea: {
        xaxis: {
          categories: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
        },
        fontFamily: "Segoe UI, sans-serif",
        stroke: {
          curve: "straight",
        },
        markers: {
          size: 0,
        },
        yaxis: {
          show: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
      },
      chart: {
        fontFamily: "lexend, sans-serif",
      },
      seriesArea: [
        {
          name: "Doanh thu",
          data: [30, 40, 45, 50],
        },
        {
          name: "Doanh thu (tháng trước)",
          data: [20, 34, 45, 55],
        },
      ],
      optionsBar: {
        chart: {
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          show: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#4f46e5", "#DC2626"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
      },

      series: [
        {
          name: "Số lần đặt",
          data: [
            {
              x: "Thứ 2",
              y: 7,
            },
            {
              x: "Thứ 3",
              y: 5,
            },
            {
              x: "Thứ 4",
              y: 15,
            },
            {
              x: "Thứ 5",
              y: 21,
            },
            {
              x: "Thứ 6",
              y: 24,
            },
            {
              x: "Thứ 7",
              y: 24,
            },
            {
              x: "Chủ Nhật",
              y: 24,
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 380,
        },
        xaxis: {
          type: "category",
          group: {
            style: {
              fontSize: "10px",
              fontWeight: 700,
            },
          },
        },
      },
      optionsVisitor: {
        chart: {
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          show: false,
        },
        yaxis: {
          show: false,
        },
        colors: ["#4f46e5"],
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        stroke: {
          curve: "smooth",
        },
      },
      seriesVisitor: [
        {
          name: "Lượt truy cập",
          data: [
            {
              x: "Thứ 2",
              y: 7,
            },
            {
              x: "Thứ 3",
              y: 5,
            },
            {
              x: "Thứ 4",
              y: 22,
            },
            {
              x: "Thứ 5",
              y: 15,
            },
            {
              x: "Thứ 6",
              y: 20,
            },
            {
              x: "Thứ 7",
              y: 33,
            },
            {
              x: "Chủ Nhật",
              y: 80,
            },
          ],
        },
      ],
      tableBooking: [
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Cỏ",
          datetime: "18/6/2022 & Slot 1",
          amount: "Rp.450.000",
          statusTransaction: "new",
        },
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Đất Nệm",
          datetime: "18/6/2022 & Slot 2",
          amount: "Rp.250.000",
          statusTransaction: "new",
        },
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Nhân Tạo",
          datetime: "20/6/2022 & Slot 5",
          amount: "Rp.150.000",
          statusTransaction: "new",
        },
        {
          img: "https://i.ibb.co/hgNrFmX/SE140371-Nguyen-Cong-Thai-Son.jpg",
          fullName: "Nguyễn Công Thái Sơn",
          phoneNumber: "0978145440",
          yardType: "Sân Cỏ",
          datetime: "22/6/2022 & Slot 1",
          amount: "Rp.180.000",
          statusTransaction: "new",
        },
      ],
      optionsDonut: {
        chart: {
          type: "donut",
        },
        legend: false,
        dataLabels: {
          enabled: false,
        },
        labels: ["Sân Đất Nệm", "Sân Cỏ", "Sân Nhân Tạo"],
      },
      seriesDonut: [83, 25, 25],
      tableTransaction: [
        {
          transaction: "Payment from Ike yolanda",
          datetime: "Apr 22, 2022",
          amount: "Rp.450.000",
          statusTransaction: "completed",
        },
        {
          transaction: "Payment from Ice Wulandari",
          datetime: "May 2, 2022",
          amount: "Rp.250.000",
          statusTransaction: "completed",
        },
        {
          transaction: "Payment from Alfiah Gipta Jannatil Hasanah",
          datetime: "May 5, 2022",
          amount: "Rp.150.000",
          statusTransaction: "progress",
        },
        {
          transaction: "Payment failed from #046577",
          datetime: "May 5, 2022",
          amount: "Rp.180.000",
          statusTransaction: "cancelled",
        },
      ],
    };
  },
};
</script>