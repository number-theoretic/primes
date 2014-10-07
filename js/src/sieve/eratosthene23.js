
/**
 * Sieve of erathostene skipping all multiples of 2 and 3.
 */

var __eratosthene23__ = function (alloc, get, gothrough, sqrt) {

	var first = 5;

	var eratosthene23 = function (a, n, cb) {

		var size, prime, m, i, j, p;

		if (n <= 2) {
			return;
		}

		cb(2);

		if (n <= 3) {
			return;
		}

		cb(3);

		if (n <= 5) {
			return;
		}

		size = ptoi23(n);

		prime = alloc(size);
		fill(prime, 0, size, true);

		m = ptoi23(sqrt(n));
		i = ptoi230(first);

		for (;;) {

			if (i >= m) {
				break;
			}

			if (get(prime, i)) {

				p = itop230(i);

				cb(p);

				j = ptoi231(p * p);

				gothrough(prime, j, size, 2 * p);
				gothrough(prime, j + p - 2 * i, size, 2 * p);

			}

			++i;


			if (i >= m) {
				break;
			}

			if (get(prime, i)) {

				p = itop230(i);

				cb(p);

				j = ptoi231(p * p);

				gothrough(prime, j, size, 2 * p);
				gothrough(prime, j + p + 2 * i, size, 2 * p);

			}

			++i;

		}

		i = m;

		for (;;) {

			if (i >= size) {
				break;
			}

			if (get(prime, i)) {
				cb(itop23(i));
			}

			++i;


			if (i >= size) {
				break;
			}

			if (get(prime, i)) {
				cb(itop23(i));
			}

			++i;
		}

		return prime;
	};

	return eratosthene23;

};

exports.eratosthene23 = eratosthene23;
