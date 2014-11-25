(function(exports, undefined){

	'use strict';


/* js/src/analyze */
/* js/src/analyze/factorize.js */

var __factorize__ = function ( two, iaddone, iszero, gtone, divmod ) {

	var factorize = function ( n, factors ) {

		var divisor , qr , q , r ;

		divisor = two ( ) ;

		while ( gtone ( n ) ) {

			// [ q , r ] = divmod ( n , divisor ) ; FOR ES6
			qr = divmod ( n , divisor ) ;

			q = qr[0] ;
			r = qr[1] ;

			if ( iszero ( r ) ) {

				factors . push ( divisor ) ;

				n = q ;

			}

			else {
				divisor = iaddone ( divisor ) ;
			}

		}

	} ;

	return factorize ;

} ;

exports.__factorize__ = __factorize__;

/* js/src/limits */
/* js/src/limits/upperbound.js */

/**
 * Upper bound for computing the nth prime number.
 *
 * see http://math.univ-lille1.fr/~ramare/TME-EMT/Articles/Art01.html
 *
 * /!\ n = 1 will work only if loglog(0) returns 0
 *
 */

var __upperbound__ = function ( log , loglog ) {

	var upperbound = function ( n ) {
		if ( n < 55 ) {
			return n * ( log( n ) + loglog( n ) ) + 3 ;
		}
		else if ( n < 39018 ) {
			return n * ( log( n ) + loglog( n ) - 0.5 ) ;
		}
		else{
			return n * ( log( n ) + loglog( n ) - 0.9484 ) ;
		}
	} ;

	return upperbound ;

} ;

exports.__upperbound__ = __upperbound__ ;

/* js/src/sieve */
/* js/src/sieve/eratosthene.js */

/**
 * Sieve of erathostene.
 */

var __eratosthene__ = function ( alloc , fill , get , gothrough , usqrt ) {

	var first = 2 ;

	var eratosthene = function ( n , callback ) {

		var size , sieve , m , i , p ;

		if ( n <= 2 ) {
			return null ;
		}

		size = ptoi( n ) ;

		sieve = alloc( size ) ;
		fill( sieve , 0 , size , true ) ;

		m = ptoi( usqrt( n ) ) ;

		for ( i = ptoi( first ) ; i < m ; ++i ) {
			if ( get( sieve , i ) ) {
				p = itop( i ) ;
				callback( p ) ;
				gothrough( sieve , ptoi( p * p ) , size , p ) ;
			}
		}

		for ( i = m ; i < size ; ++i ) {
			if ( get( sieve , i ) ) {
				callback( itop( i ) ) ;
			}
		}

		return sieve ;
	} ;

	return eratosthene ;

} ;

exports.__eratosthene__ = __eratosthene__ ;

/* js/src/sieve/eratosthene2.js */

/**
 * Sieve of erathostene skipping all multiples of 2.
 */

var __eratosthene2__ = function ( alloc , fill , get , gothrough , usqrt ) {

	var first = 3 ;

	var eratosthene2 = function ( n , callback ) {

		var size , sieve , m , i , p ;

		if ( n <= 2 ) {
			return null ;
		}

		callback( 2 ) ;

		if ( n <= 3 ) {
			return null ;
		}

		size = ptoi2( n ) ;

		sieve = alloc( size ) ;
		fill( sieve , 0 , size , true ) ;

		m = ptoi2( usqrt( n ) ) ;

		for ( i = ptoi2( first ) ; i < m ; ++i ) {
			if ( get( sieve , i ) ) {
				p = itop2( i ) ;
				callback( p ) ;
				gothrough( sieve , ptoi2( p * p ) , size , p ) ;
			}
		}

		for ( i = m ; i < size ; ++i ) {
			if ( get( sieve , i ) ) {
				callback( itop2( i ) ) ;
			}
		}

		return sieve ;
	} ;

	return eratosthene2 ;

} ;

exports.__eratosthene2__ = __eratosthene2__ ;

/* js/src/sieve/eratosthene23.js */

/**
 * Sieve of erathostene skipping all multiples of 2 and 3.
 */

var __eratosthene23__ = function (alloc, get, gothrough, sqrt) {

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

		size = ptoi23(n);

		prime = alloc(size);
		fill(prime, 0, size, true);

		m = ptoi23(sqrt(n));
		i = ptoi230(first);

		for (;;) {

			if (i >= m) {
				break;
			}

			if (get(prime, i)) {

				p = itop230(i);

				cb(p);

				j = ptoi231(p * p);

				gothrough(prime, j, size, 2 * p);
				gothrough(prime, j + p - 2 * i, size, 2 * p);

			}

			++i;


			if (i >= m) {
				break;
			}

			if (get(prime, i)) {

				p = itop230(i);

				cb(p);

				j = ptoi231(p * p);

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
				cb(itop23(i));
			}

			++i;


			if (i >= size) {
				break;
			}

			if (get(prime, i)) {
				cb(itop23(i));
			}

			++i;
		}

		return prime;
	};

	return eratosthene23;

};

exports.__eratosthene23__ = __eratosthene23__;

/* js/src/sieve/gothrough.js */

/**
 * Goes through an array and crosses out non prime numbers.
 *
 * @param  {setter} set function ( a , i , v ) that sets value v at index i in array a
 */
var __gothrough__ = function ( set ) {

	var gothrough = function ( prime , i , j , k ) {

		for ( ; i < j ; i += k ) {
			set( prime , i , false ) ;
		}

	};

	return gothrough ;

};

exports.__gothrough__ = __gothrough__ ;

/* js/src/sieve/itop.js */

var itop = function ( i ) {
	return i ;
} ;

exports.itop = itop ;

/* js/src/sieve/itop2.js */

var itop2 = function (i) {
	return i * 2 + 1;
};

exports.itop2 = itop2;

/* js/src/sieve/itop23.js */

var itop23 = function (i) {
	return (i % 2 === 0) ? itop230(i) : itop231(i);
};

exports.itop23 = itop23;

/* js/src/sieve/itop230.js */

var itop230 = function (i) {
	return 6 * ((i / 2 | 0) + 1) - 1;
};

exports.itop230 = itop230;

/* js/src/sieve/itop231.js */

var itop231 = function (i) {
	return 6 * ((i / 2 | 0) + 1) + 1;
};

exports.itop231 = itop231;

/* js/src/sieve/ptoi.js */

var ptoi = function ( p ) {
	return p ;
} ;

exports.ptoi = ptoi ;

/* js/src/sieve/ptoi2.js */

var ptoi2 = function (p) {
	return p / 2 | 0;
};

exports.ptoi2 = ptoi2;

/* js/src/sieve/ptoi23.js */

var ptoi23 = function ( p ) {
	return ( p % 6 <= 4 ) ? ptoi231( p ) : ptoi230( p );
};

exports.ptoi23 = ptoi23;

/* js/src/sieve/ptoi230.js */

var ptoi230 = function ( p ) {
	return ( ( p + 1 ) / 3 | 0 ) - 2;
};

exports.ptoi230 = ptoi230;

/* js/src/sieve/ptoi231.js */

var ptoi231 = function ( p ) {
	return ( ( p - 1 ) / 3 | 0 ) - 1;
};

exports.ptoi231 = ptoi231;

/* js/src/ulam */
/* js/src/ulam/atos.js */

/**
 * Converts an array index to a square Ulam spiral index.
 *
 */

var atos = function (i, n) {

	var line, col, ring_index, side_col, side_line, sub_size;

	line = i / n | 0;
	col = i % n;

	if (n % 2 === 0) {
		line = n - line - 1;
		col = n - col - 1;
	}

	side_col = 1;
	side_line = 1;

	if (col < n - line) {
		ring_index = Math.min(line, col);
	}
	else if (col > line) {
		ring_index = n - col - 1;
		side_line = -1;
	}
	else{
		ring_index = n - line - 1;
		side_col = -1;
	}

	sub_size = n - ring_index * 2;

	return sub_size * sub_size - (sub_size - 1) * 2 + side_line * (line - ring_index) - side_col * (col - ring_index) - 1;
};

exports.atos = atos;

/* js/src/ulam/stoa.js */

/**
 * Converts a square Ulam spiral index to an array index.
 *
 */

var stoa = function (i, n) {

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

exports.stoa = stoa;

})(typeof exports === 'undefined' ? this['prime'] = {} : exports);
