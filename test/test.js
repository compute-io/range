
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	range = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-range', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( range ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
				'5',
				5,
				null,
				undefined,
				NaN,
				function(){},
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				range( value );
			};
		}
	});

	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			[],
			{}
		];
		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				range( [], value );
			};
		}
	});

	it( 'should return null if provided an empty array', function test() {
		var expected = null;

		assert.strictEqual( range( [] ), expected );
	});

	it( 'should return the arithmetic range', function test() {
		var data = [ 3,4,2,1,4 ],
			expected = [1,4];

		assert.deepEqual( range( data ), expected );
	});

	it( 'should return the arithmetic range using an accessor function', function test() {
		var data, expected, actual;

		data = [
			[1,3],
			[3,4],
			[4,2],
			[5,1],
			[7,4],
			[8,6]
		];

		expected = [ 1, 6 ];
		actual = range( data, getValue );

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d[ 1 ];
		}
	});

});
