// arrow function notaition

const greet = (name) => `Hello , ${name}`;

//console.log(greet("Badreyah"));

// first try
/*const addition = sum((firstNum, secondNum) => firstNum + secondNum , 3 ,5 );

console.log(3,5);*/

// second try
const sum = (a, b) => a + b;
//console.log(sum(3,5));

const squares = (x) => x ** 2;
//console.log(squares(3));

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(function (num) {
  return num ** 2;
});
console.log(squared);
