import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesSectionProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section aria-labelledby="features-heading" className="features-section">
      <h2 id="features-heading" className="sr-only">Features</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="feature-card shadow-lg p-6 rounded-md">
            <div className="feature-icon mb-4">
              {feature.icon}
            </div>
            <h3 className="feature-title text-xl font-bold mb-2">
              {feature.title}
            </h3>
            <p className="feature-description text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;