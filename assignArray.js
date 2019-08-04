// foreach
var film = ['pooja','mamatha','moulya','kavya'];
film.forEach(function(value,index)
{
    console.log('film='+value);
});

console.log('-----------------------------------------------------');
// foreach for fat 
var film = ['pooja','mamatha','moulya','kavya'];
film.forEach((value,index) =>{
    console.log('film='+value);
});



console.log('-----------------------------------------------------');
// to add new element we have push method
film.push('monika','manuja','bavya');
console.log('film after push='+film);

film.pop();
console.log('film after pop='+film);

film.unshift('kavya');
console.log('film after push='+film);

film.shift();
console.log('film after push='+film);

console.log('------------------------------------------------');

// adding in middel and searching

var hasfilm=film.includes('kavya',2);
console.log(hasfilm);

console.log('------------------------------------------------');

film.splice(2,0,'moulya','kavya');
console.log(film);


// other methods
console.log('------------------------------------------------');

var film1=film.slice(0,3);
console.log(film);
console.log(film1);

console.log('------------------------------------------------');

var joinfilm=film.join();
console.log(joinfilm);

var joinfilm1=film.join('-');
console.log(joinfilm1);

console.log('------------------------------------------------');

var indexfriendes=film.indexOf('mamatha');
console.log(indexfriendes);

console.log('------------------------------------------------');


var number=[400,500,600];
var newnumber=number.map((value,index)=>{
value=value+10;
return value;
});
console.log("old array="+number);
console.log('new array='+newnumber);

console.log('------------------------------------------------');
// filter method

var number=[100,200,300,400,500,600];
var newnumber=number.filter((value,index)=>{

return value>10;
});
console.log("old array="+number);
console.log('new array='+newnumber);

console.log('--------------------------------------example2-------------------------------------------');

// foreach
var film = ['ek villan','harry pottor','queen','ms dhoni'];
film.forEach(function(value,index)
{
    console.log('film='+value);
});

console.log('-----------------------------------------------------');
// foreach for fat 
var film = ['ek villan','harry pottor','queen','ms dhoni'];
film.forEach((value,index) =>{
    console.log('film='+value);
});



console.log('-----------------------------------------------------');
// to add new element we have push method
film.push('mynaa','milana');
console.log('film after push='+film);

film.pop();
console.log('film after pop='+film);

film.unshift('queen');
console.log('film after push='+film);

film.shift();
console.log('film after push='+film);

console.log('------------------------------------------------');

// adding in middel and searching

var hasfilm=film.includes('queen',2);
console.log(hasfilm);

console.log('------------------------------------------------');

film.splice(2,0,'queen','ms dhoni');
console.log(film);


// other methods
console.log('------------------------------------------------');

var film1=film.slice(0,3);
console.log(film);
console.log(film1);

console.log('------------------------------------------------');

var joinfilm=film.join();
console.log(joinfilm);

var joinfilm1=film.join('-');
console.log(joinfilm1);

console.log('------------------------------------------------');

var indexfilm=film.indexOf('queen');
console.log(indexfilm);

console.log('------------------------------------------------');


var number=[4,5,6];
var newnumber=number.map((value,index)=>{
value=value+10;
return value;
});
console.log("old array="+number);
console.log('new array='+newnumber);

console.log('------------------------------------------------');
// filter method

var number=[1,2,3,4,5,6];
var newnumber=number.filter((value,index)=>{

return value>10;
});
console.log("old array="+number);
console.log('new array='+newnumber);
