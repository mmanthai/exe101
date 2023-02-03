import api from "./token/api";

const BASE_URL = "https://coreapi2.softek.com.vn/api/";

class PromotionService {
  createPromotion(voucher) {
    return api.post(BASE_URL + "Promotion", {
      // params: {
      discountPercentage: voucher.DiscountPercentage,
      note: voucher.Note,
      statusId: 1,
      applyTypeId: 1,
      effectiveDate: voucher.EffectiveDate,
      expiredDate: voucher.ExpiredDate,
      active: true,
      vendorId: voucher.VendorId,
      name: voucher.Name,
      imageUrl: voucher.ImageUrl,
      // },
    });
  }

  getPromotionOfVendor(param) {
    return api.get(BASE_URL + "Promotion/PagedList", {
      params: {
        VendorId: param.vendorId,
        PageSize: param.pageSize,
        queryString: param.query,
        CurrentPage: param.currentPage,
      },
    });
  }

  updatePromotion(update_promotion) {
    return api.put(BASE_URL + "Promotion", {
      id: update_promotion.Id,
      vendorId: update_promotion.VendorId,
      code: update_promotion.Code,
      effectiveDate: new Date(update_promotion.EffectiveDate).toISOString(),
      expiredDate: new Date(update_promotion.ExpiredDate).toISOString(),
      name: update_promotion.Name,
      description: update_promotion.Description,
      imageUrl: update_promotion.ImageUrl,
      applyTypeId: 1,
      discountPercentage: update_promotion.discountPercentage,
    });
  }

  deletePromotion(id) {
    return api.delete(BASE_URL + `Promotion/${id}`);
  }
}

export default new PromotionService();
