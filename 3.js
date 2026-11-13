let num = 14; // Don't change this line

// Type your code below
console.log("Welcome to FizzBuzz!");
let fizzbuzz = (int) => {
  for (let i = 1; i <= int; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
      console.log("FizzBuzz");
    } else if (i % 7 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i.toString().includes("3")) {
      console.log("almost fizz");
    } else {
      console.log(i);
    }
  }
};
fizzbuzz(num);