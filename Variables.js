console.log(" by using var \n");
var num = 12;
console.log("This is number "+num);
var character = 'A';
console.log("This is a character "+character);
var str = "Rahul";
console.log("This is a string "+str);
var bool = true;
console.log("This is a boolean "+bool);
var arr = [1,2,3,4,5];
console.log("This is an array "+arr);
console.log("This is an array of arr[0] "+arr[0]);
console.log("\n");

/* You can redeclae a variable with the same name by using var */

// let 

/* You can't redeclae a variable with the same name by using let */

console.log(" by using let \n");
let num1 = 12;
console.log("This is number "+num1);
let character1 = 'A';
console.log("This is a character "+character1);
let str1 = "Rahul";
console.log("This is a string "+str1);
let bool1 = true;
console.log("This is a boolean "+bool1);
let arr1 = [1,2,3,4,5];
console.log("This is an array "+arr1);
console.log("This is an array of arr[0] "+arr1[0]);

// const

/* You can't redeclae a variable with the same name by using const */

console.log(" by using const \n");

/*
const num = 12;// num is already declare in line 1
console.log("This is number "+num2);  
*/

const num2 = 12;
/* num2 = 13; // You can't change the value of a const variable */
console.log("This is number "+num2);
const character2 = 'A';
console.log("This is a character "+character2);
const str2 = "Rahul";
console.log("This is a string "+str2);
const bool2 = true;
console.log("This is a boolean "+bool2);