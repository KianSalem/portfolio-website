// src/components/ProjectCard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css'; // For styling

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img src={project.image} alt={project.name} className="project-image" />
      <div className={`project-info ${hovered ? 'hovered' : ''}`}>
        <h3>{project.name}</h3>
        <p>{project.shortDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;