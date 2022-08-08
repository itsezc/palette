import { createPalette } from '@/source/config';
import { describe, it, expect } from 'bun:test';


describe('Mix config', () => {
	it('Create a Palette', () => {
		let { mix, theme } = createPalette({
			tokens: {
				colors: {
					red: '#505050'
				}
			}
		});

		// mix()
	});
});