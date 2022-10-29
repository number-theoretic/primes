/**
 * Converts an array index to a square Ulam spiral index.
 *
 * n = 1
 *
 * 1
 *
 * n = 2
 *
 * 4 3
 * 1 2
 *
 * n = 3
 *
 * 5 4 3
 * 6 1 2
 * 7 8 9
 *
 * n = 4
 *
 * 16 15 14 13
 *  5  4  3 12
 *  6  1  2 11
 *  7  8  9 10
 *
 * n = 5
 *
 * 17 16 15 14 13
 * 18  5  4  3 12
 * 19  6  1  2 11
 * 20  7  8  9 10
 * 21 22 23 24 25
 *
 */
import test from 'ava';
import {atos, stoa} from '../../../src/index.js';

test('ulam convert', (t) => {
	t.is(atos(0, 1), 0 * 1 + 0, '1 should be the only element ( n = 1 )');
	t.is(atos(0, 2), 1 * 2 + 0, '1 should be in the upper left corner ( n = 2 )');
	t.is(atos(0, 3), 1 * 3 + 1, '1 should be in the center ( n = 3 )');
	t.is(
		atos(0, 4),
		2 * 4 + 1,
		'1 should be in the upper left of the center ( n = 4 )',
	);
	t.is(atos(0, 5), 2 * 5 + 2, '1 should be in the center ( n = 5 )');

	t.is(stoa(0 * 1 + 0, 1), 0, 'the only element should be 1 ( n = 1 )');
	t.is(
		stoa(1 * 2 + 0, 2),
		0,
		'the upper left corner should contain 1 ( n = 2 )',
	);
	t.is(stoa(1 * 3 + 1, 3), 0, 'the center should contain 1 ( n = 3 )');
	t.is(
		stoa(2 * 4 + 1, 4),
		0,
		'the upper left of the center should contain 1 ( n = 4 )',
	);
	t.is(stoa(2 * 5 + 2, 5), 0, 'the center should contain 1 ( n = 5 )');

	const as = function (i, n) {
		return atos(stoa(i, n), n);
	};

	const sa = function (i, n) {
		return stoa(atos(i, n), n);
	};

	const backandforth = function (n) {
		for (let i = 0; i < n * n; ++i) {
			t.is(as(i, n), i, `as(${i}, 3)`);
			t.is(sa(i, n), i, `sa(${i}, 3)`);
		}
	};

	backandforth(1);
	backandforth(2);
	backandforth(3);
	backandforth(4);
	backandforth(5);
});
