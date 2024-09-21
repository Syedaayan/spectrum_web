import Link from "next/dist/client/link";
import dynamic from 'next/dynamic';
import { useState } from "react";
import VideoPopup from "../src/components/VideoPopup";
import BrandSlider from "../src/components/slider/BrandSlider";
import ClientSaySlider from "../src/components/slider/ClientSaySlider";
import Layout from "../src/layouts/Layout";
 
const Counter= dynamic(() => import('../src/components/Counter'), {
  ssr: false,
}) 

const Index2 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout 
    eader={2} footer={2} featuresContentOff>
      {video && <VideoPopup close={setVideo} />}
      <section className="banner-two clearfix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="banner-two__inner-box">
                <div className="shape1 float-bob-y">
                  <img src="assets/images/shapes/thm-shape-6.png" alt="image" />
                </div>
                <div className="shape2 zoominout">
                  <img src="assets/images/shapes/thm-shape-7.png" alt="image" />
                </div>
                <div className="shape3  zoom-fade">
                  <img src="assets/images/shapes/thm-shape-2.png" alt="image" />
                </div>
                <div className="shape4 zoominout">
                  <img src="assets/images/shapes/thm-shape-5.png" alt="image" />
                </div>
                <div className="banner-two__content">
                  <div className="section-title">
                    <div
                      className="section-title__tagline wow slideInUp animated"
                      data-wow-delay="0.2s"
                      data-wow-duration="1500ms"
                    >
                      <span className="left" />
                      <h4>Consulting Agency</h4>
                    </div>
                    <h2
                      className="section-title__title wow slideInUp animated"
                      data-wow-delay="0.3s"
                      data-wow-duration="1500ms"
                    >
                      Marketing <br />
                      Consulting
                    </h2>
                  </div>
                  <p
                    className="banner-two__text wow slideInUp animated"
                    data-wow-delay="0.4s"
                    data-wow-duration="1500ms"
                  >
                    Digital, business &amp; technology consulting <br />
                    for business resilience
                  </p>
                  <div
                    className="banner-two__btn wow slideInUp animated"
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
                <div className="banner-two__banner-img clearfix">
                  <div className="banner-two__banner-img1">
                    <img
                      src="assets/images/backgrounds/banner-img2.png"
                      alt="image"
                    />
                  </div>
                  <div
                    className="banner-two__banner-img2 wow slideInRight"
                    data-wow-delay="500ms"
                    data-wow-duration="2500ms"
                  >
                    <img
                      src="assets/images/backgrounds/banner-img3.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Banner One*/}
      {/*Features Three Start*/}
      <section
        className="features-three"
        style={{
          backgroundImage: "url(assets/images/backgrounds/feature-v3-bg.png)",
        }}
      >
        <div className="features-three__content-box">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline">
                <span className="left" />
                <h4>How Can Help You</h4>
                <span className="right" />
              </div>
              <h2 className="section-title__title">
                Most Trending Marketing
                <br />
                Consulting Topic
              </h2>
            </div>
            <div className="row">
              {/*Start Single Features Three*/}
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1000ms"
              >
                <div className="features-three__single text-center">
                  <div
                    className="layer-outer"
                    style={{
                      backgroundImage:
                        "url(assets/images/feauters/feauters-v3-bg-img1.jpg)",
                    }}
                  ></div>
                  <div className="features-three__single-icon">
                    <img
                      src="assets/images/icon/features-v3-icon1.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <Link href="/services-details">Business Process</Link>
                  </h4>
                  <p className="features-three__single-text">
                    Quis autem vel eumiure repreh enderi qvoluptate velit esse
                    quam
                  </p>
                  <div className="features-three__single-btn">
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
              {/*End Single Features Three*/}
              {/*Start Single Features Three*/}
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft"
                data-wow-delay="100ms"
                data-wow-duration="1000ms"
              >
                <div className="features-three__single text-center">
                  <div
                    className="layer-outer"
                    style={{
                      backgroundImage:
                        "url(assets/images/feauters/feauters-v3-bg-img1.jpg)",
                    }}
                  ></div>
                  <div className="features-three__single-icon">
                    <img
                      src="assets/images/icon/features-v3-icon2.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <Link href="/services-details">Digital Strategy</Link>
                  </h4>
                  <p className="features-three__single-text">
                    Quis autem vel eumiure repreh enderi qvoluptate velit esse
                    quam
                  </p>
                  <div className="features-three__single-btn">
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
              {/*End Single Features Three*/}
              {/*Start Single Features Three*/}
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1000ms"
              >
                <div className="features-three__single text-center">
                  <div
                    className="layer-outer"
                    style={{
                      backgroundImage:
                        "url(assets/images/feauters/feauters-v3-bg-img1.jpg)",
                    }}
                  ></div>
                  <div className="features-three__single-icon">
                    <img
                      src="assets/images/icon/features-v3-icon3.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <Link href="/services-details">Information Tech</Link>
                  </h4>
                  <p className="features-three__single-text">
                    Quis autem vel eumiure repreh enderi qvoluptate velit esse
                    quam
                  </p>
                  <div className="features-three__single-btn">
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
              {/*End Single Features Three*/}
              {/*Start Single Features Three*/}
              <div
                className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight"
                data-wow-delay="100ms"
                data-wow-duration="1000ms"
              >
                <div className="features-three__single text-center">
                  <div
                    className="layer-outer"
                    style={{
                      backgroundImage:
                        "url(assets/images/feauters/feauters-v3-bg-img1.jpg)",
                    }}
                  ></div>
                  <div className="features-three__single-icon">
                    <img
                      src="assets/images/icon/features-v3-icon4.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <Link href="/services-details">Media Marketing</Link>
                  </h4>
                  <p className="features-three__single-text">
                    Quis autem vel eumiure repreh enderi qvoluptate velit esse
                    quam
                  </p>
                  <div className="features-three__single-btn">
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
              {/*End Single Features Three*/}
            </div>
          </div>
        </div>
      </section>
      {/*Features Three End*/}
      {/*About Two Start*/}
      <section className="about-two">
        <div className="container">
          <div className="row">
            {/* Start About Two Left*/}
            <div className="col-xl-6">
              <div className="about-two__left">
                <div className="about-two__big-title">
                  <h2>Spectrum</h2>
                </div>
                <div className="about-two__left-img-box">
                  <div className="about-two__left-img1">
                    <img
                      src="assets/images/about/about-v2-img1.png"
                      alt="image"
                    />
                  </div>
                  <div
                    className="about-two__left-img2 wow zoomIn"
                    data-wow-delay="100ms"
                    data-wow-duration="3500ms"
                  >
                    <img
                      src="assets/images/about/about-v2-img2.jpg"
                      alt="image"
                    />
                    <div className="video-box">
                      <a
                        className="video-popup wow zoomIn animated animated animated"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                        title=" Video Gallery"
                        href="#"
                        onClick={() => setVideo(true)}
                        style={{
                          visibility: "visible",
                          animationDuration: "1500ms",
                          animationDelay: "300ms",
                          animationName: "zoomIn",
                        }}
                      >
                        <i className="fa fa-play" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End About Two Left*/}
            {/* Start About Two Right*/}
            <div className="col-xl-6">
              <div className="about-two__right">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>About Spectrum</h4>
                  </div>
                  <h2 className="section-title__title">
                    Build Your Business
                    <br />
                    With Right Way
                  </h2>
                </div>
                <div className="about-two__right-inner">
                  <p className="about-two__right-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptem
                    accusantium doloremu laudantium totam rem aperiam eaque upsa
                    quae abillo inventore veritatis architecto
                  </p>
                  <div className="about-two__right-bottom">
                    <div className="icon">
                      <img
                        src="assets/images/icon/about-v2-icon.png"
                        alt="image"
                      />
                    </div>
                    <div className="text">
                      <p>
                        But must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born will give
                        you a complete account of the system, and expound the
                      </p>
                    </div>
                    <div className="about-two__right-btn">
                      <Link href="/about">
                        <a className="thm-btn">
                          Learn More
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
            {/* End About Two Right*/}
          </div>
        </div>
      </section>
      {/*About Two End*/}
      {/*Service Two Start*/}
      <section className="service-two">
        <div
          className="service-two__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/service-two-bg.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="service-two__content-box">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>What We Do</h4>
                  </div>
                  <h2 className="section-title__title">
                    We Provide Exclusive
                    <br />
                    Marketing Service
                  </h2>
                </div>
                <div className="service-two__inner">
                  <div className="row">
                    {/*Start Single Service Two*/}
                    <div
                      className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="service-two__single">
                        <div className="service-two__single-icon">
                          <img
                            src="assets/images/icon/service-v2-icon1.png"
                            alt="image"
                          />
                        </div>
                        <div className="service-two__single-text">
                          <h4>
                            <Link href="/services-details">
                              Media Martketing
                            </Link>
                          </h4>
                          <p>
                            Sed perspicias unde omnis <br />
                            natus error voluptem accusan
                            <br />
                            tium doloremu laudan
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div
                      className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="service-two__single">
                        <div className="service-two__single-icon">
                          <img
                            src="assets/images/icon/service-v2-icon2.png"
                            alt="image"
                          />
                        </div>
                        <div className="service-two__single-text">
                          <h4>
                            <Link href="/services-details">
                              Web Development
                            </Link>
                          </h4>
                          <p>
                            Sed perspicias unde omnis <br />
                            natus error voluptem accusan
                            <br />
                            tium doloremu laudan
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div
                      className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      <div className="service-two__single">
                        <div className="service-two__single-icon">
                          <img
                            src="assets/images/icon/service-v2-icon3.png"
                            alt="image"
                          />
                        </div>
                        <div className="service-two__single-text">
                          <h4>
                            <Link href="/services-details">
                              Apps Development
                            </Link>
                          </h4>
                          <p>
                            Sed perspicias unde omnis <br />
                            natus error voluptem accusan
                            <br />
                            tium doloremu laudan
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*End Single Service Two*/}
                    {/*Start Single Service Two*/}
                    <div
                      className="col-xl-6 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <div className="service-two__single">
                        <div className="service-two__single-icon">
                          <img
                            src="assets/images/icon/service-v2-icon4.png"
                            alt="image"
                          />
                        </div>
                        <div className="service-two__single-text">
                          <h4>
                            <Link href="/services-details">
                              Product Engineering
                            </Link>
                          </h4>
                          <p>
                            Sed perspicias unde omnis <br />
                            natus error voluptem accusan
                            <br />
                            tium doloremu laudan
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*End Single Service Two*/}
                  </div>
                  <div className="service-two__btn">
                    <Link href="/services-1">
                      <a className="thm-btn">
                        Learn More
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
            <div
              className="col-xl-4 wow slideInRight"
              data-wow-delay="500ms"
              data-wow-duration="2500ms"
            >
              <div className="service-two__img-box">
                <div className="service-two__img">
                  <img
                    src="assets/images/services/service-v2-img1.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Service Two End*/}
      {/*Case Studies One Start*/}
      <section className="case-studies-one">
        <div className="case-studies-one__big-title">
          <h2>Cases</h2>
        </div>
        <div className="container-fluid">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Case Studies</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              We’re Committed to Creating
              <br /> Change That Matters
            </h2>
          </div>
          <div className="row">
            {/*Start Case Studies One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img1.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">Marketing Planning</Link>
                    </h3>
                    <p>We have digital business consulting</p>
                  </div>
                  <div className="overly-btn">
                    <Link href="/portfolio-details">
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
            {/*End Case Studies One Single*/}
            {/*Start Case Studies One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img2.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details"> Program Management</Link>
                    </h3>
                    <p>We have digital business consulting</p>
                  </div>
                  <div className="overly-btn">
                    <Link href="/portfolio-details">
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
            {/*End Case Studies One Single*/}
            {/*Start Case Studies One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img3.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">IT Management</Link>
                    </h3>
                    <p>We have digital business consulting</p>
                  </div>
                  <div className="overly-btn">
                    <Link href="/portfolio-details">
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
            {/*End Case Studies One Single*/}
            {/*Start Case Studies One Single*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img4.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">Growth Business</Link>
                    </h3>
                    <p>We have digital business consulting</p>
                  </div>
                  <div className="overly-btn">
                    <Link href="/portfolio-details">
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
            {/*End Case Studies One Single*/}
          </div>
        </div>
      </section>
      {/*Case Studies One End*/}
      {/*Counter One Start*/}
      <section className="counter-one clearfix">
        <div className="auto-container">
          <div
            className="counter-one__wrapper clearfix wow animated fadeInUp"
            data-wow-delay="0.1s"
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
              {/*Start Counter One Single*/}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-one__company-chievement-box clearfix">
                  <div
                    className="counter-one__company-chievement-img style2"
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
      {/*Start Testimonial Two*/}
      <section className="testimonial-two">
        <div className="container">
          <div className="row">
            {/*Start Testimonial Two Left*/}
            <div className="col-xl-6">
              <div className="testimonial-two__left">
                <div className="shape1 float-bob-y">
                  <img src="assets/images/shapes/thm-shape-3.png" alt="image" />
                </div>
                <div className="shape2 rotate-me">
                  <img src="assets/images/shapes/thm-shape-4.png" alt="image" />
                </div>
                <div className="shape3 float-bob-y">
                  <img src="assets/images/shapes/thm-shape-5.png" alt="image" />
                </div>
                <div className="shape4 zoom-fade">
                  <img src="assets/images/shapes/thm-shape-2.png" alt="image" />
                </div>
                <div className="testimonial-two__img-box">
                  <div
                    className="testimonial-two__img1 wow slideInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="2500ms"
                  >
                    <img
                      src="assets/images/testimonial/testimonial-v2-img1.png"
                      alt="image"
                    />
                  </div>
                  <div className="testimonial-two__img2">
                    <img
                      src="assets/images/testimonial/testimonial-v2-img2.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*End Testimonial Two Left*/}
            {/*Start Testimonial Two Right*/}
            <div className="col-xl-6">
              <div className="testimonial-two__right">
                <div className="testimonial-two__content">
                  <div className="section-title">
                    <div className="section-title__tagline">
                      <span className="left" />
                      <h4>Our Testimonials</h4>
                    </div>
                    <h2 className="section-title__title">
                      What Our Client’s
                      <br />
                      Say About Us
                    </h2>
                  </div>
                  <ClientSaySlider />
                </div>
              </div>
            </div>
            {/*End Testimonial Two Right*/}
          </div>
        </div>
      </section>
      {/*End Testimonial Two*/}
      {/*Start Working Process One*/}
      <section className="working-process-one">
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
            <div className="col-xl-12">
              <div className="working-process-one__wrapper">
                <div className="working-process-one__shape">
                  <img
                    src="assets/images/shapes/working-process-v1-shape1.png"
                    alt="image"
                  />
                </div>
                <ul className="list-unstyled">
                  {/*Start Working Process One Single*/}
                  <li
                    className="working-process-one__single top50 text-center wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-coffee-cup" />
                      <div className="count-box" />
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Take a Coffee</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      Sed ut perspca unde omnis
                      <br />
                      natus error voluptem
                    </p>
                  </li>
                  {/*End Working Process One Single*/}
                  <li
                    className="working-process-one__single style2 text-center wow fadeInLeft"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-advisor" />
                      <div className="count-box" />
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Consultation</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      Sed ut perspca unde omnis
                      <br />
                      natus error voluptem
                    </p>
                  </li>
                  {/*End Working Process One Single*/}
                  <li
                    className="working-process-one__single top65 text-center wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-dashboard" />
                      <div className="count-box" />
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Data Analysis</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      Sed ut perspca unde omnis
                      <br />
                      natus error voluptem
                    </p>
                  </li>
                  {/*End Working Process One Single*/}
                  <li
                    className="working-process-one__single style2 top20 text-center wow fadeInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="working-process-one__single-icon">
                      <span className="icon-success" />
                      <div className="count-box" />
                    </div>
                    <h3 className="working-process-one__single-title">
                      <a href="#">Get Success</a>
                    </h3>
                    <p className="working-process-one__single-text">
                      Sed ut perspca unde omnis
                      <br />
                      natus error voluptem
                    </p>
                  </li>
                  {/*End Working Process One Single*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Working Process One*/}
      {/*Start Cta Two*/}
      <section
        className="cta-one cta-one--cta-two jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgposition="50% 0%"
        style={{
          backgroundImage: "url(assets/images/resources/cta-v2-bg-img.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta-one--cta-two__wrapper">
                <div className="cta-one__wrapper">
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
                  <div className="cta-one__btn-box">
                    <a href="#" className="thm-btn">
                      Get Free Quote{" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                    <div className="video-button">
                      <a
                        className="video-popup video-btn"
                        title="Spectrum Video Gallery"
                        href="#"
                        onClick={() => setVideo(true)}
                      >
                        <span className="txt">cause video</span>
                        <i className="fa fa-play" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="cta-one--cta-two__video-box wow zoomIn"
                  data-wow-delay="100ms"
                  data-wow-duration="3500ms"
                >
                  <div
                    className="icon wow zoomIn"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <a
                      className="video-popup link"
                      title="Video Gallery"
                      href="#"
                      onClick={() => setVideo(true)}
                    >
                      <i className="fa fa-play" aria-hidden="true" />
                    </a>
                    <span className="border-animation border-1" />
                    <span className="border-animation border-2" />
                    <span className="border-animation border-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Cta Two*/}
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
                      src="assets/images/icon/features-v1-icon3.png"
                      alt="image"
                    />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                        Guide to Becoming a Digital
                        <br />
                        First Organization
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
            {/*Start Single Features One */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div
                className="features-one__single  wow fadeInRight animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="features-one__single-left">
                  <div className="features-one__single-left-icon">
                    <img
                      src="assets/images/icon/features-v1-icon4.png"
                      alt="image"
                    />
                  </div>
                  <div className="features-one__single-left-text">
                    <h4>
                      <a href="#">
                        We’re Committed to Creating
                        <br />
                        Change That Matters
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
      {/*Pricing  Plan One Start*/}
      <section className="pricing-plan-one clearfix">
        <div
          className="pricing-plan-one__left-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/pricing-plan-v1-left-bg.png)",
          }}
        />
        <div
          className="pricing-plan-one__right-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/pricing-plan-v1-right-bg.png)",
          }}
        />
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Our Pricing Plan</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              Smart Pricing Plan For
              <br />
              Marketing
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="pricing-plan-one__content">
                <div className="shape1 float-bob-y">
                  <img src="assets/images/shapes/thm-shape-6.png" alt="image" />
                </div>
                <div className="shape2 float-bob-y">
                  <img src="assets/images/shapes/thm-shape-2.png" alt="image" />
                </div>
                <div className="shape3 zoominout">
                  <img src="assets/images/shapes/thm-shape-7.png" alt="image" />
                </div>
                <div className="shape4 zoominout">
                  <img src="assets/images/shapes/thm-shape-5.png" alt="image" />
                </div>
                <div className="row">
                  {/*Start Single Pricing  Plan One*/}
                  <div
                    className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="pricing-plan-one__single">
                      <div className="table-header">
                        <div
                          className="table-header__bg"
                          style={{
                            backgroundImage:
                              "url(assets/images/backgrounds/pricing-plan-v1-bg.png)",
                          }}
                        ></div>
                        <p>Basic Plan</p>
                        <h3>Monthly</h3>
                        <h2>
                          <span className="icon-dollar" />
                          29.99
                        </h2>
                      </div>
                      <div className="table-content">
                        <ul className="list-unstyled">
                          <li>Busines Consultations</li>
                          <li>Marketing Consultations</li>
                          <li>Corporate Solutions</li>
                          <li>Financial Solutions</li>
                        </ul>
                      </div>
                      <div className="table-footer">
                        <a href="#" className="thm-btn">
                          Select Plan
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*End Single Pricing  Plan One*/}
                  {/*Start Single Pricing  Plan One*/}
                  <div
                    className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="pricing-plan-one__single">
                      <div className="table-header">
                        <div
                          className="table-header__bg"
                          style={{
                            backgroundImage:
                              "url(assets/images/backgrounds/pricing-plan-v1-bg.png)",
                          }}
                        ></div>
                        <p>Stadard Plan</p>
                        <h3>6 Month</h3>
                        <h2>
                          <span className="icon-dollar" />
                          48.73
                        </h2>
                      </div>
                      <div className="table-content">
                        <ul className="list-unstyled">
                          <li>Busines Consultations</li>
                          <li>Marketing Consultations</li>
                          <li>Corporate Solutions</li>
                          <li>Financial Solutions</li>
                        </ul>
                      </div>
                      <div className="table-footer">
                        <a href="#" className="thm-btn">
                          Select Plan
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*End Single Pricing  Plan One*/}
                  {/*Start Single Pricing  Plan One*/}
                  <div
                    className="col-xl-4 col-lg-4 col-md-12 col-sm-12 wow animated fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="pricing-plan-one__single style2">
                      <div className="table-header">
                        <div
                          className="table-header__bg"
                          style={{
                            backgroundImage:
                              "url(assets/images/backgrounds/pricing-plan-v1-bg.png)",
                          }}
                        ></div>
                        <p>Premium Plan</p>
                        <h3>12 Month</h3>
                        <h2>
                          <span className="icon-dollar" />
                          87.62
                        </h2>
                      </div>
                      <div className="table-content">
                        <ul className="list-unstyled">
                          <li>Busines Consultations</li>
                          <li>Marketing Consultations</li>
                          <li>Corporate Solutions</li>
                          <li>Financial Solutions</li>
                        </ul>
                      </div>
                      <div className="table-footer">
                        <a href="#" className="thm-btn">
                          Select Plan
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*End Single Pricing  Plan One*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Pricing  Plan One End*/}
      {/*Partner One Start*/}
      <section className="partner-one partner-one--partner-two">
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
    </Layout>
  );
};

export default Index2;
