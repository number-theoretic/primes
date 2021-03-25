import {ptoi230, ptoi231} from './index.js';

export function ptoi23(p) {
	return p % 6 > 4 ? ptoi230(p) : ptoi231(p);
}
