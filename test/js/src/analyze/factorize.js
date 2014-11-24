
var number , two , iaddone , iszero , gtone , divmod ;

number = require ( "aureooms-js-number" ) ;

two = number . two ;
iaddone = number . iaddone ;
iszero = number . iszero ;
gtone = number . gtone ;
divmod = number . divmod ;


test ( "factorize" , function ( ) {

	var factorize , factors ;

	factorize = prime . __factorize__ ( two, iaddone, iszero, gtone, divmod ) ;

	factors = [ ] ;

	factorize ( 15, factors ) ;

	deepEqual ( factors , [ 3 , 5 ] , "15 is 3 * 5" ) ;

} ) ;
