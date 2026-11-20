let arr1 = [100, 200, 300, 400];
let arr2 = [500, 400, 300];
let result = arr1.filter((items) => !arr2.includes(items));
console.log(result);