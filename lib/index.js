/**
*
*	COMPUTE: range
*
*
*	DESCRIPTION:
*		- Computes the arithmetic range of an array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014-2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );


// RANGE //

/**
* FUNCTION: range( arr[, accessor] )
*	Returns the arithmetic range of an array.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Array|null} arithmetic range or null
*/
function range( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'range()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}

	if ( arguments.length > 1 && !isFunction( clbk ) ) {
		throw new TypeError( 'range()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}
	var len = arr.length,
		min,
		max,
		x, i;

	if ( len === 0 ) {
		return null;
	}
	if ( clbk ) {
		min = clbk( arr[ 0 ] );
		max = min;
		for ( i = 1; i < len; i++ ) {
			x = clbk( arr[ i ] );
			if ( x < min ) {
				min = x;
			} else if ( x > max ) {
				max = x;
			}
		}
	} else {
		min = arr[ 0 ];
		max = min;
		for ( i = 1; i < len; i++ ) {
			x = arr[ i ];
			if ( x < min ) {
				min = x;
			} else if ( x > max ) {
				max = x;
			}
		}
	}
	return [ min, max ];
} // end FUNCTION range()


// EXPORTS //

module.exports = range;
