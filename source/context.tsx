import React, { useState, PropsWithChildren } from 'react';
import { IPalette, Tpalette, TmixFunction } from './types';

interface IPaletteContext<T, A> {
	palette?: IPalette<T, A>[];
	mix?: TmixFunction<T, A>;
	theme?: string;

	/** Actions */
	setTheme: (theme: string) => void;
};

interface IPaletteProviderProps<T, A> {
	palette?: Tpalette<T, A>;
	theme?: string;
}

export const createPaletteContext = <T, A>(palette?: Tpalette<T, A>) => {
	const PaletteContext = React.createContext<IPaletteContext<T, A>>(null);

	const usePalette = () => React.useContext(PaletteContext);

	const PaletteProvider = ({ children, palette, ...props }: PropsWithChildren<IPaletteProviderProps<T, A>>) => {
		let context = React.useContext(PaletteContext);

		const { mix } = palette;
		palette.palette;

		const [theme, updateTheme] = useState(props.theme ?? context?.theme ?? palette[0].name);

		const setTheme = (theme: string) => {
			// TODO: implement guard to prevent setting undefined theme or default to first theme
			updateTheme(theme);
		}

		return <PaletteContext.Provider value={{ mix, theme, setTheme }}>
			{children}
		</PaletteContext.Provider>
	}

	return {
		PaletteContext,
		usePalette,
		PaletteProvider,
	};
}