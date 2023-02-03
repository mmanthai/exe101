<template>
  <div>
    <preloader-component :class="loading == false ? 'hidden' : ''" />
    <customer-header />
    <div class="pt-28">
      <vendor-introduction :vendorInfo="vendorInfo" />
    </div>
    <h2 class="text-2xl font-semibold text-center mt-14">Danh Sách Sân Cho Thuê</h2>
    <div class="container-fluid mt-14 px-16 w-full">
      <list-court-of-vendor :courtListOfVendor="courtListOfVendor"/>
      <!-- paste table vao day o ben trang khac -->
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import ListCourtOfVendor from "@/components/court/ListCourtOfVendor.vue";
import VendorService from '@/services/vendor.service.js';

const CustomerHeader = defineAsyncComponent(() =>
  import("@/components/layout/customer/CustomerHeader.vue")
);
const CustomerFooter = defineAsyncComponent(() =>
  import("@/components/layout/customer/CustomerFooter.vue")
);

const VendorIntroduction = defineAsyncComponent(() =>
  import("@/pages/vendor/VendorIntroduction.vue")
);

export default {
  components: {
    CustomerHeader,
    CustomerFooter,
    VendorIntroduction,
    ListCourtOfVendor,
  },
  created() {
    this.loading = true;
    this.idVendor = this.$route.params.vendorId;
    VendorService.getVendorDetailAndCourtList(this.idVendor)
      .then(res => {
        let responses = res;
        responses.forEach((response, index) => {
          if (response.status === 200) {
            if (index === 0) {
              this.vendorInfo = response.data;
            } else if (index == 1) {
              this.courtListOfVendor = response.data.Value;
            }
          }

          console.log(this.vendorInfo);
          console.log(this.courtListOfVendor);

        })
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        this.loading = false;
      })
  },
  data() {
    return {
      currentTab: "list-court",
      currentComponent: "list-court-of-vendor",
      idVendor: '',
      vendorInfo: "",
      courtListOfVendor: [],
      loading: false
    };
  },
  methods: {
   
  },
  watch: {
    $route() {
      this.idVendor = this.$route.params.vendorId;
    }
  }
};
</script>

<style>

</style>
