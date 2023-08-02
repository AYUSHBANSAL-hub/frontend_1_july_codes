// 1.  (done) Reviewing Beginner codes
// 2.  (done) Outputting text in console
// 3.  (done) Variable and data types
// 4.  (done) Arithmetic Operations
// 5.  (done) Functions
// 6.  (done) Compare Var let const
// 6.1 (done) scope
// 7.  (done) Hoisting
// 8.  (done) Template literal
// 9.  (done) TDZ (temporal dead zone)
// 10. (done) Difference between == and ===
// 11. (done) Conditionals
// 12. (done) Array
// 13. (semi done)Object
console.log("script file started");

// Functions

function greet() {
  console.log("Hello, nice to meet you!");
  // it is a reusable block of code
  //set of statements
  // it can calculate a value
  // create elements
  // delete elements
  // modify elements
  //perform a specific task

  // Advantage:
  // it keeps our code structured
  // this makes our code modular in nature
  //resuability
}

function sum(a, b) {
  return a + b;
}

let sum1 = (a, b) => a + b;
console.log("arrow=>", sum1(10, 10));

function divide(a, b) {
  return a / b;
}

function difference(a, b) {
  return Math.abs(a - b);
}

console.log(sum(5, 7));
console.log(sum(5, 10));

// functional declaration

function afunctionName(parameter1, parameter2) {
  //code to be executed
}

// function calling
function SystemOutPrintln(printabledata) {
  console.log(printabledata);
  console.log(sum(5, 11));
}

SystemOutPrintln("Ayush Bansal");

function factorial(num) {}
//mohd talib
function fact(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(5)); //120

// Navneet Kumar

// functional scope

function a() {
  let x = 10;
  console.log(x);
}

a();

// Arrow function
let print = (a) => {
  for (let i = 0; i < 5; i++) {
    console.log(a);
  }
};
function printf() {
  for (let i = 0; i < 5; i++) {
    console.log("yo");
  }
}
print(4);

// Examples
// 1. function with no parameters

function ab() {
  console.log("Hi I am called");
}

// 2.function with parameters

function printsum(a) {
  console.log(a[0] + a[1]);
}
printsum([4, 5]);

// 3.Anonymous function

let pow = function () {
  console.log(4 ** 5);
};
pow();

// 4. Function as a parameter

function saySomething(message) {
  console.log(message);
}

function callingsomefunction(a) {
  a("hello");
}

callingsomefunction(saySomething);

// callingsomefunction->func(hello)->console.log(hello)

// 5. function with a default parameter

function power(a, b) {
  console.log(a ** b);
}

power(5);

function log(a = 5, b = 10) {
  console.log(a, b);
}

log();

// 6. Recursive fucntion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// 7. Higher order function

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

let double = multiplyBy(2);
// let factor=2;
// let double = function(number){
//     return number*factor;
// }
console.log(double(5));

// Arrays
// Arrays in js are powerful ds that allow you to create and manipulate collection of values
// An array is an orderedlist of elements where each element is identified or accessded
// using it's index
// Arrays can hold any data type including numbers, string, object, array, boolean

// Creating an array
let arr = [];

// some basic examples of an array
let numbers = [1, 2, 3, 4];
let fruits = ["orange", "banana", "apple"];
let mixed = [1, "orange", true, ["dancing", "singing", "travelling"]];
console.log(mixed);

// Accessing elements in an Array
console.log(mixed[3][0]);

// Modifying elements in an Array:
fruits[1] = "Kiwi";
console.log(fruits);

// Array length:
console.log(fruits.length);

//  Array methods and operations
// 1. push()
fruits.push("Mango", "Strawberry", "cranberry");
console.log("push=>", fruits);

// 2. pop
fruits.pop();
console.log("pop=>", fruits);

// 3. shift
fruits.shift();
console.log("shift=>", fruits);

// 4. unshift
fruits.unshift("Guava"); //["guava",.....]

console.log("unshift=>", fruits);

// 5. slice

let numbersarr = [0, 1, 2, 3, 4];
const slicedarr = numbersarr.slice(2, 4); //[2,3]
console.log(slicedarr);

// 6. Splice
const animal = ["dogs", "cat", "rabbit"];
animal.splice(0, 0, "mouse");
console.log(animal);

// scope

// 1. Global scope
let num = 5; //global
console.log(num);
function aa() {
  console.log(num);
}
aa();

// 2. Local scope

function bb() {
  let localvar = 5; //local scope
  console.log("local", localvar);
}
bb();
// console.log(localvar);
// 3. Block scope

function blockscope() {
  if (12 > 10) {
    let aaa = 11;
    console.log("inside the block", aaa);
  }
  //console.log("outside if",aaa);
}
blockscope();
// common interview question

const x = 9;
function myfunction() {
  const x = 10;
  console.log(x);
}
myfunction();
console.log(x);

// difference between var let const

//         scope   hoisting    Reassignment

// var     func     hoisted      Allowed

// let     block     not         allowed

// const   block     not        Not allowed

function samplefunc1() {
  if (10 > 5) {
    var xy = 100;
  }
  console.log(xy);
}
samplefunc1();

// hoisting
// code written:
console.log(myvar); //undefined
var myvar = "Ayush";
console.log(myvar); //output Ayush

// This is how it will be compiled
var myvar;
console.log(myvar); //undefined
var myvar = "Ayush";
console.log(myvar); //Ayush

// Hoisting occurs at a scope level which leads to variables being declared
// to the top of their function scope
// code we wrote
function abc() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log(abcvar); // undefined
  var abcvar = 10;
  console.log(abcvar); //10
}

// code which will be compiled
// function abc() {
//     var abcvar;
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     console.log(abcvar); //undefined
//     abcvar = 10;
//     console.log(abcvar); //10
//   }
abc();

console.log(num1); // error of initilisation
// this is my temparal dead zone
// XXX
// XXX
// XXX
// XXX
// XXX
// XXX
// XXX
//this is my temparal dead zone
var num1 = 101;

// objects

// Object in js are key value pairs used to store and organise data
// They are fundamental DS in Js and hence provide a dlexible way to represent real-world
// entities or complex data stucture

//Creating Object
const acciostudent = {
  fullname: "Vishal Kumar Sain",
  age: 24,
  currentmodule: "F1",
  isactive: true,
  sincerityscore: 9.4,
  joinedclasses: true,
  contestgivencount: 3,
  moduletestscore: 94,
  modulescovered: ["module1", "module2", "module3", "spring"],
  pow: function(a,b){
    return a**b;
  }
};

// Accessing object properties
console.log(acciostudent.moduletestscore);
console.log(acciostudent["modulescovered"]);
console.log(acciostudent["currentmodule"])


//modifying object props
acciostudent["currentmodule"]="F2";
console.log(acciostudent);

//add a key

acciostudent.streak="365";
console.log(acciostudent);

// delete key

delete acciostudent.isactive;
console.log(acciostudent);

console.log(acciostudent.pow(2,5));

// iterating over an object
// but this is a common for...in loop
for(let key in acciostudent){
    console.log(key + " : "+ acciostudent[key]);
}

// forEach, filter, reduce, map, for in, for, find



const asrr=["ayush","Nayeem","MD","Navneet"];
console.log(...asrr);
console.log("ayush","Nayeem","MD","Navneet")