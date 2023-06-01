import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projGroups = projects.map((projGroup) => {
    const itemComponent = <ProjectItem key={projGroup.id} {...projGroup} />;
    return itemComponent;
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projGroups}</div>
    </div>
  );
}

export default ProjectList;
