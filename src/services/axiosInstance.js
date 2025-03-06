import axios from "axios";

const baseURL = "/api"
export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}${baseURL}`,
  timeout: 1000000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});