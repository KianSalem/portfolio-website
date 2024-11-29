import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectList = [
    {
      name: 'Customer Segmentation Analysis',
      description: 'Analyzing retail data to segment customers.',
      // Add more project details
    },
    // Add more projects
  ];

  return (
    <div>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;