// src/components/FeaturesSection.tsx

import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Feature One',
    description: 'Description for feature one, highlighting its benefits and usability.',
    icon: <i className="fas fa-bolt" aria-hidden="true"></i>
  },
  {
    title: 'Feature Two',
    description: 'Description for feature two, explaining why it is essential.',
    icon: <i className="fas fa-check-circle" aria-hidden="true"></i>
  },
  {
    title: 'Feature Three',
    description: 'Description for feature three, outlining its unique selling points.',
    icon: <i className="fas fa-heart" aria-hidden="true"></i>
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section" aria-labelledby="features-heading">
      <div className="container">
        <h2 id="features-heading" className="section-title">Our Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item" aria-labelledby={`feature-title-${index}`}>
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 id={`feature-title-${index}`} className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;