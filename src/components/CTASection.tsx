import React from 'react';
import styled from 'styled-components';

// Styled Components
const CTAContainer = styled.section`
  padding: 4em;
  background: #f4f4f9;
  text-align: center;
`;

const CTAButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.75em 1.5em;
  border: 2px solid #4a90e2;
  background: #4a90e2;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #357ab8;
  }
`;

const CTATitle = styled.h2`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

const CTADescription = styled.p`
  font-size: 1.25em;
  color: #666;
`;

// Component
const CTASection: React.FC = () => {
  const handleCTAClick = () => {
    alert('CTA Button Clicked!');
  };

  return (
    <CTAContainer>
      <CTATitle>Join Us Today</CTATitle>
      <CTADescription>
        Become a part of our amazing community and start enjoying the benefits.
      </CTADescription>
      <CTAButton onClick={handleCTAClick}>Get Started</CTAButton>
    </CTAContainer>
  );
};

export default CTASection;