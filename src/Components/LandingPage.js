// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css'; // We'll create this CSS file for styling
import styled from 'styled-components';

const LandingPageWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  /* Rest of your styles */
`;


function LandingPage() {
  return (
    <LandingPageWrapper>
    <div id= "home" className="landing-page">
      <div className="header">
        <img src="/images/your-photo.jpg" alt="Kian Salem" className="profile-photo" />
        <h1 className="name">Kian Salem</h1>
        <p className="tagline">
          AI/ML Enthusiast, Data Analyst, and Product Manager with experience from data reporting
          journalism classes and a year at Scale AI.
        </p>
      </div>
    </div>
    </LandingPageWrapper>
  );
}

export default LandingPage;