import { getUserToken } from "../api-services/user.js"

export const getCsrfToken = async () => {
  const isBrowser = typeof window !== "undefined"
  const userIndex = await getUserToken()
  const { csrfToken } = userIndex
  if (isBrowser) {
    window.localStorage.setItem("token", csrfToken)
  }
  return csrfToken
}
