import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';

const LandingPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;