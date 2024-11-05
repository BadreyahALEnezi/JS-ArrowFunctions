// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

/*function greet(name) {
  return `Hello, ${name}!`;
}

console.log(`Hello , Badreyah`);*/

// functional programing
/*const greet = function(){
  return `Hello , ${name}`;
}
console.log(`Hello , Badreyah`);
*/
// arrow function notaition

const greet = (name)=> `Hello , ${name}`;

//console.log(greet("Badreyah"));

/*-----------------                     ---------------*/
// Write a simple arrow function that takes two parameters and returns their sum.

// first try
/*const addition = sum((firstNum, secondNum) => firstNum + secondNum , 3 ,5 );

console.log(3,5);*/

// Write a simple arrow function that takes two parameters and returns their sum.
// second try
const sum = (a, b) => a + b;
//console.log(sum(3,5));

// Write a simple arrow function that squares a number.

const squares = (x) => x ** 2;
console.log(squares(3));

//Create an arrow function that takes an array of numbers and returns a new array with each number squared.

//const numbers = [1,2,3,4,5];

//const squared = (num(numbers) => num **2 ===0);
