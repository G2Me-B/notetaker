import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

// axios instance
const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

export default api;