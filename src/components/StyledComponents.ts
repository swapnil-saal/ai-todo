import React from 'react';
import styled from 'styled-components';

// HeroSection Component
export const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <h1>Welcome to Our Landing Page</h1>
      <p>Discover amazing features and join us today!</p>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  background-color: #f5f5f5;
  padding: 50px 20px;
  text-align: center;
`;

// FeaturesSection Component
interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <FeaturesContainer>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </FeatureItem>
      ))}
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 40px 20px;
`;

const FeatureItem = styled.div`
  max-width: 300px;
  text-align: center;
`;

// CTASection Component
export const CTASection: React.FC = () => {
  return (
    <CTAContainer>
      <h2>Join Us Today</h2>
      <p>Sign up now and start enjoying our services!</p>
      <button>Get Started</button>
    </CTAContainer>
  );
};

const CTAContainer = styled.section`
  background-color: #0073e6;
  padding: 40px 20px;
  text-align: center;
  color: white;

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #005bb5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;