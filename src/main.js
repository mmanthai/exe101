import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router/router.js";

import InputComponent from "@/components/ui/InputComponent.vue";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";
import PreloaderComponent from "@/components/ui/PreloaderComponent.vue";

import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

import store from "./store";
import VueSmoothScroll from "vue3-smooth-scroll";
import setupInterceptor from "./services/token/setUpInterceptors";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
const app = createApp(App);

app.use(router);
app.use(VueSmoothScroll);

app.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: true,
});
app.use(store);
app.use(VueSweetalert2);
app.use(VueToast);
setupInterceptor(store);

app.use(ToastPlugin);
app.component("preloader-component", PreloaderComponent);
app.component("input-component", InputComponent);
app.component("button-component", ButtonComponent);

app.mount("#app");
