class TokenService {
  getLocalAccessToken() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      return user.Token.AccessToken;
    }
  }

  getLocalRefreshToken() {
    let user = JSON.parse(localStorage.getItem("user"));
    return user.Token.refreshToken;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.Token.AccessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
  }

  updateLocalVendorId(id) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.Token.VendorId = id;
    localStorage.setItem("user", JSON.stringify(user));
  }

  updateLocalUserProfile(profile) {
    let user = JSON.parse(localStorage.getItem("user"));
    user.Token.FullName = profile.FullName;
    user.Token.PhoneNumber = profile.PhoneNumber;
    user.Token.Avatar = profile.Avatar;
    localStorage.setItem("user", JSON.stringify(user));
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  removeUser() {
    localStorage.removeItem("user");
  }
}

export default new TokenService();
