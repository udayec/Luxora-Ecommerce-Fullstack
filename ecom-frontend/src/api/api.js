import axios from "axios";
import toast from "react-hot-toast";
import { logOutUser } from "../store/actions";
import store from "../store/reducers/store";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
  withCredentials: true,
});

// 🔐 Add response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.",{duration: 3000,position: "top-centre"});
      store.dispatch(logOutUser());
    }
    return Promise.reject(error);
  }
);

export default api;
