export default class Promotion {
  constructor(
    DiscountPercentage,
    Note,
    StatusId,
    ApplyTypeId,
    EffectiveDate,
    ExpiredDate,
    VendorId,
    Name,
    ImageUrl
  ) {
    {
      this.DiscountPercentage = DiscountPercentage;
      this.Note = Note;
      this.StatusId = StatusId ?? 1;
      this.ApplyTypeId = ApplyTypeId ?? 1;
      this.EffectiveDate = EffectiveDate;
      this.ExpiredDate = ExpiredDate;
      this.VendorId = VendorId;
      this.Name = Name;
      this.ImageUrl = ImageUrl;
    }
  }
}
