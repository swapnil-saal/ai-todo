import React from 'react';

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: 'Feature One',
    description: 'Description for feature one.',
    icon: <i className="feature-icon icon-one" />,
  },
  {
    title: 'Feature Two',
    description: 'Description for feature two.',
    icon: <i className="feature-icon icon-two" />,
  },
  {
    title: 'Feature Three',
    description: 'Description for feature three.',
    icon: <i className="feature-icon icon-three" />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section aria-labelledby="features-heading" className="features-section">
      <h2 id="features-heading" className="features-title">Our Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item" role="listitem">
            <div className="feature-icon-wrapper">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;