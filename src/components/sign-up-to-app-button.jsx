import React from "react"
import { getAppSignUpUrl } from "../hooks/common.hooks"

const SignUpToAppButton = ({ title = "Signup To Our App" }) => {
  const appSignUpUrl = getAppSignUpUrl()
  return (
    <button type="button" onClick={() => (window.location.href = appSignUpUrl)}>
      {title}
    </button>
  )
}

export default SignUpToAppButton
