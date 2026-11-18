let text = 'APPLE';
// Write your code below
let count = 0;
for (const char of text) {
  let small = char.toLowerCase();
  if (small == "p") {
    count++;
  }
}
console.log(count);
