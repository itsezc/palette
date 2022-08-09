import React, { FC, PropsWithChildren } from 'react';

interface IPaletteContext {
	theme: string;
};

export const PaletteContext = React.createContext<IPaletteContext>(null);

export const usePalette = () => React.useContext(PaletteContext);

export const PaletteProvider: FC<PropsWithChildren> = ({ children }) => {
	let palette = React.useContext(PaletteContext);

	return <PaletteContext.Provider value={palette}>
		{children}
	</PaletteContext.Provider>
}