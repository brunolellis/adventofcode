'use strict';

const strings = require('fs').readFileSync('input/8', 'utf8');

const one = strings.split('\n')
	.reduce((agg, string) => agg + string.length - eval(string).length, 0);

console.log('one =', one);


function encode(string) {
	return '"' + string.replace(/\\/g, '\\\\').replace(/"/g, '\\\"') + '"';
}

const two = strings.split('\n')
	.map(string => encode(string))
	.reduce((agg, string) => agg + string.length - eval(string).length, 0)

console.log('two =', two);
