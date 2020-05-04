import test from 'ava' ;

import { $2, iadd1, eq0, gt1, divmod } from "@aureooms/js-number" ;

import * as prime from '../../../src' ;

const factorize = prime . __factorize__ ( $2, iadd1, eq0, gt1, divmod ) ;

function macro ( t , x , e ) {
	const got = [ ...factorize ( x ) ] ;
	t.deepEqual ( e , got ) ;
}

macro.title = ( providedTitle , x , e ) => `factorize(${x}) = ${JSON.stringify(e)}` ;

test( macro ,   1 , [ ] ) ;
test( macro ,   2 , [ 2 ] ) ;
test( macro ,   3 , [ 3 ] ) ;
test( macro ,   4 , [ 2 , 2 ] ) ;
test( macro ,   5 , [ 5 ] ) ;
test( macro ,   6 , [ 2 , 3 ] ) ;
test( macro ,   7 , [ 7 ] ) ;
test( macro ,   8 , [ 2 , 2 , 2 ] ) ;
test( macro ,  15 , [ 3 , 5 ] ) ;
test( macro ,  17 , [ 17 ] ) ;
test( macro , 999 , [ 3 , 3 , 3 , 37 ] ) ;
