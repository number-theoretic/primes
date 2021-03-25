import {itop230} from './itop230.js';
import {itop231} from './itop231.js';

export function itop23(i) {
	return i % 2 === 0 ? itop230(i) : itop231(i);
}
