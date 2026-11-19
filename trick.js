let arr = [10, 20, 30, 40, 50, 60];
const mid = Math.floor(arr.length / 2);
// Write your code below
if (arr.length % 2 == 0) {
  console.log(arr.slice(mid - 1, mid + 1));
} else {
  console.log(arr.slice(mid - 1, mid + 2));
}
