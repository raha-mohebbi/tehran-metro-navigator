// axios settings & api base address

import axios from "axios";

const api = axios.create({
  baseURL: "https://metto.ir/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
