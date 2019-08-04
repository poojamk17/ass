
// named funcation

function ar(a)
{var b=0;
for(var i=0;i<a.length;i++){
    var b = b + a[i];
}
console.log(b);
}
ar([1,2,3,4]); 

console.log("-------------------------------------------------");

// funcation expression
var ar = function(a)
{
    var b=0;
for(var i=0;i<a.length;i++){
    var b = b + a[i];
}
console.log(b);
}
ar([1,2,3,4]); 

console.log("-------------------------------------------------");
// anonmyous function [IIFE]

(function(a){
    
    var b=0;
for(var i=0;i<a.length;i++){
    var b = b + a[i];
}
console.log(b);
}([1,2,3,4]));

console.log("-------------------------------------------------");

// fat arrow function

var ar = (a)=>{
   
    var b=0;
for(var i=0;i<a.length;i++){
    b = b + a[i];
}
console.log(b);
}
ar([1,2,3,4]); 

console.log("-------------------------------------------------");
