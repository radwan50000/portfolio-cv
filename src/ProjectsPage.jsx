import ProjectsData from "./ProjectsData";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <div className="w-full h-fit m-8 flex flex-col items-start justify-start gap-8 box-border">
      <h1 className="text-6xl font-bold text-purple-400">PORTFOLIO</h1>
      <div className="w-full h-fit flex flex-row items-start justify-start flex-wrap gap-8">
        {ProjectsData.map((project) => (
          <Link
            to={`/projects/projectDetails/${project.id}`}
            key={project.id}
            className="project-card cardComponent"
            style={{
              background: `url(${project.cover})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          ></Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
