"use strict";

const floors = require('fs').readFileSync('input/1', 'utf8');

function howManyFloors() {
	var n = 0;
	for (let floor of floors) {
		(floor === "(") ? n++ : n--;
	}
	return n;
}

console.log("how many floors: " + howManyFloors());


function findFirstBasementMove() {
	var n = 0;
	for (let i = 0; i < floors.length; i++) {
		(floors[i] === "(") ? n++ : n--;
		if (n < 0) return i+1;
	}
}

console.log("first basement move: " + findFirstBasementMove());