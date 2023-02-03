// dùng để config axios

import axios from "axios";
const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;
