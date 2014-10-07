
/**
 * Goes through an array and crosses out non prime numbers.
 */

var __gothrough__ = function (set) {

	var gothrough = function (prime, i, j, k) {
		for (; i < j; i += k) {
			set(prime, i, false);
		}
	};

	return gothrough;

};

exports.__gothrough__ = __gothrough__;
