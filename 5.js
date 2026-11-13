let arr = [8, 3, 1, 5, 3, 1];
function swapEnds() {
  // Write code here
  let firstElement = arr.shift();
  let lastElement = arr.pop();
  arr.push(firstElement);
  arr.unshift(lastElement);
  return arr;
}
let result=swapEnds()
console.log(result)