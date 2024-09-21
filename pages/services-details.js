import Head from "next/head";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const ServicesDetails = () => {
  return (
    <Layout>
      \*full banner comment\*
      <Head>
      <title> Cinema & Radio Advertising | OOH, Billboards & Hoardings in Jharkhand</title> 
      <meta name="og:description" content="Suggested Description	Find top-notch advertising solutions with The Spectrum Ads. We Provide Radio Advertising Ranchi, Hoardings in Jharkhand & Cinema Advertising in Bihar or OOH Odisha. Visit Now!"  />
        <meta name="og:keywords" content="Keywords	Billboards India, Radio Advertising Ranchi, Airport Advertisement Services Jharkhand, Airport Advertisement Services Ranchi, Hoardings in Jharkhand, Hoardings in Bihar, OOH Jharkhand, OOH Bihar, OOH Odisha, Digital Marketing in Jharkhand, Digital Marketing in Bihar, Cinema Advertising in Jharkhand, Cinema Advertising in Bihar, Billboards in Jharkhand" />

      </Head>
      <PageBanner pageName="services details" />
      <section className="services-details">
        <div className="container">
          <div className="row">
            {/*Start Services Details Sidebar*/}
            <div className="col-xl-4 col-lg-8">
              <div className="services-details__sidebar">
                <div
                  className="services-details__services-list-box wow fadeInUp animated"
                  data-wow-delay="0.0s"
                  data-wow-duration="1200ms"
                >
                  <h3 className="services-details__sidebar-title">
                    All Service List
                  </h3>
                  <ul className="services-details__services-list list-unstyled">
                    <li>
                      <a href="#">
                        Financial Planning{" "}
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Relationship Buildup{" "}
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Investement Planning{" "}
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Marketing Strategy{" "}
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Product Strategy{" "}
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="services-details__services-conatct-box wow fadeInUp animated"
                  data-wow-delay="0.1s"
                  data-wow-duration="1200ms"
                >
                  <h3 className="services-details__sidebar-title">
                    Conatct Us
                  </h3>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    id="review-form"
                    action="#"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="input-box">
                          <textarea
                            name="review"
                            placeholder="Message"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button className="conatct-one" type="submit">
                          <span className="thm-btn">
                            Send Message
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="services-details__services-brochures-box wow fadeInUp animated"
                  data-wow-delay="0.3s"
                  data-wow-duration="1200ms"
                >
                  <h2 className="services-details__sidebar-title">Brochures</h2>
                  <div className="brochures-btn">
                    <a href="#" className="button">
                      Download Doc
                      <span className="icon-download icon" />
                    </a>
                  </div>
                  <div className="brochures-btn">
                    <a href="#" className="button">
                      Download Pdf
                      <span className="icon-pdf-file icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*End Services Details Sidebar*/}
            {/*Start Services Details Content*/}
            <div className="col-xl-8">
              <div className="services-details-content">
                <div className="services-details__text-box1">
                  <h2>
                    Management Consulting and <br />
                    Business Strategy
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </div>
                <div className="services-details-img1">
                  <img
                    src="assets/images/resources/services-details-img1.jpg"
                    alt="image"
                  />
                </div>
                <div className="services-details__text-box2">
                  <h2>Realization Strategies</h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore
                  </p>
                  <ul className="services-details__text-box2-list list-unstyled">
                    <li>
                      <div className="icon">
                        <i className="fa fa-check-circle" aria-hidden="true" />
                      </div>
                      <div className="text">
                        <p>Static Innovations</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-check-circle" aria-hidden="true" />
                      </div>
                      <div className="text">
                        <p>Static Innovations</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-check-circle" aria-hidden="true" />
                      </div>
                      <div className="text">
                        <p>Static Innovations</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="services-details-img2">
                  <img
                    src="assets/images/resources/services-details-img2.jpg"
                    alt="image"
                  />
                </div>
                <div className="services-details__text-box3">
                  <p className="services-details__text-box3-text1">
                    Our strategy consulting team implements proven methodologies
                    with <br />
                    life sciences, consumer products, and retail companies that
                    transforms their business, drive growth, and facilitate{" "}
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
            </div>
            {/*End Services Details Content*/}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesDetails;
