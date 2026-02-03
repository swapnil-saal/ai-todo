import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  onCTAClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImageUrl, onCTAClick }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 20px',
        color: '#fff',
        textAlign: 'center',
      }}
      aria-labelledby="hero-title"
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <h1 id="hero-title" style={{ fontSize: '2.5em', margin: '0 0 10px' }}>{title}</h1>
        <p style={{ fontSize: '1.25em', margin: '0 0 20px' }}>{subtitle}</p>
        <button
          onClick={onCTAClick}
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            color: '#fff',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          aria-label="Call to Action"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;