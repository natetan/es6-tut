// es6 intro

// Won't work on most browsers, so transpilers are used
// Babel and Traceur are commonly used for this


// #1: Destructuring

var foo = {
	bar: 1,
	baz: 2
};

// Old way

var bar = foo.bar;
var baz = foo.baz;

// New way. 'Snatches' a field out of an obj

var { bar, baz } = foo;

// Arrays

var perspectives = ["me", "you", "she"];
// [] Grabs the keys from an index (the array);
var [ firstPerson, secondPerson, thirdPerson ] = perspectives;
// {} Grabs the keys from an object, but 1p, 2p, and 3p don't exist
var { firstPerson, secondPerson, thirdPerson } = perspectives;

// Building an obj

var foo = 1;

var obj = {
	bar: 2,
	foo,     // foo is already defined so I can just call the var name
};

var name = "Yulong"
var age = 20;

some.method({ name, age });
// makes this
{
	name: name,
	age: age
}

// Functions

function calcBmi(weight, height, callback) {
	var bmi = weight / Math.pow(height, 2);
	if (callback) {
		callback(bmi);
	}
}

// Assume the weight and height already exist somewhere
calcBmi(weight, height);
calcBmi(weight, height, function() {

});

// Let's say we wanted a max

function calcBmi(weight, height, max, callback) {
	var bmi = weight / Math.pow(height, 2);
	if (bmi > max) {
		console.log("You're overwight");
	}
	if (callback) {
		callback(bmi);
	}
}

// Assume the weight and height already exist somewhere
// The order of these params have to match, which is sometimes a problem
calcBmi(weight, height, 25);
calcBmi(weight, height, null, function() {
	
});

// Let's make it into an object

// Destructure them coming in
// Can set defaults for args if they are undefined
// Naming can come in differently as well, w for weight and h for height
function calcBmi({ weight: w, height: h, max = 25, callback }) {
	var bmi = w / Math.pow(h, 2);
	if (bmi > max) {
		console.log("You're overwight");
	}
	if (callback) {
		callback(bmi);
	}
}

// Assume the weight and height already exist somewhere
// Order of args doesn't matter here
calcBmi({ weight, height, max: 25 });
calcBmi({ weight, height, callback: function() {} }); // Don't have to give a null value for max


// #2: Template Strings

var name = "Yulong";
var activity = "skateboard";

// Old: lots of concatenations and you can forget spaces sometimes
var greet = "Hi, my name is " + Yulong + " and I like to " + activity;

// New: No concatenations. Just call vars with the ${} notation. 
var greet = `Hi, my name is ${name} and I like to ${activity}`;

// Can take new lines into consideration as well

var greet = `Hi, my name is ${name} 
			and I like to ${activity}`;


// #3: Block Scoping

var a = 1;

function() {
	var b = 2;
}

console.log(b); // not within scope

/*-----------------------------------------*/

// Start using let instead of var
var a = 1;

if (true) {
	let b = 2;
}

console.log(b); // works

// const (constant) works similarly

const foo = 1;

if (true) {
	const bar = 2;
}

console.log(bar); // const is block scoping. Doesn't work

if (true) {
	const bar = { a: 1 };
	bar.a = 2;
}

console.log(bar); // Works when mutating the object

/*
	let is like an indicator that something will get changed later on
	The practice is to use const for everything, unless you want to change
	a value, in which case, you use let
*/

// #4: Classes

class Hero {
	name = 'Felicia';
	alias = 'Black Cat';

	constructor() {
		console.log('New Hero was made');
	}

	foo() {
		console.log('You called foo');
	}

	// Can have static properties as well
	static bar() {
		console.log('You called bar');
	}
}

var hero = new Hero();
hero.foo(); // You called foo
hero.name; // Felicia	
hero.alias; // Black Cat

// Calling the actual class rather than the variable name
Hero.bar(); // You called bar

class Vigilante extends Hero {

	constructor() {
		super();
	}

	baz() {

	}
}

var vigilante = new Vigilante();
vigilante.foo();


// #4: Arrow Functions

var foo = function(a, b) {
	return a + b;
};

var foo = (a, b) => {
	return a + b;
};

do.something(function (a, b) {
	return a + b;
});

do.something((a, b) => { return a + b; });

do.something((a + b) => a + b); // funcs with 1 liners get returned immediately, so no need for return

[0, 1, 2].map(val => val++); // [1, 2, 3]

// Lexical context binding 

var module = {
	age: 20,
	foo: function() {
		setTimeout(function () {
			console.log(this.age); // Can't access this, so you have to bind it
		}.bind(this), 100);
	}
};

// Arrow functions automaticaly bind this

var module = {
	age: 20,
	foo: function() {
		setTimeout(() => {
			console.log(this.age);
		}, 100);
	}
};

// jquery example

$('something').with().jQuery(() => {
	$(this)
});

// $5: Imports / Exports

module.exports.foo = function() {

};

module.exports.bar = function() {

};

// Another file

// This must be at the top of the code
import { foo, bar } from 'myModule';

// lodash example

import { each, omit } from 'lodash';
omit(obj, 'key');

/*------------------------------------------*/	
export var foo = 3;

export function bar() {
	console.log('bar');
}

// Another file

import { foo as foolish, bar} from 'myModule';

console.log(foolish); // 3