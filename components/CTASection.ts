// src/setupTests.ts
import '@testing-library/jest-dom/extend-expect';
export {};

// src/components/CTASection.tsx
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section>
      <h2>Call to Action</h2>
      <button>Click Me!</button>
    </section>
  );
};

export default CTASection;