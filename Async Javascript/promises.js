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

let obj = {
    onlineFriends: ['Fr1', 'Fr2', 'Fr3'],
    address: {
        city: 'Delhi', 
        pin: 812005
    },
    messageCount: 5
}

// console.log(obj.onlineFriends);

let a = 10
let arr = [12,3,4]



// json methods
// convert object to json 
// convert json to object

const user = {
    username: 'abhinav',
    password: '12345',
    classes: ['mon', 'tues', 'wed']
};
console.log(user);
console.log(user.classes);

// from FE to BE
// convert the object into JSON
const userJson = JSON.stringify(user);
console.log(userJson);

// to convert the json type into Object 
const userObj = JSON.parse(userJson);
console.log(userObj);


// fetch API which is available in JS by the browser
// it is used to make api calls
// will call as function and pass the URL of the api that we want to call
// on calling fetch by default it returns a promise
// on successful call it will resolve and returns a response object

fetch("https://jsonplaceholder.typicode.com/albums")
.then((res) => {
    console.log('promise success 1');
    console.log(res);
    const returnedRes = res.json();
    return returnedRes
    // returnedRes
    // .then((data) => {
    //     console.log(data);
        
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
})
.then((data)=>{
    console.log('promise success 2');
    console.log(data);
})
.catch((err) => {
    console.log('from catch');
    console.log(err);
})
.finally(() => {
    console.log('completed');
})



// if(true){
//     if(true){

//     }
// }else{
//     console.log('false');
// }

const getNotification = (username) => {
    const promise =  new Promise((res, rej) => {
        if(username !== ''){
            res('you have 10 new notification')
        } else{
            rej('username cant be empty')
        }
    });
    return promise
}

const getMessage = (username) => {
    const promise =  new Promise((res, rej) => {
        if(username !== ''){
            res('you have 5 messages')
        } else{
            rej('username cant be empty for getting messages')
        }
    });
    return promise
}

const getPosts = (username) => {
    const promise =  new Promise((res, rej) => {
        if(username !== ''){
            res(['post1', 'post2', 'post3'])
        } else{
            rej('username cant be empty for getting posts')
        }
    });
    return promise
}

// promise 1
// getNotification('abhinav')
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

// promise 2
// getMessage('abhinav')
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })

// // promise 3
// getPosts('abhinav')
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })


// Promise.all()
// take multiple promises as arguments as array
// returns us an array of results recieved from promises when all promises are successful
// if any of the promises are failed then catch block will get executed
// the first failed promise error will be recieved in catch block

Promise.all([getNotification('abhinav'),getMessage(''),getPosts('')])
.then((value) => {
    console.log('success');
    console.log(value);
})
.catch((err) => {
    console.log('failure');
    console.log(err);
})

// promise.allSettled
// it returns an array of objects --> status, value in success case
// report card

Promise.allSettled([getNotification(''),getMessage(''),getPosts('')])
.then((value) => {
    console.log('success');
    console.log(value);
})
.catch((err) => {
    console.log('failure');
    console.log(err);
})

// it is exact vice versa of promise.all
// if any of the promise is successful then it will run then
Promise.any([getNotification(''),getMessage('abhinav'),getPosts('')])
.then((value) => {
    console.log('success');
    console.log(value);
})
.catch((err) => {
    console.log('failure');
    console.log(err);
})


// whoever first either resolves or rejects
Promise.race([getNotification('abhinav'),getMessage('abhinav'),getPosts('')])
.then((value) => {
    console.log('success');
    console.log(value);
})
.catch((err) => {
    console.log('failure');
    console.log(err);
})
*/

const getNotification = (username) => {
    const promise =  new Promise((res, rej) => {
        if(username !== ''){
            res('you have 10 new notification')
        } else{
            rej('username cant be empty')
        }
    });
    return promise
}

const getMessage = (username) => {
    const promise =  new Promise((res, rej) => {
        if(username !== ''){
            res('you have 5 messages')
        } else{
            rej('username cant be empty for getting messages')
        }
    });
    return promise
}

const getPosts = (username) => {
    const promise =  new Promise((res, rej) => {
        if(username !== ''){
            res(['post1', 'post2', 'post3'])
        } else{
            rej('username cant be empty for getting posts')
        }
    });
    return promise
}


// getNotification('abhinav')
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('always run');
// })


// async await --> handling of promises
// by putting a await before the function call which returns a promise
// you should make the function where the async code is present as async function

const makeApiCalls = async() => {
    try{
        console.log('start');
        // if promise gets resolved 
        // we get the resolved value, stored inside data variable
        // if error is thrown then 
        // no further code will be executed and we will jump to catch block
        const data = await getNotification('abhinav');
        console.log(data);
        console.log('end');
    }catch(err){
        console.log(err);
    }finally{
        console.log('it will always run');
    }
}

makeApiCalls()