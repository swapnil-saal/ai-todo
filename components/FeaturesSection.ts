// src/components/FeaturesSection.tsx
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section>
      <h2>Features</h2>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </section>
  );
};

export default FeaturesSection;

// src/setupTests.ts
import '@testing-library/jest-dom';