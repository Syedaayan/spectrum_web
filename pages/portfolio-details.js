import Link from "next/dist/client/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";
import { portfolioDetailsSlider } from "../src/sliderProps";

const PortfolioDetails = () => {
  return (
    <Layout>
      <PageBanner pageName="Portfolio Details" />
      <section className="portfolio-details">
        <div className="container">
          <div className="portfolio-details__gallery">
            <div className="row">
              <div className="col-lg-8">
                <figure>
                  <a
                    href="assets/images/project/portfolio-d-1-1.png"
                    className="img-popup"
                  >
                    <img
                      src="assets/images/project/portfolio-d-1-1.png"
                      alt="image"
                    />
                  </a>
                </figure>
              </div>
              {/* /.col-lg-8 */}
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <figure>
                      <a
                        href="assets/images/project/portfolio-d-1-2.png"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/project/portfolio-d-1-2.png"
                          alt="image"
                        />
                      </a>
                    </figure>
                  </div>
                  {/* /.col-md-6 */}
                  <div className="col-lg-12 col-md-6">
                    <figure>
                      <a
                        href="assets/images/project/portfolio-d-1-3.png"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/project/portfolio-d-1-3.png"
                          alt="image"
                        />
                      </a>
                    </figure>
                  </div>
                  {/* /.col-md-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.col-lg-4 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.portfolio-gallery */}
          <div className="row">
            <div className="col-lg-8">
              <div className="portfolio-details__content">
                <h3 className="portfolio-details__content__title">
                  Sales &amp; Marketing Analysis
                </h3>
                {/* /.portfolio-details__content__title */}
                <p className="letter-caps">
                  {" "}
                  Quis autem vel eum iure reprehenderit quiin voluptate velit
                  esse quam nihil molestiae consequatur, vel illum solorem eum
                  fugiat quo voluptas nulla pariatur laudantium totam rem
                  aperquae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quiluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.{" "}
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laud ium totam rem aperiam eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatvitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quiluptas sit
                  aspernatur aut odit aut fugit sed quia consequuntur magni
                  dolores eos qui ratione
                </p>
                <blockquote>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system expound the actual
                  teachings of great explorer of the truth, the master-builder
                  of human happiness
                </blockquote>
                <p>
                  Voluptatem accusantium doloremque laud totam rem aperiam eaque
                  quae abillo inventore veritatis et quasi architecto beatvitae
                  dicta sunt explicabo.
                </p>
              </div>
              {/* /.portfolio-details__content */}
            </div>
            {/* /.col-lg-8 */}
            <div className="col-lg-4">
              <div className="portfolio-details__info">
                <h3 className="portfolio-details__info__title">
                  Project Details
                </h3>
                {/* /.portfolio-details__info__title */}
                <ul className="list-unstyled">
                  <li>
                    <span>Clients</span>
                    <strong>Blaine D. Cotton</strong>
                  </li>
                  <li>
                    <span>Project</span>
                    <strong>IT Consulting</strong>
                  </li>
                  <li>
                    <span>Service</span>
                    <strong>Corporate</strong>
                  </li>
                  <li>
                    <span>Category</span>
                    <strong>Sales &amp; Marketing</strong>
                  </li>
                  <li>
                    <span>Date</span>
                    <strong>25 May 2021</strong>
                  </li>
                  <li>
                    <span>Share</span>
                    <p className="social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-behance" />
                      </a>
                    </p>
                  </li>
                </ul>
                {/* /.list-unstyled */}
              </div>
              {/* /.portfolio-details__info */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.portfolio-details */}
      <section className="related-portfolio">
        <div
          className="related-portfolio__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/feature-v1-bg.png)",
          }}
        />
        {/* /.related-portfolio__bg */}
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline">
              <span className="left" />
              <h4>Related Case</h4>
              <span className="right" />
            </div>
            <h2 className="section-title__title">
              We’re Committed to Creating <br /> Change That Matters
            </h2>
          </div>
          <Swiper
            {...portfolioDetailsSlider}
            className="swiper-container thm-swiper__slider"
          >
            <div className="swiper-wrapper">
              {/*Start Case Studies One Single*/}
              <SwiperSlide className="swiper-slide">
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
              </SwiperSlide>
              {/*End Case Studies One Single*/}
              {/*Start Case Studies One Single*/}
              <SwiperSlide className="swiper-slide">
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
              </SwiperSlide>
              {/*End Case Studies One Single*/}
              {/*Start Case Studies One Single*/}
              <SwiperSlide className="swiper-slide">
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
              </SwiperSlide>
              {/*End Case Studies One Single*/}
              {/*Start Case Studies One Single*/}
              <SwiperSlide className="swiper-slide">
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
              </SwiperSlide>
              {/*End Case Studies One Single*/}
              {/*Start Case Studies One Single*/}
              <SwiperSlide className="swiper-slide">
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
              </SwiperSlide>
              {/*End Case Studies One Single*/}
              {/*Start Case Studies One Single*/}
              <SwiperSlide className="swiper-slide">
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
              </SwiperSlide>
              {/*End Case Studies One Single*/}
            </div>
          </Swiper>
          {/* /.swiper-wrapper */}
        </div>
        {/* /.container */}
      </section>
    </Layout>
  );
};

export default PortfolioDetails;
