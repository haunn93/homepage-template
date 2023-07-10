import AboutUs from "./components/about-us"
import NavigationBar from "./components/navigation-bar"
import OurOffering from "./components/our-offering"
import GetInTouch from "./components/get-in-touch"
import Footer from "./components/footer"
import Heading from "./components/heading"
import TechSupported from "./components/tech-supported"
import { QueryClient, QueryClientProvider } from "react-query"
import { SnackbarProvider } from "notistack"
import { useLayoutEffect } from "react"
import axiosClient from "./api-services/axiosClient"
import { getCsrfToken } from "./utils/auth"

export default function Root() {
  const queryClient = new QueryClient()
  useLayoutEffect(() => {
    axiosClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error?.response) {
          if (error.response.status === 403 && error.response.data?.errorCode === "CFRSTOKEN_EXPIRED") {
            const csrfToken = await getCsrfToken()
            const apiConfig = {
              ...error.config,
              headers: {
                ...error.config.headers,
                "csrf-token": csrfToken
              }
            }
            axiosClient.defaults.headers.common["csrf-token"] = csrfToken
            return axiosClient(apiConfig)
          }
          throw error.response
        }
        throw error
      }
    )
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <NavigationBar />
        <Heading />
        <OurOffering />
        <TechSupported />
        <AboutUs />
        <GetInTouch />
        <Footer />
      </SnackbarProvider>
    </QueryClientProvider>
  )
}
