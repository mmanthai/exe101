import api from "./token/api";

const BASE_URL = "https://coreapi2.softek.com.vn/api/";

class CourtService {
  createCourt(court) {
    return api.post(BASE_URL + "Court/CreateAsync", {
      name: court.name,
      vendorId: court.vendorId,
      typeId: court.typeId,
      courtSizeId: court.courtSizeId,
      ratingAverage: 0,
      isValid: true,
      imageUrl: court.imageUrl,
    });
  }

  getCourtOfVendor(param) {
    return api.get(BASE_URL + "Court/PagedList", {
      params: {
        VendorId: param.vendorId,
        PageSize: param.pageSize,
        query: param.query,
        CurrentPage: param.currentPage,
      },
    });
  }

  updateCourt(update_info) {
    return api.put(BASE_URL + "Court", {
      id: update_info.Id,
      name: update_info.Name,
      vendorId: update_info.VendorId,
      typeId: update_info.TypeId,
      courtSizeId: update_info.CourtSizeId,
      ratingAverage: update_info.RatingAverage,
      active: true,
      imageUrl: update_info.ImageUrl,
    });
  }

  deleteCourt(court_id) {
    return api.delete(BASE_URL + `Court/${court_id}`);
  }

  getCourtById(court_id) {
    return api.get(BASE_URL + "Court/GetOne", {
      params: {
        Id: court_id,
      },
    });
  }

  loadCourtSize() {
    return api.get(BASE_URL + "CourtSize/PagedList");
  }
}

export default new CourtService();
