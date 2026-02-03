import React from 'react';
import styled from 'styled-components';

// Styled components
const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  background-color: #f8f9fa;
  padding: 20px;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #343a40;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #6c757d;
  margin-top: 10px;
`;

const HeroButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// HeroSection Component
const HeroSection: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Hero button clicked');
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Welcome to Our Website</HeroTitle>
        <HeroSubtitle>Discover our amazing features and services.</HeroSubtitle>
        <HeroButton onClick={handleButtonClick}>Get Started</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;