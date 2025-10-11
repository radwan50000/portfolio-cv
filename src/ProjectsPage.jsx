import ProjectsData from "./ProjectsData";

const ProjectPage = () => {
  return (
    <div className="w-full h-fit m-8 flex flex-col items-start justify-start gap-8">
      <h1 className="text-6xl font-bold text-purple-400">Projects</h1>
      <div className="w-full h-fit flex flex-row items-start justify-start gap-8">
        {ProjectsData.map((project, index) => (
          <div
            className="project-card cardComponent"
            style={{
              background: `url(${project.cover})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
