import React from "react"
import { DEFAULT_CONTENT } from "../../common/default-content"
import { useCompanyHomePageDetails } from "../../hooks/company.hooks"
import ClientReviewSlider from "./components/client-review-slider"
import "./our-offering.scss"

function formatNumberToHTML(number) {
  const numberString = String(number)
  const formattedNumber = (
    <>
      {numberString.split(".").map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index === 0 && <span>.</span>}
        </React.Fragment>
      ))}
      %
    </>
  )
  return formattedNumber
}

const OfferingRate = ({ rate, title, type }) => {
  return (
    <div className="our-offering-rate" type={type}>
      <div className="our-offering-rate__rate">{rate}</div>
      <div className="our-offering-rate__title">{title}</div>
    </div>
  )
}

const ClientReview = () => {
  return (
    <div className="client-reviews">
      <div className="client-reviews__title">
        Client Reviews<span>.</span>
      </div>
      <ClientReviewSlider />
    </div>
  )
}

const OurOffering = () => {
  const companyHomePageDetails = useCompanyHomePageDetails()
  return (
    <div className="our-offering">
      <div className="our-offering__container">
        <div className="our-offering__title">Our offering</div>
        <div className="our-offering__rate-container">
          <OfferingRate
            rate={
              <>
                {companyHomePageDetails?.rate.numberOfLenders || DEFAULT_CONTENT.rate.numberOfLenders}
                <span>+</span>
              </>
            }
            title="Lenders"
          />
          <OfferingRate
            rate={formatNumberToHTML(companyHomePageDetails?.rate.lowestRate || DEFAULT_CONTENT.rate.lowestRate)}
            title="Lowest Rate"
            type="lowest-rate"
          />
          <OfferingRate
            rate={formatNumberToHTML(
              companyHomePageDetails?.rate.comparisonRate || DEFAULT_CONTENT.rate.comparisonRate
            )}
            title="Comparison Rate"
            type="comparison-rate"
          />
        </div>
      </div>
      <ClientReview />
    </div>
  )
}

export default OurOffering
