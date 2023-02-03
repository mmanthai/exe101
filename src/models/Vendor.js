export default class Vendor {
  constructor(
    Id,
    Name,
    Description,
    ImageUrl,
    PhoneNumber,
    Address,
    Active,
    OpenTime,
    CloseTime,
    RatingAverage,
    BusinessStatusId,
    Email,
    ApproveStatusId,
    RejectedBy,
    RejectedDate,
    ApprovedDate,
    ApprovedBy,
    Approved,
    InsertedBy,
    InsertedDate
  ) {
    this.Id = Id;
    this.Name = Name;
    this.Description = Description;
    this.ImageUrl = ImageUrl;
    this.PhoneNumber = PhoneNumber;
    this.Address = Address;
    this.OpenTime = OpenTime;
    this.CloseTime = CloseTime;
    this.BusinessStatusId = BusinessStatusId;
    this.Email = Email;
    this.RatingAverage = RatingAverage;
    this.Active = Active;
    this.ApproveStatusId = ApproveStatusId;
    this.RejectedBy = RejectedBy;
    this.RejectedDate = RejectedDate;
    this.ApprovedDate = ApprovedDate;
    this.ApprovedBy = ApprovedBy;
    this.Approved = Approved;
    this.InsertedBy = InsertedBy;
    this.InsertedDate = InsertedDate;
  }
}
