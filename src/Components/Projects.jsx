import Index from "../constants";

function Projects() {
  const PROJECTS = Index();
  // console.log(PROJECTS);
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent text-center">
        Projects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
