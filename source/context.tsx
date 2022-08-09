import React from 'react';

interface IPaletteContext {
	theme: string;
};

export const PaletteContext = React.createContext<IPaletteContext>(null);

export const usePalette = () => React.useContext(PaletteContext);