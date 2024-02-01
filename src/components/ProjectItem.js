import React from "react";

function ProjectItem({ name, about, technologies }) {
  const TechItems = technologies.map((techItem) => {
    return (
      <span key={techItem}>
        {techItem}
      </span>
    );
  });
  
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {TechItems }
      
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
