import api from "./token/api";

const BASE_URL = "https://coreapi2.softek.com.vn/api/";

class VendorService {
  getVendorProfile(id) {
    return api.get(BASE_URL + "Vendor/GetOne", {
      params: {
        Id: id,
      },
    });
  }

  createVendorProfile(vendor) {
    return api.post(BASE_URL + "Vendor", {
      imageUrl: vendor.ImageUrl,
      phoneNumber: vendor.PhoneNumber,
      address: vendor.Address,
      active: true,
      email: vendor.Email,
      insertedBy: vendor.OwnerId,
      updatedBy: vendor.OwnerId,
      ownerId: vendor.OwnerId,
      openTime: vendor.OpenTime,
      closeTime: vendor.CloseTime,
      ratingAverage: 0,
      statusId: 1,
      businessStatusId: 1,
      name: vendor.Name,
    });
  }

  updateVendorProfile(vendor) {
    return api.put(BASE_URL + "Vendor", {
      Id: vendor.VendorId,
      Name: vendor.Name,
      ImageUrl: vendor.ImageUrl,
      phoneNumber: vendor.PhoneNumber,
      address: vendor.Address,
      active: true,
      insertedBy: vendor.OwnerId,
      updatedBy: vendor.OwnerId,
      ownerId: vendor.OwnerId,
      openTime: vendor.OpenTime,
      closeTime: vendor.CloseTime,
      ratingAverage: vendor.RatingAverage,
      statusId: vendor.StatusId,
      businessStatusId: vendor.BusinessStatusId,
      vendorName: vendor.VendorName,
      email: vendor.Email,
      ApproveStatusId: vendor.ApproveStatusId,
      RejectBy: vendor.RejectBy,
      RejectDate: vendor.RejectDate,
      ApprovedDate: vendor.ApprovedDate,
      ApprovedBy: vendor.ApprovedBy,
      Approved: vendor.Approved,
      RatingAverage: vendor.RatingAverage,
      InsertedDate: vendor.InsertedDate,
      InsertedBy: vendor.InsertedBy,
    });
  }

  sendRequestToApprove(vendor) {
    return api.post(BASE_URL + "Vendor/SendRequest", {
      vendorId: vendor.Id,
    });
  }

  loadVendorRequestApprove(param) {
    return api.get(BASE_URL + "Vendor/PagedListStatus", {
      params: {
        VendorId: param.vendorId,
        PageSize: param.pageSize,
        queryString: param.queryString,
        CurrentPage: param.currentPage,
        statusId: param.statusId,
      },
    });
  }
  loadVendors(param) {
    return api.get(BASE_URL + "Vendor/PagedList", {
      VendorId: param.vendorId,
      PageSize: param.pageSize,
      queryString: param.queryString,
      CurrentPage: param.currentPage,
      statusId: param.statusId,
    });
  }
  loadMembers(param) {
    return api.get(BASE_URL + "Vendor/IPagedList", {
      params: {
        VendorId: param.vendorId,
        PageSize: param.pageSize,
        queryString: param.queryString,
        CurrentPage: param.currentPage,
        statusId: param.statusId,
      },
    });
  }

  approveVendorRequest(vendorId) {
    return api.post(BASE_URL + "Vendor/Approve", {
      vendorId: vendorId,
      Reason: "Đã Duyệt",
    });
  }

  rejectVendorRequest(vendorId, reasonText) {
    return api.post(BASE_URL + "Vendor/Reject", {
      vendorId: vendorId,
      reason: reasonText,
    });
  }

  getTicketApprove(vendorId) {
    return api.get(BASE_URL + "Vendor/IPagedList", {
      params: {
        VendorId: vendorId,
      },
    });
  }

  searchVendor(param) {
    return api.get(BASE_URL + "Vendor/IPagedList", {
      params: {
        PageSize: param.pageSize,
        queryString: param.queryString,
        CurrentPage: param.currentPage,
      },
    });
  }

  getVendorDetailAndCourtList(vendorId) {
    const promise1 = api.get(BASE_URL + "Vendor/GetOne", {
      params: {
        id: vendorId,
      },
    });

    const promise2 = api.get(BASE_URL + "Court/IPagedList", {
      params: {
        VendorId: vendorId,
      },
    });

    return Promise.all([promise1, promise2]);
  }
  getListVendor(param) {
    return api.get(BASE_URL + "Vendor/IPagedList", {
      params: {
        PageSize: param.PageSize,
        queryString: param.queryString,
        CurrentPage: param.CurrentPage,
      },
    });
  }
}

export default new VendorService();
