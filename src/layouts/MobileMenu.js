import Link from "next/dist/client/link";
const MobileMenu = () => {
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__toggler" />
      {/* /.mobile-nav__overlay */}
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="fa fa-times" />
        </span>
        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img
                src="assets/images/resources/logo-1.png"
                width={155}
                alt="image"
              />
            </a>
          </Link>
        </div>
        {/* /.logo-box */}
        <div className="mobile-nav__container" />
        {/* /.mobile-nav__container */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="icon-phone-call" />
            <a href="mailto:needhelp@packageName__.com">needhelp@conbiz.com</a>
          </li>
          <li>
            <i className="icon-letter" />
            <a href="tel:666-888-0000">666 888 0000</a>
          </li>
        </ul>
        {/* /.mobile-nav__contact */}
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-twitter" />
            <a href="#" className="fab fa-facebook-square" />
            <a href="#" className="fab fa-pinterest-p" />
            <a href="#" className="fab fa-instagram" />
          </div>
          {/* /.mobile-nav__social */}
        </div>
        {/* /.mobile-nav__top */}
      </div>
      {/* /.mobile-nav__content */}
    </div>
  );
};

export default MobileMenu;
