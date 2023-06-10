
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
