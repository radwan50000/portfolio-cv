import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import movie from "./assets/movies.png";
import james from "./assets/james.png";
import github from "./assets/github.png";
import web from "./assets/web.png";
import ArrowImage from "./assets/arrowImage.png";
import old_portfolio from "./assets/old_portfolio.png";
import ProjectsData from "./ProjectsData";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const t1 = gsap.timeline();
  useGSAP(() => {
    t1.fromTo(
      "#portfolio-header",
      {
        opacity: 0,
        translateY: "-340%",
      },
      {
        opacity: 1,
        translateY: "0%",
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".end-portfolio",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
    t1.fromTo(
      ".purple-line",
      {
        width: 0,
      },
      {
        width: "60%",
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".end-portfolio",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
    t1.fromTo(
      ".cardComponent",
      {
        opacity: 0,
        translateX: "-10%",
      },
      {
        opacity: 1,
        translateX: "0",
        duration: 2,
        ease: "power1.out",
        stagger: 1,
        scrollTrigger: {
          trigger: ".end-portfolio",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
    t1.fromTo(
      ".portfolio-section",
      {
        opacity: 1,
        translateX: "0",
      },
      {
        opacity: 0,
        translateY: "50%",
        duration: 3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".hide-portfolio",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      }
    );
    t1.fromTo(
      ".portfolio-section",
      {
        position: "sticky",
      },
      {
        position: "relative",
        duration: 3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".hide-portfolio",
          start: "top 50%",
          end: "top 100%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section className="w-[90%] pt-8 mx-auto sticky top-0 portfolio h-dvh portfolio-section">
        <div className="flex flex-row items-center gap-16">
          <h1
            id="portfolio-header"
            className="text-8xl text-purple200 font-black
                            max-sm:text-4xl
                            max-lg:text-6xl"
          >
            PORTFOLIO
          </h1>
          <div
            className="rotate-[360deg] purple-line flex h-1 bg-purple200
                        max-sm:hidden"
          ></div>
        </div>
        <div
          className="flex flex-row items-center justify-start my-32 gap-16 w-11/12
                        mx-auto
                        max-sm:flex-wrap max-sm:mx-0 max-sm:my-8  max-sm:justify-center  max-sm:gap-4
                        max-lg:mx-0 max-lg:my-12 max-lg:justify-center max-lg:gap-x-16 max-lg:gap-y-8 max-lg:flex-wrap"
        >
          {ProjectsData.map((project, index) => {
            if(index > 2) return;
            return (
              <div
                className="card cardComponent"
                style={{
                  background: `url(${project.cover})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top",
                }}
                key={index}
              ></div>
            );
          })}
          <a href="/projects">
            <img
              src={ArrowImage}
              alt="Arrow Image"
              className="rounded-full transition duration-350 
                        ease-in-out cardComponent cursor-pointer hover:shadow-[0px_0px_20px_#bb7de7]
                        max-sm:w-[6rem] sm:w-[6rem] lg:w-[12rem]
                        "
            />
          </a>
        </div>
      </section>
      <div
        id={"portfolio-link"}
        className="bg w-full relative z-[-10] end-portfolio"
        style={{ height: "calc(100vh)" }}
      >
        <div className="w-full h-dvh absolute top-0 left-0 bg z-[-10] translate-y-[-100%]"></div>
      </div>
      <div
        className="w-full  hide-portfolio"
        style={{ height: "calc(10vh)" }}
      ></div>
    </>
  );
};

export default Portfolio;
