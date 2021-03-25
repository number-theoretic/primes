import {ptoi, itop} from './index.js';

/**
 * Sieve of Eratosthenes.
 */

export function __eratosthenes__(alloc, fill, get, gothrough, usqrt) {
	const first = 2;

	const eratosthenes = function (n, callback) {
		if (n <= 2) {
			return null;
		}

		const size = ptoi(n);

		const sieve = alloc(size);
		fill(sieve, 0, size, true);

		const m = ptoi(usqrt(n));

		for (let i = ptoi(first); i < m; ++i) {
			if (get(sieve, i)) {
				const p = itop(i);
				callback(p);
				gothrough(sieve, ptoi(p * p), size, p);
			}
		}

		for (let i = m; i < size; ++i) {
			if (get(sieve, i)) {
				callback(itop(i));
			}
		}

		return sieve;
	};

	return eratosthenes;
}
