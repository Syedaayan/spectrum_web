import dynamic from 'next/dynamic';
import { useEffect } from "react";
import Layout from "../src/layouts/Layout";
import PageBanner from "../src/layouts/PageBanner";
 
const Counter= dynamic(() => import('../src/components/Counter'), {
  ssr: false,
}) 

const TeamDetails = () => {
  useEffect(() => {
    var EasyPieChart = require("easy-pie-chart");
    var element = document.querySelectorAll(`.graph-outer`);
    element.forEach((el) => {
      let size = el.getAttribute("data-size");
      let percent = el.getAttribute("data-percent");
      new EasyPieChart(el, {
        easing: "easeOut",
        delay: 3000,
        scaleColor: false,
        lineWidth: 9,
        animate: 1000,
        size: size ? size : 120,
        percent: percent ? percent : 89,
        barColor: "#f94d1c",
      });
    });
  }, []);
  return (
    <Layout>
      <PageBanner pageName="team details" />
      <section className="team-details-one">
        <div className="container">
          <div className="row">
            {/*Start Team Details One Left*/}
            <div className="col-xl-6">
              <div className="team-details-one__left">
                <div className="team-details-one__left-img">
                  <img
                    src="assets/images/team/team-details-one-img1.jpg"
                    alt="image"
                  />
                </div>
                <div className="team-details-one__left-title text-center">
                  <h2>
                    <a href="#">Robert M. Cashin</a>
                  </h2>
                  <p>Senior Marketing Officer</p>
                  <ul className="social-icon list-unstyled">
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
                        <i className="fab fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-behance" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Team Details One Left*/}
            {/*Start Team Details One Right*/}
            <div className="col-xl-6">
              <div className="team-details-one__right">
                <div className="team-details-one__right-top-text">
                  <h2>Information</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusant doloremque laudantium totam rem aperiam,
                    eaque ipsa quae ab illo inventore verit quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspe aut odit aut fugit sed
                    quia consequuntur
                  </p>
                </div>
                <div className="team-details-one__right-bottom">
                  <div className="title">
                    <h3>Best Skills</h3>
                    <p>
                      Accusant doloremque laudantium totam aperiam eaque ipsa
                      quae abillo inventore verite
                    </p>
                  </div>
                  <div className="progress-box">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="progress-block">
                          <div className="inner-box style2">
                            <div
                              className="graph-outer"
                              data-size={130}
                              data-percent={78}
                            >
                              <div className="inner-text count-box">
                                <Counter end={78} />
                                <span className="count-Parsent">%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="progress-block style2">
                          <div className="inner-box">
                            <div
                              className="graph-outer"
                              data-size={130}
                              data-linecap="normal"
                              data-percent={90}
                            >
                              <div className="inner-text count-box">
                                <Counter end={90} />
                                <span className="count-Parsent">%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Team Details One Right*/}
          </div>
        </div>
      </section>
      {/*Team Details One End*/}
      {/*Why Choose One Start*/}
      <section className="why-choose-one why-choose-one-team-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-choose-one__content">
                <div className="why-choose-one__content-top">
                  <h2>How Can Help You</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusant doloremque laudantium totam aperi eaque
                    ipsa quae nventore veritquasi architecto beatae
                  </p>
                </div>
                <ul className="why-choose-one__list list-unstyled">
                  <li className="why-choose-one__list-single">
                    <div className="icon">
                      <i className="fa fa-check" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <h3>Static Innovations</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error volupte
                        accusantium doloremu laudantium totam
                      </p>
                    </div>
                  </li>
                  <li className="why-choose-one__list-single">
                    <div className="icon">
                      <i className="fa fa-check" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <h3>Consulting &amp; Advisory</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error volupte
                        accusantium doloremu laudantium totam
                      </p>
                    </div>
                  </li>
                  <li className="why-choose-one__list-single">
                    <div className="icon">
                      <i className="fa fa-check" aria-hidden="true" />
                    </div>
                    <div className="text">
                      <h3>Turnaround Situations</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error volupte
                        accusantium doloremu laudantium totam
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-6 wow slideInRight"
              data-wow-delay="500ms"
              data-wow-duration="2500ms"
            >
              <div className="why-choose-one__img">
                <img
                  src="assets/images/team/team-details-img2.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamDetails;
