import React from 'react';
import styled from 'styled-components';

interface CTASectionProps {
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onButtonClick }) => {
  return (
    <Section>
      <Content>
        <Title>Join us today!</Title>
        <Description>Experience the best features and stay ahead with us. Sign up now!</Description>
        <Button onClick={onButtonClick}>Get Started</Button>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f8f9fa;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #666;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export default CTASection;