"use strict";
const md5 = require("md5"); // npm install md5
const key = "bgvyzdsv";

function puzzle(beginning) {
	let i = 0;
	while (!md5(key + i++).startsWith(beginning));
	return --i;
}

console.log("00000: " + puzzle("00000"));
console.log("000000: " + puzzle("000000"));