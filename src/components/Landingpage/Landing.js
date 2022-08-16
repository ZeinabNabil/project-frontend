import React, { useEffect } from 'react';
import style from '../../css/Landing/Landing.module.css';
import Cards from './Cards';
import {
  faFileLines,
  faLightbulb,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import Section from './Section';
import logo from '../../images/logo.png';
import ReviewsCard from './ReviewsCard';
import { Accordion } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllCourses } from '../../actions/course.action';
import LandingPicArea from '../Layout/LandingPicArea';
import aos from 'aos';
const Landing = (props) => {
  useEffect(() => {
    aos.init();
    props.getAllCourses();
  }, []);
  var renderContent;
  const { courses, loading } = props.course;
  if (courses === null || loading) {
    renderContent = `<h1>Loading</h1>`;
  } else {
    const ICDL = courses.courses.filter((course) => {
      return course.category === 'icdl';
    });
    const IELTS = courses.courses.filter((course) => {
      return course.category === 'ielts';
    });
    const EMSAT = courses.courses.filter((course) => {
      return course.category === 'emsat';
    });
    const management = courses.courses.filter((course) => {
      return course.category === 'management';
    });
    const computer = courses.courses.filter((course) => {
      return course.category === 'computer';
    });
    const language = courses.courses.filter((course) => {
      return course.category === 'language';
    });
    renderContent = (
      <>
        <Section title="EMSAT" courses={EMSAT} />
        <Section title="IELTS" courses={IELTS} />
        <Section title="ICDL" courses={ICDL} />
        <Section title="MANAGEMENT" courses={management} />
        <Section title="COMPUTER" courses={computer} />
        <Section title="LANGUAGE" courses={language} />
      </>
    );
  }
  return (
    <div>
      {/* ------------------------------Start landing area---------------------------- */}
      <LandingPicArea
        header="Innovation language institute for Training and Development"
        text="Accredited Institute for Languages, Vocational Training and
        Computer"
      />
      {/* ----------------------------Start Cards Section------------------------------- */}
      <section className={style.cardsSection}>
        <div className="container" style={{ width: '100%' }}>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            {/* <-------------------------------start calling card-----------------------------*/}
            <Cards
              icon={faUserGraduate}
              title="Specialized Lectures"
              text="In all areas, whether in language education, preparation for the Emsat exam or developing computer skills."
            />
            <Cards
              icon={faFileLines}
              title="Placement Tests"
              text="To first determine the level of the trainee and then evaluate his progress periodically during the levels of the training course"
            />
            <Cards
              icon={faLightbulb}
              title="Interactive Courses"
              text="It aims to develop the capabilities of the trainees and direct them to the right path"
            />
          </div>
          {/* <-------------------------------end calling card-----------------------------*/}
        </div>
      </section>
      {/* -------------------------------------------End Cards section--------------------------------------------  */}

      {/* --------------------------start similar sections (calling array of sections)---------------------------  */}
      <div className={style.viewcourses}>{renderContent}</div>
      {/*------------------------------end similar sections---------------------------------------*/}
      <div className={style.features_clients_container}>
        {/* ---------------------------------Start featuer section----------------------  */}
        <div className={style.features}>
          <div className={style.title}>Why you should choose our institute</div>
          <div className={style.featureselements}>
            <section>
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-6 col-md-12 col-sm-12 section-accordian "
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Accordion className={style.accordian}>
                      <Accordion.Item
                        eventKey="0"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>Vission</div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                          To occupy a leading position in the Gulf region and
                          the Middle East in the field of continuing education
                          and professional development.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="1"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>
                            The message
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                          Improving the quality of training and capacity
                          building, enabling individuals, public and private
                          sector institutions, and various groups of society to
                          develop positively and helping them to unleash
                          potential human energies, which leads to raising
                          competitiveness and achieving the highest levels of
                          individual and institutional performance through the
                          creation of knowledge awareness and the consolidation
                          of a culture of scientific research and innovation to
                          achieve global leadership
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="2"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>
                            Strategic goals
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                          <ul>
                            <li>
                              Focusing on the application of smart systems to
                              develop human capital in order to achieve global
                              leadership
                            </li>
                            <li>
                              Working on communicating with contemporary
                              experiences in the field of training and
                              benefiting from them in order to best serve
                              trainees and bodies
                            </li>
                            <li>
                              Contribute to raising the efficiency of community
                              members and developing their knowledge and
                              capabilities by providing a variety of
                              high-quality applied training programs
                            </li>
                            <li>
                              Raising levels of institutional performance and
                              competitiveness by providing consulting services
                              in various disciplines for the public and private
                              sectors
                            </li>
                            <li>
                              Creating a happy and stimulating educational and
                              training environment characterized by knowledge
                              and the development of creative and innovative
                              thought
                            </li>
                            <li>
                              Building strategic companies that contribute to
                              creating an added value that achieves the
                              objectives of the stakeholders
                            </li>
                            <li>
                              Raising skills and competencies with the latest
                              innovations and modern methods of distance
                              education
                            </li>
                            <li>
                              That the Ivan Ilyich Institute be a pioneer and be
                              one of the best training and education
                              institutions at the regional and local levels
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-5 col-md-12 col-sm-12 align-self-center">
                    <div className={style.logo}>
                      <img src={logo} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* --------------------------start client section-----------------------  */}
        <div className={style.clients}>
          <div className={style.clientelement}>
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 col-md-12 col-sm-12 section-pics">
                    <div
                      className={style.clientlogos}
                      style={{ borderRight: ' solid 2px #DDDDDD' }}
                    >
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className={style.imgs}>
                          <img src={logo} />
                          <img src={logo} />
                          <img src={logo} />
                          <img src={logo} />
                          <img src={logo} />
                          <img src={logo} />
                          <img src={logo} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className={style.imgs}>
                            <img src={logo} />
                            <img src={logo} />
                            <img src={logo} />
                            <img src={logo} />
                            <img src={logo} />
                            <img src={logo} />
                            <img src={logo} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-1"></div> */}
                  <div className="col-lg-3 col-md-12 col-sm-12 align-self-center">
                    <div className={style.ourclients}>
                      <h2> Our Clients</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* --------------------------End client section-----------------------  */}
      </div>
      {/* ---------------------------start reviews section---------------------  */}
      <div className={style.reviews}>
        <div className={style.title}>
          Reviews of trainees and visitors to the institute
        </div>
        <div className={style.reviewscards}>
          <div className="row">
            <ReviewsCard
              text="The course was one of the best steps I took in order to learn the English language, as the trainers at the Ivan Ilyich Institute are specialists and have a great way of communicating information"
              img={logo}
              username="Omar Soliman"
              role="Trainee in an English language course"
            />
            <ReviewsCard
              text="The course was one of the best steps I took in order to learn the English language, as the trainers at the Ivan Ilyich Institute are specialists and have a great way of communicating information"
              img={logo}
              username="Omar Soliman"
              role="Trainee in an English language course"
            />
            <ReviewsCard
              text="The course was one of the best steps I took in order to learn the English language, as the trainers at the Ivan Ilyich Institute are specialists and have a great way of communicating information"
              img={logo}
              username="Omar Soliman"
              role="Trainee in an English language course"
            />
            <ReviewsCard
              text="The course was one of the best steps I took in order to learn the English language, as the trainers at the Ivan Ilyich Institute are specialists and have a great way of communicating information"
              img={logo}
              username="Omar Soliman"
              role="Trainee in an English language course"
            />
            <ReviewsCard
              text="The course was one of the best steps I took in order to learn the English language, as the trainers at the Ivan Ilyich Institute are specialists and have a great way of communicating information"
              img={logo}
              username="Omar Soliman"
              role="Trainee in an English language course"
            />
            <ReviewsCard
              text="The course was one of the best steps I took in order to learn the English language, as the trainers at the Ivan Ilyich Institute are specialists and have a great way of communicating information"
              img={logo}
              username="Omar Soliman"
              role="Trainee in an English language course"
            />
          </div>
        </div>
      </div>
      {/* End reviews section  */}
    </div>
    // ----------------------End landing area---------------------------
  );
};
const mapStateToProps = (state) => ({
  course: state.course,
});
export default connect(mapStateToProps, { getAllCourses })(Landing);
