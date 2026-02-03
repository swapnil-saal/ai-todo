import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CTASection from '../../components/CTASection';

describe('CTASection Component', () => {
  test('renders CTASection component with correct text', () => {
    render(<CTASection />);
    const heading = screen.getByRole('heading', { name: /join us today/i });
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText(/sign up now and get exclusive benefits/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('renders a call-to-action button', () => {
    render(<CTASection />);
    const button = screen.getByRole('button', { name: /sign up/i });
    expect(button).toBeInTheDocument();
  });

  test('button click triggers expected action', () => {
    const handleClick = jest.fn();
    render(<CTASection onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders component with custom class if provided', () => {
    render(<CTASection className="custom-class" />);
    const section = screen.getByTestId('cta-section');
    expect(section).toHaveClass('custom-class');
  });

  test('renders default content when no props are provided', () => {
    render(<CTASection />);
    const defaultText = screen.getByText(/default content/i);
    expect(defaultText).toBeInTheDocument();
  });
});