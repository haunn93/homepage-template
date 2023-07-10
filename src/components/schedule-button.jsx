import React from "react"
import { useCompanyHomePageDetails } from "../hooks/company.hooks"
import { PopupButton } from "react-calendly"
import { DEFAULT_THEME } from "../common/default-content"

const ScheduleButton = () => {
  const companyHomePageDetails = useCompanyHomePageDetails()
  return (
    <>
      <PopupButton
        url={companyHomePageDetails?.calendlyURL || DEFAULT_THEME.calendlyURL}
        rootElement={document.getElementById("root")}
        text="Schedule a Call"
      />
    </>
  )
}

export default ScheduleButton
