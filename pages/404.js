import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const Error = () => {
  return (
    <Layout>
      <PageBanner pageName="404" />
      <section className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__inner">
                <div
                  className="error-page__img wow slideInRight"
                  data-wow-delay="500ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="assets/images/resources/error-img.png"
                    alt="image"
                  />
                </div>
                <div
                  className="error-page__content text-center wow slideInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h2>OPPS!</h2>
                  <h3>This Page Are Can’t Be Found</h3>
                  <div className="error-page__btn">
                    <span className="thm-btn">
                      Go To Home
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Error;
