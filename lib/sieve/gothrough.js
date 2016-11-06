"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.__gothrough__ = __gothrough__;

/**
 * Goes through an array and crosses out non prime numbers.
 *
 * @param  {setter} set function ( a , i , v ) that sets value v at index i in array a
 */
function __gothrough__(set) {

	var gothrough = function gothrough(prime, i, j, k) {

		for (; i < j; i += k) {
			set(prime, i, false);
		}
	};

	return gothrough;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaWV2ZS9nb3Rocm91Z2guanMiXSwibmFtZXMiOlsiX19nb3Rocm91Z2hfXyIsInNldCIsImdvdGhyb3VnaCIsInByaW1lIiwiaSIsImoiLCJrIl0sIm1hcHBpbmdzIjoiOzs7OztRQU1nQkEsYSxHQUFBQSxhOztBQUxoQjs7Ozs7QUFLTyxTQUFTQSxhQUFULENBQXlCQyxHQUF6QixFQUErQjs7QUFFckMsS0FBSUMsWUFBWSxTQUFaQSxTQUFZLENBQVdDLEtBQVgsRUFBbUJDLENBQW5CLEVBQXVCQyxDQUF2QixFQUEyQkMsQ0FBM0IsRUFBK0I7O0FBRTlDLFNBQVFGLElBQUlDLENBQVosRUFBZ0JELEtBQUtFLENBQXJCLEVBQXlCO0FBQ3hCTCxPQUFLRSxLQUFMLEVBQWFDLENBQWIsRUFBaUIsS0FBakI7QUFDQTtBQUVELEVBTkQ7O0FBUUEsUUFBT0YsU0FBUDtBQUVBIiwiZmlsZSI6ImdvdGhyb3VnaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBHb2VzIHRocm91Z2ggYW4gYXJyYXkgYW5kIGNyb3NzZXMgb3V0IG5vbiBwcmltZSBudW1iZXJzLlxuICpcbiAqIEBwYXJhbSAge3NldHRlcn0gc2V0IGZ1bmN0aW9uICggYSAsIGkgLCB2ICkgdGhhdCBzZXRzIHZhbHVlIHYgYXQgaW5kZXggaSBpbiBhcnJheSBhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfX2dvdGhyb3VnaF9fICggc2V0ICkge1xuXG5cdHZhciBnb3Rocm91Z2ggPSBmdW5jdGlvbiAoIHByaW1lICwgaSAsIGogLCBrICkge1xuXG5cdFx0Zm9yICggOyBpIDwgaiA7IGkgKz0gayApIHtcblx0XHRcdHNldCggcHJpbWUgLCBpICwgZmFsc2UgKSA7XG5cdFx0fVxuXG5cdH07XG5cblx0cmV0dXJuIGdvdGhyb3VnaCA7XG5cbn1cbiJdfQ==