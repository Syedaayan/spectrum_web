import Link from "next/dist/client/link";
import { useState } from "react";
import BrandSlider from "../src/components/slider/BrandSlider";
import TestimonialSlider from "../src/components/slider/TestimonialSlider";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const Services = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="Our Services" />

      <section
        className="features-three features-three--services"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/features-three--services-bg.png)",
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
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
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
                      src="assets/images/icon/features-v3-icon5.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <Link href="/services-details">
                      <a>Business Process</a>
                    </Link>
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
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
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
                      src="assets/images/icon/features-v3-icon6.png"
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
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
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
                      src="assets/images/icon/features-v3-icon7.png"
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
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
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
                      src="assets/images/icon/features-v3-icon9.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <Link href="/services-details">Sales &amp; Marketing</Link>
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
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
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
                      src="assets/images/icon/features-v3-icon8.png"
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
              {/*Start Single Features Three*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
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
                      src="assets/images/icon/features-v3-icon10.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <Link href="/services-details">MFinancial Planning</Link>
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
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
                data-wow-delay="00ms"
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
                      src="assets/images/icon/features-v3-icon11.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <Link href="/services-details">Strategy Innovision</Link>
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
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
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
                      src="assets/images/icon/features-v3-icon12.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <Link href="/services-details">Supply Chain</Link>
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
      {/*Partner One Start*/}
      <section className="partner-one partner-one--services">
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
            <div className="col-xl-12">
              <div className="partner-one__content">
                <BrandSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
