import api from "./token/api";

const BASE_URL = "https://coreapi2.softek.com.vn/api/";

class BookingService {
  getPagedListBookingRequest(param) {
    return api.get(BASE_URL + "Booking/PagedList", {
      params: {
        PageSize: param.pageSize,
        query: param.query,
        CurrentPage: param.currentPage,
        vendorId: param.vendorId,
      },
    });
  }
  async getPagedListBookingHistory(param) {
    return await api.get(BASE_URL + "Booking/IPagedList", {
      params: {
        VendorId: param.VendorId,
        PageSize: param.PageSize,
        queryString: param.queryString,
        CurrentPage: param.CurrentPage,
        statusId: param.statusId,
      },
    });
  }
}

export default new BookingService();
