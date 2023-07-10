import classNames from "classnames"
import React, { useEffect, useRef, useState } from "react"
import { DEFAULT_THEME } from "../../common/default-content"
import { getAppLoginUrl, getAppSignUpUrl, useIsTablet } from "../../hooks/common.hooks"
import { useCompanyInfo, useCompanyLogo } from "../../hooks/company.hooks"
import "./navigation-bar.scss"

const NavigationLogo = ({ src }) => <img src={src} alt="" />

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isTablet = useIsTablet()
  const wrapperRef = useRef(null)

  const companyLogo = useCompanyLogo()
  const { data: companyInfo = {} } = useCompanyInfo()

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside({ target }) {
      if (wrapperRef.current && !wrapperRef?.current?.contains(target)) {
        setIsMenuOpen(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  const appLoginURL = getAppLoginUrl()
  const appSignUpURL = getAppSignUpUrl()

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="navigation-bar" ref={wrapperRef}>
      <div className="navigation-bar__container">
        <a className="navigation-bar__icon" href="/">
          <NavigationLogo src={companyLogo?.darkLogo || DEFAULT_THEME.logoDark} />
        </a>
        {!isTablet ? (
          <div className="navigation-bar__action-item">
            <a href={`tel:${companyInfo?.businessPhoneNumber || DEFAULT_THEME.phoneNumber}`}>
              {companyInfo?.businessPhoneNumber || DEFAULT_THEME.phoneNumber}
            </a>
            <a href={appLoginURL}>Client Login</a>
            <a href={appSignUpURL} type="button">
              Get Started
            </a>
          </div>
        ) : (
          <button className="hamburger-button" onClick={handleOpenMenu}>
            <div className={isMenuOpen ? "open" : ""} id="nav-icon2">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>
        )}
      </div>
      <div ref={wrapperRef} className={classNames("navigation-bar__menu", { open: isMenuOpen })}>
        <div className="navigation-bar__action-item">
          <a href={`tel:${companyInfo?.businessPhoneNumber || DEFAULT_THEME.phoneNumber}`}>
            {companyInfo?.businessPhoneNumber || DEFAULT_THEME.phoneNumber}
          </a>
          <a href={appLoginURL}>Client Login</a>
          <a href={appSignUpURL} type="button">
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
