// src/components/About.js
import React from 'react';
import './About.css'; // For styling

function About() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <img src="/images/your-photo.jpg" alt="Kian Salem" className="about-photo" />
      <p>
        I am a data analyst and product manager with a passion for AI/ML and data analytics.
        Leveraging my background in data reporting journalism and experience at Scale AI, I bring
        a unique perspective to solving complex problems.
      </p>
      <a href="/images/KianSalemResume.pdf" download className="resume-button">
        Download Resume
      </a>
    </div>
  );
}

export default About;