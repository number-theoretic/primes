
/**
 * Upper bound for computing the nth prime number.
 *
 * see http://math.univ-lille1.fr/~ramare/TME-EMT/Articles/Art01.html
 *
 * /!\ n = 1 will work only if loglog(0) returns 0
 *
 */

export function __upperbound__ ( log , loglog ) {

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

}