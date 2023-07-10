import React from "react"
import { DEFAULT_CONTENT } from "../../common/default-content"
import { useCompanyHomePageDetails } from "../../hooks/company.hooks"
import "./about-us.scss"

const AboutUs = () => {
  const companyHomePageDetails = useCompanyHomePageDetails()

  return (
    <div className="about-us">
      <div className="about-us__image">
        <div className="about-us__image-container">
          <img src={companyHomePageDetails?.aboutUsImage || DEFAULT_CONTENT.aboutUsImage} alt="" />
        </div>
      </div>
      <div className="about-us__content-container">
        <div className="about-us__title">About Us</div>
        <p className="about-us__content">{companyHomePageDetails?.aboutUsText || DEFAULT_CONTENT.aboutUsText}</p>
      </div>
    </div>
  )
}

export default AboutUs
