// console.log('functions');
// Hoisting in Js
/*
console.log(x); //undefined
console.log(printMyName);
console.log(calculate);  //undefined

printMyName();
calculate(); //TypeError coz it is undefined

var x = 10;
console.log(x);

function printMyName(){
    console.log('Printing name');
}
var calculate = function(){
    console.log('name');
}
calculate();



// GEC created 
// phase -1 ---> creation/ memory creation / code scanning

// x--> 10
// printMyName ---> function (){
//     console.log('Printing name');
// }
// calculate --> function(){
    // console.log('name');
// }

// phase -2 execution phase

// res
// undefined
// function (){
//     console.log('Printing name');
// }
// undefined
// Printing name'
// 10

// console.log(a);
console.log('start');

// console.log(a); //error
// scenario - 1
// if a is not present in the code hence not created in the creation phase
// hence error will be reference error "a is not defined"


// console.log(a);
// let a = 10;
// scenario - 2
// a is defined and available in the memory but we cant access it
// and it gives error ref error "cant access a before initilization"
// temporal dead zone


let a = 10;
console.log('after defining a');
console.log(a);
a = 20
console.log(a);

const b = 30
// b= 60




function sum(x,y){
    console.log(x+y);
}
sum(2,7);


let multiply = function(x,y){
    console.log(x*y);
}
multiply(6,7);
multiply("6", "8");


*/
// first class citizens  in Js
// store functions in a variable
// --> we can pass functions as arguments to functions 
// we can also receive functions as arguments

let calculate = function(value, fun){
    console.log(value); //10
    fun(value)
}

// function logSomething(){
//     console.log('logging inside logSomething function');
// }

function square(no){
    console.log(no*no);
}

calculate(10, square)





