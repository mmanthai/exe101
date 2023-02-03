import { createStore } from "vuex";
import { auth } from "./authentication/auth.module";

export default createStore({
  modules: {
    auth,
  },
});
