import api from "./token/api";

const BASE_URL = "https://coreapi2.softek.com.vn/api/";

class CustomerService {
  loadAllListForHomePage() {
    const promise1 = api.get(BASE_URL + "Vendor/LoadPromotingVendor");
    const promise2 = api.get(BASE_URL + "Vendor/LoadHighRatingVendor");
    const promise3 = api.get(BASE_URL + "Court/LoadHighCourtBooked");

    return Promise.all([promise1, promise2, promise3]);
  }

  LoadHighRatingVendor(param) {
    return api.get(BASE_URL + "Vendor/LoadHighRatingVendor", {
      params: {
        VendorId: param.vendorId,
        PageSize: param.pageSize,
        queryString: param.queryString,
        CurrentPage: param.currentPage,
        statusId: param.statusId,
      },
    });
  }

  LoadHighCourtBooked(param) {
    return api.get(BASE_URL + "Vendor/LoadHighCourtBooked", {
      params: {
        VendorId: param.vendorId,
        PageSize: param.pageSize,
        queryString: param.queryString,
        CurrentPage: param.currentPage,
        statusId: param.statusId,
      },
    });
  }
}

export default new CustomerService();
