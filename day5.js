"use strict";

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const SEQUENCES = ['ab', 'cd', 'pq', 'xy'];

const strings = require('fs').readFileSync('input/5', 'utf8');

class SantaString {

	constructor(text) {
		this.text = text;
	}

	_countVowels() {
		return this.text.split('').reduce(function (agg, element) { 
			return VOWELS.includes(element) ? ++agg : agg; 
		}, 0) >= 3;
	}

	_containsTwoLettersInARow() {
		return this.text.split('').reduce(function (agg, element) { 
			return (agg === true || agg === element) ? true : element; 
		}) === true;
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

//console.log("ugknbfddgicrmopn: true === " + new SantaString("ugknbfddgicrmopn").isNice());
//console.log("aaa: true === " + new SantaString("aaa").isNice());
//console.log("jchzalrnumimnmhp: false === " + new SantaString("jchzalrnumimnmhp").isNice());
//console.log("haegwjzuvuyypxyu: false === " + new SantaString("haegwjzuvuyypxyu").isNice());
//console.log("dvszwmarrgswjxmb: false === " + new SantaString("dvszwmarrgswjxmb").isNice());

console.log(strings.split('\n').reduce(function(agg, element) {
	return new SantaString(element).isNice() ? ++agg : agg;
}, 0));