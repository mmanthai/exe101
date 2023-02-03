import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "login-page",
    path: "/login",
    component: () => import("@/pages/common/LoginPage.vue"),
  },
  {
    path: "/dashboard",
    name: "admin-home",
    component: () => import("@/pages/admin/AdminDashBoard.vue"),
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: false,
      customerAuth: false
    },
  },
  {
    path: "/vendor",
    name: "Vendor Home",
    component: () => import("@/pages/vendor/Dashboard.vue"),
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: true,
      customerAuth: false
    },
  },
  {
    path: "/notify",
    name: "notify",
    component: () => import("@/pages/admin/NotifyDetailPage.vue"),
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: false,
      customerAuth: false
    },
  },
  {
    path: "/register",
    name: "Register Page",
    component: () => import("@/pages/common/RegisterPage.vue"),
  },
  {
    path: "/forgotPassword",
    name: "Forgot Page",
    component: () => import("@/pages/common/ForgotPassword.vue"),
  },
  {
    path: "/changeForgotPassword",
    name: "Change Password Page",
    component: () => import("@/pages/common/ChangeForgotPassword.vue"),
  },
  {
    path: "/admin-profile",
    name: "Profile Page",
    component: () => import("@/pages/admin/AdminProfilePage.vue"),
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: false,
      customerAuth: false
    },
  },
  {
    path: "/verify",
    name: "Verify Page",
    component: () => import("@/pages/common/VerifyPage.vue"),
  },
  {
    path: "/vendor-profile",
    name: "Vendor Profile",
    component: () => import("@/pages/vendor/ProfilePage.vue"),
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: true,
      customerAuth: false
    },
  },
  {
    name: "home-page",
    path: "/home",
    component: () => import("@/pages/customer/HomePage.vue"),
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: false,
      customerAuth: true
    },
  },
  {
    name: "profile-page",
    path: "/profile",
    component: () => import("@/pages/customer/UserProfile.vue"),
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: false,
      customerAuth: true
    },
  },
  {
    name: "search-vendor-page",
    path: "/vendor/search/:search",
    component: () => import("@/pages/customer/SearchPage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: false,
      customerAuth: true
    },
  },
  {
    name: "vendor-detail-page",
    path: "/vendor/:vendorId", // this.$route.params.vendorId
    component: () => import("@/pages/customer/VendorDetailPage.vue"),
    props: true,
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: false,
      customerAuth: true
    },
  },
  {
    name: "booking-page",
    path: "/booking/:vendorId", // this.$route.params.vendorId
    component: () => import("@/pages/customer/Booking.vue"),
    props: true,
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: false,
      customerAuth: true
    },
  },
  {
    name: "history-page",
    path: "/history", // this.$route.params.vendorId
    component: () => import("@/pages/customer/HistoryBooking.vue"),
    props: true,
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: false,
      customerAuth: true
    },
  },
  // {
  //   name: "history-detail-page",
  //   path: "/history/:bookingId", // this.$route.params.vendorId
  //   component: () => import("@/pages/customer/HistoryBookingDetail.vue"),
  //   props: true,
  //   meta: {
  //     requiresAuth: true,
  //     adminAuth: false,
  //     userAuth: false,
  //     customerAuth: true
  //   },
  // },
  // {
  //   path: "/yard-owner",
  //   name: "Yard Owner Dashboard",
  //   component: () => import("@/pages/vendor/DashBoard.vue"),
  //   meta: {
  //     requiresAuth: true,
  //     adminAuth: false,
  //     userAuth: true,
  //   },
  // },
  {
    path: "/store-profile",
    name: "Store Profile",
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: true,
      customerAuth: false
    },
  },
  {
    path: "/owner-profile",
    name: "Owner Profile",
    component: () => import("@/pages/vendor/ProfilePage.vue"),
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: true,
      customerAuth: false
    },
  },
  {
    path: "/:notFound(.*)",
    component: () => import("@/pages/common/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPage = [
    "/login",
    "/register",
    "/forgotPassword",
    "/changeForgotPassword",
    "/verify",
  ]; // page k cần xác thực, ai cũng vào đc
  const authRequire = !publicPage.includes(to.path); // check nếu k phải publicpage thì phải quay về publicpage
  const loggedIn = JSON.parse(localStorage.getItem("user"));

  if (authRequire && !loggedIn) {
    next("/login");
  } else if (to.path === "/") {
    next("/login");
  } else {
    next();
    // if (loggedIn) {
    //   if (to.path === "/login" || to.path === "/register") {
    //     router.back();
    //   }
    //   let RoleID = loggedIn.Token.RoleIds[0];
    //   if (to.meta.adminAuth) {
    //     console.log("role" + RoleID);
    //     if (RoleID === 2) {
    //       next("/dashboard");
    //     } else {
    //       router.push("/dashboard");
    //     }
    //   } else if (to.meta.userAuth) {
    //     if (RoleID === 4) {
    //       next();
    //     } else {
    //       router.push({ path: "/vendor", replace: true });
    //       router.replace({ path: "/vendor" });
    //     }
    //   }
    // }
    if (loggedIn) {
      if (to.path === "/login" || to.path === "/register") {
        router.back();
      }
      let RoleID = loggedIn.Token.RoleIds[0];
      if (to.meta.adminAuth) {
        if (RoleID === 2) {
          next("/dashboard");
        } else {
          router.push({ path: "/dashboard", replace: true });
          router.replace({ path: "/dashboard" });
        }
      } else if (to.meta.userAuth) {
        if (RoleID === 4) {
          next("/vendor");
        } else {
          router.push({ path: "/vendor", replace: true });
          router.replace({ path: "/vendor" });
        }
      } else if (to.meta.customerAuth) {
        if (RoleID === 5) {
          next("/home");
        } else {
          router.push({ path: "/home", replace: true });
          router.replace({ path: "/home" });
        }
      }
    }
  }
});
export default router;
