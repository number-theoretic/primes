
/**
* Converts an array index to a square Ulam spiral index.
*
* n = 1
*
* 1
*
* n = 2
*
* 4 3
* 1 2
*
* n = 3
*
* 5 4 3
* 6 1 2
* 7 8 9
*
* n = 4
*
* 16 15 14 13
*  5  4  3 12
*  6  1  2 11
*  7  8  9 10
*
* n = 5
*
* 17 16 15 14 13
* 18  5  4  3 12
* 19  6  1  2 11
* 20  7  8  9 10
* 21 22 23 24 25
*
*/

test( "ulam convert" , function ( ) {

	var i , atos , stoa , as , sa , backandforth ;

	atos = prime.atos ;
	stoa = prime.stoa ;

	deepEqual( atos( 0 , 1 ) , 0 * 1 + 0 , "1 should be the only element ( n = 1 )" ) ;
	deepEqual( atos( 0 , 2 ) , 1 * 2 + 0 , "1 should be in the upper left corner ( n = 2 )" ) ;
	deepEqual( atos( 0 , 3 ) , 1 * 3 + 1 , "1 should be in the center ( n = 3 )" ) ;
	deepEqual( atos( 0 , 4 ) , 2 * 4 + 1 , "1 should be in the upper left of the center ( n = 4 )" ) ;
	deepEqual( atos( 0 , 5 ) , 2 * 5 + 2 , "1 should be in the center ( n = 5 )" ) ;

	deepEqual( stoa( 0 * 1 + 0 , 1 ) , 0 , "the only element should be 1 ( n = 1 )" ) ;
	deepEqual( stoa( 1 * 2 + 0 , 2 ) , 0 , "the upper left corner should contain 1 ( n = 2 )" ) ;
	deepEqual( stoa( 1 * 3 + 1 , 3 ) , 0 , "the center should contain 1 ( n = 3 )" ) ;
	deepEqual( stoa( 2 * 4 + 1 , 4 ) , 0 , "the upper left of the center should contain 1 ( n = 4 )" ) ;
	deepEqual( stoa( 2 * 5 + 2 , 5 ) , 0 , "the center should contain 1 ( n = 5 )" ) ;

	as = function ( i , n ) {
		return atos( stoa( i , n ) , n ) ;
	} ;

	sa = function ( i , n ) {
		return stoa( atos( i , n ) , n ) ;
	} ;

	backandforth = function ( n ) {

		for ( i = 0 ; i < n * n ; ++i ) {
			deepEqual( as( i , n ) , i , "as( " + i + " , 3 )" ) ;
			deepEqual( sa( i , n ) , i , "sa( " + i + " , 3 )" ) ;
		}

	} ;

	backandforth( 1 )  ;
	backandforth( 2 )  ;
	backandforth( 3 )  ;
	backandforth( 4 )  ;
	backandforth( 5 )  ;

} ) ;
