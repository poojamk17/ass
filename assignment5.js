// named funcation
function prime(num){
    console.log(2);
for(var i=2;i<=num;i++){
    for(var j=2;j<i;j++){
        if(i%j==0)
        break;
        else if (i==j+1)
        
        console.log(i);
    }
}
}
prime(5);


console.log("-------------------------------------------------");



// funcation expression
var prime = function(num)
{
    console.log(2);
    for(var i=2;i<=num;i++){
        for(var j=2;j<i;j++){
            if(i%j==0)
            break;
            else if (i==j+1)
            
            console.log(i);
        }
    }
}
prime(5);

console.log("-------------------------------------------------");


// anonmyous function [IIFE]

(function(num){
    console.log(2);
    for(var i=2;i<=num;i++){
        for(var j=2;j<i;j++){
            if(i%j==0)
            break;
            else if (i==j+1)
            
            console.log(i);
        }
    }
}(5));

console.log("-------------------------------------------------");

// fat arrow function

var prime = (num)=>{
    console.log(2);
    for(var i=2;i<=num;i++){
        for(var j=2;j<i;j++){
            if(i%j==0)
            break;
            else if (i==j+1)
            
            console.log(i);
        }
    }
}
prime(5);
console.log("-------------------------------------------------");

