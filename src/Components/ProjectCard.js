import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div onClick={() => setExpanded(!expanded)}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {expanded && (
        <div>
          {/* Expanded content */}
          <p>Details about the project...</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;