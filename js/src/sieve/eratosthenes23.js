
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
