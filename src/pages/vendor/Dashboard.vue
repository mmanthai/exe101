<template>
  <div class="flex">
    <Sidebar @changeTab="changeCurrentComponent" class="w-60" />
    <div
      class="flex-1 w-full overflow-auto h-screen bg-[#F8F9FF] flex flex-col scroll-content"
    >
      <TheHeader :toggleModal="toggleModal" />
      <component :is="isSelectedTab" />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/layout/vendor/Sidebar.vue";
import Dashboard from "@/components/layout/vendor/Dashboard.vue";
import TheHeader from "@/components/layout/vendor/TheHeader.vue";
import BookingManager from "@/components/layout/vendor/BookingManager.vue";
import YardManager from "@/components/layout/vendor/YardManager.vue";
import SlotManager from "@/components/layout/vendor/SlotManager.vue";
import StoreProfile from "@/components/layout/vendor/StoreProfile.vue";
import PriceManager from "@/components/layout/vendor/Slot/SettingRate.vue";
import PromotionManager from "@/components/layout/vendor/PromotionManager.vue";
export default {
  components: {
    Sidebar,
    Dashboard,
    TheHeader,
    BookingManager,
    YardManager,
    SlotManager,
    StoreProfile,
    PriceManager,
    PromotionManager,
  },
  data() {
    return {
      isSelectedTab: "dashboard",
      searchValue: "",
      loading: false,
      currentUser: "",
      toggleModal: 0,
    };
  },
  methods: {
    changeCurrentComponent(currentTab) {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        this.$store.dispatch("auth/logout");
        this.$store.push("/login");
      } else {
        this.isSelectedTab = currentTab;
        this.searchValue = "";
        this.toggleModal++;
      }
    },
    SearchMember(value) {
      this.searchValue = value;
    },
  },
};
</script>

<style></style>
