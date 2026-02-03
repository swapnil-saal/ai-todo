// src/pages/LandingPage.tsx

import React from 'react';

// Assuming existing styled-components or similar styling approach
import { HeroSection, FeaturesSection, CTASection } from '../components/Sections';

const LandingPage: React.FC = () => {
  return (
    <main>
      <HeroSection>
        <h1>Welcome to Our Product</h1>
        <p>Experience the future of technology with us.</p>
      </HeroSection>

      <FeaturesSection>
        <div className="feature">
          <h2>Feature One</h2>
          <p>Discover our first amazing feature.</p>
        </div>
        <div className="feature">
          <h2>Feature Two</h2>
          <p>Explore the capabilities of our second feature.</p>
        </div>
        <div className="feature">
          <h2>Feature Three</h2>
          <p>Learn how our third feature can help you.</p>
        </div>
      </FeaturesSection>

      <CTASection>
        <h2>Ready to Get Started?</h2>
        <button>Sign Up Now</button>
      </CTASection>
    </main>
  );
};

export default LandingPage;

// src/components/Sections.tsx

import styled from 'styled-components';

export const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
`;

export const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 4rem 2rem;
  background-color: #ffffff;

  .feature {
    max-width: 300px;
    text-align: center;
  }
`;

export const CTASection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #007bff;
  color: #ffffff;

  button {
    padding: 0.5rem 1rem;
    background-color: #0056b3;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;