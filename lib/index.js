/**
*
*	COMPUTE: range
*
*
*	DESCRIPTION:
*		- Computes the arithmetic range of an array of values.
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
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

/**
* FUNCTION: range( arr[, accessor] )
*	Returns the arithmetic range of an array of values.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Array|null} arithmetic range or null
*/
function range( arr, clbk ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'range()::invalid input argument. Must provide an array.' );
	}

	if ( arguments.length > 1 && typeof clbk !== 'function' ) {
		throw new TypeError( 'range()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}

	var len = arr.length,
		min = ( clbk ) ? clbk( arr[0] ) : arr[ 0 ],
		max = min,
		x;

	if ( len === 0 ) {
		return null;
	}

	for ( var i = 1; i < len; i++ ) {
		x = ( clbk ) ? clbk( arr[i] ) : arr[ i ];
		if ( x < min ) {
			min = x;
		} else if ( x > max ) {
			max = x;
		}
	}
	return [ min, max ];
} // end FUNCTION range()


// EXPORTS //

module.exports = range;
