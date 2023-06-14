// based on the response from APi we have to make changes / run some code

// Promises --> ES6 version
// way to deal with async operations --> making an APis call
// we also have to handle the response of promise
// if successful --> we will do something
// if error --> we will do something

// AJAX to make calls and callbacks to handle the responses
// callback hell

// Shirt
// 10000

// 1st api call --> get the shirt--> 10 shirts ['levis', 'blackberry']
// 2nd api call --> get colors for 'levis' shirt --> ['white', 'green', 'black']
// 3rd api call --> sizes available for 'white' shirt --> [m, l, xl]

// dependable callbacks
// the information/ data recieved from one call needs to be used in next call
// this forms a arrow like symbol which is called as callback hell/nested callbacks
// challenges with callback hell --> unmanagable code, not readable, messy code

/*
setTimeout((shirts) => {
    console.log(shirts); // 1. after 1 sec 
    setTimeout((shirt) => {
        console.log(shirt); // 2. after 3 sec
        let sizes = ['m', 'l', 'xl']
        if(shirt === 'levis'){
            sizes.push('xxl')
        } else if(shirt === 'blackberry'){
            sizes.pop();
        }
        setTimeout((sizes) => {
            if(sizes.length >2){
                console.log(`price is ${2500}`); // 3. after 6sec
            } else{
                console.log(`price is ${1500}`);
            }
        }, 3000, sizes);
    }, 2000, shirts[0])
}, 1000, ['levis', 'blackberry'])


// promises
// states ---> 
// pending--> you have made the call but didn't recieved the response
// successful/resolve/fulfilled --> the call is successful
// failed/rejected ---> the call is failed -- network failure/ server is down/ req is wrong
// settled / completed--> either success or rejected

*/
// can be created using Promise constructor
// it takes callback
// callback will have 2 arg
// functions which gets called with data to be returned
const getShirtBrands = (price) => {
  const promise = new Promise((resolve, reject) => {
    // we want to go to some database
    setTimeout(() => {
      if (price > 0) {
        // promise fulfilled/success
        resolve(["levis", "blackberry"]);
      } else {
        reject({
            message: "price should be more than 0"
        });
      }
    }, 2000);
  });
  return promise;
};

// const promiseRes = getShirtBrands(100);
// console.log(promiseRes);

// const PromiseRej = getShirtBrands(0);
// console.log(PromiseRej);

// 2nd part is to handle the promise
// when we call the promise we write two methods on promise
// 1. .then() --> when promise is resolved/fullfilled
// 2. .catch() ---> runs when promise is rejected
// 3. .finally() --> after either resolve or reject

getShirtBrands(0)
// val will be data passed while resolving the promise
.then((val) => {
    console.log('logging from then');
    console.log(val);
})
// err will be passed while rejecting the promise
.catch((err) => {
    console.log('from catch block');
    console.log(err);
})
.finally(() => {
    console.log('finally block');
})

// PromiseRej.then((val) => {
//     console.log('logging from then');
//     console.log(val);
// })
// .catch((err) => {
//     console.log(err);
// })

// function calculate(){
//     return 10
// }
// const res = calculate()
// console.log(res);

// console.log(calculate());