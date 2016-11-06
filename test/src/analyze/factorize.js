import test from 'ava' ;

import { $2, iadd1, eq0, gt1, divmod } from "aureooms-js-number" ;

import * as prime from '../../../src' ;

test ( "factorize" , t => {

	const factorize = prime . __factorize__ ( $2, iadd1, eq0, gt1, divmod ) ;

	const factors = [ ] ;

	factorize ( 15, factors ) ;

	t.deepEqual ( factors , [ 3 , 5 ] , "15 is 3 * 5" ) ;

} ) ;
