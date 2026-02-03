import React from 'react';
import './CTASection.css'; // Assuming styles are imported from a CSS file

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">{title}</h2>
      <p className="cta-description">{description}</p>
      <button className="cta-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </section>
  );
};

export default CTASection;