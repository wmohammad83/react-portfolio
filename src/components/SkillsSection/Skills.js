import React from "react";
import SkillsCard from "../SkillsCards/SkillsCard"

function Skills() {
  return (
    <section>
      <div className="container">
        <h4 class="text-center section-title text-uppercase skills-title">
          My Skills
        </h4>
        <div className="row">
            <SkillsCard skill="html" logo ="fa-brands fa-html5" />
            <SkillsCard skill="css" logo ="fa-brands fa-css3-alt" />
            <SkillsCard skill="bootstrap" logo ="fa-brands fa-bootstrap" />
            <SkillsCard skill="javascript" logo ="fa-brands fa-square-js" />
            <SkillsCard skill="react" logo ="fa-brands fa-react" />
            <SkillsCard skill="node js" logo ="fa-brands fa-node" />
            <SkillsCard skill="git & github" logo ="fa-brands fa-github" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
