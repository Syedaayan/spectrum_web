import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const BlogDetails = () => {
  return (
    <Layout>
      <PageBanner pageName="Blog Details" />
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
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
                    Multiplayer Text Adventure Engine In Node Game
                    <br />
                    Engine Server Design Optimizing
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
                <div className="blog-details__text1">
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
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem
                  </p>
                </div>
                <div className="blockquote-box">
                  <blockquote>
                    <h3>
                      Smashing Podcast Episode With Paul Boag Conversion
                      Optimization Inspired Design Decisions
                    </h3>
                    <p>Bailey Dobson</p>
                  </blockquote>
                </div>
                <div className="blog-details__text2">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet
                  </p>
                </div>
                <div className="tag-social-share-box">
                  <div className="single-box">
                    <div className="title">
                      <h3>Popular Tags</h3>
                    </div>
                    <ul className="tag-list list-unstyled">
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">House</a>
                      </li>
                      <li>
                        <a href="#">Office</a>
                      </li>
                      <li>
                        <a href="#">Kitchen</a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-box">
                    <div className="title right">
                      <h3>Share :</h3>
                    </div>
                    <ul className="social-share list-unstyled">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-details__author-box">
                  <div className="blog-details__author-box-inner">
                    <div className="blog-details__author-img">
                      <img
                        src="assets/images/blog/blog-details__author-img.png"
                        alt="image"
                      />
                    </div>
                    <div className="blog-details__author-text-box">
                      <h3>Nathan George</h3>
                      <p>
                        Quis autem vel eum iure reprehenderit voluptate velit
                        esse quam molestiae consequatu dolorem eum fugiat quo
                        voluptas nulla pariano one rejects
                      </p>
                      <ul className="social-share list-unstyled">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fab fa-instagram"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-dribbble" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="blog-details__post">
                  {/*Start Blog Details Post Single*/}
                  <div className="blog-details__post-single">
                    <div className="blog-details__post-single-img">
                      <img
                        src="assets/images/blog/blog-details__post-img1.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="blog-details__post-single-text">
                      <h4>
                        <a href="#">
                          Build Seamless Spreadshet <br />
                          Import Experience
                        </a>
                      </h4>
                      <ul className="meta-info list-unstyled">
                        <li>
                          <a href="#">
                            <i className="fa fa-calendar" aria-hidden="true" />
                            25 May 2021
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*End Blog Details Post Single*/}
                  {/*Start Blog Details Post Single*/}
                  <div className="blog-details__post-single">
                    <div className="blog-details__post-single-img">
                      <img
                        src="assets/images/blog/blog-details__post-img2.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="blog-details__post-single-text">
                      <h4>
                        <a href="#">
                          Creating Online Environme
                          <br />
                          Work Well Older
                        </a>
                      </h4>
                      <ul className="meta-info list-unstyled">
                        <li>
                          <a href="#">
                            <i className="fa fa-calendar" aria-hidden="true" />
                            25 May 2021
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*End Blog Details Post Single*/}
                </div>
                {/*Start comment box*/}
                <div className="comment-box">
                  <div className="title">
                    <h3>Peopel Comments</h3>
                  </div>
                  <div className="outer-box">
                    <div className="row">
                      <div className="col-md-12">
                        {/*Start single comment*/}
                        <div className="single-comment">
                          <div className="single-comment-box">
                            <div className="img-holder">
                              <img
                                src="assets/images/blog/comment-img1.png"
                                alt="Awesome Image"
                              />
                            </div>
                            <div className="text-holder">
                              <div className="top">
                                <div className="name">
                                  <h3>Rosalina Kelian</h3>
                                </div>
                                <div className="date">
                                  <p>25 May 2021</p>
                                </div>
                              </div>
                              <div className="text">
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusant ium doloremque
                                  laudantium, totam rem aperiam,
                                </p>
                              </div>
                              <div className="reply">
                                <a href="#">
                                  Reply
                                  <span className="icon-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End single comment*/}
                        {/*Start single comment*/}
                        <div className="single-comment comment-reply">
                          <div className="single-comment-box">
                            <div className="img-holder">
                              <img
                                src="assets/images/blog/comment-img2.png"
                                alt="Awesome Image"
                              />
                            </div>
                            <div className="text-holder">
                              <div className="top">
                                <div className="name">
                                  <h3>Jeffrey T. Kelly</h3>
                                </div>
                                <div className="date">
                                  <p>25 May 2021</p>
                                </div>
                              </div>
                              <div className="text">
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam
                                </p>
                              </div>
                              <div className="reply">
                                <a href="#">
                                  Reply
                                  <span className="icon-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End single comment*/}
                        {/*Start single comment*/}
                        <div className="single-comment">
                          <div className="single-comment-box">
                            <div className="img-holder">
                              <img
                                src="assets/images/blog/comment-img3.png"
                                alt="Awesome Image"
                              />
                            </div>
                            <div className="text-holder">
                              <div className="top">
                                <div className="name">
                                  <h3>Richard B. Zellmer</h3>
                                </div>
                                <div className="date">
                                  <p>25 May 2021</p>
                                </div>
                              </div>
                              <div className="text">
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusant ium doloremque
                                  laudantium, totam rem aperiam,
                                </p>
                              </div>
                              <div className="reply">
                                <a href="#">
                                  Reply
                                  <span className="icon-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End single comment*/}
                      </div>
                    </div>
                  </div>
                </div>
                {/*End comment box*/}
                {/*Start add comment box*/}
                <div className="add-comment-box">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    id="add-comment-form"
                    action="#"
                  >
                    <div className="row">
                      <div className="title">
                        <h3>Leave A Reply</h3>
                      </div>
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="input-box">
                              <input
                                type="text"
                                name="fname"
                                defaultValue
                                placeholder="Your Full Name"
                                required
                              />
                              <div className="icon">
                                <span className="icon-user" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="input-box">
                              <input
                                type="email"
                                name="femail"
                                defaultValue
                                placeholder="Email Address "
                                required
                              />
                              <div className="icon">
                                <span className="icon-envelope" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="input-box">
                              <textarea
                                name="message"
                                placeholder="Write Message"
                                required
                                defaultValue={""}
                              />
                              <div className="icon">
                                <span className="fas fa-pen" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="button-box">
                              <button className="btn-one" type="submit">
                                <span className="thm-btn">
                                  Get Free Quote{" "}
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/*End add comment box*/}
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

export default BlogDetails;
