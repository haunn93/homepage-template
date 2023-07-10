import React, { useMemo } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./client-review-slider.scss";

// import required modules
import { A11y, Navigation, Pagination } from "swiper";
import { StarBox } from "../../../assets/images";
import { useCompanyHomePageDetails } from "../../../hooks/company.hooks";
import { DEFAULT_CONTENT } from "../../../common/default-content";

const createReviewStart = (reviewNumber) => {
  return [...Array(reviewNumber).keys()].map((index) => {
    return (
      <div className="customer-review-icon" key={`start${index}`}>
        <img src={StarBox} alt="" />
      </div>
    );
  });
};

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-custom-button">
      <div onClick={() => swiper.slidePrev()}>
        <i className="arrow left"></i>
      </div>
      <div onClick={() => swiper.slideNext()}>
        <i className="arrow right"></i>
      </div>
    </div>
  );
};

export default function ClientReviewSlider() {
  const companyHomePageDetails = useCompanyHomePageDetails();
  const reviewList = useMemo(() => {
    return companyHomePageDetails?.reviews || DEFAULT_CONTENT.reviews;
  }, []);
  return (
    <>
      <Swiper
        className="client-review-slider"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {reviewList.map((item) => (
          <SwiperSlide key={item.clientName} className="client-review-slide">
            <div className="customer-review">
              <div className="customer-review__container">
                <div className="customer-review__customer-name">
                  {item.clientName}
                </div>
                <div className="customer-review__customer-role">
                  {item.clientScenario}
                </div>
                <div className="customer-review__customer-feedback">
                  {item.testimonial}
                </div>
                <div className="customer-review__review">
                  {createReviewStart(5)}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </>
  );
}
