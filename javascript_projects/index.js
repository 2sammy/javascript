//console.log('hello')
//window.alert('hello sam')

//document.getElementById("myH1").textContent = 'shalom';
//document.getElementById("myP").textContent = "damn";
//document.getElementById('myH1').textContent = "shalom";

//variables
/*let name = "sam"
let gpa = 6.88
let price = 10.99
let age = 20
console.log(`the price of pizza is $${price}`);
console.log(` you score of the term was ${gpa}`);
console.log(`i will be turning ${age} years old`);
console.log(typeof name);
console.log(typeof age);
*/
 
//consts
//const PI = 3.142
//let radius;
//let circumference;

//radius = window.prompt('Enter radius');
//radius = Number(radius);

//circumference = 2*PI*radius;
//console.log('the cirm is:', circumference);

//math
/*let x = 3.142;
let y = 8;
let z = 7;
let maximum;
let minimum;

Math.round(x)
Math.floor(x);
Math.ceil(x);
Math.pow(x, 3);
Math.sqrt(x)
Math.abs(x)
maximum = Math.max(x,y,z);
minimum = Math.min(x,y,z);
console.log(x);


let a;
let b;
let c;

a = window.prompt("enter side A");
a=Number(a);

b = window.prompt("enter side b");
b=Number(b);

c=Math.sqrt(Math.pow(a, 2)+ Math.pow(b,2));
console.log('area is:', c);

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function() {
    a = window.prompt("enter side A");
a=Number(a);

b = window.prompt("enter side b");
b=Number(b);

c=Math.sqrt(Math.pow(a, 2)+ Math.pow(b,2));
console.log('area is:', c);

}
let e;
let f;
let g;
 e= window.prompt('enter side e')
 e= Number(e)
 f= windeow.prompt('enter side f')
 f= Number(f);
 g= Math.sqrt(Math.pow(e, 2) + Math(f,2));
 console.log("the side of is : ", f);
*/
let a;
let b;
let c;

document.getElementById("submitButton").onclick = function (){
    a =document.getElementById("aTextBox").value;
    a=Number(a);

    b=document.getElementById("bTextBox").value;
    b=Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById('clabel').innerHTML = "side c:", + c
};