import axiosClient from "./axiosClient"

export const getCompanyInfo = (params) => {
  return axiosClient.get("/company/companyInfo", params)
}

export const sentUserContactNotification = (id, params) => {
  return axiosClient.post(`/company/${id}/userContactNotification`, params)
}
