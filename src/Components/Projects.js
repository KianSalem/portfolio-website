// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // For styling

function Projects() {
  const projectList = [
    {
      id: 1,
      name: 'Customer Segmentation Analysis',
      shortDescription: 'Analyzing retail data to segment customers.',
      image: '/images/project1.jpg',
    },
    {
      id: 2,
      name: 'Financial Transactions Fraud Detection',
      shortDescription: 'Detecting fraud in financial transactions data.',
      image: '/images/project2.jpg',
    },
    {
      id: 3,
      name: 'E-commerce Sales Trends Forecasting',
      shortDescription: 'Forecasting revenue based on sales trends.',
      image: '/images/project3.jpg',
    },
  ];

  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;