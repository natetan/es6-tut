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

