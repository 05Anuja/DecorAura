import axios from "axios";
import { base_url } from "../constants/constant";

const API = axios.create({
  baseURL: base_url,
  withCredentials: true,
});

export default API;