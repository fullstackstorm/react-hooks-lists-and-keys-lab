import React from "react";

function ProjectItem({ name, about, technologies }) {
  let counter = -1;

  const techGroup = technologies.map((technology) => {
    counter++;

    return <span key={counter}>{technology}</span>;
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techGroup}</div>
    </div>
  );
}

export default ProjectItem;
