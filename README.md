# Palette

Design tokens framework with atomic classes for React and Master CSS.

Deliver a consistent visual identity across your apps with design tokens, with your brand identity as code (BIaC) - from colors, typography, spacing or logos with your guidelines.

## Features

- Fully typed with TypeScript
- First class React and Master CSS support
- Minimal footprint: ~2KB with no dependencies
- Production ready

## Usage

```tsx
import { createPalette, PaletteContext } from '@foretag/palette';

// Themes
const light = {
	colors: {
		primary: '#ffffff'
	},
	spacing: {
		xs: '4',
	}
};

const dark = {
	colors: {
		primary: '#000000'
	},
	// ... spacing
};

// Create a palette with the themes
const palette = createPalette([
	{
		name: 'light',
		tokens: {
			...light
		}
	},
	{
		name: 'dark',
		tokens: {
			...dark
		}
	}
]);

const App = () => (
	<PaletteContext palette={palette}>
		<App />
	</PaletteContext>
)
```

## Tests

Palette is built with TypeScript and Bun, to run tests you need to run: `bun wiptest`