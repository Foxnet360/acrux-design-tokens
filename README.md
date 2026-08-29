# @acrux/design-tokens

Design tokens and shared UI components for the ACRUX ecosystem.

## Installation

This package is consumed as a `file:` dependency within the monorepo:

```bash
npm install ../acrux-design-tokens
```

Or in your `package.json`:

```json
{
  "dependencies": {
    "@acrux/design-tokens": "file:../acrux-design-tokens"
  }
}
```

## Peer Dependencies

| Package         | Version Range               |
|-----------------|-----------------------------|
| react           | ^18.0.0 \|\| ^19.0.0        |
| react-dom       | ^18.0.0 \|\| ^19.0.0        |
| lucide-react    | ^0.460.0 \|\| ^0.546.0 \|\| ^0.563.0 |

## Exports

| Import Path                           | File                                        | Description               |
|---------------------------------------|---------------------------------------------|---------------------------|
| `@acrux/design-tokens`                | `index.js` / `index.d.ts`                   | Design tokens object      |
| `@acrux/design-tokens/colors`         | `colors.js`                                 | Color palette             |
| `@acrux/design-tokens/typography`     | `typography.js`                             | Typography scale          |
| `@acrux/design-tokens/theme.css`      | `theme.css`                                 | CSS custom properties     |
| `@acrux/design-tokens/components/CTAButton`    | `src/components/CTAButton.jsx` / `.d.ts` | CTA button component      |
| `@acrux/design-tokens/components/PrivacyModal` | `src/components/PrivacyModal.jsx` / `.d.ts` | Privacy modal component   |

## CTAButton

Shared call-to-action button. Framework-agnostic: renders `<a>` for links, `<button>` for actions.

### Props

| Prop        | Type                                      | Default     | Description                              |
|-------------|-------------------------------------------|-------------|------------------------------------------|
| `variant`   | `'primary' \| 'secondary' \| 'ghost'`      | `'primary'` | Visual style                             |
| `size`      | `'sm' \| 'md' \| 'lg'`                    | `'md'`      | Button size                              |
| `href`      | `string`                                  | —           | Renders as `<a>` when provided           |
| `onClick`   | `(e: React.MouseEvent) => void`           | —           | Click handler                            |
| `children`  | `React.ReactNode`                         | **required**| Button content                           |
| `icon`      | `React.ComponentType<{ size?: number }>`  | —           | Icon component to render                 |
| `className` | `string`                                  | `''`        | Additional CSS classes                   |
| `leadMagnet`| `boolean`                                 | `false`     | Accent styling for lead-generation CTAs  |
| `theme`     | `'default' \| 'pulso'`                    | `'default'` | `'default'` (rounded-full) or `'pulso'` (rounded-xl) |
| `level`     | `'low' \| 'medium' \| 'high'`             | —           | Backward-compat color level (acrux.life) |
| `disabled`  | `boolean`                                 | `false`     | Disabled state                           |

### Example

```jsx
import CTAButton from '@acrux/design-tokens/components/CTAButton';
import { ArrowRight } from 'lucide-react';

<CTAButton href="/contacto" icon={ArrowRight}>
  Contactanos
</CTAButton>
```

## PrivacyModal

Shared privacy policy modal. Uses CSS transitions, zero heavy dependencies.

### Props

| Prop               | Type                | Default                  | Description                          |
|--------------------|---------------------|--------------------------|--------------------------------------|
| `isOpen`           | `boolean`           | **required**             | Controls modal visibility            |
| `onClose`          | `() => void`        | **required**             | Close callback                       |
| `title`            | `string`            | `'Política de Privacidad'` | Modal title                        |
| `acceptButtonText` | `string`            | `'Entendido'`            | Text for the accept button           |
| `projectName`      | `string`            | `'ACRUX'`                | Project name shown in default content|
| `children`         | `React.ReactNode`   | —                        | Custom content (replaces default)    |
| `className`        | `string`            | `''`                     | Additional CSS classes               |

### Example

```jsx
import { useState } from 'react';
import PrivacyModal from '@acrux/design-tokens/components/PrivacyModal';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Ver política</button>
      <PrivacyModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
```

## Monorepo Setup

The ACRUX ecosystem uses sibling directories:

```
acrux/
├── acrux-design-tokens/   ← this package
├── acrux.life/            ← React + Vite site
├── digital-h/             ← DIGITAL-H assessment tool
└── pulso-h/               ← PULSO-H platform
```

Each consumer references this package via `file:../acrux-design-tokens` in `dependencies`.

### Notes

- `file:` dependencies are symlinked by npm; changes here are immediately visible in consumers after a dev-server restart.
- This package has no build step; JSX files are imported directly by the Vite-based consumers.
- Ensure peer dependencies are installed in the consumer project.
