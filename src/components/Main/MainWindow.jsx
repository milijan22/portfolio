import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareGithub,
  faSquareGooglePlus,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import education from "../../assets/education.svg";
import htec from "../../assets/htec.svg";

function MainWindow() {
  const technologiesList = [
    { icon: "url('/html.svg')", name: "HTML" },
    { icon: "url('/css.svg')", name: "CSS" },
    { icon: "url('/js.svg')", name: "JavaScript" },
    { icon: "url('/react.svg')", name: "React" },
    { icon: "url('/nextjs.svg')", name: "Next.js" },
    { icon: "url('/typescript.svg')", name: "Typescript" },
  ];

  const socialMediaList = [
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/milijan-knezevic-97297b2a3/",
    },
    { icon: faSquareGithub, link: "" },
    { icon: faSquareGooglePlus, link: "" },
    { icon: faSquareFacebook, link: "" },
  ];
  const timelineList = [
    {
      title: "School of Electrical Engineering Prijedor",
      time: "Graduated in 2018",
      description: "Power Engineering Degree",
    },
    {
      title: "HTEC Group - Junior Infrastructure Planner",
      time: "2023",
      description: "FTTH Planning, QGIS, AutoCAD",
    },
    {
      title: "HTEC Group - Internal Capacity & Learning team",
      time: "2025",
      description: "Web development",
    },
  ];

  return (
    <div className="font-bebas flex flex-col justify-center items-center text-center text-white font-extralight">
      <h1 className="text-7xl tracking-widest">MILIJAN KNEZEVIC</h1>
      <h1 className="text-7xl tracking-wide">FRONTEND DEVELOPER</h1>
      <h1 className="text-3xl text-gray-500 hover:underline cursor-pointer">
        <a
          href="https://www.google.com/maps/place/78000+%D0%91%D0%B0%D1%9A%D0%B0+%D0%9B%D1%83%D0%BA%D0%B0"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLocationDot} /> BANJA LUKA, BA
        </a>
      </h1>
      <div className="mt-10 flex justify-center gap-8 text-4xl text-cyan-700 cursor-pointer">
        {socialMediaList.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FontAwesomeIcon icon={item.icon} />
          </a>
        ))}
      </div>

      <div className="mt-12 w-full max-w-5xl mx-auto">
        <ol className="flex items-start justify-between gap-3 w-full">
          {timelineList.map((item, index) => (
            <li key={index} className="flex-1 flex-col items-center">
              <div className="flex items-center w-full  animate-fadeIn">
                <div className=" flex items-center justify-center w-11 h-11 bg-white rounded-full shrink-0">
                  <img
                    src={index === 0 ? education : htec}
                    alt="icon"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1 h-1 bg-gray-700"></div>
              </div>
              <div className="mt-3 flex flex-col justify-left items-start">
                <h3 className="font-semibold text-cyan-700 left-8">
                  {item.title}
                </h3>
                <p className="block font-normal text-gray-400">{item.time}</p>
                <p className="font-normal text-gray-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-18 mb-8 gap-4 flex flex-wrap justify-center items-center">
          {technologiesList.map((item, index) => (
            <div
              key={index}
              className="inline-block w-16 h-16 bg-cover bg-center m-4 opacity-45 hover:opacity-100"
              style={{ backgroundImage: item.icon }}
            >
              <section className="pt-19">{item.name}</section>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 justify-center mt-20 ">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="cursor-pointer mb-2 px-6 py-2 border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-black rounded-3xl">
            RESUME
          </button>
          </a>
          <section className="mb-1 text-gray-500 hover:underline cursor-pointer flex items-center gap-2 text-2xl">
            <a href="mailto:milijan99knezevic@gmail.com">MAIL</a>{" "}
            <FontAwesomeIcon icon={faEnvelope} />
          </section>
        </div>
      </div>
    </div>
  );
}
export default MainWindow;
