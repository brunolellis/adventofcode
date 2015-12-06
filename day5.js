"use strict";

const SEQUENCES = ['ab', 'cd', 'pq', 'xy'];
const strings = require('fs').readFileSync('input/5', 'utf8');

class SantaString {

	constructor(text) {
		this.text = text;
	}

	_countVowels() {
		return (this.text.match(/[aeiou]/gi) || []).length >= 3;
	}

	_containsTwoLettersInARow() {
		return (this.text.match(/([a-z])\1/g) || []).length > 0;
	}

	_containsSequence() {
		let text = this.text;
		return SEQUENCES.reduce(function(agg, element) { 
			return (agg || text.includes(element)); 
		}, false) === false;
	}

	isNice() {
		// 1. contains 3 vowels;
		// 2. at least 2 letters that appears twice in a row;
		// 3. does NOT contain 'ab', 'cd', 'pq', or 'xy'.
		return this._countVowels() && this._containsTwoLettersInARow() && this._containsSequence();
	}
}

console.log(strings.split('\n').reduce(function(agg, element) {
	return new SantaString(element).isNice() ? ++agg : agg;
}, 0));