import Link from "next/dist/client/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import VideoPopup from "../src/components/VideoPopup";
import BrandSlider from "../src/components/slider/BrandSlider";
import TestimonialSlider from "../src/components/slider/TestimonialSlider";
import Layout from "../src/layouts/Layout";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  const [videoPopup, setVideoPopup] = useState(false);
  const [tab, setTab] = useState("OOH/Billboards/Hoardings");
  const activeTrigger = (value) => (value === tab ? "active-btn" : ""),
    activeTab = (value) => (value === tab ? "active-tab" : "");
  return (
    <Layout header={1} footer={1} featuresContentOff>
      {videoPopup && <VideoPopup close={setVideoPopup} />}
      <section className="banner-one clearfix">
        <div
          className="shape1 wow slideInRight"
          data-wow-delay="500ms"
          data-wow-duration="3500ms"
        >
          <img src="assets/images/shapes/banner-shape-1.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="banner-one__inner-box">
                <h2 className="banner-one__big-title">Spectrum</h2>
                <div className="banner-one__content">
                  <div className="section-title">
                    <div
                      className="section-title__tagline wow slideInUp animated"
                      data-wow-delay="0.2s"
                      data-wow-duration="1500ms"
                    >
                      <span className="left" />
                      <h4>Advertising Agency</h4>
                    </div>
                    <h2
                      className="section-title__title  wow slideInUp animated"
                      data-wow-delay="0.3s"
                      data-wow-duration="1500ms"
                    >
                      Marketing &amp;
                      <br />
                      Promotion Handling
                    </h2>
                  </div>
                  <p
                    className="banner-one__text wow slideInUp animated"
                    data-wow-delay="0.4s"
                    data-wow-duration="1500ms"
                  >
                    A one-stop advertising solution for the new era’s new
                    promotion.
                  </p>
                  <div
                    className="banner-one__btn wow slideInUp animated"
                    data-wow-delay="0.5s"
                    data-wow-duration="1500ms"
                  >
                    <Link href="/contact">
                      <a className="thm-btn">
                        Free Consultation{" "}
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div
                  className="banner-one__banner-img wow slideInRight"
                  data-wow-delay="500ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="assets/images/backgrounds/banner-img1.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner One*/}
      {/*Features One Start*/}
      <section className="features-one clearfix">
        <div className="container">
          <div className="row">
            {/*Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div
                className="features-one__single wow fadeInLeft animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img
                      src="assets/images/icon/features-v1-icon1.png"
                      alt="image"
                    />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <Link href="/about">
                        <a>
                          We initiate, manage and <br />
                          implement marketing communications.
                        </a>
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="features-one__single-right">
                  <div className="features-one__single-right-btn">
                    <Link href="/services-1">
                      <a>
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Features One */}
            {/*Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div
                className="features-one__single wow fadeInRight animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img
                      src="assets/images/icon/features-v1-icon2.png"
                      alt="image"
                    />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                        We’re responsible for bringing the techniques
                        <br /> and services to public notice.
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="features-one__single-right">
                  <div className="features-one__single-right-btn">
                    <a href="#">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Features One */}
          </div>
        </div>
      </section>
      {/*Features One End*/}
      {/*About One Start*/}
      <section className="about-one">
        <div className="container">
          <div className="row">
            {/* Start About One Left*/}
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="shape1 float-bob-y">
                  <img src="assets/images/shapes/thm-shape-1.png" alt="image" />
                </div>
                <div className="about-one__left-img">
                  <img src="assets/images/about/about-v1-1.jpg" alt="image" />
                </div>
                <div className="about-one__left-bottom">
                  <div className="about-one__logo">
                    <img
                      src="assets/images/about/about-v1-logo.png"
                      alt="image"
                    />
                  </div>
                  <div
                    className="about-one__video-gallery wow fadeInUp animated animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <img src="assets/images/about/about-v1-2.jpg" alt="image" />
                    <div className="video-box">
                      <a
                        className="video-popup wow zoomIn animated animated"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                        title=" Video Gallery"
                        href="#"
                        style={{
                          visibility: "visible",
                          animationDuration: "1500ms",
                          animationDelay: "300ms",
                          animationName: "zoomIn",
                        }}
                        onClick={() => setVideoPopup(true)}
                      >
                        <i className="fa fa-play" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End About One Left*/}
            {/* Start About One Right*/}
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>About Spectrum</h4>
                  </div>
                  <h2 className="section-title__title">
                    Establish your business using the <br /> correct approach.
                  </h2>
                </div>
                <div className="about-one__right-inner">
                  <h5 className="about-one__right-tagline">
                    9 Years of experience in advertising service.
                  </h5>
                  <p className="about-one__right-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptem
                    accusantium doloremu laudantium totam rem aperiam eaque upsa
                    quae abillo inventore veritatis architecto
                  </p>
                  <div className="about-one__author-box">
                    <div className="img-box">
                      <img
                        src="assets/images/about/about-v1-author.png"
                        alt="image"
                      />
                    </div>
                    <div className="title">
                      <h3>‘The Spectrum's’ Co-Founders</h3>
                      <p>
                        Our agency is committed to providing personalized
                        solutions that are tailored to meet the unique needs of
                        each and every client. We understand that no two
                        businesses are the same, and as such, we take the time
                        to get to know our clients and develop marketing
                        strategies that are specifically designed to help them
                        achieve their goals.
                      </p>
                      <h5>-Rahul Raushan</h5>
                    </div>
                  </div>
                  <div className="about-one__author-box">
                    <div className="img-box">
                      <img
                        src="assets/images/about/about-v1-author.png"
                        alt="image"
                      />
                    </div>
                    <div className="title">
                      <h3>‘The Spectrum's’ Co-Founders</h3>
                      <p>
                        At our agency, we are dedicated to delivering results.
                        We believe that success is measured not just in terms of
                        the number of clicks or likes, but by the impact that
                        our campaigns have on our clients' bottom line. We are
                        constantly monitoring and analyzing the data to ensure
                        that we are delivering the best possible results.
                      </p>
                      <h5>-Tushar Kapoor</h5>
                    </div>
                  </div>
                  <div className="about-one__btn">
                    <Link href="/about">
                      <a className="thm-btn">
                        Learn More{" "}
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* End About One Right*/}
          </div>
        </div>
      </section>
      {/*About One End*/}
      {/*Start Feauters Two*/}
      <section className="feauters-two">
        <div
          className="feauters-two__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/feature-v1-bg.png)",
          }}
        ></div>
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>We help businesses</h4>
            </div>
            <h2 className="section-title__title">Professionals we have.</h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="feauters-two__content-box">
                <div className="feauters-two__big-title">
                  <h2>Professionals</h2>
                </div>
                <div className="shape1 zoom-fade">
                  <img
                    src="assets/images/shapes/feature-v1-shape1.png"
                    alt="image"
                  />
                </div>
                <div className="shape2 zoom-fade">
                  <img
                    src="assets/images/shapes/feature-v1-shape2.png"
                    alt="image"
                  />
                </div>
                <div className="row">
                  {/*Start Feauters Two Single*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="feauters-two__single wow fadeInUp animated animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="feauters-two__single-inner">
                        <div className="img-holder">
                          <div className="inner">
                            <img
                              src="assets/images/feauters/feauters-v1-img1.jpg"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="title-holder">
                          <h3>
                            <Link href="/services-details">
                              <a>Office Executive</a>
                            </Link>
                          </h3>
                          <div className="btn">
                            <Link href="/services-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="overlay">
                          <div className="title">
                            <h3>
                              <Link href="/services-details">
                                <a>Office Executive</a>
                              </Link>
                            </h3>
                            <p>
                              A professional responsible for overseeing the
                              day-to-day operations
                            </p>
                            <div className="btn">
                              <Link href="/services-details">
                                <a>
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Feauters Two Single*/}
                  {/*Start Feauters Two Single*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="feauters-two__single wow fadeInUp animated animated"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="feauters-two__single-inner">
                        <div className="img-holder">
                          <div className="inner">
                            <img
                              src="assets/images/feauters/feauters-v1-img2.jpg"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="title-holder">
                          <h3>
                            <Link href="/services-details">
                              <a>Graphic Designer</a>
                            </Link>
                          </h3>
                          <div className="btn">
                            <Link href="/services-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="overlay">
                          <div className="title">
                            <h3>
                              <Link href="/services-details">
                                Graphic Designer
                              </Link>
                            </h3>
                            <p>
                              A professional creating visual content to
                              communicate ideas, messages, or information to an
                            </p>
                            <div className="btn">
                              <Link href="/services-details">
                                <a>
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Feauters Two Single*/}
                  {/*Start Feauters Two Single*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="feauters-two__single wow fadeInUp animated animated"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="feauters-two__single-inner">
                        <div className="img-holder">
                          <div className="inner">
                            <img
                              src="assets/images/feauters/feauters-v1-img3.jpg"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="title-holder">
                          <h3>
                            <Link href="/services-details">
                              Digital Solutions
                            </Link>
                          </h3>
                          <div className="btn">
                            <Link href="/services-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="overlay">
                          <div className="title">
                            <h3>
                              <Link href="/services-details">
                                Digital Solutions
                              </Link>
                            </h3>
                            <p>
                              Sed ut perspc unde ostey
                              <br />
                              natus error volupte
                            </p>
                            <div className="btn">
                              <Link href="/services-details">
                                <a>
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Feauters Two Single*/}
                  {/*Start Feauters Two Single*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="feauters-two__single wow fadeInUp animated animated"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="feauters-two__single-inner">
                        <div className="img-holder">
                          <div className="inner">
                            <img
                              src="assets/images/feauters/feauters-v1-img4.jpg"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="title-holder">
                          <h3>
                            <Link href="/services-details">
                              Product Engineering
                            </Link>
                          </h3>
                          <div className="btn">
                            <Link href="/services-details">
                              <a>
                                <i
                                  className="fa fa-angle-double-right"
                                  aria-hidden="true"
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="overlay">
                          <div className="title">
                            <h3>
                              <Link href="/services-details">
                                Product Engineering
                              </Link>
                            </h3>
                            <p>
                              Sed ut perspc unde ostey
                              <br />
                              natus error volupte
                            </p>
                            <div className="btn">
                              <Link href="/services-details">
                                <a>
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Feauters Two Single*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Feauters Two*/}
      {/*Counter One Start*/}
      <section className="counter-one clearfix">
        <div className="auto-container">
          <div
            className="counter-one__wrapper clearfix wow fadeInUp animated animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="shape1">
              <img
                src="assets/images/shapes/counter-v1-shape.png"
                alt="image"
              />
            </div>
            <div className="row">
              {/*Start Counter One Single*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__single-icon">
                    <img
                      src="assets/images/resources/counter-v1-img1.png"
                      alt="image"
                    />
                  </div>
                  <div className="counter-one__outer">
                    <div className="counter-one__box">
                      <h2 className="counter-one__single-text">
                        <Counter end={500} />
                        <span className="icon">
                          <i className="fa fa-plus" aria-hidden="true" />
                        </span>
                      </h2>
                    </div>
                    <div className="counter-one__title">
                      <h6>Happy Clients</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Counter One Single*/}
              {/*Start Counter One Single*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__single-icon">
                    <img
                      src="assets/images/resources/counter-v1-img2.png"
                      alt="image"
                    />
                  </div>
                  <div className="counter-one__outer">
                    <div className="counter-one__box">
                      <h2 className="counter-one__single-text">
                        <Counter end={1000} />
                        <span className="icon">
                          <i className="fa fa-plus" aria-hidden="true" />
                        </span>
                      </h2>
                    </div>
                    <div className="counter-one__title">
                      <h6>Projects Completed</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Counter One Single*/}
              {/*Start Counter One Single*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__single-icon">
                    <img
                      src="assets/images/resources/counter-v1-img3.png"
                      alt="image"
                    />
                  </div>
                  <div className="counter-one__outer">
                    <div className="counter-one__box">
                      <h2 className="counter-one__single-text">
                        <Counter end={2000} />
                        <span className="icon">
                          <i className="fa fa-plus" aria-hidden="true" />
                        </span>
                      </h2>
                    </div>
                    <div className="counter-one__title">
                      <h6> Media Options</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Counter One Single*/}
              {/*Start Counter One Single*/}
              {/* <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-one__single">
                  <div className="counter-one__single-icon">
                    <img
                      src="assets/images/resources/counter-v1-img3.png"
                      alt="image"
                    />
                  </div>
                  <div className="counter-one__outer">
                    <div className="counter-one__box">
                      <h2 className="counter-one__single-text">
                        <Counter end={100} />
                        <span className="icon">
                          <i className="fa fa-plus" aria-hidden="true" />
                        </span>
                      </h2>
                    </div>
                    <div className="counter-one__title">
                      <h6>Channel Partners</h6>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*End Counter One Single*/}
              {/*Start Counter One Single*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-one__company-chievement-box clearfix">
                  <div
                    className="counter-one__company-chievement-img"
                    style={{
                      backgroundImage:
                        "url(assets/images/resources/counter-v1-bg-img.jpg)",
                    }}
                  >
                    <div className="overly-content">
                      <h2>
                        Company
                        <br /> Achievement
                      </h2>
                      <div className="button">
                        <Link href="/company-history">
                          <a className="thm-btn company-chievement-btn">
                            Read More
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Counter One Single*/}
            </div>
          </div>
        </div>
      </section>
      {/*Counter One End*/}
      {/*Service One Start*/}
      <section className="service-one clearfix">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Services we provide</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              Assess our promotional methods.
            </h2>
          </div>
          <div className="service-one__tabs tabs-box">
            <ul className="tab-buttons  clearfix list-unstyled ">
              <li
                data-tab="#OOH/Billboards/Hoardings"
                onClick={() => setTab("OOH/Billboards/Hoardings")}
                className={`tab-btn thm-btn ${activeTrigger("innovation")}`}
              >
                <span>OOH/Billboards/Hoardings</span>
              </li>
              <li
                data-tab="#RadioAdvertising"
                onClick={() => setTab("RadioAdvertising")}
                className={`tab-btn thm-btn ${activeTrigger("compliance")}`}
              >
                <span>Radio Advertising</span>
              </li>
              <li
                data-tab="#CinemaAdvertising"
                onClick={() => setTab("CinemaAdvertising")}
                className={`tab-btn thm-btn ${activeTrigger("marketing")}`}
              >
                <span>Cinema Advertising</span>
              </li>
              <li
                data-tab="#SportsMarketing"
                onClick={() => setTab("SportsMarketing")}
                className={`tab-btn thm-btn ${activeTrigger("analytics")}`}
              >
                <span>Sports Marketing</span>
              </li>
              <li
                data-tab="#AirportandInflightadvertisement"
                onClick={() => setTab("AirportandInflightadvertisement")}
                className={`tab-btn thm-btn ${activeTrigger("analytics")}`}
              >
                <span>Airport and In flight </span>
              </li>
              <li
                data-tab="#Adfilmproduction"
                onClick={() => setTab("Adfilmproduction")}
                className={`tab-btn thm-btn ${activeTrigger("analytics")}`}
              >
                <span>Ad film production</span>
              </li>
              <li
                data-tab="#Printmediaadvertising"
                onClick={() => setTab("Printmediaadvertising")}
                className={`tab-btn thm-btn ${activeTrigger("analytics")}`}
              >
                <span>Print media advertising</span>
              </li>
              <li
                data-tab="#SocialMedia/DigitalMarketing"
                onClick={() => setTab("SocialMedia/DigitalMarketing")}
                className={`tab-btn thm-btn ${activeTrigger("analytics")}`}
              >
                <span>Social Media/Digital </span>
              </li>
              <li
                data-tab="#MallsandTransit"
                onClick={() => setTab("MallsandTransit")}
                className={`tab-btn thm-btn ${activeTrigger("analytics")}`}
              >
                <span>Malls and Transit</span>
              </li>
              <li
                data-tab="#Inshop-OutshopBranding"
                onClick={() => setTab("Inshop-OutshopBranding")}
                className={`tab-btn thm-btn ${activeTrigger("analytics")}`}
              >
                <span>Inshop-Outshop</span>
              </li>
              <li
                data-tab="#Events/Activations/BTL"
                onClick={() => setTab("Events/Activations/BTL")}
                className={`tab-btn thm-btn ${activeTrigger("analytics")}`}
              >
                <span>Events/Activations/BTL</span>
              </li>
            </ul>
            <div className="tabs-content">
              {/*tab*/}
              <div
                className={`tab ${activeTab("OOH/Billboards/Hoardings")}`}
                id="OOH/Billboards/Hoardings"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          OOH/Billboards/Hoardings-
                        </h2>
                        <p className="service-one__right-text">
                          - Out-of-Home (OOH) advertisement refers to any type
                          of promotional message that is displayed to consumers
                          when they are outside of their homes. This can include
                          billboards, transit ads (such as those found on buses
                          or trains), street furniture (such as bus shelters or
                          benches), digital displays (such as those found in
                          airports or malls), and other types of outdoor media.
                          OOH advertising is often used to reach a large
                          audience and increase brand awareness, as well as to
                          target specific demographics based on location or
                          other factors.
                        </p>

                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*tab*/}
              <div
                className={`tab ${activeTab("RadioAdvertising")}`}
                id="RadioAdvertising"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Radio Advertising
                        </h2>
                        <p className="service-one__right-text">
                          Radio advertisement refers to the broadcasting of
                          promotional messages through radio channels. This type
                          of advertising can take the form of a scripted
                          commercial or a live read by a radio host or
                          announcer. Radio ads are typically broadcasted to a
                          wide audience, and can be targeted to specific
                          demographic groups based on the station's format, time
                          of day, and geographic reach. Radio advertising can be
                          an effective way to build brand awareness, promote
                          sales or events, and drive traffic to a website or
                          physical location. It can also be a cost-effective
                          option for small businesses looking to reach a local
                          audience.
                        </p>

                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*tab*/}
              <div
                className={`tab ${activeTab("CinemaAdvertising")}`}
                id="CinemaAdvertising"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Cinema Advertising
                        </h2>
                        <p className="service-one__right-text">
                          Cinema advertising refers to promotional messages that
                          are shown on movie screens before the feature
                          presentation. This type of advertising can take
                          various forms, such as traditional commercials,
                          branded content, or interactive experiences. Cinema
                          ads are typically seen by a captive audience who are
                          there to enjoy the movie and are therefore more likely
                          to be receptive to the message. Cinema advertising can
                          be used to reach a large and diverse audience, and can
                          be targeted to specific demographics based on the
                          movie being shown. It can also be an effective way to
                          build brand awareness, promote new products or
                          services, and drive engagement and social media
                          activity.
                        </p>

                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*tab*/}
              <div
                className={`tab ${activeTab("SportsMarketing")}`}
                id="SportsMarketing"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Sports Marketing
                        </h2>
                        <p className="service-one__right-text">
                          - Sports marketing refers to the use of sports as a
                          platform for promoting products, services, or brands.
                          This type of marketing can take various forms, such as
                          sponsorships, endorsements, event marketing, and
                          product placement. Sports marketing often targets a
                          specific audience, such as fans of a particular sport
                          or team, and can be used to build brand loyalty,
                          increase sales, and create positive associations with
                          a particular brand. Sports marketing can also be a way
                          to reach a global audience, as major sporting events
                          are watched by millions of people around the world. It
                          is a constantly evolving field that requires a deep
                          understanding of sports culture, fan behavior, and the
                          latest technology and trends.
                        </p>

                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* tab */}
              <div
                className={`tab ${activeTab(
                  "AirportandInflightadvertisement"
                )}`}
                id="AirportandInflightadvertisement"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Airport and In-flight 
                        </h2>
                        <p className="service-one__right-text">
                          - Airport and in-flight advertising refers to
                          promotional messages that are displayed in airports or
                          on flights, often aimed at a captive audience of
                          travelers. This type of advertising can take various
                          forms, such as digital displays, billboards, branded
                          merchandise, and interactive experiences. In airports,
                          advertising can be placed in high-traffic areas such
                          as check-in counters, baggage claim areas, and
                          security checkpoints. In-flight advertising can
                          include seatback ads, overhead bin ads, and in-flight
                          entertainment ads.
                        </p>
                        <p className="service-one__right-text">
                          Airport and in-flight advertising can be used to reach
                          a targeted and affluent audience, often with a
                          specific interest in travel and related products and
                          services. It can be an effective way to build brand
                          awareness, promote sales or offers, and create
                          positive associations with a particular brand.
                        </p>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* tab */}
              <div
                className={`tab ${activeTab("Adfilmproduction")}`}
                id="AdFilmProduction"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Ad Film Production
                        </h2>
                        <p className="service-one__right-text">
                          - Ad film production refers to the process of creating
                          promotional videos or commercials for advertising
                          purposes. This process typically involves the
                          development of a concept or creative brief,
                          scriptwriting, storyboarding, casting, location
                          scouting, filming, and post-production. Ad films can
                          be used to promote products, services, or brands
                          across a wide range of platforms, including
                          television, social media, and online advertising
                          channels. Ad film production requires a deep
                          understanding of the target audience, as well as the
                          ability to craft a message that resonates with them in
                          a memorable and engaging way. It also requires a high
                          level of technical expertise and creativity to create
                          visually appealing and effective videos that can
                          capture the attention of the viewer and drive action.
                        </p>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab ${activeTab("SocialMedia/DigitalMarketing")}`}
                id="SocialMedia/DigitalMarketing"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Social Media/Digital Marketing
                        </h2>
                        <p className="service-one__right-text">
                          - Digital marketing refers to the use of digital
                          channels and technologies to promote products,
                          services, or brands. This type of marketing can take
                          various forms, such as search engine optimization
                          (SEO), search engine marketing (SEM), social media
                          marketing, content marketing, email marketing, and
                          mobile marketing. Digital marketing allows businesses
                          to reach a global audience through a wide range of
                          online platforms, including websites, social media
                          platforms, search engines, and mobile devices. It can
                          be used to build brand awareness, increase website
                          traffic, generate leads, and drive sales. Digital
                          marketing requires a deep understanding of the target
                          audience, as well as the ability to create and
                          implement a digital strategy that delivers measurable
                          results. It is a rapidly evolving field that requires
                          ongoing learning and adaptation to stay ahead of the
                          competition.
                        </p>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab ${activeTab("MallsandTransit")}`}
                id="MallsandTransit"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Malls and Transit
                        </h2>
                        <p className="service-one__right-text">
                          - Malls and transit advertising refer to promotional
                          messages that are displayed in shopping malls or on
                          public transportation, such as buses, trains, and
                          subways. This type of advertising can take various
                          forms, such as billboards, posters, digital displays,
                          floor graphics, and experiential activations. In
                          malls, advertising can be placed in high-traffic areas
                          such as entrances, escalators, food courts, and
                          restrooms. In transit, advertising can include
                          exterior bus and train wraps, interior ads, and
                          station posters.
                        </p>
                        <p className="service-one__right-text">
                          Malls and transit advertising can be used to reach a
                          broad and diverse audience, often with a specific
                          interest in shopping, entertainment, or
                          transportation. It can be an effective way to build
                          brand awareness, promote sales or offers, and create
                          positive associations with a particular brand. Malls
                          and transit advertising require a deep understanding
                          of the target audience, as well as the ability to
                          create visually appealing and effective ads that can
                          capture the attention of the viewer and drive action.
                        </p>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab ${activeTab("Inshop-OutshopBranding")}`}
                id="Inshop-OutshopBranding"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Inshop-Outshop Branding
                        </h2>
                        <p className="service-one__right-text">
                          - In-shop and out-shop branding refer to promotional
                          messages that are displayed within or outside a retail
                          store, respectively. In-shop branding can take various
                          forms, such as point-of-sale displays, signage,
                          shelf-talkers, and posters. This type of branding is
                          intended to capture the attention of customers already
                          inside the store, often at the point of purchase.
                          Out-shop branding, on the other hand, includes outdoor
                          signage, window displays, and other forms of
                          advertising placed outside the store. This type of
                          branding is intended to attract the attention of
                          potential customers passing by the store and entice
                          them to come inside. In-shop and out-shop branding can
                          be used to build brand awareness, promote specific
                          products or offers, and create a unique and memorable
                          in-store experience. This type of branding requires a
                          deep understanding of the target audience, as well as
                          the ability to create visually appealing and effective
                          ads that can capture the attention of the viewer and
                          drive action.
                        </p>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab ${activeTab("Events/Activations/BTL")}`}
                id="Events/Activations/BTLf"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Events/Activations/BTL
                        </h2>
                        <p className="service-one__right-text">
                          - Events, activations, and BTL (below-the-line)
                          advertising refer to promotional activities that take
                          place outside of traditional media channels such as
                          television, radio, and print. These activities can
                          include events, experiential marketing, product
                          demonstrations, direct mail, and other forms of
                          targeted advertising. The goal of events, activations,
                          and BTL advertising is to create a direct and engaging
                          experience between the brand and the consumer, often
                          leading to increased brand awareness, customer
                          loyalty, and sales. These activities require a deep
                          understanding of the target audience, as well as the
                          ability to create a unique and memorable experience
                          that aligns with the brand's messaging and values.
                          Successful events, activations, and BTL advertising
                          campaigns require careful planning, execution, and
                          measurement to ensure a positive return on investment.
                        </p>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* tab */}
              <div
                className={`tab ${activeTab("Printmediaadvertising")}`}
                id="Printmediaadvertising"
              >
                <div className="row clearfix">
                  <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__img">
                        <img
                          src="assets/images/services/service-v1-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="service-one__right">
                        <h2 className="service-one__right-title">
                          Print Media Advertising
                        </h2>
                        <p className="service-one__right-text">
                          - Print media advertising refers to promotional
                          messages that are printed on various forms of physical
                          media, such as newspapers, magazines, brochures,
                          flyers, and billboards. This type of advertising can
                          take the form of display ads, classified ads,
                          advertorials, or inserts. Print media advertising can
                          be targeted to specific demographics based on the
                          publication's readership, circulation, and editorial
                          content. It can also be an effective way to reach a
                          local or regional audience, and can be used to promote
                          a wide range of products, services, or events. Print
                          media advertising requires a deep understanding of
                          design, layout, and copywriting, as well as the
                          ability to create compelling and visually appealing
                          ads that capture the reader's attention and drive
                          engagement.
                        </p>
                        <div className="buttons">
                          <Link href="/services-details">
                            <a className="thm-btn service-one-btn">
                              Read More
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Service One End*/}
      {/*Team One Start*/}
      <section className="team-one">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Our Consultants</h4>
            </div>
            <h2 className="section-title__title">
              Meet Our Professional
              <br />
              Consultants
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="team-one__content-wrapper">
                <div className="team-one__big-title">
                  <h2>Team</h2>
                </div>
                <div className="row">
                  {/*Start Single Team One*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="team-one__single wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-1.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Michael J. Behne</Link>
                          </h4>
                          <p>CEO &amp; Founder</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Michael J. Behne</Link>
                          </h4>
                          <p>CEO &amp; Founder</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <a href="#">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="team-one__single wow fadeInLeft"
                      data-wow-delay="100ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-2.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">
                              <a>Seymour Pounders</a>
                            </Link>
                          </h4>
                          <p>Senior Manager</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              <a>Seymour Pounders</a>
                            </Link>
                          </h4>
                          <p>Senior Manager</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <a href="#">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="team-one__single wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-3.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">
                              <a>Susan F. Burgess</a>
                            </Link>
                          </h4>
                          <p>Junior Marketing</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              <a>Susan F. Burgess</a>
                            </Link>
                          </h4>
                          <p>Junior Marketing</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <a href="#">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div
                      className="team-one__single wow fadeInRight"
                      data-wow-delay="100ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-4.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">
                              <a>Douglas B. Robin</a>
                            </Link>
                          </h4>
                          <p>Managing Director</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              <a>Douglas B. Robin</a>
                            </Link>
                          </h4>
                          <p>Managing Director</p>
                          <ul className="social-icon list-unstyled">
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-youtube"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fab fa-behance"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="icon">
                            <a href="#">
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
                  {/*End Single Team One*/}
                  <div className="team-one__button">
                    <a href="#" className="thm-btn team-one__btn">
                      View All Member{" "}
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
      {/*Team One End*/}
      {/*Cta One Start*/}
      <section
        className="cta-one jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgposition="50% 0%"
        style={{
          backgroundImage: "url(assets/images/resources/cta-v1-bg-img.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta-one__wrapper">
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
                <div className="cta-one__btn-box text-center">
                  <Link href="/contact">
                    <a className="thm-btn">
                      Get Free Quote{" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </Link>
                  <div className="video-button">
                    <a
                      className="video-popup video-btn"
                      title=" Spectrum Video Gallery"
                      href="#"
                      onClick={() => setVideoPopup(true)}
                    >
                      <span className="txt">cause video</span>
                      <i className="fa fa-play" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Cta One End*/}
      {/*Testimonial One Start*/}
      <section className="testimonial-one">
        <div
          className="testimonial-one-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/testimonial-v1-bg.png)",
          }}
        />
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Our Consultants</h4>
            </div>
            <h2 className="section-title__title">
              Meet Our Professional
              <br />
              Consultants
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial-one__content-box">
                <div className="testimonial-one__big-title">
                  <h2>Fedback</h2>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <TestimonialSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Testimonial One End*/}
      {/*Blog One Start*/}
      <section className="blog-one">
        <div
          className="shape1 wow slideInRight"
          data-wow-delay="500ms"
          data-wow-duration="2500ms"
        >
          <img src="assets/images/shapes/blog-v1-shape1.png" alt="image" />
        </div>
        <div className="container">
          <div className="section-title text-center">
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
            <div className="col-xl-4 col-lg-4">
              <div
                className="blog-one__single  wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img1.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Evolving Program Manage
                        <br />
                        Office For Modern
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
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
            <div className="col-xl-4 col-lg-4">
              <div
                className="blog-one__single wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img2.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Design Decision With Bea
                        <br />
                        Feitler Unstoppable{" "}
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
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
            <div className="col-xl-4 col-lg-4">
              <div
                className="blog-one__single wow fadeInLeft"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img3.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Pain-Free Workflow Issue
                        <br />
                        Reporting Resolution
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
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
      {/*Blog One End*/}
      {/*Partner One Start*/}
      <section className="partner-one">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Trusted Partners</h4>
            </div>
            <h2 className="section-title__title">
              We’ve More Than 259+
              <br />
              Global Clients
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="partner-one__content">
                <BrandSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Partner One End*/}
      {/*Info One Start*/}
      <section className="info-one">
        <div className="container">
          <div className="row">
            {/*Start Single Info One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="info-one__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="info-one__img">
                  <img
                    src="assets/images/resources/info-v1-img1.png"
                    alt="image"
                  />
                  <div className="info-one__overly">
                    <h2>
                      Let’s Ready to Get
                      <br />
                      Work Together
                    </h2>
                    <div className="button">
                      <Link href="/career">
                        <a className="thm-btn info-one__btn">
                          Join Now
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Info One*/}
            {/*Start Single Info One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="info-one__single wow fadeInUp"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="info-one__img">
                  <img
                    src="assets/images/resources/info-v1-img2.png"
                    alt="image"
                  />
                  <div className="info-one__overly">
                    <h2>
                      Request To Call Back
                      <br />
                      We Will Call!
                    </h2>
                    <div className="button">
                      <Link href="/contact">
                        <a className="thm-btn info-one__btn">
                          Get A Quote
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Info One*/}
            {/*Start Single Info One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="info-one__single wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="info-one__img">
                  <img
                    src="assets/images/resources/info-v1-img3.png"
                    alt="image"
                  />
                  <div className="info-one__overly">
                    <h2>
                      Build A Better Career
                      <br />
                      With Spectrum
                    </h2>
                    <div className="button">
                      <Link href="/career">
                        <a className="thm-btn info-one__btn">
                          View Jobs
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Single Info One*/}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
