import { Swiper, SwiperSlide } from "swiper/react";
import { brandSliderProps } from "../../sliderProps";

const BrandSlider = () => {
  return (
    <Swiper
      {...brandSliderProps}
      className="partner-one__carousel owl-carousel owl-theme list-unstyled"
    >
      {/*Start Single Partner One*/}
      <SwiperSlide className="partner-one__single">
        <div className="partner-one__img">
          <a href="#">
            <img src="assets/images/brand/partner-logo1.png" alt="image" />
          </a>
        </div>
      </SwiperSlide>
      {/*End Single Partner One*/}
      {/*Start Single Partner One*/}
      <SwiperSlide className="partner-one__single">
        <div className="partner-one__img">
          <a href="#">
            <img src="assets/images/brand/partner-logo2.png" alt="image" />
          </a>
        </div>
      </SwiperSlide>
      {/*End Single Partner One*/}
      {/*Start Single Partner One*/}
      <SwiperSlide className="partner-one__single">
        <div className="partner-one__img">
          <a href="#">
            <img src="assets/images/brand/partner-logo3.png" alt="image" />
          </a>
        </div>
      </SwiperSlide>
      {/*End Single Partner One*/}
      {/*Start Single Partner One*/}
      <SwiperSlide className="partner-one__single">
        <div className="partner-one__img">
          <a href="#">
            <img src="assets/images/brand/partner-logo4.png" alt="image" />
          </a>
        </div>
      </SwiperSlide>
      {/*End Single Partner One*/}
    </Swiper>
  );
};

export default BrandSlider;
