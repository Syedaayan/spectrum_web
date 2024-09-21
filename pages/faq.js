import { Accordion } from "react-bootstrap";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const Faq = () => {
  return (
    <Layout>
      <PageBanner pageName="FAQ" />
      <section className="faq-one">
        <div className="container">
          <div className="section-title">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Faq</h4>
            </div>
            <h2 className="section-title__title">
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="faq-one__content-box">
                <Accordion
                  className="accrodion-grp"
                  data-grp-name="faq-one-accrodion"
                  defaultActiveKey="1"
                >
                  {/*Start Faq One Single*/}
                  <div className="accrodion">
                    <Accordion.Toggle
                      eventKey="1"
                      as="div"
                      className="accrodion-title"
                    >
                      <h4>Optimize Progressive Web Apps Going Beyond</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="1"
                      as="div"
                      className="accrodion-content"
                    >
                      <div className="inner">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptatem accusantim dolomque laudantium totam rem
                          aperiam eaque quae abillo inventore veritatis etquasi
                          archcto beatae vitae dicta sunt explica boemo enim
                          ipsam tatem
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  {/* End Faq One Single*/}
                  {/*Start Faq One Single*/}
                  <div className="accrodion">
                    <Accordion.Toggle
                      as="div"
                      eventKey="2"
                      className="accrodion-title"
                    >
                      <h4>We Teach You How To Feel Better.</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="2"
                      as="div"
                      className="accrodion-content"
                    >
                      <div className="inner">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptatem accusantim dolomque laudantium totam rem
                          aperiam eaque quae abillo inventore veritatis etquasi
                          archcto beatae vitae dicta sunt explica boemo enim
                          ipsam tatem
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  {/* End Faq One Single*/}
                  {/*Start Faq One Single*/}
                  <div className="accrodion">
                    <Accordion.Toggle
                      as="div"
                      eventKey="3"
                      className="accrodion-title"
                    >
                      <h4>Feature Prioritizing Ways To Reduce Subjectivity</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="3"
                      as="div"
                      className="accrodion-content"
                    >
                      <div className="inner">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptatem accusantim dolomque laudantium totam rem
                          aperiam eaque quae abillo inventore veritatis etquasi
                          archcto beatae vitae dicta sunt explica boemo enim
                          ipsam tatem
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  {/* End Faq One Single*/}
                  {/*Start Faq One Single*/}
                  <div className="accrodion">
                    <Accordion.Toggle
                      as="div"
                      eventKey="4"
                      className="accrodion-title"
                    >
                      <h4>
                        Ethical Considerations Research Need For Training And
                        Review
                      </h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="4"
                      as="div"
                      className="accrodion-content"
                    >
                      <div className="inner">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptatem accusantim dolomque laudantium totam rem
                          aperiam eaque quae abillo inventore veritatis etquasi
                          archcto beatae vitae dicta sunt explica boemo enim
                          ipsam tatem
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  {/* End Faq One Single*/}
                  {/*Start Faq One Single*/}
                  <div className="accrodion">
                    <Accordion.Toggle
                      as="div"
                      eventKey="4"
                      className="accrodion-title"
                    >
                      <h4> Design Simple When You Have Complex Solution</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="4"
                      as="div"
                      className="accrodion-content"
                    >
                      <div className="inner">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptatem accusantim dolomque laudantium totam rem
                          aperiam eaque quae abillo inventore veritatis etquasi
                          archcto beatae vitae dicta sunt explica boemo enim
                          ipsam tatem
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  {/* End Faq One Single*/}
                  {/*Start Faq One Single*/}
                  <div className="accrodion">
                    <Accordion.Toggle
                      as="div"
                      eventKey="5"
                      className="accrodion-title"
                    >
                      <h4>
                        Designing An Attractive And Usable Data Importer For
                        Your App
                      </h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="5"
                      as="div"
                      className="accrodion-content"
                    >
                      <div className="inner">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptatem accusantim dolomque laudantium totam rem
                          aperiam eaque quae abillo inventore veritatis etquasi
                          archcto beatae vitae dicta sunt explica boemo enim
                          ipsam tatem
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  {/* End Faq One Single*/}
                  {/*Start Faq One Single*/}
                  <div className="accrodion last-chiled">
                    <Accordion.Toggle
                      as="div"
                      eventKey="6"
                      className="accrodion-title"
                    >
                      <h4>Experts Global Digital Accessibility Developments</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      eventKey="6"
                      as="div"
                      className="accrodion-content"
                    >
                      <div className="inner">
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptatem accusantim dolomque laudantium totam rem
                          aperiam eaque quae abillo inventore veritatis etquasi
                          archcto beatae vitae dicta sunt explica boemo enim
                          ipsam tatem
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  {/* End Faq One Single*/}
                </Accordion>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="faq-one__right">
                <div className="faq-one__right-img">
                  <img
                    src="assets/images/resources/faq-v1-img.jpg"
                    alt="image"
                  />
                  <div className="faq-one__right-img-overlay">
                    <div className="section-title">
                      <div className="section-title__tagline">
                        <span className="left" />
                        <h4>Get a Quote</h4>
                        <span className="right" />
                      </div>
                      <h2 className="section-title__title">
                        Get Ready Work
                        <br />
                        Together
                      </h2>
                    </div>
                    <div className="faq-one__right-btn">
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
        </div>
      </section>
      {/*Faq One End*/}
      {/*Form One Start*/}
      <section
        className="contact-form-one"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/contact-form-one-bg.png)",
        }}
      >
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Send Us Message</h4>
            </div>
            <h2 className="section-title__title">
              We’re Very Frendly Feel Free
              <br />
              To Contact With Us
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-form .select_one">
                <form
                  id="contact-form"
                  name="contact_form"
                  className="default-form2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="input-box">
                        <input
                          type="text"
                          name="form_name"
                          placeholder="Your Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="input-box">
                        <input
                          type="text"
                          name="form_phone"
                          placeholder="Phone  Number"
                        />
                        <div className="icon">
                          <span className="icon-phone" />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="input-box">
                        <input
                          type="email"
                          name="form_email"
                          placeholder="Email address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="input-box">
                        <input
                          type="text"
                          name="form_name"
                          placeholder="Website"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="input-box">
                        <select
                          className="dropdown bootstrap-select dropup border-0"
                          aria-label="Default select example"
                        >
                          <option selected>Subject</option>
                          <option value={1}>Rosalina D. William</option>
                          <option value={2}>Miranda H. Halim</option>
                          <option value={3}>Hilixer D. Browni</option>
                          <option value={4}>Yokolili Y. Yankee</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="input-box">
                        <select
                          className="dropdown bootstrap-select dropup border-0"
                          aria-label="Default select example"
                        >
                          <option selected>City</option>
                          <option value={1}>Rosalina D. William</option>
                          <option value={2}>Miranda H. Halim</option>
                          <option value={3}>Hilixer D. Browni</option>
                          <option value={4}>Yokolili Y. Yankee</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="input-box">
                        <textarea
                          name="form_message"
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="button-box text-center">
                        <button
                          className="btn-one gradient-bg-1"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
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

export default Faq;
