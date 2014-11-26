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
/* js/src/sieve/eratosthenes.js */

/**
 * Sieve of Eratosthenes.
 */

var __eratosthenes__ = function ( alloc , fill , get , gothrough , usqrt ) {

	var first = 2 ;

	var eratosthenes = function ( n , callback ) {

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

	return eratosthenes ;

} ;

exports.__eratosthenes__ = __eratosthenes__ ;

/* js/src/sieve/eratosthenes2.js */

/**
 * Sieve of Eratosthenes skipping all multiples of 2.
 */

var __eratosthenes2__ = function ( alloc , fill , get , gothrough , usqrt ) {

	var first = 3 ;

	var eratosthenes2 = function ( n , callback ) {

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

	return eratosthenes2 ;

} ;

exports.__eratosthenes2__ = __eratosthenes2__ ;

/* js/src/sieve/eratosthenes23.js */

/**
 * Sieve of Eratosthenes skipping all multiples of 2 and 3.
 *
 * 5 7 11 13 17 19 23 25 29 31 35 37 41 43 47 49 53 55 59 61 65 67 71 73 77 79
 * 0 1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
 *
 * 83 85 89 91 95 97 101 103 107 109 113 115 119 121 125 127 131 133 137 139
 * 26 27 28 29 30 31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
 *
 * 143 145 149 151 155 157 161 163 167 169 173 175 179 181 185 187 191
 *  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62
 *
 *
 *
 * i( 5) = 0
 * i(25) = 7
 * i(35) = 10 = 7 + 5 - 2
 *
 * i( 7) = 1
 * i(49) = 15
 * i(77) = 24 = 15 + 7 + 2
 *
 * i( 11) = 2
 * i(121) = 39
 * i(143) = 46 = 39 + 11 - 4
 *
 * i( 13) = 3
 * i(139) = 45
 * i(191) = 62 = 45 + 13 + 4
 */

var __eratosthenes23__ = function ( alloc , fill , get , gothrough , usqrt ) {

	var first = 5 ;

	var eratosthenes23 = function ( n , callback ) {

		var size , sieve , m , i , j , p , l ;

		if ( n <= 2 ) {
			return null ;
		}

		callback( 2 ) ;

		if ( n <= 3 ) {
			return null ;
		}

		callback( 3 ) ;

		if ( n <= 5 ) {
			return null ;
		}

		size = ptoi23( n ) ;

		sieve = alloc( size ) ;
		fill( sieve , 0 , size , true ) ;

		m = ptoi23( usqrt( n ) ) ;
		i = ptoi230( first ) ;

		for ( l = 2 ; ; l += 2 ) {

			if ( i >= m ) {
				break ;
			}

			if ( get( sieve , i ) ) {

				p = itop230( i ) ;

				callback( p ) ;

				j = ptoi231( p * p ) ;

				gothrough( sieve , j , size , 2 * p ) ;
				gothrough( sieve , j + p - l , size , 2 * p ) ;

			}

			++i ;


			if ( i >= m ) {
				break ;
			}

			if ( get( sieve , i ) ) {

				p = itop231( i ) ;

				callback( p ) ;

				j = ptoi231( p * p ) ;

				gothrough( sieve , j , size , 2 * p ) ;
				gothrough( sieve , j + p + l , size , 2 * p ) ;

			}

			++i ;

		}

		i = m ;

		for ( ; ; ) {

			if ( i >= size ) {
				break ;
			}

			if ( get( sieve , i ) ) {
				callback( itop23( i ) ) ;
			}

			++i ;


			if ( i >= size ) {
				break ;
			}

			if ( get( sieve , i ) ) {
				callback( itop23( i ) ) ;
			}

			++i ;
		}

		return sieve ;
	} ;

	return eratosthenes23 ;

} ;

exports.__eratosthenes23__ = __eratosthenes23__ ;

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

var itop23 = function ( i ) {
	return ( i % 2 === 0 ) ? itop230( i ) : itop231( i ) ;
};

exports.itop23 = itop23;

/* js/src/sieve/itop230.js */

var itop230 = function ( i ) {
	return 6 * ( ( i / 2 | 0 ) + 1 ) - 1 ;
};

exports.itop230 = itop230;

/* js/src/sieve/itop231.js */

var itop231 = function ( i ) {
	return 6 * ( ( i / 2 | 0 ) + 1 ) + 1 ;
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
	return ( p % 6 > 4 ) ? ptoi230( p ) : ptoi231( p ) ;
};

exports.ptoi23 = ptoi23;

/* js/src/sieve/ptoi230.js */

var ptoi230 = function ( p ) {
	return Math.ceil( ( p + 1 ) / 3 ) - 2 ;
};

exports.ptoi230 = ptoi230;

/* js/src/sieve/ptoi231.js */

var ptoi231 = function ( p ) {
	return Math.ceil( ( p - 1 ) / 3 ) - 1 ;
};

exports.ptoi231 = ptoi231;

/* js/src/ulam */
/* js/src/ulam/atos.js */

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

/* js/src/ulam/stoa.js */

/**
 * Converts an array index to a square Ulam spiral index.
 *
 */

var stoa = function ( i , n ) {

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

exports.stoa = stoa;

})(typeof exports === 'undefined' ? this['prime'] = {} : exports);
