import React from "react"
import { DEFAULT_CONTENT } from "../../common/default-content"
import { useCompanyHomePageDetails } from "../../hooks/company.hooks"
import ScheduleButton from "../schedule-button"
import SignUpToAppButton from "../sign-up-to-app-button"
import "./heading.scss"
import RequestCallBack from "./components/request-callback"
import { useIsMobile } from "../../hooks/common.hooks"

const ScheduleButtons = () => {
  return (
    <div className="schedule-action-button">
      <ScheduleButton />
      <SignUpToAppButton />
    </div>
  )
}

const Heading = () => {
  const companyHomePageDetails = useCompanyHomePageDetails()
  const isMobile = useIsMobile()
  const contactMethod = companyHomePageDetails?.contactMethod || DEFAULT_CONTENT.contactMethod
  return (
    <div className="heading">
      <div className="heading-content">
        <div className="heading-content__title">{companyHomePageDetails?.titleText || DEFAULT_CONTENT.titleText}</div>
        <div className="heading-content__description">
          {companyHomePageDetails?.subText || DEFAULT_CONTENT.subTitleText}
        </div>
        {!isMobile && (contactMethod !== "calendly" ? <RequestCallBack /> : <ScheduleButtons />)}
      </div>
      <div className="heading-image">
        <div className="heading-image__container">
          <img src={companyHomePageDetails?.featureImage || DEFAULT_CONTENT.featureImage} alt="" />
        </div>
      </div>
      {isMobile && (contactMethod !== "calendly" ? <RequestCallBack /> : <ScheduleButtons />)}
    </div>
  )
}

export default Heading
