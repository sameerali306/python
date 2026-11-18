let arr = [201, 203, 207]; // Don't change this line
let array=[];
// Write your code below
arr.forEach((item) => {
    if(item<50 || item%5==0){
        array.push(item);
    }
})
console.log(array);