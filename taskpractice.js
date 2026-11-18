function countVowels(str) {
  // Write code here
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (const element of str) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}
let result = countVowels("I love coding!");
console.log(result);
