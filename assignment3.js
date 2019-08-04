// named funcation
function circum(r)
{
    var cir=2*3.14*r;
    return cir;

}
console.log(circum(10));

console.log("-------------------------------------------------");

// funcation expression
var circum = function(r)
{
    var cir=2*3.14*r;
    return cir;
}
var cir= circum(10);
console.log(cir);

console.log("-------------------------------------------------");

// anonmyous function [IIFE]

(function(r){
    var cir=2*3.14*r;
    console.log(cir);
}(10));

console.log("-------------------------------------------------");

// fat arrow function

var circum = (r)=>{
    var cir=2*3.14*r;
    return cir;
}
var cir = circum(10);
console.log(cir);

console.log("-------------------------------------------------");

