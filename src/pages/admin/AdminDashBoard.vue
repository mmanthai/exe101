<template>
  <div class="flex h-screen">
    <SideBarAdmin @changeTab="changeCurrentComponent" class="w-60" />

    <div
      class="flex-1 w-full overflow-auto h-screen bg-[#F8F9FF] flex flex-col scroll-content"
    >
      <the-header :toggleModal="toggleModal" />
      <component class="overflow-y-auto" :is="isSelectedTab" />
    </div>
  </div>
</template>

<script>
import SideBarAdmin from "@/components/layout/admin/SideBarAdmin.vue";
import YardOwner from "@/components/layout/admin/YardOwnerList.vue";
import MemberList from "@/components/layout/admin/MemberList.vue";
import ApproveManager from "@/components/layout/admin/ApproveManager.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
export default {
  components: {
    SideBarAdmin,
    YardOwner,
    MemberList,
    ApproveManager,
    TheHeader,
  },
  data() {
    return {
      isSelectedTab: "ApproveManager",
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
      }
    },
    isLoggedIn() {},
  },
  watch: {
    isSelectedTab() {
      if (this.isSelectedTab === "ApproveManager") {
        this.hiddenInput = true;
      } else {
        this.hiddenInput = false;
      }
      this.toggleModal++;
    },
  },
};
</script>
