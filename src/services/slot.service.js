import api from "./token/api";

const BASE_URL = "https://coreapi2.softek.com.vn/api/";

class SlotService {
  createSlotForCourtTypeId(slot_detail) {
    let slot_arr = [];

    slot_detail.forEach((slot) => {
      slot_arr.push({
        id: slot.Id,
        no: slot.No,
        slotNo: slot.SlotNo,
        startTime: slot.StartTime,
        endTime: slot.EndTime,
        price: slot.Price,
        vendorId: slot.VendorId,
        active: true,
        applyTypeId: slot.ApplyTypeId,
        statusId: 1,
      });
    });

    return api.put(BASE_URL + "Slot/BulkUpdate", slot_arr);
  }

  createRatingForSlotByDate(rate_detail) {
    return api.put(BASE_URL + "HolidayConfig/BulkUpdate", rate_detail);
  }

  getRatingByVendorId(params) {
    return api.get(BASE_URL + "HolidayConfig/PagedList", {
      params: {
        VendorId: params.vendorId,
        PageSize: "",
        queryString: "",
        CurrentPage: 1,
      },
    });
  }

  getListSlotByVendorId(param) {
    return api.get(BASE_URL + "Slot/PagedList", {
      params: {
        VendorId: param.vendorId,
        PageSize: "",
        queryString: "",
        CurrentPage: 1,
      },
    });
  }

  getSlotById(slot_id) {
    return api.get(BASE_URL + "Slot/GetOne", {
      params: {
        Id: slot_id,
      },
    });
  }

  getSlotByDate(param) {
    return api.get(BASE_URL + "Slot/GetSlotByDate", {
      params: {
        VendorId: param.VendorId,
        CourtId: param.CourtId,
        BookedPlayDate: param.BookedPlayDate,
        CourtTypeId: param.CourtTypeId,
      },
    });
  }
  createSlotBookingByDate(param) {
    return api.post(BASE_URL + "Booking/CreateAsync", {
      CourtId: parseInt(param.CourtId),
      PlayDate: param.BookedPlayDate,
      SlotIds: param.SlotIds,
    });
  }
}

export default new SlotService();
