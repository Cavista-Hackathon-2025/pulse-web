import axios from "axios"

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000/api/v1" : "https://pulse-backend.vercel.app/api/v1"

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
})

// Add auth token to requests
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosInstance

