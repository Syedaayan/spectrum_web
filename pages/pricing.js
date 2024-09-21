import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const Pricing = () => {
  return (
    <Layout>
      <PageBanner pageName="Pricing" />
      <section className="pricing-plan-one clearfix pricing-plan-one--pricing">
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
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
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
                      <i className="fa fa-check-circle" aria-hidden="true" />
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
                      <i className="fa fa-check-circle" aria-hidden="true" />
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
                      <i className="fa fa-check-circle" aria-hidden="true" />
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
    </Layout>
  );
};

export default Pricing;
