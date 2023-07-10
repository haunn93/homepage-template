import { useState, useEffect } from "react"
import { getCompanyDomain } from "../utils/get-params-value"

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [matches, query])

  return matches
}

export const useIsMobile = () => useMediaQuery("(max-width: 767px)")
export const useIsTablet = () => useMediaQuery("(max-width: 1023px)")

export const getAppLoginUrl = () => {
  const domain = getCompanyDomain()
  return `${import.meta.env.DEV ? "http" : "https"}://${domain}.app.${import.meta.env.VITE_APP_HOST}${
    import.meta.env.DEV ? ":8001" : ""
  }/login`
}

export const getAppSignUpUrl = () => {
  const domain = getCompanyDomain()
  return `${import.meta.env.DEV ? "http" : "https"}://${domain}.app.${import.meta.env.VITE_APP_HOST}${
    import.meta.env.DEV ? ":8001" : ""
  }/signup`
}

export const getAppAPIUrl = () => {
  const URL = `${import.meta.env.DEV ? "http" : "https"}://api.${getHostName()}${
    import.meta.env.DEV ? ":3000" : ""
  }/api`
  return URL
}

export const getHostName = () => {
  const isBrowser = () => typeof window !== "undefined"
  if (import.meta.env.VITE_APP_HOST) {
    return import.meta.env.VITE_APP_HOST
  }
  if (isBrowser()) {
    const { hostname } = window.location
    const splittedHostname = hostname.split(".")
    if (splittedHostname.includes("staging")) {
      const index = splittedHostname.lastIndexOf("staging")
      return splittedHostname.slice(index).join(".")
    }
    if (splittedHostname.includes("app")) {
      const index = splittedHostname.lastIndexOf("app")
      return splittedHostname.slice(index + 1).join(".")
    }
    if (splittedHostname.includes("backoffice")) {
      const index = splittedHostname.lastIndexOf("backoffice")
      return splittedHostname.slice(index + 1).join(".")
    }
    return window.location.hostname
  }
  return ""
}
