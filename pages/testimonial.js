import BrandSlider from "../src/components/slider/BrandSlider";
import ClientSaySlider from "../src/components/slider/ClientSaySlider";
import TestimonialSlider from "../src/components/slider/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const Testimonial = () => {
  return (
    <Layout>
      <PageBanner pageName="Testimonial" />

      <section className="testimonial-one testimonial-one--testimonial">
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
              What Our Client’s Say
              <br />
              About Solutions
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
      {/*Start Testimonial Two*/}
      <section className="testimonial-two">
        <div className="container">
          <div className="row">
            {/*Start Testimonial Two Left*/}
            <div className="col-xl-6">
              <div className="testimonial-two__left">
                <div className="shape1 float-bob-y">
                  <img src="assets/images/shapes/thm-shape-9.png" alt="image" />
                </div>
                <div className="shape2 rotate-me">
                  <img src="assets/images/shapes/thm-shape-8.png" alt="image" />
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
                    data-wow-delay="500ms"
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
      {/*Partner One Start*/}
      <section className="partner-one partner-one--services">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Trusted Partners</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              We’ve More Than 259+
              <br />
              Global Clients
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="partner-one__content list-unstyled">
                <BrandSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonial;
