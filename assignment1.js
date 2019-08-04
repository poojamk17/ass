// named funcation
function fact(num1)
{    var f=1;
    for(var i=num1;i>0;i--)
    {
 
     f=f*i;
    }
    return f;
    
}
console.log(fact(5));

console.log("-------------------------------------------------");



// funcation expression
var fact = function(num1)
{
    var f=1;
    for(var i=num1;i>0;i--)
    {
 
     f=f*i;
    }
    return f;
}
var fac= fact(3);
console.log(fac);

console.log("-------------------------------------------------");
// anonmyous function [IIFE]

(function(val1){
    var f=1;
    for(var i=val1;i>0;i--)
    {
 
     f=f*i;
    }

    console.log(f);
}(5));

console.log("-------------------------------------------------");

// fat arrow function

var fact = (vl1)=>{
    var f=1;
    for(var i=vl1;i>0;i--)
    {
 
     f=f*i;
    }
    return f;
    
}
var f = fact(3);
console.log(f);

console.log("-------------------------------------------------");

