import test from 'ava' ;

import { alloc , fill , get , set } from "@aureooms/js-array" ;
import { usqrt32 } from "@aureooms/js-uint32" ;
import functools from "@aureooms/js-functools" ;
import * as itertools from "@aureooms/js-itertools" ;

const data = require( "../../data/1000.json" ) ;

import * as prime from '../../../src' ;

const gothrough = prime.__gothrough__( set ) ;

function run ( [ [ sievename , sieve ] , n ] ) {

	test( sievename + " " + n , t => {

		const primes = [] ;

		sieve( n , functools.bind( primes.push , primes , [] ) ) ;

		const len = primes.length ;

		t.deepEqual( primes , data.slice( 0 , len ) , "set contains the first " + len + " prime numbers" ) ;
		t.true( data[len] >= n , "found all primes below " + n + ", next is " + data[len] ) ;

	} ) ;

} ;

const inputs = itertools.product( [

	[
		[ "Eratosthenes" , prime.__eratosthenes__( alloc , fill , get , gothrough , usqrt32 ) ],
		[ "Eratosthenes - 2" , prime.__eratosthenes2__( alloc , fill , get , gothrough , usqrt32 ) ],
		[ "Eratosthenes - 2 , 3" , prime.__eratosthenes23__( alloc , fill , get , gothrough , usqrt32 ) ]
	],
	[ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 10 , 15 , 49 ,100 , 200 , 1000 , 7919 ]

] , 1 ) ;

for ( const x of inputs ) run( x ) ;
