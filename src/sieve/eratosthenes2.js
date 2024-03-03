import {itop2} from './itop2.js';
import {ptoi2} from './ptoi2.js';

/**
 * Sieve of Eratosthenes skipping all multiples of 2.
 */

export function __eratosthenes2__(alloc, fill, get, gothrough, usqrt) {
	const first = 3;

	const eratosthenes2 = function (n, callback) {
		if (n <= 2) {
			return null;
		}

		callback(2);

		if (n <= 3) {
			return null;
		}

		const size = ptoi2(n);

		const sieve = alloc(size);
		fill(sieve, 0, size, true);

		const m = ptoi2(usqrt(n));

		for (let i = ptoi2(first); i < m; ++i) {
			if (get(sieve, i)) {
				const p = itop2(i);
				callback(p);
				gothrough(sieve, ptoi2(p * p), size, p);
			}
		}

		for (let i = m; i < size; ++i) {
			if (get(sieve, i)) {
				callback(itop2(i));
			}
		}

		return sieve;
	};

	return eratosthenes2;
}
