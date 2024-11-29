// src/components/Contact.js
import React from 'react';
import './Contact.css'; // For styling

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me via email or connect with me on LinkedIn.
      </p>
      <div className="contact-links">
        <a href="mailto:salemkian1@gmail.com" className="contact-button">
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/salemkian"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}

export default Contact;