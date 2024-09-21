import Link from "next/dist/client/link";
import { useEffect } from "react";
import BrandSlider from "../src/components/slider/BrandSlider";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";
import { dataFilter } from "../src/utils";

const Portfolio = () => {
  useEffect(() => {
    dataFilter();
  }, []);
  return (
    <Layout>
      <PageBanner pageName="Portfolio Grid" />

      <section className="case-studies-one case-studies-one--portfolio-grid">
        <div className="container">
          <div className="section-title">
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
            {/*Start case-studies-one Top*/}
            <div className="case-studies-one--portfolio-grid__top">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="case-studies-one--portfolio-grid__menu-box">
                  <ul className="project-filter clearfix post-filter has-dynamic-filters-counter list-unstyled">
                    <li
                      data-filter=".filter-item"
                      className="active filter-item"
                    >
                      <span className="filter-text">Show All</span>
                    </li>
                    <li className="filter-item" data-filter=".business">
                      <span className="filter-text">Business</span>
                    </li>
                    <li className="filter-item" data-filter=".finance">
                      <span className="filter-text">Finance </span>
                    </li>
                    <li className="filter-item" data-filter=".marketing">
                      <span className="filter-text">Marketing</span>
                    </li>
                    <li className="filter-item" data-filter=".banking">
                      <span className="filter-text">Banking</span>
                    </li>
                    <li className="filter-item" data-filter=".development">
                      <span className="filter-text">Development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End case-studies-one Top*/}
          </div>
          <div className="row filter-layout masonary-layout">
            {/*Start Case Studies One Single*/}
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item development finance">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img5.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a>Marketing Planning</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
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
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item business development banking">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img6.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a> Program Management</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
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
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item marketing business finance">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img7.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a>IT Management</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
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
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item marketing business finance">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img8.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a>Growth Business</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
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
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item marketing business finance">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img9.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a>Co - Working Space</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
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
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item marketing business finance">
              <div className="case-studies-one__single">
                <div className="case-studies-one__single-img">
                  <img
                    src="assets/images/resources/case-studies-v1-img10.jpg"
                    alt="image"
                  />
                  <div className="overly-text">
                    <h3>
                      <Link href="/portfolio-details">
                        <a>IT Management</a>
                      </Link>
                    </h3>
                    <p>Digital business consulting Agency</p>
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
      {/*Partner One Start*/}
      <section className="partner-one partner-one--services">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Trusted Partners</h4>
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

export default Portfolio;
