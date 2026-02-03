import React from 'react';
import './CTASection.css';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h1 className="cta-title">{title}</h1>
        <p className="cta-description">{description}</p>
        <button className="cta-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CTASection;

/* CTASection.css */
.cta-section {
  padding: 2rem;
  background-color: #f5f5f5;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #0056b3;
}