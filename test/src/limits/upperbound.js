import test from 'ava' ;

import { loge , logloge } from "aureooms-js-number" ;

import * as prime from '../../../src' ;

test( "limits" , t => {

	const upperbound = prime.__upperbound__( loge , logloge ) ;

	t.true( upperbound( 54 ) > 251 , "54" ) ;
	t.true( upperbound( 55 ) > 257 , "55" ) ;
	t.true( upperbound( 1000 ) > 7919 , "1000" ) ;
	t.true( upperbound( 39017 ) > 467473 , "39017" ) ;
	t.true( upperbound( 39018 ) > 467477 , "39018" ) ;

} ) ;
