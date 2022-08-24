import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

// style
import style from "../../css/AboutUs/Aboutus.module.css";
import "swiper/css";
import "swiper/css/pagination";

// Icons
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import founderImg from "../../images/login-register.png";
import rootIcon from "../../images/gm.png";
import businessDevIcom from "../../images/Business-Development.png";
import departmentsIcon from "../../images/Departments.png";
import trainingIcon from "../../images/Training.png";
import qualityIcon from "../../images/Quality.png";
import marketingIcon from "../../images/Marketing.png";
import hrIcon from "../../images/hr.png";
import financialIcon from "../../images/Financial.png";
import womanImg from "../../images/woman.png";
import manImg from "../../images/man.png";

// Components
import AboutUsCard from "./AboutUsCard";
import CardContent from "./CardContent";
import TeamNode from "./TeamNode";
import Clients from "./Clients";
import SvgDownWaves from "../SvgDownWaves";
import SvgUpWaves from "../SvgUpWaves";
import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";

const AboutUs = () => {
  const cards = [
    {
      title: "Vision",
      text: "To be at the forefront in the Gulf region and the Middle East in the field of continuing education and professional development",
    },
    {
      title: "The message",
      text: "Improving the quality of training and capacity building, enabling individuals, public and private sector institutions, and various groups of society to develop positively and helping them to unleash potential human energies, which leads to raising competitiveness and achieving the highest levels of individual and institutional performance through the creation of knowledge awareness and the consolidation of a culture of scientific research and innovation to achieve global leadership.",
    },
  ];

  const detailsAboutInst = [
    {
      number: "+7K",
      name: "Site visitors",
    },
    {
      number: "+12",
      name: "Training course",
    },
    {
      number: "+400",
      name: "trainee",
    },
    {
      number: "+15",
      name: "lecturer",
    },
  ];

  const goals = [
    {
      title: "strategic goals",
      text: [
        "Focusing on the application of smart systems to develop human capital in order to achieve global leadership",
        "Working on communicating with contemporary experiences in the field of training and benefiting from them in order to best serve trainees and bodies",
        "Contribute to raising the efficiency of community members and developing their knowledge and capabilities by providing a variety of high-quality applied training programs",
        "Raising levels of institutional performance and competitiveness by providing consulting services in various disciplines for the public and private sectors",
        "Creating a happy and stimulating educational and training environment characterized by knowledge and the development of creative and innovative thought",
        "Building strategic companies that contribute to creating an added value that achieves the objectives of the stakeholders",
        "Raising skills and competencies with the latest innovations and modern methods of distance education",
        "That the Ivan Ilyich Institute be a pioneer and be one of the best training and education institutions at the regional and local levels",
      ],
      colLg: 12,
    },
    {
      title: "Value",
      text: [
        "Happy customers | Strengthening partnerships.",
        "Scientific Passion | Knowledge and innovation.",
        "Respect and tolerance | Perseverance and perseverance.",
        "Global Leadership | Professional transparency.",
        "Loyalty and belonging.",
      ],
      colLg: 6,
    },
    {
      title: "Consulting Services",
      text: [
        "Qualifying individuals and institutions to obtain the ISO certificate.",
        "Analysis, evaluation, classification and description of jobs.",
        "Preparing organizational structures for companies and institutions and formulating strategies.",
        "Evaluate current strategies and develop new ones.",
        "Measuring the capabilities and competencies of employees and identifying areas for development.",
        "Setting and developing institutional performance appraisal programs.",
      ],
      colLg: 6,
    },
  ];

  const childNodes = [
    {
      icon: trainingIcon,
      header: "Training & Program Planning",
      subHeader: "Training and program planning",
    },
    {
      icon: qualityIcon,
      header: "Quality Management",
      subHeader: "Performance evaluation and quality assurance",
    },
    {
      icon: marketingIcon,
      header: "Marketing",
      subHeader: "Marketing and Communication",
    },
    {
      icon: hrIcon,
      header: "HR",
      subHeader: "hr",
    },
    {
      icon: financialIcon,
      header: "Financial Affairs",
      subHeader: "Financial Affairs",
    },
  ];

  const opinions = [
    {
      img: manImg,
      text: "I recommended this institute for vocational training, as after i finished the secretarial course, i signed up for another course in the same field.",
      name: "Mahmoud Mohammed",
      trainingName:
        "Trainee in a training course for adminstrative and secretarial tasks",
    },
    {
      img: womanImg,
      text: "Even Bary Institute is considered one of the best current institutes in terms of training and teaching different languages, especially as it includes a selection of specialists in training different languages",
      name: "Fatima Al Shamsi",
      trainingName: "Trainee in turkish language course",
    },
    {
      img: manImg,
      text: "The course is very useful, and the lecturer has a lot of experience in this field, as i passed the IELTS exam and got the degree required for me continue my university studies",
      name: "Ahmed Al Kaabi",
      trainingName: "Trainee in IELTS preparation course",
    },
    {
      img: womanImg,
      text: "One of the best institutes in the UAE, the treatment is very classy, and all the teachers stay with the students.",
      name: "Shahd Ibrahim",
      trainingName: "Trainee in a preparatory course for the EMSAT exam",
    },
  ];

  const clients = [
    founderImg,
    rootIcon,
    businessDevIcom,
    departmentsIcon,
    trainingIcon,
    qualityIcon,
    marketingIcon,
    hrIcon,
    financialIcon,
    womanImg,
    manImg,
  ];
  return (
    <div className={style.about_us}>
      {/* Start first section */}
      <div className={style.who_are_we}>
        <h1>Who are we</h1>
        <p>Download the institute's profile and ISO certificate to view</p>
        <button>ISO Certification</button>
      </div>
      {/* End first section */}
      {/* Start second section */}
      <div className={`${style.section_container} container`}>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className={style.img_container}>
              <img
                className={style.founder_img}
                src={founderImg}
                alt="Founder image"
              />
            </div>
          </div>
          <div className="col-lg-9 col-md-6 col-sm-12">
            <div className={style.founder_content}>
              <h3>Founder's word</h3>
              <span>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </span>
              <p>
                The rapid successive changes in our world and the contents of
                the UAE Vision 2030; Urgent necessities are imposed on us to
                review, update, develop, and adapt academic and professional
                programs, in order to ensure continuity of excellence and keep
                pace with challenges in the labor markets locally and
                regionally. Encouraging the faculty to adopt modern teaching
                methods, to develop critical and creative thinking, and to
                develop the ability to solve problems and make decisions through
                the new tools of the age.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <p className={style.founder_word_p}>
              The Ivan Ilyich Institute works to support, develop and meet the
              needs of the Emirati society, as we seek to study its needs,
              individuals and institutions, and seek to advance their scientific
              and technical capabilities, build the capacity of trainees and
              develop their knowledge and skills, as well as lifelong education,
              both on a personal and professional level, because education is
              the main engine for the advancement of society. We strive to
              provide general and specialized training programs that meet the
              actual training needs of the community to provide the opportunity
              for the largest number of community members to benefit from the
              available expertise and experiences. The Institute seeks, through
              the programs and training courses it offers, to develop the
              necessary skills and expertise and to provide a supportive and
              encouraging environment, both in theory and practice. Since its
              establishment, the Institute has been keen to design and implement
              high-quality special training programs and workshops according to
              the actual needs of the community. These programs have gained a
              great reputation, which is reflected in the increased demand from
              individuals and institutions to provide more of them. The
              Institute also keeps abreast of everything new in the field of
              computers, languages ​​and professional and administrative
              development courses, as it holds courses in various academic,
              scientific and technical fields in an effort to enrich the
              scientific and knowledge output of the trainees and supply the
              local market with qualified hands with scientific and technical
              competence investing in the capabilities, energies and qualified
              academic and technical cadres available at the Institute Which
              contributes to improving their job and professional performance.
              We hope to be among those who achieve leadership in this field,
              which we seek to achieve and embody on the ground. The Institute
              also keeps abreast of everything new in the field of computers,
              languages ​​and professional and administrative development
              courses, as it holds courses in various academic, scientific and
              technical fields in an effort to enrich the scientific and
              knowledge output of the trainees and supply the local market with
              qualified hands with scientific and technical competence investing
              in the capabilities, energies and qualified academic and technical
              cadres available at the Institute Which contributes to improving
              their job and professional performance. We hope to be among those
              who achieve leadership in this field, which we seek to achieve and
              embody on the ground. The Institute also keeps abreast of
              everything new in the field of computers, languages ​​and
              professional and administrative development courses, as it holds
              courses in various academic, scientific and technical fields in an
              effort to enrich the scientific and knowledge output of the
              trainees and supply the local market with qualified hands with
              scientific and technical competence investing in the capabilities,
              energies and qualified academic and technical cadres available at
              the Institute Which contributes to improving their job and
              professional performance. We hope to be among those who achieve
              leadership in this field, which we seek to achieve and embody on
              the ground.
            </p>
            <p className={style.founder_word_p}>
              We ask God Almighty to crown the efforts made with success and
              payment.
            </p>
          </div>
          <div className="col-lg-12">
            <div className={style.end_of_content}>
              <p>Prof. Dr. Wafaa Rifaat Al-Bassiouni (General Manager)</p>
            </div>
          </div>
        </div>
      </div>
      {/* End second section */}
      {/* Start third section */}
      <SvgUpWaves />
      <div className={style.gray_section}>
        <div className={`container`}>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <AboutUsCard cards={cards} />
            </div>
            <div className="col-lg-6">
              <div className={style.imgs_container}>
                <div className="row" style={{ height: "100%" }}>
                  <div className="col-lg-6">
                    <div
                      className={`${style.img_container} ${style.first_img}`}
                    >
                      <img src={founderImg} alt="photo" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={style.img_container}>
                      <img src={founderImg} alt="photo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SvgDownWaves />
      {/* End third section */}
      {/* Start fourth section */}
      <div className={`${style.section_container} container`}>
        <div className={style.section_title}>
          <h2>Details about the institute</h2>
        </div>
        <div className="row">
          {detailsAboutInst.map((detail, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className={style.section_content}>
                <span>{detail.number}</span>
                <span>{detail.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End fourth section */}
      {/* Start fifth section */}
      <SvgUpWaves />
      <div className={style.gray_section}>
        <div className={`container`}>
          <div style={{ height: "100%" }}>
            <div className={`${style.card} card`}>
              <div className={`${style.card_body} card-body`}>
                <div className="row">
                  {goals.map((goal) => (
                    <CardContent card={goal} col={true} colLg={goal.colLg} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SvgDownWaves />
      {/* End fifth section */}
      {/* Start sixth section */}
      <div className={`${style.section_container} container`}>
        <div className={style.section_title}>
          <h2>Team</h2>
        </div>
        {/* Start team tree */}
        <div className={style.team}>
          <Tree
            lineWidth={"2px"}
            lineColor={"#494b51"}
            lineBorderRadius={"10px"}
            label={
              <TeamNode
                icon={rootIcon}
                header="gm"
                subHeader="General Director"
                parent={true}
              />
            }
          >
            <TreeNode
              label={
                <TeamNode
                  icon={businessDevIcom}
                  header="Business Development Training Manager"
                  subHeader="Training and business development manager"
                  parent={true}
                />
              }
            >
              <TreeNode
                label={
                  <TeamNode
                    icon={departmentsIcon}
                    header="Departments"
                    subHeader="Sections"
                    parent={true}
                  />
                }
              >
                {childNodes.map((node) => (
                  <TreeNode
                    label={
                      <TeamNode
                        icon={node.icon}
                        header={node.header}
                        subHeader={node.subHeader}
                        parent={false}
                      />
                    }
                  ></TreeNode>
                ))}
              </TreeNode>
            </TreeNode>
          </Tree>
        </div>
        {/* End team tree */}
      </div>
      {/* End sixth section */}
      {/* Start seventh section */}
      <SvgUpWaves />
      <div className={style.gray_section}>
        <div className={`container`}>
          <div className={style.section_title} style={{ marginBottom: "0" }}>
            <h2>The opinions of students and visitors to the institute</h2>
          </div>
          {/* Start carousel */}
          <Carousel variant="dark">
            {opinions.map((opinion) => (
              <Carousel.Item>
                <div className={style.carousel_container}>
                  <div className={style.carousel_img}>
                    <img src={opinion.img} alt="carousel img" />
                  </div>
                  <div className={style.carousel_text}>
                    <p>{opinion.text}</p>
                  </div>
                </div>

                <Carousel.Caption>
                  <h3>{opinion.name}</h3>
                  <p>T{opinion.trainingName}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          {/* End carousel */}
        </div>
      </div>
      {/* End seventh section */}
      {/* Start eighth section */}
      <div className={style.gray_section}>
        <div className={`${style.clients_container} container`}>
          <div className={style.section_title}>
            <h2>our clients</h2>
          </div>
          {/* Start swiper */}
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={10}
            slidesPerView={5}
            pagination={{ clickable: true }}
          >
            {clients.map((client) => (
              <SwiperSlide>
                <Clients imgSrc={client} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* End swiper */}
        </div>
      </div>
      {/* End eighth section */}
    </div>
  );
};

export default AboutUs;
