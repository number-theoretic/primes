
var run , array , uint32 , functools , itertools , data , alloc , fill , get , gothrough , usqrt;

array = require( "aureooms-js-array" ) ;
uint32 = require( "aureooms-js-uint32") ;
functools = require( "aureooms-js-functools" ) ;
itertools = require( "aureooms-js-itertools" ) ;

data = require( "../../data/1000.json" ) ;

alloc = array.alloc ;
fill = array.fill ;
get = array.get ;
gothrough = prime.__gothrough__( array.set ) ;
usqrt = uint32.usqrt ;

run = function ( sievename , sieve , n ) {

	test( sievename + " " + n , function ( ) {

		var i , primes , len ;

		primes = [] ;

		sieve( n , functools.bind( primes.push , primes , [] ) ) ;

		len = primes.length ;

		deepEqual( primes , data.slice( 0 , len ) , "set contains the first " + len + " prime numbers" ) ;
		ok( data[len] >= n , "found all primes below " + n + ", next is " + data[len] ) ;


	} ) ;

} ;


itertools.product( [

	[
		[ "eratosthene" , prime.__eratosthene__( alloc , fill , get , gothrough , usqrt ) ],
		[ "eratosthene2" , prime.__eratosthene2__( alloc , fill , get , gothrough , usqrt ) ],
		[ "eratosthene23" , prime.__eratosthene23__( alloc , fill , get , gothrough , usqrt ) ]
	],
	[ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 10 , 15 , 100 , 200 , 1000 , 7919 ]

] , 1 , [] ).forEach( functools.partial( functools.star , run ) ) ;
