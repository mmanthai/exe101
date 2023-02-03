import api from "./token/api";

const BASE_URL = "https://coreapi2.softek.com.vn/api/";
class UserService {
  //Owner
  getOwnerProfile(id) {
    return api.get(BASE_URL + "User/GetOne", {
      params: {
        Id: id,
      },
    });
  }
  searchMember(mem) {
    return api.get(BASE_URL + "/User/PagedList", {
      params: {
        pageSize: mem.pageSize,
        queryString: mem.queryString,
      },
    });
  }

  updateOwnerProfile(profile) {
    return api.put(BASE_URL + "User", {
      id: profile.id,
      userName: profile.username,
      password: profile.password,
      fullName: profile.fullName,
      phoneNumber: profile.phoneNumber,
      email: profile.email,
      avatar: profile.avatar,
    });
  }

  updateProfile(profile) {
    return api.put(BASE_URL + "User/UpdateAsync", {
      fullName: profile.fullName,
      phoneNumber: profile.phoneNumber,
      imgUrl: profile.avatar,
    });
  }

  changePasswordProfile(change) {
    return api.post(BASE_URL + "User/ChangePassword", {
      oldPassword: change.oldPassword,
      password: change.password,
      confirmPassword: change.confirmPassword,
    });
  }

  changePasswordProfile(change) {
    return api.post(BASE_URL + "User/ChangePassword", {
      oldPassword: change.oldPassword,
      password: change.password,
      confirmPassword: change.confirmPassword,
    });
  }

  resendOTP(email) {
    return api.post(BASE_URL + "User/ResendVerification", {
      email: email,
    });
  }
  getListMember(param) {
    return api.get(BASE_URL + "User/IPagedList", {
      params: {
        PageSize: param.PageSize,
        queryString: param.queryString,
        CurrentPage: param.CurrentPage,
      },
    });
  }
}

export default new UserService();
