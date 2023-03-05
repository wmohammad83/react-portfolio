import React from "react";

function ProjectCard({ name, description, image }) {
  return (
    <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
          <img src={image} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
