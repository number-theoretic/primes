
/**
 * Sieve of erathostene skipping all multiples of 2 and 3.
 */

var __eratosthene23__ = function (alloc, get, gothrough, sqrt) {


	var itop0 = function (i) {
		return 6 * ((i / 2 | 0) + 1) - 1;
	};

	var itop1 = function (i) {
		return 6 * ((i / 2 | 0) + 1) + 1;
	};

	var itop = function (i) {
		return (i % 2 === 0) ? itop0(i) : itop1(i);
	};


	var ptoi0 = function (p) {
		return ((p + 1) / 3 | 0) - 2;
	};


	var ptoi1 = function (p) {
		return ((p - 1) / 3 | 0) - 1;
	};

	var ptoi = function (p) {
		return (p % 6 <= 4) ? ptoi1(p) : ptoi0(p)
	};

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

		size = ptoi(n);

		prime = alloc(size);
		fill(prime, 0, size, true);

		m = ptoi(sqrt(n));
		i = ptoi0(first);

		for (;;) {

			if (i >= m) {
				break;
			}

			if (get(prime, i)) {

				p = itop0(i);

				cb(p);

				j = ptoi1(p * p);

				gothrough(prime, j, size, 2 * p);
				gothrough(prime, j + p - 2 * i, size, 2 * p);

			}

			++i;


			if (i >= m) {
				break;
			}

			if (get(prime, i)) {

				p = itop0(i);

				cb(p);

				j = ptoi1(p * p);

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
				cb(itop(i));
			}

			++i;


			if (i >= size) {
				break;
			}

			if (get(prime, i)) {
				cb(itop(i));
			}

			++i;
		}

		return prime;
	};

	return eratosthene23;

};

exports.eratosthene23 = eratosthene23;
