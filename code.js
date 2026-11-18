function processArray(arr) {
  // Write code here
  arr.pop();
  arr.push(10);
  let index = arr.indexOf(5);
  if (index !== -1) {
    arr[index] = 50;
  }
  let modify = arr.reverse();
  return modify;
}
let result=processArray([1, 2, 3, 4, 5, 6]);
console.log(result);
