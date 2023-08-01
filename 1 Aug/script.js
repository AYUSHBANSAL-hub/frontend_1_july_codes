// 1.  (done) Reviewing Beginner codes
// 2.  (done) Outputting text in console
// 3.  (done) Variable and data types
// 4.  (done) Arithmetic Operations
// 5.  Functions
// 6.  Compare Var let const
// 7.  Hoisting
// 8.  (done) Template literal
// 9.  TDZ (temporal dead zone)
// 10. (done) Difference between == and ===
// 11. (done) Conditionals
// 12. Array
// 13. Object (optional)

// 1.Outputting Text in console
console.log("Hello, world!!");

// 2. Variable and data types
let message = "Ayush bansal"; //string
let num = 10; //number
let isTrue = true; //boolean
//  System.Out.println(message)

// let a="ayush";
// const b="Bansal";
// var c="Developer";
// console.log(a,b,c);

// 3. Arithmetic Operation
let a = 10;
let b = 5;

let sum = a + b;
let difference = a - b;
let product = a * b;
let div = a / b;
let remainder = a % b;

console.log(sum, difference, product, div, remainder); // 15 5 50 2 0

// 4. Conditional statements
let age = 14;
if (age >= 18) {
  console.log(age, " is age of an adult");
} else if (age == 15) {
  console.log("you are a minor with age 15");
} else {
  console.log("you are a minor");
}

// 5. functions
function hello(fname) {
  console.log("hey", fname, "hope you are doing well!");
}
hello("Ayush");
hello("Amit");
hello("Nayeem");

// 2. Outputting text in console

// 1. Concatening Strings

let firstname = "Ayush";
let lastname = "Bansal";
console.log("Full name: " + func1() + " " + lastname);
// Full name: Ayush Bansal

// 2. Template literals

function func1() {
  return true;
}
let fruit = "Mango";

console.log(
  `My favourite fruit is ${func1()} I like it very much. ~ ${firstname} ${lastname} `
);

// 3. Mathematical calculations in console

let radius = 6;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;

console.log(
  `A circle with radius ${radius} will have a circumference of ${Math.floor(
    circumference
  )} and area of ${Math.ceil(Math.PI * radius * radius)}`
);

console.log(5 * 5);

// 4.  Boolean expressions
let aa = 10;
let bb = 10;
console.log(aa >= bb);

// 5. Array Manipulation
let arr = [1, 2, 3, 4, 5];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// console.log(arr[3]);

// Variable and data types

// 1. String
let myname = "Ayush Bansal";

// 2. Number
let numb = 19;

console.log(typeof numb);

// 3. Boolean
let isF1student = true;
console.log(typeof isF1student);

// 4. null
let address = null;
//absence of value;

console.log(typeof address);

// 5. undefined
let myval;

console.log(myval);

// 6. Object

let person = {
  firstname: "Ayush",
  lastname: "Bansal",
  age: 20.8,
  isAdult: true,
  hobbies: ["singing", "coding", "dancing"],
};

console.log(person);

// 7. Array

let hobbiesarr = ["singing", "coding", "dancing"];
hobbiesarr.push("debugging");
console.log(hobbiesarr);

// 8. Date
let currentdate = new Date();
// console.log("09:00 AM")

console.log(currentdate.getHours() + ":" + currentdate.getMinutes());

function gettimein12hrsformat(date) {
  let res = "";
  let version = " AM";
  if (date.getHours() > 12) {
    if (date.getHours() - 12 < 10) {
      res += "0";
    }
    res += date.getHours() - 12;
    version = " PM";
  } else {
    if (parseInt(date.getHours()) < 10) {
      res += "0";
      res += date.getHours();
    } else {
      res += date.getHours();
    }
  }
  res += ":";
  if (date.getMinutes() < 10) {
    res += "0";
    res += date.getMinutes();
  } else {
    res += date.getMinutes();
  }
  return res + version;
}
console.log(gettimein12hrsformat(currentdate));

// (done) break till 9:50pm

// 9. BigInt
let largnumber = 123456789123456789234567891234567n;
// BigInt data type

// 4. Arithmetic Operations

// 1. Addition

let sumeg = 5 + 3;
console.log(sumeg);

// 2. Subtraction
let diff = 5 - 3;
console.log(diff);

// 3. Multiplication
let mult = 5 * 3;
console.log(mult);

// 4. Division
let divi = 5 / 3;
console.log(divi);

// 5. Modulo( Remainder)

let remaindereg = 30 % 7;
console.log(remaindereg);

// 6. increment

let increment = 10;
increment += 2;
console.log(increment);

// 7. Decrement
let decrement = 10;
// decrement-=2;
decrement--;
decrement--;
console.log(decrement);

// 8. Exponentiation

let pow = 2 ** 7;
console.log(pow);

// 9. unary plus
// this + operator is used to covert a string into a number
let num1 = 5;
let numa = "5";
let num2 = +numa;
console.log(num1 + num2); //55

// 10. Unary negation
// to change the sign of the number
let negnum = -10;
let newnegnum = -negnum;
console.log(negnum, newnegnum);

// Conditionals

// 1. If statement
if (3 > 5) {
  console.log("Yo the if condition works!");
  console.log("yo yo");
}

// 2.If else statement
let bankbalance = 12000;

if (bankbalance > 2000000) {
  console.log("You are rich!!");
} else {
  console.log("you need to earn more");
}

// 3. if else if else

let score = 70;
if (score > 99) {
  console.log("You have topped the module test");
} else if (score > 70) {
  console.log("You have passed the module");
} else {
  console.log("you need to repeat the module.");
}

// 4. Ternary operator

let raining = false;

let weather = raining ? "yes it's raining" : "The weather is clear";

let percentagechange24hr = -0.4;
console.log(
  percentagechange24hr > 0
    ? "Congo, you are in profit today!"
    : "oops! you lost some money"
);

// 5. Switch condition
let day = 1;

let dayname;
switch (day) {
  case 1:
    dayname = "Monday";
    break;
  case 2:
    dayname = "Tuesday";
    break;
  default:
    dayname = "incorrect input";
}
console.log(dayname);

// 6. Logical AND (&&) operator

let currentage = 18;
let gender = "Male";

if (currentage >= 18 && gender == "Male") {
  console.log("You are an adult man.");
}

// 7. Logical OR(||) Operator

let color = "blue";
if (color == "blue" || color == "red" || color == "green") {
  console.log("the color is either red or blue or green");
}

// 8. Not
let isdriver = true;
console.log(!isdriver);

// 9. Nullish Coalescing Operator
// This assigns a default value when the variable is null or undefined.
let username = null;
let displayname = username ?? "Ayush Bansal";
//Ayush Bansal value would be provided only when username is null or undefined
console.log(displayname);


// ------------------
// 10. Difference between == and ===
let num3 = 5;
let num4 = "5";
// == will compare the values only
// === will check the values along with the datatype
if (num3 === num4) {
  console.log(num4, "is equal to", num3);
} else {
  console.log(num4, "is not equal to", num3);
}
