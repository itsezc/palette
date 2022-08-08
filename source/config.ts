import type { IPalette, Parameters } from './type';

type mixArgs<X, Y> = (theme?: IPalette) => Parameters<X, Y> | Parameters<X, Y>;

export const createPalette = (theme: IPalette) => {
	const mix = <Props = null, Propless = null>(arg: mixArgs<Props, Propless>) => {

	};

	return {
		mix,
		theme
	}
};
