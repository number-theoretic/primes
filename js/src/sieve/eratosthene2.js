
/**
 * Sieve of erathostene skipping all multiples of 2.
 */

var __eratosthene2__ = function (alloc, get, gothrough, sqrt) {

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

		size = ptoi2(n);

		prime = alloc(size);
		fill(prime, 0, size, true);

		m = ptoi2(sqrt(n));

		for (i = ptoi2(first); i < m; ++i) {
			if (get(prime, i)) {
				p = itop2(i);
				cb(p);
				gothrough(prime, ptoi2(p * p), size, p);
			}
		}

		for (i = m; i < size; ++i) {
			if (get(prime, i)) {
				cb(itop2(i));
			}
		}

		return prime;
	};

	return eratosthene2;

};

exports.eratosthene2 = eratosthene2;
