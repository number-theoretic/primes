
/**
 * Upper bound for computing the nth prime number.
 *
 *
 */

var __upperbound__ = function (log, loglog) {

	var upperbound = function (n) {
		if (n < 55) {
			return n * (log(n) + loglog(n)) + 3;
		}
		else if (n < 39018) {
			return n * (log(n) + loglog(n) - 0.5);
		}
		else{
			return n * (log(n) + loglog(n) - 0.9484);
		}
	};

	return upperbound;

};

exports.__upperbound__ = __upperbound__;