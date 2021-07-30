"use strict"

//Example of Unary(+)
let num1 = 34;
    num1 = +num1;
    console.log(num1);

let a = true;
    a = +a;
    console.log(a);

let b = false;
console.log(+b);

let c = "string";
    c = +c;
    console.log(c);

let d = undefined;
console.log(+d);

//Example of Unary (-)
let myNum = 76;
    myNum = -myNum;
    console.log(myNum);

 let myName = "sumit";
 myName = -myName;
 console.log(myName);

 let x = false;
 console.log(-x);

 let y = null;
 console.log(-y);

 let z= undefined;
 console.log(-z);

 //Example of Unary (++)Pre ANd POst
let a1 = 15;
++a1;
console.log(a1);

let b1 = true;
++b1;
console.log(b1);

let c1 = "true";
++c1;
console.log(c1);

let d1 = false;
++d1;
console.log(d1);

let x1 = 12;
let y1 = 12;
let z1 = ++x1 + y1;
console.log(z1);
z1 = x1 + ++y1;
console.log(z1);
