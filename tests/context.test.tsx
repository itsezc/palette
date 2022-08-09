import React, { FC } from 'react';
import { describe, it, expect } from 'bun:test';
import { createPalette, PaletteProvider } from '@/source';
import { usePalette } from '@/source/context';

describe('React - JSX / TSX', () => {
	const palette = createPalette([
		{
			name: 'light',
			tokens: {
				colors: {
					primary: '#ffffff',
				}
			}
		},
		{
			name: 'dark',
			tokens: {
				colors: {
					primary: '#000000',
				}
			}
		},
	]);

	const App = () => {
		return <PaletteProvider theme='light' palette={palette}>
			<p>Test</p>
		</PaletteProvider>
	}

	it('Creates a palette', () => {
		interface IButtonProps {
			disabled: boolean;
		}

		const Button: FC<IButtonProps> = (props) => {
			const { mix, setTheme } = usePalette();

			const classes = mix<IButtonProps>((theme) => ({
				base: 'bg:white f:blue',
				variants: {
					disabled: `bg:red f:${theme.colors.primary}`,
				}
			}));

			return <a
				className={classes(props)}
				onClick={() => setTheme('dark')}
			>
				Button
			</a>
		}
	});
});