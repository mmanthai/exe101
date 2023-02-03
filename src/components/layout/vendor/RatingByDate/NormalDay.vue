<template>
  <div class="flex items-center justify-start mx-8 mt-5">
    <p class="mr-3 text-[#434141] text-normal">Hệ Số:</p>
    <input
      class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="number"
      min="0"
      oninput="this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null"
      placeholder="ví dụ 1.25"
      v-model="normalDate_rating.coefficient"
    />
  </div>
</template>

<script>
export default {
  props: ["rate_setting"],
  data() {
    return {
      normalDate_rating: this.rate_setting[0],
    };
  },
};
</script>
