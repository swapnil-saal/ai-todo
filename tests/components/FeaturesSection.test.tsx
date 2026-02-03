import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturesSection from '../../components/FeaturesSection';

describe('FeaturesSection Component', () => {
  beforeEach(() => {
    render(<FeaturesSection />);
  });

  test('renders without crashing', () => {
    const sectionElement = screen.getByTestId('features-section');
    expect(sectionElement).toBeInTheDocument();
  });

  test('displays the correct number of features', () => {
    const featureItems = screen.getAllByTestId(/^feature-item-/);
    // Replace 'expectedFeatureCount' with the actual expected number of features
    const expectedFeatureCount = 3; 
    expect(featureItems).toHaveLength(expectedFeatureCount);
  });

  test('contains a title for the features section', () => {
    const titleElement = screen.getByRole('heading', { level: 2 });
    expect(titleElement).toHaveTextContent(/features/i);
  });

  test('each feature has a title and description', () => {
    const featureTitles = screen.getAllByTestId(/^feature-title-/);
    const featureDescriptions = screen.getAllByTestId(/^feature-description-/);

    featureTitles.forEach((title) => {
      expect(title).toBeInTheDocument();
      expect(title).not.toBeEmptyDOMElement();
    });

    featureDescriptions.forEach((description) => {
      expect(description).toBeInTheDocument();
      expect(description).not.toBeEmptyDOMElement();
    });
  });

  test('renders an image for each feature', () => {
    const featureImages = screen.getAllByTestId(/^feature-image-/);
    featureImages.forEach((image) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src');
      expect(image).toHaveAttribute('alt');
    });
  });
});