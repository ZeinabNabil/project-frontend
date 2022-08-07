import React from "react";
import style from "../../css/Layout/Landing.module.css";
import Cards from "./Cards";
import {
  faFileLines,
  faFolderPlus,
  faHeartPulse,
  faLaptopMedical,
  faLightbulb,
  faUserDoctor,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import cardimg from "../../images/IELTS.jpg";
import CoursesCard from "./Coursescard";
import Section from "./Section";
import logo from "../../images/logo.png";
import ReviewsCard from "./ReviewsCard";
import { Accordion } from "react-bootstrap";

const Landing = () => {
  const sections = [
    {
      title: "Language Courses",
      card: [
        {
          // img: { cardimg },
          cardtitle: "IELTS course",
          text: "Preparatory course for the IELTS exam",
        },
      ],
    },
    {
      title: "Language Courses",
      card: [
        {
          // img: { cardimg },
          cardtitle: "IELTS course",
          text: "Preparatory course for the IELTS exam",
        },
      ],
    },
    {
      title: "Language Courses",
      card: [
        {
          // img: { cardimg },
          cardtitle: "IELTS course",
          text: "Preparatory course for the IELTS exam",
        },
      ],
    },
  ];
  const renderedSections = sections.map((section) => {
    return <Section title={section.title} cards={section.card} />;
  });

  return (
    <div>
      {/* ------------------------------Start landing area---------------------------- */}
      <div className={style.landingArea}>
        {/* ---------------------------------Website name-----------------------------------*/}
        <div className={style.siteName}>
          <div className="container">
            <div className="row">
              <div className=" col-lg-12 col-md-12 col-sm-12">
                <h1>
                  Innovation language institute for Training and Development
                </h1>
                <p>
                  Accredited Institute for Languages, Vocational Training and
                  Computer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------Start Cards Section------------------------------- */}
      <section className={style.cardsSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* <-------------------------------start calling card-----------------------------*/}
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className={style.card}>
                    <Cards
                      icon={faUserGraduate}
                      title="Specialized Lectures"
                      text="In all areas, whether in language education, preparation for the Emsat exam or developing computer skills."
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className={style.card}>
                    <Cards
                      icon={faFileLines}
                      title="Placement Tests"
                      text="The pulse is a bulge of an artery from waves of blood that course through the blood vessels each time the heart beats. The pulse is often taken at the wrist to estimate the heart rate"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className={style.card}>
                    <Cards
                      icon={faLightbulb}
                      title="Interactive Courses"
                      text="e-health is an emerging field in the intersection of medical informatics, public health and business, referring to health services and information delivered or enhanced through the Internet and related technologies."
                    />
                  </div>
                </div>
                {/* <-------------------------------end calling card-----------------------------*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------------------------------End Cards section--------------------------------------------  */}

      {/* --------------------------start similar sections (calling array of sections)---------------------------  */}
      {renderedSections}
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
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Accordion className={style.accordian}>
                      <Accordion.Item
                        eventKey="0"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>Vission</div>
                        </Accordion.Header>
                        <Accordion.Body>
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
                        <Accordion.Body>
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
                        <Accordion.Body>
                          strategic goals Focusing on the application of smart
                          systems to develop human capital in order to achieve
                          global leadership Working on communicating with
                          contemporary experiences in the field of training and
                          benefiting from them in order to best serve trainees
                          and bodies Contribute to raising the efficiency of
                          community members and developing their knowledge and
                          capabilities by providing a variety of high-quality
                          applied training programs Raising levels of
                          institutional performance and competitiveness by
                          providing consulting services in various disciplines
                          for the public and private sectors Creating a happy
                          and stimulating educational and training environment
                          characterized by knowledge and the development of
                          creative and innovative thought Building strategic
                          companies that contribute to creating an added value
                          that achieves the objectives of the stakeholders
                          Raising skills and competencies with the latest
                          innovations and modern methods of distance education
                          That the Ivan Ilyich Institute be a pioneer and be one
                          of the best training and education institutions at the
                          regional and local levels
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
                      style={{ borderRight: " solid 2px #DDDDDD" }}
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

export default Landing;

{
  /* <div className={style.langCourses}>
        <div className={style.title}>Language Courses</div>
        <CoursesCard
          img={cardimg}
          cardtitle="IELTS course"
          text="Preparatory course for the IELTS exam"
        />
      </div> */
}
{
  /* <div className={style.traincourses}>
        <div className={style.title} style={{ marginTop: "40px" }}>
          Computer training courses{" "}
        </div>
      </div> */
}
