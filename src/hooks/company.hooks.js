import { useMutation, useQuery } from "react-query"
import { getCompanyInfo, sentUserContactNotification } from "../api-services/company"
import { getCompanyDomain } from "../utils/get-params-value"

export const useCompanyInfo = () => {
  const companyDomain = getCompanyDomain()
  return useQuery(
    ["companyInfo", companyDomain],
    () =>
      getCompanyInfo({
        params: { domain: companyDomain }
      }),
    {
      onSuccess: (data) => {
        const pageLayout = document.documentElement
        pageLayout.style.setProperty("--secondaryColor", `${data?.theme?.secondaryColor || "#162029"}`)
        pageLayout.style.setProperty("--primaryColor", `${data?.theme?.primaryColor || "#04f73d"}`)
      },
      retry: 1
    }
  )
}

export const useSendUserContactNotification = () => {
  return useMutation((data) => sentUserContactNotification(data.companyId, data.params))
}

export const useCompanyTheme = () => {
  const { data: companyInfo } = useCompanyInfo()
  return companyInfo?.theme
}
export const useCompanyHomePageDetails = () => {
  const { data: companyInfo } = useCompanyInfo()
  return companyInfo?.homepageDetails
}

export const useCompanyLogo = () => {
  const companyTheme = useCompanyTheme()
  const companyLightLogo = companyTheme?.iconURL || companyTheme?.logoUrl
  const companyDarkLogo = companyTheme?.iconDarkUrl || companyTheme?.logoDarkUrl
  return {
    lightLogo: companyLightLogo,
    darkLogo: companyDarkLogo
  }
}
