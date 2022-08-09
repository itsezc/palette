import React, { useState, FC, PropsWithChildren } from 'react';
import { IPalette, Tpalette, TmixFunction } from './types';

interface IPaletteContext<
	Tokens = null,
	Assets = null,
	T = null,
	A = null
	> {
	palette?: IPalette<Tokens, Assets>[];
	mix?: TmixFunction<T, A>;
	theme?: string;

	/** Actions */
	setTheme: (theme: string) => void;
};

export const PaletteContext = React.createContext<IPaletteContext>(null);

export const usePalette = () => React.useContext(PaletteContext);

interface IPaletteProviderProps<T = null, A = null> {
	palette: Tpalette<T, A>;
	theme?: string;
}

export const PaletteProvider: FC<PropsWithChildren<IPaletteProviderProps>> = ({ children, palette, ...props }) => {
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

const { mix } = usePalette();

mix<{ disabled?: boolean }>((theme) => ({
	base: 'bg:white',
	variants: {
		disabled: 'bg:gray-200',
	}
}));