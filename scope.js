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

