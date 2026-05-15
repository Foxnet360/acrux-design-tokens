import { colors } from './colors.js';
import { typography } from './typography.js';

export const designTokens = {
  colors,
  ...typography
};

// CommonJS export for Tailwind v3 compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = designTokens;
}

export default designTokens;
