import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";

const CompanyHistory = () => {
  return (
    <Layout>
      <PageBanner pageName="Our History" />
      <section className="history-timeline">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">
              {`We're Committed to Build Your`} <br />
              Business Growth
            </h2>
            <p className="section-title__text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptem
              accusantium doloremu
              <br /> laudantium totam aperiam eaque inventore
            </p>
          </div>
          <div className="row">
            <div className="history-timeline__card">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <h2 className="history-timeline__year">1993</h2>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="history-timeline__content">
                    <h2 className="history-timeline__content-title">
                      We Founded Spectrum
                    </h2>
                    <p className="history-timeline__content-text">
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudantium totam rem aperiam eaque
                      quae abillo inventore veritatis et quasi architecto beatae
                    </p>
                    <div className="history-timeline__img">
                      <img
                        src="assets/images/resources/history-img1.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 order-box-2">
                  <div className="history-timeline__content style2">
                    <h2 className="history-timeline__content-title">
                      We Have Expert Team Member
                    </h2>
                    <p className="history-timeline__content-text">
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudantium totam rem aperiam eaque
                      quae abillo inventore veritatis et quasi architecto beatae
                    </p>
                    <div className="history-timeline__img style2">
                      <img
                        src="assets/images/resources/history-img2.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 order-box-1">
                  <h2 className="history-timeline__year style2">1997</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <h2 className="history-timeline__year">1998</h2>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="history-timeline__content">
                    <h2 className="history-timeline__content-title">
                      Spectrum Age’s
                    </h2>
                    <p className="history-timeline__content-text">
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudantium totam rem aperiam eaque
                      quae abillo inventore veritatis et quasi architecto beatae
                    </p>
                    <div className="history-timeline__img">
                      <img
                        src="assets/images/resources/history-img3.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 order-box-2">
                  <div className="history-timeline__content style2">
                    <h2 className="history-timeline__content-title">
                      Win 1st International Awards
                    </h2>
                    <p className="history-timeline__content-text">
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudantium totam rem aperiam eaque
                      quae abillo inventore veritatis et quasi architecto beatae
                    </p>
                    <div className="history-timeline__img style2">
                      <img
                        src="assets/images/resources/history-img4.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 order-box-1">
                  <h2 className="history-timeline__year style2">1997</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <h2 className="history-timeline__year">2005</h2>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="history-timeline__content">
                    <h2 className="history-timeline__content-title">
                      We Become a Leading Company
                    </h2>
                    <p className="history-timeline__content-text">
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudantium totam rem aperiam eaque
                      quae abillo inventore veritatis et quasi architecto beatae
                    </p>
                    <div className="history-timeline__img">
                      <img
                        src="assets/images/resources/history-img5.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 order-box-2">
                  <div className="history-timeline__content style2">
                    <h2 className="history-timeline__content-title">
                      Best Handyman Company In USA
                    </h2>
                    <p className="history-timeline__content-text">
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudantium totam rem aperiam eaque
                      quae abillo inventore veritatis et quasi architecto beatae
                    </p>
                    <div className="history-timeline__img style2">
                      <img
                        src="assets/images/resources/history-img6.jpg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 order-box-1">
                  <h2 className="history-timeline__year style2">2009</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyHistory;
