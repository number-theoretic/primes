
var __factorize__ = function ( two, addone, iszero, gtone, div ) {

	var factorize = function ( n, out ) {

		divisor = two;

		while ( gtone( n ) ) {

			qr = div( n, divisor );

			q = qr[0];
			r = qr[1];

			if ( iszero( r ) ) {

				out.push( d );

				n = q;
			}

			else {
				divisor = addone( divisor );
			}

		}

	};

};

exports.__factorize__ = __factorize__;
