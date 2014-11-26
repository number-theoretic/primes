
/**
 * Converts a square Ulam spiral index to an array index.
 *
 */

var atos = function ( i , n ) {

	var s, l, r, L, R, x, y;

	s = Math.sqrt(i) | 0;
	l = s;
	r = s + 1;
	L = l * l;
	R = r * r;
	x = (n - 1) / 2 | 0;
	y = n / 2 | 0;

	if (s % 2 === 1) {
		if (i < (L + R) / 2 | 0) {
			x += (s / 2 | 0) + 1;
			y += (l / 2 | 0) + L - i;
		}
		else {
			x -= (r / 2 | 0) - R + i;
			y -= (s / 2 | 0) + 1;
		}
	}
	else {
		if (i < (L + R) / 2 | 0) {
			x -= (s / 2 | 0);
			y -= (l / 2 | 0) + L - i;
		}
		else {
			x += (r / 2 | 0) + 1 - R + i;
			y += (s / 2 | 0);
		}
	}

	return n * y + x;
};

exports.atos = atos;
