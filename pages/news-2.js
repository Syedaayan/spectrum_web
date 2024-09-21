import { useState } from "react";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const News2 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="Blog Standard" />
      <section className="blog-standard-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-standard-one__left">
                {/*Start Single Blog Standard One*/}
                <div className="blog-standard-one__single">
                  <div className="blog-standard-one__single-img">
                    <img
                      src="assets/images/blog/blog-standard-one-img1.jpg"
                      alt="image"
                    />
                  </div>
                  <ul className="meta-info list-unstyled">
                    <li>
                      <a href="#">
                        <i className="fa fa-user" aria-hidden="true" />
                        Nichel Jhon
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" aria-hidden="true" />
                        25 May 2021
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" aria-hidden="true" />
                        Comments (05)
                      </a>
                    </li>
                  </ul>
                  <h2 className="blog-standard-one__single-title">
                    <a href="#">
                      Multiplayer Text Adventure Engine In Node Game
                      <br />
                      Engine Server Design Optimizing
                    </a>
                  </h2>
                  <p className="blog-standard-one__single-text">
                    But must explain to you how all this mistaken idea
                    denouncing pleasure and praising pain was born and will give
                    complete account of the system and expound
                  </p>
                  <div className="blog-standard-one__single-btn">
                    <a href="#" className="thm-btn">
                      Learn More
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
                {/*End Single Blog Standard One*/}
                {/*Start Single Blog Standard One*/}
                <div className="blog-standard-one__single">
                  <div className="blog-standard-one__single-img style2">
                    <img
                      src="assets/images/blog/blog-standard-one-img2.jpg"
                      alt="image"
                    />
                    <div className="video-box">
                      <a
                        className="video-popup wow zoomIn animated animated animated"
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
                  <ul className="meta-info list-unstyled">
                    <li>
                      <a href="#">
                        <i className="fa fa-user" aria-hidden="true" />
                        Nichel Jhon
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" aria-hidden="true" />
                        25 May 2021
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" aria-hidden="true" />
                        Comments (05)
                      </a>
                    </li>
                  </ul>
                  <h2 className="blog-standard-one__single-title">
                    <a href="#">
                      Multiplayer Text Adventure Engine In Node Game
                      <br />
                      Engine Server Design Optimizing
                    </a>
                  </h2>
                  <p className="blog-standard-one__single-text">
                    But must explain to you how all this mistaken idea
                    denouncing pleasure and praising pain was born and will give
                    complete account of the system and expound
                  </p>
                  <div className="blog-standard-one__single-btn">
                    <a href="#" className="thm-btn">
                      Learn More
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
                {/*End Single Blog Standard One*/}
                {/*Start Single Blog Standard One*/}
                <div className="blog-standard-one__single blog-standard-one__single-style2">
                  <ul className="meta-info list-unstyled">
                    <li>
                      <a href="#">
                        <i className="fa fa-user" aria-hidden="true" />
                        Nichel Jhon
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" aria-hidden="true" />
                        25 May 2021
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" aria-hidden="true" />
                        Comments (05)
                      </a>
                    </li>
                  </ul>
                  <h2 className="blog-standard-one__single-title">
                    <a href="#">
                      Postmortem Gutenberg Launch So We Can Embrace Gutenberg
                      Product
                    </a>
                  </h2>
                  <p className="blog-standard-one__single-text">
                    But must explain to you how all this mistaken idea
                    denouncing pleasure and praising pain was born and will give
                    complete account of the system and expound
                  </p>
                  <div className="blog-standard-one__single-btn">
                    <a href="#" className="thm-btn">
                      Learn More
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
                {/*End Single Blog Standard One*/}
                {/*Start Single Blog Standard One*/}
                <div
                  className="blog-standard-one__single blog-standard-one__single-style3"
                  style={{
                    backgroundImage:
                      "url(assets/images/blog/blog-standard-one-img3.jpg)",
                  }}
                >
                  <ul className="meta-info list-unstyled">
                    <li>
                      <a href="#">
                        <i className="fa fa-user" aria-hidden="true" />
                        Nichel Jhon
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" aria-hidden="true" />
                        25 May 2021
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-comments" aria-hidden="true" />
                        Comments (05)
                      </a>
                    </li>
                  </ul>
                  <h2 className="blog-standard-one__single-title">
                    <a href="#">
                      Should Add WordPress Maintenance Your <br />
                      Offering Anticipate User Favorite{" "}
                    </a>
                  </h2>
                  <div className="blog-standard-one__single-btn-style2">
                    <a href="#" className="thm-btn">
                      Learn More
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
                {/*End Single Blog Standard One*/}
              </div>
            </div>
            {/*Start Sidebar*/}
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div
                  className="sidebar-search-box wow fadeInUp animated animated animated"
                  data-wow-delay="0.1s"
                  data-wow-duration="1200ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1200ms",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="search-form"
                    action="#"
                  >
                    <input placeholder="Search" type="text" />
                    <button type="submit">
                      <i className="icon-search" />
                    </button>
                  </form>
                </div>
                {/*Start Single Sidebar*/}
                <div className="sidebar__single">
                  <div
                    className="sidebar__single-category wow fadeInUp animated"
                    data-wow-delay="0.1s"
                    data-wow-duration="1200ms"
                  >
                    <h3 className="sidebar__single-title">Category</h3>
                    <ul className="sidebar__single-category-list list-unstyled">
                      <li>
                        <a href="#">
                          Marketing Strategy
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Financial Consulting
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Sales &amp; Marketing
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Product Engineering
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Strategy Innovition
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Investment Planning
                          <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*End Single Sidebar*/}
                {/*Start Single Sidebar*/}
                <div className="sidebar__single">
                  <div
                    className="sidebar__single-latest-news wow fadeInUp animated"
                    data-wow-delay="0.3s"
                    data-wow-duration="1200ms"
                  >
                    <h3 className="sidebar__single-title">Latest News</h3>
                    <div className="sidebar__single-latest-news-single">
                      <div className="sidebar__single-latest-news-img">
                        <img
                          src="assets/images/blog/sidebar--latest-news-img1.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="sidebar__single-latest-news-text">
                        <h4>
                          <a href="#">
                            Build Seamless Spreadshet <br />
                            Import Experience
                          </a>
                        </h4>
                        <ul className="meta-info list-unstyled">
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              />
                              25 May 2021
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sidebar__single-latest-news-single">
                      <div className="sidebar__single-latest-news-img">
                        <img
                          src="assets/images/blog/sidebar--latest-news-img2.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="sidebar__single-latest-news-text">
                        <h4>
                          <a href="#">
                            Creating Online Environme <br />
                            Work Well Older
                          </a>
                        </h4>
                        <ul className="meta-info list-unstyled">
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              />
                              25 May 2021
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sidebar__single-latest-news-single">
                      <div className="sidebar__single-latest-news-img">
                        <img
                          src="assets/images/blog/sidebar--latest-news-img3.jpg"
                          alt="image"
                        />
                      </div>
                      <div className="sidebar__single-latest-news-text">
                        <h4>
                          <a href="#">
                            Signs Website Feels More <br />
                            Haunted House
                          </a>
                        </h4>
                        <ul className="meta-info list-unstyled">
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              />
                              25 May 2021
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Single Sidebar*/}
                {/*Start Single Sidebar*/}
                <div className="sidebar__single">
                  <div
                    className="sidebar__single-contact-box wow fadeInUp animated"
                    data-wow-delay="0.5s"
                    data-wow-duration="1200ms"
                  >
                    <div className="shape1">
                      <img
                        src="assets/images/shapes/sidebar-contact-box-shape1.png"
                        alt="image"
                      />
                    </div>
                    <div className="shape2">
                      <img
                        src="assets/images/shapes/sidebar-contact-box-shape2.png"
                        alt="image"
                      />
                    </div>
                    <h2>
                      Looking For <br />
                      Professional <br />
                      Agency ?
                    </h2>
                    <div className="sidebar__single-contact-box-btn">
                      <a href="#" className="thm-btn">
                        Contact Us
                        <i className="fa fa-chevron-right" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="sidebar__single-contact-box-img">
                      <img
                        src="assets/images/blog/blog-sidebar-img1.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                {/*End Single Sidebar*/}
                {/*Start Single Sidebar*/}
                <div className="sidebar__single">
                  <div
                    className="sidebar__single-popular-tags wow fadeInUp animated"
                    data-wow-delay="0.7s"
                    data-wow-duration="1200ms"
                  >
                    <h3 className="sidebar__single-title">Popular Tags</h3>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Corporate</a>
                      </li>
                      <li>
                        <a href="#">HTML</a>
                      </li>
                      <li>
                        <a href="#">Art</a>
                      </li>
                      <li>
                        <a href="#">Finance</a>
                      </li>
                      <li>
                        <a href="#">Investment</a>
                      </li>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                      <li>
                        <a href="#">Coach</a>
                      </li>
                      <li>
                        <a href="#">Planing</a>
                      </li>
                      <li>
                        <a href="#">Creative</a>
                      </li>
                      <li>
                        <a href="#">Health</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*End Single Sidebar*/}
              </div>
            </div>
            {/*End Sidebar*/}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News2;
