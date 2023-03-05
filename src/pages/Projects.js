import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import portfolio from "../projects.json";
import Footer from "../components/Footer/Footer";

function Projects() {
  const [projects, setProjects] = useState(portfolio);
  return (
    <div>
      <div className="container">
        <h1>Projects</h1>
        <div className="row">
          <div className="col">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.projectName}
                  image={project.image}
                  description={project.description}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
