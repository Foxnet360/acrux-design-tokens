import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CTAButton from './CTAButton';

describe('CTAButton', () => {
  it('renders as anchor when href is provided', () => {
    render(<CTAButton href="https://example.com">External Link</CTAButton>);
    const link = screen.getByText('External Link').closest('a');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('renders as button when no href is provided', () => {
    render(<CTAButton>Click Me</CTAButton>);
    const button = screen.getByText('Click Me').closest('button');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<CTAButton onClick={handleClick}>Click Me</CTAButton>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<CTAButton size="sm">Small</CTAButton>);
    expect(screen.getByText('Small')).toBeInTheDocument();

    rerender(<CTAButton size="md">Medium</CTAButton>);
    expect(screen.getByText('Medium')).toBeInTheDocument();

    rerender(<CTAButton size="lg">Large</CTAButton>);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('renders with icon when provided', () => {
    const MockIcon = () => <span data-testid="mock-icon">★</span>;
    render(<CTAButton icon={MockIcon}>With Icon</CTAButton>);
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('applies leadMagnet accent styling', () => {
    render(<CTAButton leadMagnet>Lead Magnet</CTAButton>);
    const button = screen.getByText('Lead Magnet').closest('button');
    expect(button).toHaveClass('bg-accent');
  });

  it('supports level prop for backward compatibility', () => {
    const { rerender } = render(<CTAButton level="low">Low</CTAButton>);
    expect(screen.getByText('Low').closest('button')).toHaveClass('bg-success');

    rerender(<CTAButton level="medium">Medium</CTAButton>);
    expect(screen.getByText('Medium').closest('button')).toHaveClass('bg-secondary');

    rerender(<CTAButton level="high">High</CTAButton>);
    expect(screen.getByText('High').closest('button')).toHaveClass('bg-primary');
  });

  it('applies pulso theme styling', () => {
    render(<CTAButton theme="pulso">Pulso</CTAButton>);
    const button = screen.getByText('Pulso').closest('button');
    expect(button).toHaveClass('rounded-xl');
    expect(button).toHaveClass('font-semibold');
  });

  it('disables button when disabled prop is true', () => {
    render(<CTAButton disabled>Disabled</CTAButton>);
    const button = screen.getByText('Disabled').closest('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });

  it('renders anchor as button when disabled with href', () => {
    render(
      <CTAButton href="https://example.com" disabled>
        Disabled Link
      </CTAButton>
    );
    const button = screen.getByText('Disabled Link').closest('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
