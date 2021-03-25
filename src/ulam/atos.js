/**
 * Converts a square Ulam spiral index to an array index.
 *
 */

export function atos(i, n) {
	const s = Math.sqrt(i) | 0;
	const l = s;
	const r = s + 1;
	const L = l * l;
	const R = r * r;
	let x = ((n - 1) / 2) | 0;
	let y = (n / 2) | 0;

	if (s % 2 === 1) {
		if ((i < (L + R) / 2) | 0) {
			x += ((s / 2) | 0) + 1;
			y += ((l / 2) | 0) + L - i;
		} else {
			x -= ((r / 2) | 0) - R + i;
			y -= ((s / 2) | 0) + 1;
		}
	} else if ((i < (L + R) / 2) | 0) {
		x -= (s / 2) | 0;
		y -= ((l / 2) | 0) + L - i;
	} else {
		x += ((r / 2) | 0) + 1 - R + i;
		y += (s / 2) | 0;
	}

	return n * y + x;
}
