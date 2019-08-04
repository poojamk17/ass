
// named funcation
var  a=0;
   var  b=1;
   console.log(a);
console.log(b); 
function fib(n)
{  

    if(n>0)
    {
    var c=a+b;
    a=b;
    b=c;
    console.log(c);
    fib(n-1);
    }
       
}
fib(3);

console.log("-------------------------------------------------");



// funcation expression
var  a=0;
   var  b=1;
   console.log(a);
console.log(b);
var fib = function(n)
{
    if(n>0)
    {
    var c=a+b;
    a=b;
    b=c;
    console.log(c);
    fib(n-1);
    }
}
fib(3);


console.log("-------------------------------------------------");
// anonmyous function [IIFE]
var  a=0;
   var  b=1;
   console.log(a);
console.log(b);

(function(n){
    if(n>0)
    {
    var c=a+b;
    a=b;
    b=c;
    console.log(c);
    fib(n-1);
    }

   
}(3));

console.log("-------------------------------------------------");

// fat arrow function
var  a=0;
   var  b=1;
   console.log(a);
console.log(b);

var fact = (n)=>{
    if(n>0)
    {
    var c=a+b;
    a=b;
    b=c;
    console.log(c);
    fib(n-1);
    }
}
fib(3);

console.log("-------------------------------------------------");

