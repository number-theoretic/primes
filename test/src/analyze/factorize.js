import test from 'ava' ;

import { two, iaddone, iszero, gtone, divmod } from "aureooms-js-number" ;

import * as prime from '../../../src' ;

test ( "factorize" , t => {

	const factorize = prime . __factorize__ ( two, iaddone, iszero, gtone, divmod ) ;

	const factors = [ ] ;

	factorize ( 15, factors ) ;

	t.deepEqual ( factors , [ 3 , 5 ] , "15 is 3 * 5" ) ;

} ) ;
