export function __factorize__(two, iadd1, jz, gt1, divmod) {
	return function* (n) {
		let divisor = two();

		while (gt1(n)) {
			const [q, r] = divmod(n, divisor);

			if (jz(r)) {
				yield divisor;

				n = q;
			} else {
				divisor = iadd1(divisor);
			}
		}
	};
}
