
/**
 * Sieve of Eratosthenes.
 */

export function __eratosthenes__ ( alloc , fill , get , gothrough , usqrt ) {

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

}
