"use strict";
const md5 = require("md5"); // npm install md5
const key = "bgvyzdsv";

function puzzle(startsWith) {
	let i = 0;
	const length = startsWith.length;
	while (md5(key + i++).substr(0, length) != startsWith);
	return --i;
}

console.log("00000: " + puzzle("00000"));
console.log("000000: " + puzzle("000000"));