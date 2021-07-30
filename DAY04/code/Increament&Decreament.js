"use strict"
//Example of Unary (++)Pre 
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


//Example of Unary (++)Post
let a = 50;
a = a++;
console.log(a);
a++;
console.log(a);

let b = true;
b++;
console.log(b);

let c = false;
c++;
console.log(c);

//Example of Unary (--)Pre
let a2 = 15;
--a2;
console.log(a1);

let b2 = true;
--b2;
console.log(b1);

let c2 = "true";
--c2;
console.log(c1);

let d2 = false;
--d2;
console.log(d1);

let x2 = 10;
let y2 = 20;
let z2 = --x2 + y2;
console.log(z2);
z2 = x2 + --y2;
console.log(z2);

//Examples of Post (--)Decreament
let a3 = 10;
a3 = a3--;
console.log(a3);
a3--;
console.log(a3);

let b3 = true;
b3--;
console.log(b3);

let c3 = false;
c3--;
console.log(c3);