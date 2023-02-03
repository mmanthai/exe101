export default class User {
  constructor(
    username,
    email,
    password,
    confirmPassword,
    fullName,
    phoneNumber,
    clientId
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.clientId = clientId;
  }
}
