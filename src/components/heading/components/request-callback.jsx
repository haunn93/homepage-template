import { enqueueSnackbar } from "notistack"
import React from "react"
import { useCompanyInfo, useSendUserContactNotification } from "../../../hooks/company.hooks"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

const RequestCallBack = () => {
  const { data: companyInfo } = useCompanyInfo()
  const sendUserContactNotification = useSendUserContactNotification()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      contactName: "",
      contactNumber: ""
    }
  })
  const onSubmit = (data) => {
    sendUserContactNotification.mutate({
      companyId: companyInfo.id,
      params: data
    })
    enqueueSnackbar("Your request has been sent", { variant: "success" })
  }
  return (
    <div className="request-call-back">
      <div className="request-call-back__title">Request call back</div>
      <form className="request-call-back__form">
        <div className="request-call-back__form-container">
          <div className="request-call-back__form-title">Name</div>
          <input
            {...register("contactName", {
              required: "This field is required."
            })}
          />
          <ErrorMessage className="error-message" name="contactName" errors={errors} as={<p />} />
        </div>
        <div className="request-call-back__form-container">
          <div className="request-call-back__form-title">Number</div>
          <input
            type="tel"
            {...register("contactNumber", {
              required: "This field is required.",
              pattern: {
                value: /^(0|\+61|\+84){0,1}((0){0,1}(2|4|3|7|8)){0,1}[0-9]{8,9}$/i,
                message: "Invalid phone number"
              }
            })}
          />
          <ErrorMessage className="error-message" name="contactNumber" errors={errors} as={<p />} />
        </div>
        <button onClick={handleSubmit(onSubmit)}>Let&apos;s Chat</button>
      </form>
    </div>
  )
}
export default RequestCallBack
