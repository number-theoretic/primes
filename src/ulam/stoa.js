/**
 * Converts an array index to a square Ulam spiral index.
 *
 */

export function stoa(i, n) {
	let line = (i / n) | 0;
	let col = i % n;

	if (n % 2 === 0) {
		line = n - line - 1;
		col = n - col - 1;
	}

	let side_col = 1;
	let side_line = 1;

	let ring_index;
	if (col < n - line) {
		ring_index = Math.min(line, col);
	} else if (col > line) {
		ring_index = n - col - 1;
		side_line = -1;
	} else {
		ring_index = n - line - 1;
		side_col = -1;
	}

	const sub_size = n - ring_index * 2;

	return (
		sub_size * sub_size -
		(sub_size - 1) * 2 +
		side_line * (line - ring_index) -
		side_col * (col - ring_index) -
		1
	);
}
