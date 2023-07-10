import React from "react"
import { DEFAULT_CONTENT, DEFAULT_THEME } from "../../common/default-content"
import { useCompanyHomePageDetails, useCompanyInfo } from "../../hooks/company.hooks"
import ScheduleButton from "../schedule-button"
import SignUpToAppButton from "../sign-up-to-app-button"
import "./get-in-touch.scss"
import RequestCallBack from "../heading/components/request-callback"

const GetInTouch = () => {
  const { data: companyInfo } = useCompanyInfo()
  const companyHomePageDetails = useCompanyHomePageDetails()
  const contactMethod = companyHomePageDetails?.contactMethod || DEFAULT_CONTENT.contactMethod
  return (
    <div className="get-in-touch">
      <div className="get-in-touch__container">
        <div className="get-in-touch__content">
          <div className="get-in-touch__title">
            Get In Touch<span>.</span>
          </div>
          <div className="get-in-touch__call-now">
            Call Now{" "}
            <a href={`tel:${companyInfo?.businessPhoneNumber || DEFAULT_THEME.phoneNumber}`}>
              {companyInfo?.bussinessPhoneNumber || DEFAULT_THEME.phoneNumber}
            </a>
          </div>
        </div>

        {contactMethod !== "calendly" ? (
          <div className="get-in-touch-form">
            <RequestCallBack />
          </div>
        ) : (
          <div className="get-in-touch-button">
            <ScheduleButton />
            <SignUpToAppButton />
          </div>
        )}
      </div>
    </div>
  )
}

export default GetInTouch
