"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__upperbound__ = __upperbound__;

/**
 * Upper bound for computing the nth prime number.
 *
 * see http://math.univ-lille1.fr/~ramare/TME-EMT/Articles/Art01.html
 *
 * /!\ n = 1 will work only if loglog(0) returns 0
 *
 */

function __upperbound__(log, loglog) {

	var upperbound = function upperbound(n) {
		if (n < 55) {
			return n * (log(n) + loglog(n)) + 3;
		} else if (n < 39018) {
			return n * (log(n) + loglog(n) - 0.5);
		} else {
			return n * (log(n) + loglog(n) - 0.9484);
		}
	};

	return upperbound;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saW1pdHMvdXBwZXJib3VuZC5qcyJdLCJuYW1lcyI6WyJfX3VwcGVyYm91bmRfXyIsImxvZyIsImxvZ2xvZyIsInVwcGVyYm91bmQiLCJuIl0sIm1hcHBpbmdzIjoiOzs7OztRQVVnQkEsYyxHQUFBQSxjOztBQVRoQjs7Ozs7Ozs7O0FBU08sU0FBU0EsY0FBVCxDQUEwQkMsR0FBMUIsRUFBZ0NDLE1BQWhDLEVBQXlDOztBQUUvQyxLQUFJQyxhQUFhLFNBQWJBLFVBQWEsQ0FBV0MsQ0FBWCxFQUFlO0FBQy9CLE1BQUtBLElBQUksRUFBVCxFQUFjO0FBQ2IsVUFBT0EsS0FBTUgsSUFBS0csQ0FBTCxJQUFXRixPQUFRRSxDQUFSLENBQWpCLElBQWlDLENBQXhDO0FBQ0EsR0FGRCxNQUdLLElBQUtBLElBQUksS0FBVCxFQUFpQjtBQUNyQixVQUFPQSxLQUFNSCxJQUFLRyxDQUFMLElBQVdGLE9BQVFFLENBQVIsQ0FBWCxHQUF5QixHQUEvQixDQUFQO0FBQ0EsR0FGSSxNQUdEO0FBQ0gsVUFBT0EsS0FBTUgsSUFBS0csQ0FBTCxJQUFXRixPQUFRRSxDQUFSLENBQVgsR0FBeUIsTUFBL0IsQ0FBUDtBQUNBO0FBQ0QsRUFWRDs7QUFZQSxRQUFPRCxVQUFQO0FBRUEiLCJmaWxlIjoidXBwZXJib3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBVcHBlciBib3VuZCBmb3IgY29tcHV0aW5nIHRoZSBudGggcHJpbWUgbnVtYmVyLlxuICpcbiAqIHNlZSBodHRwOi8vbWF0aC51bml2LWxpbGxlMS5mci9+cmFtYXJlL1RNRS1FTVQvQXJ0aWNsZXMvQXJ0MDEuaHRtbFxuICpcbiAqIC8hXFwgbiA9IDEgd2lsbCB3b3JrIG9ubHkgaWYgbG9nbG9nKDApIHJldHVybnMgMFxuICpcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gX191cHBlcmJvdW5kX18gKCBsb2cgLCBsb2dsb2cgKSB7XG5cblx0dmFyIHVwcGVyYm91bmQgPSBmdW5jdGlvbiAoIG4gKSB7XG5cdFx0aWYgKCBuIDwgNTUgKSB7XG5cdFx0XHRyZXR1cm4gbiAqICggbG9nKCBuICkgKyBsb2dsb2coIG4gKSApICsgMyA7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKCBuIDwgMzkwMTggKSB7XG5cdFx0XHRyZXR1cm4gbiAqICggbG9nKCBuICkgKyBsb2dsb2coIG4gKSAtIDAuNSApIDtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdHJldHVybiBuICogKCBsb2coIG4gKSArIGxvZ2xvZyggbiApIC0gMC45NDg0ICkgO1xuXHRcdH1cblx0fSA7XG5cblx0cmV0dXJuIHVwcGVyYm91bmQgO1xuXG59XG4iXX0=