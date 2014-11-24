
var number ;

number = require( "aureooms-js-number" ) ;

test( "limits" , function ( ) {

	var upperbound ;

	upperbound = prime.__upperbound__( number.loge , number.logloge ) ;

	ok( upperbound( 54 ) > 251 , "54" ) ;
	ok( upperbound( 55 ) > 257 , "55" ) ;
	ok( upperbound( 1000 ) > 7919 , "1000" ) ;
	ok( upperbound( 39017 ) > 467473 , "39017" ) ;
	ok( upperbound( 39018 ) > 467477 , "39018" ) ;


} ) ;
