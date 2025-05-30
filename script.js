/*
console.log(x);
let a=10;
 
var b= 100;

console.log(a); //referencer Error not defined.*/



/*  BLOCK SCOPE 
if(true){
   var a=20;
   console.log(a); // 20
}
{
   var a=10;
   let b=20;
   const c=30; 
   console.log(a); // 10
   console.log(b); // 20   
   console.log(c); // 30 
}
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined */

/* Shadowing in JavaScript

var a=107;
let b = 100;
const c = 305;

console.log(a); // 10
console.log(b); // 100
console.log(c); // 305
{
   var a=10;
   let b=20;
   const c=30; 
   console.log(a); // 10
   console.log(b); // 20   
   console.log(c); // 30 
}
console.log(a); // 10
console.log(b); // 100
console.log(c); // 305  */

/* Shadowing allows us to use the same variable name in different scopes without conflict.
In the above example, the variable 'a' is shadowed in the block scope, but 'b' and 'c' are not shadowed because they are declared with 'let' and 'const', which have block scope.   */

/* Shadowing alse behaves similar in functionss as well. 
const c=100;
function x(){
   const c=30;
   //console.log(window.c);  undefined 
   console.log(c); // 30
}
x();
console.log(c); // 100 */

/*Illegal shadowing 
 var p=10;
 var b=100;
  function x(){     
   let p=20;  // SyntaxError: Identifier 'a' has already been declared
} 

const a=10;
{
   const a=100;
   {
      const a=1000;
      console.log(a); // 1000
   }
   console.log(a); // 100
} */
/*
function stringMultiplication(str1, str2){
   console.log(str1.length);
   console.log(str2.length);

   for(let i=0; i<str1.length; i++)
      console.log(str1.charAt(i));
   
   console.log(str1.concat("  ").concat(str2));

   let newstring = `My First "" '' \ \\\'""'Name is ${str1} and last name is ${str2}`;

   console.log(newstring);
   console.log(newstring.trim());
   console.log(newstring.toUpperCase());
   console.log(newstring.toLowerCase());

   let sub = str1.substring(0, 2);

   //console.log(str1.match());
   console.log(sub);
}
stringMultiplication("John", "Doe"); */

// Closure

function x() {
   var l = 7;
   function y() {
      console.log(l);
   }
   l=100;
   return y;
}
var z = x();
console.log(z); // [Function: y]
z();