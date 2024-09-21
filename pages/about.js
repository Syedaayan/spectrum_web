import Link from "next/dist/client/link";
import dynamic from 'next/dynamic';
import { useState } from "react";
import VideoPopup from "../src/components/VideoPopup";
import BrandSlider from "../src/components/slider/BrandSlider";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";
 
const Counter= dynamic(() => import('../src/components/Counter'), {
  ssr: false,
})

const About = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="About Us" />
      <section className="about-one about-one--about">
        <div className="container">
          <div className="row">
            {/* Start About One Left*/}
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="about-one--about__big-title">
                  <h2>About</h2>
                </div>
                <div className="shape1">
                  <img src="assets/images/shapes/thm-shape-1.png" alt="image" />
                </div>
                <div className="about-one__left-img">
                  <img src="assets/images/about/about-v1-3.jpg" alt="image" />
                </div>
                <div className="about-one__left-bottom">
                  <div className="about-one__logo">
                    <img
                      src="assets/images/about/about-v1-logo2.png"
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
                    Build Your Business
                    <br />
                    With Right Way
                  </h2>
                </div>
                <div className="about-one__right-inner">
                  <p className="about-one__right-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptem
                    accusantium doloremu laudantium totam rem aperiam eaque upsa
                    quae abillo inventore veritatis architecto
                  </p>
                  <ul className="about-one__right-buttom list-unstyled">
                    <li>
                      <div className="icon">
                        <img
                          src="assets/images/icon/about-one--about-icon1.png"
                          alt="image"
                        />
                      </div>
                      <div className="title">
                        <h3>Business Process</h3>
                        <p>
                          Quis autem vel eum iure reprehenderit quein voluptate
                          velit esse quam molestiae
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img
                          src="assets/images/icon/about-one--about-icon2.png"
                          alt="image"
                        />
                      </div>
                      <div className="title">
                        <h3>Leadership Planning</h3>
                        <p>
                          On the other hand denounce with righteous indignation
                          dislike men beguilede
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="about-one__btn">
                    <a href="#" className="thm-btn">
                      Learn More{" "}
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End About One Right*/}
          </div>
        </div>
      </section>
      {/*About One End*/}
      {/*Features Three Start*/}
      <section
        className="features-three features-three--about"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/features-three--about-bg.png)",
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
                      src="assets/images/icon/features-v3-icon5.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <a href="#">Business Process</a>
                  </h4>
                  <p className="features-three__single-text">
                    Quis autem vel eumiure repreh enderi qvoluptate velit esse
                    quam
                  </p>
                  <div className="features-three__single-btn">
                    <a href="#">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
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
                      src="assets/images/icon/features-v3-icon6.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <a href="#">Digital Strategy</a>
                  </h4>
                  <p className="features-three__single-text">
                    Quis autem vel eumiure repreh enderi qvoluptate velit esse
                    quam
                  </p>
                  <div className="features-three__single-btn">
                    <a href="#">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
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
                      src="assets/images/icon/features-v3-icon7.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <a href="#">Information Tech</a>
                  </h4>
                  <p className="features-three__single-text">
                    Quis autem vel eumiure repreh enderi qvoluptate velit esse
                    quam
                  </p>
                  <div className="features-three__single-btn">
                    <a href="#">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
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
                      src="assets/images/icon/features-v3-icon8.png"
                      alt="image"
                    />
                  </div>
                  <h4 className="features-three__single-title">
                    <a href="#">Media Marketing</a>
                  </h4>
                  <p className="features-three__single-text">
                    Quis autem vel eumiure repreh enderi qvoluptate velit esse
                    quam
                  </p>
                  <div className="features-three__single-btn">
                    <a href="#">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/*End Single Features Three*/}
            </div>
          </div>
        </div>
      </section>
      {/*Features Three End*/}
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
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-2.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Seymour Pounders</Link>
                          </h4>
                          <p>Senior Manager</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Seymour Pounders</Link>
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
                      <div className="team-one__single-wrapper">
                        <div className="team-one__single-img">
                          <img
                            src="assets/images/team/team-one-img-3.jpg"
                            alt="image"
                          />
                        </div>
                        <div className="team-one__single-title">
                          <h4>
                            <Link href="/team-details">Susan F. Burgess</Link>
                          </h4>
                          <p>Junior Marketing</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">Susan F. Burgess</Link>
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
                            <Link href="/team-details">
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
                  {/*End Single Team One*/}
                  {/*Start Single Team One*/}
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="team-one__single">
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
                              Douglas B. Robinson
                            </Link>
                          </h4>
                          <p>Managing Director</p>
                        </div>
                        <div className="team-one__single-title-overly">
                          <h4>
                            <Link href="/team-details">
                              Douglas B. Robinson
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
                            <Link href="/team-details">
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
                            <i className="fa fa-plus" aria-hidden="true" />
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
                            <i className="fa fa-plus" aria-hidden="true" />
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
                          src="assets/images/icon/counter-v3-icon3.png"
                          alt="image"
                        />
                      </div>
                      <div className="counter-one__outer">
                        <div className="counter-one__box">
                          <h2 className="counter-one__single-text">
                            <Counter end={963} />
                            <i className="fa fa-plus" aria-hidden="true" />
                          </h2>
                        </div>
                        <div className="counter-one__title">
                          <h6>Saticfied Clients</h6>
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
                    <Link href="/contact">
                      <a className="thm-btn">
                        Get Free Quote{" "}
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
      </section>
      {/*Counter Three End*/}
      {/*Why Choose One Start*/}
      <section className="why-choose-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-choose-one__content">
                <div className="section-title">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>Why Choose Us</h4>
                  </div>
                  <h2 className="section-title__title">
                    Help to Rapidly Shift
                    <br />
                    Remote Work
                  </h2>
                </div>
                <ul className="why-choose-one__list list-unstyled">
                  <li className="why-choose-one__list-single">
                    <div className="icon">
                      <i className="fa fa-check " aria-hidden="true" />
                    </div>
                    <div className="text">
                      <h3>Static Innovations</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error volupte
                        accusantium doloremu laudantium totam
                      </p>
                    </div>
                  </li>
                  <li className="why-choose-one__list-single">
                    <div className="icon">
                      <i className="fa fa-check" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <h3>Consulting &amp; Advisory</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error volupte
                        accusantium doloremu laudantium totam
                      </p>
                    </div>
                  </li>
                  <li className="why-choose-one__list-single">
                    <div className="icon">
                      <i className="fa fa-check" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <h3>Turnaround Situations</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error volupte
                        accusantium doloremu laudantium totam
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-6 wow slideInRight"
              data-wow-delay="500ms"
              data-wow-duration="2500ms"
            >
              <div className="why-choose-one__img">
                <img
                  src="assets/images/resources/why-choose-one-img1.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Why Choose One End*/}
      {/*Partner One Start*/}
      <section className="partner-one partner-one--about">
        <div className="container">
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

export default About;
