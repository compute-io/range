Range
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the arithmetic range of an array.


## Installation

``` bash
$ npm install compute-range
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var range = require( 'compute-range' );
```

#### range( arr[, accessor] )

Computes the arithmetic range of an `array`. For primitive number `arrays`,

``` javascript
var arr = [ 2, 3, 4, 1 ];

var r = range( arr );
// returns [ 1, 4 ]
```

For object `arrays`, provide an accessor `function` for accessing numeric `array` values

``` javascript
var arr = [
	[1,2],
	[3,3],
	[4,4],
	[6,1]
];

function getValue( d ) {
	return d[ 1 ];
}

var r = range( arr, getValue );
// returns [ 1, 4 ]
```


## Notes

* 	if provided an empty `array`, the function returns `null`.
*	the first value of the returned `array` is always the minimum value and the second value is always the maximum value.



## Examples

``` javascript
var range = require( 'compute-range' );

var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}
console.log( range( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-range.svg
[npm-url]: https://npmjs.org/package/compute-range

[travis-image]: http://img.shields.io/travis/compute-io/range/master.svg
[travis-url]: https://travis-ci.org/compute-io/range

[coveralls-image]: https://img.shields.io/coveralls/compute-io/range/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/range?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/range.svg
[dependencies-url]: https://david-dm.org/compute-io/range

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/range.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/range

[github-issues-image]: http://img.shields.io/github/issues/compute-io/range.svg
[github-issues-url]: https://github.com/compute-io/range/issues
