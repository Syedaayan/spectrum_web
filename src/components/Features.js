const Features = () => {
  return (
    <section className="features-one features-one--features-five clearfix">
      <div className="container">
        <div className="row">
          {/*Start Single Features One */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              className="features-one__single wow fadeInLeft animated animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="features-one__single-left">
                <div className="features-one__single-left-icon">
                  <img
                    src="assets/images/icon/features-v1-icon1.png"
                    alt="image"
                  />
                </div>
                <div className="features-one__single-left-text">
                  <h4>
                    <a href="#">
                      Guide to Becoming a Digital
                      <br />
                      First Organization
                    </a>
                  </h4>
                </div>
              </div>
              <div className="features-one__single-right">
                <div className="features-one__single-right-btn">
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Features One */}
          {/*Start Single Features One */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              className="features-one__single wow fadeInRight animated animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="features-one__single-left">
                <div className="features-one__single-left-icon">
                  <img
                    src="assets/images/icon/features-v1-icon2.png"
                    alt="image"
                  />
                </div>
                <div className="features-one__single-left-text">
                  <h4>
                    <a href="#">
                      We’re Committed to Creating
                      <br />
                      Change That Matters
                    </a>
                  </h4>
                </div>
              </div>
              <div className="features-one__single-right">
                <div className="features-one__single-right-btn">
                  <a href="#">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Features One */}
        </div>
      </div>
    </section>
  );
};

export default Features;
