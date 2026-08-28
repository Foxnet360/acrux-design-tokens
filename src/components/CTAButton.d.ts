import React from 'react';

export interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  icon?: React.ComponentType<{ size?: number }>;
  className?: string;
  leadMagnet?: boolean;
  theme?: 'default' | 'pulso';
  level?: 'low' | 'medium' | 'high';
  disabled?: boolean;
}

declare const CTAButton: React.FC<CTAButtonProps>;
export default CTAButton;
