import axiosClient from "./axiosClient"

export const getUserToken = () => {
  const url = "/users/index"
  return axiosClient.get(url)
}
