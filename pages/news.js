import Link from "next/dist/client/link";
import Layout from "../src/layouts/Layout";
import PageBanner from '../src/layouts/PageBanner';

const News = () => {
  return (
    <Layout>
      <PageBanner pageName="Blog Gird" />
      <section className="blog-one">
        <div className="container">
          <div className="row">
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img1.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Evolving Program Manage
                        <br />
                        Office For Modern
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img2.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Design Decision With Bea
                        <br />
                        Feitler Unstoppable{" "}
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img3.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Pain-Free Workflow Issue
                        <br />
                        Reporting Resolution
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img4.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Data Onboarding Chall
                        <br />
                        For Software Products
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img5.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        We Google Analytics Helps
                        <br />
                        Developers Design
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img6.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Information And Inform
                        <br />
                        Architecture Picture
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img7.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Designers Can Help Restaur <br />
                        Move Into Experiences
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img8.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Right Kind Research Study
                        <br />
                        With Diamond Model
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
            {/*Start Single Blog One*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__single-img">
                  <img src="assets/images/blog/blog-v1-img9.jpg" alt="image" />
                  <div className="overlay-icon">
                    <Link href="/news-details">
                      <a>
                        <span className="icon-plus" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-one__single-text-box">
                  <h3 className="blog-one__single-title">
                    <Link href="/news-details">
                      <a>
                        Pain-Free Workflow Issue
                        <br />
                        Reporting Resolution
                      </a>
                    </Link>
                  </h3>
                  <p className="blog-one__single-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptam
                  </p>
                  <ul className="blog-one__meta-info list-unstyled">
                    <li>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 June 2021
                    </li>
                    <li>
                      <i className="fa fa-comments" aria-hidden="true" />
                      <a href="#">Com (05)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Single Blog One*/}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
