import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f5f5f5;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-top: 20px;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <Title>Welcome to Our Website</Title>
      <Subtitle>Your success starts here. Join us today and make a difference.</Subtitle>
    </HeroContainer>
  );
};

export default HeroSection;