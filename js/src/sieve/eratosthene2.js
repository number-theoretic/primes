
/**
 * Sieve of erathostene skipping all multiples of 2.
 */

var __eratosthene2__ = function (alloc, get, gothrough, sqrt) {

	var itop = function (i) {
		return i * 2 + 1;
	};

	var ptoi = function (p) {
		return p / 2 | 0;
	};

	var first = 3;

	var eratosthene2 = function (a, n, cb) {

		var size, prime, m, i, p;

		if (n <= 2) {
			return;
		}

		cb(2);

		if (n <= 3) {
			return;
		}

		size = ptoi(n);

		prime = alloc(size);
		fill(prime, 0, size, true);

		m = ptoi(sqrt(n));

		for (i = ptoi(first); i < m; ++i) {
			if (get(prime, i)) {
				p = itop(i);
				cb(p);
				gothrough(prime, ptoi(p * p), size, p);
			}
		}

		for (i = m; i < size; ++i) {
			if (get(prime, i)) {
				cb(itop(i));
			}
		}

		return prime;
	};

	return eratosthene2;

};

exports.eratosthene2 = eratosthene2;
