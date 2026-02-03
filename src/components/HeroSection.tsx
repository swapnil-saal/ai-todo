// src/components/HeroSection.tsx

import React from 'react';
import styled from 'styled-components';

const HeroSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: #fff;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  background-color: #ff6b6b;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ee5253;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroSectionWrapper>
      <HeroContent>
        <HeroTitle>Welcome to Our Website</HeroTitle>
        <HeroSubtitle>Discover amazing content and connect with others.</HeroSubtitle>
        <HeroButton href="#get-started">Get Started</HeroButton>
      </HeroContent>
    </HeroSectionWrapper>
  );
};

export default HeroSection;