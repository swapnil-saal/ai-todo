import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../../components/HeroSection';

describe('HeroSection Component', () => {
  test('renders the HeroSection component correctly', () => {
    render(<HeroSection />);

    const heroTitle = screen.getByRole('heading', { level: 1 });
    expect(heroTitle).toBeInTheDocument();
    expect(heroTitle).toHaveTextContent('Welcome to Our Website');

    const heroSubtitle = screen.getByText('Explore our features and services');
    expect(heroSubtitle).toBeInTheDocument();

    const callToActionBtn = screen.getByRole('button', { name: /Get Started/i });
    expect(callToActionBtn).toBeInTheDocument();
    expect(callToActionBtn).toHaveAttribute('href', '/get-started');
  });

  test('displays the correct image in the hero section', () => {
    render(<HeroSection />);

    const heroImage = screen.getByAltText('Hero Image');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', '/images/hero-image.jpg');
  });

  test('renders additional text content if provided', () => {
    const additionalText = 'Join us and make a difference';
    render(<HeroSection additionalText={additionalText} />);

    const additionalTextNode = screen.getByText(additionalText);
    expect(additionalTextNode).toBeInTheDocument();
  });

  test('does not render additional text content if not provided', () => {
    render(<HeroSection />);

    const additionalTextNode = screen.queryByText('Join us and make a difference');
    expect(additionalTextNode).not.toBeInTheDocument();
  });
});