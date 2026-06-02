import axios from "axios";
import Texts from "../assets/json/texts.json";
import Alert from "../utils/alert";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
});

export default api;