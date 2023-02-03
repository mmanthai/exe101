import axiosIntance from "./token/api";
import TokenService from "./token/token.service";

const BASE_URL = "https://coreapi2.softek.com.vn/api/";

class AuthService {
  login(user) {
    return axiosIntance
      .post(BASE_URL + "User/SignIn", {
        Username: user.username,
        Password: user.password,
        autoSignIn: true,
        clientId: 2,
      })
      .then((response) => {
        if (response.data.Token) {
          TokenService.setUser(response.data);
        }
        return response.data;
      });
  }
  logout() {
    TokenService.removeUser();
  }
  register(user) {
    return axiosIntance.post(BASE_URL + "User/Register", {
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      fullName: user.fullName,
      clientId: user.clientId,
      phoneNumber: user.phoneNumber,
    });
  }

  resendOTP(user) {
    return axiosIntance.post(BASE_URL + "User/Register", {
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      fullName: user.fullName,
      clientId: user.clientId,
    });
  }
  forgotPassword(email) {
    return axiosIntance.post(BASE_URL + "User/ForgotPassword", {
      email: email,
    });
  }
  changePassword(change) {
    console.log("auth service obj" + change);
    return axiosIntance.post(BASE_URL + "User/ChangeForgotPassword", {
      email: change.email,
      code: change.code,
      password: change.password,
      confirmPassword: change.confirmPassword,
    });
  }
  verify(code, email) {
    return axiosIntance.post(BASE_URL + "User/VerifyCode", {
      code: code,
      email: email,
    });
  }
}

export default new AuthService();
