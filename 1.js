let num = 8; // Don't change this line

// Type your code below
console.log("Welcome to FizzBuzz!")
let fizzbuzz=(int)=>{
    if (int % 3 === 0 && int % 7 === 0) {
      return "FizzBuzz";
    }  else if(int%7===0){
        return "Buzz"
    } else if(int%3===0 ){
        return "Fizz"
    } else{
        return int
    }
}
let result =fizzbuzz(num)
console.log(result);
