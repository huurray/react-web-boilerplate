import axios from "axios";

export const API_URL = "https://example.com";

export const VERSION = "0.1.0";

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default api;
