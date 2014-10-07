
/**
 * Sieve of erathostene.
 */

var __eratosthene__ = function (alloc, get, gothrough, sqrt) {

	var first = 2;

	var eratosthene = function (a, n, cb) {

		var size, prime, m, i, p;

		if (n <= 2) {
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

	return eratosthene;

};

exports.eratosthene = eratosthene;
