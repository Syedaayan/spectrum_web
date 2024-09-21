import Link from "next/dist/client/link";
import { About, Contact, Home, News, Pages, Services, Team } from "./Menu";
export const HeaderStyle1 = ({ open }) => {
  return (
    <header className="main-header main-header--one  clearfix">
      <div className="main-header-one__bottom">
        <div className="auto-container">
          <div className="main-header-one__bottom-inner clearfix">
            <nav className="main-menu main-menu--1">
              <div className="main-menu__inner">
                <div className="left">
                  <div className="logo-box1">
                    <div
                      className="logo-box1_bg"
                      style={{
                        backgroundImage:
                          "url(assets/images/pattern/logo-box1-bg.png)",
                      }}
                    ></div>

                    <Link href="/">
                      <a className="imgContainer">
                        <img src="assets/images/resources/THE SPECTRUM HIGH RESOLUTION LOGO 2 (1).png"  alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
                <a href="#" className="mobile-nav__toggler">
                  <i className="fa fa-bars"></i>
                </a>

                <div className="middle">
                  <ul className="main-menu__list">
                    <li className="dropdown current">
                      <a href="#">Home</a>
                      <ul>
                        <Home />
                      </ul>
                    </li>
                    <About />
                    <li className="dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <Services />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Team</a>
                      <ul>
                        <Team />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <Pages />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">News</a>
                      <ul>
                        <News />
                      </ul>
                    </li>
                    <Contact />
                  </ul>

                  <div className="search-box">
                    <a
                      href="#"
                      className="main-menu__search search-toggler icon-search"
                      onClick={() => open()}
                    ></a>
                  </div>
                </div>

                <div className="right">
                  <div className="main-menu__right">
                    <div className="phone_number">
                      <div className="icon">
                        <span className="icon-agenda"></span>
                      </div>
                      <div className="number">
                        <p>Phone Us</p>
                        <a href="tel:7766808080">7766808080</a>,
                        <a href="tel:9709227772"> 9709227772</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export const HeaderStyle2 = ({ open }) => {
  return (
    <header className="main-header main-header--two  clearfix">
      <div className="main-header-two__bottom">
        <div className="auto-container">
          <div className="main-header-two__bottom-inner clearfix">
            <nav className="main-menu main-menu--1">
              <div className="main-menu__inner">
                <div className="left">
                  <div className="logo-box2">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/resources/logo-2.png"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars" />
                  </a>
                  <ul className="main-menu__list">
                    <li className="dropdown current">
                      <a href="#">Home</a>
                      <ul>
                        <Home />
                      </ul>
                    </li>
                    <About />
                    <li className="dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <Services />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Team</a>
                      <ul>
                        <Team />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <Pages />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">News</a>
                      <ul>
                        <News />
                      </ul>
                    </li>
                    <Contact />
                  </ul>
                  <div className="search-box">
                    <a
                      href="#"
                      className="main-menu__search search-toggler icon-search"
                      onClick={() => open()}
                    ></a>
                  </div>
                </div>
                <div className="right">
                  <div className="main-menu__right">
                    <div className="phone_number">
                      <div className="icon">
                        <span className="icon-agenda" />
                      </div>
                      <div className="number">
                        <p>Phone Us</p>
                        <a href="tel:7766808080">7766808080</a>,
                        <a href="tel:9709227772"> 9709227772</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export const HeaderStyle3 = ({ open }) => {
  return (
    <header className="main-header main-header--three  clearfix">
      <div className="main-header-three__top">
        <div className="container">
          <div className="main-header-three__top-inner clearfix">
            <div className="main-header-three__top-left">
              <ul className="list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-phone-call" />
                  </div>
                  <div className="text">
                    <p>
                      Free Quote : <a href="tel:7766808080">7766808080</a>
                      <a href="tel:9709227772"> 9709227772</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-envelope" />
                  </div>
                  <div className="text">
                    <p>
                      Email Address :{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-clock" />
                  </div>
                  <div className="text">
                    <p>
                      Woking Hour : <span>09 am - 08 pm</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="main-header-three__top-right">
              <div className="search-box-two">
                <form method="post" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <input
                      type="search"
                      name="search"
                      placeholder="Search"
                      required
                    />
                    <button type="submit">
                      <i className="icon-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header-three__bottom">
        <div className="container">
          <div className="main-header-three__bottom-inner clearfix">
            <nav className="main-menu main-menu--1">
              <div className="main-menu__inner">
                <div className="left">
                  <div className="logo-box3">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/resources/logo-3.png"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars" />
                  </a>
                  <ul className="main-menu__list">
                    <li className="dropdown current">
                      <a href="#">Home</a>
                      <ul>
                        <Home />
                      </ul>
                    </li>
                    <About />
                    <li className="dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <Services />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Team</a>
                      <ul>
                        <Team />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <Pages />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">News</a>
                      <ul>
                        <News />
                      </ul>
                    </li>
                    <Contact />
                  </ul>
                </div>
                <div className="main-header-three__bottom_right">
                  <div className="main-menu__right">
                    <div className="btn-box">
                      <a href="#" className="thm-btn">
                        Free Consultation{" "}
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export const DefaultHeaderStyle = ({ open }) => {
  return (
    <header className="main-header main-header--three  clearfix">
      <div className="main-header-three__top main-header-four__top">
        <div className="auto-container">
          <div className="main-header-three__top-inner main-header-four__top-inner clearfix">
            <div className="main-header-three__top-left main-header-four__top-left">
              <ul className="list-unstyled">
                <li>
                  <div className="icon">
                    <span className="icon-phone-call" />
                  </div>
                  <div className="text">
                    <p>
                      Free Quote :<a href="tel:7766808080">7766808080</a>
                    </p>
                    <p>
                      <a href="tel:9709227772"> 9709227772</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-envelope" />
                  </div>
                  <div className="text">
                    <p>
                      Email Address :{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-clock" />
                  </div>
                  <div className="text">
                    <p>
                      Woking Hour : <span>09 am - 08 pm</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="main-header-three__top-right main-header-four__top-right">
              <div className="search-box-two">
                <span>Search</span>
                <a
                  href="#"
                  className="main-menu__search search-toggler icon-search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header-three__bottom main-header-four__bottom">
        <div className="auto-container">
          <div className="main-header-three__bottom-inner main-header-four__bottom-inner clearfix">
            <nav className="main-menu main-menu--1">
              <div className="main-menu__inner">
                <div className="left">
                  <div className="logo-box3 logo-box3--style2">
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/resources/logo-3.png"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars" />
                  </a>
                  <ul className="main-menu__list">
                    <li className="dropdown">
                      <a href="#">Home</a>
                      <ul>
                        <Home />
                      </ul>
                    </li>
                    <About />
                    <li className="dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <Services />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Team</a>
                      <ul>
                        <Team />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <Pages />
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">News</a>
                      <ul>
                        <News />
                      </ul>
                    </li>
                    <Contact />
                  </ul>
                </div>
                <div className="main-header-four__bottom_right">
                  <div className="main-menu__right">
                    <div className="btn-box">
                      <a href="#" className="thm-btn">
                        Free Consultation{" "}
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
