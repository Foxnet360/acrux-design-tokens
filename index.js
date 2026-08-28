import { colors } from './colors.js';
import { typography } from './typography.js';
import { productThemes } from './src/tokens/products.js';
import { spacing, borderRadius, shadows } from './src/tokens/base.js';

export const designTokens = {
  colors,
  ...typography,
  spacing,
  borderRadius,
  shadows,
  productThemes,
};

export { colors } from './colors.js';
export { typography } from './typography.js';
export { productThemes } from './src/tokens/products.js';
export { spacing, borderRadius, shadows } from './src/tokens/base.js';

// Shared UI components
export { default as CTAButton } from './src/components/CTAButton.jsx';
export { default as PrivacyModal } from './src/components/PrivacyModal.jsx';

export default designTokens;
