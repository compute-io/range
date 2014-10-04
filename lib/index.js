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

(function() {
	'use strict';

	/**
	* FUNCTION: range( arr )
	*	Returns the arithmetic range of an array of values.
	*/
	function range( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'range()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			min = arr[ 0 ],
			max = min,
			x;

		for ( var i = 1; i < len; i++ ) {
			x = arr[ i ];
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

})();