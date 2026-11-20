arr1=[1,2,3,4,5];
arr2=[6,7,8,9,10];

//concataining two array
arr3=arr1.concat(arr2);
arr4=arr2.concat(arr1);
arr5=arr1.concat(arr2,[11,12,13]);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);

let fruits = ["apple", "banana", "orange"];
let join=fruits.join(" __");
// console.log(join);

let name=["John", "Doe", "Smith","Jane"];
let slicename=name.slice(1,3);
// console.log(slicename);
let text=name.split("*",3);
console.log(text);

let split=name.splice(2,1,"sameer ali");
 console.log(split);
 console.log(name)