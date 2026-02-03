import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingPage from '../../src/pages/LandingPage';

describe('LandingPage', () => {
  beforeEach(() => {
    render(<LandingPage />);
  });

  test('renders the landing page title', () => {
    const titleElement = screen.getByRole('heading', { name: /welcome to our site/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the primary call to action button', () => {
    const ctaButton = screen.getByRole('button', { name: /get started/i });
    expect(ctaButton).toBeInTheDocument();
  });

  test('displays the correct number of feature highlights', () => {
    const featureHighlights = screen.getAllByTestId('feature-highlight');
    expect(featureHighlights.length).toBe(3); // Assuming there are 3 features to highlight
  });

  test('renders the footer with the correct text', () => {
    const footerText = screen.getByText(/© 2023 company name/i);
    expect(footerText).toBeInTheDocument();
  });

  test('navigates to the correct page on CTA button click', () => {
    const ctaButton = screen.getByRole('button', { name: /get started/i });
    ctaButton.click();
    expect(window.location.pathname).toBe('/get-started');
  });

  test('does not display error messages initially', () => {
    const errorMessage = screen.queryByText(/error/i);
    expect(errorMessage).not.toBeInTheDocument();
  });
});