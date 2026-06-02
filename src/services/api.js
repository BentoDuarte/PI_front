import axios from "axios";
import Alert from "../utils/alert.js";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
});

export default api;