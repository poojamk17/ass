function Detail(aa,bb,cc,dd,ee)
{
    this.a=aa;
    this.b=bb;
    this.c=cc;
    this.d=dd;
    this.e=ee;

}
 var per = new Detail('pooja',20,5.5,'white','good');
 console.log("name = "+per.a);
console.log("age = "+per.b);
console.log("height = "+per.c);
console.log('color ='+per.d);
console.log('attitude ='+per.e);

var p1=new Detail('mk',21,5.5,'white','good');
console.log("name = "+p1.a);
console.log("age = "+p1.b);
console.log("height = "+p1.c);
console.log('color ='+p1.d);
console.log('attitude ='+p1.e);

var p2=new Detail('moulya',20,5.1,'white','good');
console.log("name = "+p2.a);
console.log("age = "+p2.b);
console.log("height = "+p2.c);
console.log('color ='+p1.d);
console.log('attitude ='+p2.e);

var p3=new Detail('kavya',19,5.2,'white','good');
console.log("name = "+p3.a);
console.log("age = "+p3.b);
console.log("height = "+p3.c);
console.log('color ='+p3.d);
console.log('attitude ='+p3.e);

var p4=new Detail('nj',21,5.5,'white','good');
console.log("name = "+p4.a);
console.log("age = "+p4.b);
console.log("height = "+p4.c);
console.log('color ='+p4.d);
console.log('attitude ='+p4.e);

console.log("-------------------------------without new keyword--------------------------------------");

pr1={
    name : 'pooja',
    age : 20,
    height : 5.5
    
};
console.log("name = "+pr1.name);
console.log("age = "+pr1.age);
console.log("height = "+pr1.height);

pr2={
    name : 'mk',
    age : 21,
    height : 5.7
    
};
console.log("name = "+pr2.name);
console.log("age = "+pr2.age);
console.log("height = "+pr2.height);

pr3={
    name : 'moulya',
    age : 19,
    height : 4.5
    
};
console.log("name = "+pr3.name);
console.log("age = "+pr3.age);
console.log("height = "+pr3.height);

pr4={
    name : 'kavaya',
    age : 24,
    height : 5.3
    
};
console.log("name = "+pr4.name);
console.log("age = "+pr4.age);
console.log("height = "+pr4.height);

pr5={
    name : 'manvi',
    age : 10,
    height : 3.4
    
};
console.log("name = "+pr5.name);
console.log("age = "+pr5.age);
console.log("height = "+pr5.height);
