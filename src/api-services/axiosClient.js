import axios from "axios"
import queryString from "query-string"
import { getAppAPIUrl } from "../hooks/common.hooks"

const axiosClient = axios.create({
  baseURL: getAppAPIUrl(),
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params)
})

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  const { method } = config
  if (method !== "get") {
    axiosClient.defaults.headers.common["csrf-token"] = token
  }
  return config
})

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data
  }
  return response
})
export default axiosClient
