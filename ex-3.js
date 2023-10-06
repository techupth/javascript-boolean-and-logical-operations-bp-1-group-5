//Exercise #3: Debugging (Type Conversion)

//Start coding here
const numberA = 100;
const numberB = "20";

numberA = 10;
console.log(typeof numberA);
console.log(typeof numberB);
numberB = Number(numberB);

console.log(`Sum: ${numberA + numberB}`);
