import Link from "next/dist/client/link";
import dynamic from 'next/dynamic';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { home3SliderProps } from "../src/sliderProps";
 
const Counter= dynamic(() => import('../src/components/Counter'), {
  ssr: false,
}) 

const Index = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout header={3}>
      {video && <VideoPopup close={setVideo} />}
      <section className="main-slider main-slider-one">
        <Swiper
          {...home3SliderProps}
          className="swiper-container thm-swiper__slider"
        >
          <div className="swiper-wrapper">
            {/*Start Single Swiper Slide*/}
            <SwiperSlide className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/main-slider-1-1.jpg)",
                }}
              />
              <div className="image-layer-overlay" />
              {/* /.image-layer */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider__content text-center">
                      <div className="shape1">
                        <img
                          src="assets/images/shapes/main-slider-one-shape1.png"
                          alt="image"
                        />
                      </div>
                      <div className="section-title">
                        <div className="section-title__tagline">
                          <span className="left" />
                          <h4>Consulting Agency</h4>
                          <span className="right" />
                        </div>
                        <h2 className="section-title__title">
                          Business Consulting <br />
                          Solutions
                        </h2>
                      </div>
                      <div className="main-slider__button-box">
                        <div className="btns-box">
                          <a href="#" className="thm-btn">
                            Free Consultation
                          </a>
                        </div>
                        <div className="banner-video-gallery">
                          <div className="video-box">
                            <a
                              className="video-popup"
                              title="Video Gallery"
                              href="#"
                              onClick={() => setVideo(true)}
                              style={{ visibility: "visible" }}
                            >
                              <i className="fa fa-play" aria-hidden="true" />
                            </a>
                          </div>
                          <div className="title-box">
                            <h5>Watch Video</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*End Single Swiper Slide*/}
            {/*Start Single Swiper Slide*/}
            <SwiperSlide className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/main-slider-1-2.jpg)",
                }}
              />
              <div className="image-layer-overlay" />
              {/* /.image-layer */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider__content text-center">
                      <div className="shape1">
                        <img
                          src="assets/images/shapes/main-slider-one-shape1.png"
                          alt="image"
                        />
                      </div>
                      <div className="section-title">
                        <div className="section-title__tagline">
                          <span className="left" />
                          <h4>Consulting Agency</h4>
                          <span className="right" />
                        </div>
                        <h2 className="section-title__title">
                          Business Consulting <br />
                          Solutions
                        </h2>
                      </div>
                      <div className="main-slider__button-box">
                        <div className="btns-box">
                          <a href="#" className="thm-btn">
                            Free Consultation
                          </a>
                        </div>
                        <div className="banner-video-gallery">
                          <div className="video-box">
                            <a
                              className="video-popup"
                              title="Video Gallery"
                              href="#"
                              onClick={() => setVideo(true)}
                              style={{ visibility: "visible" }}
                            >
                              <i className="fa fa-play" aria-hidden="true" />
                            </a>
                          </div>
                          <div className="title-box">
                            <h5>Watch Video</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*End Single Swiper Slide*/}
            {/*Start Single Swiper Slide*/}
            <SwiperSlide className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/main-slider-1-3.jpg)",
                }}
              />
              <div className="image-layer-overlay" />
              {/* /.image-layer */}
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider__content text-center">
                      <div className="shape1">
                        <img
                          src="assets/images/shapes/main-slider-one-shape1.png"
                          alt="image"
                        />
                      </div>
                      <div className="section-title">
                        <div className="section-title__tagline">
                          <span className="left" />
                          <h4>Consulting Agency</h4>
                          <span className="right" />
                        </div>
                        <h2 className="section-title__title">
                          Business Consulting <br />
                          Solutions
                        </h2>
                      </div>
                      <div className="main-slider__button-box">
                        <div className="btns-box">
                          <a href="#" className="thm-btn">
                            Free Consultation
                          </a>
                        </div>
                        <div className="banner-video-gallery">
                          <div className="video-box">
                            <a
                              className="video-popup"
                              title="Video Gallery"
                              href="#"
                              onClick={() => setVideo(true)}
                              style={{ visibility: "visible" }}
                            >
                              <i className="fa fa-play" aria-hidden="true" />
                            </a>
                          </div>
                          <div className="title-box">
                            <h5>Watch Video</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/*End Single Swiper Slide*/}
          </div>
          {/* If we need navigation buttons */}
          <div className="swiper-pagination" id="main-slider-pagination" />
          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <span className="icon-left" />
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <span className="icon-right" />
            </div>
          </div>
        </Swiper>
      </section>
      {/*Features Four Start*/}
      <section className="features-four">
        <div className="container">
          <div className="row">
            {/*Start Features Four Left*/}
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="features-four__left">
                <div
                  className="features-four__left-bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/feature-v4-bg.png)",
                  }}
                />
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>How Can Help You</h4>
                  </div>
                  <h2 className="section-title__title">
                    We Make Your
                    <br />
                    Agency Are
                    <br />
                    Full Bright
                  </h2>
                </div>
                <div className="features-four__left-bottom">
                  <p className="features-four__left-text">
                    Sed ut perspiciatis unde omnis iste natus <br />
                    error sit voluptem accusantiu dolorem ulau
                    <br />
                    dantium totam rem aperiam
                  </p>
                  <div className="features-four__left-btn">
                    <a href="#" className="thm-btn">
                      Learn More
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Features Four Left*/}
            {/*Start Features Four Right*/}
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="features-four__right">
                <ul className="list-unstyled">
                  <li className="features-four__right-single">
                    <div className="features-four__right-single-inner">
                      <div className="icon">
                        <img
                          src="assets/images/icon/features-v4-icon1.png"
                          alt="image"
                        />
                      </div>
                      <div className="title">
                        <h4>
                          <a href="#">Business Process</a>
                        </h4>
                        <p>
                          On the other hand we denoun with righteous indignation
                          dislike
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="features-four__right-single">
                    <div className="features-four__right-single-inner">
                      <div className="icon">
                        <img
                          src="assets/images/icon/features-v4-icon2.png"
                          alt="image"
                        />
                      </div>
                      <div className="title">
                        <h4>
                          <a href="#">Business Process</a>
                        </h4>
                        <p>
                          On the other hand we denoun with righteous indignation
                          dislike
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="features-four__right-single">
                    <div className="features-four__right-single-inner">
                      <div className="icon">
                        <img
                          src="assets/images/icon/features-v4-icon3.png"
                          alt="image"
                        />
                      </div>
                      <div className="title">
                        <h4>
                          <a href="#">Business Process</a>
                        </h4>
                        <p>
                          On the other hand we denoun with righteous indignation
                          dislike
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*End Features Four Right*/}
          </div>
        </div>
      </section>
      {/*Features Four End*/}
      {/*About Three Start*/}
      <section className="about-three">
        <div className="container-fullwidth">
          <div className="about-three__img-box">
            <img src="assets/images/about/about-v3-1.jpg" alt="image" />
          </div>
          <div className="about-three__content-box">
            <div className="section-title">
              <div className="section-title__tagline">
                <span className="left" />
                <h4>Our Consultants</h4>
              </div>
              <h2 className="section-title__title">
                Build Your
                <br />
                Business With
                <br />
                Right Way
              </h2>
            </div>
            <p className="about-three__text">
              Quis autem vel eum iure reprehenderit ea voluptate velit esse quam
              nihil molestiae consequatur vel illum qui dolorem eum fugiat quo
              voluptas
            </p>
            <ul className="about-three-list list-unstyled">
              <li>
                <div className="icon">
                  <i className="fa fa-check" aria-hidden="true" />
                </div>
                <div className="text">
                  <p>Static Innovations</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa fa-check" aria-hidden="true" />
                </div>
                <div className="text">
                  <p>Consulting &amp; Advisory</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa fa-check" aria-hidden="true" />
                </div>
                <div className="text">
                  <p>Turnaround Situations</p>
                </div>
              </li>
            </ul>
            <div className="buttons">
              <a href="#" className="thm-btn service-one-btn">
                Learn More
                <i className="fa fa-angle-double-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*About Three End*/}
      {/*Services Three Start*/}
      <section className="services-three clearfix">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Working Process</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              We Follw Some Steps To
              <br />
              Grow Business
            </h2>
          </div>
          <div className="row">
            {/*Start Single Services Three*/}
            <div
              className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="services-three__single">
                <div className="services-three__single-icon">
                  <span className="icon-brainstorm" />
                </div>
                <div className="services-three__single-inner">
                  <div
                    className="services-three__single-bg-layer"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/services-v3-img1.jpg)",
                    }}
                  />
                  <h3 className="services-three__single-title">
                    <Link href="/services-details">
                      Strategy &amp; Innovation
                    </Link>
                  </h3>
                  <p className="services-three__single-text">
                    Sed perspicias unde omnis
                    <br />
                    natus error voluptem accusan
                    <br />
                    tium doloremu laudan
                  </p>
                  <div className="services-three__single__btn-box">
                    <div className="services-three__single-btn">
                      <a href="#">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    <div className="services-three__single-overly-btn">
                      <a href="#" className="thm-btn about-three-btn">
                        Learn More
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="services-three__single-icon-layer">
                  <span className="icon-brainstorm" />
                </div>
              </div>
            </div>
            {/*End Single Services Three*/}
            {/*Start Single Services Three*/}
            <div
              className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="services-three__single">
                <div className="services-three__single-icon">
                  <span className="icon-compliant" />
                </div>
                <div className="services-three__single-inner">
                  <div
                    className="services-three__single-bg-layer"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/services-v3-img1.jpg)",
                    }}
                  />
                  <h3 className="services-three__single-title">
                    <Link href="/services-details">Quality Compliance</Link>
                  </h3>
                  <p className="services-three__single-text">
                    Sed perspicias unde omnis
                    <br />
                    natus error voluptem accusan
                    <br />
                    tium doloremu laudan
                  </p>
                  <div className="services-three__single__btn-box">
                    <div className="services-three__single-btn">
                      <a href="#">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    <div className="services-three__single-overly-btn">
                      <a href="#" className="thm-btn about-three-btn">
                        Learn More
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="services-three__single-icon-layer">
                  <span className="icon-compliant" />
                </div>
              </div>
            </div>
            {/*End Single Services Three*/}
            {/*Start Single Services Three*/}
            <div
              className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="services-three__single">
                <div className="services-three__single-icon">
                  <span className="icon-analysis" />
                </div>
                <div className="services-three__single-inner">
                  <div
                    className="services-three__single-bg-layer"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/services-v3-img1.jpg)",
                    }}
                  />
                  <h3 className="services-three__single-title">
                    <Link href="/services-details">Market Analysis</Link>
                  </h3>
                  <p className="services-three__single-text">
                    Sed perspicias unde omnis
                    <br />
                    natus error voluptem accusan
                    <br />
                    tium doloremu laudan
                  </p>
                  <div className="services-three__single__btn-box">
                    <div className="services-three__single-btn">
                      <a href="#">
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    <div className="services-three__single-overly-btn">
                      <a href="#" className="thm-btn about-three-btn">
                        Learn More
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="services-three__single-icon-layer">
                  <span className="icon-analysis" />
                </div>
              </div>
            </div>
            {/*End Single Services Three*/}
          </div>
        </div>
      </section>
      {/*Services Three End*/}
      {/*Counter Three Start*/}
      <section
        className="counter-one counter-one--counter-three jarallax clearfix"
        data-jarallax
        data-speed="0.2"
        data-imgposition="50% 0%"
        style={{
          backgroundImage: "url(assets/images/backgrounds/counter-v3-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="counter-one__wrapper clearfix">
                <div className="shape1">
                  <img
                    src="assets/images/shapes/counter-three-shape1.png"
                    alt="image"
                  />
                </div>
                <div className="row">
                  {/*Start Counter One Single*/}
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="counter-one__single">
                      <div className="counter-one__single-icon">
                        <img
                          src="assets/images/icon/counter-v3-icon1.png"
                          alt="image"
                        />
                      </div>
                      <div className="counter-one__outer">
                        <div className="counter-one__box">
                          <h2 className="counter-one__single-text">
                            <Counter end={356} />
                            <span className="icon">
                              <i className="fa fa-plus" aria-hidden="true" />
                            </span>
                          </h2>
                        </div>
                        <div className="counter-one__title">
                          <h6>Saticfied Clients</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Counter One Single*/}
                  {/*Start Counter One Single*/}
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="counter-one__single">
                      <div className="counter-one__single-icon">
                        <img
                          src="assets/images/icon/counter-v3-icon2.png"
                          alt="image"
                        />
                      </div>
                      <div className="counter-one__outer">
                        <div className="counter-one__box">
                          <h2 className="counter-one__single-text">
                            <Counter end={784} />
                            <span className="icon">
                              <i className="fa fa-plus" aria-hidden="true" />
                            </span>
                          </h2>
                        </div>
                        <div className="counter-one__title">
                          <h6>Project Complate</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Counter One Single*/}
                  {/*Start Counter One Single*/}
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="counter-one__single">
                      <div className="counter-one__single-icon">
                        <img
                          src="assets/images/icon/counter-v3-icon3.png"
                          alt="image"
                        />
                      </div>
                      <div className="counter-one__outer">
                        <div className="counter-one__box">
                          <h2 className="counter-one__single-text">
                            <Counter end={963} />
                            <span className="icon">
                              <i className="fa fa-plus" aria-hidden="true" />
                            </span>
                          </h2>
                        </div>
                        <div className="counter-one__title">
                          <h6>Support Team</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Counter One Single*/}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="counter-three__bottom">
                  <div className="counter-three__bottom-text">
                    <div className="section-title">
                      <div className="section-title__tagline">
                        <span className="left" />
                        <h4>Request a Quote</h4>
                      </div>
                      <h2 className="section-title__title">
                        Let’s Get To Work Together
                        <br />
                        Ready To Work Us
                      </h2>
                    </div>
                  </div>
                  <div className="counter-three__bottom-btn">
                    <a href="#" className="thm-btn">
                      Get Free Quote{" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Counter Three End*/}
      {/*Case Studies Two Start*/}
      <section
        className="case-studies-two"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/case-studies-two-bg.png)",
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Case Studies</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              We’re Committed to Creating <br />
              Change That Matters
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="case-studies-two__wrapper">
                <div className="row">
                  {/*Start Single Case Studies Two*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="case-studies-two__single">
                      <div className="case-studies-two__single-text-box">
                        <div className="case-studies-two__single-left">
                          <h2>Marketing Planning</h2>
                          <p>We have digital business consulting</p>
                        </div>
                        <div className="case-studies-two__single-right">
                          <div className="case-studies-two__single-right-btn">
                            <a href="#">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="case-studies-two__single-img">
                        <img
                          src="assets/images/resources/case-studies-v2-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  {/*End Single Case Studies Two*/}
                  {/*Start Single Case Studies Two*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="case-studies-two__single">
                      <div
                        className="case-studies-two__single-text-box style2"
                        style={{
                          backgroundImage:
                            "url(assets/images/backgrounds/case-studies-two-single-bg.png)",
                        }}
                      >
                        <div className="case-studies-two__single-left">
                          <h2 className="padding-top3">Business Management</h2>
                          <p>
                            Quis autem vel eumure reprehenderit quinea voluptate
                            velit esse nihil molestiae consequatur vel illum qui
                            dolorem eumies
                          </p>
                        </div>
                        <div className="case-studies-two__single-right">
                          <div className="case-studies-two__single-right-btn">
                            <a href="#">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="case-studies-two__single-img">
                        <img
                          src="assets/images/resources/case-studies-v2-img2.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  {/*End Single Case Studies Two*/}
                </div>
                <div className="case-studies-two__btn">
                  <a href="#" className="thm-btn">
                    View More Case
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Case Studies Two End*/}
      {/*Chart One Start*/}
      <section className="chart-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="chart-one__left">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>Company Analysis</h4>
                  </div>
                  <h2 className="section-title__title">
                    Les’s Look About Our
                    <br />
                    Company Statices
                  </h2>
                </div>
                <p className="chart-one__left-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptem
                  accusantiu dolorem ulau dantium totam
                </p>
                <div className="chart-one__btn">
                  <a href="#" className="thm-btn">
                    Get Free Quote{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 wow slideInRight"
              data-wow-delay="500ms"
              data-wow-duration="2500ms"
            >
              <div className="chart-one__right">
                <div className="chart-one__img">
                  <img
                    src="assets/images/resources/chart-v1-img.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Chart One End*/}
      {/*Team Two Start*/}
      <section className="team-two">
        <div className="team-two__left-bg">
          <img
            src="assets/images/backgrounds/team-two-left-bg.png"
            alt="image"
          />
        </div>
        <div className="team-two__right-bg">
          <img
            src="assets/images/backgrounds/team-two-right-bg.png"
            alt="image"
          />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Popular Service</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              Take a Look Our Unmatched
              <br />
              Consulting Approach
            </h2>
          </div>
          <div className="row">
            {/*Start Team One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="team-two__single">
                <div className="team-two__single-img">
                  <div className="team-two__single-img-box">
                    <img
                      src="assets/images/team/team-v2-img1.png"
                      alt="image"
                    />
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="fa fa-plus" aria-hidden="true" />
                    </a>
                  </div>
                  <h2 className="text">Member</h2>
                </div>
                <div className="team-two__single-title text-center">
                  <h3>
                    <Link href="/team-details">Michael J. Behne</Link>
                  </h3>
                  <p>CEO &amp; Founder</p>
                  <div className="overly">
                    <ul className="social-icon list-unstyled">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Team One Single*/}
            {/*Start Team One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="team-two__single">
                <div className="team-two__single-img">
                  <div className="team-two__single-img-box">
                    <img
                      src="assets/images/team/team-v2-img2.png"
                      alt="image"
                    />
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="fa fa-plus" aria-hidden="true" />
                    </a>
                  </div>
                  <h2 className="text">Member</h2>
                </div>
                <div className="team-two__single-title text-center">
                  <h3>
                    <Link href="/team-details">Edgar B. Hamdan</Link>
                  </h3>
                  <p>Senior Manager</p>
                  <div className="overly">
                    <ul className="social-icon list-unstyled">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Team One Single*/}
            {/*Start Team One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="team-two__single">
                <div className="team-two__single-img">
                  <div className="team-two__single-img-box">
                    <img
                      src="assets/images/team/team-v2-img3.png"
                      alt="image"
                    />
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="fa fa-plus" aria-hidden="true" />
                    </a>
                  </div>
                  <h2 className="text">Member</h2>
                </div>
                <div className="team-two__single-title text-center">
                  <h3>
                    <Link href="/team-details">Howard B. Lusby</Link>
                  </h3>
                  <p>Marketing Officer</p>
                  <div className="overly">
                    <ul className="social-icon list-unstyled">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Team One Single*/}
            {/*Start Team One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInRight"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="team-two__single">
                <div className="team-two__single-img">
                  <div className="team-two__single-img-box">
                    <img
                      src="assets/images/team/team-v2-img4.png"
                      alt="image"
                    />
                  </div>
                  <div className="icon">
                    <a href="#">
                      <i className="fa fa-plus" aria-hidden="true" />
                    </a>
                  </div>
                  <h2 className="text">Member</h2>
                </div>
                <div className="team-two__single-title text-center">
                  <h3>
                    <Link href="/team-details">Thomas C. Greene</Link>
                  </h3>
                  <p>Web Designer</p>
                  <div className="overly">
                    <ul className="social-icon list-unstyled">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Team One Single*/}
          </div>
        </div>
      </section>
      {/*Team Two End*/}
      {/*Blog Two Start*/}
      <section className="blog-two">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Blog &amp; News</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              Trending Business Consulting
              <br />
              Article &amp; Tips
            </h2>
          </div>
          <div className="row">
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 col-md-12 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-two__single">
                <div
                  className="blog-two__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/blog/blog-v2-bg-img.jpg)",
                  }}
                />
                <div className="blog-two__single-text-box">
                  <h3 className="blog-two__single-title">
                    <Link href="/news-details">
                      <a>
                        Evolving Program Manage
                        <br />
                        Office For Modern
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-two__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-two__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 col-md-12 wow fadeInLeft"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-two__single">
                <div
                  className="blog-two__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/blog/blog-v2-bg-img.jpg)",
                  }}
                />
                <div className="blog-two__single-text-box">
                  <h3 className="blog-two__single-title">
                    <Link href="/news-details">
                      <a>
                        Good Better Best Untang
                        <br />
                        Comple World Acce
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-two__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-two__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 col-md-12 wow fadeInLeft"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-two__single">
                <div
                  className="blog-two__single-bg-layer"
                  style={{
                    backgroundImage:
                      "url(assets/images/blog/blog-v2-bg-img.jpg)",
                  }}
                />
                <div className="blog-two__single-text-box">
                  <h3 className="blog-two__single-title">
                    <Link href="/news-details">
                      <a>
                        Optimize Progresive Web
                        <br />
                        Going Beyond Basics
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-two__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-two__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
          </div>
        </div>
      </section>
      {/*Blog Two End*/}
    </Layout>
  );
};

export default Index;
