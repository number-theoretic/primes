import {ptoi230} from './ptoi230.js';
import {ptoi231} from './ptoi231.js';

export function ptoi23(p) {
	return p % 6 > 4 ? ptoi230(p) : ptoi231(p);
}
