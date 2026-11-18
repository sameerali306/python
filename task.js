let arr = ["Bob", "Josh", "Alexander", "Rachel", "Jax"]; // Don't change this line
let array = [];
// Write your code below
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element.length > 5) {
    array.push(element);
  }
}
console.log(array);
