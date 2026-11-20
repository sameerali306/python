let numbers = [1, 2, 3, 4, 5];
let result = numbers.concat([6, 7, 8]);
console.log(result);
let result2 = result.join(",");
console.log(result2);
let element = numbers.slice(0, 3);
console.log(element);
let item = numbers.splice(1, 1, 99);
console.log(numbers);
