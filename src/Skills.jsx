import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import gsap_icon from "./assets/gsap_icon.svg";
import email from "./assets/email.svg";
import phone from "./assets/phone.svg";
import SkillCard from "./SkillCard.jsx";
import SkillsData from "./SkillsData";
import {
  Bash,
  CSS3,
  Git,
  React,
  GitHubLight,
  HTML5,
  JavaScript,
  Sass,
  TailwindCSS,
  MicrosoftSQLServer2,
  Bootstrap5,
  WordPress,
} from "developer-icons";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const t1 = gsap.timeline();
  const t2 = gsap.timeline();
  const t3 = gsap.timeline();
  const purple_line = useRef();
  const about_header = useRef();
  const start_skills = useRef();
  const start_cards = useRef();
  const skill_container = useRef();
  const end_skills = useRef();

  console.log(SkillsData);

  useGSAP(() => {
    t1.fromTo(
      purple_line.current,
      {
        width: "0",
      },
      {
        width: `calc(100% - (4.5rem * ${"about me".length}))`,
        ease: "power1",
        scrollTrigger: {
          trigger: start_skills.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    t2.fromTo(
      about_header.current,
      {
        translateY: "-50",
        opacity: 0,
      },
      {
        translateY: "0",
        opacity: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: start_skills.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    t3.fromTo(
      ".skill-card",
      {
        opacity: 0,
        translateY: "50",
      },
      {
        opacity: 1,
        translateY: "0",
        ease: "power1",
        stagger: 0.1,
        scrollTrigger: {
          trigger: start_cards.current,
          start: "top bottom",
          end: "20% top",
          scrub: true,
        },
      }
    );

    t1.fromTo(
      skill_container.current,
      {
        translateX: "0%",
      },
      {
        delay: 2,
        translateX:
          (window.innerWidth < 1280 && window.innerWidth) > 0 ? "-90%" : "-80%",
        ease: "power1",
        scrollTrigger: {
          trigger: start_cards.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    t1.fromTo(
      ".skills-section",
      {
        translateY: "0",
        zIndex: 0,
      },
      {
        translateY: "-80%",
        zIndex: "-1",
        ease: "power1",
        scrollTrigger: {
          trigger: end_skills.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section
        className="skills-section flex flex-col overflow-x-hidden
                sticky top-0 pt-8 h-dvh mx-auto shrink-0
                    w-[100%]"
      >
        <div className="skill-section-container">
          <div
            className="flex items-center gap-8
                                w-[90%] mx-auto"
          >
            <h1
              ref={about_header}
              className="text-8xl text-purple200 font-bold
                                    max-sm:text-5xl"
            >
              SKILLS
            </h1>
            <div
              className="h-1 bg-purple200
                                  max-sm:hidden"
              ref={purple_line}
              id="purple-line-skills"
            ></div>
          </div>
          <div
            ref={skill_container}
            className="flex items-center gap-16 pt-16 w-fit
                            flex-row shrink-0 ml-8
                                max-sm:pt-[15%] max-sm:gap-0
                                max-lg:ml-4"
          >
            {SkillsData.map((skill, index) => (
              <SkillCard
                icon={skill?.icon}
                description={skill?.description}
                key={index}
              />
            ))}
            <div className="skill-card">
              <img src={gsap_icon} alt="gsap icon" className="size-12" />
              <p>
                GSAP (GreenSock Animation Platform) is used for creating high-performance animations and interactive web experiences. It provides a robust set of tools and libraries that allow developers to animate HTML elements, SVGs, canvas, and more with smooth transitions and complex sequences. GSAP is known for its speed and efficiency, making it ideal for both simple animations like fades and slides, as well as more complex timelines and effects. It also offers features like scroll-triggered animations, draggable elements, and physics-based motion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg h-dvh relative" ref={start_skills}>
        <div className="w-full h-dvh absolute top-0 left-0 bg z-[-2] translate-y-[-100%]"></div>
      </div>
      <div className="bg h-[300vh]" ref={start_cards}></div>

      {/*Contact Me Section !!!!!!!!!!!!!!!!!!!!!!*/}

      <section
        id="contact-me-section"
        className="bg h-dvh w-[100%] px-[5%] mx-auto flex flex-col pt-[15%] absolute z-50 left-[50%] translate-x-[-50%]
                        max-sm:pt-auto justify-between max-sm:pt-[3%]"
        ref={end_skills}
      >
        <div
          className="flex w-[80%] justify-between mx-auto
                            max-xl:flex-col max-sm:gap-16 max-sm:w-full
                            max-lg:gap-20"
        >
          <div
            className="text-8xl leading-[90%] w-full mx-auto text-textColor select-none
                            max-sm:text-[5rem] max-sm:font-bold "
          >
            Get in <br />
            touch{" "}
            <span
              className="text-[12rem] text-purple200
                                max-sm:text-[8rem] max-sm:font-bold"
            >
              .
            </span>
          </div>
          <div
            className="flex flex-row gap-32 items-start
                            max-sm:flex-wrap max-sm:gap-16"
          >
            <div
              className="flex flex-col gap-8 text-purple200
                                max-sm:text-[0.8rem] max-sm:gap-4"
            >
              <p
                className="text-textColor text-3xl pl-8
                                    max-sm:text-2xl"
              >
                Contact
              </p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src={email}
                  alt={"email"}
                  className="size-5
                                        max-sm:size-4 invert-100"
                />
                <p>muhammedelsayedradwan5@gmail.com</p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src={phone}
                  alt={"email"}
                  className="size-5
                                    max-sm:size-4  invert-100"
                />
                <p>01125941808</p>
              </div>
            </div>
            <div
              className="flex flex-col gap-8 text-purple200
                            max-sm:text-[0.8rem] max-sm:gap-4"
            >
              <p
                className="text-textColor text-3xl pl-8
                                    max-sm:text-2xl"
              >
                Information
              </p>
              <p className="max-xl:pl-8 cursor-pointer">
                <a href={"#portfolio-link"}>Portfolio</a>
              </p>
              <p className="max-xl:pl-8 cursor-pointer">
                <a href={"#start-service"}>Services</a>
              </p>
              <p className="max-xl:pl-8 cursor-pointer">
                <a href={"https://github.com/radwan50000"} target={"_blank"}>
                  Github
                </a>
              </p>
              <p className="max-xl:pl-8 cursor-pointer">
                <a href={"/Muhammed_Elsayed_Radwan_FrontEnd_CV.pdf"} target={"_blank"}>
                  CV
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="social-links-container">
          <div className="SL-card-container">
            <div className="social-links">
              <a
                href="https://www.facebook.com/share/1MH15xTSbr/"
                target="_blank"
              >
                {" "}
                <p>Facebook</p>{" "}
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://www.instagram.com/muhammed5139?igsh=Y3A2NmkzY2dnaWpi"
                target="_blank"
              >
                {" "}
                <p>Instagram</p>{" "}
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/muhammed-elsayed-321822378/"
                target="_blank"
              >
                {" "}
                <p>LinkedIn</p>{" "}
              </a>
            </div>
            <div className="social-links">
              <a href="https://x.com/Muhamme75747739" target="_blank">
                {" "}
                <p>Twitter ( X )</p>{" "}
              </a>
            </div>
          </div>
          <div className="white-line-bg"></div>
        </div>
      </section>
    </>
  );
};

export default Skills;
