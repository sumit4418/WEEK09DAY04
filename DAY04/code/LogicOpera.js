"use strict"
//Exampel of  logical operator NOT(!)
let a = true;
let b = false;
console.log(!a);//false 
console.log(!b);//true
console.log(undefined);//normal 
console.log(!undefined); // true
console.log(!null); // true
console.log(!70); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

//Exampel of  logical operator AND ( && ) 
let x = true;
let y = true;
console.log(x && y);

let x1 =true;
let y1 =false;
console.log( x1 && y1);
 
let c= true;
let result = c && (34/0);
console.log(result);

let c1 = 30/0;
let d1 = true;
console.log(c1 && d1);


//Exampel of  logical operator OR ( || ) 
let p = true;
let q = false;
console.log(p || q);

let p1 = false;
let q1 = false;
console.log(p1 || q1);
