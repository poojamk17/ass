let formele=document.createElement('form');
console.log(formele);
formele.className='add';
document.body.appendChild(formele);

let div1=document.createElement('div');
let lab1=document.createElement('label');
lab1.textContent='Name   ';
// document.body.appendChild(lab1);
console.log(lab1);
let br1=document.createElement('br');
let in1=document.createElement('input');

let div2=document.createElement('div');
let lab2=document.createElement('label');
lab2.textContent='Age      ';
console.log(lab2);
let br2=document.createElement('br');
let in2=document.createElement('input');

let div3=document.createElement('div');
let lab3=document.createElement('label');
lab3.textContent='address';
console.log(lab3);
let br3=document.createElement('br');
let in3=document.createElement('input');

let div4=document.createElement('div');
let lab4=document.createElement('label');
lab4.textContent='DOB    ';
console.log(lab4);
let br4=document.createElement('br');
let in4=document.createElement('input');

// let div5=document.createElement('div');
// let lab5=document.createElement('button');
// lab5.textContent='login';
// console.log(lab5);




div1.appendChild(lab1);
// div1.appendChild(br1);
div1.appendChild(in1);

div2.appendChild(lab2);
// div2.appendChild(br2);
div2.appendChild(in2);

div3.appendChild(lab3);
// div3.appendChild(br3);
div3.appendChild(in3);

div4.appendChild(lab4);
// div4.appendChild(br4);
div4.appendChild(in4);

// div5.appendChild(lab5);
// // div4.appendChild(br4);
// div5.appendChild(in5);

formele.appendChild(div1);
formele.appendChild(div2);
formele.appendChild(div3);
formele.appendChild(div4);
// formele.appendChild(div5);
