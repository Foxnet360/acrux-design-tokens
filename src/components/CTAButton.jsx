import React from 'react';

/**
 * CTAButton - Shared call-to-action button for the ACRUX ecosystem
 *
 * Framework-agnostic: uses `<a>` for links, `<button>` for actions.
 * No react-router-dom dependency.
 *
 * Theming:
 * - `theme="default"` (or omitted): rounded-full, bold, primary palette
 * - `theme="pulso"`: rounded-xl, semibold, accent palette
 * - `level` prop (acrux.life backward-compat): low/medium/high → success/secondary/primary
 * - `leadMagnet`: accent styling for lead-generation CTAs
 */
const CTAButton = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  icon: Icon,
  className = '',
  leadMagnet = false,
  theme = 'default',
  level,
  disabled = false,
  ...props
}) => {
  // Size configurations
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Theme base styles
  const themeBase = {
    default: 'rounded-full font-bold font-display',
    pulso: 'rounded-xl font-semibold'
  };

  // Lead-magnet color overrides (accent-based)
  const leadMagnetStyles = {
    primary: 'bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-accent/50',
    secondary: 'border-2 border-accent text-accent hover:bg-accent/10',
    ghost: 'text-accent hover:bg-accent/10'
  };

  // Level-based colors (acrux.life backward compatibility)
  const levelStyles = {
    low: {
      primary: 'bg-accent text-primary font-bold hover:bg-accent/90 shadow-lg hover:shadow-accent/50',
      secondary: 'border-2 border-accent text-accent hover:bg-accent/10',
      ghost: 'text-accent hover:bg-accent/10'
    },
    medium: {
      primary: 'bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-secondary/50',
      secondary: 'border-2 border-secondary text-secondary hover:bg-secondary/10',
      ghost: 'text-secondary hover:bg-secondary/10'
    },
    high: {
      primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/50',
      secondary: 'border-2 border-primary text-primary hover:bg-primary/10',
      ghost: 'text-primary hover:bg-primary/10'
    }
  };

  // Default theme colors
  const defaultStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/50',
    secondary: 'border-2 border-primary text-primary hover:bg-primary/10',
    ghost: 'text-primary hover:bg-primary/10'
  };

  // PULSO-H theme colors
  const pulsoStyles = {
    primary: 'bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/20',
    secondary: 'bg-white text-primary-900 border-2 border-primary-200 hover:border-accent hover:text-accent',
    ghost: 'bg-transparent text-primary-700 hover:text-accent hover:bg-accent/5'
  };

  // Resolve color styles
  let colorStyles;
  if (leadMagnet) {
    colorStyles = leadMagnetStyles;
  } else if (level && theme !== 'pulso') {
    colorStyles = levelStyles[level] || defaultStyles;
  } else if (theme === 'pulso') {
    colorStyles = pulsoStyles;
  } else {
    colorStyles = defaultStyles;
  }

  const variantStyles = colorStyles[variant] || colorStyles.primary;

  const baseStyles = `
    inline-flex items-center justify-center gap-2
    transition-all duration-300
    transform hover:scale-105
    focus:outline-hidden focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${themeBase[theme] || themeBase.default}
    ${variantStyles}
    ${sizeStyles[size] || sizeStyles.md}
    ${className}
  `;

  const iconSize = size === 'lg' ? 20 : 16;

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={baseStyles}
        onClick={onClick}
        {...props}
      >
        {Icon && <Icon size={iconSize} />}
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      {...props}
    >
      {Icon && <Icon size={iconSize} />}
      {children}
    </button>
  );
};

export default CTAButton;
