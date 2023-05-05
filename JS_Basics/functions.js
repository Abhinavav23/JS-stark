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



// first class citizens  in Js
// store functions in a variable
// --> we can pass functions as arguments to functions 
// we can also receive functions as parameters
// you can also return function from a function


const userInfo = {
    name: 'Abhinav',
    teaching: true,
    printNameAndProfession: function(){
        console.log('printing name and profession');
    }
}
// userInfo.name
userInfo.printNameAndProfession();

let calculate = function(no, fun){
    console.log(no); //10
    console.log(fun);

    let a = 100;
    let b = 40;
    // 
    let multi = a*b
    // fun(multi)
    // ---
    // ---
    // ---
    // --
}

// let no = 30
// let fun = function(value){
//     console.log('value recieved is ', value);
// }

function square(no){
    console.log(no*no);
} 
square(10);

// calculate(10, square) //---> square is callback function

calculate(30, function(value){
    console.log('value recieved is ', value);
}) // callback function , anonyms function


// calculate --> higher order function -->
// when a function takes a function as argument
// when a function return a function from it
// or both


function returnFun(){
    let a = 10;
    return function(){
        console.log('calculating result');  
    }
    // console.log(a);
    // return a;
}

let result = returnFun();
console.log(result); // the whole function printed
result();

// first class function
// anonyms functions
// higher order functions --> only possible because of first class fun
// callback functions

// Arrow function

let printName = (myName) => {
    let a = 100;
    let b = 200;
    console.log(a+b);
    console.log('my name is ', myName);
}
printName('Abhinav');
printName('Aswath');
*/

let getValue1 = () => 100

// let res1 = getValue1();
// console.log(res1);

let getValue2 = (num, doubleFun) => {
    // return doubleFun
    
    // let res = doubleFun(num)
    // return res

    return doubleFun(num) // return 40
}

let res = getValue2(20, (no) => 2*no);
// let res = getValue2(20, (no) => {
//     return 2*no
// });
console.log(res);






// let a = 30
// let myFync = function(){

// }
