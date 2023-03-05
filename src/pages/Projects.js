import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import portfolio from "../projects.json";

function Projects() {
  const [projects, setProjects] = useState(portfolio);
  return (
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
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

{
  /* <FriendCard
key={buddy.id}
name={buddy.name + ", my pal"}
image={buddy.image}
occupation={buddy.occupation}
location={buddy.location}
doRemove={function () {
  removeFriend(buddy.id);
}}
/> */
}
