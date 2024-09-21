import Link from "next/dist/client/link";
import { About, Contact, Home, News, Pages, Services, Team } from "./Menu";

export const DefaultSticky = ({ header }) => {
  return (
    <div
      className={`stricky-header stricky-header--style${
        header ? header : 4
      } stricked-menu main-menu`}
      id="header-sticky"
    >
      <div className="sticky-header__content">
        <div className="main-menu__inner">
          <div className="left">
            <div className={`logo-box${header ? header : 3}`}>
              <Link href="/index-2">
                <a>
                  <img
                    src={`assets/images/resources/logo-${
                      header ? header : 3
                    }.png`}
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
          <div className="main-header-three__bottom_right">
            <div className="main-menu__right">
              <div className="btn-box">
                <a href="#" className="thm-btn">
                  Free Consultation{" "}
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.sticky-header__content */}
    </div>
  );
};
export const Sticky1 = ({ open }) => {
  return (
    <div className="stricky-header stricked-menu main-menu" id="header-sticky">
      <div className="sticky-header__content">
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
                <a>
                  <img src="assets/images/resources/logo-1.png" alt="image" />
                </a>
              </Link>
            </div>
          </div>
          <a href="#" className="mobile-nav__toggler">
            <i className="fa fa-bars" />
          </a>
          <div className="middle">
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
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="search-box">
              <a
                href="#"
                onClick={() => open()}
                className="main-menu__search search-toggler icon-search"
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
      </div>
      {/* /.sticky-header__content */}
    </div>
  );
};
