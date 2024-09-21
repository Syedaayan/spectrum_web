import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const News = () => {
  return (
    <Layout>
      <PageBanner pageName="Contact Us" />
      <section className="info-one info-one--contact">
        <div className="container">
          <div className="row">
            {/*Start Single Info One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="info-one__single wow fadeInUp"
                data-wow-delay="0.1s"
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
                      <a href="#" className="thm-btn info-one__btn">
                        Join Now
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
            {/*End Single Info One*/}
            {/*Start Single Info One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="info-one__single wow fadeInUp"
                data-wow-delay="0.3s"
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
                      <a href="#" className="thm-btn info-one__btn">
                        Get A Quote
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
            {/*End Single Info One*/}
            {/*Start Single Info One*/}
            <div className="col-xl-4 col-lg-4">
              <div
                className="info-one__single wow fadeInUp"
                data-wow-delay="0.5s"
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
                      <a href="#" className="thm-btn info-one__btn">
                        View Jobs
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
            {/*End Single Info One*/}
          </div>
        </div>
      </section>
      {/*Info One End*/}
      {/*Contact Box Start*/}
      <section className="contact-box">
        <div className="container">
          <div className="row">
            {/*Start Contact Box Single*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1500ms"
            >
              <div className="contact-box__single text-center">
                <div className="contact-box__single-icon">
                  <span className="icon-pin" />
                </div>
                <div className="contact-box__single-text">
                  <h2>
                    <a href="#">Our Location</a>
                  </h2>
                  <p>
                    354 Oakridge, Camden <br />
                    NJ 08102 - USA
                  </p>
                </div>
              </div>
            </div>
            {/*End Contact Box Single*/}
            {/*Start Contact Box Single*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
              data-wow-duration="1500ms"
            >
              <div className="contact-box__single style2 text-center">
                <div className="contact-box__single-icon">
                  <span className="icon-letter" />
                </div>
                <div className="contact-box__single-text">
                  <h2>
                    <a href="#">Email Address</a>
                  </h2>
                  <p>
                    <a href="mailto:info@templatepath.com">
                      supportinfobiz@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@templatepath.com">
                      www.businesscon.net
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/*End Contact Box Single*/}
            {/*Start Contact Box Single*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
              data-wow-duration="1500ms"
            >
              <div className="contact-box__single style3 text-center">
                <div className="contact-box__single-icon">
                  <span className="icon-phone-call" />
                </div>
                <div className="contact-box__single-text">
                  <h2>
                    <a href="#">Phone Number</a>
                  </h2>
                  <p>
                  <a href="tel:7766808080">7766808080 , </a>
                      <a href="tel:9709227772"> 9709227772</a>
                  </p>

                </div>
              </div>
            </div>
            {/*End Contact Box Single*/}
          </div>
        </div>
      </section>
      {/*Contact Box End*/}
      {/*Contact Page Google Map Start*/}
      <section className="contact-page-google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="contact-page-google-map__one"
          allowFullScreen
        />
      </section>
      {/*Contact Page Google Map End*/}
      {/*Contact page Start*/}
      <section className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div
                className="contact-page__inner wow slideInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="section-title text-center">
                  <div className="section-title__tagline">
                    <span className="left" />
                    <h4>Send Us Message</h4>
                    <span className="right" />
                  </div>
                  <h2 className="section-title__title">
                    Have Any Questions Let’s <br />
                    Started Talk
                  </h2>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-page__form contact-form-validated"
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page__input-box">
                        <input
                          type="text"
                          placeholder="Your name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page__input-box">
                        <input
                          type="text"
                          placeholder="Phone number"
                          name="phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="contact-page__input-box">
                        <input
                          type="email"
                          placeholder="Subject"
                          name="Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="contact-page__input-box">
                        <textarea
                          name="message"
                          placeholder="Write message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="contact-page__btn">
                        <button type="submit">
                          <span className="thm-btn">
                            Send Us Message
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
