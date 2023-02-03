import AuthService from "@/services/auth.service";
import UserService from "@/services/user.service";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: () => ({
    initialState,
  }),
  getters: {
    getUser: (state) => {
      return state.initialState.user;
    },
    getRole: (state) => {
      return state.initialState.user.Token.RoleIds[0];
    },
    getStatusLoggedIn: (state) => {
      return state.initialState.status.loggedIn;
    },
  },
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit("logout");
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        (response) => {
          if (response.status === 200) {
            return Promise.resolve(response.data);
          }
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    resendOTP({ commit }, user) {
      return AuthService.resendOTP(user).then(
        (response) => {
          if (response.status === 200) {
            return Promise.resolve(response.data);
          }
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
    refreshToken({ commit }, accessToken) {
      commit("refreshToken", accessToken);
    },

    forgotPassword({ commit }, email) {
      return AuthService.forgotPassword(email).then(
        (response) => {
          commit("forgotPassword");
          return Promise.resolve(response.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },

    changePassword({ commit }, change) {
      console.log("auth module obj " + change);
      return AuthService.changePassword(change).then(
        (response) => {
          commit("logout");
          return Promise.resolve(response.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },

    verifyAccount({ commit }, data) {
      return AuthService.verify(data.code, data.email).then(
        (response) => {
          commit("logout"); // cho no quay nguoc ra login
          return Promise.resolve(response.data);
        },
        (error) => {
          commit("registerSuccess");
          return Promise.reject(error);
        }
      );
    },
    changePasswordUserProfile({ commit }, change) {
      return UserService.changePasswordProfile(change).then(
        (response) => {
          commit("changePasswordUserProfile");
          return Promise.resolve(response.data);
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.initialState.status.loggedIn = true;
      state.initialState.user = user;
    },
    loginFailure(state) {
      state.initialState.status.loggedIn = false;
      state.initialState.user = null;
    },
    logout(state) {
      state.initialState.status.loggedIn = false;
      state.initialState.user = null;
    },
    registerSuccess(state) {
      state.initialState.status.loggedIn = false;
    },
    registerFailure(state) {
      state.initialState.status.loggedIn = false;
    },
    forgotPassword(state) {
      state.initialState.status.loggedIn = false;
    },
    changePasswordUserProfile(state) {
      state.initialState.status.loggedIn = true;
    },
    refreshToken(state, accessToken) {
      state.initialState.status.loggedIn = true;
      state.initialState.user = { ...state.user, accessToken: accessToken }; // thay accessToken mới vào trong user
    },
    changePasswordUserProfile(state) {
      state.initialState.status.loggedIn = true;
    },
  },
};
