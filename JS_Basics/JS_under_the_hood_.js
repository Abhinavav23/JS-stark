// javascript engine ---> a software or piece of code which understands and executes javascript

// chrome --> V8
// firefox --> spiderMonkey
// internet Explorer --> chakra
// core/ javascript core --> Safari

// JS code is executed with a stack called as call Stack

// execution context ---> environmnent where JS code is read and executed
// global execution context --> whatever code which is not inside any function is in GEC
// function execution context --> whatever code is available in the function

// step 1 --> GEC is created and pushed in call stack
//
// JS executes in two phases
// creation phase --> code is scanned and memory is created for functions and variables and the value is initialised
// execution phase --> 

// console.log('before giving value', a); //undefined
// console.log(sum); // complete function

console.log("starting here"); //1

// var a = 20;
// console.log('after giving value', a);

// console.log('before giving value to b', b); //undefined
// var b = 10;
// console.log('after giving value to b', b);
// b= 50;
// console.log(b);
sum();

function sum() {
  // some piece of code that takes 3 sec
  console.log('starting sum');
  console.log(myName);
  var myName = "Abhinav";
  console.log(myName);
//   console.log(multipleSum);
    multipleSum(3,4);
    function multipleSum(a, b){
        var c = 100;
        console.log(a+b * 2);
    }
    console.log('ending sum');
}

console.log("end");
