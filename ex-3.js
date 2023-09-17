//Exercise #3: Debugging (Type Conversion)

//Start coding here
let numberA = 100;
let numberB = "20";

console.log(typeof numberA)
console.log(typeof numberB)

numberA = 10;
console.log(numberA)

numberB = Number(numberB)
console.log(typeof numberB)

console.log(`Sum: ${numberA + numberB}`);
