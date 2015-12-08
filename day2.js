"use strict";

const boxes = require('fs').readFileSync('input/2', 'utf8');

let paper = 0;
let ribbon = 0;

for (let box of boxes.split("\n")) {
	var [l, w, h] = box.split("x");
	paper += calculatePaper(l, w, h);
	ribbon += calculateRibbon(l, w, h);
}

function calculatePaper(l, w, h) {
	return 2 * (l*w + w*h + h*l) + min(l*w, min(w*h, h*l));
}

function calculateRibbon(l, w, h) {
	let rib = min(2*l + 2*w, min(2*w + 2*h, 2*h + 2*l));
	return parseInt(rib + (l * w * h));
}

function min(a, b) {
	let smallest = a < b ? a : b;
	return parseInt(smallest);
}

console.log("paper: " + paper);
console.log("ribbon: " + ribbon);