import React, { useState, PropsWithChildren } from 'react';
import { IPalette, Tpalette, TmixFunction } from './types';

interface IPaletteContext<T = unknown, A = unknown> {
	palette?: IPalette<T, A>[];
	mix?: TmixFunction<T, A>;
	theme?: string;

	/** Actions */
	setTheme: (theme: string) => void;
};

export const PaletteContext = React.createContext<IPaletteContext>(null);

export const usePalette = () => React.useContext(PaletteContext);

interface IPaletteProviderProps<T, A> {
	palette: Tpalette<T, A>;
	theme?: string;
}

export const PaletteProvider = <T, A>({ children, palette, ...props }: PropsWithChildren<IPaletteProviderProps<T, A>>) => {
	let context = React.useContext(PaletteContext);

	const { mix } = palette;
	const [theme, updateTheme] = useState(props.theme ?? context?.theme ?? palette[0].name);

	const setTheme = (theme: string) => {
		// TODO: implement guard to prevent setting undefined theme or default to first theme
		updateTheme(theme);
	}

	return <PaletteContext.Provider value={{ mix, theme, setTheme }}>
		{children}
	</PaletteContext.Provider>
}