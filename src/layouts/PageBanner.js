import Link from "next/dist/client/link";
const PageBanner = ({ pageName }) => {
  return (
    <section
      className="page-header clearfix"
      style={{
        backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="page-header__inner clearfix">
          <h2
            className="wow slideInDown animated animated"
            data-wow-delay="0.3s"
            data-wow-duration="1500ms"
            style={{
              visibility: "visible",
              animationDuration: "1500ms",
              animationDelay: "0.3s",
              animationName: "slideInDown",
            }}
          >
            {pageName}
          </h2>
          <ul
            className="thm-breadcrumb list-unstyled wow slideInUp animated animated"
            data-wow-delay="0.3s"
            data-wow-duration="1500ms"
            style={{
              visibility: "visible",
              animationDuration: "1500ms",
              animationDelay: "0.3s",
              animationName: "slideInUp",
            }}
          >
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <i className="fa fa-angle-double-right" aria-hidden="true" />
            </li>
            <li>{pageName}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
