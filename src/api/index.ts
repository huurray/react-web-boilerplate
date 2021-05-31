import axios from "axios";

export const VERSION = "0.1.0";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default api;
