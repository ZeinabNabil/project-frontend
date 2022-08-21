import React, { useEffect } from "react";
import style from "../../css/Landing/Landing.module.css";
import Cards from "./Cards";
import {
  faFileLines,
  faLightbulb,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";
import logo from "../../images/logo.png";
import ReviewsCard from "./ReviewsCard";
import { Accordion } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllCourses } from "../../actions/course.action";
import LandingPicArea from "../Layout/LandingPicArea";
import aos from "aos";
import SvgDownWaves from "../SvgDownWaves";
import SvgUpWaves from "./../SvgUpWaves";
import { useTranslation } from "react-i18next";
const Landing = (props) => {
  const { t, i18n } = useTranslation();
  console.log(i18n);
  useEffect(() => {
    aos.init();
    props.getAllCourses();
  }, []);
  var renderContent;
  const { courses, loading } = props.course;
  if (courses === null || loading) {
    renderContent = `<h1>Loading</h1>`;
  } else {
    const computer = courses.courses.filter((course) => {
      return course.category === "دورات حاسوب";
    });
    const language = courses.courses.filter((course) => {
      return course.category === "دورات لغة";
    });
    renderContent = (
      <>
        <Section title="دورات الحـــــاسوب" courses={computer} />
        <Section title="دورات اللغـــــــــة" courses={language} />
      </>
    );
  }
  return (
    <div>
      {/* ------------------------------Start landing area---------------------------- */}
      <LandingPicArea header={t("instituteName")} text={t("instituteDesc")} />

      {/* ----------------------------Start Cards Section------------------------------- */}
      <section className={style.cardsSection}>
        <div className="container" style={{ width: "100%" }}>
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
              title={t("Specializedlec_Title")}
              text={t("Specializedlec_body")}
            />
            <Cards
              icon={faFileLines}
              title={t("placementtests_Title")}
              text={t("placementtests_body")}
            />
            <Cards
              icon={faLightbulb}
              title={t("Interactivecourses_Title")}
              text={t("Interactivecourses_body")}
            />
          </div>
          {/* <-------------------------------end calling card-----------------------------*/}
        </div>
      </section>
      {/* -------------------------------------------End Cards section--------------------------------------------  */}
      {/* --------------------------start similar sections (calling array of sections)---------------------------  */}
      <div className={style.viewcourses}>{renderContent}</div>
      <SvgDownWaves />
      {/*------------------------------end similar sections---------------------------------------*/}
      <div className={style.features_clients_container}>
        {/* ---------------------------------Start featuer section----------------------  */}
        <div className={style.features}>
          <div className={style.title}>{t("features_Title")}</div>
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
                          <div className={style.accordianHeader}>
                            {" "}
                            {t("accordion_vision_header")}
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                          {t("accordion_vision_body")}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="1"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>
                            {" "}
                            {t("accordion_message_header")}
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                          {t("accordion_message_body")}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="2"
                        className={style.accordianitem}
                      >
                        <Accordion.Header>
                          <div className={style.accordianHeader}>
                            {t("accordion_goals_header")}
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className={style.accordian_body}>
                          <ul>
                            <li>{t("accordion_goals_body")}</li>
                            <li>
                              العمل على التواصل مع التجارب المعاصرة في مجال
                              التدريب والاستفادة منها بما يتيح خدمة المتدربين
                              والهيئات على أفضل وجه
                            </li>
                            <li>
                              المساهمة في رفع كفاءة أفراد المجتمع وتنمية معارفهم
                              وقدراتهم من خلال تقديم عدد متنوع من برامج التدريب
                              التطبيقي ذات الجودة العالية
                            </li>
                            <li>
                              رفع مستويات الأداء المؤسسي والقدرة على المنافسة من
                              خلال توفير خدمات الاستشارات في مختلف التخصصات
                              للقطاعين العام والخاص
                            </li>
                            <li>
                              صناعة بيئة تعليمية وتدريبية سعيدة ومحفزة تتميز
                              بالمعرفة وتنمية الفكر الإبداعي والابتكاري
                            </li>
                            <li>
                              بناء شركات استراتيجية تسهم في خلق قيمة مضافة تحقق
                              مستهدفات الجهات المعنية
                            </li>
                            <li>
                              رفع المهارات والكفاءات بما استجد من مستحدثات وطرق
                              تعليم حديثة عن بعد
                            </li>
                            <li>
                              أن يتميز معهد اينوفيشن بالريادة وأن يكون واحد من
                              أفضل مؤسسات التدريب والتعليم على المستوى الإقليمي
                              والمحلي
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
                      <h2>{t("clients")}</h2>
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
      <SvgUpWaves />
      <div className={style.reviews}>
        <div className={style.title}>{t("reviews_Title")}</div>
        <div className={style.reviewscards}>
          <div className="row">
            <ReviewsCard
              text={t("review_body")}
              img={logo}
              username={t("review_username")}
              role={t("review_role")}
            />
            <ReviewsCard
              text={t("review_body")}
              img={logo}
              username={t("review_username")}
              role={t("review_role")}
            />
            <ReviewsCard
              text={t("review_body")}
              img={logo}
              username={t("review_username")}
              role={t("review_role")}
            />
            <ReviewsCard
              text={t("review_body")}
              img={logo}
              username={t("review_username")}
              role={t("review_role")}
            />
            <ReviewsCard
              text={t("review_body")}
              img={logo}
              username={t("review_username")}
              role={t("review_role")}
            />
            <ReviewsCard
              text={t("review_body")}
              img={logo}
              username={t("review_username")}
              role={t("review_role")}
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
