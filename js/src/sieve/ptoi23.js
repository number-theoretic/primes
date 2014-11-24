
var ptoi23 = function ( p ) {
	return ( p % 6 <= 4 ) ? ptoi231( p ) : ptoi230( p );
};

exports.ptoi23 = ptoi23;
