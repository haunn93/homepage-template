import React from "react"
import { DEFAULT_THEME } from "../../common/default-content"
import { getAppLoginUrl, getAppSignUpUrl } from "../../hooks/common.hooks"
import { useCompanyInfo, useCompanyLogo } from "../../hooks/company.hooks"
import "./footer.scss"

const NAVIGATION_LIST = [
  { title: "Home", href: "/" },
  {
    title: "Signup",
    href: getAppSignUpUrl()
  },
  {
    title: "Login",
    href: getAppLoginUrl()
  }
]

const CompanyContact = () => {
  const { data: companyInfo = {} } = useCompanyInfo()
  const contactType = [
    {
      type: "Call",
      data: companyInfo?.businessPhoneNumber || DEFAULT_THEME.phoneNumber
    },
    {
      type: "Email",
      data: companyInfo?.customerSupportEmail || DEFAULT_THEME.supportEmail
    }
  ]
  return (
    <div className="primary-footer-get-in-touch__contact-info">
      {contactType.map((type) => (
        <div className="primary-footer-get-in-touch__contact" key={type.type}>
          <div>{type.type}:</div>
          <span>
            <a href={type.type === "Call" ? `tel:${type.data}` : `mailto:${type.data}`}>{type.data}</a>
          </span>
        </div>
      ))}
    </div>
  )
}

const NavigationItem = ({ title, href }) => {
  return (
    <a className="footer-navigation-bar__item" href={href}>
      {title}
    </a>
  )
}

const generateNavitationBar = () =>
  NAVIGATION_LIST.map(({ title, href }) => (
    <div className="footer-navigation-bar__container" key={title}>
      <NavigationItem title={title} href={href} />
    </div>
  ))

const PrimaryFooter = () => {
  const companyLogo = useCompanyLogo()
  return (
    <div className="primary-footer">
      <div className="primary-footer-navigation">
        <div className="primary-footer-navigation__icon">
          <img src={companyLogo?.lightLogo || DEFAULT_THEME.logoLight} alt="" />
        </div>
        <div className="primary-footer-navigation__navigation-bar">{generateNavitationBar()}</div>
      </div>
      <div className="primary-footer-get-in-touch">
        <div className="primary-footer-get-in-touch__time-info">
          <div className="primary-footer-get-in-touch__header">GET IN TOUCH</div>
          <div className="primary-footer-get-in-touch__item">Weekdays 8AM - 8PM AEST</div>
          <div className="primary-footer-get-in-touch__item">Saturday 10AM - 4PM</div>
          <div className="primary-footer-get-in-touch__item">Sunday - We Enjoy Australia</div>
        </div>
        <CompanyContact />
      </div>
    </div>
  )
}
const SecondaryFooter = () => {
  const { data: companyInfo = {} } = useCompanyInfo()
  return (
    <div className="secondary-footer">
      <div className="secondary-footer__company-name">
        {companyInfo?.name || DEFAULT_THEME.companyName} | {companyInfo?.companyNumber || DEFAULT_THEME.companyNumber}
      </div>
      <div className="secondary-footer__slogan">We do what other can&apos;t</div>
    </div>
  )
}

const Footer = () => (
  <div className="footer">
    <PrimaryFooter />
    <SecondaryFooter />
  </div>
)

export default Footer
