// AJAX
// Asyncronous Javascript and XML

// technique used to make async calls and we can get the data and update
// XHR object / XMLHTTPObject
/*
function makeAjaxReq(){
    console.log('making req');
    const xr = new XMLHttpRequest();
    // what url we have to open and what should be the method
    // 1. method 
    // 2. url
    // 3. async boolean value(true is preffered);
    xr.onreadystatechange = function(){
        console.log('state changed', xr.readyState);
        // 1 --> open is triggered
        // 2 ---> send call is made
        // 3 --> loading, response is being processes
        // 4 --> completed
    }
    xr.open('GET', 'https://jsonplaceholder.typicode.com/user', true);
    
    // what should happen if req is completed
    xr.onload = function(){
        console.log('data recieved');
        console.log(xr.responseText);
        console.log('status', xr.status);

    }
    // req is sent
    xr.send();

   
    console.log('will mae the req');
}


makeAjaxReq()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
//     // response object which has data in it along with status and multiple other properties
//     console.log(res);
//     // to get the data in Json format from response object
//     return res.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch(() => {

// })
*/

const getValue = () => {
    return new Promise((res, rej) => {
        res('result')
    })
}

console.log('start');


let timer1 = setTimeout(() => {
    console.log('timer 1');
}, 1000)

setTimeout(() => {
    console.log('timer 2');
}, 0);



// setTimeout(() => {
//     console.log('timer 3');
// }, 0)

getValue()
.then((data) => {
    console.log('promise 1');
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

// async
getValue()
.then((data) => {
    console.log('promise 2');
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
console.time()

console.log('end');
console.timeEnd();

// 1
// start
// timer 1
// timer 2
// end

// 2
// start
// timer 2
// timer 1
// end

// 3
// start
// end
// timer 2
// timer 1

// 4
// start
// end
// timer 1
// timer 2

