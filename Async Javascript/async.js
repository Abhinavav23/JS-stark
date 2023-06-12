/*
console.time();
console.log('start');

function one(){
    // takes 3 sec to get some data from server or BE
    console.log('one runs');
}

console.timeEnd()
function two(){
    // takes 2 sec
    console.log('two runs');
}

one(); //---> not wait for it to finish
two(); // -- call it

// blocked till one and two function call finishes
console.log('end');


// whatever takes time we can handle it in asyncronous way


// why?
// --> javascript is syncronous, single threaded
// --> there could be code which can block the main thread and hence our program can stuck
// ---> you should never block the main thread in JS
// ---> to overcome these problems we have async way of handling /writing code in JS


// Async way
// we will not wait for code which can take time ex: api call
// also we have multiple ways to execute or delay some piece of code with respect to time ex: setTimeout, setInterval
*/

// setTimeout
// used to delay the code with some time

console.log('start');



// async code
// setTimeout(() => {
//     console.log('after 2s');
// }, 2000)

// setTimeout(() => {
//     console.log('after 4s');
// }, 4000)

// setTimeout(() => {
//     console.log('after 6s');
// }, 6000)

// setTimeout ---> acts as a Higher order function
// setTimeOut is by default available by the browser
// allows us to run some piece of code after some duration
// 1 arg --> function which need to be called after some time
// 2nd --> time after which function needs to be called in mili second(1000ms = 1 sec)
// 3rd,4th, 5th and so on --> which will go as argument to the function as parameters
// setTimeout on calling returns a unique id which can be used for cleanup of timer

console.log('end');

function printTime(sec, min){
    console.log(`after ${min} min ${sec} sec`);
}

// printTime(2)
// printTime(4)
// printTime(6)

let id1 = setTimeout(printTime, 2000, 'two', 10); // after 2 sec printTime('two')
console.log(id1);
let id2 = setTimeout(printTime, 4000, 'four', 10) // after 4 sec printTime('four')
console.log(id2);
let id3 = setTimeout(printTime, 6000, 'six', 10) // after 4 sec printTime('six')
console.log(id3);




// function higher(cb){
//     console.log('calling the fun');
//     cb();
// }

// higher(() => {
//     console.log('i am a callback');
// })

// Event Loop
// call stack
// web APIS in browser


function calculate(){
    return 10
}

let res = calculate()