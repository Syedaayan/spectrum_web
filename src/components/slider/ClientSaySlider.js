import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { singleSlide } from "../../sliderProps";

const ClientSaySlider = () => {
  return (
    <Fragment>
      <Swiper
        {...singleSlide}
        className="testimonial-two__carousel owl-carousel owl-theme owl-dot-type1 style2"
      >
        {/*Start Single Testimonial Two*/}
        <SwiperSlide className="testimonial-two__single">
          <div className="testimonial-two__single-quote-icon">
            <span className="icon-right-quotation-mark" />
          </div>
          <p className="testimonial-two__single-text1">
            Quis autem vel eum iure reprehende queinesy voluptate velit esse
            quam nihil mconsequatur vel eillum qui dolorem eum fugia
          </p>
          <p className="testimonial-two__single-text2">
            Sed perspiciatis unde omnis iste natus error voluptam accusantium
            doloremque laudan
          </p>
          <div className="testimonial-two__client-info">
            <div className="icon">
              <span className="icon-right-quotation-mark" />
            </div>
            <div className="title">
              <h4>Judson S. Gooden</h4>
              <p>Web Designer</p>
            </div>
          </div>
        </SwiperSlide>
        {/*End Single Testimonial Two*/}
        {/*Start Single Testimonial Two*/}
        <SwiperSlide className="testimonial-two__single">
          <div className="testimonial-two__single-quote-icon">
            <span className="icon-right-quotation-mark" />
          </div>
          <p className="testimonial-two__single-text1">
            Quis autem vel eum iure reprehende queinesy voluptate velit esse
            quam nihil mconsequatur vel eillum qui dolorem eum fugia
          </p>
          <p className="testimonial-two__single-text2">
            Sed perspiciatis unde omnis iste natus error voluptam accusantium
            doloremque laudan
          </p>
          <div className="testimonial-two__client-info">
            <div className="icon">
              <span className="icon-right-quotation-mark" />
            </div>
            <div className="title">
              <h4>Judson S. Gooden</h4>
              <p>Web Designer</p>
            </div>
          </div>
        </SwiperSlide>
        {/*End Single Testimonial Two*/}
        {/*Start Single Testimonial Two*/}
        <SwiperSlide className="testimonial-two__single">
          <div className="testimonial-two__single-quote-icon">
            <span className="icon-right-quotation-mark" />
          </div>
          <p className="testimonial-two__single-text1">
            Quis autem vel eum iure reprehende queinesy voluptate velit esse
            quam nihil mconsequatur vel eillum qui dolorem eum fugia
          </p>
          <p className="testimonial-two__single-text2">
            Sed perspiciatis unde omnis iste natus error voluptam accusantium
            doloremque laudan
          </p>
          <div className="testimonial-two__client-info">
            <div className="icon">
              <span className="icon-right-quotation-mark" />
            </div>
            <div className="title">
              <h4>Judson S. Gooden</h4>
              <p>Web Designer</p>
            </div>
          </div>
        </SwiperSlide>
        {/*End Single Testimonial Two*/}
        {/*Start Single Testimonial Two*/}
        <SwiperSlide className="testimonial-two__single">
          <div className="testimonial-two__single-quote-icon">
            <span className="icon-right-quotation-mark" />
          </div>
          <p className="testimonial-two__single-text1">
            Quis autem vel eum iure reprehende queinesy voluptate velit esse
            quam nihil mconsequatur vel eillum qui dolorem eum fugia
          </p>
          <p className="testimonial-two__single-text2">
            Sed perspiciatis unde omnis iste natus error voluptam accusantium
            doloremque laudan
          </p>
          <div className="testimonial-two__client-info">
            <div className="icon">
              <span className="icon-right-quotation-mark" />
            </div>
            <div className="title">
              <h4>Judson S. Gooden</h4>
              <p>Web Designer</p>
            </div>
          </div>
        </SwiperSlide>
        {/*End Single Testimonial Two*/}
      </Swiper>
      <div className="owl-dots text-start" />
    </Fragment>
  );
};

export default ClientSaySlider;
