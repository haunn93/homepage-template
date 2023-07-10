import React from "react"
import {
  Devices,
  FinanceReview,
  Fintech,
  NewsComAu,
  NewsCorpAu,
  SevenNews,
  SkyNews,
  TheAustralian,
  YourMoney
} from "../../assets/images"
import "./tech-supported.scss"
import SignUpToAppButton from "../sign-up-to-app-button"
import { getAppLoginUrl } from "../../hooks/common.hooks"

const TechSupported = () => {
  const appLoginUrl = getAppLoginUrl()
  const imgList = [FinanceReview, NewsCorpAu, NewsComAu, SevenNews, Fintech, TheAustralian, YourMoney, SkyNews]
  return (
    <div className="tech-supported">
      <div className="tech-supported__container">
        <div className="tech-supported__title">
          Technology Supported by Finance Experts<span>.</span>
        </div>
        <div className="tech-supported__description">Loved, Shared & Celebrated by</div>
        <div className="tech-supported__logos">
          {imgList.map((image) => (
            <div key={image} className="tech-supported__logos-container">
              <img key={image} src={image} alt="" />
            </div>
          ))}
        </div>
        <div className="tech-supported__buttons">
          <SignUpToAppButton title="Signup To Wealth App" />

          <button onClick={() => (window.location.href = appLoginUrl)}>Login To Wealth App</button>
        </div>
      </div>
      <div className="tech-supported__image">
        <img src={Devices} alt="" />
      </div>
    </div>
  )
}

export default TechSupported
