
export function __factorize__ ( two, iaddone, iszero, gtone, divmod ) {

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

}
