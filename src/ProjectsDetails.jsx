import { Link, useParams } from "react-router-dom";
import ProjectsData from "./ProjectsData";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { Github, Globe, TextAlignStart } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    ProjectsData.forEach((project) => {
      if (project.id === id) {
        setProjectData(project);
        console.log(project);
      }
    });
  }, []);

  return (
    <div className="w-full min-h-dvh flex flex-col items-start justify-start">
      {projectData ? (
        <>
          <img
            src={projectData.desktopCover}
            alt={projectData.projectName}
            className="w-full max-h-[80vh] object-cover object-top"
          />
          <h1 className="text-7xl text-white font-bold m-8
            max-lg:text-5xl
            max-sm:text-4xl max-sm:mx-5 max-sm:mt-12 max-sm:mb-4
          ">
            {projectData.projectName}
          </h1>
          <div className="w-10/12 ml-16 flex flex-row items-start justify-start gap-2
            max-lg:ml-8
          ">
            <p className="text-2xl text-white leading-12
                max-sm:text-lg max-sm:leading-8
            ">
              {projectData.description}
            </p>
          </div>
          <div className="w-12/12 mx-8 my-16 flex flex-col items-start justify-start gap-2
                 max-sm:my-8 max-sm:mx-5
          ">
            <h2 className="text-4xl text-gray-300
            max-sm:text-3xl
            ">Refrences</h2>
            <div className="w-12/12 mx-8 my-4 flex flex-row items-start justify-start gap-8
                max-sm:mx-2
            ">
              <a
                href={projectData.github}
                target="_blank"
                className="w-fit flex flex-row gap-2 py-2 px-4 rounded-full 
                transition duration-400 ease-in-out
                border-blue-400 border-2 bg-blue-400/20 hover:opacity-80"
              >
                <Github className="text-white" size={25} />
                <p className="text-white font-semibold text-lg">Github</p>
              </a>
              <a
                href={projectData.website}
                target="_blank"
                className="w-fit flex flex-row gap-2 py-2 px-4 rounded-full 
                transition duration-400 ease-in-out
                border-purple-400 border-2 bg-purple-400/20 hover:opacity-80"
              >
                <Globe className="text-white" size={25}  />
                <p className="text-white font-semibold text-lg">Website</p>
              </a>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProjectDetails;
