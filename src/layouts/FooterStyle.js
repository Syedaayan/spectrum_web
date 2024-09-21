import Link from "next/dist/client/link";
export const FooterStyle1 = () => (
  <footer className="footer-one">
    <div className="container">
      <div className="footer-one__top">
        <div
          className="footer-one__bg imgContainer"
          style={{
            backgroundImage: "assets/images/resources/THE SPECTRUM HIGH RESOLUTION LOGO 2 (1).png",
          }}
        />
        <div className="big-title">
          <h2>Footer</h2>
        </div>
        <div className="row">
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-2 col-lg-2 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="footer-widget__column footer-widget__overview mar-top">
              <h3 className="footer-widget__title">Overview</h3>
              <ul className="footer-widget__overview-list list-unstyled">
                <li>
                  <Link href="/">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Consultant
                  </a>
                </li>
                <li>
                  <Link href="/services-1">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Reviews
                  </a>
                </li>
                <li>
                  <Link href="/contact">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="footer-widget__column footer-widget__company mar-top">
              <h3 className="footer-widget__title">Company</h3>
              <ul className="footer-widget__company-list list-unstyled">
                <li>
                  <Link href="/about">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/company-history">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Company History
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/career">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Need a Career
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Working Process
                  </a>
                </li>
                <li>
                  <Link href="/news">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Blog Post
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="footer-widget__column footer-widget__newsletter mar-top">
              <h3 className="footer-widget__title">Newsletter</h3>
              <p className="footer-widget__newsletter-text">
                Quis autem veleum prehendet <br />
                voluptate velit esse
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="footer-widget__newsletter-form"
              >
                <div className="footer-widget__newsletter-input-box">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                  />
                </div>
                <div className="newsletter__button">
                  <button type="submit" className="footer-btn">
                    <span className="thm-btn">
                      Subscription
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp"
            data-wow-delay="0.7s"
          >
            <div className="footer-widget__column footer-widget__about">
              <div className="footer-widget__about-logo">
                <Link href="/">
                  <a className="imgContainer">
                    <img
                      src="assets/images/resources/THE SPECTRUM HIGH RESOLUTION LOGO 2 (1).png"
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
              <div className="footer-contact-info">
                <ul className="list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="icon-pin map" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <p>
                        HOUSE NO. C53, NEAR PATEL PARK, HARMU HOUSING COLONY,
                        RANCHI 834002
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-letter" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="mailto:info@templatepath.com">
                        supportconbiz@gmail.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-phone-call" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="tel:7766808080">7766808080</a>
                      <a href="tel:9709227772"> 9709227772</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*End Footer Widget Column*/}
        </div>
      </div>
      {/*Start Footer One Bottom*/}
      <div className="footer-one__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer-one__bottom-inner">
              <div className="footer-one__bottom-text text-center">
                <p>
                  ©2021 <a href="#">Spectrum</a>. All Rights Reserved, Design By
                  Webtend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Footer One Bottom*/}
    </div>
  </footer>
);
export const FooterStyle2 = () => (
  <footer className="footer-one footer-one--footer-two">
    <div
      className="footer-two__bg"
      style={{
        backgroundImage: "url(assets/images/backgrounds/footer-v2-bg.png)",
      }}
    ></div>
    <div className="big-title">
      <h2>Footer</h2>
    </div>
    <div className="container">
      <div className="footer-one__top">
        <div className="row">
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="footer-widget__column footer-widget__company mar-top">
              <h3 className="footer-widget__title">Company</h3>
              <ul className="footer-widget__company-list list-unstyled">
                <li>
                  <Link href="/about">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/company-history">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Company History
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/career">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Need a Career
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Working Process
                  </a>
                </li>
                <li>
                  <Link href="/news">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Blog Post
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="footer-widget__column footer-widget__lastest-news mar-top">
              <h3 className="footer-widget__title">Lastest News</h3>
              <ul className="list-unstyled">
                <li className="lastest-news__single">
                  <div className="lastest-news__single-img">
                    <img
                      src="assets/images/resources/lastest-news-img1.png"
                      alt="image"
                    />
                  </div>
                  <div className="lastest-news__single-title">
                    <h6>
                      <a href="#">
                        Good, Better, Untang
                        <br />
                        World Of Access
                      </a>
                    </h6>
                    <p>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 Feb 2021
                    </p>
                  </div>
                </li>
                <li className="lastest-news__single">
                  <div className="lastest-news__single-img">
                    <img
                      src="assets/images/resources/lastest-news-img2.png"
                      alt="image"
                    />
                  </div>
                  <div className="lastest-news__single-title">
                    <h6>
                      <a href="#">
                        Good, Better, Untang
                        <br />
                        World Of Access
                      </a>
                    </h6>
                    <p>
                      <i className="fa fa-calendar" aria-hidden="true" />
                      25 Feb 2021
                    </p>
                  </div>
                </li>
                <li className="footer-widget__lastest-news-btn">
                  <a href="#">
                    View More News{" "}
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="footer-widget__column footer-widget__newsletter mar-top">
              <h3 className="footer-widget__title">Newsletter</h3>
              <p className="footer-widget__newsletter-text">
                Quis autem veleum prehendet <br />
                voluptate velit esse
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="footer-widget__newsletter-form"
              >
                <div className="footer-widget__newsletter-input-box">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                  />
                </div>
                <div className="newsletter__button">
                  <button type="submit" className="footer-btn">
                    <span className="thm-btn">
                      Subscription
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.7s"
          >
            <div className="footer-widget__column footer-widget__about">
              <div className="footer-widget__about-logo">
                <Link href="/">
                <a className="imageContainer">
                    <img
                      src="assets/images/resources/THE SPECTRUM HIGH RESOLUTION LOGO 2 (1).png"
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
              <div className="footer-contact-info">
                <ul className="list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="icon-pin map" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <p>
                        256 Elizaberth Ave, Brooklyn,
                        <br />
                        CA, 90025
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-letter" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="mailto:info@templatepath.com">
                        supportconbiz@gmail.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-phone-call" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="tel:7766808080">7766808080</a>
                      <a href="tel:9709227772"> 9709227772</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*End Footer Widget Column*/}
        </div>
      </div>
      {/*Start Footer One Bottom*/}
      <div className="footer-one__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer-one__bottom-inner">
              <div className="footer-one__bottom-text text-center">
                <p>
                  ©2021 <a href="#">Spectrum</a>. All Rights Reserved, Design By
                  Webtend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Footer One Bottom*/}
    </div>
  </footer>
);
// export const FooterStyle3 = ()=> (

// )
export const DefaultFooterStyle = () => (
  <footer className="footer-one footer-one--footer-three">
    <div
      className="footer-two__bg style2 "
      style={{
        backgroundImage: "assets/images/resources/THE SPECTRUM HIGH RESOLUTION LOGO 2 (1).png",
      }}
    />
    <div className="container">
      <div className="footer-one__top">
        <div className="row">
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="footer-widget__column footer-widget__about">
              <div className="footer-widget__about-logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/resources/footer-v3-logo.png"
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
              <div className="footer-contact-info">
                <p className="footer-contact-info-text">
                  Sed ut perspiciatis unde omnis natus error sit voluptac
                  usanticm doloremque laudantium
                </p>
                <ul className="list-unstyled">
                  <li>
                    <div className="icon">
                      <i className="icon-pin map" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <p>
                        HOUSE NO. C53, NEAR PATEL PARK, HARMU HOUSING COLONY,
                        RANCHI 834002
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-letter" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="mailto:info@templatepath.com">
                        supportconbiz@gmail.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-phone-call" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <a href="tel:7766808080">7766808080</a>
                      <a href="tel:9709227772"> 9709227772</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="footer-widget__column footer-widget__company mar-top">
              <h3 className="footer-widget__title">Company</h3>
              <ul className="footer-widget__company-list list-unstyled">
                <li>
                  <Link href="/about">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/company-history">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Company History
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/career">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Need a Career
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Working Process
                  </a>
                </li>
                <li>
                  <Link href="/news">
                    <a>
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                      Blog Post
                    </a>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                    Setting &amp; Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="footer-widget__column footer-widget__newsletter mar-top">
              <h3 className="footer-widget__title">Newsletter</h3>
              <p className="footer-widget__newsletter-text">
                Quis autem veleum prehendet <br />
                voluptate velit esse
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="footer-widget__newsletter-form"
              >
                <div className="footer-widget__newsletter-input-box">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                  />
                </div>
                <div className="newsletter__button">
                  <button type="submit" className="footer-btn">
                    <span className="thm-btn">
                      Subscription
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*End Footer Widget Column*/}
          {/*Start Footer Widget Column*/}
          <div
            className="col-xl-3 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp"
            data-wow-delay="0.7s"
          >
            <div className="footer-widget__column footer-widget__instagram mar-top">
              <h3 className="footer-widget__title">Instagram</h3>
              <ul className="instagram list-unstyled">
                <li>
                  <div className="inner">
                    <div className="img-box">
                      <img
                        src="assets/images/resources/footer-instagram-img1.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-content">
                        <a
                          className="img-popup"
                          data-fancybox="gallery"
                          href="#"
                        >
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="img-box">
                      <img
                        src="assets/images/resources/footer-instagram-img2.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-content">
                        <a
                          className="img-popup"
                          data-fancybox="gallery"
                          href="#"
                        >
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="img-box">
                      <img
                        src="assets/images/resources/footer-instagram-img3.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-content">
                        <a
                          className="img-popup"
                          data-fancybox="gallery"
                          href="#"
                        >
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="img-box">
                      <img
                        src="assets/images/resources/footer-instagram-img4.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-content">
                        <a
                          className="img-popup"
                          data-fancybox="gallery"
                          href="#"
                        >
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="img-box">
                      <img
                        src="assets/images/resources/footer-instagram-img5.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-content">
                        <a
                          className="img-popup"
                          data-fancybox="gallery"
                          href="#"
                        >
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="img-box">
                      <img
                        src="assets/images/resources/footer-instagram-img6.jpg"
                        alt="Awesome Image"
                      />
                      <div className="overlay-content">
                        <a
                          className="img-popup"
                          data-fancybox="gallery"
                          href="#"
                        >
                          <i className="fab fa-instagram" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*End Footer Widget Column*/}
        </div>
      </div>
      {/*Start Footer One Bottom*/}
      <div className="footer-one__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer-one__bottom-inner">
              <div className="footer-one__bottom-text text-center">
                <p>
                  ©2021 <a href="#">Spectrum</a>. All Rights Reserved, Design By
                  Webtend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Footer One Bottom*/}
    </div>
  </footer>
);
