export default class Error {
  constructor(
    errUserName,
    errFullName,
    errEmail,
    errPhoneNumber,
    errConfirmPassword,
    errPassword
  ) {
    this.errUserName = errUserName;
    this.errFullName = errFullName;
    this.errEmail = errEmail;
    this.errPhoneNumber = errPhoneNumber;
    this.errConfirmPassword = errConfirmPassword;
    this.errPassword = errPassword;
  }
}
